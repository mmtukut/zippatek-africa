'use client';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export function FinalCta() {
    return (
        <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-primary-700 opacity-80"></div>
             <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{backgroundImage: 'url(/grid.svg)'}}></div>
            <div className="container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Ready to Transform Property Intelligence in Africa?
                    </h2>
                    <p className="max-w-3xl mx-auto text-lg text-primary-100 mb-10">
                        Join governments, enterprises, and innovators building the future of African real estate.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-accent-cyan text-gray-900 hover:bg-accent-cyan/90">
                           <Link href="/contact?type=demo">Schedule a Demo</Link>
                        </Button>
                        <Button asChild size="lg" variant="secondary" className="bg-white/10 text-white hover:bg-white/20">
                            <Link href="/products">Explore Products</Link>
                        </Button>
                        <Button asChild size="lg" variant="ghost" className="text-primary-100 hover:bg-white/10 hover:text-white">
                           <Link href="/press">Download Press Kit</Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
