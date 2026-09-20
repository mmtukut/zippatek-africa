import Link from "next/link";
import { ZippatekLogo, ZippatekWordmark } from "@/components/logo";
import { Linkedin } from "lucide-react";
import { company } from "@/lib/company";

const socialLinks = [
  { name: "Aminu on LinkedIn", href: "https://www.linkedin.com/in/aminu-s-muhammad-86997b27/", icon: Linkedin },
  { name: "Muhammad on LinkedIn", href: "https://www.linkedin.com/in/mmtukurofficial", icon: Linkedin },
];

const productLinks = [
  { name: "Propabridge", href: "/products/propabridge/" },
  { name: "Open Propabridge", href: "https://propabridge.com" },
  { name: "FastFind360", href: "/products/fastfind360/" },
];

const companyLinks = [
  { name: "About Us", href: "/about/" },
  { name: "Team", href: "/team/" },
  { name: "Solutions", href: "/solutions/" },
  { name: "Resources", href: "/resources/" },
  { name: "Careers", href: "/careers/" },
  { name: "Press", href: "/press/" },
];

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
          <div className="space-y-4 col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2.5">
              <ZippatekLogo className="w-8 h-8" />
              <ZippatekWordmark className="text-white" />
            </Link>
            <p className="text-sm max-w-xs">{company.legalName}. {company.tagline}</p>
            <p className="text-xs">RC {company.rcNumber}</p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  <social.icon className="w-5 h-5" />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="hidden lg:block"></div>

          <div className="space-y-4">
            <h3 className="font-semibold text-white tracking-wider">Products</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("http") ? (
                    <a href={link.href} className="hover:text-white transition-colors text-sm" target="_blank" rel="noopener noreferrer">{link.name}</a>
                  ) : (
                    <Link href={link.href} className="hover:text-white transition-colors text-sm">{link.name}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

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

          <div className="space-y-4">
            <h3 className="font-semibold text-white tracking-wider">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-white transition-colors">{company.email}</a>
              </li>
              <li>{company.address.full}</li>
              <li>
                <a href={company.phoneHref} className="hover:text-white transition-colors">{company.phone}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p className="text-gray-500 order-2 sm:order-1 mt-4 sm:mt-0">
            &copy; {new Date().getFullYear()} {company.legalName}. All rights reserved. RC: {company.rcNumber}
          </p>
          <div className="flex space-x-6 order-1 sm:order-2">
            <Link href="/privacy/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms/" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
