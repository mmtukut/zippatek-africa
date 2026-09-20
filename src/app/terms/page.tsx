import type { Metadata } from "next";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: `Terms of Service | ${company.brandName}`,
  description: `Terms for using the ${company.legalName} website and products.`,
};

export default function TermsPage() {
  return (
    <article className="bg-background">
      <div className="bg-primary-900 text-white pt-32 pb-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-primary-100 max-w-3xl">Last updated: 20 September 2026. These terms govern use of {company.website} and related {company.brandName} products.</p>
        </div>
      </div>
      <div className="container max-w-3xl py-16 space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-3">The company</h2>
          <p>
            {company.legalName} (RC {company.rcNumber}) operates Propabridge and FastFind360 from {company.address.full}. Contact {company.email} or {company.phone}.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-3">Website use</h2>
          <p>This website describes our company and products. Information is provided so visitors, partners, and reviewers can understand what we build. Do not copy our branding or materials without written permission.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-3">Products</h2>
          <p>Access to Propabridge and FastFind360 may require a separate agreement. Product features in public demos or waitlists may change as we ship.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-3">Contact</h2>
          <p>Questions about these terms: {company.email}.</p>
        </section>
      </div>
    </article>
  );
}
