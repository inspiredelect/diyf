'use client';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Story */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0A0F1E] mb-8">
              Our Story
            </h2>
            <div className="space-y-6 text-[#3D3D3D] leading-relaxed">
              <p>
                De Inspired Youth Foundation was born from a simple yet powerful
                belief: <span className="font-semibold text-[#0A0F1E]">every young Nigerian has untapped potential</span> waiting to
                be discovered and nurtured. Registered in Nigeria and founded by
                passionate leaders committed to social impact, we exist to bridge the
                gap between aspiration and achievement.
              </p>
              <p>
                In a rapidly changing world, we recognized that traditional education
                alone isn't enough. Our Foundation brings together{' '}
                <span className="font-semibold text-[#0A0F1E]">holistic support—mentorship, skills training, and community</span>—to
                equip youth with the tools they need to thrive.
              </p>
              <p>
                Today, we're scaling our impact across Nigeria and positioning
                ourselves for{' '}
                <span className="font-semibold text-[#0A0F1E]">international partnerships and growth</span>, always staying true to our core values
                of Integrity, Discipline, Innovation, Service, and Excellence.
              </p>
            </div>
            <a
              href="#programs"
              className="inline-block mt-8 px-6 py-3 border-2 border-[#C8922A] text-[#C8922A] rounded-md font-medium hover:bg-[#C8922A]/10 transition-colors"
            >
              See What We Do →
            </a>
          </div>

          {/* Right Column - Cards */}
          <div className="space-y-6">
            {/* Mission Card */}
            <div className="bg-[#FAFAF5] rounded-lg p-8 border-l-4 border-[#C8922A]">
              <h3 className="font-display text-2xl font-bold text-[#0A0F1E] mb-4">
                Our Mission
              </h3>
              <p className="text-[#3D3D3D] leading-relaxed">
                To empower Nigerian youth through transformative education, leadership
                development, and entrepreneurship programs that foster innovation,
                integrity, and community service.
              </p>
              <div className="mt-4 text-6xl opacity-5">🎯</div>
            </div>

            {/* Vision Card */}
            <div className="bg-[#FAFAF5] rounded-lg p-8 border-l-4 border-[#1A5C3A]">
              <h3 className="font-display text-2xl font-bold text-[#0A0F1E] mb-4">
                Our Vision
              </h3>
              <p className="text-[#3D3D3D] leading-relaxed">
                A generation of inspired, disciplined, and innovative young Nigerians
                leading positive change in their communities and contributing meaningfully
                to national development.
              </p>
              <div className="mt-4 text-6xl opacity-5">🌱</div>
            </div>

            {/* Location Card */}
            <div className="bg-[#FAFAF5] rounded-lg p-8 border-l-4 border-[#7A8499]">
              <h3 className="font-display text-2xl font-bold text-[#0A0F1E] mb-4">
                Our Base
              </h3>
              <p className="text-[#3D3D3D] leading-relaxed">
                Officially registered in Nigeria, De Inspired operates with a strong
                local presence while actively building international partnerships to
                amplify our impact and scale our initiatives globally.
              </p>
              <div className="mt-4 text-6xl opacity-5">📍</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
