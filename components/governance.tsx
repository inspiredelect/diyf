'use client';

export default function Governance() {
  const governanceBodies = [
    {
      title: 'Board of Trustees',
      subtitle: 'Supreme Governing Body',
      responsibilities: [
        'Strategic oversight and policy approval',
        'Legal and fiduciary accountability',
        'Compliance with regulatory requirements',
        'Long-term sustainability planning',
        'Major organizational decisions',
      ],
    },
    {
      title: 'Executive Council',
      subtitle: 'Day-to-Day Management',
      responsibilities: [
        'Program implementation and delivery',
        'Budget management and resource allocation',
        'Stakeholder relationship management',
        'Staff supervision and performance',
        'Operational efficiency and excellence',
      ],
    },
    {
      title: 'Advisory Council',
      subtitle: 'Strategic Guidance',
      responsibilities: [
        'Quarterly strategic meetings',
        'Industry expertise and best practices',
        'Network expansion and partnerships',
        'International collaboration support',
        'Mentorship and thought leadership',
      ],
    },
  ];

  const fundingSources = [
    { icon: '💳', label: 'Membership Dues' },
    { icon: '🤝', label: 'Donations & Grants' },
    { icon: '🏢', label: 'Sponsorships' },
    { icon: '🎯', label: 'Fundraising Events' },
  ];

  return (
    <section id="governance" className="py-20 bg-[#FAFAF5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-[#0A0F1E] mb-4">
            Governance Framework
          </h2>
          <p className="text-[#3D3D3D] text-lg max-w-2xl mx-auto">
            Transparent, accountable structures ensuring effective leadership and
            mission alignment.
          </p>
        </div>

        {/* Governance Bodies Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {governanceBodies.map((body, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Header */}
              <div className="bg-[#0A0F1E] px-8 py-6">
                <h3 className="font-display text-xl font-bold text-white mb-1">
                  {body.title}
                </h3>
                <p className="text-[#C8922A] text-sm italic">{body.subtitle}</p>
              </div>

              {/* Content */}
              <div className="p-8">
                <ul className="space-y-3">
                  {body.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-[#C8922A] font-bold flex-shrink-0">•</span>
                      <span className="text-[#3D3D3D] text-sm">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Financial Transparency Panel */}
        <div className="bg-white rounded-xl p-6 sm:p-8 md:p-12 shadow-lg">
          <h3 className="font-display text-3xl font-bold text-[#0A0F1E] mb-2">
            Financial Transparency
          </h3>
          <p className="text-[#3D3D3D] mb-8">
            De Inspired is committed to responsible stewardship of all resources entrusted
            to us. All funds are used exclusively for programs and mission advancement.
          </p>

          {/* Funding Sources Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mb-8">
            {fundingSources.map((source, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-3">{source.icon}</div>
                <p className="text-[#3D3D3D] font-semibold text-sm">{source.label}</p>
              </div>
            ))}
          </div>

          {/* Compliance Note */}
          <div className="border-t border-[#E8E8E3] pt-8">
            <p className="text-[#3D3D3D] text-sm leading-relaxed">
              <span className="font-semibold text-[#0A0F1E]">Annual Audits:</span> All
              financial records are independently audited annually and made available to
              stakeholders upon request.{' '}
              <span className="font-semibold text-[#0A0F1E]">
                No-Profit-Distribution Rule:
              </span>{' '}
              All surplus revenue is reinvested into programs, operations, and organizational
              growth—never distributed to individuals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
