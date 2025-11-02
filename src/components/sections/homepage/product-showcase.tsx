'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CustomHouseIcon, CustomRocketIcon, CustomSatelliteIcon } from '@/components/icons';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  icon: React.ReactNode;
  title: string;
  tagline: string;
  description: string;
  href: string;
  badge?: string;
  index: number;
}

const products = [
    {
        icon: <CustomHouseIcon className="w-8 h-8 text-accent-cyan" />,
        title: "Propabridge",
        tagline: "Find Your Home in Minutes, Not Weeks",
        description: "AI-powered property marketplace connecting buyers and renters with verified landlords and developers across Nigeria.",
        href: "/products/propabridge",
        badge: "Consumer Platform",
    },
    {
        icon: <CustomSatelliteIcon className="w-8 h-8 text-accent-cyan" />,
        title: "FastFind360",
        tagline: "Satellite-Powered Revenue Intelligence",
        description: "Government revenue recovery platform using geospatial AI to map unmapped properties and unlock billions in tax revenue.",
        href: "/products/fastfind360",
        badge: "Enterprise Solution",
    },
    {
        icon: <CustomRocketIcon className="w-8 h-8 text-accent-cyan" />,
        title: "What's Next",
        tagline: "Innovation Never Sleeps",
        description: "We're building the next generation of proptech solutions for Africa. From climate-resilient construction to decentralized land registries.",
        href: "/about",
        badge: "R&D Pipeline",
    }
]

const ProductCard: React.FC<ProductCardProps> = ({ icon, title, tagline, description, href, badge, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
        <div className="h-full relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-accent-cyan/50 transition-all duration-300 flex flex-col group">
            <div 
                className={cn(
                    "absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
                    "bg-gradient-to-br from-accent-cyan/30 via-transparent to-primary/30"
                )}
            />
            
            {badge && (
                <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">
                    {badge}
                    </span>
                </div>
            )}
            
            <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 w-12 h-12 flex items-center justify-center bg-primary-700/50 rounded-lg">
                {icon}
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-lg text-accent-cyan mb-4 font-medium">{tagline}</p>
            <p className="text-gray-300 mb-8 leading-relaxed flex-grow">{description}</p>
            
            <Button variant="ghost" asChild className="text-accent-cyan hover:text-white hover:bg-accent-cyan/20 justify-start p-0 h-auto group/btn">
                <Link href={href} className="w-fit">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
            </Button>
        </div>
    </motion.div>
  );
};

export const ProductShowcase = () => {
    return (
        <section className="py-24 bg-primary-900 relative">
             <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'url(/grid.svg)'}}></div>
            <div className="container relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <ProductCard key={product.title} {...product} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}
