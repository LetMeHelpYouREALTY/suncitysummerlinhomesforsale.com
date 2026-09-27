/** Minimal Google Maps JS types for the amenity map (full types via @types/google.maps optional). */
declare namespace google.maps {
  class Map {
    constructor(el: HTMLElement, opts?: MapOptions);
  }
  class Marker {
    constructor(opts?: MarkerOptions);
    setMap(map: Map | null): void;
    addListener(event: string, handler: () => void): void;
  }
  class InfoWindow {
    constructor(opts?: { content?: string });
    setContent(content: string): void;
    open(opts: { map: Map; position?: LatLngLiteral; anchor?: Marker }): void;
  }
  interface MapOptions {
    center?: LatLngLiteral;
    zoom?: number;
    mapId?: string;
    disableDefaultUI?: boolean;
    fullscreenControl?: boolean;
    streetViewControl?: boolean;
  }
  interface MarkerOptions {
    map?: Map;
    position?: LatLngLiteral;
    title?: string;
    label?: { text: string; color?: string; fontSize?: string };
    zIndex?: number;
  }
  interface LatLngLiteral {
    lat: number;
    lng: number;
  }
  function importLibrary(name: "places"): Promise<PlacesLibrary>;
  namespace places {
    class PlacesService {
      constructor(map: Map);
      nearbySearch(
        request: PlaceSearchRequest,
        callback: (
          results: PlaceResult[] | null,
          status: PlacesServiceStatus
        ) => void
      ): void;
    }
    enum PlacesServiceStatus {
      OK = "OK",
    }
    interface PlaceSearchRequest {
      location: LatLngLiteral;
      radius: number;
      type?: string;
    }
    interface PlaceResult {
      name?: string;
      vicinity?: string;
      rating?: number;
      geometry?: { location?: { lat(): number; lng(): number } };
    }
  }
  interface PlacesLibrary {
    Place: {
      searchNearby: (request: {
        fields: string[];
        locationRestriction: { center: LatLngLiteral; radius: number };
        includedPrimaryTypes: string[];
        maxResultCount: number;
      }) => Promise<{
        places: Array<{
          displayName?: string | { text?: string };
          formattedAddress?: string;
          location?: { lat(): number; lng(): number };
          rating?: number;
          googleMapsURI?: string;
        }>;
      }>;
    };
  }
}

interface Window {
  google?: {
    maps: typeof google.maps;
  };
}
