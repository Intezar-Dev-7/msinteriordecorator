import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, MapPin, Eye, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/studioData';
import { PortfolioItem } from '../types';
import { ProjectModal } from './ProjectModal';

interface PortfolioProps {
  onInquireProject: (projectName: string) => void;
}

type FilterCategory = 'All' | 'Residential' | 'Commercial' | 'Kitchen & Living' | 'Renovation';

export const Portfolio: React.FC<PortfolioProps> = ({ onInquireProject }) => {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const categories: FilterCategory[] = [
    'All',
    'Residential',
    'Commercial',
    'Kitchen & Living',
    'Renovation',
  ];

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return PORTFOLIO_DATA;
    return PORTFOLIO_DATA.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="portfolio" className="py-24 md:py-36 bg-[#FAF8F5] relative">
      {/* Anchor for direct links targeting #gallery */}
      <div id="gallery" className="absolute -top-24" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <span className="text-xs uppercase tracking-[0.24em] font-semibold text-[#9A7B52] block mb-2">
              03 / Gallery & Our Work
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1917] font-normal leading-tight">
              Explore Full Case Studies
            </h2>
            <p className="text-sm sm:text-base text-[#5E554C] mt-2 font-light">
              Click any project to view room sizes, materials, and complete gallery photos.
            </p>
          </div>
          <div className="text-xs uppercase tracking-[0.16em] text-[#8C827A] hidden sm:block">
            Residential & Commercial Commissions
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 sm:gap-3 mb-10 sm:mb-12 overflow-x-auto no-scrollbar pb-2 sm:pb-0 sm:flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-medium tracking-wider uppercase transition-all duration-300 cursor-pointer whitespace-nowrap shrink-0 ${
                  activeCategory === cat
                    ? 'bg-[#1C1917] text-[#FAF8F5] shadow-md'
                    : 'bg-[#F4EFEA] text-[#59524B] hover:bg-[#EAE3DA] hover:text-[#1C1917]'
                }`}
                id={`portfolio-filter-${cat.toLowerCase().replace(/[\s&]+/g, '-')}`}
              >
                {cat}
              </button>
            ))}
          </div>

        {/* Portfolio Grid Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => setSelectedProject(project)}
                className="group relative flex flex-col cursor-pointer"
                id={`portfolio-card-${project.id}`}
              >
                {/* Image Container with Zoom & Overlay */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-stone-200 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-[#EAE3DA]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />

                  {/* Elegant Gradient Darkening Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/90 via-[#1C1917]/30 to-transparent opacity-60 sm:opacity-40 group-hover:opacity-85 transition-opacity duration-300" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full text-[10px] tracking-[0.18em] uppercase font-semibold bg-[#FAF8F5]/90 backdrop-blur-md text-[#2C2724] shadow-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Center "Inspect Space" icon badge that appears on hover */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF8F5]/90 text-[#1C1917] text-xs font-semibold uppercase tracking-wider shadow-xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Gallery & Brief</span>
                    </div>
                  </div>

                  {/* Bottom Text Reveal on Image for Mobile/Quick Glance */}
                  <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white z-10 transition-transform duration-300 group-hover:-translate-y-1">
                    <div className="flex items-center gap-1.5 text-xs text-[#E8D9C5] mb-1 font-light">
                      <MapPin className="w-3 h-3 text-[#D4B68D]" />
                      <span>{project.location}</span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#FAF8F5] leading-snug">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Sub-label for Clear Editorial Polish */}
                <div className="mt-3.5 flex items-center justify-end px-1">
                  <div className="flex items-center gap-1 text-xs font-medium text-[#9A7B52] group-hover:text-[#1C1917] transition-colors">
                    <span className="text-[11px] uppercase tracking-wider">Explore Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Banner Call to Action */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-[#F4EFEA] border border-[#E8E0D5] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h4 className="font-serif text-2xl sm:text-3xl text-[#1C1917] font-normal">
              Have a distinct residence or space in mind?
            </h4>
            <p className="text-sm text-[#59524B] mt-2 font-light max-w-xl">
              From historic European renovations to ground-up architectural commissions, our atelier welcomes conversations at any stage of planning.
            </p>
          </div>
          <button
            onClick={() => onInquireProject('General Portfolio Inquiry')}
            className="px-8 py-4 rounded-full text-xs font-semibold tracking-[0.16em] uppercase bg-[#1C1917] text-[#FAF8F5] hover:bg-[#9A7B52] transition-colors shrink-0 cursor-pointer shadow-sm"
            id="portfolio-inquire-cta"
          >
            Inquire About Your Project
          </button>
        </div>
      </div>

      {/* Project Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={onInquireProject}
      />
    </section>
  );
};
