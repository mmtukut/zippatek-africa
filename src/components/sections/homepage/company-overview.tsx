import Link from "next/link";
import { company } from "@/lib/company";

export function CompanyOverview() {
  return (
    <section className="py-24 bg-white border-y border-border" aria-labelledby="company-overview-heading">
      <div className="container">
        <p className="text-sm font-semibold tracking-wide text-primary uppercase mb-3">Company</p>
        <h2 id="company-overview-heading" className="text-4xl md:text-5xl font-bold mb-6">
          {company.legalName}
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
          {company.description}
        </p>

        <dl className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-muted/60 rounded-xl p-5 border">
            <dt className="text-sm text-muted-foreground">Legal name</dt>
            <dd className="font-semibold mt-1">{company.legalName}</dd>
          </div>
          <div className="bg-muted/60 rounded-xl p-5 border">
            <dt className="text-sm text-muted-foreground">CAC registration</dt>
            <dd className="font-semibold mt-1">RC {company.rcNumber}</dd>
          </div>
          <div className="bg-muted/60 rounded-xl p-5 border">
            <dt className="text-sm text-muted-foreground">Incorporated</dt>
            <dd className="font-semibold mt-1">{company.founded}, {company.country}</dd>
          </div>
          <div className="bg-muted/60 rounded-xl p-5 border">
            <dt className="text-sm text-muted-foreground">Headquarters</dt>
            <dd className="font-semibold mt-1">{company.address.full}</dd>
          </div>
        </dl>

        <h3 className="text-2xl font-bold mb-4">What we build</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {company.products.map((product) => (
            <article key={product.name} className="rounded-xl border bg-card p-6">
              <h4 className="text-xl font-bold mb-2">{product.name}</h4>
              <p className="text-muted-foreground mb-4">{product.summary}</p>
              <Link href={product.href} className="text-primary font-medium hover:underline">
                Product details
              </Link>
              {product.liveUrl ? (
                <>
                  {" · "}
                  <a href={product.liveUrl} className="text-primary font-medium hover:underline" target="_blank" rel="noopener noreferrer">
                    Open live site
                  </a>
                </>
              ) : null}
            </article>
          ))}
        </div>

        <p className="text-muted-foreground">
          Contact:{" "}
          <a className="text-primary hover:underline" href={`mailto:${company.email}`}>
            {company.email}
          </a>
          {" · "}
          <a className="text-primary hover:underline" href={company.phoneHref}>
            {company.phone}
          </a>
          {" · "}
          <Link className="text-primary hover:underline" href="/about/">
            About the company
          </Link>
        </p>
      </div>
    </section>
  );
}
