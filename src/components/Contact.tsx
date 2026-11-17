import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Linkedin,
  Instagram,
  Facebook,
  CheckCircle,
  Copy,
  ExternalLink,
} from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioData';
import { ContactFormData } from '../types';

interface ContactProps {
  initialProjectType?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialProjectType }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    projectType: initialProjectType || 'Residential Interior Design',
    location: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [submittedWhatsAppUrl, setSubmittedWhatsAppUrl] = useState<string | null>(null);
  const [formattedMessagePreview, setFormattedMessagePreview] = useState<string>('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialProjectType) {
      setFormData((prev) => ({ ...prev, projectType: initialProjectType }));
    }
  }, [initialProjectType]);

  const validate = () => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a contact phone number.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.location.trim()) {
      newErrors.location = 'Please specify the project city or neighborhood.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please share a brief description of your spatial vision.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Exact requested format from user prompt:
    // New Interior Design Enquiry
    //
    // Name: [Name]
    // Phone: [Phone]
    // Email: [Email]
    // Project Type: [Project Type]
    // Location: [Location]
    //
    // Message:
    // [User Message]

    const formattedMessage =
      `New Interior Design Enquiry\n\n` +
      `Name: ${formData.name.trim()}\n` +
      `Phone: ${formData.phone.trim()}\n` +
      `Email: ${formData.email.trim()}\n` +
      `Project Type: ${formData.projectType.trim()}\n` +
      `Location: ${formData.location.trim()}\n\n` +
      `Message:\n${formData.message.trim()}`;

    setFormattedMessagePreview(formattedMessage);

    const waUrl = `https://wa.me/${STUDIO_CONFIG.whatsappNumber}?text=${encodeURIComponent(
      formattedMessage
    )}`;
    setSubmittedWhatsAppUrl(waUrl);

    // Open WhatsApp in a new tab so user can review and tap Send
    const win = window.open(waUrl, '_blank', 'noopener,noreferrer');
    if (!win) {
      // Popup blocked or mobile, link provided in UI
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedMessagePreview);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const resetForm = () => {
    setSubmittedWhatsAppUrl(null);
    setFormData({
      name: '',
      phone: '',
      email: '',
      projectType: 'Residential Interior Design',
      location: '',
      message: '',
    });
    setErrors({});
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-[#F4EFEA] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-[0.24em] font-semibold text-[#9A7B52] mb-3 block">
            08 / Visit Us / Get in Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1C1917] font-normal leading-tight">
            Visit Us or Discuss Your New Home
          </h2>
          <p className="text-sm sm:text-base text-[#5E554C] mt-4 font-light leading-relaxed">
            Planning to design a new apartment, renovate an independent floor, or set up an office? Fill out the form below or message us directly on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Studio Contact Coordinates & Socials */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-10 border border-[#E5DDD0] shadow-sm space-y-6">
              <h3 className="font-serif text-2xl text-[#1C1917] font-medium border-b border-[#EAE3DA] pb-4">
                Our Office & Contact Details
              </h3>

              {/* Contact Item: Address */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-full bg-[#F4EFEA] text-[#9A7B52] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#8C8075]">
                    Office Address
                  </h4>
                  <p className="text-sm text-[#2C2724] font-medium mt-1 leading-relaxed">
                    {STUDIO_CONFIG.address}
                  </p>
                </div>
              </div>

              {/* Contact Item: Phone */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-full bg-[#F4EFEA] text-[#9A7B52] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#8C8075]">
                    Contact Number (Founder)
                  </h4>
                  <a
                    href={`https://wa.me/${STUDIO_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                      'Hello Manak Chand Suthar, I would like to enquire about interior design services.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#2C2724] font-medium hover:text-[#25D366] transition-colors mt-1 inline-flex items-center gap-2 group"
                    id="contact-founder-phone-link"
                    title="Tap to message directly on WhatsApp"
                  >
                    <span>{STUDIO_CONFIG.displayPhone}</span>
                  </a>
                </div>
              </div>

              {/* Contact Item: Email */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-full bg-[#F4EFEA] text-[#9A7B52] shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#8C8075]">
                    Electronic Mail
                  </h4>
                  <a
                    href={`mailto:${STUDIO_CONFIG.email}`}
                    className="text-sm text-[#2C2724] font-medium hover:text-[#9A7B52] transition-colors mt-1 block"
                  >
                    {STUDIO_CONFIG.email}
                  </a>
                </div>
              </div>

              {/* Contact Item: Studio Hours */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-full bg-[#F4EFEA] text-[#9A7B52] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#8C8075]">
                    Consultation Hours
                  </h4>
                  <p className="text-sm text-[#2C2724] font-medium mt-1 leading-relaxed">
                    {STUDIO_CONFIG.hours}
                  </p>
                </div>
              </div>

              {/* WhatsApp Quick Direct Button */}
              <div className="pt-4 border-t border-[#EAE3DA]">
                <a
                  href={`https://wa.me/${STUDIO_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                    'Hello M.S Interior Decorator, I would like to discuss interior design for my project.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.99] text-white font-medium text-sm transition-all duration-200 shadow-sm cursor-pointer"
                  id="direct-whatsapp-card-link"
                >
                  <svg
                    className="w-5 h-5 fill-current shrink-0"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.201.3-.777.978-.953 1.178-.175.2-.351.225-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.786-1.676-2.087-.175-.3-.019-.462.132-.612.136-.135.301-.351.452-.526.15-.175.201-.3.301-.501.101-.2.05-.375-.025-.525-.075-.15-.678-1.635-.929-2.241-.244-.59-.492-.51-.678-.52-.176-.008-.377-.01-.578-.01-.201 0-.527.075-.803.375-.276.3-1.054 1.03-1.054 2.513 0 1.482 1.079 2.914 1.23 3.114.15.201 2.123 3.242 5.143 4.547.718.31 1.279.496 1.716.635.721.23 1.377.197 1.895.12.578-.087 1.78-.727 2.031-1.428.251-.702.251-1.303.176-1.428-.076-.126-.277-.2-.578-.35z" />
                    <path d="M12.004 0C5.378 0 0 5.377 0 12.004c0 2.115.553 4.179 1.603 5.999L.053 23.953l6.108-1.603c1.761.96 3.754 1.47 5.843 1.47 6.625 0 12.003-5.378 12.003-12.004 0-3.208-1.25-6.223-3.518-8.491C18.223 1.25 15.208 0 12.004 0zm0 21.996c-1.879 0-3.719-.505-5.323-1.461l-.382-.228-3.952 1.036 1.055-3.852-.249-.397c-1.05-1.671-1.605-3.606-1.605-5.59 0-5.518 4.488-10.005 10.006-10.005 2.673 0 5.186 1.042 7.077 2.932 1.89 1.89 2.931 4.404 2.931 7.078 0 5.517-4.488 10.005-10.007 10.005z" />
                  </svg>
                  <span>Chat directly on WhatsApp</span>
                </a>
              </div>

              {/* Social Media Links with Original Brand Colors */}
              <div className="pt-4 border-t border-[#EAE3DA]">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#8C8075] mb-3">
                  Follow Our Process
                </h4>
                <div className="flex items-center gap-2.5">
                  <a
                    href={STUDIO_CONFIG.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-[0_3px_10px_rgba(220,39,67,0.35)] hover:scale-110 active:scale-95 transition-all"
                    aria-label="Instagram"
                    id="contact-social-instagram"
                    title="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={STUDIO_CONFIG.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-[#1877F2] shadow-[0_3px_10px_rgba(24,119,242,0.35)] hover:bg-[#166fe5] hover:scale-110 active:scale-95 transition-all"
                    aria-label="Facebook"
                    id="contact-social-facebook"
                    title="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href={STUDIO_CONFIG.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-[#0A66C2] shadow-[0_3px_10px_rgba(10,102,194,0.35)] hover:bg-[#095196] hover:scale-110 active:scale-95 transition-all"
                    aria-label="LinkedIn"
                    id="contact-social-linkedin"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Contact Form with WhatsApp Integration */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-10 border border-[#E5DDD0] shadow-sm relative">
              <AnimatePresence mode="wait">
                {!submittedWhatsAppUrl ? (
                  <form onSubmit={handleSubmit} className="space-y-6" id="atelier-contact-form">
                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1917] font-normal">
                        Submit a Project Brief
                      </h3>
                      <p className="text-xs sm:text-sm text-[#736A62] mt-1 font-light">
                        Upon clicking submit, your enquiry will be formatted and opened in WhatsApp for you to review and send directly to our principal team.
                      </p>
                    </div>

                    {/* Full Name Field */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs uppercase tracking-wider font-semibold text-[#4A443E] mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Eleanor Vance"
                        className={`w-full px-4 py-3 rounded-xl bg-[#F4EFEA] border text-sm text-[#1C1917] placeholder-[#A89F95] focus:outline-none focus:ring-2 focus:ring-[#9A7B52]/40 transition-colors ${
                          errors.name ? 'border-red-400 bg-red-50/20' : 'border-[#E5DDD0]'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-600 mt-1 font-light">{errors.name}</p>
                      )}
                    </div>

                    {/* Phone Number & Email Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="contact-phone"
                          className="block text-xs uppercase tracking-wider font-semibold text-[#4A443E] mb-2"
                        >
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="contact-phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className={`w-full px-4 py-3 rounded-xl bg-[#F4EFEA] border text-sm text-[#1C1917] placeholder-[#A89F95] focus:outline-none focus:ring-2 focus:ring-[#9A7B52]/40 transition-colors ${
                            errors.phone ? 'border-red-400 bg-red-50/20' : 'border-[#E5DDD0]'
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-xs text-red-600 mt-1 font-light">{errors.phone}</p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-xs uppercase tracking-wider font-semibold text-[#4A443E] mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="contact-email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="eleanor@example.com"
                          className={`w-full px-4 py-3 rounded-xl bg-[#F4EFEA] border text-sm text-[#1C1917] placeholder-[#A89F95] focus:outline-none focus:ring-2 focus:ring-[#9A7B52]/40 transition-colors ${
                            errors.email ? 'border-red-400 bg-red-50/20' : 'border-[#E5DDD0]'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-xs text-red-600 mt-1 font-light">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Project Type & Location Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="contact-project-type"
                          className="block text-xs uppercase tracking-wider font-semibold text-[#4A443E] mb-2"
                        >
                          Project Type *
                        </label>
                        <select
                          id="contact-project-type"
                          value={formData.projectType}
                          onChange={(e) =>
                            setFormData({ ...formData, projectType: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-[#F4EFEA] border border-[#E5DDD0] text-sm text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#9A7B52]/40 transition-colors cursor-pointer"
                        >
                          <option value="Residential Interior Design">Residential Interior Design</option>
                          <option value="Commercial & Hospitality Design">Commercial & Hospitality Design</option>
                          <option value="Living Room Architecture">Living Room Architecture</option>
                          <option value="Serene Bedroom Suites">Serene Bedroom Suites</option>
                          <option value="Culinary Kitchen Design">Culinary Kitchen Design</option>
                          <option value="Executive Office Interiors">Executive Office Interiors</option>
                          <option value="Bespoke Modular Furniture">Bespoke Modular Furniture</option>
                          <option value="Renovation & Remodeling">Renovation & Remodeling</option>
                          <option value="Custom Interior Solutions">Custom Interior Solutions</option>
                          <option value="Full Residence Turnkey Commission">Full Residence Turnkey Commission</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="contact-location"
                          className="block text-xs uppercase tracking-wider font-semibold text-[#4A443E] mb-2"
                        >
                          Project Location *
                        </label>
                        <input
                          type="text"
                          id="contact-location"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="e.g. Tribeca, New York or London"
                          className={`w-full px-4 py-3 rounded-xl bg-[#F4EFEA] border text-sm text-[#1C1917] placeholder-[#A89F95] focus:outline-none focus:ring-2 focus:ring-[#9A7B52]/40 transition-colors ${
                            errors.location ? 'border-red-400 bg-red-50/20' : 'border-[#E5DDD0]'
                          }`}
                        />
                        {errors.location && (
                          <p className="text-xs text-red-600 mt-1 font-light">{errors.location}</p>
                        )}
                      </div>
                    </div>

                    {/* Message Field (Strictly NO budget field!) */}
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-xs uppercase tracking-wider font-semibold text-[#4A443E] mb-2"
                      >
                        Project Vision & Scope *
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about the property, square footage, desired move-in milestones, and your aesthetic aspirations..."
                        className={`w-full px-4 py-3 rounded-xl bg-[#F4EFEA] border text-sm text-[#1C1917] placeholder-[#A89F95] focus:outline-none focus:ring-2 focus:ring-[#9A7B52]/40 transition-colors resize-none ${
                          errors.message ? 'border-red-400 bg-red-50/20' : 'border-[#E5DDD0]'
                        }`}
                      />
                      {errors.message && (
                        <p className="text-xs text-red-600 mt-1 font-light">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-4 px-8 rounded-full text-xs font-semibold tracking-[0.18em] uppercase bg-[#1C1917] text-[#FAF8F5] hover:bg-[#9A7B52] transition-colors flex items-center justify-center gap-2.5 cursor-pointer shadow-md group"
                      id="submit-contact-form-btn"
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366]" />
                      <span>Format & Open in WhatsApp</span>
                      <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                ) : (
                  /* WhatsApp Integration Feedback View */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    className="space-y-6 py-4"
                    id="whatsapp-submission-success-view"
                  >
                    <div className="flex items-center gap-3 text-[#136C34]">
                      <div className="p-3 rounded-full bg-[#25D366]/15">
                        <CheckCircle className="w-6 h-6 text-[#25D366]" />
                      </div>
                      <div>
                        <h4 className="font-serif text-2xl text-[#1C1917] font-medium">
                          Enquiry Pre-Filled for WhatsApp
                        </h4>
                        <p className="text-xs text-[#59524B]">
                          WhatsApp has opened in a new tab with your formatted message.
                        </p>
                      </div>
                    </div>

                    {/* Message Preview Box */}
                    <div className="p-5 rounded-2xl bg-[#F4EFEA] border border-[#E5DDD0] space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-[#8C8075]">
                          Pre-Filled WhatsApp Message Preview
                        </span>
                        <button
                          onClick={handleCopy}
                          className="flex items-center gap-1 text-xs text-[#9A7B52] hover:text-[#1C1917] transition-colors cursor-pointer"
                        >
                          <Copy className="w-3.5 h-3.5" />
                          <span>{copied ? 'Copied!' : 'Copy Text'}</span>
                        </button>
                      </div>
                      <pre className="text-xs text-[#2C2724] font-mono whitespace-pre-wrap leading-relaxed bg-[#FAF8F5] p-4 rounded-xl border border-[#E8E0D5]">
                        {formattedMessagePreview}
                      </pre>
                    </div>

                    <p className="text-xs text-[#736A62] leading-relaxed">
                      You can review the message in WhatsApp and tap Send to dispatch it directly to our studio team. If the WhatsApp window did not open automatically, click below:
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <a
                        href={submittedWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3.5 px-6 rounded-full text-xs font-semibold tracking-[0.14em] uppercase bg-[#25D366] text-white hover:bg-[#1EBE5D] transition-colors flex items-center justify-center gap-2 shadow-sm text-center"
                        id="open-whatsapp-again-btn"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Launch WhatsApp Chat</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      <button
                        onClick={resetForm}
                        className="py-3.5 px-6 rounded-full text-xs font-semibold tracking-[0.14em] uppercase bg-[#F4EFEA] border border-[#E5DDD0] text-[#3D362F] hover:bg-[#EAE3DA] transition-colors cursor-pointer"
                        id="reset-enquiry-form-btn"
                      >
                        New Enquiry
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
