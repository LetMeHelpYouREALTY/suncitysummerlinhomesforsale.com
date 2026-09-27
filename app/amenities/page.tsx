import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import AmenityMap from "@/components/amenities/AmenityMap";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Phone, MapPin, Shield } from "lucide-react";
import { getPageDomainConfig } from "@/lib/get-domain-config";
import {
  getCommunityAmenityConfig,
  getSiteBaseUrl,
} from "@/lib/amenities/get-community-config";
import { AMENITY_CATEGORY_DEFINITIONS } from "@/lib/amenities/categories";
import { buildAmenitiesPageSchema } from "@/lib/amenities/schema";
import type { AmenityCategoryId } from "@/lib/amenities/types";

export async function generateMetadata(): Promise<Metadata> {
  const domainConfig = await getPageDomainConfig();
  const community = getCommunityAmenityConfig(domainConfig);
  if (!community) {
    return { title: "Nearby Amenities" };
  }

  const baseUrl = getSiteBaseUrl(domainConfig);
  const title = `Nearby Amenities in ${community.communityName}, ${community.city} | Dr. Jan Duffy`;
  const description = `Interactive map and local guide to dining, golf, healthcare, grocery, and recreation near ${community.communityName} in ${community.city}, NV. Berkshire Hathaway HomeServices.`;

  return {
    title,
    description,
    alternates: { canonical: `${baseUrl}/amenities` },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/amenities`,
      type: "website",
    },
  };
}

export default async function AmenitiesPage() {
  const domainConfig = await getPageDomainConfig();
  const community = getCommunityAmenityConfig(domainConfig);

  if (!community) {
    notFound();
  }

  const schemas = buildAmenitiesPageSchema(community, domainConfig);

  const copySections = community.categoryOrder.filter(
    (id) => community.categoryCopy[id]
  ) as AmenityCategoryId[];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-slate-500 mb-6 max-w-6xl mx-auto" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            {" / "}
            <span className="text-slate-900">Nearby Amenities</span>
          </nav>

          <header className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Nearby Amenities in {community.communityName}, {community.city}
            </h1>
            <p className="text-lg text-slate-600">
              Hyperlocal map and guide for active adult living in northwest Las Vegas—
              healthcare, golf, grocery, shopping, and recreation with approximate drive
              times to key destinations.
            </p>
            <p className="text-sm text-slate-500 mt-3">
              Map center: {community.centerAddress} ({community.centerSourceNote})
            </p>
          </header>

          <div className="max-w-6xl mx-auto mb-16">
            <AmenityMap community={community} />
          </div>

          <div className="max-w-4xl mx-auto space-y-12 mb-16">
            {copySections.map((categoryId) => {
              const copy = community.categoryCopy[categoryId];
              if (!copy) return null;
              const label = AMENITY_CATEGORY_DEFINITIONS[categoryId].label;
              return (
                <section key={categoryId} aria-labelledby={`amenity-copy-${categoryId}`}>
                  <h2
                    id={`amenity-copy-${categoryId}`}
                    className="text-2xl font-bold text-slate-900 mb-4"
                  >
                    {copy.title}
                  </h2>
                  {copy.paragraphs.map((paragraph, i) => (
                    <p key={i} className="text-slate-700 mb-3 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </section>
              );
            })}

            <section aria-labelledby="commute-heading">
              <h2 id="commute-heading" className="text-2xl font-bold text-slate-900 mb-4">
                Approximate drive times from {community.communityName}
              </h2>
              <p className="text-sm text-slate-500 mb-4">
                Times are approximate and vary with traffic, time of day, and your village
                within the community.
              </p>
              <ul className="space-y-3">
                {community.commuteNotes.map((note) => (
                  <li
                    key={note.destination}
                    className="rounded-lg border border-slate-200 bg-white p-4"
                  >
                    <p className="font-semibold text-slate-900">{note.destination}</p>
                    <p className="text-slate-600 text-sm mt-1">{note.note}</p>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section
            className="max-w-4xl mx-auto mb-16"
            aria-labelledby="amenities-faq-heading"
          >
            <h2 id="amenities-faq-heading" className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <dl className="space-y-6">
              {community.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-xl border border-slate-200 bg-white p-6"
                >
                  <dt className="font-semibold text-slate-900 text-lg">{faq.question}</dt>
                  <dd className="text-slate-700 mt-2">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="max-w-4xl mx-auto bg-blue-600 text-white rounded-2xl p-8 md:p-12 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Shield className="h-4 w-4" aria-hidden="true" />
              Sun City Summerlin Specialist
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Work with Dr. Jan Duffy on your {community.communityName} move
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Berkshire Hathaway HomeServices Nevada Properties — tours, HOA questions,
              resale insights, and negotiation on every Sun City Summerlin listing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17022221964"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call 702-222-1964
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 px-8 py-4 rounded-md font-bold text-lg transition-colors"
              >
                <MapPin className="h-5 w-5" aria-hidden="true" />
                Contact Dr. Jan
              </Link>
            </div>
            <p className="mt-6 text-blue-200 text-sm">
              Dr. Jan Duffy | License S.0197614.LLC | Berkshire Hathaway HomeServices Nevada
              Properties
            </p>
            <p className="mt-2 text-blue-200 text-xs">
              Office: 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
