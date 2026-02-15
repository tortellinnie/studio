
'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Collaborators() {
  const organizations = [
    { id: 'logo-aws', label: 'AWS' },
    { id: 'logo-google-cloud', label: 'Google Cloud' },
    { id: 'logo-vercel', label: 'Vercel' },
    { id: 'logo-github', label: 'GitHub' },
    { id: 'logo-p&g', label: 'P&G' },
    { id: 'logo-microsoft', label: 'Microsoft' },
    { id: 'logo-dict', label: 'DICT' },
    { id: 'logo-dost', label: 'DOST' },
  ];

  const hubNodes = [
    { id: 'hub-agriculture', label: 'Agriculture', angle: 45 },
    { id: 'hub-healthcare', label: 'Healthcare', angle: 135 },
    { id: 'hub-edutech', label: 'EduTech', angle: 225 },
    { id: 'hub-automation', label: 'Automation', angle: 315 },
  ];

  return (
    <section className="py-24 relative bg-transparent overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16 space-y-4">
            <p className="text-white/40 text-xs font-bold uppercase tracking-[0.3em]">
              In collaboration with the following Leading Global and Local Organizations
            </p>
          </div>

          {/* Logo Grid (List Form) */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-12 items-center justify-items-center opacity-40 hover:opacity-100 transition-all duration-1000">
            {organizations.map((org) => {
              const imageData = PlaceHolderImages.find(img => img.id === org.id);
              return (
                <div key={org.id} className="group relative grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110">
                  <div className="w-40 h-16 relative">
                    {imageData && (
                      <Image
                        src={imageData.imageUrl}
                        alt={org.label}
                        fill
                        className="object-contain"
                        data-ai-hint={imageData.imageHint}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Strategic Ecosystem (Neural Web) */}
          <div className="mt-24 py-24 px-8 glass-card rounded-[4rem] border-white/5 overflow-hidden group">
            <div className="flex flex-col items-center text-center space-y-12">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/5 bg-white/[0.01] text-[9px] font-black uppercase tracking-[0.3em] text-white/40">
                  Strategic Ecosystem
                </div>
                <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter">Institutional Connectivity.</h3>
                <p className="text-muted-foreground text-sm font-medium max-w-lg mx-auto leading-relaxed">
                  Mapping the intersections between technology, social impact, and global institutional support.
                </p>
              </div>
              
              <div className="relative h-[500px] w-full max-w-4xl flex items-center justify-center">
                 {/* Neural Connection Lines (SVG) */}
                 <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 800 500">
                    <defs>
                      <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="white" stopOpacity="0" />
                        <stop offset="50%" stopColor="white" stopOpacity="1" />
                        <stop offset="100%" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M400,250 L200,100" stroke="url(#lineGrad)" strokeWidth="1" fill="none" className="animate-pulse" />
                    <path d="M400,250 L600,100" stroke="url(#lineGrad)" strokeWidth="1" fill="none" className="animate-pulse" />
                    <path d="M400,250 L200,400" stroke="url(#lineGrad)" strokeWidth="1" fill="none" className="animate-pulse" />
                    <path d="M400,250 L600,400" stroke="url(#lineGrad)" strokeWidth="1" fill="none" className="animate-pulse" />
                    {/* Pulsing ring */}
                    <circle cx="400" cy="250" r="150" stroke="white" strokeWidth="0.5" fill="none" strokeDasharray="5,10" className="animate-[spin_60s_linear_infinite]" />
                 </svg>

                 {/* Center Hub */}
                 <div className="relative z-10 w-32 h-32 rounded-full glass-card border-white/10 flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.05)] animate-pulse">
                    <div className="text-center">
                       <p className="text-[10px] font-black text-white uppercase tracking-widest leading-tight">Global</p>
                       <p className="text-primary font-black text-xl italic leading-tight">2026</p>
                    </div>
                 </div>

                 {/* Floating Nodes */}
                 {hubNodes.map((node, i) => {
                    const imageData = PlaceHolderImages.find(img => img.id === node.id);
                    // Calculate positions based on angle
                    const angle = (node.angle * Math.PI) / 180;
                    const radius = 220;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;

                    return (
                      <div 
                        key={node.id}
                        className="absolute w-24 h-24 rounded-2xl overflow-hidden glass-card border-white/10 shadow-2xl group/node hover:scale-110 transition-transform duration-500"
                        style={{
                          transform: `translate(${x}px, ${y}px)`,
                          animation: `float ${6 + i}s ease-in-out infinite alternate`
                        }}
                      >
                        {imageData && (
                          <div className="relative w-full h-full">
                            <Image
                              src={imageData.imageUrl}
                              alt={node.label}
                              fill
                              className="object-cover opacity-30 group-hover/node:opacity-60 transition-opacity"
                              data-ai-hint={imageData.imageHint}
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover/node:bg-transparent transition-colors">
                              <span className="text-[8px] font-black text-white uppercase tracking-widest">{node.label}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                 })}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes float {
          from { transform: translate(var(--tw-translate-x), calc(var(--tw-translate-y) - 10px)); }
          to { transform: translate(var(--tw-translate-x), calc(var(--tw-translate-y) + 10px)); }
        }
      `}</style>
    </section>
  );
}
