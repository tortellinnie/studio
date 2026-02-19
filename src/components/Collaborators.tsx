'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Collaborators() {
  const partners = [
    { name: "AWS", logoId: "logo-aws", url: "https://aws.amazon.com/" },
    { name: "Google Cloud", logoId: "logo-dict", url: "https://cloud.google.com/" },
    { name: "Vercel", logoId: "logo-dict", url: "https://vercel.com/" },
    { name: "Tavily", logoId: "logo-dict", url: "https://tavily.com/" },
    { name: "GitHub", logoId: "logo-dict", url: "https://github.com/" },
    { name: "DOST Philippines", logoId: "logo-dost", url: "https://www.dost.gov.ph/" },
    { name: "DICT Philippines", logoId: "logo-dict", url: "https://dict.gov.ph/" },
    { name: "Quezon City Government", logoId: "logo-qc", url: "https://quezoncity.gov.ph/" },
    { name: "NBDB-Philippines", logoId: "logo-nbdb", url: "https://books.gov.ph/" },
    { name: "DTI Philippines", logoId: "logo-dti", url: "https://www.dti.gov.ph/" },
    { name: "SK Commonwealth", logoId: "logo-sk", url: "https://www.facebook.com/skcommonwealthofficial/" },
    { name: "Procter & Gamble (P&G)", logoId: "logo-png", url: "https://ph.pg.com/" },
    { name: "EMC Global (Japan)", logoId: "logo-emc", url: "https://emc-g.com/" },
    { name: "FEU Tech Library", logoId: "logo-lib", url: "https://www.feutech.edu.ph/" }
  ];

  return (
    <section id="collaborators" className="py-20 bg-transparent">
      <div className="container mx-auto px-6 text-center">
        <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-widest mb-12">
          Affiliated with Leading Organizations
        </p>

        <div className="huddle-container max-w-5xl">
          {partners.map((org, i) => {
            const logo = PlaceHolderImages.find(img => img.id === org.logoId);
            return (
              <a 
                key={i} 
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="huddle-item w-24 md:w-32 flex items-center justify-center p-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              >
                {logo && (
                  <div className="relative w-full aspect-video">
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
      </div>
    </section>
  );
}