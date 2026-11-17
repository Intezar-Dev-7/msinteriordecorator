import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Compass,
  Box,
  Hammer,
  Key,
} from 'lucide-react';
import {
  BlueprintGraphic,
  Render3DGraphic,
  CraftsmanshipGraphic,
  HandoverGraphic,
} from './ProcessGraphics';

interface ProcessStepData {
  number: string;
  shortTitle: string;
  title: string;
  summary: string;
  deliverables: string[];
  duration: string;
  icon: React.ComponentType<{ className?: string }>;
}

const STEPS: ProcessStepData[] = [
  {
    number: '01',
    shortTitle: 'Consultation',
    title: 'Discovery & Vision',
    summary: 'We understand your lifestyle, measure your space, and finalize budget clarity with zero guesswork.',
    deliverables: ['Space Measurement', 'Concept Moodboard', 'Clear Estimate'],
    duration: 'Stage 01',
    icon: Compass,
  },
  {
    number: '02',
    shortTitle: '3D Modeling',
    title: '3D Designs & Material Selection',
    summary: 'Experience photo-realistic 3D room renders and inspect physical wood, laminate, and stone swatches.',
    deliverables: ['3D Room Visuals', 'Floor Layouts', 'Material Swatches'],
    duration: 'Stage 02',
    icon: Box,
  },
  {
    number: '03',
    shortTitle: 'Execution',
    title: 'On-Site Craftsmanship',
    summary: 'Master carpenters and supervisors execute precision joinery with continuous photo progress updates.',
    deliverables: ['Site Supervision', 'Branded Materials', 'WhatsApp Updates'],
    duration: 'Stage 03',
    icon: Hammer,
  },
  {
    number: '04',
    shortTitle: 'Handover',
    title: 'Deep Cleaning & Key Handover',
    summary: 'Every corner spotless, 50-point quality check completed, and keys handed over on schedule.',
    deliverables: ['Deep Cleaning', 'Quality Inspection', 'Warranty & Handover'],
    duration: 'Stage 04',
    icon: Key,
  },
];

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance animation every 5 seconds unless hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const currentStep = STEPS[activeStep];

  const handlePrev = () => {
    setActiveStep((prev) => (prev - 1 + STEPS.length) % STEPS.length);
  };

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % STEPS.length);
  };

  const renderGraphic = (number: string) => {
    switch (number) {
      case '01':
        return <BlueprintGraphic />;
      case '02':
        return <Render3DGraphic />;
      case '03':
        return <CraftsmanshipGraphic />;
      case '04':
      default:
        return <HandoverGraphic />;
    }
  };

  return (
    <section id="process" className="py-24 md:py-32 bg-[#F4EFEA] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-xs uppercase tracking-[0.24em] font-semibold text-[#9A7B52] mb-3 block">
            04 / How We Work
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1917] font-normal leading-tight">
            Our 4-Step Working Process
          </h2>
          <p className="text-sm sm:text-base text-[#61584F] mt-3 font-light leading-relaxed">
            A seamless journey from concept sketching to ready-to-live handover.
          </p>
        </div>

        {/* Step Progress Bar & Selector */}
        <div className="relative mb-8 max-w-4xl mx-auto">
          {/* Background Track Line */}
          <div className="absolute top-6 left-8 right-8 h-0.5 bg-[#E2D8CC] -z-0 hidden sm:block" />

          {/* Animated Filled Progress Line */}
          <motion.div
            className="absolute top-6 left-8 h-0.5 bg-[#9A7B52] -z-0 hidden sm:block"
            initial={false}
            animate={{
              width: `${(activeStep / (STEPS.length - 1)) * 100}%`,
              maxWidth: 'calc(100% - 4rem)',
            }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          />

          {/* 4 Step Clickable Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 relative z-10">
            {STEPS.map((step, index) => {
              const isActive = index === activeStep;
              const isPassed = index < activeStep;
              const StepIcon = step.icon;

              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(index)}
                  className={`flex flex-col items-center p-3 sm:p-4 rounded-2xl transition-all duration-300 text-center cursor-pointer group ${
                    isActive
                      ? 'bg-[#FAF8F5] shadow-md border border-[#D4B68D]'
                      : 'bg-[#FAF8F5]/60 hover:bg-[#FAF8F5] border border-transparent'
                  }`}
                  id={`process-tab-${step.number}`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-transform duration-300 ${
                      isActive
                        ? 'bg-[#1C1917] text-[#D4B68D] scale-110 shadow-sm'
                        : isPassed
                        ? 'bg-[#9A7B52] text-white'
                        : 'bg-[#EAE3DA] text-[#736A62] group-hover:bg-[#E2D8CC]'
                    }`}
                  >
                    <StepIcon className="w-4 h-4" />
                  </div>

                  <span className="text-[10px] uppercase tracking-[0.16em] font-semibold text-[#9A7B52] block mb-0.5">
                    Step {step.number}
                  </span>
                  <span
                    className={`text-xs font-medium truncate max-w-full ${
                      isActive ? 'text-[#1C1917]' : 'text-[#736A62]'
                    }`}
                  >
                    {step.shortTitle}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Animated Showcase Stage */}
        <div
          className="bg-[#FAF8F5] rounded-3xl border border-[#E5DFD5] shadow-sm overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Column: Animated Motion Graphic */}
            <div className="lg:col-span-6 bg-[#1C1917] flex items-center justify-center p-4 sm:p-8 relative min-h-[300px] sm:min-h-[360px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep.number}
                  initial={{ opacity: 0, scale: 0.94, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.04, y: -10 }}
                  transition={{ duration: 0.45, ease: 'easeInOut' }}
                  className="w-full h-full flex items-center justify-center"
                >
                  {renderGraphic(currentStep.number)}
                </motion.div>
              </AnimatePresence>

              {/* Ambient Glow in Background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#9A7B52]/10 rounded-full blur-3xl pointer-events-none" />
            </div>

            {/* Right Column: Minimal & Punchy Text Details */}
            <div className="lg:col-span-6 p-7 sm:p-10 md:p-12 flex flex-col justify-between h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep.number}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="space-y-5"
                >
                  {/* Step Eyebrow Tag */}
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-3xl sm:text-4xl text-[#9A7B52] font-light">
                      {currentStep.number}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[10px] tracking-[0.2em] uppercase font-semibold bg-[#F4EFEA] text-[#8C8075]">
                      {currentStep.duration}
                    </span>
                  </div>

                  {/* Concise Title */}
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1917] font-medium leading-snug">
                    {currentStep.title}
                  </h3>

                  {/* One Clear Sentence */}
                  <p className="text-sm sm:text-base text-[#5E554C] font-light leading-relaxed max-w-lg">
                    {currentStep.summary}
                  </p>

                  {/* Deliverables Chip Tags */}
                  <div className="pt-2">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-[#8C8075] block mb-2.5">
                      Included in this step:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {currentStep.deliverables.map((item, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[#F4EFEA] text-[#2C2724] border border-[#EAE3DA]"
                        >
                          <Check className="w-3.5 h-3.5 text-[#9A7B52]" />
                          <span>{item}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows & Indicator */}
              <div className="pt-8 mt-6 border-t border-[#EAE3DA] flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  {STEPS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveStep(i)}
                      aria-label={`Go to step ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        i === activeStep ? 'w-6 bg-[#9A7B52]' : 'w-2 bg-[#E0D6C8] hover:bg-[#C5B7A5]'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous Step"
                    className="w-9 h-9 rounded-full bg-[#F4EFEA] hover:bg-[#EAE3DA] text-[#1C1917] flex items-center justify-center transition-colors cursor-pointer border border-[#E5DFD5]"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next Step"
                    className="w-9 h-9 rounded-full bg-[#1C1917] hover:bg-[#9A7B52] text-[#FAF8F5] flex items-center justify-center transition-colors cursor-pointer shadow-sm"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
