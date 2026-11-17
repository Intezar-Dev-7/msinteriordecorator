import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { STUDIO_CONFIG } from '../data/studioData';

interface EntranceAnimationProps {
  onComplete?: () => void;
}

export const EntranceAnimation: React.FC<EntranceAnimationProps> = ({ onComplete }) => {
  const [step, setStep] = useState<number>(0);
  const [stage, setStage] = useState<'playing' | 'exiting' | 'hidden'>('playing');
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;
  const hasTriggeredCompleteRef = useRef(false);

  useEffect(() => {
    // Step 0 -> Step 1 (0.9s)
    const t1 = setTimeout(() => setStep(1), 900);
    // Step 1 -> Step 2 (1.8s)
    const t2 = setTimeout(() => setStep(2), 1800);
    // Step 2 -> Step 3 (Brand Reveal) (2.7s)
    const t3 = setTimeout(() => setStep(3), 2700);
    // Exit animation trigger (3.6s)
    const t4 = setTimeout(() => setStage('exiting'), 3600);
    // Unmount & finish (4.3s)
    const t5 = setTimeout(() => {
      setStage('hidden');
      if (!hasTriggeredCompleteRef.current) {
        hasTriggeredCompleteRef.current = true;
        onCompleteRef.current?.();
      }
    }, 4300);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, []);

  const handleSkip = () => {
    setStage('hidden');
    if (!hasTriggeredCompleteRef.current) {
      hasTriggeredCompleteRef.current = true;
      onCompleteRef.current?.();
    }
  };

  if (stage === 'hidden') return null;

  return (
    <AnimatePresence>
      {stage !== 'hidden' && (
        <motion.div
          key="clean-entrance-curtain"
          initial={{ y: 0, opacity: 1 }}
          animate={{
            y: stage === 'exiting' ? '-100%' : 0,
            opacity: stage === 'exiting' ? 0.95 : 1,
          }}
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-[#141210] text-[#FAF8F5] flex flex-col justify-between p-6 sm:p-10 select-none cursor-pointer overflow-hidden"
          onClick={handleSkip}
          id="site-entrance-curtain"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,182,141,0.08)_0%,_transparent_65%)] pointer-events-none" />

          {/* Minimal Top Header */}
          <div className="relative z-10 flex items-center justify-between w-full max-w-4xl mx-auto">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4B68D]" />
              <span className="text-[11px] sm:text-xs font-sans tracking-[0.25em] uppercase text-[#A89F95] font-light">
                {STUDIO_CONFIG.name}
              </span>
            </div>

            <button
              onClick={handleSkip}
              className="text-[11px] font-sans tracking-[0.2em] uppercase text-[#8C8276] hover:text-[#FAF8F5] transition-colors px-3 py-1 rounded-full border border-white/10 hover:border-white/25 cursor-pointer backdrop-blur-xs"
              id="skip-entrance-btn"
            >
              Skip
            </button>
          </div>

          {/* Center Stage: Minimal, Aesthetic & Simple Clear Graphic Animation */}
          <div className="relative z-10 flex-1 flex flex-col items-center justify-center max-w-lg mx-auto w-full text-center my-auto">
            <AnimatePresence mode="wait">
              {/* Step 0: Minimal Blueprint Planning */}
              {step === 0 && (
                <motion.div
                  key="minimal-step-0"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center"
                >
                  {/* Clean SVG: Room Plan Drawing */}
                  <div className="w-28 h-28 sm:w-32 sm:h-32 mb-6 flex items-center justify-center relative">
                    <svg className="w-full h-full text-[#D4B68D]" viewBox="0 0 100 100" fill="none">
                      {/* Perimeter walls drawing */}
                      <motion.rect
                        x="15"
                        y="15"
                        width="70"
                        height="70"
                        rx="4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.7, ease: 'easeInOut' }}
                      />
                      {/* Interior room divider */}
                      <motion.path
                        d="M 15 50 L 55 50 M 65 50 L 85 50"
                        stroke="#FAF8F5"
                        strokeWidth="1.2"
                        strokeDasharray="2 2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      />
                      {/* Architectural dimension tick */}
                      <motion.line
                        x1="15"
                        y1="10"
                        x2="85"
                        y2="10"
                        stroke="#8C8276"
                        strokeWidth="1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.8 }}
                        transition={{ delay: 0.4 }}
                      />
                      <circle cx="50" cy="50" r="3" fill="#D4B68D" />
                    </svg>
                  </div>

                  <span className="text-[10px] sm:text-xs font-mono tracking-[0.3em] uppercase text-[#D4B68D] mb-2">
                    01 // SPATIAL CONCEPT
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#FAF8F5] tracking-wide">
                    3D Spatial Planning
                  </h2>
                </motion.div>
              )}

              {/* Step 1: Minimal Craft & Joinery */}
              {step === 1 && (
                <motion.div
                  key="minimal-step-1"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center"
                >
                  {/* Clean SVG: Furniture & Woodworking Silhouette */}
                  <div className="w-28 h-28 sm:w-32 sm:h-32 mb-6 flex items-center justify-center relative">
                    <svg className="w-full h-full text-[#D4B68D]" viewBox="0 0 100 100" fill="none">
                      {/* Designer lounge chair outline */}
                      <motion.path
                        d="M 28 65 C 28 48, 38 42, 50 42 C 62 42, 72 48, 72 65"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.7, ease: 'easeInOut' }}
                      />
                      {/* Cushion line */}
                      <motion.path
                        d="M 24 65 L 76 65"
                        stroke="#FAF8F5"
                        strokeWidth="2"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      />
                      {/* Splayed tapered legs */}
                      <motion.line
                        x1="32"
                        y1="65"
                        x2="24"
                        y2="82"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                      />
                      <motion.line
                        x1="68"
                        y1="65"
                        x2="76"
                        y2="82"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                      />
                    </svg>
                  </div>

                  <span className="text-[10px] sm:text-xs font-mono tracking-[0.3em] uppercase text-[#D4B68D] mb-2">
                    02 // BESPOKE CRAFT
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#FAF8F5] tracking-wide">
                    Artisanal Carpentry
                  </h2>
                </motion.div>
              )}

              {/* Step 2: Minimal Living Space */}
              {step === 2 && (
                <motion.div
                  key="minimal-step-2"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center"
                >
                  {/* Clean SVG: Illuminated Living Space */}
                  <div className="w-28 h-28 sm:w-32 sm:h-32 mb-6 flex items-center justify-center relative">
                    <svg className="w-full h-full text-[#D4B68D]" viewBox="0 0 100 100" fill="none">
                      {/* Pendant light wire & shade */}
                      <motion.line
                        x1="50"
                        y1="10"
                        x2="50"
                        y2="36"
                        stroke="#FAF8F5"
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.4 }}
                      />
                      <motion.path
                        d="M 40 44 L 60 44 L 54 36 L 46 36 Z"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        fill="rgba(212, 182, 141, 0.15)"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      />
                      {/* Gentle light glow radiating from lamp */}
                      <motion.circle
                        cx="50"
                        cy="48"
                        r="8"
                        fill="#D4B68D"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: [0, 1.4, 1], opacity: [0, 0.6, 0.4] }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                      />
                      {/* Horizon baseline */}
                      <motion.line
                        x1="20"
                        y1="78"
                        x2="80"
                        y2="78"
                        stroke="#FAF8F5"
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      />
                    </svg>
                  </div>

                  <span className="text-[10px] sm:text-xs font-mono tracking-[0.3em] uppercase text-[#D4B68D] mb-2">
                    03 // TURNKEY LIVING
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#FAF8F5] tracking-wide">
                    Sanctuary Handover
                  </h2>
                </motion.div>
              )}

              {/* Step 3: Grand Brand Identity Reveal */}
              {step === 3 && (
                <motion.div
                  key="minimal-step-3"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center"
                >
                  <div className="w-12 h-12 rounded-full border border-[#D4B68D]/40 flex items-center justify-center mb-5 bg-[#D4B68D]/10">
                    <span className="font-serif text-lg text-[#D4B68D]">MS</span>
                  </div>

                  <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#FAF8F5] tracking-[0.16em] uppercase">
                    {STUDIO_CONFIG.name}
                  </h1>

                  <div className="w-16 h-[1px] bg-[#D4B68D] my-4 opacity-70" />

                  <p className="text-xs sm:text-sm tracking-[0.24em] uppercase text-[#C2B5A8] font-light">
                    Designing Spaces That Feel Like Home
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Minimal Bottom Timeline Indicator */}
          <div className="relative z-10 flex flex-col items-center gap-3 w-full max-w-xs mx-auto">
            {/* 3 Aesthetic Step Dots */}
            <div className="flex items-center gap-3">
              {[0, 1, 2].map((index) => {
                const isActive = step === index;
                const isPassed = step > index;
                return (
                  <div
                    key={index}
                    className={`transition-all duration-300 rounded-full ${
                      isActive
                        ? 'w-6 h-1.5 bg-[#D4B68D]'
                        : isPassed
                        ? 'w-1.5 h-1.5 bg-white/60'
                        : 'w-1.5 h-1.5 bg-white/20'
                    }`}
                  />
                );
              })}
            </div>

            <span className="text-[10px] tracking-[0.2em] uppercase text-[#6E655C]">
              Tap anywhere to enter
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
