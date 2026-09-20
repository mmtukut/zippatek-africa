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
    name: "Maypas Workspace",
    line1: "2nd Floor, S3 Mall, 26 Algiers Street",
    city: "Wuse Zone 5, Abuja",
    country: "Nigeria",
    full: "Maypas Workspace, 2nd Floor, S3 Mall, 26 Algiers Street, Wuse Zone 5, Abuja, Nigeria",
  },
  marketplaceCities: ["Abuja", "Kaduna", "Minna"],
  officeHours: [
    {
      city: "Abuja",
      lines: [
        "Monday–Friday: 9:00 AM – 6:00 PM",
        "Saturday: 10:00 AM – 4:00 PM | Sunday: Closed",
      ],
    },
    {
      city: "Kaduna",
      lines: [
        "Monday–Friday: 9:00 AM – 6:00 PM",
        "Saturday: 10:00 AM – 3:00 PM | Sunday: Closed",
      ],
    },
    {
      city: "Minna",
      lines: [
        "Monday–Friday: 9:30 AM – 6:30 PM",
        "Saturday: 11:00 AM – 3:00 PM | Sunday: Closed",
      ],
    },
  ],
  propabridge: {
    email: "admin@propabridge.com",
    phone: "+234 805 555 1300",
    phoneHref: "tel:+2348055551300",
    whatsapp: "+234 805 555 1300",
    whatsappHref: "https://wa.me/2348055551300",
    pressEmail: "m.tukur@propabridge.com",
    social: [
      { name: "LinkedIn", href: "https://linkedin.com/company/propabridge" },
      { name: "X", href: "https://x.com/propabridge" },
      { name: "Facebook", href: "https://facebook.com/propabridge" },
      { name: "Instagram", href: "https://instagram.com/propabridge" },
      { name: "YouTube", href: "https://youtube.com/@propabridge" },
      { name: "TikTok", href: "https://tiktok.com/@propabridge" },
    ],
  },
  tagline: "Building Africa's Property Intelligence Infrastructure",
  heroLead: "We build digital infrastructure for Africa's property market.",
  description:
    "Zippatek Digital Ltd (RC 8527315) is a Nigerian technology company headquartered in Utako, Abuja. We design digital infrastructure for Africa's property market: Propabridge, a live verification-first marketplace, and FastFind360, satellite AI that maps unregistered buildings so governments can recover lost tax revenue.",
  products: [
    {
      name: "Propabridge",
      href: "/products/propabridge/",
      liveUrl: "https://propabridge.com",
      summary:
        "Live verification-first property marketplace and AI concierge (Propa). We inspect listings, check titles, and match verified buyers and renters in Abuja, Kaduna, and Minna. Zero inspection fees. Operated by Zippatek Digital Ltd.",
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
  logo: `${company.website}/zippatek_logo.png`,
  email: company.email,
  telephone: company.phone,
  foundingDate: "2025-05",
  identifier: `RC ${company.rcNumber}`,
  description: company.description,
  sameAs: company.propabridge.social.map((s) => s.href),
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.line1,
    addressLocality: "Utako, Abuja",
    addressCountry: "NG",
  },
  location: {
    "@type": "Place",
    name: "Propabridge operations",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Maypas Workspace, 2nd Floor, S3 Mall, 26 Algiers Street, Wuse Zone 5",
      addressLocality: "Abuja",
      addressCountry: "NG",
    },
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
