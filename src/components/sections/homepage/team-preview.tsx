'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";
import { Linkedin, ArrowRight } from "lucide-react";

const founders = [
    {
        name: "Muhammad Muhammad Tukur",
        title: "Co-Founder & CTO",
        image: PlaceHolderImages.find(p => p.id === "muhammad-tukur"),
        credentials: [
            "UN Millennium Fellow",
            "McKinsey Forward Champion",
            "Google Developer Groups Lead",
            "NIGCOMSAT Accelerator Alumnus",
        ],
        bio: "Tech visionary with a track record of building AI-native solutions. Led 1,000+ students in digital transformation initiatives across Northeast Nigeria.",
        linkedin: "#",
    },
    {
        name: "Aminu S. Muhammad",
        title: "Co-Founder & COO",
        image: PlaceHolderImages.find(p => p.id === "aminu-muhammad"),
        credentials: [
            "Chartered Estate Surveyor & Valuer",
            "20+ Years Industry Experience",
            "Founder, Property Market NG",
        ],
        bio: "Property industry veteran bringing deep market expertise and government relationships. A licensed marketer with a passion for transparency.",
        linkedin: "#",
    },
];

export function TeamPreview() {
    return (
        <section className="py-24 bg-background">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Built by World-Class Talent
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A team combining tech expertise with deep industry knowledge.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {founders.map((founder, index) => (
                        <motion.div
                            key={founder.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-start border"
                        >
                            {founder.image && (
                                <div className="flex-shrink-0">
                                    <Image
                                        src={founder.image.imageUrl}
                                        alt={`Portrait of ${founder.name}`}
                                        width={120}
                                        height={120}
                                        data-ai-hint={founder.image.imageHint}
                                        className="rounded-full object-cover aspect-square"
                                    />
                                </div>
                            )}
                            <div className="flex-grow">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-2xl font-bold text-foreground">{founder.name}</h3>
                                        <p className="text-primary font-medium">{founder.title}</p>
                                    </div>
                                    <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                        <Linkedin className="h-6 w-6" />
                                        <span className="sr-only">LinkedIn Profile</span>
                                    </a>
                                </div>
                                <ul className="mt-4 space-y-2">
                                    {founder.credentials.map(cred => (
                                        <li key={cred} className="flex items-center text-sm text-muted-foreground">
                                            <span className="text-accent mr-2">✓</span>
                                            {cred}
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-4 text-sm text-muted-foreground border-t border-border pt-4">{founder.bio}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center mt-16"
                >
                    <Button asChild size="lg" variant="outline" className="group">
                        <Link href="/team">
                            Meet the Full Team
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
