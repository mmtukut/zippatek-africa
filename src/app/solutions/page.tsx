import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions | Zippatek Digital Ltd",
  description:
    "Zippatek products for home seekers, landlords, agents, and government revenue boards in Nigeria.",
};

const audiences = [
  {
    title: "Buyers and renters",
    body: "Search verified homes on Propabridge. Chat with Propa about budget, bedrooms, and neighbourhood. Book viewings with no inspection fee.",
    href: "https://propabridge.com",
    cta: "Open Propabridge",
    external: true,
  },
  {
    title: "Landlords and developers",
    body: "List after inspection and title review. We bring pre-screened demand in Abuja, Kaduna, Minna, and Gombe instead of inflating prices to chase traffic.",
    href: "https://propabridge.com/submit-property",
    cta: "Submit a property",
    external: true,
  },
  {
    title: "Agents and partners",
    body: "Get matched to verified buyer briefs. Earn 5% on deals that close. The listing and buyer are already checked before you spend time on the file.",
    href: "https://propabridge.com",
    cta: "Partner with Propabridge",
    external: true,
  },
  {
    title: "State governments",
    body: "FastFind360 uses satellite AI to find buildings that never entered the tax roll. Use it to register informal development and recover revenue.",
    href: "/products/fastfind360/",
    cta: "See FastFind360",
    external: false,
  },
];

export default function SolutionsPage() {
  return (
    <div>
      <PageHeader
        title="Solutions"
        subtitle="One company. Two products. Citizens get verified homes. Governments get a map of the city that actually exists."
      />
      <div className="container py-24 grid md:grid-cols-2 gap-8">
        {audiences.map((item) => (
          <article key={item.title} className="bg-card border rounded-2xl p-8 flex flex-col">
            <h2 className="text-2xl font-bold mb-3">{item.title}</h2>
            <p className="text-muted-foreground flex-grow mb-6">{item.body}</p>
            <Button asChild>
              {item.external ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer">{item.cta}</a>
              ) : (
                <Link href={item.href}>{item.cta}</Link>
              )}
            </Button>
          </article>
        ))}
      </div>
    </div>
  );
}
