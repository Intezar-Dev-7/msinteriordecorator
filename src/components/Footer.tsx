import React from 'react';
import { ArrowUp, Instagram, Linkedin, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1917] text-[#FAF8F5] pt-20 pb-28 md:pb-12 relative overflow-hidden border-t border-[#2C2724]">
      {/* Subtle architectural ambient radial gradient */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#9A7B52]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-14 pb-16 border-b border-[#36302B]">
          {/* Brand Info & Manifesto */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col items-start">
              <span className="font-serif text-2xl tracking-[0.16em] uppercase font-medium text-[#FAF8F5]">
                {STUDIO_CONFIG.name}
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#9A7B52] font-semibold">
                Interior Design Studio
              </span>
            </div>

            <p className="text-sm text-[#A89F95] font-light leading-relaxed max-w-sm pt-2">
              Complete home and office interior design solutions across Goa and India. Beautiful designs, genuine materials, and on-time completion.
            </p>

            <div className="pt-2 flex items-center gap-2.5">
              <a
                href={STUDIO_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center text-white bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-[0_2px_8px_rgba(220,39,67,0.35)] hover:scale-110 active:scale-95 transition-all"
                aria-label="Instagram"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={STUDIO_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center text-white bg-[#1877F2] shadow-[0_2px_8px_rgba(24,119,242,0.35)] hover:bg-[#166fe5] hover:scale-110 active:scale-95 transition-all"
                aria-label="Facebook"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={STUDIO_CONFIG.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center text-white bg-[#0A66C2] shadow-[0_2px_8px_rgba(10,102,194,0.35)] hover:bg-[#095196] hover:scale-110 active:scale-95 transition-all"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D4B68D]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider uppercase">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-[#D1C7BB] hover:text-[#FAF8F5] transition-colors cursor-pointer"
                >
                  About Studio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('why-choose-us')}
                  className="text-[#D1C7BB] hover:text-[#FAF8F5] transition-colors cursor-pointer"
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="text-[#D1C7BB] hover:text-[#FAF8F5] transition-colors cursor-pointer"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-[#D1C7BB] hover:text-[#FAF8F5] transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Additional Sections Links (Services, Process, Reviews, FAQ) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D4B68D]">
              Explore Atelier
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider uppercase">
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-[#D1C7BB] hover:text-[#FAF8F5] transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('process')}
                  className="text-[#D1C7BB] hover:text-[#FAF8F5] transition-colors cursor-pointer"
                >
                  Our Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('reviews')}
                  className="text-[#D1C7BB] hover:text-[#FAF8F5] transition-colors cursor-pointer"
                >
                  Client Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="text-[#D1C7BB] hover:text-[#FAF8F5] transition-colors cursor-pointer"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D4B68D]">
              Studio Inquiries
            </h4>
            <div className="space-y-3 text-xs text-[#A89F95] font-light">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#9A7B52] shrink-0 mt-0.5" />
                <span>{STUDIO_CONFIG.address}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#9A7B52] shrink-0" />
                <a
                  href={`https://wa.me/${STUDIO_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                    'Hello Manak Chand Suthar, I would like to discuss an interior design project.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors flex items-center gap-1.5"
                  title="Tap to message on WhatsApp"
                >
                  <span>{STUDIO_CONFIG.displayPhone}</span>
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#9A7B52] shrink-0" />
                <a
                  href={`mailto:${STUDIO_CONFIG.email}`}
                  className="hover:text-[#FAF8F5] transition-colors"
                >
                  {STUDIO_CONFIG.email}
                </a>
              </p>
              <p className="text-[11px] text-[#8C8075] pt-1">
                {STUDIO_CONFIG.hours}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#736A62]">
          <p>
            © {new Date().getFullYear()} {STUDIO_CONFIG.name}. All rights reserved. Architectural and interior design studio.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#A89F95] hover:text-[#FAF8F5] transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
