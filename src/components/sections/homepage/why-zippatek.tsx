'use client';
import { motion } from "framer-motion";
import { Bot, Satellite, Globe, Building, Code, Zap } from 'lucide-react';
import { AfricaIcon } from "@/components/icons";

const features = [
    {
        icon: Bot,
        title: "Propa on WhatsApp",
        description: "Multilingual concierge on WhatsApp, web, and voice — English, Hausa, Yoruba, Igbo, Pidgin."
    },
    {
        icon: Satellite,
        title: "Satellite mapping",
        description: "FastFind360 uses satellite imagery to find unmapped buildings for government revenue work."
    },
    {
        icon: AfricaIcon,
        title: "Built for Nigerian title risk",
        description: "Physical inspection, title sighting, and owner agreements before a listing is public."
    },
    {
        icon: Building,
        title: "Government and marketplace",
        description: "One company: a live consumer marketplace and a satellite tool for revenue boards."
    },
    {
        icon: Code,
        title: "Registered operator",
        description: "You transact with a registered company, not an anonymous listing."
    },
    {
        icon: Zap,
        title: "Zero inspection fees",
        description: "Seekers do not pay to view. Partner agents earn 5% when a deal closes."
    }
]

export function WhyZippatek() {
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
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why Zippatek?</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Verification-first listings, satellite mapping for informal buildings, and a registered Nigerian company behind both products.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card p-8 rounded-2xl border flex flex-col items-start text-left"
                        >
                            <div className="bg-primary/10 p-3 rounded-lg mb-6">
                                <feature.icon className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
