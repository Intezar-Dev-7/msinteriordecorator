import React from 'react';
import { motion } from 'motion/react';
import {
  Home,
  Building2,
  Sofa,
  BedDouble,
  Utensils,
  Briefcase,
  Layers,
  Hammer,
  Sparkles,
} from 'lucide-react';
import { SERVICES_DATA } from '../data/studioData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5 text-[#9A7B52]' };
    switch (iconName) {
      case 'Home':
        return <Home {...props} />;
      case 'Building2':
        return <Building2 {...props} />;
      case 'Sofa':
        return <Sofa {...props} />;
      case 'BedDouble':
        return <BedDouble {...props} />;
      case 'Utensils':
        return <Utensils {...props} />;
      case 'Briefcase':
        return <Briefcase {...props} />;
      case 'Layers':
        return <Layers {...props} />;
      case 'Hammer':
        return <Hammer {...props} />;
      case 'Sparkles':
      default:
        return <Sparkles {...props} />;
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-[#F4EFEA] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.24em] font-semibold text-[#9A7B52] mb-3 block">
              02 / What We Do
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1917] font-normal leading-tight">
              Interior Design Services
            </h2>
            <p className="text-sm sm:text-base text-[#61584F] mt-3 font-light leading-relaxed">
              Complete design solutions for your home or workplace — from initial layout planning to custom furniture, lighting, and painting.
            </p>
          </div>

          <div className="hidden md:block">
            <span className="text-xs uppercase tracking-[0.16em] text-[#8C8075] font-medium">
              Turnkey • Custom • On-Time
            </span>
          </div>
        </div>

        {/* 9 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              onClick={() => onSelectService(service.title)}
              className="group relative bg-[#FAF8F5] rounded-2xl overflow-hidden border border-[#E5DFD5] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_12px_32px_rgba(28,25,23,0.06)] hover:border-[#D4C3AF] cursor-pointer"
              id={`service-card-${service.id}`}
            >
              {/* Subtle top image preview reveal on hover */}
              <div className="w-full h-36 rounded-xl overflow-hidden mb-6 relative bg-stone-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/50 to-transparent" />
                <div className="absolute top-3 right-3 p-2 rounded-full bg-[#FAF8F5]/90 backdrop-blur-sm border border-[#FAF8F5]/80 shadow-sm">
                  {getIcon(service.iconName)}
                </div>
              </div>

              {/* Service Details */}
              <div className="flex-1 flex flex-col">
                <h3 className="font-serif text-xl sm:text-2xl text-[#1C1917] font-medium group-hover:text-[#9A7B52] transition-colors leading-snug">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5E554C] mt-2.5 leading-relaxed font-light flex-1">
                  {service.shortDesc}
                </p>

                {/* Micro Features tags */}
                <div className="mt-4 pt-4 border-t border-[#EAE3DA] flex flex-wrap gap-1.5">
                  {service.features.map((feat, fIndex) => (
                    <span
                      key={fIndex}
                      className="text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-full bg-[#F0EAE1] text-[#73685C] font-medium"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
