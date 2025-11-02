'use client'
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle, Bot, ShieldCheck, MapPin, MessagesSquare, Film, Verified } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PageHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
    <div className="relative bg-primary-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-primary-700 opacity-80"></div>
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'url(/grid.svg)'}}></div>
        <div className="container relative z-10 text-center">
            <p className="text-primary-100 font-semibold mb-2">Propabridge</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 !leading-tight">{title}</h1>
            <p className="text-lg md:text-xl text-primary-100 max-w-3xl mx-auto">{subtitle}</p>
            <div className="mt-8 flex gap-4 justify-center">
                 <Button asChild size="lg" className="bg-accent-cyan text-gray-900 hover:bg-accent-cyan/90">
                    <Link href="#">Try Propabridge (soon)</Link>
                </Button>
                 <Button asChild size="lg" variant="outline" className="border-primary-100/50 hover:bg-white hover:text-primary-900">
                    <Link href="#">Watch Demo</Link>
                </Button>
            </div>
        </div>
    </div>
);

const features = [
    { icon: Bot, title: "AI-Powered Search", description: "Tell us what you need. Our AI finds perfect matches in seconds." },
    { icon: Verified, title: "Verified Listings Only", description: "Every property verified before publication. Zero fake listings." },
    { icon: Film, title: "Virtual Tours", description: "Explore properties from your phone with 360° virtual tours." },
    { icon: MapPin, title: "Neighborhood Insights", description: "Schools, hospitals, transportation — know before you visit." },
    { icon: MessagesSquare, title: "Direct Connection", description: "No middleman fees. Connect straight to verified owners." },
    { icon: ShieldCheck, title: "Fraud Protection", description: "Built-in safeguards against scams and fake documents." },
];

const howItWorks = [
    { step: 1, title: "Search", description: "Enter location, type (rent/buy), and budget. AI finds matches." },
    { step: 2, title: "Browse", description: "Scroll verified listings with photos, virtual tours, and insights." },
    { step: 3, title: "Connect", description: "Request viewing or make offer. Owner responds within 24 hours." },
    { step: 4, title: "Move In", description: "Complete secure transaction. Move into your perfect home." },
];

const testimonials = [
    {
        quote: "I found my apartment in 48 hours using Propabridge. Everything verified, no agent fees, no stress.",
        author: "Early Beta User, Abuja"
    },
    {
        quote: "As a landlord, Propabridge connected me with serious tenants instantly. The vetting process protects both sides.",
        author: "Property Owner, Lagos"
    },
]

export default function PropabridgePage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'propabridge-app-screenshot');
    return (
        <div>
            <PageHeader title="Find Your Home in Minutes, Not Weeks" subtitle="Nigeria's AI-powered property marketplace connecting renters and buyers with verified landlords and developers." />
            
            {heroImage && (
                <div className="bg-primary-900 -mt-10 pb-10">
                    <div className="container">
                        <Image src={heroImage.imageUrl} alt={heroImage.description} width={1200} height={800} data-ai-hint={heroImage.imageHint} className="rounded-2xl shadow-2xl mx-auto" />
                    </div>
                </div>
            )}

            <section className="py-24 bg-background">
                <div className="container grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">The Problem</h2>
                        <p className="text-muted-foreground text-lg">Finding a legitimate property in Nigeria = weeks of wasted time, agent fees, and fraud risk. 78% of renters report encountering fake listings.</p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-primary">The Solution</h2>
                        <p className="text-muted-foreground text-lg">Propabridge uses AI verification to show only legitimate properties. Search by neighborhood, budget, and amenities. Connect directly with verified owners. Move in faster, safer.</p>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gray-100">
                <div className="container">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Features That Simplify Your Search</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map(feature => (
                             <div key={feature.title} className="bg-card p-8 rounded-2xl border flex flex-col items-start text-left">
                                <div className="bg-primary/10 p-3 rounded-lg mb-6">
                                    <feature.icon className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-background">
                <div className="container">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {howItWorks.map(step => (
                            <div key={step.step} className="text-center">
                                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">{step.step}</div>
                                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                <p className="text-muted-foreground">{step.description}</p>
                            </div>
                        ))}
                    </div>
                     <div className="text-center mt-12">
                         <Button asChild size="lg">
                            <Link href="#">Start Searching</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-primary-900 text-white">
                <div className="container">
                     <div className="grid md:grid-cols-2 gap-12">
                        {testimonials.map(t => (
                            <figure key={t.author} className="bg-primary-700/50 p-8 rounded-xl">
                                <blockquote>
                                    <p className="text-lg text-primary-100 italic">"{t.quote}"</p>
                                </blockquote>
                                <figcaption className="mt-4 text-right font-semibold text-accent-cyan">
                                    &mdash; {t.author}
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
            </section>

             <section className="py-24 bg-background">
                <div className="container">
                     <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-card p-8 rounded-2xl border-2 border-primary">
                             <p className="text-sm font-bold text-primary">FOR RENTERS/BUYERS</p>
                            <p className="text-4xl font-bold my-4">100% FREE</p>
                            <ul className="space-y-2 text-muted-foreground">
                                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2"/> Unlimited searches</li>
                                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2"/> Property verification included</li>
                                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2"/> Direct owner contact</li>
                                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2"/> Virtual tours</li>
                            </ul>
                        </div>
                        <div className="bg-card p-8 rounded-2xl border">
                             <p className="text-sm font-bold text-primary">FOR LANDLORDS/DEVELOPERS</p>
                            <p className="text-2xl font-bold my-4">Flexible Options</p>
                            <ul className="space-y-2 text-muted-foreground">
                                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2"/> Premium Listing: ₦50k - ₦200k</li>
                                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2"/> Commission: 5-10% on success</li>
                                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2"/> Subscription Plans: Coming Soon</li>
                            </ul>
                            <Button asChild className="mt-6 w-full" variant="outline">
                                <Link href="/contact?type=landlord">List Your Property</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
