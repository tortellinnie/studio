'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Collaborators() {
  const partners = [
    { name: "Procter & Gamble (P&G)", logoId: "logo-png", url: "https://ph.pg.com/" },
    { name: "AWS", logoId: "logo-aws", url: "https://aws.amazon.com/" },
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
    <section id="collaborators" className="py-24 relative overflow-hidden">
      {/* Light Grid Background as per image */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-12">
          <p className="text-sm font-medium text-muted-foreground/80 tracking-tight">
            Affiliated with Leading Organizations
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-16 max-w-7xl mx-auto">
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
                  <div className="relative h-12 md:h-14 w-auto min-w-[120px]">
                    <Image 
                      src={logo.imageUrl} 
                      alt={org.name}
                      width={160}
                      height={60}
                      className="object-contain h-full w-auto filter-none" // Force full color
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
