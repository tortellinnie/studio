
'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';

export function Collaborators() {
  const partners = [
    // Government
    { name: "DOST Philippines", logoId: "logo-dost", url: "https://www.dost.gov.ph/" },
    { name: "DICT Philippines", logoId: "logo-dict", url: "https://dict.gov.ph/" },
    { name: "Quezon City Government", logoId: "logo-qc", url: "https://quezoncity.gov.ph/" },
    { name: "NBDB-Philippines", logoId: "logo-nbdb", url: "https://books.gov.ph/" },
    { name: "DTI Philippines", logoId: "logo-dti", url: "https://www.dti.gov.ph/" },
    { name: "SK Commonwealth", logoId: "logo-sk", url: "https://www.facebook.com/skcommonwealthofficial/" },
    { name: "NCR Alliance of DOST Scholars", logoId: "logo-nads", url: "https://www.facebook.com/NCRAllianceOfDOSTScholars/" },
    { name: "Department of Agriculture", logoId: "logo-da", url: "https://www.da.gov.ph/" },
    { name: "Philippine Statistics Authority", logoId: "logo-psa", url: "https://psa.gov.ph/" },
    // Industry
    { name: "Procter & Gamble (P&G)", logoId: "logo-png", url: "https://ph.pg.com/" },
    { name: "PLDT-Smart Communications", logoId: "logo-pldtsmart", url: "https://pldt.com.ph/" },
    { name: "EMC Global (Japan)", logoId: "logo-emc", url: "https://emc-g.com/" },
    { name: "National Alliance of Reading Advocates (NARA)", logoId: "logo-nara", url: "https://www.facebook.com/ReadingAdvocatesPH/" },
    // Academia
    { name: "EAMC Dept. of Neurosciences", logoId: "logo-eamc", url: "https://eamc.doh.gov.ph/" },
    { name: "FEU Tech Library", logoId: "logo-lib", url: "https://www.feutech.edu.ph/facilities/library" }
  ];

  return (
    <section id="collaborators" className="py-32 relative bg-transparent overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-24 text-center space-y-4">
            <Badge className="bg-white/5 text-white/40 border-white/10 px-4 py-1.5 rounded-full font-black tracking-widest uppercase text-[10px] mb-2">
              Institutional Network
            </Badge>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white italic uppercase tracking-tighter leading-none animate-in fade-in slide-in-from-bottom-8 duration-1000">
              Strategic <br className="hidden md:block" /> Partnerships.
            </h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-12 md:gap-x-12 md:gap-y-16 max-w-5xl mx-auto">
            {partners.map((org, i) => {
              const logo = PlaceHolderImages.find(img => img.id === org.logoId);
              return (
                <a 
                  key={i} 
                  href={org.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-20 h-20 md:w-32 md:h-32 transition-all duration-500 hover:scale-125"
                  title={org.name}
                >
                  {logo && (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image 
                        src={`${logo.imageUrl}?v=2`} 
                        alt={org.name}
                        fill
                        className="object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-500"
                        data-ai-hint={logo.imageHint}
                      />
                    </div>
                  )}
                  {/* Subtle Glow Effect on Hover */}
                  <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                </a>
              );
            })}
          </div>

          <div className="mt-24 text-center">
            <p className="text-white/20 text-[9px] font-black uppercase tracking-[0.4em]">
              Global Innovation & Technical Advocacy Ecosystem
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
