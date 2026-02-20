
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
      color: 'bg-emerald-400'
    },
    {
      id: 'prompt-challenge',
      tag: 'Software Engineering',
      title: 'Prompt Design',
      desc: 'Winning the National AI Prompt Design Challenge.',
      imageId: 'featured-prompt-challenge',
      action: 'Read story',
      color: 'bg-blue-400'
    },
    {
      id: 'aws-reinvent',
      tag: 'Leadership',
      title: 'AWS re:Invent',
      desc: 'The All Builders Welcome Grant Experience.',
      imageId: 'featured-aws-reinvent',
      action: 'View recap',
      color: 'bg-orange-400'
    },
    {
      id: 'github-universe',
      tag: 'Cloud Computing',
      title: 'GitHub Universe',
      desc: 'Deep diving into az:Repo and Copilot extensions.',
      imageId: 'featured-github-universe',
      action: 'See recap',
      color: 'bg-green-400'
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
          <div className="flex -ml-4">
            {featuredItems.map((item, idx) => {
              const imageData = PlaceHolderImages.find(img => img.id === item.imageId);
              const isActive = selectedIndex === idx;
              
              return (
                <div 
                  key={item.id} 
                  className="flex-[0_0_70%] md:flex-[0_0_50%] lg:flex-[0_0_45%] pl-4 transition-all duration-700 ease-premium"
                  style={{
                    transform: isActive ? 'scale(1)' : 'scale(0.85)',
                    opacity: isActive ? 1 : 0.4,
                  }}
                >
                  <div className={cn(
                    "relative group overflow-hidden rounded-[2.5rem] md:rounded-[3rem] aspect-video bg-gray-100 shadow-xl transition-all duration-700",
                    isActive ? "shadow-primary/10" : "shadow-none"
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
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    
                    <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                      <div className="flex items-end justify-between gap-6">
                        <div className="space-y-1 md:space-y-3 flex-1">
                          <div className="flex items-center gap-2 mb-1">
                             <div className={cn("w-2 h-2 rounded-full", item.color)} />
                             <p className="text-[9px] md:text-[10px] font-black text-white/70 uppercase tracking-[0.3em]">{item.tag}</p>
                          </div>
                          <h3 className="text-xl md:text-4xl font-black text-white leading-tight uppercase italic tracking-tighter">
                            {item.title}
                          </h3>
                          <p className="text-white/50 text-[10px] md:text-xs font-medium max-w-sm hidden md:block">
                            {item.desc}
                          </p>
                        </div>
                        
                        <Link href={`/impact/${item.id}`} className="shrink-0 mb-1">
                          <button className="h-10 md:h-11 px-6 md:px-8 rounded-full bg-white text-black text-[9px] md:text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2.5 group/btn whitespace-nowrap">
                            {item.action}
                            <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform group-hover/btn:translate-x-1" />
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
              "h-1 transition-all duration-500 rounded-full",
              i === selectedIndex ? "w-10 bg-primary" : "w-1.5 bg-gray-200"
            )}
          />
        ))}
      </div>
    </section>
  );
}
