
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
              className="rounded-full w-12 h-12 border-gray-200 transition-all hover:bg-gray-50"
              onClick={() => emblaApi?.scrollPrev()}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full w-12 h-12 border-gray-200 transition-all hover:bg-gray-50"
              onClick={() => emblaApi?.scrollNext()}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="relative overflow-visible">
        <div className="overflow-visible" ref={emblaRef}>
          <div className="flex -ml-4 md:-ml-8 items-center">
            {featuredItems.map((item, idx) => {
              const imageData = PlaceHolderImages.find(img => img.id === item.imageId);
              const isActive = selectedIndex === idx;
              
              return (
                <div 
                  key={item.id} 
                  className="flex-[0_0_75%] md:flex-[0_0_45%] lg:flex-[0_0_30%] pl-4 md:pl-8 py-10 transition-all duration-700 ease-premium"
                  style={{
                    transform: isActive ? 'scale(1.1)' : 'scale(0.75)',
                    opacity: isActive ? 1 : 0.3,
                  }}
                >
                  <div className={cn(
                    "relative group overflow-hidden rounded-[3rem] aspect-[4/5] bg-gray-100 shadow-xl transition-all duration-700",
                    isActive ? "shadow-primary/20" : "shadow-none"
                  )}>
                    {imageData && (
                      <Image
                        src={imageData.imageUrl}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        data-ai-hint={imageData.imageHint}
                      />
                    )}
                    
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
                    
                    <div className="absolute inset-x-0 bottom-0 p-10 flex flex-col items-start">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={cn("w-2.5 h-2.5 rounded-full", item.color, "animate-pulse")} />
                        <p className="text-[11px] font-black text-white/60 uppercase tracking-[0.3em]">{item.tag}</p>
                      </div>
                      
                      <h3 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4 group-hover:translate-x-2 transition-transform duration-500">
                        {item.title}
                      </h3>
                      
                      <p className="text-white/70 text-base md:text-lg font-medium mb-8 max-w-xs">
                        {item.desc}
                      </p>
                      
                      <Link href={`/impact/${item.id}`} className="mt-auto">
                        <button className="h-14 px-10 rounded-full bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-4 group/btn">
                          {item.action}
                          <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
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

      <div className="flex justify-center gap-2 mt-12">
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
