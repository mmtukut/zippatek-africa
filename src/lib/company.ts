export const company = {
  legalName: "Zippatek Digital Ltd",
  brandName: "Zippatek",
  rcNumber: "8527315",
  founded: "May 2025",
  country: "Nigeria",
  website: "https://zippatek.com",
  email: "hello@zippatek.com",
  phone: "+234 805 526 9579",
  phoneHref: "tel:+2348055269579",
  address: {
    line1: "No.1 T.O.S Benson Street",
    city: "Utako, Abuja",
    country: "Nigeria",
    full: "No.1 T.O.S Benson Street, Utako, Abuja, Nigeria",
  },
  operationsOffice: {
    full: "Maypas Workspace, 2nd Floor, S3 Mall, 26 Algiers Street, Wuse Zone 5, Abuja, Nigeria",
  },
  tagline: "Building Africa's Property Intelligence Infrastructure",
  description:
    "Zippatek Digital Ltd (RC 8527315) is a Nigerian technology company headquartered in Utako, Abuja. We design digital infrastructure for Africa's property market: Propabridge, a live verification-first marketplace, and FastFind360, satellite AI that maps unregistered buildings so governments can recover lost tax revenue.",
  products: [
    {
      name: "Propabridge",
      href: "/products/propabridge/",
      liveUrl: "https://propabridge.com",
      summary:
        "Live verification-first property marketplace and AI concierge (Propa). We inspect listings, check titles, and match verified buyers and renters in Abuja, Kaduna, Minna, and Gombe. Zero inspection fees. Operated by Zippatek Digital Ltd.",
    },
    {
      name: "FastFind360",
      href: "/products/fastfind360/",
      liveUrl: null,
      summary:
        "Satellite AI platform for governments. It detects unmapped and informal buildings from space so revenue boards can register properties and recover tax that currently goes uncollected.",
    },
  ],
  cities: ["Abuja", "Kaduna", "Minna", "Gombe"],
  founders: [
    {
      name: "Aminu S. Muhammad",
      title: "Co-Founder & CEO",
    },
    {
      name: "Muhammad Muhammad Tukur",
      title: "Co-Founder & CTO",
    },
  ],
} as const;

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.legalName,
  alternateName: company.brandName,
  url: company.website,
  email: company.email,
  telephone: company.phone,
  foundingDate: "2025-05",
  identifier: `RC ${company.rcNumber}`,
  description: company.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.line1,
    addressLocality: "Abuja",
    addressCountry: "NG",
  },
  founder: company.founders.map((f) => ({
    "@type": "Person",
    name: f.name,
    jobTitle: f.title,
  })),
  makesOffer: company.products.map((p) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "SoftwareApplication",
      name: p.name,
      description: p.summary,
      url: p.liveUrl ?? `${company.website}${p.href}`,
    },
  })),
};
