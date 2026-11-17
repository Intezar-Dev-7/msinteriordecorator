import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { EntranceAnimation } from './components/EntranceAnimation';

export default function App() {
  const [selectedProjectType, setSelectedProjectType] = useState<string>('Residential Interior Design');
  const [entranceFinished, setEntranceFinished] = useState(false);

  // Smooth scroll handler with header offset
  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const isMobile = window.innerWidth < 768;
      const headerOffset = isMobile ? 24 : 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedProjectType(serviceTitle);
    scrollToSection('contact');
  };

  const handleInquireProject = (projectName: string) => {
    setSelectedProjectType(`Portfolio: ${projectName}`);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#221F1F] font-sans selection:bg-[#B8976C]/25 selection:text-[#1A1918]">
      {/* Editorial Luxury Entrance Animation - plays once on initial site visit */}
      {!entranceFinished && (
        <EntranceAnimation onComplete={() => setEntranceFinished(true)} />
      )}

      {/* Floating Glassmorphic Header (Contains ONLY: About, Why Choose Us, Portfolio, Contact Us) */}
      <Navbar onNavigate={scrollToSection} />

      {/* Main Content Sections with subtle entrance reveal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
      >
        <main>
          {/* 1. Hero Section */}
          <Hero
            onExplorePortfolio={() => scrollToSection('portfolio')}
            onContactClick={() => scrollToSection('contact')}
            onScrollDown={() => scrollToSection('about')}
          />

          {/* 2. About + Meet the Founder Section */}
          <About onContactClick={() => scrollToSection('contact')} />

          {/* 3. Interior Designing Services (Not in header navigation) */}
          <Services onSelectService={handleSelectService} />

          {/* 4. Portfolio Section */}
          <Portfolio onInquireProject={handleInquireProject} />

          {/* 5. Our Process Section (Not in header navigation) */}
          <Process />

          {/* 6. Why Choose Us Section */}
          <WhyChooseUs onContactClick={() => scrollToSection('contact')} />

          {/* 7. Reviews / Testimonials Section with Auto-Scroll (Not in header navigation) */}
          <Testimonials />

          {/* 8. FAQ Section (Not in header navigation) */}
          <Faq onContactClick={() => scrollToSection('contact')} />

          {/* 9. Contact Us Section with WhatsApp Form Integration */}
          <Contact initialProjectType={selectedProjectType} />
        </main>

        {/* 10. Luxury Studio Footer */}
        <Footer onNavigate={scrollToSection} />
      </motion.div>

      {/* 11. Floating WhatsApp Button with Glow & Pulse */}
      <FloatingWhatsApp />
    </div>
  );
}
