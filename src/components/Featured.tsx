
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
    loop: false, 
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true 
  });
  
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(true);

  const featuredItems = [
    {
      id: 'tpu-research',
      tag: 'Machine Learning',
      title: 'TPU Research Cloud',
      desc: 'Supercharging ML Research with Google Infrastructure.',
      imageId: 'featured-tpu-research',
      action: 'Explore now',
      color: 'bg-red-600'
    },
    {
      id: 'prompt-challenge',
      tag: 'Software Engineering',
      title: 'Prompt Design',
      desc: 'Winning the National AI Prompt Design Challenge.',
      imageId: 'featured-prompt-challenge',
      action: 'Read story',
      color: 'bg-blue-600'
    },
    {
      id: 'aws-reinvent',
      tag: 'Leadership',
      title: 'AWS re:Invent',
      desc: 'The All Builders Welcome Grant Experience.',
      imageId: 'featured-aws-reinvent',
      action: 'View recap',
      color: 'bg-orange-600'
    },
    {
      id: 'github-universe',
      tag: 'Cloud Computing',
      title: 'GitHub Universe',
      desc: 'Deep diving into az:Repo and Copilot extensions.',
      imageId: 'featured-github-universe',
      action: 'See recap',
      color: 'bg-green-600'
    }
  ];

  const onSelect = React.useCallback((api: any) => {
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="featured" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1600px] mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter uppercase italic">
              Featured Impact<span className="text-primary">.</span>
            </h2>
            <p className="text-muted-foreground text-lg font-medium max-w-xl">
              Highlights from my technical research, leadership grants, and engineering milestones.
            </p>
          </div>
          
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              size="icon" 
              className={cn(
                "rounded-full w-12 h-12 border-gray-200 transition-all",
                !canScrollPrev && "opacity-30 cursor-not-allowed"
              )}
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canScrollPrev}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className={cn(
                "rounded-full w-12 h-12 border-gray-200 transition-all",
                !canScrollNext && "opacity-30 cursor-not-allowed"
              )}
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canScrollNext}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="px-6 max-w-[1600px] mx-auto overflow-visible">
        <div className="overflow-visible" ref={emblaRef}>
          <div className="flex -ml-6">
            {featuredItems.map((item) => {
              const imageData = PlaceHolderImages.find(img => img.id === item.imageId);
              return (
                <div key={item.id} className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_35%] pl-6">
                  <div className="relative group overflow-hidden rounded-[2.5rem] aspect-[4/5] bg-gray-100 shadow-sm transition-all duration-700 hover:shadow-2xl">
                    {imageData && (
                      <Image
                        src={imageData.imageUrl}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        data-ai-hint={imageData.imageHint}
                      />
                    )}
                    
                    {/* Dark gradient overlay for text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                    
                    <div className="absolute inset-x-0 bottom-0 p-10 flex flex-col items-start">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={cn("w-2 h-2 rounded-full", item.color)} />
                        <p className="text-[11px] font-black text-white/60 uppercase tracking-[0.3em]">{item.tag}</p>
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4 group-hover:translate-x-2 transition-transform duration-500">
                        {item.title}
                      </h3>
                      
                      <p className="text-white/70 text-base font-medium mb-8 max-w-xs group-hover:text-white transition-colors">
                        {item.desc}
                      </p>
                      
                      <Link href={`/impact/${item.id}`} className="mt-auto">
                        <button className="h-12 px-8 rounded-full bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-3 group/btn">
                          {item.action}
                          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
