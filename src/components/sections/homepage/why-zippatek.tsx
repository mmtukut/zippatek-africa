'use client';
import { motion } from "framer-motion";
import { Bot, Satellite, Globe, Building, Code, Zap } from 'lucide-react';
import { AfricaIcon } from "@/components/icons";

const features = [
    {
        icon: Bot,
        title: "AI-Native",
        description: "Built with artificial intelligence at the core, not bolted on later."
    },
    {
        icon: Satellite,
        title: "Satellite Precision",
        description: "Leveraging space technology for unprecedented accuracy."
    },
    {
        icon: AfricaIcon,
        title: "African-First",
        description: "Designed for Africa's unique challenges, not copied from the West."
    },
    {
        icon: Building,
        title: "Government-Ready",
        description: "Enterprise-grade security and compliance for public sector partners."
    },
    {
        icon: Code,
        title: "Developer-Friendly",
        description: "Robust APIs and documentation for seamless integration."
    },
    {
        icon: Zap,
        title: "Continuous Innovation",
        description: "Led by UN Millennium Fellow and McKinsey Forward Champion."
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
                        We're not just another proptech company. We are a deep-tech firm building foundational infrastructure.
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
