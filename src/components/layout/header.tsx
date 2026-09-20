'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ZippatekLogo, ZippatekWordmark } from '@/components/logo';
import { navigation, type NavItem } from '@/lib/navigation';
import { cn } from '@/lib/utils';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  const overDarkHero = !isScrolled && !isMobileMenuOpen;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled || isMobileMenuOpen ? 'bg-background/80 backdrop-blur-lg border-b border-border/20' : 'bg-transparent'
      )}
    >
      <nav className="container flex items-center justify-between h-20">
        <Link href="/" className="flex items-center space-x-2.5 group" onClick={() => setIsMobileMenuOpen(false)}>
          <ZippatekLogo className="w-8 h-8 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
          <ZippatekWordmark className={overDarkHero ? 'text-white' : 'text-foreground'} />
        </Link>

        <div className="hidden lg:flex items-center space-x-2">
          {navigation.map((item: NavItem) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                pathname.startsWith(item.href)
                  ? overDarkHero
                    ? 'text-white bg-white/10'
                    : 'text-primary bg-primary/10'
                  : overDarkHero
                    ? 'text-white/80 hover:text-white hover:bg-white/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
            <Button asChild className="hidden lg:flex text-white">
                <Link href="/contact/">Book a Demo</Link>
            </Button>

            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  'lg:hidden p-2 rounded-lg transition-colors',
                  overDarkHero
                    ? 'text-white hover:bg-white/10'
                    : 'text-muted-foreground hover:text-foreground'
                )}
                aria-label="Toggle mobile menu"
            >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 w-full h-screen bg-background"
          >
            <div className="container flex flex-col pt-10 space-y-4">
              {navigation.map((item: NavItem) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'block px-4 py-3 rounded-lg text-base font-medium transition-colors',
                    pathname.startsWith(item.href)
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-6">
                <Button asChild size="lg" className="w-full text-white">
                  <Link href="/contact/">Book a Demo</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
