import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Star,
  UtensilsCrossed,
  Dumbbell,
  Users,
  CheckCircle,
  Sparkles,
  Home as HomeIcon,
  Heart,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trilogy at Summerlin Homes for Sale | Luxury Resort 55+ Living | Dr. Jan Duffy",
  description:
    "Trilogy at Summerlin - luxury resort-style 55+ community. Homes from $500K-$1.1M. On-site farm-to-table restaurant, spa, contemporary designs. Dr. Jan Duffy, BHHS. Call (702) 500-1955.",
  keywords: [
    "Trilogy at Summerlin homes for sale",
    "Trilogy Summerlin Las Vegas",
    "luxury 55+ community Las Vegas",
    "resort style 55+ Las Vegas",
    "Shea Homes Trilogy",
    "Berkshire Hathaway Trilogy Summerlin",
  ],
  openGraph: {
    title: "Trilogy at Summerlin - Luxury Resort 55+ Living",
    description:
      "Where resort living meets 55+ community. Farm-to-table dining, spa, contemporary homes. From $500K. Dr. Jan Duffy, BHHS.",
    type: "website",
  },
};

const communitySchema = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "Trilogy at Summerlin",
  description:
    "Luxury resort-style 55+ community in Summerlin with 800+ homes and upscale amenities",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89135",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.1523,
    longitude: -115.3456,
  },
};

export default function TrilogySummerlinPage() {
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
              <span className="text-slate-900">Trilogy at Summerlin</span>
            </nav>
          </div>

          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-rose-100 text-rose-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              Luxury Resort-Style 55+ Living
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Trilogy at Summerlin
            </h1>
            <p className="text-xl text-slate-600">
              Where five-star resort living meets 55+ community. Farm-to-table
              dining, world-class spa, and contemporary homes.
            </p>
          </div>

          {/* Quick Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Trilogy at Summerlin at a Glance
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-400 mb-1">
                  $500K-$1.1M
                </div>
                <div className="text-slate-300 text-sm">Price Range</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-400 mb-1">
                  $250-$350
                </div>
                <div className="text-slate-300 text-sm">Monthly HOA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">800+</div>
                <div className="text-slate-300 text-sm">Homes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-400 mb-1">
                  Luxury
                </div>
                <div className="text-slate-300 text-sm">Resort Amenities</div>
              </div>
            </div>
          </section>

          {/* About */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                About Trilogy at Summerlin
              </h2>
              <p>
                <strong>Trilogy at Summerlin</strong> redefines what a 55+
                community can be. Developed by Shea Homes, Trilogy brings a
                resort hospitality approach to active adult living—think
                boutique hotel amenities in a residential community setting.
              </p>
              <p>
                The centerpiece is the stunning clubhouse featuring an on-site
                farm-to-table restaurant (residents dine, not just grab coffee),
                a full-service spa and wellness center, state-of-the-art fitness
                facilities, and indoor/outdoor event spaces. The homes
                themselves feature contemporary architecture with open floor
                plans, designer finishes, and modern smart home technology.
              </p>
              <p>
                <strong>Berkshire Hathaway HomeServices Nevada Properties</strong>{" "}
                serves discerning buyers seeking luxury 55+ options. Dr. Jan
                Duffy understands why buyers choose Trilogy's resort experience
                over traditional active adult communities.
              </p>
            </div>
          </section>

          {/* Resort Experience */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-rose-50 to-pink-50 border-l-4 border-rose-500 rounded-r-xl p-8">
              <div className="flex items-start">
                <Star className="h-8 w-8 text-rose-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    The Trilogy Difference: Resort-Style Living
                  </h3>
                  <p className="text-slate-700 mb-4">
                    Trilogy isn't just a 55+ community with a nice clubhouse—it's
                    a resort experience you happen to live in. The difference is
                    in the details.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4 text-center">
                      <UtensilsCrossed className="h-6 w-6 text-rose-600 mx-auto mb-2" />
                      <div className="font-bold text-slate-900 text-sm">
                        Farm-to-Table Restaurant
                      </div>
                      <div className="text-xs text-slate-600">
                        Full-service dining, not a snack bar
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                      <Sparkles className="h-6 w-6 text-rose-600 mx-auto mb-2" />
                      <div className="font-bold text-slate-900 text-sm">
                        Full-Service Spa
                      </div>
                      <div className="text-xs text-slate-600">
                        Treatments, not just a hot tub
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                      <HomeIcon className="h-6 w-6 text-rose-600 mx-auto mb-2" />
                      <div className="font-bold text-slate-900 text-sm">
                        Contemporary Homes
                      </div>
                      <div className="text-xs text-slate-600">
                        Designer finishes throughout
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
              Luxury Amenities
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="bg-rose-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <UtensilsCrossed className="h-6 w-6 text-rose-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">
                  Farm-to-Table Dining
                </h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• On-site restaurant</li>
                  <li>• Chef-prepared meals</li>
                  <li>• Indoor & patio seating</li>
                  <li>• Full bar & wine selection</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">
                  Spa & Wellness Center
                </h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Full-service spa treatments</li>
                  <li>• Massage & facials</li>
                  <li>• Wellness programs</li>
                  <li>• Relaxation lounges</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Dumbbell className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">
                  Fitness & Recreation
                </h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• State-of-the-art fitness center</li>
                  <li>• Resort-style pool</li>
                  <li>• Tennis & pickleball</li>
                  <li>• Movement studio</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Home Features */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Contemporary Home Designs
            </h2>
            <p className="text-lg text-slate-600 text-center mb-8 max-w-3xl mx-auto">
              Trilogy homes break the mold of traditional 55+ construction with
              modern architecture, open layouts, and designer-selected finishes.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-3">
                  Architecture & Design
                </h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Contemporary desert modern aesthetic
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Open floor plans with great rooms
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Indoor-outdoor living spaces
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Large windows for natural light
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-3">
                  Features & Finishes
                </h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Chef's kitchens with premium appliances
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Spa-inspired master bathrooms
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Smart home technology
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Energy-efficient construction
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Why Choose Trilogy */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Why Buyers Choose Trilogy at Summerlin
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900">
                    True resort lifestyle, not just amenities
                  </strong>
                  <p className="text-slate-600 text-sm">
                    On-site restaurant, full-service spa, and hospitality-trained
                    staff create a resort experience
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900">
                    Contemporary homes, not dated designs
                  </strong>
                  <p className="text-slate-600 text-sm">
                    Modern architecture with open floor plans and designer
                    finishes—a departure from traditional 55+ construction
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900">
                    Boutique community size
                  </strong>
                  <p className="text-slate-600 text-sm">
                    800+ homes—large enough for vibrant programming, small enough
                    for genuine community
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900">
                    Premium Summerlin location
                  </strong>
                  <p className="text-slate-600 text-sm">
                    Near Downtown Summerlin, Red Rock Canyon, and top golf
                    courses—the best of Las Vegas at your doorstep
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "Trilogy at Summerlin is for buyers who want more than a 55+
                community—they want a lifestyle. The on-site restaurant, spa, and
                contemporary homes create an experience you simply can't find
                elsewhere. As a{" "}
                <strong>Berkshire Hathaway HomeServices</strong> agent serving
                luxury 55+ buyers, I recommend Trilogy to those who appreciate
                quality and won't settle for ordinary."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
              </cite>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Experience Luxury 55+ Living
            </h2>
            <p className="text-xl text-rose-100 mb-8">
              Discover why Trilogy at Summerlin sets the standard for resort-style
              55+ living. Private tours available with Dr. Jan Duffy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href="tel:+17025001955"
                className="inline-flex items-center justify-center bg-white text-rose-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-rose-50 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call (702) 500-1955
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-rose-500 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-rose-400 transition-colors"
              >
                Schedule a Tour
              </Link>
            </div>
            <p className="text-rose-200">
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
