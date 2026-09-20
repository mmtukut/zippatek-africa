import { Newspaper } from "lucide-react";
import { pressMentions } from "@/lib/propabridge-content";

export function PressRecognition() {
  return (
    <section className="py-24 bg-background" aria-labelledby="press-heading">
      <div className="container">
        <p className="text-sm font-semibold tracking-wide text-primary uppercase mb-3">Media</p>
        <h2 id="press-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Coverage of the Propabridge launch
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Independent articles published about Propabridge, the live marketplace operated by Zippatek Digital Ltd. We link to the pieces — we do not display third-party marks we do not host.
        </p>
        <ul className="grid md:grid-cols-2 gap-6">
          {pressMentions.map((item) => (
            <li key={item.url}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 h-full bg-card border rounded-xl p-6 hover:border-primary transition-colors"
              >
                <div className="bg-primary/10 p-3 rounded-lg h-fit">
                  <Newspaper className="h-5 w-5 text-primary" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary mb-1">{item.name}</p>
                  <p className="font-medium text-foreground leading-snug">{item.title}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
