
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
    <section id="collaborators" className="py-24 relative bg-transparent overflow-hidden border-t border-white/5">
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
            <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em]">
              Professional collaboration with the following institutions
            </p>
          </div>

          <div className="space-y-20">
            {/* Government Cluster */}
            <div className="space-y-10">
              <div className="flex items-center gap-4 border-b border-white/5 pb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white uppercase tracking-widest">Government</h3>
                  <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest">Public Policy & R&D Partners</p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
                {ecosystem.government.map((org, i) => {
                  const logo = PlaceHolderImages.find(img => img.id === org.logoId);
                  return (
                    <div key={i} className="group glass-card rounded-[2rem] p-6 border-white/5 hover:border-primary/30 transition-all duration-500 flex flex-col items-center text-center space-y-4">
                      <div className="relative w-full aspect-[2/1] bg-white/[0.02] rounded-2xl overflow-hidden border border-white/5 p-4 flex items-center justify-center">
                        {logo && (
                          <Image 
                            src={logo.imageUrl} 
                            alt={org.name}
                            fill
                            className="object-contain p-4 filter grayscale group-hover:grayscale-0 transition-all duration-500"
                            data-ai-hint={logo.imageHint}
                          />
                        )}
                      </div>
                      <p className="text-[10px] font-black text-white/40 group-hover:text-white transition-colors uppercase leading-tight tracking-wider">{org.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Industry Cluster */}
            <div className="space-y-10">
              <div className="flex items-center gap-4 border-b border-white/5 pb-6">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center border border-accent/20">
                  <Building2 className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white uppercase tracking-widest">Industry & Global</h3>
                  <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest">Commercial & Enterprise Infrastructure</p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {ecosystem.industry.map((org, i) => {
                  const logo = PlaceHolderImages.find(img => img.id === org.logoId);
                  return (
                    <div key={i} className="group glass-card rounded-[2rem] p-6 border-white/5 hover:border-accent/30 transition-all duration-500 flex flex-col items-center text-center space-y-4">
                      <div className="relative w-full aspect-square bg-white/[0.02] rounded-2xl overflow-hidden border border-white/5 p-4 flex items-center justify-center">
                        {logo && (
                          <Image 
                            src={logo.imageUrl} 
                            alt={org.name}
                            fill
                            className="object-contain p-4 filter grayscale group-hover:grayscale-0 transition-all duration-500"
                            data-ai-hint={logo.imageHint}
                          />
                        )}
                      </div>
                      <p className="text-[9px] font-black text-white/40 group-hover:text-white transition-colors uppercase leading-tight tracking-wider">{org.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Academia Cluster */}
            <div className="space-y-10">
              <div className="flex items-center gap-4 border-b border-white/5 pb-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                  <GraduationCap className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white uppercase tracking-widest">Academia & Clinical</h3>
                  <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest">Research & Scientific Development</p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {ecosystem.academia.map((org, i) => {
                  const logo = PlaceHolderImages.find(img => img.id === org.logoId);
                  return (
                    <div key={i} className="group glass-card rounded-[2rem] p-8 border-white/5 hover:border-indigo-400/30 transition-all duration-500 flex flex-col items-center text-center space-y-6">
                      <div className="relative w-full aspect-[3/1] bg-white/[0.02] rounded-2xl overflow-hidden border border-white/5 p-4 flex items-center justify-center">
                        {logo && (
                          <Image 
                            src={logo.imageUrl} 
                            alt={org.name}
                            fill
                            className="object-contain p-6 filter grayscale group-hover:grayscale-0 transition-all duration-500"
                            data-ai-hint={logo.imageHint}
                          />
                        )}
                      </div>
                      <p className="text-xs font-black text-white/40 group-hover:text-white transition-colors uppercase leading-tight tracking-widest">{org.name}</p>
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
