
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
      tag: 'Machine Learning',
      title: 'TPU Research Cloud',
      desc: 'Supercharging ML Research with Google Infrastructure.',
      imageId: 'featured-tpu-research',
      action: 'Explore now',
      color: 'bg-[#22c55e]' // Emerald dot
    },
    {
      id: 'prompt-challenge',
      tag: 'Software Engineering',
      title: 'Prompt Design',
      desc: 'Winning the National AI Prompt Design Challenge.',
      imageId: 'featured-prompt-challenge',
      action: 'Read story',
      color: 'bg-[#3b82f6]' // Blue dot
    },
    {
      id: 'aws-reinvent',
      tag: 'Leadership',
      title: 'AWS re:Invent',
      desc: 'The All Builders Welcome Grant Experience.',
      imageId: 'featured-aws-reinvent',
      action: 'View recap',
      color: 'bg-[#f97316]' // Orange dot
    },
    {
      id: 'github-universe',
      tag: 'Cloud Computing',
      title: 'GitHub Universe',
      desc: 'Deep diving into az:Repo and Copilot extensions.',
      imageId: 'featured-github-universe',
      action: 'See recap',
      color: 'bg-[#10b981]' // Green dot
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
    <section id="featured" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tighter uppercase italic">
              Featured Impact<span className="text-primary">.</span>
            </h2>
            <p className="text-muted-foreground text-sm font-medium max-w-xl">
              Highlights from technical research and engineering milestones.
            </p>
          </div>
          
          <div className="flex gap-3">
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

      <div className="relative">
        <div className="overflow-visible" ref={emblaRef}>
          <div className="flex">
            {featuredItems.map((item, idx) => {
              const imageData = PlaceHolderImages.find(img => img.id === item.imageId);
              const isActive = selectedIndex === idx;
              
              return (
                <div 
                  key={item.id} 
                  className="flex-[0_0_80%] md:flex-[0_0_50%] px-3 md:px-6"
                >
                  <div className={cn(
                    "relative group overflow-hidden rounded-[2.5rem] md:rounded-[3rem] aspect-video bg-gray-100 transition-all duration-700 ease-premium",
                    isActive ? "scale-100 opacity-100 shadow-2xl shadow-black/10" : "scale-90 opacity-40 shadow-none"
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
                    
                    <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                      <div className="flex items-end justify-between gap-6">
                        {/* Metadata Bottom-Left */}
                        <div className="space-y-1 md:space-y-3 flex-1">
                          <div className="flex items-center gap-2.5 mb-1">
                             <div className={cn("w-2 h-2 rounded-full", item.color, "shadow-[0_0_10px_rgba(255,255,255,0.2)]")} />
                             <p className="text-[10px] md:text-[11px] font-black text-white/80 uppercase tracking-[0.3em]">{item.tag}</p>
                          </div>
                          <h3 className="text-xl md:text-4xl font-black text-white leading-tight uppercase italic tracking-tighter">
                            {item.title}
                          </h3>
                        </div>
                        
                        {/* Pill Action Bottom-Right */}
                        <Link href={`/impact/${item.id}`} className="shrink-0 mb-1">
                          <button className="h-10 md:h-12 px-6 md:px-10 rounded-full bg-white text-black text-[10px] md:text-[11px] font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-3 group/btn whitespace-nowrap shadow-xl">
                            {item.action}
                            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover/btn:translate-x-1" />
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

      <div className="flex justify-center gap-3 mt-12">
        {featuredItems.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={cn(
              "h-1.5 transition-all duration-500 rounded-full",
              i === selectedIndex ? "w-12 bg-primary" : "w-2 bg-gray-200"
            )}
          />
        ))}
      </div>
    </section>
  );
}
