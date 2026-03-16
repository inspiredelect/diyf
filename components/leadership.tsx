'use client';

export default function Leadership() {
  const teamMembers = [
    {
      initials: 'NA',
      name: 'Nwakuzor Andrew A.',
      role: 'Founder & President',
      isVacant: false,
    },
    {
      initials: 'CG',
      name: 'Ms. Chinasa Gladys',
      role: 'Secretary-General',
      isVacant: false,
    },
    {
      initials: 'WO',
      name: 'Ms. Winifred Okeh',
      role: 'Programs & Projects Director',
      isVacant: false,
    },
    {
      initials: '',
      name: 'Position Open',
      role: 'Vice President',
      isVacant: true,
    },
    {
      initials: '',
      name: 'Position Open',
      role: 'Treasurer',
      isVacant: true,
    },
    {
      initials: '',
      name: 'Position Open',
      role: 'Public Relations Officer',
      isVacant: true,
    },
  ];

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

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 text-center ${
                member.isVacant
                  ? 'bg-[#F4F6F9] border-2 border-dashed border-[#7A8499]/30'
                  : 'bg-[#FAFAF5]'
              }`}
            >
              {/* Avatar */}
              <div
                className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6 ${
                  member.isVacant
                    ? 'bg-[#D0D8E8] text-[#7A8499]'
                    : 'bg-gradient-to-br from-[#F4701B] to-[#1B3A6B]'
                }`}
              >
                {member.isVacant ? (
                  <span className="text-3xl">✨</span>
                ) : (
                  <span className="text-3xl font-display font-bold text-white">
                    {member.initials}
                  </span>
                )}
              </div>

              {/* Name */}
              <h3
                className={`font-display text-xl font-bold mb-1 ${
                  member.isVacant
                    ? 'text-[#7A8499] italic'
                    : 'text-[#0A0F1E]'
                }`}
              >
                {member.name}
              </h3>

              {/* Role */}
              <p
                className={`text-xs uppercase tracking-widest font-medium ${
                  member.isVacant
                    ? 'text-[#7A8499]/60'
                    : 'text-[#C8922A]'
                }`}
              >
                {member.role}
              </p>
            </div>
          ))}
        </div>

        {/* Advisory Council Banner */}
        <div className="bg-[#0A0F1E] rounded-xl p-6 sm:p-8 md:p-12 text-center">
          <h3 className="font-display text-3xl font-bold text-white mb-3">
            Advisory Council
          </h3>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto">
            Strategic guidance from industry experts and seasoned professionals committed
            to elevating our impact and ensuring sustainable growth.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-[#C8922A] text-[#0A0F1E] rounded-md font-medium hover:bg-[#B8792A] transition-colors"
          >
            Inquire About Advisory Roles
          </a>
        </div>
      </div>
    </section>
  );
}
