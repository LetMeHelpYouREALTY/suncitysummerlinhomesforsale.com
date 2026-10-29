import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  Phone,
  Shield,
  Scale,
  Heart,
  Clock,
  FileText,
  CheckCircle,
  Lock,
  Users,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Divorce & Probate Home Sales Las Vegas | Berkshire Hathaway HomeServices",
  description:
    "Sensitive real estate situations handled with discretion. Dr. Jan Duffy helps with divorce sales, probate, estate liquidation, and court-ordered sales. Call (702) 500-1955.",
  keywords: [
    "divorce home sale Las Vegas",
    "probate real estate Las Vegas",
    "estate sale Las Vegas",
    "court ordered sale Nevada",
    "Berkshire Hathaway HomeServices divorce",
  ],
};

export default function DivorceProbatePage() {
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
              <span className="text-slate-900">Divorce & Probate</span>
            </nav>
          </div>

          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-slate-100 text-slate-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Shield className="h-4 w-4 mr-2" />
              Handled with Discretion & Professionalism
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Difficult Situations,<br />Expert Guidance
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              When life gets complicated, you need an agent who handles sensitive transactions
              with discretion, expertise, and compassion.
            </p>
            <a
              href="tel:+17025001955"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-700 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Confidential Consultation → (702) 500-1955
            </a>
          </div>

          {/* Situations We Help With */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Situations We Help Navigate
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <Scale className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900">Divorce Sales</h3>
                </div>
                <p className="text-slate-600 mb-4">
                  Division of marital assets requires neutral, professional representation.
                  We work with both parties and their attorneys to ensure a fair sale process.
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Court-approved valuations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Communication with both attorneys
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Neutral, documented process
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 rounded-full p-3 mr-4">
                    <FileText className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900">Probate & Estate Sales</h3>
                </div>
                <p className="text-slate-600 mb-4">
                  Handling a loved one's estate is emotionally and legally complex.
                  We guide executors through the sale process while respecting the family.
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Probate court compliance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Estate attorney coordination
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Property preparation guidance
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-amber-100 rounded-full p-3 mr-4">
                    <Clock className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900">Urgent Sales</h3>
                </div>
                <p className="text-slate-600 mb-4">
                  Job relocation, health issues, or financial pressure sometimes require
                  fast action. We price strategically and market aggressively.
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Accelerated marketing plans
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Cash buyer network access
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Quick close coordination
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 rounded-full p-3 mr-4">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900">Multi-Party Sales</h3>
                </div>
                <p className="text-slate-600 mb-4">
                  Multiple heirs, business partners, or co-owners? We facilitate consensus
                  and keep everyone informed throughout the process.
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Multi-party communication
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Documented decision process
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Equitable distribution guidance
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Our Approach */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Our Approach to Sensitive Transactions
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <Lock className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Confidentiality First</h3>
                <p className="text-slate-600 text-sm">
                  Your situation stays private. We don't discuss circumstances with other agents
                  or include details in marketing that could compromise your privacy.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <Scale className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Neutral & Professional</h3>
                <p className="text-slate-600 text-sm">
                  In multi-party situations, we represent the property's sale—not one party over
                  another. Fair, documented processes protect everyone.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Compassionate Guidance</h3>
                <p className="text-slate-600 text-sm">
                  These aren't just transactions—they're life transitions. We handle them with
                  the care and respect your situation deserves.
                </p>
              </div>
            </div>
          </section>

          {/* Legal Coordination */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <FileText className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="font-bold text-xl text-slate-900">
                  We Work With Your Legal Team
                </h3>
              </div>
              <p className="text-slate-700 mb-4">
                Divorce, probate, and estate sales involve legal complexities beyond standard
                real estate. We coordinate seamlessly with:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Family law attorneys
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Estate planning lawyers
                  </li>
                </ul>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Probate court requirements
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Tax professionals
                  </li>
                </ul>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Mediators
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Financial advisors
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Nevada-Specific Information */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Nevada-Specific Considerations
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 mb-8">
              <p>
                Nevada has unique laws that affect divorce and probate real estate sales. Understanding
                these nuances is critical for a smooth transaction. Dr. Jan Duffy has extensive experience
                navigating Nevada's specific requirements.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-4">Nevada Divorce Sales</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <Scale className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Community Property State:</strong> Nevada is one of nine community property
                      states. Assets acquired during marriage are typically split 50/50, including real
                      estate appreciation.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Scale className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Joint Decision Required:</strong> Both spouses must agree on listing price,
                      offers, and closing terms—or a court order is needed. Dr. Jan facilitates agreement
                      through documented processes.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Scale className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Court Approval:</strong> Some divorce decrees require court approval for
                      real estate sales. Dr. Jan coordinates timing with your attorney.
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-4">Nevada Probate Sales</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <FileText className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Probate Timeline:</strong> Nevada probate typically takes 6-12 months. Real
                      estate can often be sold during this period with proper court authorization.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FileText className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Letters Testamentary:</strong> The personal representative needs Letters
                      Testamentary to legally sell. We wait for these before listing but can prepare
                      the property in advance.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FileText className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Court Confirmation:</strong> Some sales require court confirmation, especially
                      if sold below appraised value. Dr. Jan understands these requirements and timelines.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* The Process */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              How We Handle Sensitive Transactions
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">Confidential Initial Consultation</h3>
                  <p className="text-slate-600">
                    We start with a private conversation—in person, by phone, or video. Dr. Jan learns about
                    your situation, timeline, and concerns. For divorce cases, she can meet with parties
                    separately if needed. All discussions are confidential.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">Professional Valuation & Documentation</h3>
                  <p className="text-slate-600">
                    A comprehensive market analysis provides an objective valuation—crucial for divorce
                    settlements and probate proceedings. This documented valuation can be submitted to
                    courts and attorneys as needed.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">Coordinated Listing Strategy</h3>
                  <p className="text-slate-600">
                    Once all parties agree (or court authorization is obtained), we list the property with
                    appropriate marketing. We can use discrete marketing if privacy is a priority, or
                    full exposure if speed is the goal.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">Multi-Party Communication</h3>
                  <p className="text-slate-600">
                    All parties and their representatives receive the same information simultaneously.
                    Showings, offers, and negotiations are documented and shared transparently. No one
                    is left out of the loop.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">Clean Closing & Distribution</h3>
                  <p className="text-slate-600">
                    We coordinate with the title company to ensure proceeds are distributed according to
                    court orders or agreements. For probate, we ensure proper documentation for estate
                    accounting.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Can one spouse sell the house without the other's consent?",
                  a: "In Nevada, generally no. Both spouses must agree to sell community property. If one spouse refuses, the other can petition the court for an order to sell. Dr. Jan has worked with many cases where court intervention was needed and can provide valuations and testimony if required.",
                },
                {
                  q: "How long does a probate sale take in Nevada?",
                  a: "The probate process typically takes 6-12 months, but the house can often be sold during this period. Once Letters Testamentary are issued, the personal representative has authority to list. The actual sale (listing to closing) usually takes 30-60 days, similar to regular sales.",
                },
                {
                  q: "Do I need to make repairs before selling an estate property?",
                  a: "Not necessarily. Many estate sales are 'as-is' to avoid further estate expenses. Dr. Jan can advise on whether minimal improvements would significantly increase the sale price. She also has connections to estate cleanout services and can coordinate property preparation.",
                },
                {
                  q: "What if the divorcing parties disagree on the listing price?",
                  a: "Dr. Jan provides an objective market analysis that both parties can review. If disagreement persists, a formal appraisal (at shared cost) can settle the matter. In contentious cases, the listing price may be court-ordered based on appraised value.",
                },
                {
                  q: "Can I sell a property if there are multiple heirs who disagree?",
                  a: "Yes, but it requires navigating the disagreement. Often, one heir can buy out others. If that's not possible, a partition action may force a sale. Dr. Jan has experience facilitating consensus and can work with your estate attorney on options.",
                },
                {
                  q: "What happens to the mortgage during a divorce sale?",
                  a: "The mortgage is paid off at closing from the sale proceeds. If the home is underwater (worth less than owed), options include short sale negotiation with the lender or other arrangements. Dr. Jan can advise on the best approach for your situation.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white border border-slate-200 rounded-lg p-6">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why BHHS Matters */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Why Berkshire Hathaway HomeServices for Sensitive Sales
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
                <Shield className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">Credibility & Trust</h3>
                <p className="text-slate-600 text-sm">
                  The Berkshire Hathaway name carries weight with attorneys, judges, and opposing
                  parties. Our valuations and processes are respected because of the brand's
                  reputation for integrity.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
                <Scale className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">Professional Standards</h3>
                <p className="text-slate-600 text-sm">
                  BHHS agents follow strict ethical guidelines and documentation standards. This
                  protects all parties and provides a defensible paper trail for legal proceedings.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
                <Users className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">Expert Network</h3>
                <p className="text-slate-600 text-sm">
                  Dr. Jan has established relationships with family law attorneys, probate
                  specialists, and estate planners throughout Las Vegas. She can refer trusted
                  professionals if you need legal guidance.
                </p>
              </div>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-slate-900 text-white rounded-xl p-8">
              <blockquote className="text-lg italic mb-4">
                "When you're going through a divorce or handling a loved one's estate, the last
                thing you need is real estate stress. I've handled hundreds of sensitive transactions,
                and I understand these situations require more than market expertise—they require
                discretion, patience, and genuine care. <strong>Berkshire Hathaway HomeServices</strong>
                gives me the resources and credibility these situations demand. Your privacy and
                peace of mind come first."
              </blockquote>
              <cite className="text-slate-300 font-semibold">
                — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
              </cite>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-slate-800 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Confidential Consultation
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Discuss your situation privately with Dr. Jan. No pressure, no judgment—just
              professional guidance to help you move forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17025001955"
                className="inline-flex items-center justify-center bg-white text-slate-900 px-8 py-4 rounded-md font-bold text-lg hover:bg-slate-100 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call (702) 500-1955
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-500 transition-colors"
              >
                Email Confidentially
              </Link>
            </div>
            <p className="mt-6 text-slate-400 text-sm">
              All communications are confidential.
            </p>
          </section>
        </div>
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: January 2026</div>
      </main>
      <RealScoutListings />
      <Footer />
    </>
  );
}
