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

  return (
    <section className="py-24 relative bg-transparent overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16 space-y-4">
            <p className="text-white/40 text-xs font-bold uppercase tracking-[0.3em]">
              In collaboration with the following Leading Global and Local Organizations
            </p>
          </div>

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

          <div className="mt-24 py-20 px-8 glass-card rounded-[4rem] border-white/5 overflow-hidden group">
            <div className="flex flex-col items-center text-center space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/5 bg-white/[0.01] text-[9px] font-black uppercase tracking-[0.3em] text-white/40">
                Strategic Ecosystem
              </div>
              <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter">Institutional Connectivity.</h3>
              
              <div className="relative h-[300px] w-full max-w-4xl">
                 <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 800 300">
                    <path d="M100,150 Q400,50 700,150" stroke="white" strokeWidth="1" fill="none" strokeDasharray="5,5" className="animate-[dash_20s_linear_infinite]" />
                    <circle cx="400" cy="150" r="100" stroke="white" strokeWidth="0.5" fill="none" />
                    <path d="M150,250 Q400,100 650,250" stroke="white" strokeWidth="1" fill="none" strokeDasharray="5,5" className="animate-[dash_15s_linear_reverse_infinite]" />
                 </svg>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full glass-card border-white/10 flex items-center justify-center shadow-2xl animate-pulse">
                       <span className="text-[10px] font-black text-white uppercase tracking-widest">Global 2026</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes dash {
          to { stroke-dashoffset: 200; }
        }
      `}</style>
    </section>
  );
}
