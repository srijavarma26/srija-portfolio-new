import React from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Award, ExternalLink, CheckCircle, ShieldCheck, Cloud, Bot, Calendar, Sparkles } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 sm:py-32 relative bg-[#08090D] overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/3 -right-20 w-[450px] h-[350px] bg-[#9B7CFF]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-[#9B7CFF]/20 text-[#9B7CFF] text-xs font-mono mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>INDUSTRY CREDENTIALS</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Certifications & Badges<span className="text-[#9B7CFF]">.</span>
          </h2>
          <p className="text-zinc-400 text-base max-w-2xl mt-4 leading-relaxed">
            Officially verified industry credentials validating enterprise robotic process automation and cloud infrastructure engineering capabilities.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#9B7CFF] to-[#55D6E8] rounded-full mt-4" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CERTIFICATIONS.map((cert) => {
            const isRPA = cert.badgeType === 'RPA';
            return (
              <div
                key={cert.id}
                className="p-8 rounded-3xl glass-panel glass-panel-hover border border-white/10 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Ambient glow accent */}
                <div
                  className={`absolute -top-20 -right-20 w-48 h-48 rounded-full blur-[80px] pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity ${
                    isRPA ? 'bg-[#9B7CFF]' : 'bg-amber-400'
                  }`}
                />

                <div>
                  {/* Top Header: Badge icon & Verification state */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center p-3 border ${
                        isRPA
                          ? 'bg-[#9B7CFF]/15 border-[#9B7CFF]/30 text-[#9B7CFF]'
                          : 'bg-amber-400/15 border-amber-400/30 text-amber-400'
                      }`}
                    >
                      {isRPA ? (
                        <Bot className="w-8 h-8" />
                      ) : (
                        <Cloud className="w-8 h-8" />
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full glass-pill border border-emerald-400/30 text-emerald-300 text-xs font-mono">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Verified Credential</span>
                    </div>
                  </div>

                  {/* Issuer & Title */}
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">
                    {cert.issuer}
                  </div>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#55D6E8] transition-all mb-3">
                    {cert.title}
                  </h3>

                  {/* Issue Date */}
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-4 pb-4 border-b border-white/5">
                    <Calendar className="w-3.5 h-3.5 text-[#55D6E8]" />
                    <span>Issued: {cert.issueDate}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                    {cert.description}
                  </p>

                  {/* Skills tags */}
                  <div className="mb-8">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-2">
                      Competencies Validated:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skillsAcquired.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#090C14] text-zinc-300 border border-white/5"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* View Credential CTA Button */}
                <div className="pt-4 border-t border-white/5">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-heading font-semibold text-xs sm:text-sm bg-gradient-to-r from-white/10 to-white/5 hover:from-[#9B7CFF] hover:to-[#6E45E2] text-white border border-white/10 hover:border-transparent transition-all duration-300 shadow-sm"
                  >
                    <span>View Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
