'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Globe, Building2, GraduationCap, Link2 } from 'lucide-react';

export function Collaborators() {
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
          </div>

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
                {ecosystem.government.map((org, i) => {
                  const imageData = PlaceHolderImages.find(img => img.id === org.id);
                  return (
                    <div key={i} className="p-4 glass-card rounded-2xl border-white/5 hover:border-primary/20 transition-all group/item">
                      <div className="h-10 relative grayscale opacity-40 group-hover/item:grayscale-0 group-hover/item:opacity-100 transition-all mb-2">
                        {imageData && <Image src={imageData.imageUrl} alt={org.name} fill className="object-contain" />}
                      </div>
                      <p className="text-[8px] font-black text-white/40 group-hover/item:text-white transition-colors uppercase leading-tight text-center">{org.name}</p>
                    </div>
                  );
                })}
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
                {ecosystem.industry.map((org, i) => {
                  const imageData = PlaceHolderImages.find(img => img.id === org.id);
                  return (
                    <div key={i} className="p-4 glass-card rounded-2xl border-white/5 hover:border-accent/20 transition-all group/item">
                      <div className="h-10 relative grayscale opacity-40 group-hover/item:grayscale-0 group-hover/item:opacity-100 transition-all mb-2">
                        {imageData && <Image src={imageData.imageUrl} alt={org.name} fill className="object-contain" />}
                      </div>
                      <p className="text-[8px] font-black text-white/40 group-hover/item:text-white transition-colors uppercase leading-tight text-center">{org.name}</p>
                    </div>
                  );
                })}
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
                {ecosystem.academia.map((org, i) => {
                  const imageData = PlaceHolderImages.find(img => img.id === org.id);
                  return (
                    <div key={i} className="p-4 glass-card rounded-2xl border-white/5 hover:border-indigo-400/20 transition-all group/item">
                      <div className="h-10 relative grayscale opacity-40 group-hover/item:grayscale-0 group-hover/item:opacity-100 transition-all mb-2">
                        {imageData && <Image src={imageData.imageUrl} alt={org.name} fill className="object-contain" />}
                      </div>
                      <p className="text-[8px] font-black text-white/40 group-hover/item:text-white transition-colors uppercase leading-tight text-center">{org.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Strategic Web Visualization - Structured version */}
          <div className="relative py-20 px-8 glass-card rounded-[3rem] border-white/5 overflow-hidden">
            <div className="absolute inset-0 bg-primary/[0.02] -z-10" />
            <div className="flex flex-col items-center justify-center text-center space-y-12">
              <div className="flex items-center gap-4 text-white/20">
                <Link2 className="w-4 h-4" />
                <span className="text-[9px] font-black uppercase tracking-[0.5em]">Neural Network Integration</span>
              </div>
              
              <div className="relative w-full max-w-4xl h-[400px]">
                {/* Central Hub */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-24 h-24 rounded-full bg-background border border-primary/40 flex items-center justify-center shadow-[0_0_50px_rgba(38,99,217,0.2)]">
                    <p className="text-[10px] font-black text-white italic uppercase">Global 2026</p>
                  </div>
                </div>

                {/* Categories Nodes */}
                <div className="absolute left-[20%] top-[30%] text-center space-y-2 z-10 animate-float">
                  <div className="w-16 h-16 rounded-2xl glass-card border-primary/20 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-[8px] font-black text-primary uppercase">Govt</p>
                </div>

                <div className="absolute right-[20%] top-[30%] text-center space-y-2 z-10 animate-float" style={{ animationDelay: '-2s' }}>
                  <div className="w-16 h-16 rounded-2xl glass-card border-accent/20 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-accent" />
                  </div>
                  <p className="text-[8px] font-black text-accent uppercase">Industry</p>
                </div>

                <div className="absolute left-1/2 bottom-[10%] -translate-x-1/2 text-center space-y-2 z-10 animate-float" style={{ animationDelay: '-4s' }}>
                  <div className="w-16 h-16 rounded-2xl glass-card border-indigo-400/20 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-indigo-400" />
                  </div>
                  <p className="text-[8px] font-black text-indigo-400 uppercase">Research</p>
                </div>

                {/* Connection Lines (SVG) */}
                <svg className="absolute inset-0 w-full h-full -z-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(38,99,217,0)" />
                      <stop offset="50%" stopColor="rgba(38,99,217,0.3)" />
                      <stop offset="100%" stopColor="rgba(38,99,217,0)" />
                    </linearGradient>
                  </defs>
                  <path d="M 450,200 L 250,150" stroke="url(#line-grad)" strokeWidth="1" fill="none" className="animate-pulse" />
                  <path d="M 450,200 L 650,150" stroke="url(#line-grad)" strokeWidth="1" fill="none" className="animate-pulse" />
                  <path d="M 450,200 L 450,320" stroke="url(#line-grad)" strokeWidth="1" fill="none" className="animate-pulse" />
                  {/* Subtle smaller connection lines */}
                  <path d="M 250,150 L 200,80" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" />
                  <path d="M 250,150 L 150,180" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" />
                  <path d="M 650,150 L 700,80" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" />
                  <path d="M 650,150 L 750,180" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}