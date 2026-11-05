import React from 'react';
import { Project } from '../types';
import { 
  CampusConnectPreview, 
  PhishingAnalyzerPreview, 
  GovtSchemesPreview, 
  PowerBIAnalyticsPreview 
} from './ProjectPreviews';
import { ExternalLink, CheckCircle2, Calendar, Target, Sparkles, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  // Render project-specific visual preview
  const renderPreview = () => {
    switch (project.id) {
      case 'campus-connect':
        return <CampusConnectPreview />;
      case 'ai-phishing-threat-analyzer':
        return <PhishingAnalyzerPreview />;
      case 'ai-govt-schemes-navigator':
        return <GovtSchemesPreview />;
      case 'ecommerce-sales-analytics':
        return <PowerBIAnalyticsPreview />;
      default:
        return null;
    }
  };

  const isEven = index % 2 === 0;

  return (
    <div className="relative p-6 sm:p-8 lg:p-10 rounded-3xl glass-panel glass-panel-hover border border-white/10 overflow-hidden group mb-12">
      {/* Ambient background glow according to project accent */}
      <div 
        className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-[100px] pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity"
        style={{ backgroundColor: project.accentColor }}
      />

      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`}>
        
        {/* Left / Primary Content Column */}
        <div className={`lg:col-span-7 flex flex-col justify-between ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
          <div>
            {/* Top Meta: Number, Category, and Duration */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="font-mono text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9B7CFF] to-[#55D6E8]">
                PROJECT {project.number}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono glass-pill text-zinc-300 border border-white/10">
                {project.category}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 hidden sm:block" />
              <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-zinc-400">
                <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                <span>{project.duration}</span>
              </div>
            </div>

            {/* Title & Subtitle */}
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#55D6E8] transition-all">
              {project.title}
            </h3>
            <div className="text-sm sm:text-base font-medium text-[#9B7CFF] mt-1 mb-4">
              {project.subtitle}
            </div>

            {/* Description */}
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-5 font-normal">
              {project.description}
            </p>

            {/* Problem Solved Highlight Box */}
            <div className="p-4 rounded-xl bg-[#0B0D15] border border-white/5 mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#55D6E8] uppercase tracking-wider mb-1">
                <Target className="w-3.5 h-3.5" />
                <span>Problem Solved</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {project.problemSolved}
              </p>
            </div>

            {/* Key Features List */}
            <div className="mb-6">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2.5 font-semibold">
                Key Features & Engineering Highlights:
              </div>
              <ul className="space-y-1.5">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-[#9B7CFF] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies Used Badges */}
            <div className="mb-8">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 font-semibold">
                Technologies:
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#111422] text-zinc-300 border border-white/10 hover:border-[#55D6E8]/40 hover:text-white transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons: Live Demo & GitHub */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/5">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl font-heading font-semibold text-xs sm:text-sm bg-gradient-to-r from-[#9B7CFF] to-[#6E45E2] text-white hover:shadow-[0_0_20px_rgba(155,124,255,0.4)] transition-all duration-300 flex items-center gap-2"
            >
              <span>Live Application</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl font-heading font-semibold text-xs sm:text-sm glass-panel border border-white/10 text-zinc-300 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4 text-zinc-400" />
                <span>Source Code</span>
              </a>
            ) : (
              <div className="px-3.5 py-2 text-xs font-mono text-zinc-500 rounded-xl bg-zinc-900/50 border border-zinc-800 flex items-center gap-2">
                <span>Power BI Cloud / SQL Project</span>
              </div>
            )}
          </div>
        </div>

        {/* Right / Visual Preview Column */}
        <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
          <div className="relative rounded-2xl p-1 bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/10 shadow-2xl overflow-hidden group/preview">
            {/* Top simulated browser/app bar */}
            <div className="bg-[#090B12] px-3.5 py-2 rounded-t-xl border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
              </div>
              <div className="text-[10px] font-mono text-zinc-400 truncate max-w-[200px]">
                {project.liveUrl.replace('https://', '')}
              </div>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} in new tab`}
                className="text-zinc-500 hover:text-white transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Interactive Domain Preview */}
            <div className="p-2 sm:p-3 bg-[#07090F]">
              {renderPreview()}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
