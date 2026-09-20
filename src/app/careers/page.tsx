import { PageHeader } from "@/components/page-header";
import { company } from "@/lib/company";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Zippatek Digital Ltd",
  description: "Work with Zippatek Digital Ltd on Propabridge and FastFind360.",
};

export default function CareersPage() {
  return (
    <div>
      <PageHeader
        title="Careers"
        subtitle="We hire people who can ship product for Nigerian cities — engineers, field verification, and estate professionals."
      />
      <div className="container py-24 max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
        <p>
          {company.legalName} is a small team. We do not keep a fake jobs board. If you want to work on Propabridge or FastFind360, write to{" "}
          <a className="text-primary underline" href={`mailto:${company.email}`}>
            {company.email}
          </a>{" "}
          with your CV, the role you want, and one example of work you have already shipped.
        </p>
        <p>Roles we regularly need: full-stack engineering, field property inspection, title review, and city operations in Abuja, Kaduna, Minna, and Gombe.</p>
        <p>Office: {company.address.full}. Propabridge also works from {company.operationsOffice.full}.</p>
      </div>
    </div>
  );
}
