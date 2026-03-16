'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Programs() {
  const [hoveredProgram, setHoveredProgram] = useState<number | null>(null);

  const programs = [
    {
      number: '01',
      tag: 'Education',
      tagColor: 'bg-[#29ABD4]',
      title: 'Youth Education Drive',
      description:
        'Comprehensive educational support including scholarships, tutoring, and mentorship to ensure no youth is left behind.',
    },
    {
      number: '02',
      tag: 'Entrepreneurship',
      tagColor: 'bg-[#F4701B]',
      title: 'Startup & Skills Hub',
      description:
        'Business training, incubation, and seed funding for young entrepreneurs ready to launch their ventures.',
    },
    {
      number: '03',
      tag: 'Leadership',
      tagColor: 'bg-[#1B3A6B]',
      title: 'Future Leaders Program',
      description:
        'Executive leadership training, networking events, and community projects to develop next-gen leaders.',
    },
    {
      number: '04',
      tag: 'Innovation',
      tagColor: 'bg-[#F5A623]',
      title: 'CreativeLab',
      description:
        'A space for creative expression, technology, arts, and design where youth turn ideas into impactful projects.',
    },
    {
      number: '05',
      tag: 'Community',
      tagColor: 'bg-[#6BBF4E]',
      title: 'Community Champions',
      description:
        'Grassroots programs enabling youth to lead community service initiatives and drive local change.',
    },
    {
      number: '06',
      tag: 'Partnerships',
      tagColor: 'bg-[#E8357A]',
      title: 'Alliance Network',
      description:
        'Strategic collaborations with organizations and institutions to amplify our reach and resources.',
    },
  ];

  return (
    <section id="programs" className="py-20 bg-[#FAFAF5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-[#0A0F1E] mb-4">
            Programs & <span className="text-[#1A5C3A] italic">Initiatives</span>
          </h2>
          <p className="text-[#3D3D3D] text-lg max-w-2xl mx-auto">
            Six interconnected pillars designed to develop the whole person and empower
            sustainable change across Nigeria.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-xl p-8 cursor-pointer transition-all duration-300 ${
                hoveredProgram === index ? 'shadow-2xl translate-y-[-8px]' : 'shadow-lg'
              }`}
              onMouseEnter={() => setHoveredProgram(index)}
              onMouseLeave={() => setHoveredProgram(null)}
            >
              {/* Watermark Number */}
              <div className="absolute top-4 left-4 font-display text-6xl font-bold text-black/5 select-none">
                {program.number}
              </div>

              {/* Tag */}
              <div className={`inline-block ${program.tagColor} text-white px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide mb-4`}>
                {program.tag}
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl font-bold text-[#0A0F1E] mb-3">
                {program.title}
              </h3>

              {/* Description */}
              <p className="text-[#3D3D3D] text-sm leading-relaxed mb-6">
                {program.description}
              </p>

              {/* Learn More Link */}
              <a
                href="#"
                className="inline-flex items-center gap-2 text-[#C8922A] text-sm font-medium hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
