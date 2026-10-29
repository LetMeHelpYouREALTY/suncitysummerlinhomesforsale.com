import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { Phone, Mountain, TreePine, DollarSign, Home as HomeIcon } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Berkshire Hathaway HomeServices Mountains Edge | Southwest Las Vegas",
  description:
    "Find Mountains Edge homes with Berkshire Hathaway HomeServices Nevada Properties. Dr. Jan Duffy specializes in this southwest Las Vegas community. Median price $475K. Call (702) 500-1955.",
  keywords: [
    "Berkshire Hathaway HomeServices Mountains Edge",
    "Mountains Edge homes for sale",
    "Mountains Edge Las Vegas",
    "southwest Las Vegas homes",
    "affordable Las Vegas",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the current median home price in Mountains Edge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As of January 2026, Mountains Edge's median home price is $475,000, up 4.5% year-over-year. Prices range from $380,000 for smaller homes to over $750,000 for larger properties with mountain and Strip views.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Mountains Edge different from other Las Vegas communities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mountains Edge offers the largest park in the Las Vegas Valley—the 120-acre Exploration Peak Park with stunning views—plus master-planned amenities at prices below Summerlin or Henderson. It's ideal for buyers seeking value without sacrificing lifestyle.",
      },
    },
    {
      "@type": "Question",
      name: "How is the commute from Mountains Edge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mountains Edge provides easy access to I-215 and I-15, making commutes to the Strip (15-20 minutes), airport (20 minutes), and Henderson (25 minutes) straightforward. The southwest location offers multiple route options.",
      },
    },
    {
      "@type": "Question",
      name: "Is new construction available in Mountains Edge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, several builders offer new construction in Mountains Edge's expanding areas. BHHS provides free buyer representation on new construction purchases, helping buyers navigate builder contracts and negotiate upgrades.",
      },
    },
  ],
};

export default function MountainsEdgePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="max-w-6xl mx-auto mb-6">
            <nav className="text-sm text-slate-500">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              {" / "}
              <Link href="/neighborhoods" className="hover:text-blue-600">Neighborhoods</Link>
              {" / "}
              <span className="text-slate-900">Mountains Edge</span>
            </nav>
          </div>

          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Berkshire Hathaway HomeServices Mountains Edge
            </h1>
            <p className="text-xl text-slate-600">
              Affordable luxury in southwest Las Vegas. Find your Mountains Edge home with{" "}
              <strong>Berkshire Hathaway HomeServices</strong> and Dr. Jan Duffy.
            </p>
          </div>

          {/* Market Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Mountains Edge Market | January 2026
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">$475,000</div>
                <div className="text-slate-300 text-sm">Median Home Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">27 Days</div>
                <div className="text-slate-300 text-sm">Avg. Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">234</div>
                <div className="text-slate-300 text-sm">Active Listings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">+4.5%</div>
                <div className="text-slate-300 text-sm">YoY Appreciation</div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Mountains Edge: Southwest Las Vegas's Best Value for Master-Planned Living
              </h2>
              <p>
                <strong>Mountains Edge</strong> delivers what many Las Vegas buyers are seeking:
                master-planned community amenities at prices significantly below Summerlin or
                Henderson. This 3,500-acre community in southwest Las Vegas offers mountain views,
                exceptional parks, and modern homes—without the premium prices of the valley's
                more established luxury markets. <strong>Berkshire Hathaway HomeServices</strong>
                helps value-conscious buyers discover Mountains Edge's potential.
              </p>
              <p>
                The community's crown jewel is Exploration Peak Park—120 acres of open space that
                stands as the Las Vegas Valley's largest park. From the park's summit, residents
                enjoy panoramic views of the Las Vegas Strip, surrounding mountains, and the desert
                floor stretching to the horizon. It's a daily reminder that Mountains Edge offers
                something special: the combination of suburban convenience with genuine connection
                to Southern Nevada's natural beauty.
              </p>
              <p>
                <strong>Berkshire Hathaway HomeServices Nevada Properties</strong> serves Mountains
                Edge buyers with the same commitment to excellence we bring to the valley's luxury
                markets. Dr. Jan Duffy understands that value doesn't mean compromise—it means
                finding the right home at the right price. For families priced out of Summerlin
                or Henderson, Mountains Edge delivers comparable lifestyle at accessible prices.
              </p>

              {/* Community Highlights */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Community Highlights</h3>
              <div className="grid md:grid-cols-2 gap-8 not-prose">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Mountain className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-slate-900 text-lg">Exploration Peak Park</h4>
                  </div>
                  <p className="text-slate-600">
                    The valley's largest park spans 120 acres with hiking trails, picnic areas,
                    playgrounds, and an iconic summit offering 360-degree views of Las Vegas. On
                    clear days, you can see the Strip's towers glittering against the mountain
                    backdrop—a view that never gets old. This park alone makes Mountains Edge unique.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <DollarSign className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-slate-900 text-lg">Exceptional Value</h4>
                  </div>
                  <p className="text-slate-600">
                    Mountains Edge's median price of $475,000 is roughly $150,000 less than Summerlin
                    and $50,000 less than Henderson for comparable homes. Buyers get modern
                    construction, master-planned amenities, and mountain views at prices that
                    allow for better financial flexibility. It's affordable luxury done right.
                  </p>
                </div>
              </div>

              {/* Schools */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Mountains Edge School Districts</h3>
              <div className="not-prose bg-white border border-slate-200 rounded-xl p-6">
                <p className="text-slate-700 mb-4">
                  Mountains Edge is served by Clark County School District with several newer schools
                  built for the growing community:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Elementary Schools</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Stuckey Elementary</li>
                      <li>• Wright Elementary</li>
                      <li>• Cynthia Cunningham Elementary</li>
                      <li>• Ernest Becker Elementary</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Middle & High Schools</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Sierra Vista High School</li>
                      <li>• Liberty High School</li>
                      <li>• Mannion Middle School</li>
                      <li>• Del Webb Middle School</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Charter/Private</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Pinecrest Academy</li>
                      <li>• Coral Academy of Science</li>
                      <li>• Somerset Academy</li>
                      <li>• Bishop Gorman (15 min)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Commute Times */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Commute Times from Mountains Edge</h3>
              <div className="not-prose overflow-x-auto">
                <table className="w-full bg-white border border-slate-200 rounded-lg">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Destination</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Distance</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Drive Time</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Rush Hour</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr><td className="px-4 py-3">Las Vegas Strip</td><td className="px-4 py-3">10 miles</td><td className="px-4 py-3">15 min</td><td className="px-4 py-3">20-30 min</td></tr>
                    <tr className="bg-slate-50"><td className="px-4 py-3">McCarran Airport (LAS)</td><td className="px-4 py-3">12 miles</td><td className="px-4 py-3">18 min</td><td className="px-4 py-3">25-35 min</td></tr>
                    <tr><td className="px-4 py-3">Downtown Las Vegas</td><td className="px-4 py-3">15 miles</td><td className="px-4 py-3">22 min</td><td className="px-4 py-3">30-40 min</td></tr>
                    <tr className="bg-slate-50"><td className="px-4 py-3">Henderson</td><td className="px-4 py-3">15 miles</td><td className="px-4 py-3">20 min</td><td className="px-4 py-3">25-35 min</td></tr>
                    <tr><td className="px-4 py-3">Southern Highlands</td><td className="px-4 py-3">5 miles</td><td className="px-4 py-3">10 min</td><td className="px-4 py-3">12-15 min</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 text-sm mt-2 not-prose">
                Mountains Edge's I-215 access provides excellent connectivity to both I-15 and the entire valley.
              </p>

              {/* Shopping & Amenities */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Shopping, Dining & Healthcare</h3>
              <div className="not-prose grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-xl p-6">
                  <h5 className="font-bold text-slate-900 mb-3">Shopping & Entertainment</h5>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Mountains Edge Marketplace:</strong> Smith's, CVS, restaurants, services within community</li>
                    <li><strong>Town Square Las Vegas:</strong> 10 min—Whole Foods, Apple, AMC Theatre, 150+ stores</li>
                    <li><strong>Las Vegas Premium Outlets South:</strong> 10 min—Designer outlet shopping</li>
                    <li><strong>M Resort Spa Casino:</strong> 10 min—Gaming, dining, spa, entertainment</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-xl p-6">
                  <h5 className="font-bold text-slate-900 mb-3">Healthcare & Services</h5>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Southern Hills Hospital:</strong> Full-service hospital, 24/7 ER, 10 minutes</li>
                    <li><strong>St. Rose Dominican - Siena:</strong> Comprehensive healthcare, 12 minutes</li>
                    <li><strong>Southwest Medical:</strong> Multiple clinics throughout southwest valley</li>
                    <li><strong>Dignity Health:</strong> Urgent care and primary care locations</li>
                  </ul>
                </div>
              </div>

              {/* Parks & Recreation */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Parks & Recreation</h3>
              <div className="not-prose bg-green-50 border border-green-200 rounded-xl p-6">
                <p className="text-slate-700 mb-4">
                  Mountains Edge features exceptional outdoor amenities centered around Exploration Peak Park:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Exploration Peak Park:</strong> 120 acres—valley's largest park. Hiking trails to summit with 360° views of Strip and mountains.</li>
                    <li><strong>Mountains Edge Regional Park:</strong> Sports fields, playground, splash pad, walking trails</li>
                    <li><strong>Community Pools:</strong> Multiple pool facilities throughout the community</li>
                  </ul>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Trail System:</strong> Miles of walking/biking trails connecting neighborhoods</li>
                    <li><strong>Dog Parks:</strong> Multiple off-leash areas for pets</li>
                    <li><strong>Golf:</strong> Rhodes Ranch Golf Club and Southern Highlands Golf Club nearby</li>
                  </ul>
                </div>
              </div>

              <p className="mt-8">
                The current market shows <strong>234 active listings</strong> with homes averaging
                <strong> 27 days on market</strong>. The median price of <strong>$475,000</strong>
                represents steady 4.5% year-over-year appreciation—sustainable growth that suggests
                continuing value. Properties range from $380,000 for entry-level homes to over
                $750,000 for larger properties with premium views and upgraded features.
              </p>
              <p>
                Working with <strong>Berkshire Hathaway HomeServices</strong> in Mountains Edge means
                getting honest guidance about where the community offers the best value. Dr. Jan Duffy
                helps buyers identify neighborhoods with the strongest appreciation potential, homes
                with the best views, and properties that represent genuine value rather than
                superficial appeal. That expertise—combined with the BHHS commitment to client
                service—ensures Mountains Edge buyers make informed decisions.
              </p>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "Mountains Edge is where I send buyers who want master-planned living without the
                Summerlin price tag. The park is incredible, the homes are modern, and the value
                is undeniable. As a Berkshire Hathaway HomeServices agent, I help clients see
                that finding the right home isn't about spending the most—it's about spending wisely."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
              </cite>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Frequently Asked Questions About Mountains Edge
            </h2>
            <div className="space-y-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  What is the current median home price in Mountains Edge?
                </h3>
                <p className="text-slate-600">
                  As of January 2026, Mountains Edge's median home price is $475,000, up 4.5%
                  year-over-year. Prices range from $380,000 for smaller homes to over $750,000
                  for larger properties with mountain and Strip views.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  What makes Mountains Edge different from other Las Vegas communities?
                </h3>
                <p className="text-slate-600">
                  Mountains Edge offers the largest park in the Las Vegas Valley—the 120-acre
                  Exploration Peak Park with stunning views—plus master-planned amenities at prices
                  below Summerlin or Henderson. It's ideal for buyers seeking value without
                  sacrificing lifestyle.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  How is the commute from Mountains Edge?
                </h3>
                <p className="text-slate-600">
                  Mountains Edge provides easy access to I-215 and I-15, making commutes to the
                  Strip (15-20 minutes), airport (20 minutes), and Henderson (25 minutes)
                  straightforward. The southwest location offers multiple route options.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  Is new construction available in Mountains Edge?
                </h3>
                <p className="text-slate-600">
                  Yes, several builders offer new construction in Mountains Edge's expanding areas.
                  BHHS provides free buyer representation on new construction purchases, helping
                  buyers navigate builder contracts and negotiate upgrades.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Discover Mountains Edge Value
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact Dr. Jan Duffy, your Berkshire Hathaway HomeServices Mountains Edge specialist,
              for expert guidance in finding exceptional value in southwest Las Vegas.
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
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: January 2026</div>
      </main>
      <RealScoutListings />
      <Footer />
    </>
  );
}
