import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Award, GraduationCap, MapPin, Building, Code2, Sparkles, Brain, Layers } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 relative bg-[#08090D] overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#9B7CFF]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-[#55D6E8]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-[#9B7CFF]/20 text-[#9B7CFF] text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BACKGROUND & IDENTITY</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Beyond the Code<span className="text-[#9B7CFF]">.</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#9B7CFF] to-[#55D6E8] rounded-full mt-4" />
        </div>

        {/* Content Layout: Bio on left, Highlights cards on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Main Story & Technical Philosophy */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
            {PERSONAL_INFO.aboutText.map((paragraph, idx) => (
              <p
                key={idx}
                className={idx === 0 ? 'text-zinc-200 font-medium text-lg sm:text-xl leading-relaxed' : 'text-zinc-400'}
              >
                {paragraph}
              </p>
            ))}

            {/* Quick Technical Pillars */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl glass-panel border border-white/5 hover:border-[#9B7CFF]/30 transition-all">
                <Brain className="w-5 h-5 text-[#9B7CFF] mb-2" />
                <h4 className="text-white font-heading font-semibold text-sm mb-1">AI & Intelligent Apps</h4>
                <p className="text-xs text-zinc-400">Gemini API, LLM reasoning, NLP threat detection, ML recommendation engines.</p>
              </div>

              <div className="p-4 rounded-xl glass-panel border border-white/5 hover:border-[#55D6E8]/30 transition-all">
                <Layers className="w-5 h-5 text-[#55D6E8] mb-2" />
                <h4 className="text-white font-heading font-semibold text-sm mb-1">Full-Stack Systems</h4>
                <p className="text-xs text-zinc-400">React, Node.js, Express, MongoDB, RESTful microservices, clean responsive UI.</p>
              </div>

              <div className="p-4 rounded-xl glass-panel border border-white/5 hover:border-emerald-400/30 transition-all">
                <Code2 className="w-5 h-5 text-emerald-400 mb-2" />
                <h4 className="text-white font-heading font-semibold text-sm mb-1">Data & Analytics</h4>
                <p className="text-xs text-zinc-400">Power BI dashboards, SQL query optimization, Python Pandas, Scikit-learn.</p>
              </div>
            </div>
          </div>

          {/* Academic Highlights & Animated Stat Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            
            {/* Stat 1: 8.58 CGPA */}
            <div className="p-6 rounded-2xl glass-panel glass-panel-hover border border-white/10 flex flex-col justify-between group">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-[#9B7CFF]/15 text-[#9B7CFF] border border-[#9B7CFF]/30 group-hover:scale-105 transition-transform">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">Academic</span>
              </div>
              <div>
                <div className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight group-hover:text-[#9B7CFF] transition-colors">
                  8.58
                </div>
                <div className="text-xs font-semibold text-zinc-300 mt-1">Cumulative CGPA</div>
                <div className="text-[11px] text-zinc-500 mt-0.5">Top-tier academic performance</div>
              </div>
            </div>

            {/* Stat 2: 2027 Graduation */}
            <div className="p-6 rounded-2xl glass-panel glass-panel-hover border border-white/10 flex flex-col justify-between group">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-[#55D6E8]/15 text-[#55D6E8] border border-[#55D6E8]/30 group-hover:scale-105 transition-transform">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">Timeline</span>
              </div>
              <div>
                <div className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight group-hover:text-[#55D6E8] transition-colors">
                  2027
                </div>
                <div className="text-xs font-semibold text-zinc-300 mt-1">Graduation Year</div>
                <div className="text-[11px] text-zinc-500 mt-0.5">B.Tech in Computer Science</div>
              </div>
            </div>

            {/* Stat 3: KL University */}
            <div className="p-6 rounded-2xl glass-panel glass-panel-hover border border-white/10 flex flex-col justify-between group col-span-2 sm:col-span-1">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-purple-500/15 text-purple-300 border border-purple-500/30 group-hover:scale-105 transition-transform">
                  <Building className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">Institution</span>
              </div>
              <div>
                <div className="font-heading font-extrabold text-xl sm:text-2xl text-white tracking-tight">
                  KL University
                </div>
                <div className="text-xs font-semibold text-zinc-300 mt-1">KLEF Foundation</div>
                <div className="text-[11px] text-zinc-500 mt-0.5">NAAC A++ Accredited</div>
              </div>
            </div>

            {/* Stat 4: Vijayawada, India */}
            <div className="p-6 rounded-2xl glass-panel glass-panel-hover border border-white/10 flex flex-col justify-between group col-span-2 sm:col-span-1">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 group-hover:scale-105 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">Location</span>
              </div>
              <div>
                <div className="font-heading font-extrabold text-xl sm:text-2xl text-white tracking-tight">
                  Vijayawada
                </div>
                <div className="text-xs font-semibold text-zinc-300 mt-1">Andhra Pradesh, India</div>
                <div className="text-[11px] text-zinc-500 mt-0.5">Open to remote & relocation</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
