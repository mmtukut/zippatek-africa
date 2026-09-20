import { MapPin } from "lucide-react";
import { neighborhoods, propabridge } from "@/lib/propabridge-content";
import { company } from "@/lib/company";

export function CitiesSection() {
  return (
    <section className="py-24 bg-muted/40" aria-labelledby="cities-heading">
      <div className="container">
        <p className="text-sm font-semibold tracking-wide text-primary uppercase mb-3">Markets</p>
        <h2 id="cities-heading" className="text-3xl md:text-4xl font-bold mb-4">
          Cities on Propabridge
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-10">
          Live inventory and operations: {company.marketplaceCities.join(", ")}. Neighborhoods currently featured on the marketplace include:
        </p>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
          {neighborhoods.map((place) => (
            <li key={`${place.city}-${place.name}`} className="bg-card border rounded-xl p-4">
              <MapPin className="h-4 w-4 text-primary mb-2" strokeWidth={1.75} />
              <p className="font-semibold">{place.name}</p>
              <p className="text-sm text-muted-foreground">{place.city}</p>
            </li>
          ))}
        </ul>
        <p className="text-sm text-muted-foreground">
          Propabridge office: {propabridge.office}. Company HQ: {company.address.full}.
        </p>
      </div>
    </section>
  );
}
