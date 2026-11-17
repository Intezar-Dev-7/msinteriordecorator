import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Compass,
  Gem,
  MessageSquare,
  Maximize2,
  ShieldCheck,
} from 'lucide-react';
import { WHY_CHOOSE_US_DATA } from '../data/studioData';

interface WhyChooseUsProps {
  onContactClick?: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = () => {
  const getIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-[#9A7B52]' };
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'Compass':
        return <Compass {...props} />;
      case 'Gem':
        return <Gem {...props} />;
      case 'MessageSquareCheck':
      case 'MessageSquare':
        return <MessageSquare {...props} />;
      case 'Maximize2':
        return <Maximize2 {...props} />;
      case 'ShieldCheck':
      default:
        return <ShieldCheck {...props} />;
    }
  };

  return (
    <section id="why-choose-us" className="py-24 md:py-36 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.24em] font-semibold text-[#9A7B52] mb-3 block">
              05 / Why Choose Us
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1917] font-normal leading-tight">
              Why Families Trust M.S Interior Decorator
            </h2>
            <p className="text-sm sm:text-base text-[#5E554C] mt-4 font-light leading-relaxed">
              We make home interior design simple, honest, and reliable — with transparent pricing, branded materials, and on-time completion.
            </p>
          </div>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-[#F4EFEA] rounded-3xl p-8 border border-[#E8E0D5] hover:border-[#D4B68D] transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_10px_30px_rgba(28,25,23,0.04)]"
              id={`why-card-${item.id}`}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD5] flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
                  {getIcon(item.iconName)}
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-[#1C1917] font-medium mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-[#59524B] leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#EAE3DA]/80 flex items-center justify-between text-[11px] uppercase tracking-wider text-[#8C8075]">
                <span>Pillar 0{index + 1}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#9A7B52]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
