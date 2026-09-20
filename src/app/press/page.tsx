import { PageHeader } from "@/components/page-header";
import { company } from "@/lib/company";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press | Zippatek Digital Ltd",
  description: "Boilerplate, facts, and contacts for journalists covering Zippatek and Propabridge.",
};

export default function PressPage() {
  return (
    <div>
      <PageHeader
        title="Press & media"
        subtitle="Facts you can publish about Zippatek Digital Ltd and our products."
      />
      <div className="container py-24 max-w-3xl space-y-10">
        <section>
          <h2 className="text-2xl font-bold mb-3">Boilerplate</h2>
          <p className="text-muted-foreground leading-relaxed">{company.description}</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-3">Facts</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>Legal name: {company.legalName}</li>
            <li>Registration: RC {company.rcNumber}, Nigeria</li>
            <li>Incorporated: {company.founded}</li>
            <li>HQ: {company.address.full}</li>
            <li>Propabridge office: {company.operationsOffice.full}</li>
            <li>Live consumer product: https://propabridge.com</li>
            <li>Cities: {company.cities.join(", ")}</li>
            <li>Founders: Aminu S. Muhammad (CEO), Muhammad Muhammad Tukur (CTO)</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-3">Press contact</h2>
          <p className="text-muted-foreground">
            {company.email} · {company.phone}
          </p>
        </section>
      </div>
    </div>
  );
}
