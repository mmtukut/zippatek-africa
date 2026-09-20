import { Button } from "@/components/ui/button";
import {
  faqs,
  founderQuotes,
  howItWorks,
  launchFacts,
  neighborhoods,
  partnerProgram,
  propabridge,
  testimonials,
  verificationSteps,
} from "@/lib/propabridge-content";
import { company } from "@/lib/company";
import { CheckCircle, MapPin, MessagesSquare, ShieldCheck, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Propabridge | Zippatek Digital Ltd",
  description:
    "Propabridge is the live verification-first property marketplace operated by Zippatek Digital Ltd. Inspected listings, Propa AI, zero inspection fees.",
};

export default function PropabridgePage() {
  return (
    <div>
      <div className="relative bg-primary-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-primary-700 opacity-80"></div>
        <div className="container relative z-10 text-center">
          <p className="text-primary-100 font-semibold mb-2">
            Operated by {company.legalName} · RC {company.rcNumber}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 !leading-tight">
            Find a home without fake listings
          </h1>
          <p className="text-lg md:text-xl text-primary-100 max-w-3xl mx-auto">
            Propabridge is live at propabridge.com. Listings are visited, titles are checked, and owners sign before anything is public. {propabridge.slogan} Cities: {company.marketplaceCities.join(", ")}.
          </p>
          <div className="mt-8 flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" className="bg-accent-cyan text-gray-900 hover:bg-accent-cyan/90">
              <a href={propabridge.liveUrl} target="_blank" rel="noopener noreferrer">
                Open Propabridge
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-100/50 hover:bg-white hover:text-primary-900">
              <a href={propabridge.verifyUrl} target="_blank" rel="noopener noreferrer">
                Verify a property
              </a>
            </Button>
          </div>
        </div>
      </div>

      <section className="py-24 bg-background">
        <div className="container grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-4">What the marketplace does</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Traditional portals publish inventory without visiting the building. Propabridge uses a three-step gate before a listing appears.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              {verificationSteps.map((step) => (
                <li key={step} className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" strokeWidth={1.75} />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4">
            {launchFacts.traction.map((row) => (
              <div key={row.label} className="border rounded-xl p-5 bg-card">
                <p className="text-3xl font-bold">{row.value}</p>
                <p className="text-sm text-muted-foreground">{row.label} (June 2026 launch post)</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-100">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How it works</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Propa speaks {propabridge.languages.join(", ")} on WhatsApp, web, and voice.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step) => (
              <div key={step.step} className="bg-card p-6 rounded-xl border">
                <p className="text-sm font-semibold text-primary mb-2">{step.step}</p>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="h-6 w-6 text-primary" strokeWidth={1.75} />
            <h2 className="text-3xl font-bold">Neighborhoods on the live site</h2>
          </div>
          <p className="text-muted-foreground mb-8">
            Inventory shown on Propabridge includes these areas (not an exhaustive cadastre — these are published marketplace locations).
          </p>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {neighborhoods.map((place) => (
              <li key={`${place.city}-${place.name}`} className="border rounded-xl p-4">
                <p className="font-semibold">{place.name}</p>
                <p className="text-sm text-muted-foreground">{place.city}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24 bg-primary-900 text-white">
        <div className="container grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Users className="h-6 w-6 text-accent-cyan" strokeWidth={1.75} />
              <h2 className="text-3xl font-bold">{partnerProgram.headline}</h2>
            </div>
            <p className="text-primary-100 mb-6">{partnerProgram.body}</p>
            <ul className="space-y-3 text-primary-100">
              {partnerProgram.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-cyan shrink-0 mt-0.5" strokeWidth={1.75} />
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-primary-100/80">{partnerProgram.example}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">For seekers</h3>
            <ul className="space-y-3 text-primary-100">
              <li>Search and view with no inspection or registration fee</li>
              <li>Chat with Propa instead of filling forms</li>
              <li>Deal with {company.legalName}, not an unknown listing agent</li>
              <li>Office: {propabridge.office}</li>
              <li>
                {propabridge.email} · {propabridge.phone}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">What buyers and sellers said on Propabridge</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((item) => (
              <figure key={item.author} className="border rounded-xl p-6 bg-card">
                <blockquote className="text-muted-foreground leading-relaxed">&ldquo;{item.quote}&rdquo;</blockquote>
                <figcaption className="mt-4 font-semibold">
                  {item.author}
                  <span className="block text-sm font-normal text-muted-foreground">{item.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-100">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <MessagesSquare className="h-6 w-6 text-primary" strokeWidth={1.75} />
            <h2 className="text-3xl font-bold">FAQs from the marketplace</h2>
          </div>
          <dl className="space-y-8">
            {faqs.map((item) => (
              <div key={item.question}>
                <dt className="font-semibold mb-2">{item.question}</dt>
                <dd className="text-muted-foreground leading-relaxed">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <ShieldCheck className="h-6 w-6 text-primary" strokeWidth={1.75} />
            <h2 className="text-3xl font-bold">Founders on record</h2>
          </div>
          <div className="space-y-8">
            {founderQuotes.map((item) => (
              <blockquote key={item.author} className="border-l-4 border-primary pl-4">
                <p className="text-muted-foreground leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
                <footer className="mt-2 font-semibold">
                  {item.author}, {item.role}
                </footer>
              </blockquote>
            ))}
          </div>
          <div className="mt-12">
            <Button asChild size="lg">
              <a href={propabridge.liveUrl} target="_blank" rel="noopener noreferrer">
                Start on propabridge.com
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
