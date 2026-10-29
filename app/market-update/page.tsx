import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  Phone,
  TrendingUp,
  TrendingDown,
  Home as HomeIcon,
  Calendar,
  DollarSign,
  Clock,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Berkshire Hathaway HomeServices Las Vegas Market Update | January 2026",
  description:
    "Weekly Las Vegas real estate market update from Berkshire Hathaway HomeServices Nevada Properties. Get the latest stats, notable sales, and expert analysis from Dr. Jan Duffy. Call (702) 500-1955.",
  keywords: [
    "Berkshire Hathaway HomeServices Las Vegas market update",
    "Las Vegas real estate market",
    "Las Vegas housing market 2026",
    "Henderson real estate market",
    "Las Vegas home prices",
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Las Vegas Real Estate Market Update - Week of January 20, 2026",
  description:
    "Weekly market analysis from Berkshire Hathaway HomeServices Nevada Properties covering Las Vegas Valley real estate trends, statistics, and expert insights.",
  datePublished: "2026-01-20",
  dateModified: "2026-01-24",
  author: {
    "@type": "Person",
    name: "Dr. Jan Duffy",
    jobTitle: "REALTOR®",
    worksFor: {
      "@type": "RealEstateAgent",
      name: "Berkshire Hathaway HomeServices Nevada Properties",
    },
  },
  publisher: {
    "@type": "Organization",
    name: "Berkshire Hathaway HomeServices Nevada Properties",
    url: "https://heyberkshire.com",
  },
};

export default function MarketUpdatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="max-w-4xl mx-auto mb-6">
            <nav className="text-sm text-slate-500">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              {" / "}
              <Link href="/market-report" className="hover:text-blue-600">Market Report</Link>
              {" / "}
              <span className="text-slate-900">Weekly Update</span>
            </nav>
          </div>

          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Calendar className="h-4 w-4 mr-2" />
              Week of January 20, 2026
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Berkshire Hathaway HomeServices Las Vegas Market Update
            </h1>
            <p className="text-xl text-slate-600">
              Your weekly insider report on Las Vegas Valley real estate from{" "}
              <strong>Berkshire Hathaway HomeServices Nevada Properties</strong>
            </p>
            <div className="flex items-center justify-center mt-6 text-slate-500 text-sm">
              <span>By Dr. Jan Duffy, REALTOR® | BHHS Nevada Properties</span>
            </div>
          </div>

          {/* Key Statistics */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              5 Key Statistics This Week
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {/* Stat 1 */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
                <div className="flex items-center justify-center mb-3">
                  <DollarSign className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">$452,500</div>
                <div className="text-sm text-slate-500 mb-2">Median Sale Price</div>
                <div className="flex items-center justify-center text-green-600 text-sm font-medium">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +1.2% vs last week
                </div>
              </div>

              {/* Stat 2 */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
                <div className="flex items-center justify-center mb-3">
                  <HomeIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">847</div>
                <div className="text-sm text-slate-500 mb-2">Homes Sold</div>
                <div className="flex items-center justify-center text-green-600 text-sm font-medium">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +8.3% vs last week
                </div>
              </div>

              {/* Stat 3 */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
                <div className="flex items-center justify-center mb-3">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">4,892</div>
                <div className="text-sm text-slate-500 mb-2">Active Listings</div>
                <div className="flex items-center justify-center text-red-600 text-sm font-medium">
                  <TrendingDown className="h-4 w-4 mr-1" />
                  -2.1% vs last week
                </div>
              </div>

              {/* Stat 4 */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
                <div className="flex items-center justify-center mb-3">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">26</div>
                <div className="text-sm text-slate-500 mb-2">Avg. Days on Market</div>
                <div className="flex items-center justify-center text-green-600 text-sm font-medium">
                  <TrendingDown className="h-4 w-4 mr-1" />
                  -2 days vs last week
                </div>
              </div>

              {/* Stat 5 */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
                <div className="flex items-center justify-center mb-3">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">98.2%</div>
                <div className="text-sm text-slate-500 mb-2">List-to-Sale Ratio</div>
                <div className="flex items-center justify-center text-green-600 text-sm font-medium">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +0.4% vs last week
                </div>
              </div>
            </div>
          </section>

          {/* Notable Sale */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Notable Sale of the Week</h2>
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-blue-400 text-sm font-semibold mb-2">THE RIDGES, SUMMERLIN</div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">$4.2 Million | Custom Estate</h3>
                  <p className="text-slate-300 mb-4 md:mb-0">
                    6 Bed | 7 Bath | 8,400 SF | Strip & Mountain Views
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-green-400">12 Days</div>
                  <div className="text-slate-400">On Market</div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-700">
                <p className="text-slate-300">
                  <strong className="text-white">Why it matters:</strong> This sale demonstrates
                  continued strength in the luxury market. The property sold at 97% of asking price
                  after just 12 days—well below the luxury segment's 67-day average. California
                  relocators continue to drive demand for premium properties in guard-gated communities.
                </p>
              </div>
            </div>
          </section>

          {/* Expert Analysis */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Dr. Jan Duffy's Expert Analysis</h2>
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-8">
              <div className="prose prose-lg max-w-none text-slate-700">
                <p>
                  "This week's data tells an important story: <strong>the Las Vegas market is
                  finding its balance</strong>. We're seeing modest price appreciation (+1.2%),
                  healthy sales volume (+8.3%), and tightening inventory (-2.1%)—classic signs
                  of a market favoring sellers without pricing out buyers.
                </p>
                <p>
                  The drop in average days on market from 28 to 26 days signals increasing buyer
                  urgency. Combined with the list-to-sale ratio climbing to 98.2%, sellers are
                  achieving near-asking prices consistently. This is notably different from the
                  pandemic frenzy when homes routinely sold above asking—today's market rewards
                  realistic pricing while still delivering strong results.
                </p>
                <p>
                  What I'm watching closely: <strong>new listing activity</strong>. If inventory
                  continues declining while sales remain strong, we could see more competitive
                  conditions by spring. <strong>Berkshire Hathaway HomeServices</strong> buyers
                  should be prepared to move quickly on desirable properties, while sellers should
                  consider listing before the traditional spring rush creates more competition."
                </p>
              </div>
              <div className="mt-6 flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  JD
                </div>
                <div>
                  <div className="font-bold text-slate-900">Dr. Jan Duffy</div>
                  <div className="text-slate-500 text-sm">
                    REALTOR® | Berkshire Hathaway HomeServices Nevada Properties
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What This Means */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              What This Means for You
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* For Buyers */}
              <div className="bg-white border-2 border-green-200 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <HomeIcon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">For Buyers</h3>
                </div>
                <ul className="space-y-4 text-slate-700">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Get pre-approved now.</strong> With homes selling in 26 days average,
                      you need to be ready to make offers immediately.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Expect to pay close to asking.</strong> The 98.2% list-to-sale ratio
                      means significant discounts are rare in this market.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Consider acting before spring.</strong> Declining inventory suggests
                      more competition ahead. January/February can offer less crowded conditions.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Work with an expert.</strong> A Berkshire Hathaway HomeServices agent
                      can identify properties before they hit the market and negotiate effectively.
                    </span>
                  </li>
                </ul>
              </div>

              {/* For Sellers */}
              <div className="bg-white border-2 border-blue-200 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <DollarSign className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">For Sellers</h3>
                </div>
                <ul className="space-y-4 text-slate-700">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Price strategically.</strong> Homes priced at market value are selling
                      quickly at near-asking prices. Overpricing will cost you time and money.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>List before the spring rush.</strong> Less competition now means more
                      buyer attention on your property. Spring brings more listings competing for buyers.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Presentation matters.</strong> With multiple options available, buyers
                      are selective. Professional photos and staging deliver measurable ROI.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Leverage the BHHS brand.</strong> Berkshire Hathaway HomeServices
                      marketing reaches qualified buyers locally, nationally, and internationally.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Market by Area */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">This Week by Area</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white border border-slate-200 rounded-xl overflow-hidden">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Area</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-slate-900">Median Price</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-slate-900">Week Δ</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-slate-900">Homes Sold</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-slate-900">Avg. DOM</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-6 py-4 font-medium text-slate-900">Summerlin</td>
                    <td className="px-6 py-4 text-right">$628,000</td>
                    <td className="px-6 py-4 text-right text-green-600">+1.8%</td>
                    <td className="px-6 py-4 text-right">142</td>
                    <td className="px-6 py-4 text-right">21 days</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-slate-900">Henderson</td>
                    <td className="px-6 py-4 text-right">$487,500</td>
                    <td className="px-6 py-4 text-right text-green-600">+1.1%</td>
                    <td className="px-6 py-4 text-right">198</td>
                    <td className="px-6 py-4 text-right">23 days</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-slate-900">Las Vegas (Central)</td>
                    <td className="px-6 py-4 text-right">$425,000</td>
                    <td className="px-6 py-4 text-right text-green-600">+0.8%</td>
                    <td className="px-6 py-4 text-right">287</td>
                    <td className="px-6 py-4 text-right">28 days</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-slate-900">North Las Vegas</td>
                    <td className="px-6 py-4 text-right">$387,000</td>
                    <td className="px-6 py-4 text-right text-green-600">+0.5%</td>
                    <td className="px-6 py-4 text-right">156</td>
                    <td className="px-6 py-4 text-right">31 days</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-slate-900">Southwest (Mountains Edge)</td>
                    <td className="px-6 py-4 text-right">$478,000</td>
                    <td className="px-6 py-4 text-right text-green-600">+1.3%</td>
                    <td className="px-6 py-4 text-right">64</td>
                    <td className="px-6 py-4 text-right">26 days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Personalized Market Insights
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Want to know what these trends mean for your specific situation?
              Contact Dr. Jan Duffy for a free consultation tailored to your goals.
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
                href="/home-valuation"
                className="inline-flex items-center justify-center bg-blue-500 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-400 transition-colors"
              >
                Get Free Home Valuation
              </Link>
            </div>
            <p className="mt-6 text-blue-200 text-sm">
              Berkshire Hathaway HomeServices Nevada Properties
            </p>
          </section>

          {/* Newsletter Signup */}
          <section className="mt-16 max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Get Weekly Market Updates in Your Inbox
            </h3>
            <p className="text-slate-600 mb-6">
              Join 2,500+ Las Vegas homeowners and investors who receive Dr. Jan's weekly market
              analysis every Monday morning.
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button className="px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              No spam. Unsubscribe anytime. Your data is protected.
            </p>
          </section>
        </div>
        <div className="text-center text-sm text-slate-500 mt-12">
          Last Updated: January 24, 2026 | Data Source: Las Vegas REALTORS® MLS
        </div>
      </main>
      <RealScoutListings />
      <Footer />
    </>
  );
}
