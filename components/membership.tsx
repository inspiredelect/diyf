'use client';

import { useState } from 'react';

export default function Membership() {
  const [hoveredTier, setHoveredTier] = useState<number | null>(null);

  const tiers = [
    {
      number: 'I',
      name: 'Founding Members',
      description: "Pioneer members who shape our foundation's direction and strategic vision.",
    },
    {
      number: 'II',
      name: 'Ordinary Members',
      description: 'Active participants engaging in our programs, events, and community service initiatives.',
    },
    {
      number: 'III',
      name: 'Honorary Members',
      description: 'Respected individuals recognized for significant contributions to our mission and values.',
    },
    {
      number: 'IV',
      name: 'Youth Ambassadors',
      description: 'Young leaders amplifying our message and mobilizing peers within their networks.',
    },
  ];

  return (
    <section id="membership" className="py-20 bg-[#0A0F1E]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">
            Membership <span className="text-[#C8922A] italic">Categories</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            De Inspired welcomes members from all backgrounds. We value diversity and
            believe every voice strengthens our movement. No discrimination based on
            gender, religion, ethnicity, or social status.
          </p>
        </div>

        {/* Membership Tiers */}
        <div className="border border-[#C8922A] rounded-xl p-4 sm:p-8 bg-[#0A0F1E]/50 mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y divide-[#C8922A]/30 sm:divide-y-0 sm:divide-x sm:divide-[#C8922A]/30">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className={`p-6 sm:p-8 flex flex-col items-center text-center cursor-pointer transition-all duration-300 ${
                  hoveredTier === index ? 'bg-[#C8922A]/10 rounded' : ''}`}
                onMouseEnter={() => setHoveredTier(index)}
                onMouseLeave={() => setHoveredTier(null)}
              >
                <div className="text-xs uppercase tracking-widest text-[#C8922A] mb-2 font-medium">
                  Tier {tier.number}
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  {tier.name}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {tier.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Member Commitments */}
        <div className="bg-[#C8922A]/10 border border-[#C8922A]/30 rounded-xl p-6 sm:p-8 md:p-12 mb-12">
          <h3 className="font-display text-2xl font-bold text-white mb-6">
            Member Commitments
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-[#C8922A] font-semibold mb-3">Code of Conduct</h4>
              <p className="text-white/70 text-sm">
                All members commit to upholding our values of integrity, respect, and
                ethical conduct in all interactions.
              </p>
            </div>
            <div>
              <h4 className="text-[#C8922A] font-semibold mb-3">Discipline Requirements</h4>
              <p className="text-white/70 text-sm">
                Active engagement, accountability, and adherence to organizational
                guidelines ensure collective success.
              </p>
            </div>
            <div>
              <h4 className="text-[#C8922A] font-semibold mb-3">
                Consequences of Violation
              </h4>
              <p className="text-white/70 text-sm">
                Violations of conduct standards may result in suspension or removal,
                ensuring organizational integrity.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-[#C8922A] text-[#0A0F1E] rounded-md font-medium hover:bg-[#B8792A] transition-colors text-lg"
          >
            Apply for Membership →
          </a>
        </div>
      </div>
    </section>
  );
}
