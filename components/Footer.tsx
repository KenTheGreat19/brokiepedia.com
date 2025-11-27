import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

/**
 * Footer Component
 * Site-wide footer with links, social, and copyright
 * 4-column layout on desktop, stacks on mobile
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  const categories = [
    { name: "Forex Brokers", href: "/brokers?category=forex" },
    { name: "Crypto Brokers", href: "/brokers?category=crypto" },
    { name: "Online Casinos", href: "/casinos" },
    { name: "Sports Betting", href: "/casinos?category=sports-betting" },
    { name: "Stock Trading", href: "/trading" },
    { name: "CFD Trading", href: "/brokers?category=cfd" },
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Advertise", href: "/contact" },
    { name: "Careers", href: "/contact" },
  ];

  const legal = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/privacy-policy#cookies" },
    { name: "Disclaimer", href: "/terms#disclaimer" },
  ];

  const social = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" },
  ];

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Categories */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Categories
            </h3>
            <ul className="space-y-2">
              {categories.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-brand-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-brand-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-brand-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Connect
            </h3>
            <div className="flex space-x-3 mb-6">
              {social.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-brand-400 hover:text-white transition-colors"
                    aria-label={item.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                <Mail className="w-4 h-4 inline mr-1" />
                hello@brokiepedia.com
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground text-center md:text-left">
            <p>© {currentYear} Brokiepedia. All rights reserved.</p>
            <p className="text-xs mt-1">
              <strong>Don't Get Brokie</strong> – Real Reviews on Brokers, Casinos & Trading Apps
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 rounded-full text-xs font-semibold text-yellow-800 dark:text-yellow-400">
              🔞 18+ Only
            </div>
            <div className="flex items-center gap-1 px-3 py-1 bg-green-100 dark:bg-green-900/30 rounded-full text-xs font-semibold text-green-800 dark:text-green-400">
              ✓ 100% Independent
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
