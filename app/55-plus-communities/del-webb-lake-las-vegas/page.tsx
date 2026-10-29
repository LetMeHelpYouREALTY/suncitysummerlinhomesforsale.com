import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  Phone,
  Waves,
  Mountain,
  Home as HomeIcon,
  Star,
  Dumbbell,
  CheckCircle,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Del Webb at Lake Las Vegas Homes | Berkshire Hathaway HomeServices",
  description:
    "Lakefront 55+ living at Del Webb Lake Las Vegas. Homes from $400K-$900K. Resort amenities, stunning lake and mountain views. Dr. Jan Duffy. Call (702) 500-1955.",
  keywords: [
    "Del Webb Lake Las Vegas",
    "Lake Las Vegas 55 plus",
    "Del Webb homes Henderson",
    "lakefront retirement community",
    "Berkshire Hathaway Del Webb",
  ],
};

export default function DelWebbLakeLasVegasPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="max-w-6xl mx-auto mb-6">
            <nav className="text-sm text-slate-500">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              {" / "}
              <Link href="/55-plus-communities" className="hover:text-blue-600">55+ Communities</Link>
              {" / "}
              <span className="text-slate-900">Del Webb at Lake Las Vegas</span>
            </nav>
          </div>

          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Waves className="h-4 w-4 mr-2" />
              Lakefront 55+ Living
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Del Webb at Lake Las Vegas
            </h1>
            <p className="text-xl text-slate-600">
              Modern homes. Lake views. Resort living. The newest Del Webb in Las Vegas.
            </p>
          </div>

          {/* Quick Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Del Webb at Lake Las Vegas at a Glance
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">$400K-$900K</div>
                <div className="text-slate-300 text-sm">Price Range</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">$200-$280</div>
                <div className="text-slate-300 text-sm">Monthly HOA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">1,800+</div>
                <div className="text-slate-300 text-sm">Homes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">2016+</div>
                <div className="text-slate-300 text-sm">Construction</div>
              </div>
            </div>
          </section>

          {/* About */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                About Del Webb at Lake Las Vegas
              </h2>
              <p>
                <strong>Del Webb at Lake Las Vegas</strong> represents the newest generation of
                Del Webb communities—modern construction, contemporary floor plans, and a stunning
                setting on the shores of Lake Las Vegas. This 1,800+ home community combines
                Del Webb's legendary lifestyle programming with the resort atmosphere of Lake
                Las Vegas.
              </p>
              <p>
                Built from 2016 to present, homes feature open floor plans, modern finishes,
                and energy-efficient construction. Many homes offer lake, mountain, or golf
                course views. The community's amenities center includes fitness facilities,
                pools, pickleball courts, and gathering spaces for Del Webb's signature
                lifestyle activities.
              </p>
              <p>
                <strong>Berkshire Hathaway HomeServices Nevada Properties</strong> helps buyers
                navigate Del Webb's various floor plans and lot positions. Dr. Jan Duffy provides
                guidance on which phases offer the best value and which premium lots justify
                their price premiums.
              </p>
            </div>
          </section>

          {/* Lake Las Vegas Lifestyle */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-8">
              <div className="flex items-start">
                <Waves className="h-8 w-8 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    The Lake Las Vegas Experience
                  </h3>
                  <p className="text-slate-700 mb-4">
                    Lake Las Vegas is a 320-acre private lake surrounded by luxury resorts, golf
                    courses, and residential communities. Del Webb residents enjoy access to:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Lake activities (kayaking, paddleboarding)
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Village restaurants & shops
                      </li>
                    </ul>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Reflection Bay Golf Club
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Westin resort amenities
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Amenities */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Del Webb Amenities
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Dumbbell className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Fitness & Pools</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Resort-style pool & spa</li>
                  <li>• Modern fitness center</li>
                  <li>• Indoor/outdoor spaces</li>
                  <li>• Lap swimming</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Courts & Sports</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Pickleball courts</li>
                  <li>• Tennis courts</li>
                  <li>• Bocce ball</li>
                  <li>• Cornhole & games</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <HomeIcon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Modern Homes</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Open floor plans</li>
                  <li>• 2-4 bedrooms</li>
                  <li>• Energy efficient</li>
                  <li>• Smart home ready</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Why Del Webb Lake Las Vegas */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Why Buyers Choose Del Webb Lake Las Vegas
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900">Newest construction in Las Vegas 55+ market</strong>
                  <p className="text-slate-600 text-sm">
                    Modern floor plans, current building codes, energy efficiency, warranties
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900">Unique lakefront setting</strong>
                  <p className="text-slate-600 text-sm">
                    The only 55+ community on Lake Las Vegas—waterfront views and activities
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900">Resort-style living</strong>
                  <p className="text-slate-600 text-sm">
                    Access to Westin, Reflection Bay, and Lake Las Vegas Village amenities
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900">Del Webb lifestyle programming</strong>
                  <p className="text-slate-600 text-sm">
                    Organized activities, clubs, travel, and social events—built-in social life
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "Del Webb at Lake Las Vegas offers something no other 55+ community can—lakefront
                living in the desert. The homes are modern, the setting is spectacular, and the
                Del Webb programming creates instant community. As a{" "}
                <strong>Berkshire Hathaway HomeServices</strong> agent, I help buyers understand
                which lots offer the best views and which floor plans work for their lifestyle."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
              </cite>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Experience Lakefront 55+ Living
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Tour Del Webb at Lake Las Vegas with Dr. Jan Duffy. See the homes, the lake,
              and the lifestyle that makes this community special.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17025001955"
                className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call (702) 500-1955
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-blue-500 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-400 transition-colors"
              >
                Schedule a Tour
              </Link>
            </div>
          </section>
        </div>
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: January 2026</div>
      </main>
      <RealScoutListings />
      <Footer />
    </>
  );
}
