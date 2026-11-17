import React from 'react';
import { motion } from 'motion/react';
import {
  Compass,
  Sparkles,
  CheckCircle2,
  Quote,
  ArrowUpRight,
  MessageCircle,
  Instagram,
  Facebook,
  Linkedin,
} from 'lucide-react';
import { FOUNDER_INFO, STUDIO_CONFIG } from '../data/studioData';

interface AboutProps {
  onContactClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onContactClick }) => {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#FAF8F5] relative overflow-hidden">
      {/* Background Subtle Ambience */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F4EFEA] rounded-full blur-3xl -z-0 opacity-70 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-[0.24em] font-semibold text-[#9A7B52] mb-3">
            01 / About Our Studio
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1917] font-normal leading-tight">
            We design warm, comfortable homes made for real everyday life.
          </h2>
        </div>

        {/* Studio Philosophy & Dual Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story & Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <h3 className="font-serif text-2xl md:text-3xl text-[#2C2724] font-medium leading-snug">
              A home should be practical, easy to maintain, and a joy to come back to after a long day.
            </h3>

            <p className="text-[#59524B] leading-relaxed text-base sm:text-lg font-light">
              We know that every family lives differently. At M.S Interior Decorator, we don't force complicated trends on you. Instead, we understand your routine, your family size, and your storage requirements to create a home that feels peaceful and functional.
            </p>

            <p className="text-[#59524B] leading-relaxed text-base sm:text-lg font-light">
              We carefully choose quality materials — water-resistant plywood, durable laminates and veneers, natural granite and quartz, and warm lighting that make each room look great and stay easy to clean.
            </p>

            {/* Core Values Checklist */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#EAE3DA]">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#9A7B52] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-[#1C1917]">Smart Space Planning</h4>
                  <p className="text-xs text-[#736A62] mt-0.5">Spacious room layouts with plenty of walking space.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#9A7B52] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-[#1C1917]">Practical Storage</h4>
                  <p className="text-xs text-[#736A62] mt-0.5">Well-designed wardrobes, lofts, and kitchen drawers.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#9A7B52] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-[#1C1917]">Durable Materials</h4>
                  <p className="text-xs text-[#736A62] mt-0.5">Quality wood, anti-scratch finishes, and solid hardware.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#9A7B52] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-[#1C1917]">Friendly Collaboration</h4>
                  <p className="text-xs text-[#736A62] mt-0.5">We work closely with you at every step of the project.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Architecture Imagery */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#EAE3DA] aspect-[4/5] sm:aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
                alt="Architectural interior craftsmanship detail"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#FAF8F5]/90 backdrop-blur-md border border-[#FAF8F5]/60 shadow-lg">
                <p className="font-serif italic text-sm text-[#2C2724]">
                  "A home should be warm, comfortable, and easy to live in every day."
                </p>
                <p className="text-[10px] uppercase tracking-wider text-[#9A7B52] font-semibold mt-1">
                  M.S Interior Decorator Design Philosophy
                </p>
              </div>
            </div>

            {/* Overlapping Floating Detail Photo */}
            <div className="hidden sm:block absolute -bottom-8 -left-8 w-44 h-52 rounded-2xl overflow-hidden border-4 border-[#FAF8F5] shadow-xl z-20">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80"
                alt="Tactile natural stone and wood details"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>

        {/* Dedicated "Meet the Founder" Subsection */}
        <div className="mt-28 md:mt-36 pt-16 border-t border-[#EAE3DA]">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.24em] font-semibold text-[#9A7B52]">
              Leadership & Experience
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#1C1917] font-normal mt-2">
              Meet the Founder
            </h3>
            <p className="text-sm text-[#736A62] mt-2">
              The creative designer guiding every home interior we build.
            </p>
          </div>

          <div className="bg-[#F4EFEA] rounded-3xl p-6 sm:p-12 md:p-16 border border-[#E8E0D5] grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
            {/* Founder Portrait */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 flex flex-col items-center sm:items-start"
            >
              <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-[#E3D9CC]">
                <img
                  src={FOUNDER_INFO.image}
                  alt={FOUNDER_INFO.name}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/40 via-transparent to-transparent" />
              </div>

              {/* Connect & Social Media below Founder Photo */}
              <div className="mt-5 w-full max-w-md flex flex-col items-center sm:items-start">
                <span className="text-xs uppercase tracking-[0.16em] font-semibold text-[#9A7B52] mb-2.5">
                  Follow MS Interior Decorator
                </span>

                <div className="flex items-center gap-3" id="about-social-icons">
                  <a
                    href={STUDIO_CONFIG.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-[0_2px_8px_rgba(220,39,67,0.35)] hover:scale-110 active:scale-95 transition-all duration-200"
                    aria-label="Instagram"
                    id="about-social-instagram"
                    title="Follow on Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={STUDIO_CONFIG.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-[#1877F2] shadow-[0_2px_8px_rgba(24,119,242,0.35)] hover:bg-[#166fe5] hover:scale-110 active:scale-95 transition-all duration-200"
                    aria-label="Facebook"
                    id="about-social-facebook"
                    title="Follow on Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href={STUDIO_CONFIG.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-[#0A66C2] shadow-[0_2px_8px_rgba(10,102,194,0.35)] hover:bg-[#095196] hover:scale-110 active:scale-95 transition-all duration-200"
                    aria-label="LinkedIn"
                    id="about-social-linkedin"
                    title="Connect on LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-xs text-[#6B635B] font-light leading-relaxed mt-3 text-center sm:text-left">
                  Follow on Instagram, Facebook, and LinkedIn for behind-the-scenes site craftsmanship, ongoing transformations, and design updates.
                </p>
              </div>
            </motion.div>

            {/* Founder Details & Personal Approach */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 space-y-6"
            >
              <div>
                <h4 className="font-serif text-2xl sm:text-3xl text-[#1C1917] font-medium">
                  {FOUNDER_INFO.name}
                </h4>
                <p className="text-xs sm:text-sm uppercase tracking-[0.16em] text-[#9A7B52] font-semibold mt-1">
                  {FOUNDER_INFO.role}
                </p>
              </div>

              <div className="space-y-4 text-[#59524B] leading-relaxed text-sm sm:text-base font-light">
                {FOUNDER_INFO.bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Design Philosophy Callout */}
              <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E5DCD0] relative">
                <Quote className="w-6 h-6 text-[#9A7B52]/40 absolute top-4 right-4" />
                <h5 className="text-xs uppercase tracking-wider font-semibold text-[#9A7B52] mb-1.5">
                  Design Approach
                </h5>
                <p className="font-serif italic text-base text-[#2C2724] leading-relaxed">
                  "{FOUNDER_INFO.philosophy}"
                </p>
              </div>

              {/* Personal Approach */}
              <div className="pt-2">
                <h5 className="text-xs uppercase tracking-wider font-semibold text-[#1C1917] mb-2">
                  How We Work With You
                </h5>
                <p className="text-sm text-[#59524B] leading-relaxed font-light">
                  {FOUNDER_INFO.approach}
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-4">
                <a
                  href={`https://wa.me/${STUDIO_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                    'Hello Manak Chand Suthar, I would like to discuss an interior design project.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.16em] bg-[#1C1917] text-[#FAF8F5] hover:bg-[#25D366] hover:text-white transition-all duration-300 group cursor-pointer shadow-sm shrink-0"
                  id="talk-directly-founder-cta"
                >
                  <MessageCircle className="w-4 h-4 text-[#D4B68D] group-hover:text-white transition-colors" />
                  <span>Talk Directly to Manak Chand</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
