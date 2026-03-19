'use client';

import Image from 'next/image';

const teamMembers = [
  {
    name: 'Nwakuzor Andrew Wealth',
    role: 'Founder & President',
    image: '/founder_president.jpeg',
  },
  {
    name: 'Ms. Anwulika Anna',
    role: 'Financial Secretary & Treasurer',
    image: '/financial_secatary.jpeg',
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A0F1E] mb-4">
            Leadership & Executive Council
          </h2>
          <p className="text-[#3D3D3D] text-lg">
            Meet the visionary leaders driving our mission forward
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-[#FAFAF5] rounded-xl overflow-hidden shadow-lg w-full sm:w-72"
            >
              <div className="relative w-full h-80">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-display text-xl font-bold text-[#0A0F1E] mb-1">
                  {member.name}
                </h3>
                <p className="text-xs uppercase tracking-widest font-medium text-[#C8922A]">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
