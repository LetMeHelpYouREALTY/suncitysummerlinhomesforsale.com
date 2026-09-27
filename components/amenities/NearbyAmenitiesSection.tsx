import Link from "next/link";
import dynamic from "next/dynamic";
import { getPageDomainConfig } from "@/lib/get-domain-config";
import { getCommunityAmenityConfig } from "@/lib/amenities/get-community-config";
import { ArrowRight, MapPinned } from "lucide-react";

const AmenityMap = dynamic(() => import("./AmenityMap"), {
  ssr: false,
  loading: () => (
    <div
      className="w-full rounded-xl bg-slate-100 animate-pulse border border-slate-200"
      style={{ height: 420 }}
      aria-busy="true"
      aria-label="Loading amenity map"
    />
  ),
});

export default async function NearbyAmenitiesSection() {
  const domainConfig = await getPageDomainConfig();
  const community = getCommunityAmenityConfig(domainConfig);

  if (!community) {
    return null;
  }

  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm mb-2">
                <MapPinned className="h-4 w-4" aria-hidden="true" />
                What&apos;s Nearby
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Life Near {community.communityName}
              </h2>
              <p className="text-slate-600 mt-2 max-w-2xl">
                Explore healthcare, golf, grocery, and recreation around{" "}
                {community.communityName} in {community.city}. Switch categories on the
                map to plan errands, medical visits, and outings.
              </p>
            </div>
            <Link
              href="/amenities"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md px-2 py-1"
            >
              Full amenities guide
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <AmenityMap community={community} compact />
        </div>
      </div>
    </section>
  );
}
