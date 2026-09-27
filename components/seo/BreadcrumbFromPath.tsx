import { headers } from "next/headers";
import SchemaScript from "@/components/SchemaScript";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { getPageSiteContext } from "@/lib/site-url";

const SEGMENT_LABELS: Record<string, string> = {
  "55-plus-communities": "55+ Communities",
  "sun-city-summerlin": "Sun City Summerlin",
  "sun-city-anthem": "Sun City Anthem",
  "sun-city-aliante": "Sun City Aliante",
  "first-time-buyers": "First-Time Buyers",
  "luxury-homes-las-vegas": "Luxury Homes",
  "california-relocator": "California Relocator",
  "home-valuation": "Home Valuation",
  "market-report": "Market Report",
  "market-update": "Market Update",
  "market-insights": "Market Insights",
  "new-construction": "New Construction",
  "investment-properties": "Investment Properties",
  "google-business": "Google Business",
  "security-policy": "Security Policy",
  "why-berkshire-hathaway": "Why Berkshire Hathaway",
  "luxury-homes": "Luxury Homes",
  "southern-highlands": "Southern Highlands",
  "north-las-vegas": "North Las Vegas",
  "centennial-hills": "Centennial Hills",
  "mountains-edge": "Mountain's Edge",
  "green-valley": "Green Valley",
  "skye-canyon": "Skye Canyon",
  "the-ridges": "The Ridges",
  "divorce-probate": "Divorce & Probate",
  "move-up": "Move-Up Sellers",
};

function labelForSegment(segment: string): string {
  if (SEGMENT_LABELS[segment]) return SEGMENT_LABELS[segment];
  return segment
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export default async function BreadcrumbFromPath() {
  const pathname = headers().get("x-pathname") || "/";
  if (pathname === "/" || pathname === "") return null;

  const { baseUrl } = await getPageSiteContext();
  const segments = pathname.split("/").filter(Boolean);

  const items = [{ name: "Home", url: "/" }];
  let pathSoFar = "";

  for (const segment of segments) {
    pathSoFar += `/${segment}`;
    items.push({ name: labelForSegment(segment), url: pathSoFar });
  }

  return (
    <SchemaScript
      id="breadcrumb-from-path"
      schema={generateBreadcrumbSchema(items, baseUrl)}
    />
  );
}
