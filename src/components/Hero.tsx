import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioData';

interface HeroProps {
  onExplorePortfolio: () => void;
  onContactClick: () => void;
  onScrollDown?: () => void;
}

interface HeroSlide {
  id: string;
  image: string;
  roomTitle: string;
  roomType: string;
  highlight: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'hero-living-1',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=85',
    roomTitle: 'Warm Minimalist Living Room',
    roomType: 'Living & Lounge Area',
    highlight: 'Fluted Oak Wall Paneling & Travertine',
  },
  {
    id: 'hero-penthouse-2',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=85',
    roomTitle: 'Skyline Penthouse Grand Hall',
    roomType: 'Great Room & Hearth',
    highlight: 'Panoramic Glass & Bookmatched Italian Marble',
  },
  {
    id: 'hero-bedroom-3',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=2200&q=85',
    roomTitle: 'Tranquil Japandi Master Suite',
    roomType: 'Master Bedroom & Retreat',
    highlight: 'Integrated Fluted Headboard & Ambient LED Coves',
  },
  {
    id: 'hero-kitchen-4',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=2200&q=85',
    roomTitle: 'Seamless Modular Kitchen',
    roomType: 'Gourmet Kitchen & Island',
    highlight: 'Quartz Waterfall Counter & Soft-Close Blum Hardware',
  },
  {
    id: 'hero-lounge-5',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=85',
    roomTitle: 'Family Entertainment Lounge',
    roomType: 'Family Living Area',
    highlight: 'Floating TV Credenza & Deep Boucle Modular Seating',
  },
  {
    id: 'hero-dining-6',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=2200&q=85',
    roomTitle: 'Modern Organic Dining Suite',
    roomType: 'Dining & Entertaining',
    highlight: 'Solid Teak 8-Seater & Sculptural Chandelier',
  },
];

const SLIDE_DURATION_MS = 6000; // 6 seconds for a relaxed, slow animated architectural pace

export const Hero: React.FC<HeroProps> = ({
  onExplorePortfolio,
  onContactClick,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const currentSlide = HERO_SLIDES[currentSlideIndex];

  // Automatic slow animation loop for slideshow images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_DURATION_MS);

    return () => clearInterval(interval);
  }, []);

  // Preload images for instant, flicker-free slow transitions
  useEffect(() => {
    HERO_SLIDES.forEach((slide) => {
      const img = new Image();
      img.referrerPolicy = 'no-referrer';
      img.src = slide.image;
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] md:min-h-screen flex flex-col justify-between overflow-hidden pt-24 pb-12 md:pt-32 md:pb-16"
    >
      {/* ========================================================================= */}
      {/* SLIDESHOW BACKGROUND: Slow Animated House Interior Images Layer            */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#141210]">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
            className="absolute inset-0"
          >
            {/* Ken-Burns Slow Zoom Effect */}
            <motion.div
              initial={{ scale: 1, x: 0 }}
              animate={{ scale: 1.06, x: -8 }}
              transition={{ duration: 6.8, ease: 'linear' }}
              className="w-full h-full"
            >
              <img
                src={currentSlide.image}
                alt={`${currentSlide.roomTitle} designed by ${STUDIO_CONFIG.name}`}
                className="w-full h-full object-cover object-center select-none pointer-events-none"
                loading="eager"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Warm, Dark Gradient Overlays for High Contrast & Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#141210]/95 via-[#141210]/50 to-[#141210]/60" />
            <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_35%,_rgba(20,18,16,0.7)_100%]" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Subtle Architectural Drafting Grid Overlay (Designing Studio Vibe) */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none z-[1]"
        style={{
          backgroundImage: `radial-gradient(#FAF8F5 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
        }}
      />

      {/* Spacer for vertical balance */}
      <div className="relative z-10 w-full" />

      {/* ========================================================================= */}
      {/* MAIN HERO CONTENT: Headline, Description & Call to Action Buttons         */}
      {/* ========================================================================= */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center my-auto">
        {/* Bouncy Headline with Spring Physics */}
        <motion.h1
          initial={{ opacity: 0, y: 35, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 220,
            damping: 14,
            mass: 0.9,
            delay: 0.2,
          }}
          className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-[5.2rem] leading-[1.12] sm:leading-[1.08] text-[#FAF8F5] font-normal tracking-[-0.01em] max-w-4xl drop-shadow-sm"
        >
          Designing Spaces That <br className="hidden sm:inline" />
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 12,
              delay: 0.38,
            }}
            className="inline-block italic font-normal text-[#E8D9C5]"
          >
            Feel Like Home.
          </motion.span>
        </motion.h1>

        {/* Supporting Description with Smooth Spring */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 220,
            damping: 16,
            delay: 0.55,
          }}
          className="mt-5 text-base sm:text-lg md:text-xl text-[#E5DFD7] font-light max-w-2xl leading-relaxed drop-shadow-xs"
        >
          Complete, beautiful, and practical home interiors executed by master craftsmen under Founder Manak Chand Suthar.
        </motion.p>

        {/* Primary and Secondary CTA Buttons with Bouncy Spring Physics */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 240,
            damping: 14,
            delay: 0.65,
          }}
          className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto"
        >
          {/* Primary CTA with Bouncy Hover & Tap */}
          <motion.button
            whileHover={{ scale: 1.06, y: -3 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: 'spring', stiffness: 400, damping: 13 }}
            onClick={onExplorePortfolio}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm tracking-[0.14em] uppercase font-medium bg-[#FAF8F5] text-[#1C1917] hover:bg-[#D4B68D] hover:text-[#1C1917] transition-colors shadow-lg hover:shadow-2xl cursor-pointer group"
            id="hero-primary-cta"
          >
            <span>View Our Work</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>

          {/* Secondary CTA with Bouncy Hover & Tap */}
          <motion.button
            whileHover={{ scale: 1.06, y: -3 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: 'spring', stiffness: 400, damping: 13 }}
            onClick={onContactClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs sm:text-sm tracking-[0.14em] uppercase font-medium text-[#FAF8F5] border border-[#FAF8F5]/40 hover:border-[#FAF8F5] hover:bg-[#FAF8F5]/15 backdrop-blur-sm transition-colors cursor-pointer"
            id="hero-secondary-cta"
          >
            <span>Visit Us</span>
          </motion.button>
        </motion.div>
      </div>

      {/* ========================================================================= */}
      {/* BOTTOM SECTION: Studio Credentials                                        */}
      {/* ========================================================================= */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 w-full mt-10 md:mt-14">
        {/* Studio Accreditations Banner */}
        <div className="pt-6 border-t border-white/15 grid grid-cols-3 gap-4 sm:gap-8 text-center text-[#E5DFD7]">
          {[
            { value: '15+', label: 'Years Experience' },
            { value: '250+', label: 'Homes Completed' },
            { value: '100%', label: 'On-Time Handover' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="font-serif text-2xl sm:text-3xl font-medium text-[#FAF8F5]">
                {stat.value}
              </span>
              <span className="text-[10px] sm:text-xs tracking-[0.14em] uppercase text-[#D4B68D] mt-0.5 font-light">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
