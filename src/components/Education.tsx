import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2, BookOpen } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 sm:py-32 relative bg-[#10121A] bg-cyber-grid">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[350px] bg-[#9B7CFF]/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-[#55D6E8]/20 text-[#55D6E8] text-xs font-mono mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATIONS</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Academic Timeline<span className="text-[#55D6E8]">.</span>
          </h2>
          <p className="text-zinc-400 text-base max-w-2xl mt-4 leading-relaxed">
            A chronological timeline of my formal engineering and pre-university education, marked by consistent academic excellence and rigorous scientific training.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#55D6E8] to-[#9B7CFF] rounded-full mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-white/10 space-y-12 ml-2 sm:ml-4">
          
          {EDUCATION_DATA.map((item, index) => (
            <div key={item.institution} className="relative group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-[#08090D] border-2 border-[#9B7CFF] flex items-center justify-center group-hover:border-[#55D6E8] group-hover:scale-110 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-[#9B7CFF] group-hover:bg-[#55D6E8] transition-colors" />
              </div>

              {/* Education Card */}
              <div className="p-6 sm:p-8 rounded-2xl glass-panel glass-panel-hover border border-white/5 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <span className="text-xs font-mono text-[#9B7CFF] font-semibold tracking-wider uppercase">
                      {index === 0 ? 'CURRENT UNDERGRADUATE' : index === 1 ? 'INTERMEDIATE (10+2)' : 'SECONDARY SCHOOL'}
                    </span>
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mt-1">
                      {item.institution}
                    </h3>
                    <div className="text-sm sm:text-base font-medium text-zinc-300 mt-0.5">
                      {item.degree}
                    </div>
                  </div>

                  {/* Academic Score Pill */}
                  <div className="self-start sm:self-center px-4 py-2 rounded-xl bg-gradient-to-br from-[#9B7CFF]/15 to-[#55D6E8]/15 border border-[#9B7CFF]/30 text-right">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                      {item.gradeType}
                    </div>
                    <div className="text-lg sm:text-xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#55D6E8]">
                      {item.grade}
                    </div>
                  </div>
                </div>

                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 mb-4 pb-4 border-b border-white/5">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#55D6E8]" />
                    <span>{item.period}</span>
                  </div>
                  <span className="w-1 h-1 rounded-full bg-zinc-600" />
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#9B7CFF]" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Description */}
                {item.description && (
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                )}

                {/* Coursework & Highlights */}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="mt-4">
                    <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Key Coursework & Distinctions</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {item.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#55D6E8] shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
