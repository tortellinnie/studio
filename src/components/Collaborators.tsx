'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';

export function Collaborators() {
  const partners = [
    { name: "DOST Philippines", logoId: "logo-dost", url: "https://www.dost.gov.ph/" },
    { name: "DICT Philippines", logoId: "logo-dict", url: "https://dict.gov.ph/" },
    { name: "Quezon City Government", logoId: "logo-qc", url: "https://quezoncity.gov.ph/" },
    { name: "NBDB-Philippines", logoId: "logo-nbdb", url: "https://books.gov.ph/" },
    { name: "DTI Philippines", logoId: "logo-dti", url: "https://www.dti.gov.ph/" },
    { name: "SK Commonwealth", logoId: "logo-sk", url: "https://www.facebook.com/skcommonwealthofficial/" },
    { name: "NCR Alliance of DOST Scholars", logoId: "logo-nads", url: "https://www.facebook.com/NCRAllianceOfDOSTScholars/" },
    { name: "Department of Agriculture", logoId: "logo-da", url: "https://www.da.gov.ph/" },
    { name: "Philippine Statistics Authority", logoId: "logo-psa", url: "https://psa.gov.ph/" },
    { name: "Procter & Gamble (P&G)", logoId: "logo-png", url: "https://ph.pg.com/" },
    { name: "PLDT-Smart Communications", logoId: "logo-pldtsmart", url: "https://pldt.com.ph/" },
    { name: "EMC Global (Japan)", logoId: "logo-emc", url: "https://emc-g.com/" },
    { name: "National Alliance of Reading Advocates (NARA)", logoId: "logo-nara", url: "https://www.facebook.com/ReadingAdvocatesPH/" },
    { name: "EAMC Dept. of Neurosciences", logoId: "logo-eamc", url: "https://eamc.doh.gov.ph/" },
    { name: "FEU Tech Library", logoId: "logo-lib", url: "https://www.feutech.edu.ph/facilities/library" }
  ];

  return (
    <section id="collaborators" className="py-24 relative bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-6 mb-20">
          <Badge className="bg-white/5 text-white/40 border-white/10 px-4 py-1.5 rounded-full font-black tracking-widest uppercase text-[10px]">
            Institutional Network
          </Badge>
          <h2 className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter leading-none">
            Strategic<br />Collaborations.
          </h2>
        </div>

        <div className="huddle-container max-w-4xl mx-auto">
          {partners.map((org, i) => {
            const logo = PlaceHolderImages.find(img => img.id === org.logoId);
            return (
              <a 
                key={i} 
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="huddle-item w-20 h-20 md:w-28 md:h-28 flex items-center justify-center p-3 grayscale hover:grayscale-0 transition-all duration-700"
                title={org.name}
              >
                {logo && (
                  <div className="relative w-full h-full">
                    <Image 
                      src={`${logo.imageUrl}?v=2`} 
                      alt={org.name}
                      fill
                      className="object-contain"
                      data-ai-hint={logo.imageHint}
                    />
                  </div>
                )}
              </a>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <p className="text-white/10 text-[9px] font-black uppercase tracking-[0.6em]">
            Global Innovation & Technical Advocacy Ecosystem
          </p>
        </div>
      </div>
    </section>
  );
}
