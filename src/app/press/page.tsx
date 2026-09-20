import { PageHeader } from "@/components/page-header";
import { company } from "@/lib/company";
import {
  blogs,
  blogUrl,
  founderQuotes,
  launchFacts,
  pressMentions,
  propabridge,
} from "@/lib/propabridge-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press | Zippatek Digital Ltd",
  description:
    "Boilerplate, launch facts, published articles, and contacts for journalists covering Zippatek Digital Ltd and Propabridge.",
};

export default function PressPage() {
  return (
    <div>
      <PageHeader
        title="Press & media"
        subtitle="Facts you can publish about Zippatek Digital Ltd and Propabridge. Links are to published articles, not logo walls."
      />
      <div className="container py-24 max-w-3xl space-y-16">
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
            <li>Live consumer product: {propabridge.liveUrl}</li>
            <li>Propabridge desk: {propabridge.email} · {propabridge.phone}</li>
            <li>Marketplace cities: {company.marketplaceCities.join(", ")}</li>
            <li>FastFind360 research city: Gombe</li>
            <li>WhatsApp / Propa: {company.propabridge.whatsapp}</li>
            <li>Founders: Aminu S. Muhammad (CEO), Muhammad Muhammad Tukur (CTO)</li>
            <li>Public launch: {launchFacts.date}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Published articles</h2>
          <ul className="space-y-4">
            {pressMentions.map((item) => (
              <li key={item.url}>
                <a href={item.url} className="text-primary font-medium hover:underline" target="_blank" rel="noopener noreferrer">
                  {item.name}
                </a>
                <p className="text-muted-foreground">{item.title}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Launch announcement ({launchFacts.date})</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">{launchFacts.excerpt}</p>
          <ul className="grid sm:grid-cols-2 gap-4 mb-6">
            {launchFacts.traction.map((row) => (
              <li key={row.label} className="border rounded-xl p-4">
                <p className="text-2xl font-bold">{row.value}</p>
                <p className="text-sm text-muted-foreground">{row.label}</p>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground mb-2">Launch partners named in the announcement:</p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-1">
            {launchFacts.partners.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
          <p className="text-muted-foreground mt-4 mb-2">Programs named in the same announcement:</p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-1">
            {launchFacts.programs.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
          <p className="mt-4">
            <a
              href={blogUrl("propabridge-launches-verification-first-marketplace")}
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Full launch post on Propabridge
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">On-record quotes</h2>
          <div className="space-y-6">
            {founderQuotes.map((item) => (
              <blockquote key={item.author} className="border-l-4 border-primary pl-4">
                <p className="text-muted-foreground leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
                <footer className="mt-2 font-semibold">
                  {item.author}, {item.role}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Further reading</h2>
          <ul className="space-y-2">
            {blogs.slice(0, 4).map((post) => (
              <li key={post.slug}>
                <a href={blogUrl(post.slug)} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  {post.title}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Press contact</h2>
          <p className="text-muted-foreground leading-relaxed">
            Company: {company.email} · {company.phone}
          </p>
          <p className="text-muted-foreground leading-relaxed mt-2">
            Propabridge / product: {propabridge.email} · {propabridge.phone}
          </p>
          <p className="text-muted-foreground leading-relaxed mt-2">
            Launch post media line: Muhammad Muhammad Tukur, CTO — m.tukur@propabridge.com
          </p>
        </section>
      </div>
    </div>
  );
}
