import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  Phone,
  Plane,
  Globe,
  Clock,
  CheckCircle,
  Home as HomeIcon,
  MapPin,
  Briefcase,
  Calendar,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Relocation Home Sales Las Vegas | Berkshire Hathaway HomeServices",
  description:
    "Leaving Las Vegas for a new opportunity? Dr. Jan Duffy helps relocating homeowners sell fast and coordinates with BHHS offices nationwide. Call (702) 500-1955.",
  keywords: [
    "relocation sale Las Vegas",
    "job relocation Las Vegas",
    "sell home fast Las Vegas",
    "Berkshire Hathaway relocation services",
    "corporate relocation Nevada",
  ],
};

export default function RelocationPage() {
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
              <span className="text-slate-900">Relocation</span>
            </nav>
          </div>

          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Plane className="h-4 w-4 mr-2" />
              Nationwide BHHS Network
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              New Opportunity?<br />We Handle Your Sale.
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Sell your Las Vegas home while you focus on your new chapter.
              We coordinate both ends of your move.
            </p>
            <a
              href="tel:+17025001955"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-700 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Start Your Relocation → (702) 500-1955
            </a>
          </div>

          {/* Network Advantage */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Globe className="h-8 w-8 mr-3 text-blue-400" />
              <h2 className="text-3xl font-bold">Berkshire Hathaway HomeServices Network</h2>
            </div>
            <p className="text-center text-slate-300 mb-8 max-w-2xl mx-auto">
              When you work with Dr. Jan, you're not just getting a Las Vegas agent—you're
              tapping into the most trusted real estate network in America.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center bg-white/10 rounded-xl p-6">
                <div className="text-4xl font-bold text-blue-400 mb-2">50,000+</div>
                <div className="text-slate-300">Agents Nationwide</div>
              </div>
              <div className="text-center bg-white/10 rounded-xl p-6">
                <div className="text-4xl font-bold text-blue-400 mb-2">1,500+</div>
                <div className="text-slate-300">Offices Across US</div>
              </div>
              <div className="text-center bg-white/10 rounded-xl p-6">
                <div className="text-4xl font-bold text-blue-400 mb-2">#1</div>
                <div className="text-slate-300">Brand Trust Rating</div>
              </div>
            </div>
            <p className="text-center text-slate-300 mt-8">
              Moving to Dallas? Phoenix? Chicago? We connect you with top-rated BHHS agents
              in your new city at no extra cost.
            </p>
          </section>

          {/* How We Help */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              How We Handle Your Relocation Sale
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-xl text-slate-900 mb-4 flex items-center">
                  <HomeIcon className="h-6 w-6 text-blue-600 mr-2" />
                  Selling Your Las Vegas Home
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900">Remote-Friendly Process</strong>
                      <p className="text-slate-600 text-sm">
                        Virtual walkthroughs, electronic signatures, and video updates so you
                        can manage your sale from anywhere.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900">Property Oversight</strong>
                      <p className="text-slate-600 text-sm">
                        We coordinate showings, staging, and maintenance while you're
                        focused on your new job or location.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900">Strategic Pricing</strong>
                      <p className="text-slate-600 text-sm">
                        If you need a fast sale, we price for speed. If you have time,
                        we maximize your return. Your timeline, your strategy.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900">Flexible Closings</strong>
                      <p className="text-slate-600 text-sm">
                        We negotiate closing dates that align with your start date and
                        corporate relocation requirements.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-xl text-slate-900 mb-4 flex items-center">
                  <MapPin className="h-6 w-6 text-green-600 mr-2" />
                  Buying in Your New City
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900">BHHS Agent Referrals</strong>
                      <p className="text-slate-600 text-sm">
                        We connect you with top-producing BHHS agents in your destination city—
                        professionals we trust to take care of you.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900">Coordinated Timing</strong>
                      <p className="text-slate-600 text-sm">
                        We communicate with your destination agent to align sale and
                        purchase timelines, minimizing gaps.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900">Equity Transfer Strategies</strong>
                      <p className="text-slate-600 text-sm">
                        Bridge loans, contingent offers, and lease-back arrangements—
                        we help structure deals that work for both transactions.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900">Corporate Relo Compliance</strong>
                      <p className="text-slate-600 text-sm">
                        We work with corporate relocation companies and understand
                        BVO, appraisal, and buyout processes.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Timeline Options */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Relocation Timeline Options
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-red-600 mr-2" />
                  <h3 className="font-bold text-slate-900">Urgent (2-4 weeks)</h3>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  Job starts soon. Aggressive pricing, immediate listing, cash buyer outreach.
                </p>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Pre-listing preparation</li>
                  <li>• Investor/cash buyer network</li>
                  <li>• Accelerated marketing</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-amber-600 mr-2" />
                  <h3 className="font-bold text-slate-900">Standard (30-60 days)</h3>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  Typical corporate timeline. Strategic pricing with room for negotiation.
                </p>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Professional staging</li>
                  <li>• Full marketing campaign</li>
                  <li>• Maximum exposure</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-center mb-4">
                  <Briefcase className="h-6 w-6 text-green-600 mr-2" />
                  <h3 className="font-bold text-slate-900">Flexible (60-90 days)</h3>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  Company allows time. Price for maximum return, strategic timing.
                </p>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Premium positioning</li>
                  <li>• Rent-back negotiation</li>
                  <li>• Optimal market timing</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Corporate Relocation */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <Briefcase className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="font-bold text-xl text-slate-900">
                  Corporate Relocation Packages
                </h3>
              </div>
              <p className="text-slate-700 mb-4">
                If your employer offers relocation assistance, we're experienced with major
                relocation management companies and understand their processes:
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    BVO (Buyer Value Option)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Guaranteed buyout programs
                  </li>
                </ul>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Appraisal management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Loss-on-sale provisions
                  </li>
                </ul>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Home finding services
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Temporary housing coordination
                  </li>
                </ul>
              </div>
              <p className="text-sm text-slate-600">
                Major corporate relo providers we work with: Cartus, SIRVA, Graebel, BGRS, and others.
              </p>
            </div>
          </section>

          {/* Common Relocation Destinations */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Popular Relocation Destinations from Las Vegas
            </h2>
            <p className="text-slate-600 text-center mb-8 max-w-3xl mx-auto">
              Whether you're relocating for tech jobs in the Bay Area, corporate opportunities in Texas,
              or sunshine in Florida, Dr. Jan connects you with top BHHS agents in your new city.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { city: "Phoenix, AZ", insight: "Closer to family, lower cost than California. Strong job market in healthcare and tech.", time: "4-5 hour drive" },
                { city: "Dallas/Fort Worth, TX", insight: "No state income tax, booming corporate relocation hub. Major employers: AT&T, Toyota, CBRE.", time: "3-hour flight" },
                { city: "Los Angeles, CA", insight: "Entertainment, aerospace, tech. Higher cost but familiar Southwest climate.", time: "4-hour drive" },
                { city: "Denver, CO", insight: "Outdoor lifestyle, growing tech hub. Higher altitude, four seasons.", time: "2-hour flight" },
                { city: "Austin, TX", insight: "Tech boom, no state income tax. Tesla, Oracle, Apple campuses.", time: "2.5-hour flight" },
                { city: "Seattle, WA", insight: "Amazon, Microsoft, Boeing. Rainy but vibrant tech scene.", time: "2.5-hour flight" },
              ].map((dest) => (
                <div key={dest.city} className="bg-white border border-slate-200 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 mb-2">{dest.city}</h3>
                  <p className="text-slate-600 text-sm mb-3">{dest.insight}</p>
                  <p className="text-blue-600 text-xs font-medium">Travel: {dest.time}</p>
                </div>
              ))}
            </div>
          </section>

          {/* The Relocation Process */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              The Relocation Process Step by Step
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">Initial Consultation</h3>
                  <p className="text-slate-600">
                    Discuss your timeline, job start date, corporate relo benefits (if any), and priorities.
                    Dr. Jan creates a customized plan whether you have 2 weeks or 2 months.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">Destination Agent Connection</h3>
                  <p className="text-slate-600">
                    Dr. Jan introduces you to a top-producing BHHS agent in your new city. They're briefed
                    on your timeline, budget, and preferences before your first conversation.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">Las Vegas Home Preparation</h3>
                  <p className="text-slate-600">
                    While you focus on your new opportunity, Dr. Jan coordinates staging, photography,
                    and any needed repairs. She oversees everything so you don't need to be present.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">Coordinated Sale & Purchase</h3>
                  <p className="text-slate-600">
                    Both agents communicate to align timelines. Dr. Jan negotiates closing dates,
                    rent-backs, and contingencies that protect you on both ends of the transaction.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">Remote Closing</h3>
                  <p className="text-slate-600">
                    Electronic signatures and remote notarization mean you can close from anywhere.
                    Dr. Jan coordinates with the title company and ensures everything transfers smoothly.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Relocation FAQs
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "My job starts in 3 weeks. Is that enough time to sell?",
                  a: "Yes—urgently, but it's possible. We can list immediately, price aggressively for quick sale, and leverage our investor/cash buyer network. You may leave before closing, but we manage everything remotely. Dr. Jan has helped many clients sell within 2-4 weeks when necessary.",
                },
                {
                  q: "Should I sell before or after I move?",
                  a: "It depends on your finances and timeline. Selling first means you know exactly how much equity you have for your new purchase. Selling after gives you time to settle in but requires carrying costs or a bridge loan. Dr. Jan advises based on your specific situation.",
                },
                {
                  q: "What if I have a corporate buyout offer?",
                  a: "Corporate buyouts typically offer 90-95% of appraised value. Sometimes you can do better selling on the open market. Dr. Jan provides a market analysis so you can compare the buyout to likely market sale proceeds (minus costs).",
                },
                {
                  q: "How do I handle showings if I've already left?",
                  a: "Dr. Jan manages everything: lockbox access, feedback collection, and offer presentation via video call. Many relocating sellers are long gone before their home sells—it's routine and we have systems for it.",
                },
                {
                  q: "What about my stuff? Should I move it before listing?",
                  a: "Partially furnished homes often show better than empty ones. Dr. Jan advises on what to take, what to leave, and whether professional staging makes sense. For urgent sales, we can list with minimal preparation.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white border border-slate-200 rounded-lg p-6">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Coming TO Las Vegas */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Relocating TO Las Vegas?
            </h2>
            <div className="bg-green-50 border border-green-200 rounded-xl p-8">
              <p className="text-slate-700 mb-4">
                If you're moving TO Las Vegas from another city, Dr. Jan welcomes referrals from BHHS
                agents nationwide. She provides:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Virtual neighborhood tours before you arrive
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    School district guidance and commute analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    New construction vs resale comparisons
                  </li>
                </ul>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Temporary housing recommendations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Local service provider referrals
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Coordination with your selling agent
                  </li>
                </ul>
              </div>
              <p className="text-green-800 font-medium mt-4">
                Moving to Las Vegas? <Link href="/contact" className="underline">Contact Dr. Jan</Link> to start your home search.
              </p>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-slate-900 text-white rounded-xl p-8">
              <blockquote className="text-lg italic mb-4">
                "Relocation sales are complex because you're juggling two markets, two timelines,
                and often a demanding new job. I take the Las Vegas side completely off your plate
                so you can focus on your career. And because I'm part of{" "}
                <strong>Berkshire Hathaway HomeServices</strong>, I can connect you with a trusted
                agent in your new city—someone who'll treat you like a VIP, not just a referral."
              </blockquote>
              <cite className="text-slate-300 font-semibold">
                — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
              </cite>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Make Your Move?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's create a relocation plan that works with your timeline.
              Dr. Jan will coordinate everything so you can focus on your new opportunity.
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
