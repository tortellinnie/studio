'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ArrowRight, Clock, Calendar } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from '@/components/ui/button';

const blogItems = [
  {
    id: 'edge-ai-agri',
    tag: 'AGRICULTURE',
    title: 'THE FUTURE OF EDGE AI IN AGRICULTURE',
    excerpt: 'Exploring how real-time computer vision on edge devices is transforming modern farm management.',
    date: 'OCT 2025',
    readTime: '5 MIN READ',
    imageId: 'featured-prompt-challenge',
    color: 'bg-emerald-500'
  },
  {
    id: 'video-automation-gemini',
    tag: 'AUTOMATION',
    title: 'AUTONOMOUS VIDEO PRODUCTION WITH GEMINI',
    excerpt: 'A deep dive into building an end-to-end automation pipeline using n8n, Docker, and Gemini 2.5 Flash.',
    date: 'SEP 2025',
    readTime: '8 MIN READ',
    imageId: 'featured-github-universe',
    color: 'bg-blue-500'
  },
  {
    id: 'tpu-scaling',
    tag: 'MACHINE LEARNING',
    title: 'SCALING NEURAL NETWORKS ON CLOUD TPUS',
    excerpt: 'Technical insights from my research experience with the Google TPU Research Cloud (TRC) program.',
    date: 'AUG 2025',
    readTime: '12 MIN READ',
    imageId: 'featured-tpu-research',
    color: 'bg-purple-500'
  }
];

export function Blogs() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'center',
    skipSnaps: false,
    duration: 35,
  });
  
  const [selectedIndex, setSelectedIndex] = React.useState(0);

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
    <section id="blogs" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
             backgroundSize: '40px 40px' 
           }} />

      <div className="container mx-auto px-6 max-w-7xl mb-12 relative z-10">
        <div className="flex flex-row justify-between items-end border-b border-gray-100 pb-10">
          <div className="space-y-2">
            <h2 className="text-4xl font-medium text-foreground tracking-tighter uppercase italic">
              INSIGHTS
            </h2>
            <p className="text-muted-foreground text-sm font-medium">
              Thoughts on technology, engineering, and innovation.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <Link href="#" className="hidden md:block text-[10px] font-black uppercase tracking-widest text-primary hover:opacity-80 transition-opacity">
              View All Articles →
            </Link>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full w-10 h-10 border-gray-200 transition-all hover:bg-gray-50 bg-white"
                onClick={() => emblaApi?.scrollPrev()}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full w-10 h-10 border-gray-200 transition-all hover:bg-gray-50 bg-white"
                onClick={() => emblaApi?.scrollNext()}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <div className="overflow-visible" ref={emblaRef}>
          <div className="flex">
            {blogItems.map((item, idx) => {
              const imageData = PlaceHolderImages.find(img => img.id === item.imageId);
              const isActive = selectedIndex === idx;
              
              return (
                <div 
                  key={item.id} 
                  className="flex-[0_0_85%] md:flex-[0_0_40%] lg:flex-[0_0_30%] px-3"
                >
                  <Link href={`/blogs/${item.id}`} className="block group">
                    <div className={cn(
                      "relative overflow-hidden rounded-[3rem] aspect-[2/3] bg-gray-100 transition-all duration-700 ease-premium",
                      isActive ? "scale-100 opacity-100 shadow-2xl shadow-black/10" : "scale-[0.95] opacity-50 shadow-none"
                    )}>
                      {imageData && (
                        <Image
                          src={imageData.imageUrl}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-1000 group-hover:scale-110"
                          data-ai-hint={item.tag}
                        />
                      )}
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                      
                      <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center gap-2">
                        <Clock className="w-3 h-3 text-white/60" />
                        <span className="text-[8px] font-black text-white uppercase tracking-widest">{item.readTime}</span>
                      </div>

                      <div className="absolute inset-0 p-10 flex flex-col justify-end">
                        <div className="space-y-4">
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
                             <div className={cn("w-1.5 h-1.5 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)]", item.color)} />
                             <p className="text-[9px] font-black text-white uppercase tracking-[0.2em]">{item.tag}</p>
                          </div>
                          
                          <div className="space-y-2">
                            <h3 className="text-2xl font-black text-white leading-[1.1] uppercase italic tracking-tighter group-hover:text-primary transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-white/60 text-xs font-medium line-clamp-2 uppercase tracking-wide">
                              {item.excerpt}
                            </p>
                          </div>

                          <div className="pt-4 flex items-center justify-between">
                            <div className="flex items-center gap-2 text-white/40">
                              <Calendar className="w-3 h-3" />
                              <span className="text-[9px] font-black uppercase tracking-widest">{item.date}</span>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                              <ArrowRight className="w-5 h-5" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-12 relative z-10">
        {blogItems.map((_, i) => (
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
