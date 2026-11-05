import React, { useState } from 'react';
import { CODING_TOPICS } from '../data/portfolioData';
import { Terminal, Code, Cpu, Check, Layers, Binary, Zap, Flame } from 'lucide-react';

export const ProblemSolving: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState(false);

  const pythonSnippet = `# Algorithmic Paradigm: Two Pointers & Hash Map Optimization
# Efficient search and space-time optimization in Python

def find_target_pairs(nums: list[int], target: int) -> list[tuple[int, int]]:
    """Find all complementary value pairs with O(n) time complexity."""
    seen = set()
    pairs = []
    
    for val in nums:
        complement = target - val
        if complement in seen:
            pairs.append((complement, val))
        seen.add(val)
        
    return pairs

# Optimized for DSA fundamentals and problem-solving benchmarks`;

  const handleCopy = () => {
    navigator.clipboard.writeText(pythonSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="problem-solving" className="py-20 sm:py-28 relative bg-[#08090D] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[300px] bg-[#9B7CFF]/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-[#9B7CFF]/20 text-[#9B7CFF] text-xs font-mono mb-4">
            <Binary className="w-3.5 h-3.5" />
            <span>DATA STRUCTURES & ALGORITHMS</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Problem Solving & Coding<span className="text-[#9B7CFF]">.</span>
          </h2>
          <p className="text-zinc-400 text-base max-w-2xl mt-4 leading-relaxed">
            Practicing algorithmic problem-solving using Python, focusing on efficient solutions and programming fundamentals.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#9B7CFF] to-[#55D6E8] rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Topics Grid & Platform Highlights */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Topics Card */}
            <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-white/5">
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-white/5">
                <Code className="w-5 h-5 text-[#55D6E8]" />
                <h3 className="font-heading font-semibold text-lg text-white">
                  Core Algorithmic Topics
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2.5">
                {CODING_TOPICS.map((topic, i) => (
                  <div
                    key={topic}
                    className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium glass-pill text-zinc-300 hover:text-white hover:border-[#9B7CFF]/50 transition-all flex items-center gap-2 group cursor-default"
                  >
                    <span className="font-mono text-[10px] text-[#9B7CFF] font-semibold">
                      {(i + 1).toString().padStart(2, '0')}
                    </span>
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Platforms Card: LeetCode & HackerRank */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl glass-panel border border-white/5 hover:border-amber-400/30 transition-all group">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center font-bold text-sm">
                    LC
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500 uppercase">Coding Platform</span>
                </div>
                <h4 className="font-heading font-semibold text-white text-base">LeetCode</h4>
                <p className="text-xs text-zinc-400 mt-1">
                  Practicing array manipulation, dynamic programming patterns, trees, graphs, and two-pointer techniques in Python.
                </p>
                <div className="mt-3 text-[11px] font-mono text-amber-300/80 flex items-center gap-1.5">
                  <Zap className="w-3 h-3 text-amber-400" />
                  <span>Algorithmic Rigor</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl glass-panel border border-white/5 hover:border-emerald-400/30 transition-all group">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 flex items-center justify-center font-bold text-sm">
                    HR
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500 uppercase">Coding Platform</span>
                </div>
                <h4 className="font-heading font-semibold text-white text-base">HackerRank</h4>
                <p className="text-xs text-zinc-400 mt-1">
                  Practicing core language fundamentals, object-oriented design, modular programming, and algorithmic challenges.
                </p>
                <div className="mt-3 text-[11px] font-mono text-emerald-300/80 flex items-center gap-1.5">
                  <Flame className="w-3 h-3 text-emerald-400" />
                  <span>Problem Solving Focus</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Code Terminal Window */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl glass-panel border border-white/10 overflow-hidden shadow-2xl">
              
              {/* Window Header */}
              <div className="bg-[#121520] px-4 py-3 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-xs font-mono text-zinc-400">solution.py</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="px-2.5 py-1 rounded text-[11px] font-mono text-zinc-400 hover:text-white hover:bg-white/5 transition-colors flex items-center gap-1"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <span>Copy</span>
                  )}
                </button>
              </div>

              {/* Code Editor Body */}
              <div className="p-4 sm:p-5 bg-[#0A0C14] font-mono text-xs sm:text-[13px] leading-relaxed text-zinc-300 overflow-x-auto">
                <pre className="text-zinc-300">
                  <code>{pythonSnippet}</code>
                </pre>
              </div>

              {/* Terminal Footer Info */}
              <div className="bg-[#10121B] px-4 py-2.5 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Python 3.12 • Time: O(N)</span>
                </div>
                <span>Clean Architecture</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
