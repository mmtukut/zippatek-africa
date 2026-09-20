import Link from "next/link";
import { howItWorks, propabridge } from "@/lib/propabridge-content";

export function HowPropabridgeWorks() {
  return (
    <section className="py-24 bg-white border-y border-border" aria-labelledby="how-heading">
      <div className="container">
        <p className="text-sm font-semibold tracking-wide text-primary uppercase mb-3">How it works</p>
        <h2 id="how-heading" className="text-3xl md:text-4xl font-bold mb-4">
          Chat, choose, and move in
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-12">
          The buyer path on{" "}
          <a className="text-primary underline" href={propabridge.liveUrl}>
            propabridge.com
          </a>
          . Languages: {propabridge.languages.join(", ")}.
        </p>
        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {howItWorks.map((item) => (
            <li key={item.step} className="bg-card border rounded-xl p-6">
              <p className="text-sm font-semibold text-primary mb-3">{item.step}</p>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-[15px] leading-relaxed">{item.description}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10">
          <Link href="/products/propabridge/" className="text-primary font-medium hover:underline">
            Full Propabridge product notes
          </Link>
        </p>
      </div>
    </section>
  );
}
