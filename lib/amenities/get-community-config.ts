import type { DomainConfig } from "@/lib/domain-config";
import { SUN_CITY_SUMMERLIN_AMENITY_CONFIG } from "./sun-city-summerlin";
import type { CommunityAmenityConfig } from "./types";

export function getCommunityAmenityConfig(
  domainConfig: DomainConfig
): CommunityAmenityConfig | null {
  const isSunCity =
    domainConfig.neighborhood === "Sun City Summerlin" ||
    domainConfig.domain === "suncitysummerlinhomesforsale.com";

  if (isSunCity) {
    return SUN_CITY_SUMMERLIN_AMENITY_CONFIG;
  }

  return null;
}

export function getSiteBaseUrl(domainConfig: DomainConfig): string {
  if (domainConfig.domain && domainConfig.domain !== "default") {
    return `https://${domainConfig.domain}`;
  }
  return "https://heyberkshire.com";
}
