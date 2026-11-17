import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle, ArrowUpRight } from 'lucide-react';
import { FAQ_DATA, STUDIO_CONFIG } from '../data/studioData';

interface FaqProps {
  onContactClick: () => void;
}

export const Faq: React.FC<FaqProps> = ({ onContactClick }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleQuestion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 md:py-36 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-[0.24em] font-semibold text-[#9A7B52] mb-3 block">
            07 / Common Questions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1917] font-normal leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#5E554C] mt-4 font-light leading-relaxed">
            Have questions about our costs, work timeline, or process? Here are clear and honest answers to help you plan your home interior.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'bg-[#F4EFEA] border-[#D4B68D] shadow-sm'
                    : 'bg-[#FAF8F5] border-[#E8E0D5] hover:border-[#D4C3AF]'
                }`}
                id={`faq-item-${item.id}`}
              >
                <button
                  onClick={() => toggleQuestion(item.id)}
                  className="w-full flex items-center justify-between p-6 sm:p-7 text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                  id={`faq-btn-${item.id}`}
                >
                  <span className="font-serif text-lg sm:text-xl text-[#1C1917] font-medium pr-4 leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-full border shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-[#1C1917] border-[#1C1917] text-[#FAF8F5]'
                        : 'border-[#D9CFBF] text-[#736A62]'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-1 text-sm sm:text-base text-[#59524B] font-light leading-relaxed border-t border-[#E5DDD0]/60">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-16 text-center p-8 rounded-3xl bg-[#F4EFEA] border border-[#E8E0D5] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-serif text-xl text-[#1C1917] font-medium">
              Have a question not listed here?
            </h4>
            <p className="text-xs sm:text-sm text-[#736A62] mt-1 font-light">
              Our studio concierge is always delighted to assist with your specific architectural requirements.
            </p>
          </div>

          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.14em] bg-[#1C1917] text-[#FAF8F5] hover:bg-[#9A7B52] transition-colors cursor-pointer shrink-0"
            id="faq-ask-question-btn"
          >
            <span>Ask Our Team</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
