import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { TrendingUp, TrendingDown, Home, Calendar, DollarSign, BarChart, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Las Vegas Real Estate Market Report January 2026 | Berkshire Hathaway HomeServices",
  description:
    "Get the latest Las Vegas real estate market statistics for January 2026. Median prices, days on market, inventory levels, and expert analysis from Berkshire Hathaway HomeServices Nevada Properties.",
  keywords: [
    "Las Vegas real estate market",
    "Las Vegas home prices 2026",
    "Henderson real estate market",
    "Nevada housing market",
    "Berkshire Hathaway market report",
  ],
};

// Report Schema
const reportSchema = {
  "@context": "https://schema.org",
  "@type": "Report",
  name: "Las Vegas Real Estate Market Report - January 2026",
  author: {
    "@type": "RealEstateAgent",
    name: "Dr. Jan Duffy",
    worksFor: "Berkshire Hathaway HomeServices Nevada Properties",
  },
  datePublished: "2026-01-23",
  about: {
    "@type": "Place",
    name: "Las Vegas, Nevada",
  },
};

export default function MarketReportPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reportSchema) }}
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Market Intelligence
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Las Vegas Real Estate Market Report
            </h1>
            <p className="text-xl text-slate-600">
              January 2026 | Expert analysis from{" "}
              <strong>Berkshire Hathaway HomeServices Nevada Properties</strong>
            </p>
          </div>

          {/* Key Stats Overview */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Las Vegas Market Snapshot | January 2026
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">$450,000</div>
                <div className="text-slate-300 text-sm">Median Home Price</div>
                <div className="flex items-center justify-center mt-1 text-green-400 text-sm">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +4.2% YoY
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">28</div>
                <div className="text-slate-300 text-sm">Days on Market</div>
                <div className="flex items-center justify-center mt-1 text-green-400 text-sm">
                  <TrendingDown className="h-4 w-4 mr-1" />
                  -3 days
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">4,850</div>
                <div className="text-slate-300 text-sm">Active Listings</div>
                <div className="flex items-center justify-center mt-1 text-yellow-400 text-sm">
                  +12% YoY
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">2.1</div>
                <div className="text-slate-300 text-sm">Months Inventory</div>
                <div className="flex items-center justify-center mt-1 text-slate-400 text-sm">
                  Seller's Market
                </div>
              </div>
            </div>
          </section>

          {/* Area Breakdown */}
          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Market Data by Area
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  area: "Las Vegas (Overall)",
                  median: "$450,000",
                  change: "+4.2%",
                  dom: 28,
                  trend: "up",
                },
                {
                  area: "Henderson",
                  median: "$485,000",
                  change: "+5.1%",
                  dom: 24,
                  trend: "up",
                },
                {
                  area: "Summerlin",
                  median: "$625,000",
                  change: "+6.8%",
                  dom: 22,
                  trend: "up",
                },
                {
                  area: "North Las Vegas",
                  median: "$385,000",
                  change: "+3.2%",
                  dom: 32,
                  trend: "up",
                },
                {
                  area: "Southern Highlands",
                  median: "$750,000",
                  change: "+7.2%",
                  dom: 35,
                  trend: "up",
                },
                {
                  area: "Luxury ($1M+)",
                  median: "$1,200,000",
                  change: "+8.5%",
                  dom: 45,
                  trend: "up",
                },
              ].map((item) => (
                <div
                  key={item.area}
                  className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-bold text-lg text-slate-900 mb-4">{item.area}</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Median Price</span>
                      <span className="font-semibold text-slate-900">{item.median}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">YoY Change</span>
                      <span
                        className={`font-semibold ${item.trend === "up" ? "text-green-600" : "text-red-600"}`}
                      >
                        {item.change}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Days on Market</span>
                      <span className="font-semibold text-slate-900">{item.dom} days</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Expert Analysis */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Expert Market Analysis
            </h2>
            <div className="bg-slate-50 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-6">
                "The Las Vegas market remains strong heading into 2026. We're seeing continued
                demand from California relocators and remote workers, but the days of 20 offers on
                every listing are behind us. Buyers finally have some negotiating power, while
                sellers are still achieving solid appreciation. It's a balanced market that rewards
                proper pricing and preparation."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
              </cite>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center">
                  <Home className="h-5 w-5 text-blue-600 mr-2" />
                  For Buyers
                </h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• More inventory = more choices</li>
                  <li>• Negotiating power is returning</li>
                  <li>• Interest rates stabilizing around 6.5%</li>
                  <li>• New construction offering incentives</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center">
                  <DollarSign className="h-5 w-5 text-green-600 mr-2" />
                  For Sellers
                </h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Still a seller's market (2.1 months inventory)</li>
                  <li>• Proper pricing is crucial</li>
                  <li>• 4.2% appreciation in past year</li>
                  <li>• Well-priced homes sell in under 30 days</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Market Trends */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Key Market Trends to Watch
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">California Migration</h3>
                <p className="text-slate-600 text-sm">
                  Continued influx of California buyers seeking affordability and no state income
                  tax. Summerlin and Henderson remain top destinations.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Home className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">New Construction</h3>
                <p className="text-slate-600 text-sm">
                  Builders offering significant incentives including rate buydowns, closing cost
                  credits, and upgrades. Great time for new home buyers.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <BarChart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Luxury Strength</h3>
                <p className="text-slate-600 text-sm">
                  The $1M+ segment showing strongest appreciation at 8.5% YoY. The Ridges and
                  Southern Highlands leading the luxury market.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Market Questions We're Hearing
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Is now a good time to buy in Las Vegas?",
                  a: "Yes. With more inventory, returning negotiating power, and stable interest rates, buyers have more options than they've had in years. Well-priced homes are still moving quickly, but you won't face the bidding wars of 2021-2022.",
                },
                {
                  q: "Should I wait for prices to drop?",
                  a: "Las Vegas prices have historically been resilient. Current appreciation of 4.2% YoY, strong job growth, and continued California migration suggest prices will remain stable or continue gradual increases. Waiting typically costs more than potential savings.",
                },
                {
                  q: "Is this a buyer's or seller's market?",
                  a: "With 2.1 months of inventory, Las Vegas is technically still a seller's market (6 months is balanced). However, buyers have more leverage than they've had since 2019. It's a balanced environment that rewards proper pricing.",
                },
                {
                  q: "What's happening with interest rates?",
                  a: "Rates have stabilized around 6.5% for conventional loans. Many buyers are using builder incentives or rate buydowns to achieve effective rates in the low 5% range. VA and FHA options remain competitive.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-slate-50 rounded-lg p-6">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Personalized Market Insights
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Want to know what these numbers mean for your specific neighborhood or situation? Dr.
              Jan Duffy provides free market consultations.
            </p>
            <a
              href="tel:+17025001955"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (702) 500-1955
            </a>
            <p className="mt-4 text-blue-200 text-sm">
              Berkshire Hathaway HomeServices Nevada Properties
            </p>
          </section>
        </div>

        {/* Last Updated */}
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: January 2026</div>
      </main>
      <RealScoutListings />
      <Footer />
    </>
  );
}
