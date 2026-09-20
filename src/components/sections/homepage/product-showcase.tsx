import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CustomHouseIcon, CustomRocketIcon, CustomSatelliteIcon } from "@/components/icons";

const products = [
  {
    icon: CustomHouseIcon,
    title: "Propabridge",
    tagline: "Verified homes. Live in Nigeria.",
    description:
      "Verification-first marketplace and AI concierge (Propa) at propabridge.com. Physical inspection, title checks, zero inspection fees. Operating in Abuja, Kaduna, Minna, and Gombe.",
    href: "/products/propabridge/",
    badge: "Live product",
  },
  {
    icon: CustomSatelliteIcon,
    title: "FastFind360",
    tagline: "Satellite-powered revenue intelligence",
    description:
      "Government platform using geospatial AI to map unmapped properties and unlock tax revenue that informal development currently hides.",
    href: "/products/fastfind360/",
    badge: "Enterprise",
  },
  {
    icon: CustomRocketIcon,
    title: "What's next",
    tagline: "Property infrastructure for Africa",
    description:
      "We keep shipping tools around verification, mapping, and government data. FastFind360 pilots and new Propabridge cities are the current roadmap.",
    href: "/about/",
    badge: "Roadmap",
  },
];

export const ProductShowcase = () => {
  return (
    <section className="py-24 bg-primary-900 relative">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(/grid.svg)" }}></div>
      <div className="container relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.title}
                className="h-full relative bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col"
              >
                {product.badge && (
                  <span className="absolute top-4 right-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">
                    {product.badge}
                  </span>
                )}
                <div className="mb-6 w-12 h-12 flex items-center justify-center bg-primary-700/50 rounded-lg">
                  <Icon className="w-8 h-8 text-accent-cyan" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                <p className="text-lg text-accent-cyan mb-4 font-medium">{product.tagline}</p>
                <p className="text-gray-300 mb-8 leading-relaxed flex-grow">{product.description}</p>
                <Button variant="ghost" asChild className="text-accent-cyan hover:text-white hover:bg-accent-cyan/20 justify-start p-0 h-auto">
                  <Link href={product.href} className="w-fit">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
