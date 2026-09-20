/**
 * Facts sourced from propabridge.com and the Propabridge web repo.
 * Do not add invented press outlets, quotes, or pricing.
 */

export const propabridge = {
  liveUrl: "https://propabridge.com",
  verifyUrl: "https://propabridge.com/verify",
  email: "admin@propabridge.com",
  phone: "+234 805 555 1300",
  phoneHref: "tel:+2348055551300",
  whatsapp: "+234 805 555 1300",
  whatsappHref: "https://wa.me/2348055551300",
  office: "Maypas Workspace, 2nd Floor, S3 Mall, 26 Algiers Street, Wuse Zone 5, Abuja",
  slogan: "Zero Fees. Zero Fears.",
  launch: "June 2026 public launch",
  languages: ["English", "Hausa", "Yoruba", "Igbo", "Pidgin"],
  cities: ["Abuja", "Kaduna", "Minna"],
} as const;

export const pressMentions = [
  {
    name: "Property News Africa",
    title: "ARCE 2026 spotlight: Propabridge property verification in Nigeria",
    url: "https://propertynews.africa/arce-2026-spotlight-propabridge-property-verification-nigeria/",
  },
  {
    name: "Metro Daily Ng",
    title: "Propabridge launches Nigeria's verification-first property marketplace with AI WhatsApp concierge",
    url: "https://metrodailyng.com/amp/propabridge-launches-nigerias-premier-verification-first-property-marketplace-with-ai-whatsapp-concierge/",
  },
  {
    name: "The Authority",
    title: "Propabridge launches Nigeria's verification-first property marketplace with AI WhatsApp concierge",
    url: "https://authorityngr.com/2026/06/09/propabridge-launches-nigerias-premier-verification-first-property-marketplace-with-ai-whatsapp-concierge/",
  },
  {
    name: "21st Century Chronicle",
    title: "Firm launches verification-first property marketplace in Nigeria",
    url: "https://21stcenturychronicle.com/firm-launches-verification-first-property-marketplace-in-nigeria/",
  },
] as const;

export const neighborhoods = [
  { name: "Lokogoma", city: "Abuja" },
  { name: "Katampe Extension", city: "Abuja" },
  { name: "Durumi", city: "Abuja" },
  { name: "Karmo", city: "Abuja" },
  { name: "Gwarinpa", city: "Abuja" },
  { name: "Jabi", city: "Abuja" },
  { name: "Guzape", city: "Abuja" },
  { name: "Kaduna City", city: "Kaduna" },
  { name: "Tunga Estate", city: "Minna" },
  { name: "Minna", city: "Minna" },
] as const;

export const howItWorks = [
  {
    step: "01",
    title: "Chat with Propa",
    description:
      "Tell the AI concierge neighborhood, budget, bedrooms, and must-haves — in English, Hausa, Yoruba, Igbo, or Pidgin. Propa runs on WhatsApp, web, and voice.",
  },
  {
    step: "02",
    title: "Browse and book a viewing",
    description:
      "Open inspected listings only. Photos are checked against the building. There is no inspection or registration fee to view.",
  },
  {
    step: "03",
    title: "Make your offer",
    description:
      "Propabridge handles matching, follow-up, and offer letters. You deal with a registered company, not an unknown listing agent.",
  },
  {
    step: "04",
    title: "Sign. Pay. Move in.",
    description:
      "Close after title and ownership checks. Partner agents and firms earn a stated 5% on deals that actually close.",
  },
] as const;

export const verificationSteps = [
  "Physical visit — the team walks the property and checks that photos match the building.",
  "Title and legal documents — original papers are sighted; ownership is confirmed.",
  "Owner or developer agreement — a binding agreement is signed before the listing goes live.",
] as const;

export const faqs = [
  {
    question: "How do I know the listings are real and up to date?",
    answer:
      "Propabridge verifies every property before it goes live and updates them regularly. That means no fake homes, no expired rentals, and no confusing duplicates.",
  },
  {
    question: "Are there really no inspection fees?",
    answer:
      "None. Zero. Search, chat with Propa, and view properties with no viewing fee. The marketplace earns a standard commission when you successfully find and sign for a property.",
  },
  {
    question: "Why don't I see which agent listed the property?",
    answer:
      "You deal with Propabridge — a registered company that has already done the verification. Agent relationships are managed in the background.",
  },
  {
    question: "How do you verify the properties?",
    answer:
      "The team physically visits every property before it goes live, checks that photos match reality, sights original title documents, verifies ownership, and signs a binding agreement with the owner. If it has not passed all of this, it does not appear.",
  },
  {
    question: "Can Propabridge help me sell?",
    answer:
      "Yes. Services include valuation, photography, marketing, and handling offers from first consultation through handover.",
  },
] as const;

export const partnerProgram = {
  headline: "Real buyers. Verified homes. 5%.",
  body: "Get matched with buyers already searching in Abuja, Kaduna, and Minna. Bring the right listing, close the deal, earn 5%.",
  points: [
    "Earn 5% on every deal that closes successfully",
    "Access to buyers already searching",
    "Verified listings and buyers before closing",
    "Structured process — brief, match, and close",
  ],
  example:
    "Example brief published on Propabridge: 4-bed detached villa, Guzape, Abuja, ₦45M–₦60M. Partner commission on that range: ₦2,250,000–₦3,000,000.",
} as const;

export const testimonials = [
  {
    quote:
      "I thought house hunting in Abuja would mean dealing with endless quack agents and paying ridiculous registration fees. Working with Propabridge changed everything. From the first chat with their AI, Propa, to the final handover, I didn't pay a single dime in 'viewing fees.' They made me feel completely safe.",
    author: "Tunde O.",
    role: "Renter, Gwarinpa, Abuja",
  },
  {
    quote:
      "I felt supported from day one. Propabridge understood what I was looking for even better than I did. They walked me through different neighborhoods, explained market trends clearly, and helped me make decisions without rushing me. When it came to negotiations, they fought for every dollar and made sure I got the best possible price.",
    author: "Alh. Musa K.",
    role: "Landlord, Kaduna",
  },
  {
    quote:
      "I was nervous about giving my property to agents who would just inflate the price and chase away serious buyers. Propabridge helped me set the perfect valuation. They handled all the marketing and only brought pre-screened clients. We closed the deal in two weeks without any drama.",
    author: "Dr. Imam I.",
    role: "Landlord, Kaduna",
  },
  {
    quote:
      "As someone living in the diaspora, buying property back home is usually a nightmare full of scams. I trusted Propabridge because they are founded by actual Estate Surveyors. They handled the legal verification, title checks, and everything in between. I've already recommended them to my friends in the UK.",
    author: "Dr. Nkechi A.",
    role: "Diaspora investor",
  },
  {
    quote:
      "They didn't rush me. Propabridge understood what I was looking for. When it came to negotiations, they fought for a fair price and ensured the tenancy agreement protected me.",
    author: "Emeka R.",
    role: "Renter, Jabi",
  },
] as const;

export const founderQuotes = [
  {
    quote:
      "We built Propabridge because Nigerians deserve to find homes with excitement, not fear. 'Zero fees, Zero fears' isn't just our slogan; it's our promise.",
    author: "Aminu S. Muhammad",
    role: "Co-Founder, Propabridge",
  },
  {
    quote:
      "For too long, Nigerian property buyers have carried the entire burden of figuring out whether a listing is real, whether a developer is genuine and whether their money is safe. We decided to take that responsibility off them. We verify every listing before it goes live, and our AI concierge meets buyers on WhatsApp where Nigerians are most comfortable. Our promise is simple. Zero fake listings, zero fears.",
    author: "Muhammad Muhammad Tukur",
    role: "Co-Founder & CTO, Propabridge",
  },
] as const;

export const launchFacts = {
  date: "June 2026",
  excerpt:
    "Northern Nigerian proptech combines physical verification of every listing with a multilingual AI assistant on WhatsApp, web and voice to tackle property fraud that costs Nigeria an estimated $4 billion every year.",
  traction: [
    { label: "Verified properties at soft-launch", value: "63" },
    { label: "Organic buyer leads", value: "80" },
    { label: "AI-booked viewings", value: "12" },
    { label: "Paid marketing spent", value: "₦0" },
  ],
  partners: ["Sites & Lifestyle Limited", "The Homes Group", "Urban Shelter Limited (Kaduna)", "Maki Properties"],
  programs: [
    "Ventures Platform AI Foundry",
    "Connect NextGen Hackathon Program by Tech Revolution Africa",
    "Accelerate Africa Network",
    "NIGCOMSAT Accelerator (company timeline)",
  ],
} as const;

export const blogs = [
  {
    slug: "why-billions-lost-to-property-fraud-nigeria",
    date: "3 Sep 2026",
    title: "Why Billions Are Lost to Property Fraud in Nigeria Every Year — and How We Stop It",
    excerpt:
      "How fraud happens in ordinary-looking deals, the 10-step verification sequence, and what to check at AGIS or a state land registry before you pay.",
  },
  {
    slug: "propabridge-launches-verification-first-marketplace",
    date: "6 Jun 2026",
    title: "Propabridge launches Nigeria's verification-first marketplace with AI WhatsApp concierge",
    excerpt: launchFacts.excerpt,
  },
  {
    slug: "understanding-land-titles-abuja",
    date: "4 Aug 2026",
    title: "Understanding Land Titles in Abuja: What You Really Own (And Why So Many People Lose It)",
    excerpt: "C of O, Deed of Assignment, survey plans, and why a seal on paper is not enough.",
  },
  {
    slug: "inspection-fees",
    date: "5 Jul 2025",
    title: "Why Inspection Fees Are Exploitative — and Why We Banned Them",
    excerpt: "Propabridge does not charge tenants to view a house.",
  },
  {
    slug: "spot-fake-listing",
    date: "5 Jan 2026",
    title: "How to Spot a Fake Property Listing in Nigeria — and What to Do When You Find One",
    excerpt: "Patterns buyers see on informal portals and social media.",
  },
  {
    slug: "property-documents",
    date: "8 Feb 2026",
    title: "The 7 Documents You Must See Before Paying Rent on Any Nigerian Property",
    excerpt: "A document list for renters before money leaves the account.",
  },
  {
    slug: "renting-abuja",
    date: "5 Mar 2026",
    title: "First Time Renting in Abuja? Start Here.",
    excerpt: "A practical guide for first-time renters in the FCT.",
  },
  {
    slug: "living-in-gwarinpa",
    date: "6 Mar 2026",
    title: "What It's Actually Like to Live in Gwarinpa — A Real Resident's Guide",
    excerpt: "Neighborhood notes from Gwarinpa, Abuja.",
  },
  {
    slug: "gwarinpa-vs-jabi",
    date: "5 Feb 2026",
    title: "Gwarinpa vs Jabi vs Kubwa — Which Area Fits Your Budget in Abuja Right Now?",
    excerpt: "Area comparison for Abuja renters and buyers.",
  },
  {
    slug: "abuja-prices",
    date: "5 Jan 2026",
    title: "Abuja Property Prices in 2026 — What's Actually Happening",
    excerpt: "Price notes published on the Propabridge blog.",
  },
  {
    slug: "smart-investors-minna",
    date: "5 Dec 2026",
    title: "Why Smart Investors Are Looking at Minna and Lokogoma Right Now",
    excerpt: "Minna and Lokogoma as active Propabridge markets.",
  },
] as const;

export function blogUrl(slug: string) {
  return `https://propabridge.com/blogs/${slug}`;
}
