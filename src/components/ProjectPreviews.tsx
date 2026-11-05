import React, { useState } from 'react';
import { 
  ShieldAlert, 
  ShieldCheck, 
  CheckCircle, 
  Clock, 
  AlertTriangle, 
  TrendingUp, 
  BarChart3, 
  Search, 
  MapPin, 
  User, 
  Sparkles,
  ExternalLink,
  ChevronRight,
  Filter
} from 'lucide-react';

// Preview 1: CampusConnect Lost Item & Complaint Portal
export const CampusConnectPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'lost' | 'complaints'>('lost');

  return (
    <div className="w-full h-full min-h-[320px] bg-[#0C0E17] rounded-xl p-4 sm:p-5 flex flex-col justify-between border border-white/5 font-sans select-none">
      {/* Mini App Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-[#9B7CFF]/20 border border-[#9B7CFF]/40 flex items-center justify-center text-[#9B7CFF] font-bold text-xs">
            CC
          </div>
          <div>
            <div className="text-xs font-heading font-semibold text-white">CampusConnect Portal</div>
            <div className="text-[10px] text-zinc-500 font-mono">KL University Network</div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-lg border border-white/5">
          <button
            onClick={() => setActiveTab('lost')}
            className={`px-2.5 py-1 text-[11px] font-medium rounded-md transition-colors ${
              activeTab === 'lost' ? 'bg-[#9B7CFF]/20 text-[#9B7CFF]' : 'text-zinc-400 hover:text-white'
            }`}
          >
            Lost & Found (18)
          </button>
          <button
            onClick={() => setActiveTab('complaints')}
            className={`px-2.5 py-1 text-[11px] font-medium rounded-md transition-colors ${
              activeTab === 'complaints' ? 'bg-[#9B7CFF]/20 text-[#9B7CFF]' : 'text-zinc-400 hover:text-white'
            }`}
          >
            Complaints (6)
          </button>
        </div>
      </div>

      {/* Feed Content */}
      <div className="my-3 space-y-2.5 overflow-hidden">
        {activeTab === 'lost' ? (
          <>
            <div className="p-2.5 rounded-lg bg-[#141726] border border-white/5 flex items-center justify-between hover:border-[#9B7CFF]/30 transition-colors">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center text-xs font-mono">
                  CALC
                </div>
                <div>
                  <div className="text-xs font-medium text-white">Casio fx-991EX Calculator</div>
                  <div className="text-[10px] text-zinc-400">Library 2nd Floor, Desk 14 • 2h ago</div>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-400/15 text-amber-300 border border-amber-400/20">
                Pending Verification
              </span>
            </div>

            <div className="p-2.5 rounded-lg bg-[#141726] border border-white/5 flex items-center justify-between hover:border-[#9B7CFF]/30 transition-colors">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xs font-mono">
                  ID
                </div>
                <div>
                  <div className="text-xs font-medium text-white">Student ID Card (CSE Dept)</div>
                  <div className="text-[10px] text-zinc-400">Canteen Counter • Handed to Admin</div>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-400/15 text-emerald-300 border border-emerald-400/20">
                Claimed & Resolved
              </span>
            </div>
          </>
        ) : (
          <>
            <div className="p-2.5 rounded-lg bg-[#141726] border border-white/5 flex items-center justify-between">
              <div>
                <div className="text-xs font-medium text-white">Lab 402 AC Not Cooling</div>
                <div className="text-[10px] text-zinc-400">Category: Infrastructure • Status: In Progress</div>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-400/15 text-cyan-300 border border-cyan-400/20">
                Technician Assigned
              </span>
            </div>

            <div className="p-2.5 rounded-lg bg-[#141726] border border-white/5 flex items-center justify-between">
              <div>
                <div className="text-xs font-medium text-white">Projector HDMI Flicker in Hall 3</div>
                <div className="text-[10px] text-zinc-400">Category: AV Systems • Ticket #2841</div>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-400/15 text-purple-300 border border-purple-400/20">
                Scheduled Today
              </span>
            </div>
          </>
        )}
      </div>

      {/* Database & API State Tag */}
      <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-500">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>MongoDB Atlas Sync: Connected</span>
        </span>
        <span className="text-[#9B7CFF]">Express REST API</span>
      </div>
    </div>
  );
};

// Preview 2: AI Phishing & Threat Analyzer
export const PhishingAnalyzerPreview: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[320px] bg-[#0A0D14] rounded-xl p-4 sm:p-5 flex flex-col justify-between border border-white/5 font-sans select-none">
      {/* Top Security Banner */}
      <div className="flex items-center justify-between pb-3 border-b border-white/5">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-rose-400 animate-pulse" />
          <div>
            <div className="text-xs font-heading font-semibold text-white">AI Threat Intelligence Engine</div>
            <div className="text-[10px] text-zinc-400 font-mono">Powered by Google Gemini API</div>
          </div>
        </div>
        <div className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
          HIGH RISK (88%)
        </div>
      </div>

      {/* Threat Heuristic Breakdown */}
      <div className="my-3 space-y-2">
        <div className="p-2.5 rounded-lg bg-rose-950/20 border border-rose-500/20">
          <div className="text-[11px] font-medium text-rose-200 flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
            <span>Spoofed Domain & Deceptive URL Detected</span>
          </div>
          <p className="text-[10px] text-zinc-400 mt-1 font-mono">
            Origin: verify-account-sec-auth[.]info disguised as financial institution.
          </p>
        </div>

        <div className="p-2.5 rounded-lg bg-[#121624] border border-white/5">
          <div className="text-[11px] font-medium text-zinc-200 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Psychological Urgency Trigger</span>
          </div>
          <p className="text-[10px] text-zinc-400 mt-1">
            "Immediate suspension within 24 hours" phrase identified as social engineering tactic.
          </p>
        </div>
      </div>

      {/* Recommended Security Action */}
      <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono">
        <span className="text-zinc-400 flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Action: Block Domain & Quarantine</span>
        </span>
        <span className="text-cyan-400">Model: Gemini 2.0</span>
      </div>
    </div>
  );
};

// Preview 3: AI-Based Government Scheme Navigator
export const GovtSchemesPreview: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[320px] bg-[#0A0D15] rounded-xl p-4 sm:p-5 flex flex-col justify-between border border-white/5 font-sans select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-[#9B7CFF]/20 text-[#9B7CFF] flex items-center justify-center font-bold text-xs">
            AP
          </div>
          <div>
            <div className="text-xs font-heading font-semibold text-white">AP & Central Scheme Navigator</div>
            <div className="text-[10px] text-zinc-400 font-mono">ML Vector Cosine Similarity</div>
          </div>
        </div>
        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/20 text-purple-300 border border-purple-500/30">
          Streamlit App
        </span>
      </div>

      {/* Matched Scheme Cards */}
      <div className="my-3 space-y-2">
        <div className="p-2.5 rounded-lg bg-[#141829] border border-[#9B7CFF]/30 flex items-center justify-between">
          <div>
            <div className="text-xs font-medium text-white flex items-center gap-1.5">
              <span>Jagananna Vidya Deevena</span>
              <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                98% Match
              </span>
            </div>
            <div className="text-[10px] text-zinc-400 mt-0.5">
              Full Fee Reimbursement • Higher Education (B.Tech)
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-zinc-500" />
        </div>

        <div className="p-2.5 rounded-lg bg-[#141829] border border-white/5 flex items-center justify-between">
          <div>
            <div className="text-xs font-medium text-white flex items-center gap-1.5">
              <span>PM Vidya Lakshmi Educational Loan</span>
              <span className="text-[9px] px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 font-mono">
                92% Match
              </span>
            </div>
            <div className="text-[10px] text-zinc-400 mt-0.5">
              Subsidized Interest • Technical Education Support
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-zinc-500" />
        </div>
      </div>

      {/* Footer ML metrics */}
      <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-500">
        <span className="text-zinc-400">Cosine Similarity Ranking</span>
        <span className="text-[#9B7CFF]">Scikit-learn + Pandas</span>
      </div>
    </div>
  );
};

// Preview 4: E-Commerce Sales Analytics Dashboard (Power BI)
export const PowerBIAnalyticsPreview: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[320px] bg-[#0B0E16] rounded-xl p-4 sm:p-5 flex flex-col justify-between border border-white/5 font-sans select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold text-xs">
            BI
          </div>
          <div>
            <div className="text-xs font-heading font-semibold text-white">Sales & Revenue Intelligence</div>
            <div className="text-[10px] text-zinc-400 font-mono">Power BI Embedded Service</div>
          </div>
        </div>
        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-400/15 text-amber-300 border border-amber-400/20">
          Executive View
        </span>
      </div>

      {/* KPI Cards & Simulated Visuals */}
      <div className="my-2.5 space-y-2.5">
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2.5 rounded-lg bg-[#131726] border border-white/5">
            <div className="text-[10px] font-mono text-zinc-400">Total Net Revenue</div>
            <div className="text-base font-bold text-white mt-0.5 font-heading">\$2,482,900</div>
            <div className="text-[9px] text-emerald-400 font-mono mt-0.5 flex items-center gap-1">
              <TrendingUp className="w-2.5 h-2.5" />
              <span>+18.4% YoY</span>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-[#131726] border border-white/5">
            <div className="text-[10px] font-mono text-zinc-400">Avg Order Value</div>
            <div className="text-base font-bold text-white mt-0.5 font-heading">\$142.50</div>
            <div className="text-[9px] text-cyan-400 font-mono mt-0.5 flex items-center gap-1">
              <span>+5.2% Margin</span>
            </div>
          </div>
        </div>

        {/* Mini simulated visual chart bars */}
        <div className="p-2.5 rounded-lg bg-[#131726] border border-white/5">
          <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 mb-2">
            <span>Regional Sales Distribution</span>
            <span>SQL Relational Seed</span>
          </div>
          <div className="space-y-1.5">
            <div>
              <div className="flex justify-between text-[9px] text-zinc-300 mb-0.5">
                <span>North Zone (Electronics)</span>
                <span className="text-[#55D6E8]">42%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                <div className="h-full bg-[#55D6E8] rounded-full w-[42%]" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[9px] text-zinc-300 mb-0.5">
                <span>South Zone (Apparel & Home)</span>
                <span className="text-[#9B7CFF]">35%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                <div className="h-full bg-[#9B7CFF] rounded-full w-[35%]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Tech Details */}
      <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-500">
        <span>MySQL Schema • Slicers & DAX</span>
        <span className="text-amber-400">Live Dashboard</span>
      </div>
    </div>
  );
};
