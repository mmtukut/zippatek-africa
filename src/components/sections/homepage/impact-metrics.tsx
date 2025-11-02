"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/animated-counter";

const stats = [
    { value: 2.3, suffix: "M+", label: "Properties Mapped", description: "Across 6 Nigerian states and counting" },
    { value: 500, prefix: "₦", suffix: "B+", label: "Revenue Potential Identified", description: "Hidden tax base made visible" },
    { value: 94, suffix: "%", label: "Detection Accuracy", description: "Satellite AI outperforms manual surveys" },
    { value: 6, label: "Government Partnerships", description: "Pilot programs with state revenue boards" },
];

export function ImpactMetrics() {
  return (
    <section className="py-24 bg-primary-900 text-white">
      <div className="container">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
        >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our Impact So Far
            </h2>
            <p className="text-lg text-primary-100 max-w-2xl mx-auto">
                We are transforming Africa's property landscape with data-driven insights and tangible results.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center bg-primary-700/50 p-8 rounded-2xl"
                >
                    <div className="text-5xl md:text-6xl font-bold text-accent-cyan mb-2">
                        <AnimatedCounter
                            to={stat.value}
                            prefix={stat.prefix}
                            suffix={stat.suffix}
                            decimals={stat.value % 1 !== 0 ? 1 : 0}
                        />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{stat.label}</h3>
                    <p className="text-sm text-primary-100">{stat.description}</p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
