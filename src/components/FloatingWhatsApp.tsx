import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const defaultGreeting = encodeURIComponent(
    'Hello M.S Interior Decorator, I would like to discuss interior design for my home.'
  );

  return (
    <div
      className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40 flex items-center gap-3"
      id="floating-whatsapp-container"
    >
      {/* Subtle Hover Tooltip / Prompt */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5] shadow-xl text-xs text-[#2C2724] animate-fade-in pointer-events-none">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span className="font-medium">Chat with us on WhatsApp</span>
        </div>
      )}

      {/* Floating Pulse Button */}
      <a
        href={`https://wa.me/${STUDIO_CONFIG.whatsappNumber}?text=${defaultGreeting}`}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative group p-3.5 sm:p-4 rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_rgba(37,211,102,0.3)] hover:shadow-[0_12px_30px_rgba(37,211,102,0.45)] hover:scale-105 active:scale-95 transition-all duration-300 whatsapp-pulse flex items-center justify-center cursor-pointer"
        aria-label="Chat with M.S Interior Decorator on WhatsApp"
        id="floating-whatsapp-action-btn"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white/10" />

        {/* Small Active Green Indicator */}
        <span className="absolute top-0 right-0 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#1ebe5d] border-2 border-white" />
        </span>
      </a>
    </div>
  );
};
