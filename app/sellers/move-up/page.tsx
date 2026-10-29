import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  Phone,
  TrendingUp,
  Home as HomeIcon,
  ArrowRight,
  DollarSign,
  CheckCircle,
  Calendar,
  Shield,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Move-Up Sellers Las Vegas | Berkshire Hathaway HomeServices",
  description:
    "Ready for your next chapter? Dr. Jan Duffy helps Las Vegas homeowners leverage equity into their dream home. Sell and buy seamlessly. Call (702) 500-1955.",
  keywords: [
    "move up buyer Las Vegas",
    "sell and buy Las Vegas",
    "home equity Las Vegas",
    "upgrade home Las Vegas",
    "Berkshire Hathaway HomeServices seller",
  ],
};

export default function MoveUpSellerPage() {
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
              <Link href="/sellers" className="hover:text-blue-600">Sellers</Link>
              {" / "}
              <span className="text-slate-900">Move-Up Sellers</span>
            </nav>
          </div>

          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <TrendingUp className="h-4 w-4 mr-2" />
              Your Equity Unlocks Your Dream Home
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Ready for Your Next Chapter?
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Your home's equity unlocks your dream home. Let's make the upgrade seamless.
            </p>
            <a
              href="tel:+17025001955"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-700 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Start Your Upgrade → (702) 500-1955
            </a>
          </div>

          {/* Equity Section */}
          <section className="mb-16 bg-green-600 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Your Equity Position is Stronger Than You Think
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center bg-white/10 rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">$100K-$250K+</div>
                <div className="text-green-100">Typical Equity Gain</div>
                <div className="text-sm text-green-200 mt-2">For 2015-2021 purchases</div>
              </div>
              <div className="text-center bg-white/10 rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">4 Months</div>
                <div className="text-green-100">Current Inventory</div>
                <div className="text-sm text-green-200 mt-2">Your purchase is easier</div>
              </div>
              <div className="text-center bg-white/10 rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">28 Days</div>
                <div className="text-green-100">Avg. Days to Sell</div>
                <div className="text-sm text-green-200 mt-2">Priced-right homes</div>
              </div>
            </div>
            <p className="text-center text-green-100 text-lg">
              If you bought between 2015-2021, you likely have significant equity to leverage.
              <strong> We help you access it strategically.</strong>
            </p>
          </section>

          {/* Upgrade Path */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Common Upgrade Paths We Help With
            </h2>
            <div className="space-y-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6 flex items-center">
                <div className="flex-shrink-0 mr-6">
                  <div className="bg-blue-100 rounded-full p-3">
                    <HomeIcon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-slate-900 mb-1">Centennial Hills → Summerlin</h3>
                  <p className="text-slate-600 text-sm">
                    Upgrade from $450K starter to $650K+ in Downtown Summerlin area. Better schools,
                    walkable amenities, Red Rock views.
                  </p>
                </div>
                <ArrowRight className="h-6 w-6 text-blue-600 flex-shrink-0 ml-4" />
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6 flex items-center">
                <div className="flex-shrink-0 mr-6">
                  <div className="bg-green-100 rounded-full p-3">
                    <HomeIcon className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-slate-900 mb-1">Green Valley → MacDonald Ranch</h3>
                  <p className="text-slate-600 text-sm">
                    Move from established Green Valley ($520K) to luxury Henderson ($800K+).
                    Larger lots, custom features, mountain views.
                  </p>
                </div>
                <ArrowRight className="h-6 w-6 text-green-600 flex-shrink-0 ml-4" />
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6 flex items-center">
                <div className="flex-shrink-0 mr-6">
                  <div className="bg-purple-100 rounded-full p-3">
                    <HomeIcon className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-slate-900 mb-1">Inspirada → Southern Highlands</h3>
                  <p className="text-slate-600 text-sm">
                    Graduate from master-planned ($525K) to golf community luxury ($750K+).
                    Country club lifestyle, guard-gated options.
                  </p>
                </div>
                <ArrowRight className="h-6 w-6 text-purple-600 flex-shrink-0 ml-4" />
              </div>
            </div>
          </section>

          {/* How We Handle Both */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              We Handle Both Transactions Seamlessly
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  The Sell Side
                </h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Strategic pricing to maximize your equity
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Professional staging and photography
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Negotiate contingencies that protect your purchase
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Coordinate closing timelines
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  The Buy Side
                </h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Priority access to new listings in target neighborhoods
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Competitive offers backed by pre-approval
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Bridge financing options if timing doesn't align
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Negotiate seller credits and contingencies
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Timing Strategies */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Timing Your Move-Up: Three Proven Strategies
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 mb-8">
              <p>
                The biggest concern move-up buyers have is timing. What happens if you sell before
                finding your next home? What if you find your dream home but can't sell in time?
                <strong> Berkshire Hathaway HomeServices</strong> agents like Dr. Jan Duffy have
                strategies for every scenario, ensuring you never end up homeless or paying two
                mortgages unnecessarily.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold text-xl">1</span>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Sell First, Then Buy</h3>
                <p className="text-slate-600 text-sm mb-4">
                  The safest approach: sell your home, secure your equity, then purchase with
                  confidence and negotiating power.
                </p>
                <div className="text-sm">
                  <p className="text-green-600 font-medium">Best for:</p>
                  <p className="text-slate-500">Risk-averse buyers; competitive purchase markets</p>
                  <p className="text-amber-600 font-medium mt-2">Consider:</p>
                  <p className="text-slate-500">May need temporary housing; rent-back negotiation possible</p>
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-green-600 font-bold text-xl">2</span>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Buy First, Then Sell</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Lock in your dream home before listing. Requires bridge financing or sufficient
                  reserves to carry two properties temporarily.
                </p>
                <div className="text-sm">
                  <p className="text-green-600 font-medium">Best for:</p>
                  <p className="text-slate-500">Buyers with strong equity or savings; hot seller's markets</p>
                  <p className="text-amber-600 font-medium mt-2">Consider:</p>
                  <p className="text-slate-500">Bridge loan costs; carrying costs if sale delays</p>
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-purple-600 font-bold text-xl">3</span>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Simultaneous Close</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Sell and buy on the same day. Requires precise coordination and contingency
                  management, but eliminates double-moving and temporary housing.
                </p>
                <div className="text-sm">
                  <p className="text-green-600 font-medium">Best for:</p>
                  <p className="text-slate-500">Experienced buyers; balanced markets; strong coordination</p>
                  <p className="text-amber-600 font-medium mt-2">Consider:</p>
                  <p className="text-slate-500">Higher stress; requires flexible closing dates</p>
                </div>
              </div>
            </div>
          </section>

          {/* Financing Options */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Financing Your Move-Up Purchase
            </h2>
            <p className="text-slate-300 text-center mb-8 max-w-3xl mx-auto">
              Understanding your financing options is crucial for a successful move-up transaction.
              Dr. Jan works with trusted local lenders who specialize in helping Las Vegas homeowners
              leverage their equity into their next home.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-xl p-6">
                <DollarSign className="h-8 w-8 text-green-400 mb-4" />
                <h3 className="font-bold text-lg mb-2">Bridge Loans</h3>
                <p className="text-slate-300 text-sm">
                  Short-term financing that lets you use your current home's equity as a down payment
                  before selling. Typically 6-12 month terms with interest-only payments. Rates are
                  higher than traditional mortgages but provide flexibility.
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <DollarSign className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="font-bold text-lg mb-2">Home Equity Line of Credit (HELOC)</h3>
                <p className="text-slate-300 text-sm">
                  Access your equity before selling to fund your down payment. Must be established
                  in advance (typically 30-45 days). Lower rates than bridge loans but requires
                  planning ahead.
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <Shield className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="font-bold text-lg mb-2">Sale Contingency</h3>
                <p className="text-slate-300 text-sm">
                  Make your purchase offer contingent on selling your current home. Less common in
                  competitive markets, but can work with motivated sellers or longer closing windows.
                  Dr. Jan knows how to structure these offers effectively.
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <Calendar className="h-8 w-8 text-amber-400 mb-4" />
                <h3 className="font-bold text-lg mb-2">Rent-Back Agreement</h3>
                <p className="text-slate-300 text-sm">
                  Sell your home but remain as a renter for 30-60 days while you close on your new
                  property. Provides breathing room without needing temporary housing. Common and
                  often negotiable in today's market.
                </p>
              </div>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "Move-up transactions are like a chess game—every move matters. I coordinate both
                sides so you don't end up homeless or paying two mortgages. With{" "}
                <strong>Berkshire Hathaway HomeServices</strong>, I have the resources to make
                complex transactions smooth. That's why clients trust me with their biggest
                financial moves."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
              </cite>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Move-Up Seller FAQs
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "How much equity do I need to move up?",
                  a: "Most move-up buyers have 20-40% equity in their current home. If you purchased between 2015-2021, Las Vegas appreciation means you likely have $100,000-$250,000+ in equity. Dr. Jan provides free equity analysis to show exactly what you have to work with.",
                },
                {
                  q: "What if I can't find a new home before selling?",
                  a: "Several options exist: negotiate a rent-back agreement (stay in your sold home for 30-60 days), arrange temporary housing, or use a bridge loan to buy before selling. Dr. Jan helps you choose the best strategy for your situation.",
                },
                {
                  q: "Should I upgrade or just get more space?",
                  a: "It depends on your goals. Sometimes moving to a larger home in your current neighborhood is the best value. Other times, upgrading to a premium location provides better long-term appreciation. Dr. Jan analyzes both options to help you decide.",
                },
                {
                  q: "How do schools factor into a move-up decision?",
                  a: "Schools significantly impact both your quality of life and resale value. Moving to better school zones (like Summerlin's Palo Verde High School district or Henderson's Coronado) often justifies higher prices through appreciation and demand.",
                },
                {
                  q: "What are the tax implications of selling and buying?",
                  a: "If you've lived in your home 2+ years, up to $250,000 ($500,000 for couples) in gains are tax-free. For larger gains, consult a tax advisor. Dr. Jan can refer you to trusted CPAs who specialize in real estate transactions.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white border border-slate-200 rounded-lg p-6">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What's Your Home Worth Today?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a free equity analysis and see what your next home could look like.
              Dr. Jan will show you the numbers and create a strategic plan.
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
          </section>
        </div>
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: January 2026</div>
      </main>
      <RealScoutListings />
      <Footer />
    </>
  );
}
