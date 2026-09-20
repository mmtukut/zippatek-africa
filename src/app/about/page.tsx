import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Telescope, Zap } from "lucide-react";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { company } from "@/lib/company";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `About ${company.legalName}`,
  description: company.description,
};

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "Deploy AI-native platforms that change how Africa discovers, verifies, and transacts real estate — cutting fraud and unlocking revenue that informal markets currently hide.",
  },
  {
    icon: Telescope,
    title: "Our Vision",
    description:
      "A future where every property in Africa is mapped, verified, and reachable — governments decide with data, and people transact without fear.",
  },
  {
    icon: Zap,
    title: "Our Values",
    description:
      "Build for African context first. Be clear about what is verified. Ship quickly. Do not copy Western products that ignore informal cities and title risk.",
  },
];

const milestones = [
  { year: "2024 Q4", event: "Satellite research in Gombe identifies a ₦2T mapping and revenue gap" },
  { year: "2025 Q1", event: "FastFind360 MVP development begins" },
  { year: "2025 Q2", event: `${company.legalName} incorporated (RC: ${company.rcNumber})` },
  { year: "2025 Q2", event: "Propabridge prototype launched" },
  { year: "2025 Q3", event: "NIGCOMSAT Accelerator selection" },
  { year: "2025 Q3", event: "Pilot conversations with Urban Shelter and Amsadam" },
  { year: "2026 Q2", event: "Propabridge public launch at propabridge.com — Abuja, Kaduna, Minna, Gombe" },
  { year: "2026 Q3", event: "National expansion of verified listings and FastFind360 government pilots" },
];

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title="About Zippatek"
        subtitle={`${company.legalName} is a Nigerian PropTech company. We operate Propabridge, a live verified-property marketplace, and FastFind360, satellite intelligence for governments.`}
      />

      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">From Gombe to a live product</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  {company.legalName} (RC {company.rcNumber}) is registered in Nigeria and headquartered at {company.address.full}. Propabridge operations also run from {company.operationsOffice.full}.
                </p>
                <p>
                  In 2024, Muhammad Muhammad Tukur — then a computer science student — used satellite imagery to detect buildings in Gombe State. The work found 2.3 million unmapped structures and about ₦500 billion in potential uncollected government revenue.
                </p>
                <p>
                  That research became FastFind360. With Aminu S. Muhammad, a chartered estate surveyor, we incorporated in May 2025 and built Propabridge so citizens could search verified homes while governments map the informal city.
                </p>
                <p>
                  Propabridge is live at{" "}
                  <a className="text-primary underline" href="https://propabridge.com">
                    propabridge.com
                  </a>
                  . Buyers and renters chat with Propa in English, Hausa, Yoruba, Igbo, or Pidgin. Listings are inspected before they go public. There are no inspection fees. Partner agents earn a stated 5% on successful closes.
                </p>
                <p>
                  Founders: Aminu S. Muhammad (CEO) and Muhammad Muhammad Tukur (CTO). Contact {company.email} or {company.phone}.
                </p>
              </div>
              <Button asChild variant="link" className="p-0 mt-8 h-auto text-primary group">
                <Link href="/team/">
                  Meet the founders
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-8">
              {values.map((value) => (
                <div key={value.title} className="bg-card p-6 rounded-xl border flex gap-6">
                  <div className="bg-primary/10 p-3 rounded-lg h-fit">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-100">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Company timeline</h2>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-border"></div>
            {milestones.map((item, index) => (
              <div key={item.year + item.event} className="relative flex items-center justify-between mb-12">
                <div className={`w-[calc(50%-2rem)] text-right ${index % 2 === 1 ? "order-3" : ""}`}>
                  <p className="font-bold text-primary">{item.year}</p>
                  <p className="text-muted-foreground">{item.event}</p>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 z-10 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                <div className="w-[calc(50%-2rem)]"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
