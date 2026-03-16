'use client';

import Navigation from '@/components/navigation';
import Hero from '@/components/hero';
import About from '@/components/about';
import Values from '@/components/values';
import Programs from '@/components/programs';
import Leadership from '@/components/leadership';
import Membership from '@/components/membership';
import Governance from '@/components/governance';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Values />
      <Programs />
      <Leadership />
      <Membership />
      <Governance />
      <Contact />
      <Footer />
    </main>
  );
}
