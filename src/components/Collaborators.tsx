'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Globe, Building2, GraduationCap } from 'lucide-react';

export function Collaborators() {
  const ecosystem = {
    government: [
      { name: "DOST Philippines", logoId: "logo-dost" },
      { name: "DICT Philippines", logoId: "logo-dict" },
      { name: "Quezon City Government", logoId: "logo-qc" },
      { name: "NBDB-Philippines", logoId: "logo-nbdb" },
      { name: "National Library of the Philippines", logoId: "logo-nbdb" },
      { name: "DTI Philippines", logoId: "logo-dti" },
      { name: "SK Commonwealth", logoId: "logo-qc" },
      { name: "NCR Alliance of DOST Scholars", logoId: "logo-dost" }
    ],
    industry: [
      { name: "Procter & Gamble (P&G)", logoId: "logo-p&g" },
      { name: "PLDT", logoId: "logo-pldt" },
      { name: "Smart Communications", logoId: "logo-smart" },
      { name: "Microsoft Philippines", logoId: "logo-microsoft" },
      { name: "EMC Global (Japan)", logoId: "logo-emc" },
      { name: "C-RAM Solutions", logoId: "logo-cram" }
    ],
    academia: [
      { name: "FEU Institute of Technology", logoId: "logo-feu" },
      { name: "EAMC Dept. of Neurosciences", logoId: "logo-eamc" },
      { name: "DOST-PCHRD", logoId: "logo-pchrd" }
    ]
  };

  return (
    <section id="collaborators" className="py-16 relative bg-transparent overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', 
             backgroundSize: '60px 60px' 
           }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          
          <div className="flex flex-col items-center text-center space-y-3">
            <Badge className="bg-white/5 text-white/40 border-white/10 px-3 py-1 rounded-full font-black tracking-widest uppercase text-[8px]">
              Institutional Infrastructure
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-black text-white italic uppercase tracking-tighter">Strategic Ecosystem.</h2>
          </div>

          <div className="space-y-12">
            {/* Government Cluster */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                <Globe className="w-4 h-4 text-primary/60" />
                <h3 className="text-xs font-black text-white/60 uppercase tracking-[0.3em]">Government</h3>
              </div>
              <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                {ecosystem.government.map((org, i) => {
                  const logo = PlaceHolderImages.find(img => img.id === org.logoId);
                  return (
                    <div key={i} className="group flex flex-col items-center gap-2 opacity-40 hover:opacity-100 transition-opacity duration-500">
                      <div className="relative w-full aspect-square grayscale group-hover:grayscale-0 transition-all duration-500">
                        {logo && (
                          <Image 
                            src={logo.imageUrl} 
                            alt={org.name}
                            fill
                            className="object-contain"
                            data-ai-hint={logo.imageHint}
                          />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Industry Cluster */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                <Building2 className="w-4 h-4 text-accent/60" />
                <h3 className="text-xs font-black text-white/60 uppercase tracking-[0.3em]">Industry & Global</h3>
              </div>
              <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                {ecosystem.industry.map((org, i) => {
                  const logo = PlaceHolderImages.find(img => img.id === org.logoId);
                  return (
                    <div key={i} className="group flex flex-col items-center gap-2 opacity-40 hover:opacity-100 transition-opacity duration-500">
                      <div className="relative w-full aspect-square grayscale group-hover:grayscale-0 transition-all duration-500">
                        {logo && (
                          <Image 
                            src={logo.imageUrl} 
                            alt={org.name}
                            fill
                            className="object-contain"
                            data-ai-hint={logo.imageHint}
                          />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Academia Cluster */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                <GraduationCap className="w-4 h-4 text-white/30" />
                <h3 className="text-xs font-black text-white/60 uppercase tracking-[0.3em]">Academia & Clinical</h3>
              </div>
              <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                {ecosystem.academia.map((org, i) => {
                  const logo = PlaceHolderImages.find(img => img.id === org.logoId);
                  return (
                    <div key={i} className="group flex flex-col items-center gap-2 opacity-40 hover:opacity-100 transition-opacity duration-500">
                      <div className="relative w-full aspect-square grayscale group-hover:grayscale-0 transition-all duration-500">
                        {logo && (
                          <Image 
                            src={logo.imageUrl} 
                            alt={org.name}
                            fill
                            className="object-contain"
                            data-ai-hint={logo.imageHint}
                          />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
