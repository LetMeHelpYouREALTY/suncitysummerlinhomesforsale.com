"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { AMENITY_CATEGORY_DEFINITIONS } from "@/lib/amenities/categories";
import type { AmenityCategoryId, CommunityAmenityConfig } from "@/lib/amenities/types";
import { MapPin, Navigation, Star } from "lucide-react";

const MAP_HEIGHT_PX = 420;
const SEARCH_RADIUS_M = 8000;

type MapPlace = {
  id: string;
  name: string;
  address?: string;
  rating?: number;
  lat: number;
  lng: number;
  directionsUrl: string;
};

type AmenityMapProps = {
  community: CommunityAmenityConfig;
  /** Shorter list in section previews */
  compact?: boolean;
};

function getApiKey(): string | undefined {
  return process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim() || undefined;
}

function getMapId(): string | undefined {
  return process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID?.trim() || undefined;
}

function buildDirectionsUrl(lat: number, lng: number, name?: string): string {
  const label = name ? encodeURIComponent(name) : `${lat},${lng}`;
  return `https://www.google.com/maps/dir/?api=1&destination=${label}&destination_place_id=`;
}

function buildEmbedUrl(lat: number, lng: number): string {
  return `https://www.google.com/maps?q=${lat},${lng}&z=14&output=embed`;
}

function loadGoogleMapsScript(apiKey: string): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("no window"));
  }
  if (window.google?.maps) {
    return Promise.resolve();
  }

  const existing = document.querySelector<HTMLScriptElement>(
    'script[data-amenity-map="google-maps"]'
  );
  if (existing) {
    return new Promise((resolve, reject) => {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("script error")));
    });
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&loading=async`;
    script.async = true;
    script.defer = true;
    script.dataset.amenityMap = "google-maps";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Google Maps failed to load"));
    document.head.appendChild(script);
  });
}

function curatedToMapPlaces(
  community: CommunityAmenityConfig,
  category: AmenityCategoryId
): MapPlace[] {
  return community.curatedPlaces
    .filter((p) => p.category === category && p.lat !== undefined && p.lng !== undefined)
    .map((p) => ({
      id: `curated-${p.name}`,
      name: p.name,
      address: p.address,
      lat: p.lat as number,
      lng: p.lng as number,
      directionsUrl: buildDirectionsUrl(p.lat as number, p.lng as number, p.name),
    }));
}

async function searchNearbyPlaces(
  map: google.maps.Map,
  category: AmenityCategoryId,
  center: google.maps.LatLngLiteral
): Promise<MapPlace[]> {
  const def = AMENITY_CATEGORY_DEFINITIONS[category];
  const g = window.google;

  if (!g?.maps) {
    return [];
  }

  try {
    const placesLib = (await g.maps.importLibrary("places")) as google.maps.PlacesLibrary;
    const PlaceCtor = placesLib.Place;
    if (PlaceCtor && typeof PlaceCtor.searchNearby === "function") {
      const { places } = await PlaceCtor.searchNearby({
        fields: [
          "displayName",
          "formattedAddress",
          "location",
          "rating",
          "googleMapsURI",
        ],
        locationRestriction: {
          center,
          radius: SEARCH_RADIUS_M,
        },
        includedPrimaryTypes: def.primaryTypes,
        maxResultCount: 15,
      });

      const mapped: MapPlace[] = [];
      places.forEach((place, index) => {
        const loc = place.location;
        if (!loc) return;
        const lat = loc.lat();
        const lng = loc.lng();
        const rawName = place.displayName;
        const name =
          typeof rawName === "string" ? rawName : rawName?.text ?? "Place";
        mapped.push({
          id: `new-${category}-${index}`,
          name,
          address: place.formattedAddress,
          rating: place.rating,
          lat,
          lng,
          directionsUrl:
            place.googleMapsURI ?? buildDirectionsUrl(lat, lng, name),
        });
      });
      return mapped;
    }
  } catch {
    // Fall through to legacy nearbySearch
  }

  return new Promise((resolve) => {
    const service = new g.maps.places.PlacesService(map);
    const request: google.maps.places.PlaceSearchRequest = {
      location: center,
      radius: SEARCH_RADIUS_M,
      type: def.legacyType,
    };

    service.nearbySearch(request, (results, status) => {
      if (status !== g.maps.places.PlacesServiceStatus.OK || !results) {
        resolve([]);
        return;
      }

      resolve(
        results.slice(0, 15).map((result, index) => {
          const loc = result.geometry?.location;
          const lat = loc?.lat() ?? center.lat;
          const lng = loc?.lng() ?? center.lng;
          return {
            id: `legacy-${category}-${index}`,
            name: result.name ?? "Place",
            address: result.vicinity,
            rating: result.rating,
            lat,
            lng,
            directionsUrl: buildDirectionsUrl(lat, lng, result.name),
          };
        })
      );
    });
  });
}

export default function AmenityMap({ community, compact = false }: AmenityMapProps) {
  const apiKey = getApiKey();
  const mapId = getMapId();
  const categories = community.categoryOrder;
  const [activeCategory, setActiveCategory] = useState<AmenityCategoryId>(
    categories[0]
  );
  const [isVisible, setIsVisible] = useState(false);
  const [mapReady, setMapReady] = useState(false);
  const [loadFailed, setLoadFailed] = useState(!apiKey);
  const [places, setPlaces] = useState<MapPlace[]>([]);
  const [loadingPlaces, setLoadingPlaces] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const communityMarkerRef = useRef<google.maps.Marker | null>(null);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);
  const tablistId = useId();

  const center = community.center;

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "120px", threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const clearMarkers = useCallback(() => {
    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = [];
    communityMarkerRef.current?.setMap(null);
    communityMarkerRef.current = null;
  }, []);

  const showInfo = useCallback((map: google.maps.Map, place: MapPlace) => {
    if (!window.google?.maps) return;
    if (!infoWindowRef.current) {
      infoWindowRef.current = new window.google.maps.InfoWindow();
    }
    const ratingLine =
      place.rating !== undefined
        ? `<p style="margin:4px 0;font-size:13px">Rating: ${place.rating.toFixed(1)}</p>`
        : "";
    const addressLine = place.address
      ? `<p style="margin:4px 0;font-size:13px;color:#475569">${place.address}</p>`
      : "";
    infoWindowRef.current.setContent(
      `<div style="max-width:220px;padding:4px">
        <strong>${place.name}</strong>
        ${ratingLine}
        ${addressLine}
        <a href="${place.directionsUrl}" target="_blank" rel="noopener noreferrer" style="font-size:13px;color:#2563eb">Directions</a>
      </div>`
    );
    infoWindowRef.current.open({
      anchor: undefined,
      map,
      position: { lat: place.lat, lng: place.lng },
    });
  }, []);

  const renderMarkers = useCallback(
    (map: google.maps.Map, list: MapPlace[]) => {
      if (!window.google?.maps) return;
      clearMarkers();

      const communityMarker = new window.google.maps.Marker({
        map,
        position: center,
        title: community.communityName,
        label: {
          text: "★",
          color: "#ffffff",
          fontSize: "14px",
        },
        zIndex: 1000,
      });
      communityMarkerRef.current = communityMarker;
      communityMarker.addListener("click", () => {
        showInfo(map, {
          id: "community",
          name: community.communityName,
          address: community.centerAddress,
          lat: center.lat,
          lng: center.lng,
          directionsUrl: buildDirectionsUrl(center.lat, center.lng, community.communityName),
        });
      });

      list.forEach((place) => {
        const marker = new window.google.maps.Marker({
          map,
          position: { lat: place.lat, lng: place.lng },
          title: place.name,
        });
        marker.addListener("click", () => showInfo(map, place));
        markersRef.current.push(marker);
      });
    },
    [center, clearMarkers, community.communityName, community.centerAddress, showInfo]
  );

  useEffect(() => {
    if (!isVisible || loadFailed || !apiKey || !mapContainerRef.current) {
      return;
    }

    let cancelled = false;

    (async () => {
      try {
        await loadGoogleMapsScript(apiKey);
        if (cancelled || !mapContainerRef.current) return;

        const g = window.google;
        if (!g?.maps) {
          setLoadFailed(true);
          return;
        }

        if (!mapRef.current) {
          mapRef.current = new g.maps.Map(mapContainerRef.current, {
            center,
            zoom: 13,
            mapId: mapId || undefined,
            disableDefaultUI: false,
            fullscreenControl: true,
            streetViewControl: false,
          });
        }

        setMapReady(true);
      } catch {
        setLoadFailed(true);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [apiKey, center, isVisible, loadFailed, mapId]);

  useEffect(() => {
    if (!mapReady || loadFailed || !mapRef.current) return;

    const map = mapRef.current;
    let cancelled = false;

    (async () => {
      setLoadingPlaces(true);
      try {
        let results: MapPlace[] = [];
        if (activeCategory === "community") {
          results = curatedToMapPlaces(community, "community");
        } else {
          results = await searchNearbyPlaces(map, activeCategory, center);
          const curated = curatedToMapPlaces(community, activeCategory);
          const seen = new Set(results.map((r) => r.name.toLowerCase()));
          curated.forEach((c) => {
            if (!seen.has(c.name.toLowerCase())) {
              results.push(c);
            }
          });
        }
        if (!cancelled) {
          setPlaces(results);
          renderMarkers(map, results);
        }
      } catch {
        if (!cancelled) {
          const fallback = curatedToMapPlaces(community, activeCategory);
          setPlaces(fallback);
          renderMarkers(map, fallback);
        }
      } finally {
        if (!cancelled) setLoadingPlaces(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [
    activeCategory,
    center,
    community,
    loadFailed,
    mapReady,
    renderMarkers,
  ]);

  const staticForCategory = community.curatedPlaces.filter(
    (p) => p.category === activeCategory || (activeCategory === "community" && p.category === "community")
  );

  const listLimit = compact ? 4 : 12;

  return (
    <section ref={sectionRef} aria-label={`Map of amenities near ${community.communityName}`}>
      <div
        role="tablist"
        id={tablistId}
        aria-label="Amenity categories"
        className="flex flex-wrap gap-2 mb-4"
      >
        {categories.map((catId) => {
          const def = AMENITY_CATEGORY_DEFINITIONS[catId];
          const selected = activeCategory === catId;
          return (
            <button
              key={catId}
              type="button"
              role="tab"
              id={`${tablistId}-${catId}`}
              aria-selected={selected}
              aria-controls={`${tablistId}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveCategory(catId)}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${
                selected
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {def.label}
            </button>
          );
        })}
      </div>

      <div
        id={`${tablistId}-panel`}
        role="tabpanel"
        aria-labelledby={`${tablistId}-${activeCategory}`}
        className="rounded-xl overflow-hidden border border-slate-200 bg-slate-50"
        style={{ minHeight: MAP_HEIGHT_PX }}
      >
        {loadFailed ? (
          <iframe
            title={`Map of ${community.communityName}`}
            src={buildEmbedUrl(center.lat, center.lng)}
            className="w-full border-0"
            style={{ height: MAP_HEIGHT_PX }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <div
            ref={mapContainerRef}
            className="w-full bg-slate-200"
            style={{ height: MAP_HEIGHT_PX }}
            aria-busy={!mapReady || loadingPlaces}
            aria-label={`Interactive map showing ${AMENITY_CATEGORY_DEFINITIONS[activeCategory].label} near ${community.communityName}`}
          />
        )}
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-3">
          {AMENITY_CATEGORY_DEFINITIONS[activeCategory].label} near {community.communityName}
        </h3>
        {loadingPlaces && !loadFailed && (
          <p className="text-sm text-slate-500 mb-2" aria-live="polite">
            Loading places…
          </p>
        )}
        <ul className="grid sm:grid-cols-2 gap-3">
          {(places.length > 0
            ? places.slice(0, listLimit).map((p) => ({
                name: p.name,
                address: p.address,
                rating: p.rating,
                directionsUrl: p.directionsUrl,
              }))
            : staticForCategory.slice(0, listLimit).map((p) => ({
                name: p.name,
                address: p.address,
                rating: undefined,
                directionsUrl: buildDirectionsUrl(
                  p.lat ?? center.lat,
                  p.lng ?? center.lng,
                  p.name
                ),
              }))
          ).map((item) => (
            <li
              key={item.name}
              className="flex gap-3 rounded-lg border border-slate-200 bg-white p-4 text-sm"
            >
              <MapPin className="h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
              <div className="min-w-0">
                <p className="font-medium text-slate-900">{item.name}</p>
                {item.address && (
                  <p className="text-slate-600 mt-0.5">{item.address}</p>
                )}
                {item.rating !== undefined && (
                  <p className="flex items-center gap-1 text-amber-600 mt-1">
                    <Star className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                    <span>{item.rating.toFixed(1)}</span>
                  </p>
                )}
                <a
                  href={item.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-600 hover:underline mt-2"
                >
                  <Navigation className="h-3.5 w-3.5" aria-hidden="true" />
                  Directions
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
