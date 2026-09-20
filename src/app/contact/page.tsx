import { ContactForm } from "./contact-form";
import { PageHeader } from "@/components/page-header";
import { company } from "@/lib/company";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Zippatek Digital Ltd",
  description: `Contact ${company.legalName} about Propabridge, FastFind360, press, or partnerships.`,
};

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        title="Contact us"
        subtitle="Demos, government pilots, press, and partnerships. We reply from hello@zippatek.com."
      />
      <div className="py-24 bg-background">
        <div className="container grid lg:grid-cols-5 gap-12">
          <aside className="lg:col-span-2 space-y-6 text-sm">
            <div className="bg-card border rounded-2xl p-6 space-y-3">
              <h2 className="text-xl font-bold">Zippatek Digital Ltd</h2>
              <p>RC {company.rcNumber}</p>
              <p>{company.address.full}</p>
              <p>Registered HQ: {company.address.full}</p>
              <p>Operations: {company.operationsOffice.full}</p>
              <p>
                Company:{" "}
                <a className="text-primary underline" href={`mailto:${company.email}`}>{company.email}</a>
                {" · "}
                <a className="text-primary underline" href={company.phoneHref}>{company.phone}</a>
              </p>
              <p>
                Propabridge:{" "}
                <a className="text-primary underline" href={`mailto:${company.propabridge.email}`}>{company.propabridge.email}</a>
                {" · "}
                <a className="text-primary underline" href={company.propabridge.phoneHref}>{company.propabridge.phone}</a>
              </p>
              <p>
                WhatsApp (Propa):{" "}
                <a className="text-primary underline" href={company.propabridge.whatsappHref}>{company.propabridge.whatsapp}</a>
              </p>
              <p>
                Live product:{" "}
                <a className="text-primary underline" href="https://propabridge.com">propabridge.com</a>
              </p>
              <div className="pt-2 space-y-3">
                {company.officeHours.map((office) => (
                  <div key={office.city}>
                    <p className="font-semibold">{office.city} hours</p>
                    {office.lines.map((line) => (
                      <p key={line} className="text-muted-foreground">{line}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </aside>
          <div className="lg:col-span-3">
            <div className="bg-card p-8 md:p-12 rounded-2xl shadow-lg border">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
