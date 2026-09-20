import type { Metadata } from "next";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: `Privacy Policy | ${company.brandName}`,
  description: `How ${company.legalName} collects, uses, and protects information on zippatek.com and our products.`,
};

export default function PrivacyPage() {
  return (
    <article className="bg-background">
      <div className="bg-primary-900 text-white pt-32 pb-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-primary-100 max-w-3xl">Last updated: 20 September 2026. This policy applies to {company.legalName} ({company.brandName}), RC {company.rcNumber}.</p>
        </div>
      </div>
      <div className="container max-w-3xl py-16 space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-3">Who we are</h2>
          <p>
            {company.legalName} is a Nigerian company building property intelligence products: Propabridge (verified property marketplace) and FastFind360 (satellite AI for government revenue recovery). Registered office: {company.address.full}. Email: {company.email}.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-3">Information we collect</h2>
          <p>When you contact us or use our sites, we may collect your name, email, phone number, organisation, and the message you send. Product platforms may also store account details you choose to provide, such as property search preferences.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-3">How we use it</h2>
          <p>We use this information to respond to enquiries, demonstrate our products, operate Propabridge and FastFind360, improve our services, and meet legal obligations in Nigeria. We do not sell personal data.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-3">Sharing</h2>
          <p>We share data only with service providers who host or process it for us (for example cloud infrastructure), or when the law requires it. Government partners using FastFind360 receive only the property intelligence they are contracted to access.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-3">Your rights</h2>
          <p>You may request access, correction, or deletion of personal data we hold about you by writing to {company.email}.</p>
        </section>
      </div>
    </article>
  );
}
