import { headers } from "next/headers";
import type { DomainConfig } from "./domain-config";
import { getDomainConfig, PRIMARY_SITE_DOMAIN } from "./domain-config";

/** Hostname from middleware or deployment env (no protocol). */
export function resolveRequestHostname(rawHost: string): string {
  const fromHeader = rawHost
    .replace(/^www\./, "")
    .toLowerCase()
    .split(":")[0];
  if (fromHeader) return fromHeader;

  const vercelUrl = process.env.VERCEL_URL;
  if (vercelUrl) return vercelUrl.toLowerCase();

  return PRIMARY_SITE_DOMAIN;
}

export function getSiteBaseUrl(config: DomainConfig): string {
  if (config.domain && config.domain !== "default") {
    return `https://${config.domain}`;
  }
  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (production) {
    return production.startsWith("http")
      ? production.replace(/\/$/, "")
      : `https://${production}`;
  }
  return `https://${PRIMARY_SITE_DOMAIN}`;
}

export async function getPageSiteContext(): Promise<{
  config: DomainConfig;
  baseUrl: string;
}> {
  const headersList = await headers();
  const hostname = resolveRequestHostname(headersList.get("x-domain") || "");
  const config = getDomainConfig(hostname);
  return { config, baseUrl: getSiteBaseUrl(config) };
}

export function buildSiteTitle(config: DomainConfig): string {
  if (config.domain === "suncitysummerlinhomesforsale.com") {
    return "Sun City Summerlin 55+ Homes | Dr. Jan Duffy";
  }
  if (config.pageType === "55plus") {
    return `${config.neighborhood} 55+ Homes | Dr. Jan Duffy`;
  }
  return `${config.neighborhood} Homes | Dr. Jan Duffy, REALTOR®`;
}

export function buildSiteDescription(config: DomainConfig): string {
  if (config.domain === "suncitysummerlinhomesforsale.com") {
    return "Search Sun City Summerlin homes in Las Vegas's premier 55+ active adult community. Dr. Jan Duffy, REALTOR®, guides buyers and sellers. Call 702-222-1964.";
  }
  const base = config.description.trim();
  if (base.length >= 120) return base.slice(0, 160);
  const suffix =
    " Dr. Jan Duffy, REALTOR® at Berkshire Hathaway HomeServices Nevada Properties.";
  const combined = `${base}${suffix}`;
  return combined.length <= 160 ? combined : base;
}
