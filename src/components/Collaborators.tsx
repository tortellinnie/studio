
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
      { name: "DTI Philippines", logoId: "logo-dti" },
      { name: "SK Commonwealth", logoId: "logo-sk" },
      { name: "NCR Alliance of DOST Scholars", logoId: "logo-nads" },
      { name: "Department of Agriculture", logoId: "logo-da" },
      { name: "Philippine Statistics Authority", logoId: "logo-psa" }
    ],
    industry: [
      { name: "Procter & Gamble (P&G)", logoId: "logo-png" },
      { name: "PLDT-Smart Communications", logoId: "logo-pldtsmart" },
      { name: "EMC Global (Japan)", logoId: "logo-emc" },
      { name: "National Alliance of Reading Advocates (NARA)", logoId: "logo-nara" }
    ],
    academia: [
      { name: "EAMC Dept. of Neurosciences", logoId: "logo-eamc" },
      { name: "FEU Tech Library", logoId: "logo-lib" }
    ]
  };

  return (
    <section id="collaborators" className="py-20 relative bg-transparent overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <Badge className="bg-white/5 text-white/30 border-white/10 px-3 py-1 rounded-full font-black tracking-widest uppercase text-[8px] mb-2">
              Institutional Network
            </Badge>
            <h2 className="text-xl font-black text-white italic uppercase tracking-tighter">Strategic Partnerships.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Government Cluster */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-white/5 pb-3">
                <Globe className="w-3 h-3 text-primary/40" />
                <h3 className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Government</h3>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {ecosystem.government.map((org, i) => {
                  const logo = PlaceHolderImages.find(img => img.id === org.logoId);
                  return (
                    <div key={i} className="group relative w-full aspect-square transition-all duration-300 hover:scale-110">
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
                  );
                })}
              </div>
            </div>

            {/* Industry Cluster */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-white/5 pb-3">
                <Building2 className="w-3 h-3 text-accent/40" />
                <h3 className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Industry & Global</h3>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {ecosystem.industry.map((org, i) => {
                  const logo = PlaceHolderImages.find(img => img.id === org.logoId);
                  return (
                    <div key={i} className="group relative w-full aspect-square transition-all duration-300 hover:scale-110">
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
                  );
                })}
              </div>
            </div>

            {/* Academia Cluster */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-white/5 pb-3">
                <GraduationCap className="w-3 h-3 text-white/20" />
                <h3 className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Academia & Clinical</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {ecosystem.academia.map((org, i) => {
                  const logo = PlaceHolderImages.find(img => img.id === org.logoId);
                  return (
                    <div key={i} className="group relative w-full aspect-square transition-all duration-300 hover:scale-110">
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
