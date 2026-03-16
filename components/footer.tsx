'use client';

import { Youtube, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
    </svg>
  );
}

export default function Footer() {
  const [year, setYear] = useState(2025);
  useEffect(() => { setYear(new Date().getFullYear()); }, []);

  const socialLinks = [
    { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/@de_inspired?si=wrrbCg8GyTMJUYk5' },
    { icon: TikTokIcon, label: 'TikTok', href: 'https://www.tiktok.com/@de_inspired_?_r=1&_t=ZS-94M4CfeDVEz' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/de_inspired_?igsh=N3JkbmVubmluN2Zh' },
  ];

  const footerLinks = {
    navigate: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Programs', href: '#programs' },
      { label: 'Leadership', href: '#leadership' },
    ],
    getInvolved: [
      { label: 'Membership', href: '#membership' },
      { label: 'Contact', href: '#contact' },
      { label: 'Partner With Us', href: '#contact' },
      { label: 'Donate', href: '#contact' },
    ],
    governance: [
      { label: 'Constitution', href: '#' },
      { label: 'Board of Trustees', href: '#governance' },
      { label: 'Financial Reports', href: '#' },
      { label: 'Code of Conduct', href: '#' },
    ],
  };

  return (
    <footer className="bg-[#0A0F1E] text-white">
      {/* Big Logo Banner */}
      <div className="border-b border-white/10 py-12 flex justify-center">
        <a href="#home">
          <Image
            src="/de_inspired_youth_foundation_transparent.png"
            alt="De Inspired Youth Foundation"
            width={400}
            height={160}
            className="h-32 sm:h-40 w-auto object-contain bg-white rounded-xl px-6 py-3"
          />
        </a>
      </div>

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <div className="mb-4">
              <span className="font-display text-2xl font-bold">
                <span className="text-[#C8922A]">De</span>
                <span className="ml-2">Inspired</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Empowering Nigerian youth through transformative education, leadership, and
              innovation.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-white/40 hover:text-[#C8922A] transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigate Column */}
          <div>
            <h4 className="font-display text-lg font-bold text-white mb-6">Navigate</h4>
            <ul className="space-y-3">
              {footerLinks.navigate.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-[#C8922A] text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved Column */}
          <div>
            <h4 className="font-display text-lg font-bold text-white mb-6">Get Involved</h4>
            <ul className="space-y-3">
              {footerLinks.getInvolved.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-[#C8922A] text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Governance Column */}
          <div>
            <h4 className="font-display text-lg font-bold text-white mb-6">Governance</h4>
            <ul className="space-y-3">
              {footerLinks.governance.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-[#C8922A] text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © {year} De Inspired Youth Foundation. All rights reserved.
            </p>
            <div className="text-[#C8922A] text-xs uppercase tracking-widest font-medium">
              Integrity · Discipline · Excellence
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
