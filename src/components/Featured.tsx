'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from '@/components/ui/button';

export function Featured() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'center',
    skipSnaps: false,
    duration: 35,
  });
  
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const featuredItems = [
    {
      id: 'tpu-research',
      tag: 'ARTIFICIAL INTELLIGENCE',
      title: 'TPU Research Cloud',
      desc: 'Supercharging ML Research with Google Infrastructure.',
      imageId: 'featured-tpu-research',
      action: 'Explore now',
      color: 'bg-[#22c55e]'
    },
    {
      id: 'prompt-challenge',
      tag: 'SOFTWARE SOLUTIONS',
      title: 'Prompt Design',
      desc: 'Winning the National AI Prompt Design Challenge.',
      imageId: 'featured-prompt-challenge',
      action: 'Read story',
      color: 'bg-[#3b82f6]'
    },
    {
      id: 'aws-reinvent',
      tag: 'CLOUD & IOT',
      title: 'AWS re:Invent',
      desc: 'The All Builders Welcome Grant Experience.',
      imageId: 'featured-aws-reinvent',
      action: 'View recap',
      color: 'bg-[#f97316]'
    },
    {
      id: 'github-universe',
      tag: 'AUTOMATION',
      title: 'GitHub Universe',
      desc: 'Deep diving into az:Repo and Copilot extensions.',
      imageId: 'featured-github-universe',
      action: 'See recap',
      color: 'bg-[#10b981]'
    }
  ];

  const onSelect = React.useCallback((api: any) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="featured" className="py-24 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl mb-12">
        <div className="flex flex-row justify-between items-end border-b border-gray-100 pb-10">
          <div className="space-y-2">
            <h2 className="text-4xl font-medium text-foreground tracking-tighter uppercase">
              FEATURED CONTRIBUTIONS
            </h2>
            <p className="text-slate-500 text-sm font-medium">
              Glimpses of my technological contributions in the field and multiple communities.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest">
                {selectedIndex + 1} / {featuredItems.length}
              </span>
            </div>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full w-10 h-10 border-gray-200 transition-all hover:bg-gray-50"
                onClick={() => emblaApi?.scrollPrev()}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full w-10 h-10 border-gray-200 transition-all hover:bg-gray-50"
                onClick={() => emblaApi?.scrollNext()}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="overflow-visible" ref={emblaRef}>
          <div className="flex">
            {featuredItems.map((item, idx) => {
              const imageData = PlaceHolderImages.find(img => img.id === item.imageId);
              const isActive = selectedIndex === idx;
              
              return (
                <div 
                  key={item.id} 
                  className="flex-[0_0_75%] md:flex-[0_0_50%] px-1.5"
                >
                  <div className={cn(
                    "relative group overflow-hidden rounded-[2.5rem] md:rounded-[3rem] aspect-video bg-gray-100 transition-all duration-700 ease-premium",
                    isActive ? "scale-100 opacity-100 shadow-2xl shadow-black/10" : "scale-[0.9] opacity-50 shadow-none"
                  )}>
                    {imageData && (
                      <Image
                        src={imageData.imageUrl}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        data-ai-hint={item.tag}
                        priority={idx === 0}
                      />
                    )}
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
                    
                    <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                      <div className="flex items-end justify-between gap-6">
                        <div className="space-y-1 md:space-y-2 flex-1">
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-2">
                             <div className={cn("w-1.5 h-1.5 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)]", item.color)} />
                             <p className="text-[9px] font-medium text-white uppercase tracking-[0.1em]">{item.tag}</p>
                          </div>
                          <h3 className="text-xl md:text-3xl font-medium text-white leading-tight uppercase tracking-tighter">
                            {item.title}
                          </h3>
                        </div>
                        
                        <Link href={`/impact/${item.id}`} className="shrink-0">
                          <button className="h-10 md:h-12 px-6 md:px-8 rounded-full bg-white text-black text-[10px] font-medium uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2 group/btn whitespace-nowrap shadow-xl">
                            {item.action}
                            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-12">
        {featuredItems.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={cn(
              "h-1.5 transition-all duration-500 rounded-full",
              i === selectedIndex ? "w-8 bg-primary" : "w-2 bg-gray-200"
            )}
          />
        ))}
      </div>
    </section>
  );
}
