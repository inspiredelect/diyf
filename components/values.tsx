'use client';

import { useState } from 'react';

export default function Values() {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  const values = [
    {
      name: 'Integrity',
      description: 'Honesty, transparency, and ethical conduct in all our dealings',
      emoji: '⚖️',
    },
    {
      name: 'Discipline',
      description: 'Commitment to excellence through focused effort and accountability',
      emoji: '💪',
    },
    {
      name: 'Innovation',
      description: 'Creative problem-solving and forward-thinking approaches to development',
      emoji: '💡',
    },
    {
      name: 'Service',
      description: 'Dedicating our talents to uplift and empower our communities',
      emoji: '🤝',
    },
    {
      name: 'Excellence',
      description: 'Pursuing the highest standards in everything we undertake',
      emoji: '🌟',
    },
  ];

  return (
    <section id="values" className="py-20 bg-[#0A0F1E]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">
            Our <span className="text-[#C8922A] italic">Core Values</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            The principles that guide everything we do, every decision we make, and
            every young person we serve.
          </p>
        </div>

        {/* Values Grid */}
        <div className="border border-[#C8922A] rounded-xl p-4 sm:p-8 bg-[#0A0F1E]/50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0 divide-y divide-[#C8922A]/30 md:divide-y-0">
            {values.map((value, index) => (
              <div
                key={index}
                className={`p-6 flex flex-col items-center text-center cursor-pointer transition-all duration-300 ${
                  index !== values.length - 1 ? 'md:border-r md:border-[#C8922A]/30' : ''
                } ${
                  hoveredValue === index ? 'bg-[#C8922A]/10 rounded' : ''
                }`}
                onMouseEnter={() => setHoveredValue(index)}
                onMouseLeave={() => setHoveredValue(null)}
              >
                <div className="text-4xl mb-3">{value.emoji}</div>
                <h3 className="font-display text-lg font-bold text-[#C8922A] uppercase tracking-wider mb-2">
                  {value.name}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
