import { PageHeader } from "@/components/page-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Zippatek Digital Ltd",
  description: "Guides, product links, and company documents from Zippatek Digital Ltd.",
};

const resources = [
  {
    title: "Propabridge — live marketplace",
    href: "https://propabridge.com",
    note: "Search verified listings in Abuja, Kaduna, Minna, and Gombe.",
  },
  {
    title: "Verify a property before you pay",
    href: "https://propabridge.com/verify",
    note: "Request a verification report from the Propabridge team.",
  },
  {
    title: "Why property fraud costs Nigerians billions",
    href: "https://propabridge.com/blogs/why-billions-lost-to-property-fraud-nigeria",
    note: "Guide by Aminu S. Muhammad on how buyers lose money and how to check a file.",
  },
  {
    title: "FastFind360 product brief",
    href: "/products/fastfind360/",
    note: "Satellite AI for government revenue recovery, including the Gombe pilot numbers.",
  },
  {
    title: "Company fact sheet",
    href: "/press/",
    note: "Legal name, RC number, founders, and press contacts.",
  },
];

export default function ResourcesPage() {
  return (
    <div>
      <PageHeader
        title="Resources"
        subtitle="Public materials about our products and the Nigerian property problem we work on."
      />
      <div className="container py-24 max-w-3xl space-y-6">
        {resources.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="block bg-card border rounded-xl p-6 hover:border-primary transition-colors"
            {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
            <p className="text-muted-foreground">{item.note}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
