'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const logos = [
    PlaceHolderImages.find(p => p.id === "nigcomsat-logo"),
    PlaceHolderImages.find(p => p.id === "yiaga-logo"),
    PlaceHolderImages.find(p => p.id === "un-logo"),
    PlaceHolderImages.find(p => p.id === "mckinsey-logo"),
    PlaceHolderImages.find(p => p.id === "google-dev-logo"),
    PlaceHolderImages.find(p => p.id === "leap-africa-logo"),
].filter(Boolean);

export function PressRecognition() {
    return (
        <section className="py-24 bg-background">
            <div className="container text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                >
                    As Featured In & Recognized By
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-muted-foreground mb-12 max-w-2xl mx-auto"
                >
                    Our innovative work is gaining attention from global leaders in technology, development, and social impact.
                </motion.p>
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
                    {logos.map((logo, index) => logo && (
                        <motion.div
                            key={logo.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                            className="grayscale hover:grayscale-0 transition-all duration-300"
                        >
                            <Image
                                src={logo.imageUrl}
                                alt={logo.description}
                                width={158}
                                height={48}
                                data-ai-hint={logo.imageHint}
                                className="object-contain"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
