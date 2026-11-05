import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#08090D] border-t border-white/5 py-12 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#9B7CFF] to-[#55D6E8] p-[1px]">
                <div className="w-full h-full bg-[#08090D] rounded-[7px] flex items-center justify-center font-heading font-black text-xs text-white">
                  GS
                </div>
              </div>
              <span className="font-heading font-bold text-lg text-white group-hover:text-[#55D6E8] transition-colors">
                {PERSONAL_INFO.displayName.toUpperCase()}
              </span>
            </a>
            <p className="text-xs font-mono text-zinc-500 mt-1 text-center md:text-left">
              Computer Science Undergraduate • KL University 2027
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-zinc-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl glass-panel text-zinc-400 hover:text-white hover:border-[#9B7CFF]/40 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl glass-panel text-zinc-400 hover:text-[#55D6E8] hover:border-[#55D6E8]/40 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2.5 rounded-xl glass-panel text-zinc-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all cursor-pointer group"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 font-mono gap-4">
          <div className="text-center sm:text-left">
            Designed and developed by <span className="text-zinc-200 font-semibold">{PERSONAL_INFO.displayName}</span>.
          </div>
          <div className="text-center sm:text-right text-[11px] text-zinc-600">
            © {new Date().getFullYear()} {PERSONAL_INFO.fullName}. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
