import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { 
  Phone, 
  Star, 
  Shield, 
  Globe, 
  Eye, 
  CheckCircle,
  Home,
  MapPin,
  DollarSign,
  Award,
  ArrowRight,
  Camera,
  Users,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Las Vegas Luxury Homes for Sale | Berkshire Hathaway HomeServices",
  description:
    "Discover Las Vegas luxury real estate with Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties. The Ridges, MacDonald Highlands, Summerlin, Southern Highlands. $1M+ homes. Call (702) 500-1955.",
  keywords: [
    "Las Vegas luxury homes",
    "The Ridges Las Vegas",
    "Summerlin luxury real estate",
    "Southern Highlands homes",
    "Berkshire Hathaway luxury",
    "million dollar homes Las Vegas",
    "MacDonald Highlands Henderson",
    "luxury real estate agent Las Vegas",
  ],
};

const luxurySchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Las Vegas Luxury Home Services",
  provider: {
    "@type": "RealEstateAgent",
    name: "Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties",
    telephone: "+17025001955",
  },
  areaServed: "Las Vegas, Henderson, Summerlin luxury communities",
  serviceType: "Luxury Real Estate",
  priceRange: "$1,000,000+",
};

const luxuryNeighborhoods = [
  {
    name: "The Ridges",
    location: "Summerlin",
    priceRange: "$2M - $15M+",
    description:
      "Ultra-exclusive guard-gated community with custom estates, celebrity residents, and Bear's Best Golf Club. One of the most prestigious addresses in Las Vegas with stunning Red Rock views.",
    features: ["Guard-gated", "Custom estates", "Celebrity homes", "Golf course"],
  },
  {
    name: "MacDonald Highlands",
    location: "Henderson",
    priceRange: "$1.5M - $10M+",
    description:
      "Prestigious hillside community with Dragon Ridge Country Club and panoramic Strip views. Features modern contemporary architecture and exclusive amenities.",
    features: ["Hillside location", "Strip views", "Country club", "Private lots"],
  },
  {
    name: "Southern Highlands",
    location: "Las Vegas",
    priceRange: "$800K - $5M+",
    description:
      "Guard-gated luxury community featuring championship golf, stunning mountain views, and resort-style living. Multiple neighborhoods within the community.",
    features: ["Guard-gated", "Golf community", "Mountain views", "Multiple villages"],
  },
  {
    name: "The Summit Club",
    location: "Summerlin",
    priceRange: "$3M - $20M+",
    description:
      "Ultra-private Tom Fazio golf community with only 250 homesites. Las Vegas's most exclusive address with membership by invitation only.",
    features: ["Private golf", "250 homesites", "Invitation only", "Tom Fazio design"],
  },
  {
    name: "Ascaya",
    location: "Henderson",
    priceRange: "$2M - $12M+",
    description:
      "Modern architectural community with panoramic views and contemporary custom homes. Known for innovative design and dramatic hillside settings.",
    features: ["Modern architecture", "Panoramic views", "Custom homes", "Hillside lots"],
  },
  {
    name: "Lake Las Vegas",
    location: "Henderson",
    priceRange: "$800K - $8M+",
    description:
      "Resort-style living on a 320-acre private lake with Mediterranean-inspired architecture. Golf, water sports, and a European village atmosphere.",
    features: ["Lakefront living", "Resort amenities", "Golf courses", "Mediterranean style"],
  },
];

const luxuryServices = [
  "Private, off-market listing opportunities",
  "Professional architectural photography",
  "Drone and aerial video production",
  "Global syndication to luxury platforms",
  "Targeted marketing to high-net-worth buyers",
  "Confidential transactions available",
  "International buyer connections",
  "Concierge closing coordination",
  "Staging consultations with luxury specialists",
  "Market analysis for pricing strategy",
];

export default function LuxuryHomesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(luxurySchema) }}
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Las Vegas Luxury Real Estate
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              <strong>Berkshire Hathaway HomeServices</strong> represents the gold standard in
              luxury real estate. When you're buying or selling a $1M+ home, trust matters more than
              ever. Our global network, discretion, and expertise ensure your luxury transaction 
              receives the exceptional service it deserves.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
              <span className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-1" /> White Glove Service</span>
              <span className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-1" /> Global Buyer Network</span>
              <span className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-1" /> Discrete Transactions</span>
            </div>
          </div>

          {/* Luxury Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Las Vegas Luxury Market Statistics | January 2026
            </h2>
            <p className="text-slate-300 text-center max-w-3xl mx-auto mb-8">
              The Las Vegas luxury market continues to attract affluent buyers from California, 
              the Midwest, and international markets. Understanding current market conditions 
              is essential for both buyers and sellers in this segment.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">$1.2M</div>
                <div className="text-slate-300 text-sm">Median Luxury Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">+8.5%</div>
                <div className="text-slate-300 text-sm">YoY Appreciation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">890</div>
                <div className="text-slate-300 text-sm">Active $1M+ Listings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">45 Days</div>
                <div className="text-slate-300 text-sm">Avg. Days on Market</div>
              </div>
            </div>
          </section>

          {/* Why BHHS for Luxury */}
          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Why Choose Berkshire Hathaway for Luxury Real Estate
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              In luxury real estate, the agent you choose can impact both the sale price and 
              the transaction experience. Berkshire Hathaway HomeServices agents bring resources, 
              reputation, and expertise that make a measurable difference in this competitive segment.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Trusted Brand",
                  desc: "The Berkshire Hathaway name commands respect and attracts serious, qualified buyers to your property",
                },
                {
                  icon: Globe,
                  title: "Global Reach",
                  desc: "50,000+ agents worldwide connecting your property to affluent buyers in every major market",
                },
                {
                  icon: Eye,
                  title: "Discretion",
                  desc: "Privacy-focused marketing for clients who value confidentiality. Off-market sales available.",
                },
                {
                  icon: Star,
                  title: "White Glove",
                  desc: "Concierge-level service for luxury transactions from first showing to closing and beyond",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="text-center p-6 bg-slate-50 rounded-xl">
                    <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Expert Luxury Real Estate Guidance
            </h2>
            <div className="bg-slate-50 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "Luxury buyers expect discretion, market expertise, and flawless execution. In this
                price range, one wrong move can cost hundreds of thousands of dollars. That's why
                the Berkshire Hathaway HomeServices name matters—it tells buyers and sellers alike
                that they're working with the best. I've helped clients purchase and sell homes from 
                $1 million to over $10 million, and every transaction receives my full attention 
                and the complete resources of BHHS."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, BHHS Nevada Properties | Serving Las Vegas Since 2008
              </cite>
            </div>
          </section>

          {/* Luxury Neighborhoods */}
          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Premier Las Vegas Luxury Communities
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Las Vegas offers some of the most desirable luxury communities in the Southwest. From 
              ultra-exclusive guard-gated enclaves to lakefront estates, these premier neighborhoods 
              attract discerning buyers seeking the finest in design, amenities, and lifestyle.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {luxuryNeighborhoods.map((neighborhood) => (
                <div
                  key={neighborhood.name}
                  className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-lg text-slate-900">{neighborhood.name}</h3>
                      <p className="text-sm text-slate-500">{neighborhood.location}</p>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                      {neighborhood.priceRange}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm mb-4">{neighborhood.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {neighborhood.features.map((feature) => (
                      <span key={feature} className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/neighborhoods"
                className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center"
              >
                Explore All Neighborhoods <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </section>

          {/* Luxury Services */}
          <section className="mb-16 bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">Luxury Home Marketing Services</h2>
            <p className="text-blue-100 text-center max-w-3xl mx-auto mb-8">
              Selling a luxury home requires more than just an MLS listing. Dr. Jan Duffy provides 
              comprehensive marketing services that showcase your property to qualified buyers 
              worldwide through Berkshire Hathaway HomeServices' premium marketing channels.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {luxuryServices.map((service) => (
                <div key={service} className="flex items-center bg-blue-500/30 p-4 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-blue-200 mr-3 flex-shrink-0" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Buying vs Selling */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Luxury Buyer & Seller Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 rounded-xl p-8">
                <h3 className="font-bold text-xl text-slate-900 mb-4 flex items-center">
                  <Home className="h-6 w-6 text-blue-600 mr-2" />
                  For Luxury Buyers
                </h3>
                <p className="text-slate-600 mb-4">
                  Access to exclusive listings, off-market opportunities, and discrete showings. 
                  Dr. Jan provides personalized search services for discerning buyers seeking 
                  Las Vegas's finest properties.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-slate-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Off-market property access
                  </li>
                  <li className="flex items-center text-slate-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Private, scheduled showings
                  </li>
                  <li className="flex items-center text-slate-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Expert negotiation
                  </li>
                  <li className="flex items-center text-slate-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Confidential representation
                  </li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-xl p-8">
                <h3 className="font-bold text-xl text-slate-900 mb-4 flex items-center">
                  <DollarSign className="h-6 w-6 text-blue-600 mr-2" />
                  For Luxury Sellers
                </h3>
                <p className="text-slate-600 mb-4">
                  World-class marketing that reaches qualified buyers globally. The Berkshire 
                  Hathaway brand attracts serious buyers and commands premium prices for 
                  exceptional properties.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-slate-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Professional photography & video
                  </li>
                  <li className="flex items-center text-slate-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Global marketing syndication
                  </li>
                  <li className="flex items-center text-slate-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Off-market sale options
                  </li>
                  <li className="flex items-center text-slate-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Strategic pricing analysis
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Frequently Asked Questions About Las Vegas Luxury Homes
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Luxury real estate transactions involve unique considerations. Here are answers 
              to common questions from buyers and sellers in this market segment.
            </p>
            <div className="space-y-4">
              {[
                {
                  q: "What defines a luxury home in Las Vegas?",
                  a: "Generally, homes priced at $1 million and above are considered luxury in Las Vegas. The ultra-luxury segment starts around $3 million. Features typically include custom architecture, premium locations in guard-gated communities, high-end finishes, and exclusive amenities like private pools, home theaters, and wine cellars.",
                },
                {
                  q: "How long do luxury homes take to sell in Las Vegas?",
                  a: "Luxury homes average 45 days on market, longer than the overall market average of 28 days. However, exceptional properties priced correctly can sell quickly, sometimes within weeks. Marketing strategy and pricing are crucial at this level—overpricing can lead to properties sitting for months.",
                },
                {
                  q: "Can I sell my luxury home privately without public listing?",
                  a: "Yes. Dr. Jan offers confidential, off-market sales for clients who prefer discretion. Berkshire Hathaway HomeServices' network can connect your property with qualified buyers without public marketing, protecting your privacy while still reaching serious buyers.",
                },
                {
                  q: "What commission do you charge for luxury home sales?",
                  a: "Commission rates are negotiable and discussed during your consultation. Dr. Jan provides transparent pricing based on your property and marketing needs. The value of Berkshire Hathaway's global reach and reputation often results in higher sale prices that more than offset commission.",
                },
                {
                  q: "Do you work with international buyers?",
                  a: "Yes. Berkshire Hathaway HomeServices' global network includes agents in major international markets. Dr. Jan has experience working with buyers from Asia, Europe, and the Middle East who are interested in Las Vegas luxury properties.",
                },
                {
                  q: "What's the process for buying a luxury home in Las Vegas?",
                  a: "The process is similar to standard purchases but with additional considerations. Proof of funds is typically required before showings. Inspections are more extensive. Dr. Jan coordinates all aspects, including working with attorneys, financial advisors, and other professionals as needed.",
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
          <section className="text-center bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Discover Las Vegas Luxury Living
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Whether buying or selling a luxury property, Dr. Jan Duffy provides the expertise and
              Berkshire Hathaway prestige your transaction deserves. Confidential consultations 
              available for discerning clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17025001955"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call (702) 500-1955
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"
              >
                Schedule Private Consultation
              </Link>
            </div>
            <p className="mt-4 text-slate-400 text-sm">
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
