'use client';

import * as React from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import useEmblaCarousel from 'embla-carousel-react';

export function Awards() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const awards = [
    { title: "EMC Global Award", org: "EMC Global Summit", year: "2026", imageId: "featured-prompt-challenge" },
    { title: "Most Outstanding Youth Awardee", org: "QC Gov / SK Commonwealth", year: "2025", imageId: "featured-tpu-research" },
    { title: "1st Runner-Up, PH Startup Challenge X", org: "DICT Regional NCR", year: "2025", imageId: "featured-aws-reinvent" },
    { title: "Winner, Musashinova Pitching", org: "EMC Global / Musashino Uni", year: "2025", imageId: "featured-github-universe" },
    { title: "DOST Merit Scholarship", org: "DOST Philippines", year: "2023", imageId: "featured-prompt-challenge" },
    { title: "QCYDO Economic Scholarship", org: "Quezon City Government", year: "2025", imageId: "featured-tpu-research" }
  ];

  React.useEffect(() => {
    if (!emblaApi) return;
    setCount(emblaApi.scrollSnapList().length);
    setCurrent(emblaApi.selectedScrollSnap() + 1);
    emblaApi.on('select', () => {
      setCurrent(emblaApi.selectedScrollSnap() + 1);
    });
  }, [emblaApi]);

  return (
    <section id="awards" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-row justify-between items-end mb-12 border-b border-gray-100 pb-10">
          <div className="space-y-2">
            <h2 className="text-4xl font-black text-foreground uppercase italic tracking-tighter">Awards</h2>
            <p className="text-muted-foreground text-sm font-medium">Recognition for contributions to AI/ML and community impact.</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{current} / {count}</span>
            </div>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full w-10 h-10 border-gray-200 hover:bg-gray-50"
                onClick={() => emblaApi?.scrollPrev()}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full w-10 h-10 border-gray-200 hover:bg-gray-50"
                onClick={() => emblaApi?.scrollNext()}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {awards.map((award, idx) => {
              const imageData = PlaceHolderImages.find(img => img.id === award.imageId);
              return (
                <div key={idx} className="flex-[0_0_100%] md:flex-[0_0_33.33%] pl-4">
                  <div className="group bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 h-full flex flex-col">
                    <div className="relative aspect-video overflow-hidden bg-gray-50">
                      {imageData && (
                        <Image 
                          src={imageData.imageUrl} 
                          alt={award.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          data-ai-hint={imageData.imageHint}
                        />
                      )}
                      <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-primary shadow-lg" />
                    </div>
                    <div className="p-8 flex-grow">
                      <h3 className="text-lg font-black text-foreground uppercase tracking-tight leading-tight mb-2 group-hover:text-primary transition-colors">
                        {award.title}
                      </h3>
                      <p className="text-muted-foreground text-[11px] font-bold uppercase tracking-widest">
                        {award.org} • {award.year}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="flex justify-center gap-2 mt-12">
          {Array.from({ length: count }).map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 transition-all duration-300 rounded-full ${i + 1 === current ? 'w-8 bg-primary' : 'w-2 bg-gray-200'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
