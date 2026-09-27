import type { AmenityCategoryDefinition, AmenityCategoryId } from "./types";

export const AMENITY_CATEGORY_DEFINITIONS: Record<
  AmenityCategoryId,
  AmenityCategoryDefinition
> = {
  healthcare: {
    id: "healthcare",
    label: "Healthcare",
    primaryTypes: ["hospital", "doctor", "medical_clinic"],
    legacyType: "hospital",
  },
  golf: {
    id: "golf",
    label: "Golf",
    primaryTypes: ["golf_course"],
    legacyType: "golf_course",
  },
  parks: {
    id: "parks",
    label: "Parks",
    primaryTypes: ["park", "national_park"],
    legacyType: "park",
  },
  community: {
    id: "community",
    label: "Recreation",
    primaryTypes: ["community_center", "sports_complex"],
    legacyType: "gym",
  },
  grocery: {
    id: "grocery",
    label: "Grocery",
    primaryTypes: ["supermarket", "grocery_store"],
    legacyType: "grocery_or_supermarket",
  },
  restaurants: {
    id: "restaurants",
    label: "Restaurants",
    primaryTypes: ["restaurant"],
    legacyType: "restaurant",
  },
  cafes: {
    id: "cafes",
    label: "Cafes",
    primaryTypes: ["cafe", "coffee_shop"],
    legacyType: "cafe",
  },
  pharmacies: {
    id: "pharmacies",
    label: "Pharmacies",
    primaryTypes: ["pharmacy", "drugstore"],
    legacyType: "pharmacy",
  },
  shopping: {
    id: "shopping",
    label: "Shopping",
    primaryTypes: ["shopping_mall", "department_store"],
    legacyType: "shopping_mall",
  },
  fitness: {
    id: "fitness",
    label: "Fitness",
    primaryTypes: ["gym", "fitness_center"],
    legacyType: "gym",
  },
  parking: {
    id: "parking",
    label: "Parking",
    primaryTypes: ["parking"],
    legacyType: "parking",
  },
};

/** 55+ communities: healthcare and recreation first; schools omitted from map UI */
export const CATEGORY_ORDER_55PLUS: AmenityCategoryId[] = [
  "healthcare",
  "golf",
  "parks",
  "community",
  "grocery",
  "pharmacies",
  "restaurants",
  "cafes",
  "shopping",
  "fitness",
  "parking",
];

export const CATEGORY_ORDER_DEFAULT: AmenityCategoryId[] = [
  "restaurants",
  "cafes",
  "grocery",
  "shopping",
  "parking",
  "fitness",
  "parks",
  "healthcare",
  "pharmacies",
  "golf",
  "community",
];
