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
    <section className="py-24 relative bg-transparent overflow-hidden border-t border-white/5">
      {/* Subtle Grid Background matching the reference */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', 
             backgroundSize: '80px 80px' 
           }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header matching the reference phrasing and style */}
          <div className="flex flex-col items-center text-center mb-20">
            <h3 className="text-white/40 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] leading-relaxed max-w-2xl">
              IN COLLABORATION WITH THE FOLLOWING LEADING GLOBAL AND LOCAL ORGANIZATIONS
            </h3>
          </div>

          {/* Clean Logo Grid matching the reference layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16 items-center justify-items-center">
            {organizations.map((org) => {
              const imageData = PlaceHolderImages.find(img => img.id === org.id);
              return (
                <div key={org.id} className="group relative grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all duration-700 hover:scale-110">
                  <div className="w-32 md:w-40 h-16 relative">
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
        </div>
      </div>
    </section>
  );
}
