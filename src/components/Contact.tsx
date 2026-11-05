import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  Sparkles, 
  AlertCircle,
  MessageSquare
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject.';
    if (!formData.message.trim()) {
      errs.message = 'Please provide a message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Functional mailto handler with URL encoding
    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const mailtoBody = encodeURIComponent(
      `Hello Srija,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nSent from your portfolio website.`
    );
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    // Trigger celebratory confetti effect
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.75 },
        colors: ['#9B7CFF', '#55D6E8', '#FFFFFF'],
      });
    } catch {
      // safe fallback if canvas-confetti has environment constraints
    }

    // Launch user's default email client
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedStatus('Email client opened! If it did not launch automatically, feel free to copy my direct email below.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-[#10121A] bg-cyber-grid">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[400px] bg-[#9B7CFF]/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[300px] bg-[#55D6E8]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-[#9B7CFF]/20 text-[#9B7CFF] text-xs font-mono mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Have an idea? Let's build something meaningful<span className="text-[#9B7CFF]">.</span>
          </h2>
          <p className="text-zinc-400 text-base max-w-2xl mt-4 leading-relaxed">
            I'm always interested in connecting with people, exploring opportunities, and building impactful technology solutions.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#9B7CFF] to-[#55D6E8] rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info Cards & Quick Buttons */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Email Card */}
            <div className="p-6 rounded-2xl glass-panel border border-white/5 flex items-center justify-between group hover:border-[#9B7CFF]/30 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#9B7CFF]/15 text-[#9B7CFF] border border-[#9B7CFF]/20 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">Direct Email</div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm sm:text-base font-semibold text-white hover:text-[#55D6E8] transition-colors break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg glass-pill text-zinc-400 hover:text-white transition-colors cursor-pointer"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl glass-panel border border-white/5 flex items-center justify-between group hover:border-[#55D6E8]/30 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#55D6E8]/15 text-[#55D6E8] border border-[#55D6E8]/20 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">Phone / WhatsApp</div>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-sm sm:text-base font-semibold text-white hover:text-[#55D6E8] transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyPhone}
                className="p-2 rounded-lg glass-pill text-zinc-400 hover:text-white transition-colors cursor-pointer"
                title="Copy phone number"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-2xl glass-panel border border-white/5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/15 text-purple-400 border border-purple-500/20 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">Location</div>
                <div className="text-sm sm:text-base font-semibold text-white">
                  {PERSONAL_INFO.location}
                </div>
              </div>
            </div>

            {/* Direct Channel Buttons */}
            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex-1 min-w-[130px] px-4 py-3 rounded-xl font-heading font-semibold text-xs text-center bg-gradient-to-r from-[#9B7CFF] to-[#6E45E2] text-white hover:shadow-[0_0_20px_rgba(155,124,255,0.35)] transition-all flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[130px] px-4 py-3 rounded-xl font-heading font-semibold text-xs text-center glass-panel border border-white/10 text-white hover:border-[#55D6E8]/40 hover:bg-white/5 transition-all flex items-center justify-center gap-2"
              >
                <LinkedinIcon className="w-4 h-4 text-[#55D6E8]" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl font-heading font-semibold text-xs glass-panel border border-white/10 text-white hover:border-white/30 hover:bg-white/5 transition-all flex items-center justify-center gap-2"
              >
                <GithubIcon className="w-4 h-4 text-zinc-300" />
                <span>GitHub</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-white/10 relative overflow-hidden shadow-2xl">
              
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mb-8">
                Fill out the form below. Your message will be formatted and securely transmitted directly to my personal inbox.
              </p>

              {submittedStatus && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{submittedStatus}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2">
                      Your Name <span className="text-[#9B7CFF]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-[#090C14] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[#9B7CFF] focus:ring-1 focus:ring-[#9B7CFF] transition-all text-sm"
                    />
                    {errors.name && (
                      <span className="text-xs text-rose-400 mt-1 block flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2">
                      Your Email <span className="text-[#9B7CFF]">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#090C14] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[#9B7CFF] focus:ring-1 focus:ring-[#9B7CFF] transition-all text-sm"
                    />
                    {errors.email && (
                      <span className="text-xs text-rose-400 mt-1 block flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2">
                    Subject <span className="text-[#9B7CFF]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry / Job Opportunity / Collaboration"
                    className="w-full px-4 py-3 rounded-xl bg-[#090C14] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[#9B7CFF] focus:ring-1 focus:ring-[#9B7CFF] transition-all text-sm"
                  />
                  {errors.subject && (
                    <span className="text-xs text-rose-400 mt-1 block flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2">
                    Message <span className="text-[#9B7CFF]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share details about your project, idea, or role..."
                    className="w-full px-4 py-3 rounded-xl bg-[#090C14] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[#9B7CFF] focus:ring-1 focus:ring-[#9B7CFF] transition-all text-sm resize-none"
                  />
                  {errors.message && (
                    <span className="text-xs text-rose-400 mt-1 block flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-heading font-semibold text-sm bg-gradient-to-r from-[#9B7CFF] via-[#7B59EC] to-[#55D6E8] text-white hover:shadow-[0_0_25px_rgba(155,124,255,0.4)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Preparing Direct Message...' : 'Send Message'}</span>
                </button>

                <div className="text-center">
                  <span className="text-[11px] font-mono text-zinc-500">
                    Client-side validated • Direct recipient: srijavarma2006@gmail.com
                  </span>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
