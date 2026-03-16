'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen pt-16 bg-gradient-to-b from-[#1A3A52] via-[#0A0F1E] to-[#0A0F1E] dark:from-[#0A0F1E] dark:to-[#050810] relative overflow-hidden flex items-center justify-center"
    >
      {/* Galaxy background with animated elements */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Galaxy gradient backgrounds */}
          <radialGradient id="galaxyCore1" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#FF8C42" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#FF8C42" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="galaxyCore2" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#20B2AA" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#20B2AA" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="galaxyCore3" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#E91E63" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#E91E63" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="nebula" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#9C27B0" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#9C27B0" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Animated galaxy cores */}
        <g className="animate-[galaxyRotate_20s_linear_infinite]" style={{ transformOrigin: '500px 500px' }}>
          <circle cx="500" cy="500" r="350" fill="url(#galaxyCore1)" />
          <circle cx="600" cy="350" r="200" fill="url(#galaxyCore2)" />
          <circle cx="350" cy="650" r="250" fill="url(#galaxyCore3)" />
          <circle cx="700" cy="600" r="180" fill="url(#nebula)" />
        </g>

        {/* Concentric orbit circles */}
        <circle
          cx="500"
          cy="500"
          r="400"
          fill="none"
          stroke="#FFD700"
          strokeWidth="0.5"
          opacity="0.1"
          style={{ animation: 'galaxyRotate 30s linear infinite' }}
        />
        <circle
          cx="500"
          cy="500"
          r="300"
          fill="none"
          stroke="#20B2AA"
          strokeWidth="0.5"
          opacity="0.08"
          style={{ animation: 'galaxyRotate -25s linear infinite' }}
        />
        <circle
          cx="500"
          cy="500"
          r="500"
          fill="none"
          stroke="#E91E63"
          strokeWidth="0.5"
          opacity="0.06"
          style={{ animation: 'galaxyRotate 35s linear infinite' }}
        />

        {/* Orbiting stars - outer ring */}
        <g style={{ transformOrigin: '500px 500px' }}>
          {[...Array(6)].map((_, i) => (
            <circle
              key={`orbit1-${i}`}
              cx="680"
              cy="500"
              r="2.5"
              fill={['#FFD700', '#FF8C42', '#32CD32', '#20B2AA', '#E91E63', '#9C27B0'][i]}
              opacity="0.8"
              style={{
                animation: `starOrbit1 ${15 + i * 2}s linear infinite`,
                transformOrigin: '500px 500px',
              }}
            />
          ))}
        </g>

        {/* Orbiting stars - middle ring */}
        <g style={{ transformOrigin: '500px 500px' }}>
          {[...Array(5)].map((_, i) => (
            <circle
              key={`orbit2-${i}`}
              cx="700"
              cy="500"
              r="2"
              fill={['#FF8C42', '#20B2AA', '#E91E63', '#32CD32', '#FFD700'][i]}
              opacity="0.7"
              style={{
                animation: `starOrbit2 ${18 + i * 2.5}s linear infinite`,
                transformOrigin: '500px 500px',
              }}
            />
          ))}
        </g>

        {/* Orbiting stars - inner ring */}
        <g style={{ transformOrigin: '500px 500px' }}>
          {[...Array(4)].map((_, i) => (
            <circle
              key={`orbit3-${i}`}
              cx="660"
              cy="500"
              r="1.8"
              fill={['#E91E63', '#9C27B0', '#FFD700', '#32CD32'][i]}
              opacity="0.75"
              style={{
                animation: `starOrbit3 ${20 + i * 3}s linear infinite`,
                transformOrigin: '500px 500px',
              }}
            />
          ))}
        </g>

        {/* Floating animated dots - scattered around the scene */}
        {isLoaded && [...Array(15)].map((_, i) => {
          const angles = Array.from({ length: 15 }, (_, idx) => (idx * 360) / 15);
          const distance = 280 + (i % 3) * 80;
          const angle = (angles[i] * Math.PI) / 180;
          const x = 500 + distance * Math.cos(angle);
          const y = 500 + distance * Math.sin(angle);
          return (
            <circle
              key={`float-${i}`}
              cx={x}
              cy={y}
              r={0.8 + (i % 3) * 0.5}
              fill={['#FFD700', '#FF8C42', '#32CD32', '#20B2AA', '#E91E63'][i % 5]}
              opacity="0.5"
              style={{
                animation: [`dotFloat1 ${8 + i * 0.5}s ease-in-out infinite`, `dotFloat2 ${10 + i * 0.7}s ease-in-out infinite`, `dotFloat3 ${12 + i * 0.6}s ease-in-out infinite`][i % 3],
                animationDelay: `${i * 0.2}s`,
              }}
            />
          );
        })}

        {/* Gold bottom-left glow */}
        <circle cx="150" cy="900" r="500" fill="url(#galaxyCore1)" />

        {/* Teal top glow */}
        <circle cx="500" cy="50" r="400" fill="url(#galaxyCore2)" />

        {/* Pink top-right glow */}
        <circle cx="850" cy="150" r="450" fill="url(#galaxyCore3)" />
      </svg>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow Tag */}
        <div
          className={`mb-8 inline-block px-4 py-2 border border-[#C8922A] text-[#C8922A] text-xs uppercase tracking-widest rounded-full bg-[#C8922A]/5 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          De Inspired Youth Foundation · Nigeria
        </div>

        {/* Main Headline */}
        <h1
          className={`font-display text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 transition-all duration-1000 delay-200 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Igniting the Spark of{' '}
          <span className="text-[#C8922A] italic">Potential</span>
        </h1>

        {/* Subheading */}
        <p
          className={`text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Empowering Nigerian youth through education, leadership, and innovation to
          create lasting positive change in their communities.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center mb-16 transition-all duration-1000 delay-400 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <a
            href="#programs"
            className="px-6 py-3 sm:px-8 sm:py-4 bg-[#C8922A] text-[#0A0F1E] rounded-md font-medium hover:bg-[#B8792A] transition-all duration-300 hover:translate-y-[-2px] text-sm sm:text-base"
          >
            Explore Our Programs
          </a>
          <a
            href="#membership"
            className="px-6 py-3 sm:px-8 sm:py-4 border border-white text-white rounded-md font-medium hover:bg-white/10 transition-all duration-300 hover:translate-y-[-2px] text-sm sm:text-base"
          >
            Become a Member
          </a>
        </div>

        {/* Stats Bar */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 pt-8 sm:pt-12 border-t border-white/10 transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {[
            { number: '6', label: 'Programs' },
            { number: '5', label: 'Core Values' },
            { number: '4', label: 'Member Tiers' },
            { number: '3', label: 'Governing Bodies' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-4xl font-bold text-[#C8922A]">
                {stat.number}
              </div>
              <div className="text-xs uppercase tracking-widest text-white/50 mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
