
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

  // Hub nodes for the neural map
  const hubNodes = [
    { id: 'logo-aws', label: 'AWS', angle: 0 },
    { id: 'logo-google-cloud', label: 'Google Cloud', angle: 45 },
    { id: 'logo-p&g', label: 'P&G', angle: 90 },
    { id: 'logo-microsoft', label: 'Microsoft', angle: 135 },
    { id: 'logo-github', label: 'GitHub', angle: 180 },
    { id: 'logo-vercel', label: 'Vercel', angle: 225 },
    { id: 'logo-dict', label: 'DICT', angle: 270 },
    { id: 'logo-dost', label: 'DOST', angle: 315 },
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
                  Visualizing the neural connections between technical partners and global impact hubs.
                </p>
              </div>
              
              <div className="relative h-[600px] w-full max-w-5xl flex items-center justify-center scale-75 lg:scale-100">
                 {/* Neural Connection Lines (SVG) */}
                 <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 1000 600">
                    <defs>
                      <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="white" stopOpacity="0" />
                        <stop offset="50%" stopColor="white" stopOpacity="1" />
                        <stop offset="100%" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    
                    {hubNodes.map((node, i) => {
                      const angle = (node.angle * Math.PI) / 180;
                      const radius = 240;
                      const x = 500 + Math.cos(angle) * radius;
                      const y = 300 + Math.sin(angle) * radius;
                      
                      const pathCenter = `M500,300 L${x},${y}`;
                      const nextNode = hubNodes[(i + 1) % hubNodes.length];
                      const nextAngle = (nextNode.angle * Math.PI) / 180;
                      const nextX = 500 + Math.cos(nextAngle) * radius;
                      const nextY = 300 + Math.sin(nextAngle) * radius;
                      const pathNext = `M${x},${y} L${nextX},${nextY}`;

                      return (
                        <g key={`lines-${i}`}>
                          <path d={pathCenter} stroke="url(#lineGrad)" strokeWidth="0.5" fill="none" className="animate-pulse" />
                          <path d={pathNext} stroke="white" strokeWidth="0.2" fill="none" strokeDasharray="5,5" className="opacity-30" />
                        </g>
                      );
                    })}

                    <circle cx="500" cy="300" r="280" stroke="white" strokeWidth="0.5" fill="none" strokeDasharray="1,20" className="animate-[spin_120s_linear_infinite]" />
                    <circle cx="500" cy="300" r="240" stroke="white" strokeWidth="0.5" fill="none" strokeDasharray="5,15" className="animate-[spin_60s_linear_infinite]" />
                 </svg>

                 {/* Center Hub */}
                 <div className="relative z-20 w-40 h-40 rounded-full glass-card border-white/10 flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.05)] animate-pulse bg-[#02040a]/80 backdrop-blur-xl">
                    <div className="text-center">
                       <p className="text-[10px] font-black text-white/40 uppercase tracking-widest leading-tight">Impact</p>
                       <p className="text-primary font-black text-2xl italic leading-tight">2026</p>
                       <p className="text-[10px] font-black text-white/40 uppercase tracking-widest leading-tight">Global</p>
                    </div>
                 </div>

                 {/* Floating Nodes (Collaborator Logos) */}
                 {hubNodes.map((node, i) => {
                    const imageData = PlaceHolderImages.find(img => img.id === node.id);
                    const angle = (node.angle * Math.PI) / 180;
                    const radius = 240;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;

                    return (
                      <div 
                        key={node.id}
                        className="absolute w-28 h-20 rounded-2xl overflow-hidden glass-card border-white/10 shadow-2xl group/node hover:scale-110 transition-all duration-500 bg-white/[0.02] z-10"
                        style={{
                          left: `calc(50% + ${x}px)`,
                          top: `calc(50% + ${y}px)`,
                          transform: 'translate(-50%, -50%)',
                          animation: `float-node ${8 + i}s ease-in-out infinite alternate`
                        }}
                      >
                        {imageData && (
                          <div className="relative w-full h-full p-4">
                            <Image
                              src={imageData.imageUrl}
                              alt={node.label}
                              fill
                              className="object-contain p-4 opacity-40 group-hover/node:opacity-100 transition-opacity duration-500 grayscale group-hover/node:grayscale-0"
                              data-ai-hint={imageData.imageHint}
                            />
                            <div className="absolute inset-x-0 bottom-1 flex justify-center opacity-0 group-hover/node:opacity-100 transition-opacity">
                              <span className="text-[6px] font-black text-white/60 uppercase tracking-widest">{node.label}</span>
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
        @keyframes float-node {
          0% { transform: translate(-50%, -55%); }
          100% { transform: translate(-50%, -45%); }
        }
      `}</style>
    </section>
  );
}
