import Link from 'next/link';
import { ZippatekLogo, ZippatekWordmark } from '@/components/logo';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'GitHub', href: '#', icon: Github },
];

const productLinks = [
  { name: 'Propabridge', href: '/products/propabridge' },
  { name: 'FastFind360', href: '/products/fastfind360' },
  { name: 'API Documentation', href: '/docs' },
];

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Team', href: '/team' },
  { name: 'Careers', href: '/careers' },
  { name: 'Press', href: '/press' },
  { name: 'Blog', href: '/blog' },
];

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
          {/* Column 1: Brand */}
          <div className="space-y-4 col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2.5">
              <ZippatekLogo className="w-8 h-8" />
              <ZippatekWordmark className="text-white" />
            </Link>
            <p className="text-sm max-w-xs">Building Africa's Property Intelligence Infrastructure.</p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} className="text-gray-400 hover:text-white transition-colors">
                  <social.icon className="w-5 h-5" />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Spacer for layout */}
          <div className="hidden lg:block"></div>

          {/* Column 2: Products */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white tracking-wider">Products</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors text-sm">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white tracking-wider">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors text-sm">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white tracking-wider">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="mailto:hello@zippatek.com" className="hover:text-white transition-colors">hello@zippatek.com</a></li>
              <li>No.1 T.O.S Benson Street, Utako, Abuja</li>
              <li><a href="tel:+2348055269579" className="hover:text-white transition-colors">+234 805 526 9579</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p className="text-gray-500 order-2 sm:order-1 mt-4 sm:mt-0">&copy; {new Date().getFullYear()} Zippatek Digital Ltd. All rights reserved. RC: 8527315</p>
          <div className="flex space-x-6 order-1 sm:order-2">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
