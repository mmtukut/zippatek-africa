import { PageHeader } from "@/components/page-header";
import { blogs, blogUrl, faqs, propabridge } from "@/lib/propabridge-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Zippatek Digital Ltd",
  description: "Guides, FAQs, and product links from Zippatek Digital Ltd and Propabridge.",
};

const tools = [
  {
    title: "Propabridge — live marketplace",
    href: propabridge.liveUrl,
    note: "Search verified listings in Abuja, Kaduna, Minna, and Gombe.",
  },
  {
    title: "Verify a property before you pay",
    href: propabridge.verifyUrl,
    note: "Request a verification report from the Propabridge team.",
  },
  {
    title: "FastFind360 product brief",
    href: "/products/fastfind360/",
    note: "Satellite AI for government revenue recovery, including the Gombe pilot numbers.",
  },
  {
    title: "Company fact sheet",
    href: "/press/",
    note: "Legal name, RC number, founders, launch facts, and press contacts.",
  },
];

export default function ResourcesPage() {
  return (
    <div>
      <PageHeader
        title="Resources"
        subtitle="Public materials about our products and the Nigerian property problem we work on. Guides live on propabridge.com."
      />
      <div className="container py-24 max-w-3xl space-y-16">
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Product and company</h2>
          {tools.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block bg-card border rounded-xl p-6 hover:border-primary transition-colors"
              {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.note}</p>
            </a>
          ))}
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Guides on Propabridge</h2>
          <div className="space-y-4">
            {blogs.map((post) => (
              <a
                key={post.slug}
                href={blogUrl(post.slug)}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-card border rounded-xl p-6 hover:border-primary transition-colors"
              >
                <p className="text-sm text-primary font-medium mb-1">{post.date}</p>
                <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Marketplace FAQs</h2>
          <dl className="space-y-6">
            {faqs.map((item) => (
              <div key={item.question} className="border-b border-border pb-6">
                <dt className="font-semibold mb-2">{item.question}</dt>
                <dd className="text-muted-foreground leading-relaxed">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </div>
  );
}
