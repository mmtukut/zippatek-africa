import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/company";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-900 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-700/80 to-primary-900"></div>
      <div className="absolute inset-0 opacity-5 mix-blend-overlay" style={{ backgroundImage: "url(/grid.svg)" }}></div>

      <div className="relative z-10 container text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 !leading-tight max-w-4xl mx-auto">
          We build digital infrastructure for Africa&apos;s property market.
        </h1>
        <p className="text-lg md:text-xl text-primary-100 max-w-3xl mx-auto mb-12">
          Propabridge verifies homes; FastFind360 maps unregistered buildings for government revenue.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" asChild className="group">
            <Link href="/products/">
              Explore Our Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-primary-100/50 hover:bg-white hover:text-primary-900">
            <Link href="/contact/">
              <PlayCircle className="mr-2 h-5 w-5" />
              Book a Demo
            </Link>
          </Button>
        </div>
        <p className="mt-20 text-sm text-primary-100/80">
          Live product:{" "}
          <a className="underline text-accent-cyan" href="https://propabridge.com">
            propabridge.com
          </a>{" "}
          · Cities: {company.marketplaceCities.join(", ")}
        </p>
      </div>
    </section>
  );
};
