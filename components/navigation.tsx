'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { ThemeToggle } from './theme-toggle';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Membership', href: '#membership' },
    { label: 'Governance', href: '#governance' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-[#0A0F1E]/95 backdrop-blur-md border-b border-[#C8922A]/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <Image
              src="/de_inspired_youth_foundation_transparent.png"
              alt="De Inspired Youth Foundation"
              width={160}
              height={64}
              className="h-14 w-auto object-contain dark:bg-white dark:rounded-md dark:px-2 dark:py-1"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#0A0F1E]/65 dark:text-white/65 text-xs uppercase tracking-widest hover:text-[#C8922A] dark:hover:text-[#C8922A] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <a
              href="#contact"
              className="px-6 py-2 bg-[#C8922A] text-white dark:text-[#0A0F1E] rounded-md font-medium text-sm hover:bg-[#B8792A] transition-colors duration-300"
            >
              Join Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#0A0F1E] dark:text-white hover:text-[#C8922A] transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#0A0F1E]/65 dark:text-white/65 text-xs uppercase tracking-widest hover:text-[#C8922A] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 px-6 py-2 bg-[#C8922A] text-white dark:text-[#0A0F1E] rounded-md font-medium text-sm hover:bg-[#B8792A] transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                Join Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
