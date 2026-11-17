import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import {
  Phone,
  Home,
  Compass,
  LayoutGrid,
  ShieldCheck,
  MessageSquare,
} from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioData';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileHeaderVisible, setIsMobileHeaderVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const prevScrollY = useRef(0);

  // Core navigation items
  const navLinks: NavItem[] = [
    { label: 'About', href: 'about', icon: Compass },
    { label: 'Why Choose Us', href: 'why-choose-us', icon: ShieldCheck },
    { label: 'Portfolio', href: 'portfolio', icon: LayoutGrid },
    { label: 'Contact Us', href: 'contact', icon: MessageSquare },
  ];

  // Mobile navigation items (including Home)
  const mobileNavItems: NavItem[] = [
    { label: 'Home', href: 'hero', icon: Home },
    { label: 'About', href: 'about', icon: Compass },
    { label: 'Portfolio', href: 'portfolio', icon: LayoutGrid },
    { label: 'Why Us', href: 'why-choose-us', icon: ShieldCheck },
    { label: 'Contact', href: 'contact', icon: MessageSquare },
  ];

  // Scroll detection for header show/hide (desktop) and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - prevScrollY.current;

      // Header visibility on desktop
      if (currentScrollY <= 40) {
        setIsVisible(true);
      } else if (Math.abs(diff) >= 8) {
        if (diff > 0) {
          setIsVisible(false); // Scrolling down
        } else {
          setIsVisible(true); // Scrolling up
        }
      }

      // Mobile header visibility: disappears when scrolling up, comes back when scrolling down
      if (currentScrollY <= 15) {
        setIsMobileHeaderVisible(true);
      } else if (Math.abs(diff) >= 6) {
        if (diff < 0) {
          // Scrolling up -> disappear
          setIsMobileHeaderVisible(false);
        } else if (diff > 0) {
          // Scrolling down -> come back again
          setIsMobileHeaderVisible(true);
        }
      }

      prevScrollY.current = currentScrollY;

      // Active section detection
      const sections = ['contact', 'why-choose-us', 'portfolio', 'services', 'about', 'hero'];
      const scrollPosition = window.scrollY + 260;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            // Map 'services' to 'about' for active highlights
            const mappedSection = section === 'services' ? 'about' : section;
            setActiveSection(mappedSection);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setActiveSection(href);
    onNavigate(href);
  };

  const handleCallNow = () => {
    window.open(
      `https://wa.me/${STUDIO_CONFIG.whatsappNumber}?text=${encodeURIComponent(
        'Hello Manak Chand Suthar, I would like to discuss an interior design project.'
      )}`,
      '_blank'
    );
  };

  return (
    <>
      {/* ========================================================================= */}
      {/* 0. MOBILE TOP BRAND HEADER (Visible strictly on < 768px)                  */}
      {/* Disappears on scroll up, comes back on scroll down                        */}
      {/* ========================================================================= */}
      <motion.header
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: isMobileHeaderVisible ? 0 : -64,
          opacity: isMobileHeaderVisible ? 1 : 0,
        }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        className={`md:hidden fixed top-0 inset-x-0 z-40 px-3 sm:px-4 py-2.5 transition-all duration-300 ${
          isMobileHeaderVisible ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        id="mobile-top-header"
      >
        <div
          className="flex items-center justify-center px-4 py-2 rounded-full border border-white/60 shadow-[0_4px_20px_rgba(28,25,23,0.08)] max-w-fit mx-auto"
          style={{
            backgroundColor: 'rgba(250, 248, 245, 0.70)',
            backdropFilter: 'blur(16px) saturate(160%)',
            WebkitBackdropFilter: 'blur(16px) saturate(160%)',
          }}
        >
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center text-center cursor-pointer group"
            id="mobile-brand-title-btn"
          >
            <span className="font-serif text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase text-[#1C1917] group-hover:text-[#9A7B52] transition-colors whitespace-nowrap">
              MS Interior Decorator
            </span>
          </button>
        </div>
      </motion.header>

      {/* ========================================================================= */}
      {/* 1. DESKTOP & TABLET HEADER (Hidden on mobile < 768px, visible on md+)     */}
      {/* ========================================================================= */}
      <motion.header
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className={`hidden md:block fixed top-3 md:top-4 lg:top-6 inset-x-3 md:inset-x-5 lg:inset-x-8 max-w-5xl mx-auto z-50 transition-all duration-300 ${
          isVisible ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <nav
          id="main-navigation"
          aria-label="Main Navigation"
          className="relative flex items-center justify-between px-4 md:px-5 lg:px-7 py-2.5 md:py-3 lg:py-3.5 rounded-full border border-white/60 shadow-[0_10px_35px_-8px_rgba(40,32,24,0.12)] transition-all duration-300"
          style={{
            backgroundColor: 'rgba(250, 248, 245, 0.70)',
            backdropFilter: 'blur(18px) saturate(160%)',
            WebkitBackdropFilter: 'blur(18px) saturate(160%)',
          }}
        >
          {/* Logo / Company Name on the Left */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex flex-col items-start text-left group cursor-pointer shrink-0"
            id="brand-logo-btn"
          >
            <span className="font-serif text-xs md:text-sm lg:text-base font-medium tracking-[0.12em] md:tracking-[0.14em] lg:tracking-[0.16em] uppercase text-[#1C1917] group-hover:text-[#9A7B52] transition-colors whitespace-nowrap">
              {STUDIO_CONFIG.name}
            </span>
          </button>

          {/* Desktop & Tablet Navigation Links */}
          <div className="flex items-center space-x-3 md:space-x-4 lg:space-x-8 shrink-0">
            {navLinks.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-[11px] md:text-xs lg:text-[13px] tracking-[0.06em] md:tracking-[0.08em] font-medium transition-colors relative py-1 cursor-pointer group whitespace-nowrap ${
                    isActive ? 'text-[#1C1917]' : 'text-[#59524B] hover:text-[#1C1917]'
                  }`}
                  id={`nav-link-${item.href}`}
                >
                  <span>{item.label}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-[#B8976C] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Desktop Only Right Call CTA (Removed from tablet view and mobile view) */}
          <div className="hidden lg:flex items-center space-x-3 shrink-0">
            <button
              onClick={handleCallNow}
              className="inline-flex items-center gap-1.5 px-3.5 lg:px-4 py-1.5 lg:py-2 rounded-full text-xs font-medium tracking-wider uppercase bg-[#1C1917] text-[#FAF8F5] hover:bg-[#9A7B52] transition-all duration-300 shadow-sm cursor-pointer group whitespace-nowrap"
              id="header-cta-btn"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4B68D] group-hover:scale-110 transition-transform" />
              <span>Call Now</span>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* ========================================================================= */}
      {/* 2. MOBILE FLOATING BOTTOM NAVIGATION BAR (Visible strictly on < 768px)    */}
      {/* Features: Compact, Floating, 70% Transparent Glassmorphism, Rounded Pill   */}
      {/* ========================================================================= */}
      <motion.nav
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        id="mobile-bottom-navigation"
        aria-label="Mobile Bottom Navigation"
        className="md:hidden fixed bottom-3 inset-x-0 mx-auto w-[88%] max-w-[325px] z-50"
      >
        <div
          className="relative flex items-center justify-between p-1 rounded-full border border-white/50 shadow-[0_6px_25px_rgba(28,25,23,0.12)]"
          style={{
            backgroundColor: 'rgba(250, 248, 245, 0.30)',
            backdropFilter: 'blur(20px) saturate(190%)',
            WebkitBackdropFilter: 'blur(20px) saturate(190%)',
          }}
        >
          {mobileNavItems.map((item) => {
            const isActive = activeSection === item.href;
            const ItemIcon = item.icon;

            return (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`flex-1 relative flex flex-col items-center justify-center py-1.5 px-0.5 rounded-full transition-all duration-200 cursor-pointer select-none active:scale-95 ${
                  isActive
                    ? 'bg-[#1C1917]/90 text-[#FAF8F5] shadow-xs backdrop-blur-sm'
                    : 'text-[#2C2724] hover:text-[#1C1917]'
                }`}
                id={`mobile-bottom-nav-${item.href}`}
                aria-label={`Navigate to ${item.label}`}
              >
                <ItemIcon
                  className={`w-3.5 h-3.5 mb-0.5 transition-transform duration-200 ${
                    isActive ? 'scale-105 text-[#E8D4BE]' : 'text-current'
                  }`}
                />
                <span
                  className={`text-[8.5px] uppercase tracking-[0.04em] font-medium leading-tight ${
                    isActive ? 'font-semibold text-[#FAF8F5]' : 'text-current'
                  }`}
                >
                  {item.label}
                </span>

                {/* Micro indicator dot for active item */}
                {isActive && (
                  <span className="absolute -top-0.5 w-1 h-1 rounded-full bg-[#D4B68D]" />
                )}
              </button>
            );
          })}
        </div>
      </motion.nav>
    </>
  );
};
