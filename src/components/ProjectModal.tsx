import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, Calendar, Maximize2, Check, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { PortfolioItem } from '../types';

interface ProjectModalProps {
  project: PortfolioItem | null;
  onClose: () => void;
  onInquire: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onInquire,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) return null;

  const images = project.gallery && project.gallery.length > 0 ? project.gallery : [project.image];

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-[#1C1917]/80 backdrop-blur-md"
        onClick={onClose}
        id="project-modal-backdrop"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl bg-[#FAF8F5] rounded-3xl overflow-hidden shadow-2xl border border-[#E8E1D8] my-auto max-h-[90vh] flex flex-col"
          id="project-modal-content"
        >
          {/* Top Bar with Close Button */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#EAE3DA] bg-[#FAF8F5]">
            <div className="flex items-center gap-2">
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#9A7B52] px-2.5 py-1 rounded-full bg-[#F4EFEA]">
                {project.category}
              </span>
              <span className="text-xs text-[#8C827A] flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {project.location}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#4A443E] hover:text-[#1C1917] hover:bg-[#F0EAE1] transition-colors cursor-pointer"
              aria-label="Close project modal"
              id="close-project-modal-btn"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body: Scrollable Content */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1">
            {/* Main Interactive Gallery Viewer */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[16/9] bg-stone-900 shadow-inner group">
              <img
                src={images[activeImageIndex]}
                alt={`${project.title} gallery frame`}
                className="w-full h-full object-cover transition-all duration-500"
                referrerPolicy="no-referrer"
              />

              {/* Gallery Navigation Arrows if multiple photos */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#1C1917]/60 hover:bg-[#1C1917]/90 text-white backdrop-blur-sm transition-colors cursor-pointer"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#1C1917]/60 hover:bg-[#1C1917]/90 text-white backdrop-blur-sm transition-colors cursor-pointer"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C1917]/70 backdrop-blur-md">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          activeImageIndex === idx
                            ? 'w-6 bg-[#FAF8F5]'
                            : 'bg-[#FAF8F5]/40 hover:bg-[#FAF8F5]/80'
                        }`}
                        aria-label={`View photo ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnail Row */}
            {images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {images.map((imgUrl, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIndex(i)}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      activeImageIndex === i ? 'border-[#9A7B52]' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={imgUrl}
                      alt="thumbnail"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Project Narrative & Details Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-4">
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1C1917] font-normal leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-[#59524B] leading-relaxed font-light">
                  {project.description}
                </p>

                {/* Materiality Palette */}
                <div className="pt-4 border-t border-[#EAE3DA]">
                  <h4 className="text-xs uppercase tracking-[0.16em] font-semibold text-[#8C827A] mb-3">
                    Key Material Selections
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.materials.map((mat, index) => (
                      <span
                        key={index}
                        className="text-xs px-3 py-1.5 rounded-full bg-[#F4EFEA] border border-[#E5DFD5] text-[#3D362F] font-medium"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar Info Card */}
              <div className="lg:col-span-4 bg-[#F4EFEA] rounded-2xl p-5 sm:p-6 border border-[#E5DFD5] space-y-4">
                <div className="space-y-3 pb-4 border-b border-[#E2D8CC] text-xs">
                  <div className="flex justify-between">
                    <span className="text-[#8C827A]">Scope</span>
                    <span className="font-medium text-[#1C1917]">{project.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8C827A]">Location</span>
                    <span className="font-medium text-[#1C1917]">{project.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8C827A]">Completed</span>
                    <span className="font-medium text-[#1C1917]">{project.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8C827A]">Area</span>
                    <span className="font-medium text-[#1C1917]">{project.area}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-[11px] text-[#736A62] mb-3">
                    Interested in discussing a bespoke residence with similar proportions?
                  </p>
                  <button
                    onClick={() => {
                      onClose();
                      onInquire(project.title);
                    }}
                    className="w-full py-3 px-4 rounded-full text-xs font-semibold tracking-[0.14em] uppercase bg-[#1C1917] text-[#FAF8F5] hover:bg-[#9A7B52] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    id="modal-inquire-btn"
                  >
                    <span>Inquire About Space</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
