import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Home } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's start your real estate journey today. Get expert guidance, personalized service,
            and results that exceed your expectations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <a href="http://drjanduffy.realscout.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Home className="h-5 w-5" />
                Browse Properties
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="/contact" className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Get In Touch
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="tel:+17025001955" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call Now
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-blue-100 text-sm">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white">Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white">No Obligation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white">Expert Guidance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
