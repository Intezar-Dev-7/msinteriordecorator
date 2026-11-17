import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/studioData';
import { TestimonialItem } from '../types';

export const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate 4x for seamless infinite marquee loop (-50% translation matches exactly 2 sets)
  const marqueeItems = [
    ...TESTIMONIALS_DATA,
    ...TESTIMONIALS_DATA,
    ...TESTIMONIALS_DATA,
    ...TESTIMONIALS_DATA,
  ];

  const handleManualScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="reviews" className="py-24 md:py-36 bg-[#F4EFEA] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 mb-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1917] font-normal leading-tight">
              What Homeowners Say About Us
            </h2>
            <p className="text-sm sm:text-base text-[#61584F] mt-3 font-light leading-relaxed">
              Read real feedback from clients who trusted us with their home interiors, apartments, and workspaces.
            </p>
          </div>

          {/* Manual Scroll Controls for Desktop & Mobile accessibility */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleManualScroll('left')}
              className="p-3 rounded-full bg-[#FAF8F5] border border-[#E5DFD5] text-[#3D362F] hover:bg-[#1C1917] hover:text-[#FAF8F5] transition-all cursor-pointer shadow-sm"
              aria-label="Scroll testimonials left"
              id="testimonials-scroll-left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleManualScroll('right')}
              className="p-3 rounded-full bg-[#FAF8F5] border border-[#E5DFD5] text-[#3D362F] hover:bg-[#1C1917] hover:text-[#FAF8F5] transition-all cursor-pointer shadow-sm"
              aria-label="Scroll testimonials right"
              id="testimonials-scroll-right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Infinite Horizontal Smooth Marquee Rail */}
      {/* Pauses seamlessly on desktop hover, touch friendly */}
      <div className="w-full relative overflow-hidden">
        {/* Edge Fade Gradients for Luxury Aesthetics */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#F4EFEA] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#F4EFEA] to-transparent z-10 pointer-events-none" />

        <div
          className="w-full overflow-x-auto no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing py-2"
          ref={scrollRef}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className={`flex gap-6 sm:gap-8 px-6 sm:px-8 w-max ${
              isPaused ? '' : 'animate-marquee'
            }`}
            style={{ willChange: 'transform' }}
          >
          {marqueeItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[320px] sm:w-[420px] bg-[#FAF8F5] rounded-3xl p-7 sm:p-8 border border-[#E8E0D5] shadow-[0_8px_25px_rgba(28,25,23,0.04)] flex flex-col justify-between shrink-0 hover:border-[#D4B68D] transition-colors"
              id={`testimonial-card-${index}`}
            >
              <div>
                {/* 5-Star Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-[#C5A880]">
                    {[...Array(item.rating)].map((_, rIdx) => (
                      <Star key={rIdx} className="w-4 h-4 fill-[#C5A880]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#E0D5C7]" />
                </div>

                {/* Testimonial Quote */}
                <p className="font-serif text-base sm:text-lg text-[#2C2724] font-normal leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Client Profile Footer */}
              <div className="pt-4 border-t border-[#EAE3DA] flex items-center gap-3.5">
                <img
                  src={item.avatar}
                  alt={item.clientName}
                  className="w-11 h-11 rounded-full object-cover border border-[#E3D9CC]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-sm font-semibold text-[#1C1917]">
                    {item.clientName}
                  </h4>
                  <p className="text-xs text-[#736A62]">
                    {item.roleOrLocation}
                  </p>
                  <span className="text-[10px] tracking-wider uppercase font-medium text-[#9A7B52] block mt-0.5">
                    {item.projectType}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

      {/* Speed & Touch Tip */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 mt-4 text-center">
        <p className="text-xs text-[#8C8075] font-light">
          Hover to pause scrolling • Swipe or click arrows to explore reviews manually
        </p>
      </div>
    </section>
  );
};
