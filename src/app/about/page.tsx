import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Telescope, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const PageHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
    <div className="bg-primary-900 text-white py-24">
        <div className="container text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
            <p className="text-lg md:text-xl text-primary-100 max-w-3xl mx-auto">{subtitle}</p>
        </div>
    </div>
);

const values = [
    {
        icon: Target,
        title: "Our Mission",
        description: "To deploy AI-native platforms that transform how Africa discovers, verifies, and transacts real estate — eliminating fraud and unlocking billions in economic value."
    },
    {
        icon: Telescope,
        title: "Our Vision",
        description: "A future where every property in Africa is mapped, verified, and accessible — where governments make data-driven decisions and citizens transact with confidence."
    },
    {
        icon: Zap,
        title: "Our Values",
        description: "Innovation First, Radical Transparency, Africa-Centric design, and a relentless focus on Speed & Simplicity. We build for our context, not copied from elsewhere."
    }
];

const milestones = [
    { year: "2024 Q4", event: "Research project identifies ₦2T problem" },
    { year: "2025 Q1", event: "FastFind360 MVP development begins" },
    { year: "2025 Q2", event: "Zippatek Digital Ltd incorporated (RC: 8527315)" },
    { year: "2025 Q2", event: "Propabridge prototype launched" },
    { year: "2025 Q3", event: "NIGCOMSAT Accelerator selection" },
    { year: "2025 Q3", event: "Pilot partnerships with Urban Shelter, Amsadam" },
    { year: "2025 Q4", event: "Government dialogues with state revenue boards" },
    { year: "2026 Q1", event: "[CURRENT] National expansion roadmap" },
];

export default function AboutPage() {
    return (
        <div>
            <PageHeader title="About Zippatek" subtitle="From a university project in Gombe to building Africa's property intelligence backbone." />

            <section className="py-24 bg-background">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">From Gombe to the Globe</h2>
                            <div className="space-y-6 text-muted-foreground leading-relaxed">
                                <p>Zippatek was born from a simple observation: Nigeria's cities are growing faster than anyone can map them.</p>
                                <p>In 2024, Muhammad Tukur — then a computer science student — was working on his final year project using satellite imagery to detect buildings in Gombe State. The results were staggering: 2.3 million unmapped structures. ₦500 billion in lost government revenue.</p>
                                <p>That's when the insight hit: this wasn't just a research project. This was a ₦2 trillion problem affecting every Nigerian city.</p>
                                <p>Together with industry veteran Aminu S. Muhammad, we founded Zippatek Digital Ltd in May 2025 with a bold mission: leverage cutting-edge technology to make Africa's invisible infrastructure visible.</p>
                                <p>Today, we're building the platforms governments and citizens need to navigate Africa's property landscape — fast, secure, and fraud-free.</p>
                            </div>
                            <Button asChild variant="link" className="p-0 mt-8 h-auto text-primary group">
                                <Link href="/blog">
                                    Read Our Full Journey
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </div>
                         <div className="grid grid-cols-1 gap-8">
                            {values.map((value, index) => (
                                <div key={index} className="bg-card p-6 rounded-xl border flex gap-6">
                                    <div className="bg-primary/10 p-3 rounded-lg h-fit">
                                        <value.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                                        <p className="text-muted-foreground">{value.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gray-100">
                <div className="container">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Journey So Far</h2>
                    <div className="relative max-w-2xl mx-auto">
                        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-border"></div>
                        {milestones.map((item, index) => (
                            <div key={index} className="relative flex items-center justify-between mb-12">
                                <div className={`w-[calc(50%-2rem)] text-right ${index % 2 === 1 ? 'order-3' : ''}`}>
                                    <p className="font-bold text-primary">{item.year}</p>
                                    <p className="text-muted-foreground">{item.event}</p>
                                </div>
                                <div className="absolute left-1/2 -translate-x-1/2 z-10 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                                <div className="w-[calc(50%-2rem)]"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
