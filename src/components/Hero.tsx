import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { InteractiveHeroCanvas } from './InteractiveHeroCanvas';
import { ArrowDown, Sparkles, Terminal, Code } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 md:py-36 flex flex-col justify-center items-center overflow-hidden bg-cyber-grid"
    >
      {/* Ambient gradient backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#9B7CFF]/15 via-[#55D6E8]/10 to-transparent blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-12 left-10 w-72 h-72 bg-[#9B7CFF]/5 blur-[90px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-[#9B7CFF]/30 mb-6 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#55D6E8] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#55D6E8]"></span>
              </span>
              <span className="text-[11px] font-mono tracking-wider font-semibold uppercase text-zinc-300">
                {PERSONAL_INFO.statusLabel}
              </span>
            </div>

            {/* Oversized Editorial Main Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-[68px] leading-[1.08] tracking-tight text-white mb-6">
              Building{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#9B7CFF] to-[#55D6E8] inline-block">
                Intelligent
              </span>
              <br />
              Digital Experiences<span className="text-[#55D6E8]">.</span>
            </h1>

            {/* Supporting Introduction */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed mb-8 font-normal">
              {PERSONAL_INFO.supportingIntro}
            </p>

            {/* Prominent CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-heading font-semibold text-sm bg-gradient-to-r from-[#9B7CFF] to-[#7B59EC] text-white hover:shadow-[0_0_25px_rgba(155,124,255,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-heading font-semibold text-sm glass-panel border border-white/10 text-zinc-200 hover:text-white hover:border-[#55D6E8]/40 hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#55D6E8]" />
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Social Icons & Technical Meta Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/5 w-full">
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl glass-pill text-zinc-400 hover:text-white hover:border-[#9B7CFF]/50 transition-all flex items-center gap-2 text-xs font-mono"
                  title="View GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4 text-[#9B7CFF]" />
                  <span>github/srijavarma26</span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl glass-pill text-zinc-400 hover:text-white hover:border-[#55D6E8]/50 transition-all flex items-center gap-2 text-xs font-mono"
                  title="View LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#55D6E8]" />
                  <span>linkedin/srija</span>
                </a>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-zinc-500">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                <span>KL University</span>
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                <span className="text-[#55D6E8]">8.58 CGPA</span>
              </div>
            </div>

          </div>

          {/* Right Column: Distinctive Animated Digital Identity Visual */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <InteractiveHeroCanvas />
          </div>

        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors group cursor-pointer"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-zinc-700 flex items-start justify-center p-1 group-hover:border-[#9B7CFF]/60 transition-colors">
          <div className="w-1 h-2 bg-[#9B7CFF] rounded-full animate-bounce" />
        </div>
      </a>
    </section>
  );
};
