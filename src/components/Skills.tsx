import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Cpu, 
  Terminal, 
  Boxes, 
  Layers, 
  CheckCircle2, 
  Sparkles,
  Binary
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Mapping string icon names to Lucide icons
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5" />;
      case 'Layout': return <Layout className="w-5 h-5" />;
      case 'Server': return <Server className="w-5 h-5" />;
      case 'Database': return <Database className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Terminal': return <Terminal className="w-5 h-5" />;
      case 'Boxes': return <Boxes className="w-5 h-5" />;
      default: return <Layers className="w-5 h-5" />;
    }
  };

  const categories = ['All', ...SKILL_CATEGORIES.map(c => c.title)];

  const filteredCategories = selectedCategory === 'All'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(c => c.title === selectedCategory);

  return (
    <section id="skills" className="py-24 sm:py-32 relative bg-[#10121A] bg-cyber-grid">
      {/* Background ambient accents */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-[#9B7CFF]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[250px] bg-[#55D6E8]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-[#55D6E8]/20 text-[#55D6E8] text-xs font-mono mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Skills & Technologies<span className="text-[#55D6E8]">.</span>
          </h2>
          <p className="text-zinc-400 text-base max-w-2xl mt-4">
            A comprehensive overview of programming languages, modern frameworks, machine learning APIs, databases, and core software engineering concepts I work with.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#55D6E8] to-[#9B7CFF] rounded-full mt-4" />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#9B7CFF] to-[#7B59EC] text-white shadow-md shadow-[#9B7CFF]/25 border border-transparent'
                    : 'glass-panel text-zinc-400 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl glass-panel glass-panel-hover border border-white/5 flex flex-col justify-between group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                  <div className="p-2.5 rounded-xl bg-[#9B7CFF]/15 text-[#9B7CFF] border border-[#9B7CFF]/20 group-hover:bg-[#55D6E8]/15 group-hover:text-[#55D6E8] group-hover:border-[#55D6E8]/20 transition-all">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-white group-hover:text-[#F4F4F7] transition-colors">
                      {category.title}
                    </h3>
                    <span className="text-[11px] font-mono text-zinc-500">
                      {category.skills.length} core technologies
                    </span>
                  </div>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium text-zinc-200 bg-[#08090D]/80 border border-white/10 hover:border-[#9B7CFF]/40 hover:text-white hover:bg-white/5 transition-all flex items-center gap-2 group/skill"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#55D6E8] group-hover/skill:bg-[#9B7CFF] transition-colors" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Subtle footer indicator */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Production Ready</span>
                </span>
                <span className="text-zinc-600">Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
