import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  Phone,
  MapPin,
  DollarSign,
  Trophy,
  Dumbbell,
  Users,
  CheckCircle,
  Car,
  TrendingUp,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sun City Aliante Homes for Sale | Most Affordable Sun City | Dr. Jan Duffy",
  description:
    "Sun City Aliante - the most affordable Sun City in Las Vegas. Homes from $280K-$550K with full amenities. 18-hole golf course, pools, fitness center. Dr. Jan Duffy, BHHS. Call (702) 500-1955.",
  keywords: [
    "Sun City Aliante homes for sale",
    "Sun City Aliante Las Vegas",
    "55 plus communities North Las Vegas",
    "affordable 55+ community Las Vegas",
    "Sun City Aliante HOA fees",
    "Berkshire Hathaway Sun City Aliante",
  ],
  openGraph: {
    title: "Sun City Aliante - Most Affordable Sun City in Las Vegas",
    description:
      "Full amenities at the lowest price point. Golf, pools, fitness, 100+ clubs. From $280K. Dr. Jan Duffy, BHHS Nevada Properties.",
    type: "website",
  },
};

const communitySchema = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "Sun City Aliante",
  description:
    "The most affordable Sun City community in Las Vegas with 2,800+ homes and full amenities",
  address: {
    "@type": "PostalAddress",
    addressLocality: "North Las Vegas",
    addressRegion: "NV",
    postalCode: "89084",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.2868,
    longitude: -115.1523,
  },
};

export default function SunCityAliantePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(communitySchema) }}
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="max-w-6xl mx-auto mb-6">
            <nav className="text-sm text-slate-500">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
              {" / "}
              <Link href="/55-plus-communities" className="hover:text-blue-600">
                55+ Communities
              </Link>
              {" / "}
              <span className="text-slate-900">Sun City Aliante</span>
            </nav>
          </div>

          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <DollarSign className="h-4 w-4 mr-2" />
              Most Affordable Sun City in Las Vegas
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Sun City Aliante
            </h1>
            <p className="text-xl text-slate-600">
              Full Sun City amenities at the best value. Golf, pools, fitness, and
              100+ clubs—from $280K.
            </p>
          </div>

          {/* Quick Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Sun City Aliante at a Glance
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">
                  $280K-$550K
                </div>
                <div className="text-slate-300 text-sm">Price Range</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">
                  $140-$175
                </div>
                <div className="text-slate-300 text-sm">Monthly HOA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">2,800+</div>
                <div className="text-slate-300 text-sm">Homes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">55+</div>
                <div className="text-slate-300 text-sm">Age Requirement</div>
              </div>
            </div>
          </section>

          {/* About */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                About Sun City Aliante
              </h2>
              <p>
                <strong>Sun City Aliante</strong> proves you don't have to
                sacrifice quality for value. Built by Del Webb from 2003-2010,
                this 2,800+ home community in North Las Vegas delivers the full
                Sun City experience—championship golf, resort pools, state-of-the-art
                fitness, and 100+ clubs—at the lowest price point of any Sun City
                in Las Vegas.
              </p>
              <p>
                The community's 18-hole championship golf course winds through the
                neighborhood, offering beautiful views and affordable resident
                rates. The 42,000 square foot recreation center rivals those of
                more expensive communities, with multiple pools, a fitness center,
                tennis and pickleball courts, and gathering spaces for the
                community's many clubs and activities.
              </p>
              <p>
                <strong>Berkshire Hathaway HomeServices Nevada Properties</strong>{" "}
                helps buyers understand why Sun City Aliante represents
                exceptional value. Dr. Jan Duffy guides clients through the
                community's various floor plans and helps identify homes that
                offer the best combination of features, location, and price.
              </p>
            </div>
          </section>

          {/* Value Proposition */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="bg-green-50 border-l-4 border-green-600 rounded-r-xl p-8">
              <div className="flex items-start">
                <TrendingUp className="h-8 w-8 text-green-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    Why Sun City Aliante Is the Best Value
                  </h3>
                  <p className="text-slate-700 mb-4">
                    Compare Sun City Aliante to other Sun City communities and the
                    value becomes clear. You get the same lifestyle, amenities,
                    and community feel—at significantly lower prices.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-sm text-slate-500 mb-1">
                        Sun City Aliante
                      </div>
                      <div className="text-xl font-bold text-green-600">
                        From $280K
                      </div>
                      <div className="text-xs text-slate-500">
                        HOA: $140-$175/mo
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-sm text-slate-500 mb-1">
                        Sun City Summerlin
                      </div>
                      <div className="text-xl font-bold text-slate-600">
                        From $320K
                      </div>
                      <div className="text-xs text-slate-500">
                        HOA: $155-$195/mo
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-sm text-slate-500 mb-1">
                        Sun City Anthem
                      </div>
                      <div className="text-xl font-bold text-slate-600">
                        From $350K
                      </div>
                      <div className="text-xs text-slate-500">
                        HOA: $180-$230/mo
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Amenities */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Full Sun City Amenities
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">
                  18-Hole Golf Course
                </h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Championship layout</li>
                  <li>• Affordable resident rates</li>
                  <li>• Pro shop & instruction</li>
                  <li>• Golf club memberships</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Dumbbell className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">
                  Recreation Center (42,000 sf)
                </h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Indoor & outdoor pools</li>
                  <li>• Modern fitness center</li>
                  <li>• Tennis & pickleball</li>
                  <li>• Ballroom & meeting rooms</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">
                  100+ Clubs & Activities
                </h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Sports leagues</li>
                  <li>• Arts & crafts</li>
                  <li>• Travel groups</li>
                  <li>• Social clubs</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Location Benefits */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Location Advantages
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-start">
                  <Car className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">
                      Easy Freeway Access
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Direct access to I-215 and US-95. Downtown Las Vegas and the
                      Strip are just 20-25 minutes away.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">
                      Aliante Casino & Hotel
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Walking distance to Aliante Casino with dining, entertainment,
                      and movie theater.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-start">
                  <DollarSign className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">
                      Lower Property Taxes
                    </h3>
                    <p className="text-slate-600 text-sm">
                      North Las Vegas offers some of the lowest property tax rates
                      in the valley.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-start">
                  <TrendingUp className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">
                      Growing Area
                    </h3>
                    <p className="text-slate-600 text-sm">
                      North Las Vegas is one of the fastest-growing cities in
                      Nevada with ongoing development and improvements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Sun City Aliante */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Why Buyers Choose Sun City Aliante
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900">
                    Lowest entry price of any Sun City
                  </strong>
                  <p className="text-slate-600 text-sm">
                    Homes starting around $280K—$40K-$70K less than other Sun City
                    communities
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900">
                    Lowest HOA fees in the Sun City family
                  </strong>
                  <p className="text-slate-600 text-sm">
                    $140-$175/month—up to $75/month less than other communities
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900">
                    Same amenities as more expensive communities
                  </strong>
                  <p className="text-slate-600 text-sm">
                    Golf, pools, fitness, 100+ clubs—everything you'd expect from
                    Sun City
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900">
                    Newer construction than Summerlin
                  </strong>
                  <p className="text-slate-600 text-sm">
                    Built 2003-2010, so homes have more modern floor plans and
                    features
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "Sun City Aliante is my top recommendation for buyers who want the
                full Sun City lifestyle at the best possible price. The amenities
                are excellent, the community is active and welcoming, and you
                simply can't beat the value. As a{" "}
                <strong>Berkshire Hathaway HomeServices</strong> agent, I help
                buyers compare all the Sun City options and understand why Aliante
                often makes the most financial sense."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
              </cite>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-green-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Discover Sun City Aliante's Value
            </h2>
            <p className="text-xl text-green-100 mb-8">
              See why Sun City Aliante offers the best value in Las Vegas 55+
              living. Tour the community with Dr. Jan Duffy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href="tel:+17025001955"
                className="inline-flex items-center justify-center bg-white text-green-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-green-50 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call (702) 500-1955
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-green-500 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-green-400 transition-colors"
              >
                Schedule a Tour
              </Link>
            </div>
            <p className="text-green-200">
              Here to make your transition smooth, Dr. Jan{" "}
              <span role="img" aria-label="sunshine">
                ☀️
              </span>
            </p>
          </section>
        </div>
        <div className="text-center text-sm text-slate-500 mt-8">
          Last Updated: January 2026
        </div>
      </main>
      <RealScoutListings />
      <Footer />
    </>
  );
}
