import type { DomainConfig } from "@/lib/domain-config";

export type AmenityCategoryId =
  | "healthcare"
  | "golf"
  | "parks"
  | "community"
  | "grocery"
  | "restaurants"
  | "cafes"
  | "pharmacies"
  | "shopping"
  | "fitness"
  | "parking";

export type CuratedPlace = {
  name: string;
  category: AmenityCategoryId;
  address: string;
  schemaType: string;
  lat?: number;
  lng?: number;
  note?: string;
};

export type AmenityFaq = {
  question: string;
  answer: string;
};

export type CommunityAmenityConfig = {
  communityName: string;
  city: string;
  state: string;
  /** Documented center point (e.g. HOA / welcome address) */
  center: { lat: number; lng: number };
  centerAddress: string;
  centerSourceNote: string;
  pageType: DomainConfig["pageType"];
  categoryOrder: AmenityCategoryId[];
  includeSchoolsOnMap: boolean;
  curatedPlaces: CuratedPlace[];
  categoryCopy: Partial<
    Record<
      AmenityCategoryId,
      { title: string; paragraphs: string[] }
    >
  >;
  commuteNotes: { destination: string; note: string }[];
  faqs: AmenityFaq[];
};

export type AmenityCategoryDefinition = {
  id: AmenityCategoryId;
  label: string;
  /** Places API (New) primary types */
  primaryTypes: string[];
  /** Legacy Places nearbySearch type */
  legacyType?: string;
};
