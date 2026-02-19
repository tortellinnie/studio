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
    <section id="collaborators" className="py-40 relative bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-6 mb-32">
          <Badge className="bg-white/5 text-white/40 border-white/10 px-4 py-1.5 rounded-full font-black tracking-widest uppercase text-[10px]">
            Institutional Network
          </Badge>
          <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-black text-white italic uppercase tracking-tighter leading-[0.85]">
            Strategic<br />Collaborations.
          </h2>
        </div>

        <div className="huddle-container">
          {partners.map((org, i) => {
            const logo = PlaceHolderImages.find(img => img.id === org.logoId);
            return (
              <a 
                key={i} 
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="huddle-item w-24 h-24 md:w-32 md:h-32 flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-700"
                title={org.name}
              >
                {logo && (
                  <div className="relative w-full h-full">
                    <Image 
                      src={`${logo.imageUrl}?v=2`} 
                      alt={org.name}
                      fill
                      className="object-contain filter brightness-110 contrast-125"
                      data-ai-hint={logo.imageHint}
                    />
                  </div>
                )}
              </a>
            );
          })}
        </div>

        <div className="mt-32 text-center">
          <p className="text-white/10 text-[9px] font-black uppercase tracking-[0.6em]">
            Global Innovation & Technical Advocacy Ecosystem
          </p>
        </div>
      </div>
    </section>
  );
}