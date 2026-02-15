'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Globe, Building2, GraduationCap, Link2, MousePointer2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Collaborators() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const ecosystem = {
    government: [
      { name: "DOST Philippines", id: "logo-dost" },
      { name: "DICT Philippines", id: "logo-dict" },
      { name: "Quezon City Government", id: "logo-qc" },
      { name: "NBDB-Philippines", id: "logo-nbdb" },
      { name: "National Library of the Philippines", id: "logo-nbdb" },
      { name: "DTI Philippines", id: "logo-dict" },
      { name: "SK Commonwealth", id: "logo-qc" },
      { name: "NCR Alliance of DOST Scholars", id: "logo-dost" }
    ],
    industry: [
      { name: "Procter & Gamble (P&G)", id: "logo-p&g" },
      { name: "PLDT", id: "logo-pldt" },
      { name: "Smart Communications", id: "logo-pldt" },
      { name: "Microsoft Philippines", id: "logo-microsoft" },
      { name: "EMC Global (Japan)", id: "logo-microsoft" },
      { name: "C-RAM Solutions", id: "logo-pldt" }
    ],
    academia: [
      { name: "FEU Institute of Technology", id: "logo-feu" },
      { name: "EAMC Dept. of Neurosciences", id: "logo-feu" },
      { name: "DOST-PCHRD", id: "logo-dost" }
    ]
  };

  const handleCategoryClick = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <section className="py-24 relative bg-transparent overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', 
             backgroundSize: '80px 80px' 
           }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto space-y-24">
          
          <div className="flex flex-col items-center text-center space-y-4">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1.5 rounded-full font-black tracking-widest uppercase text-[9px]">
              Institutional Infrastructure
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-black text-white italic uppercase tracking-tighter">Strategic Ecosystem.</h2>
            <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-2">
              <MousePointer2 className="w-3 h-3" /> Click nodes to explore connectivity
            </p>
          </div>

          {/* Partner Grid - Keeping as static reference */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Government Cluster */}
            <div className="space-y-8 group">
              <div className="flex items-center gap-3 border-b border-white/5 pb-6">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                  <Globe className="w-5 h-5 text-white/40 group-hover:text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-white uppercase tracking-widest">Government</h3>
                  <p className="text-[10px] text-white/30 font-bold uppercase">Public Policy & R&D</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {ecosystem.government.map((org, i) => (
                  <div key={i} className="p-4 glass-card rounded-2xl border-white/5 hover:border-primary/20 transition-all group/item">
                    <p className="text-[8px] font-black text-white/40 group-hover/item:text-white transition-colors uppercase leading-tight text-center">{org.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Industry Cluster */}
            <div className="space-y-8 group">
              <div className="flex items-center gap-3 border-b border-white/5 pb-6">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-all">
                  <Building2 className="w-5 h-5 text-white/40 group-hover:text-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-white uppercase tracking-widest">Industry & Global</h3>
                  <p className="text-[10px] text-white/30 font-bold uppercase">Commercial Innovation</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {ecosystem.industry.map((org, i) => (
                  <div key={i} className="p-4 glass-card rounded-2xl border-white/5 hover:border-accent/20 transition-all group/item">
                    <p className="text-[8px] font-black text-white/40 group-hover/item:text-white transition-colors uppercase leading-tight text-center">{org.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Academia Cluster */}
            <div className="space-y-8 group">
              <div className="flex items-center gap-3 border-b border-white/5 pb-6">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-indigo-500/20 transition-all">
                  <GraduationCap className="w-5 h-5 text-white/40 group-hover:text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-white uppercase tracking-widest">Academia & Clinical</h3>
                  <p className="text-[10px] text-white/30 font-bold uppercase">Scientific Research</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {ecosystem.academia.map((org, i) => (
                  <div key={i} className="p-4 glass-card rounded-2xl border-white/5 hover:border-indigo-400/20 transition-all group/item">
                    <p className="text-[8px] font-black text-white/40 group-hover/item:text-white transition-colors uppercase leading-tight text-center">{org.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Network Visualization */}
          <div className="relative py-32 px-8 glass-card rounded-[4rem] border-white/5 overflow-hidden">
            <div className="absolute inset-0 bg-primary/[0.01] -z-10" />
            <div className="flex flex-col items-center justify-center text-center space-y-12 h-[600px]">
              
              <div className="relative w-full max-w-5xl h-full">
                {/* Central Hub */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                  <div className="w-32 h-32 rounded-full bg-[#02040a] border border-primary/40 flex items-center justify-center shadow-[0_0_80px_rgba(38,99,217,0.3)] premium-glass">
                    <div className="text-center space-y-1">
                      <p className="text-[10px] font-black text-white italic uppercase leading-none">Global</p>
                      <p className="text-[14px] font-black text-primary italic uppercase leading-none">2026</p>
                    </div>
                  </div>
                </div>

                {/* Primary Category Nodes */}
                
                {/* Government Node */}
                <button 
                  onClick={() => handleCategoryClick('government')}
                  className={cn(
                    "absolute left-[15%] top-[25%] text-center space-y-3 z-20 group transition-all duration-700 hover:scale-110",
                    expandedCategory === 'government' ? "scale-110" : ""
                  )}
                >
                  <div className={cn(
                    "w-20 h-20 rounded-3xl glass-card border flex items-center justify-center transition-all duration-500",
                    expandedCategory === 'government' ? "bg-primary/20 border-primary shadow-[0_0_30px_rgba(38,99,217,0.4)]" : "border-white/10"
                  )}>
                    <Globe className={cn("w-8 h-8 transition-colors", expandedCategory === 'government' ? "text-white" : "text-white/20")} />
                  </div>
                  <p className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Government</p>
                </button>

                {/* Industry Node */}
                <button 
                  onClick={() => handleCategoryClick('industry')}
                  className={cn(
                    "absolute right-[15%] top-[25%] text-center space-y-3 z-20 group transition-all duration-700 hover:scale-110",
                    expandedCategory === 'industry' ? "scale-110" : ""
                  )}
                >
                  <div className={cn(
                    "w-20 h-20 rounded-3xl glass-card border flex items-center justify-center transition-all duration-500",
                    expandedCategory === 'industry' ? "bg-accent/20 border-accent shadow-[0_0_30px_rgba(71,208,235,0.4)]" : "border-white/10"
                  )}>
                    <Building2 className={cn("w-8 h-8 transition-colors", expandedCategory === 'industry' ? "text-white" : "text-white/20")} />
                  </div>
                  <p className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Industry</p>
                </button>

                {/* Research Node */}
                <button 
                  onClick={() => handleCategoryClick('academia')}
                  className={cn(
                    "absolute left-1/2 bottom-[15%] -translate-x-1/2 text-center space-y-3 z-20 group transition-all duration-700 hover:scale-110",
                    expandedCategory === 'academia' ? "scale-110" : ""
                  )}
                >
                  <div className={cn(
                    "w-20 h-20 rounded-3xl glass-card border flex items-center justify-center transition-all duration-500",
                    expandedCategory === 'academia' ? "bg-indigo-500/20 border-indigo-400 shadow-[0_0_30px_rgba(129,140,248,0.4)]" : "border-white/10"
                  )}>
                    <GraduationCap className={cn("w-8 h-8 transition-colors", expandedCategory === 'academia' ? "text-white" : "text-white/20")} />
                  </div>
                  <p className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Research</p>
                </button>

                {/* Branching Sub-nodes */}
                {expandedCategory && ecosystem[expandedCategory as keyof typeof ecosystem].map((org, i) => {
                  // Calculate position in a fan/circle around the parent
                  const angle = (i / (ecosystem[expandedCategory as keyof typeof ecosystem].length - 1)) * Math.PI - Math.PI/2;
                  const radius = 150;
                  
                  // Base parent positions
                  let px = expandedCategory === 'government' ? 15 : expandedCategory === 'industry' ? 85 : 50;
                  let py = expandedCategory === 'academia' ? 85 : 25;
                  
                  return (
                    <div 
                      key={i} 
                      className="absolute z-10 animate-in fade-in zoom-in duration-700"
                      style={{
                        left: `${px}%`,
                        top: `${py}%`,
                        transform: `translate(calc(-50% + ${Math.cos(angle) * radius}px), calc(-50% + ${Math.sin(angle) * radius}px))`
                      }}
                    >
                      <div className="px-4 py-2 rounded-xl glass-card border border-white/5 whitespace-nowrap bg-white/5 backdrop-blur-xl group hover:border-primary/40 transition-all">
                        <p className="text-[9px] font-black text-white/50 group-hover:text-white transition-colors uppercase tracking-widest">{org.name}</p>
                      </div>
                    </div>
                  );
                })}

                {/* Connection Lines (SVG) */}
                <svg className="absolute inset-0 w-full h-full -z-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="line-grad-gov" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(38,99,217,0)" />
                      <stop offset="50%" stopColor="rgba(38,99,217,0.3)" />
                      <stop offset="100%" stopColor="rgba(38,99,217,0)" />
                    </linearGradient>
                    <linearGradient id="line-grad-ind" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(71,208,235,0)" />
                      <stop offset="50%" stopColor="rgba(71,208,235,0.3)" />
                      <stop offset="100%" stopColor="rgba(71,208,235,0)" />
                    </linearGradient>
                  </defs>
                  
                  {/* Primary Connections */}
                  <path d="M 512,300 L 153,150" stroke="url(#line-grad-gov)" strokeWidth="1" fill="none" className="animate-pulse" />
                  <path d="M 512,300 L 870,150" stroke="url(#line-grad-ind)" strokeWidth="1" fill="none" className="animate-pulse" />
                  <path d="M 512,300 L 512,510" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" className="animate-pulse" />
                </svg>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}