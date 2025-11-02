'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Check, CheckCircle } from "lucide-react";

const PageHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
    <div className="relative bg-primary-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-primary-700 opacity-80"></div>
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'url(/grid.svg)'}}></div>
        <div className="container relative z-10 text-center">
            <p className="text-primary-100 font-semibold mb-2">FastFind360</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 !leading-tight">{title}</h1>
            <p className="text-lg md:text-xl text-primary-100 max-w-3xl mx-auto">{subtitle}</p>
            <div className="mt-8 flex gap-4 justify-center">
                 <Button asChild size="lg">
                    <Link href="/contact?type=gov">Schedule Government Demo</Link>
                </Button>
                 <Button asChild size="lg" variant="outline" className="border-primary-100/50 hover:bg-white hover:text-primary-900">
                    <Link href="#case-study">View Case Study</Link>
                </Button>
            </div>
        </div>
    </div>
);

const stats = [
    { value: "60%", label: "Informal Development", description: "Billions in buildings and spaces that don't officially exist." },
    { value: "₦2T+", label: "Annual Loss", description: "Revenue that slips through the cracks of manual surveying." },
    { value: "3-5 Years", label: "Outdated Data", description: "By the time surveys finish, cities have already changed." },
];

const features = [
    { 
        title: "Satellite Detection", 
        description: "Automated identification of ALL properties — including informal settlements, new constructions, and illegal structures — using advanced satellite imagery and AI.",
        image: PlaceHolderImages.find(p => p.id === "satellite-detection")
    },
    { 
        title: "Admin Dashboard", 
        description: "Centralized command center for government officials to view, flag, and manage unregistered or illegal structures. Streamlined enforcement workflows.",
        image: PlaceHolderImages.find(p => p.id === "admin-dashboard")
    },
    { 
        title: "Citizen Verification Portal", 
        description: "User-friendly portal where citizens verify property details and report discrepancies. Crowdsourced transparency.",
        image: PlaceHolderImages.find(p => p.id === "citizen-portal")
    },
]

const pilotResults = [
    { value: "2.3M+", label: "Properties Detected" },
    { value: "94%", label: "Accuracy vs. Ground Truth" },
    { value: "₦500B+", label: "Revenue Potential Identified" },
    { value: "85%", label: "Reduction in Surveying Time" },
    { value: "70%", label: "Cost Savings vs. Traditional Methods" },
];

export default function FastFind360Page() {
    return (
        <div>
            <PageHeader title="Making Nigeria's ₦2 Trillion Invisible Problem Visible" subtitle="Government revenue intelligence platform powered by satellite AI. Recover lost tax revenue. Map the unmapped." />

            <section className="py-24 bg-background">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">The Government's Pain Point</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {stats.map(stat => (
                            <div key={stat.label} className="bg-card p-6 rounded-xl border">
                                <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                                <h3 className="text-lg font-semibold">{stat.label}</h3>
                                <p className="text-sm text-muted-foreground">{stat.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gray-100">
                <div className="container">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">The Zippatek Solution</h2>
                    <div className="space-y-20">
                    {features.map((feature, index) => (
                        <div key={feature.title} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                             <div className={`space-y-4 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                                <h3 className="text-3xl font-bold">{feature.title}</h3>
                                <p className="text-lg text-muted-foreground">{feature.description}</p>
                            </div>
                            {feature.image && (
                                <div className={`rounded-xl overflow-hidden shadow-lg border ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                                    <Image src={feature.image.imageUrl} alt={feature.title} width={800} height={600} data-ai-hint={feature.image.imageHint} className="w-full h-auto object-cover"/>
                                </div>
                            )}
                        </div>
                    ))}
                    </div>
                </div>
            </section>

             <section id="case-study" className="py-24 bg-primary-900 text-white">
                <div className="container">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Pilot Results: Gombe State</h2>
                     <p className="text-lg text-primary-100 max-w-3xl mx-auto text-center mb-12">Our initial deployment demonstrated massive potential for revenue recovery and operational efficiency.</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {pilotResults.map(result => (
                             <div key={result.label} className="bg-primary-700/50 p-6 rounded-xl text-center">
                                <p className="text-3xl font-bold text-accent-cyan mb-2">{result.value}</p>
                                <p className="text-sm text-primary-100">{result.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             <section className="py-24 bg-background">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Unlock Your State's Hidden Revenue?</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">Join forward-thinking governments already piloting FastFind360.</p>
                     <Button asChild size="lg">
                        <Link href="/contact?type=gov">Schedule a Demo</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
