'use client';

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/animated-counter";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
    { value: 2, prefix: "₦", suffix: "T+", label: "in Lost Annual Revenue" },
    { value: 60, suffix: "%", label: "Informal Property Sector" },
    { value: 10, suffix: "M+", label: "Unmapped Buildings" },
];

export function ProblemStatement() {
  return (
    <section className="py-24 bg-gray-900 text-white overflow-hidden">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold !leading-tight mb-6">
            The <span className="text-accent-orange">₦2 Trillion</span> Invisible Problem
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Over 60% of property development in Nigeria occurs informally. Billions lost in unregistered buildings, untaxed spaces, and fraud-plagued transactions. Traditional surveying can't keep pace. We're changing that with space technology.
          </p>
          <Button variant="link" asChild className="text-accent-cyan p-0 h-auto hover:text-white group">
             <Link href="/about/">
              Read the Full Story
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
             </Link>
          </Button>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-8">
            {stats.map((stat, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                    className="text-center lg:text-left"
                >
                    <div className="text-5xl font-bold text-accent-cyan mb-1">
                        <AnimatedCounter to={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                    </div>
                    <p className="text-gray-400">{stat.label}</p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
