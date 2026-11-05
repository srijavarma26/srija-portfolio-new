import React from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { Sparkles, Layers, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 sm:py-32 relative bg-[#08090D] overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 -right-20 w-[550px] h-[550px] bg-[#9B7CFF]/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 -left-20 w-[500px] h-[500px] bg-[#55D6E8]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-[#9B7CFF]/20 text-[#9B7CFF] text-xs font-mono mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>PORTFOLIO & SYSTEM BUILDS</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Featured Projects<span className="text-[#9B7CFF]">.</span>
          </h2>
          <p className="text-zinc-400 text-base max-w-2xl mt-4 leading-relaxed">
            Real-world full-stack web applications, AI-driven cybersecurity analyzers, machine learning recommendation systems, and executive business intelligence dashboards.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#9B7CFF] to-[#55D6E8] rounded-full mt-4" />
        </div>

        {/* Projects List */}
        <div className="space-y-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* GitHub Explorer Callout */}
        <div className="mt-16 p-8 rounded-2xl glass-panel border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-white">
              <GithubIcon className="w-6 h-6 text-[#9B7CFF]" />
            </div>
            <div>
              <h4 className="font-heading font-semibold text-lg text-white">Explore More on GitHub</h4>
              <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                Visit my personal GitHub repository to view complete commit histories, branch workflows, and active contributions.
              </p>
            </div>
          </div>
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl font-heading font-semibold text-xs sm:text-sm glass-pill border border-[#9B7CFF]/30 text-white hover:bg-white/10 transition-all flex items-center gap-2 shrink-0 group"
          >
            <span>github.com/srijavarma26</span>
            <ArrowUpRight className="w-4 h-4 text-[#55D6E8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};
