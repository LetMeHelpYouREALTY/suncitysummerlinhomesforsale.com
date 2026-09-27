import type { CommunityAmenityConfig, CuratedPlace } from "./types";
import { getSiteBaseUrl } from "./get-community-config";
import type { DomainConfig } from "@/lib/domain-config";

function placeListItem(place: CuratedPlace, position: number) {
  return {
    "@type": "ListItem",
    position,
    item: {
      "@type": place.schemaType,
      name: place.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: place.address,
      },
      ...(place.lat !== undefined &&
        place.lng !== undefined && {
          geo: {
            "@type": "GeoCoordinates",
            latitude: place.lat,
            longitude: place.lng,
          },
        }),
    },
  };
}

export function buildAmenitiesPageSchema(
  community: CommunityAmenityConfig,
  domainConfig: DomainConfig
) {
  const baseUrl = getSiteBaseUrl(domainConfig);
  const pageUrl = `${baseUrl}/amenities`;

  const featuredPlaces = community.curatedPlaces.filter(
    (p) => p.name !== community.communityName
  );

  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: baseUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Nearby Amenities",
          item: pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      name: community.communityName,
      address: {
        "@type": "PostalAddress",
        streetAddress: community.centerAddress,
        addressLocality: community.city,
        addressRegion: community.state,
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: community.center.lat,
        longitude: community.center.lng,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: `Featured places near ${community.communityName}`,
      itemListElement: featuredPlaces.map((place, index) =>
        placeListItem(place, index + 1)
      ),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: community.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      name: "Dr. Jan Duffy",
      jobTitle: "REALTOR®",
      telephone: "+17022221964",
      email: "homes@heyberkshire.com",
      identifier: "S.0197614.LLC",
      worksFor: {
        "@type": "Organization",
        name: "Berkshire Hathaway HomeServices Nevada Properties",
      },
      areaServed: {
        "@type": "Place",
        name: community.communityName,
        address: {
          "@type": "PostalAddress",
          addressLocality: community.city,
          addressRegion: community.state,
        },
      },
      url: baseUrl,
    },
  ];
}
