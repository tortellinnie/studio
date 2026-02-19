'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Collaborators() {
  const partners = [
    { name: "Procter & Gamble (P&G)", logoId: "logo-png", url: "https://ph.pg.com/" },
    { name: "DOST Philippines", logoId: "logo-dost", url: "https://www.dost.gov.ph/" },
    { name: "DICT Philippines", logoId: "logo-dict", url: "https://dict.gov.ph/" },
    { name: "Quezon City Government", logoId: "logo-qc", url: "https://quezoncity.gov.ph/" },
    { name: "NBDB-Philippines", logoId: "logo-nbdb", url: "https://books.gov.ph/" },
    { name: "DTI Philippines", logoId: "logo-dti", url: "https://www.dti.gov.ph/" },
    { name: "SK Commonwealth", logoId: "logo-sk", url: "https://www.facebook.com/skcommonwealthofficial/" },
    { name: "NCR Alliance of DOST Scholars", logoId: "logo-nads", url: "https://www.facebook.com/NADS.NCR/" },
    { name: "Department of Agriculture", logoId: "logo-da", url: "https://www.da.gov.ph/" },
    { name: "Philippine Statistics Authority", logoId: "logo-psa", url: "https://psa.gov.ph/" },
    { name: "PLDT-Smart", logoId: "logo-pldtsmart", url: "https://www.smart.com.ph/" },
    { name: "EMC Global", logoId: "logo-emc", url: "https://emc-g.com/" },
    { name: "NARA", logoId: "logo-nara", url: "https://www.facebook.com/NARAadvocates/" },
    { name: "FEU Tech Library", logoId: "logo-lib", url: "https://www.feutech.edu.ph/" }
  ];

  return (
    <section id="collaborators" className="py-12 relative overflow-hidden bg-white">
      {/* Subtle Technical Grid Background */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ 
             backgroundImage: `linear-gradient(45deg, #000 0.5px, transparent 0.5px), linear-gradient(-45deg, #000 0.5px, transparent 0.5px)`,
             backgroundSize: '40px 40px' 
           }} />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-14">
          <p className="text-[11px] font-black text-foreground/40 uppercase tracking-[0.5em]">
            Affiliated with Leading Organizations
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 max-w-7xl mx-auto">
          {partners.map((org, i) => {
            const logo = PlaceHolderImages.find(img => img.id === org.logoId);
            return (
              <a 
                key={i} 
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center transition-all duration-500 hover:scale-110"
              >
                {logo && (
                  <div className="relative h-24 md:h-32 w-auto min-w-[200px] flex items-center justify-center filter drop-shadow-sm">
                    <Image 
                      src={logo.imageUrl} 
                      alt={org.name}
                      width={280}
                      height={140}
                      className="object-contain h-full w-auto transition-all duration-500"
                      data-ai-hint={logo.imageHint}
                    />
                  </div>
                )}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
