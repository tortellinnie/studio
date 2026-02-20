
'use client';

import * as React from 'react';
import Image from 'next/image';
import { Calendar, MapPin, Monitor, ArrowRight, ChevronLeft, ChevronRight, MessageSquarePlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import useEmblaCarousel from 'embla-carousel-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const speakingData = [
  {
    type: 'Workshop',
    title: 'Product Building with AI Workshop',
    event: 'Philippine Innovation Conference 2025',
    date: 'Nov 21, 2025',
    location: 'University of Batangas',
    color: 'bg-emerald-500',
    tag: 'AI',
    imageId: 'featured-prompt-challenge'
  },
  {
    type: 'Talk',
    title: "GitHub Universe'25 Recap: AI Edition",
    event: 'az:Repo: The Agentic Workshop',
    date: 'Nov 14, 2025',
    location: 'Microsoft Office Philippines',
    color: 'bg-blue-500',
    tag: 'Automation',
    imageId: 'featured-github-universe'
  },
  {
    type: 'Talk',
    title: "G-Trends: Google's Next-Gen Toolkit",
    event: 'InSession 2025',
    date: 'Nov 6, 2025',
    location: 'TUP - Manila',
    color: 'bg-amber-500',
    tag: 'Cloud',
    imageId: 'featured-tpu-research'
  },
  {
    type: 'Talk',
    title: 'Internship Employability Session',
    event: 'DEPLOY(): 2025',
    date: 'Nov 5, 2025',
    location: 'Online Session',
    color: 'bg-purple-500',
    tag: 'Career',
    imageId: 'featured-aws-reinvent'
  },
  {
    type: 'Talk',
    title: 'Open Source Licensing & Version Control',
    event: 'Hacktoberfest Philippines',
    date: 'Oct 30, 2025',
    location: 'NU - Las Piñas',
    color: 'bg-blue-500',
    tag: 'Automation',
    imageId: 'featured-github-universe'
  }
];

const categories = ['All', 'AI', 'Career', 'Cloud', 'Automation'];

export function Speaking() {
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    skipSnaps: false,
    duration: 35
  });

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const filteredData = React.useMemo(() => {
    if (activeCategory === 'All') return speakingData;
    return speakingData.filter(item => item.tag === activeCategory);
  }, [activeCategory]);

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
    <section id="speaking" className="py-24 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-medium text-foreground tracking-tighter uppercase italic">
              SPEAKING
            </h2>
            <p className="text-muted-foreground text-xs font-medium max-w-xl">
              Sharing engineering insights and leadership strategies at conferences across the technology landscape.
            </p>
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 pt-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest transition-all duration-300 border",
                    activeCategory === cat 
                      ? "bg-primary text-white border-primary shadow-lg shadow-primary/20" 
                      : "bg-white/50 border-gray-100 text-muted-foreground hover:border-primary/30"
                  )}
                >
                  #{cat}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Button className="rounded-full bg-primary text-white hover:bg-primary/90 text-[10px] font-black uppercase tracking-widest px-8 h-12 gap-3 shadow-xl">
              Book me to speak <MessageSquarePlus className="w-4 h-4" />
            </Button>
            <div className="flex gap-2">
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

        {/* Carousel Section */}
        <div className="relative">
          <div className="overflow-visible" ref={emblaRef}>
            <div className="flex -ml-6">
              {filteredData.map((talk, idx) => {
                const isActive = selectedIndex === idx;
                const imageData = PlaceHolderImages.find(img => img.id === talk.imageId);
                
                return (
                  <div 
                    key={idx} 
                    className="flex-[0_0_85%] md:flex-[0_0_35%] lg:flex-[0_0_30%] pl-6"
                  >
                    <div 
                      className={cn(
                        "group bg-white rounded-[3.5rem] border border-gray-100 overflow-hidden aspect-[4/6] flex flex-col transition-all duration-700 ease-premium",
                        isActive ? "scale-100 opacity-100 shadow-2xl shadow-black/5" : "scale-[0.95] opacity-50 shadow-none"
                      )}
                    >
                      {/* Landscape Image Section (3:2) */}
                      <div className="relative aspect-[3/2] w-full overflow-hidden shrink-0">
                        {imageData && (
                          <Image 
                            src={imageData.imageUrl} 
                            alt={talk.title}
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            data-ai-hint="speaker on stage action shot"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                      </div>

                      {/* Content Section */}
                      <div className="flex-1 p-8 md:p-10 flex flex-col justify-between">
                        <div className="space-y-6">
                          {/* Saturated Tags for Better Contrast */}
                          <div className="flex items-center gap-2">
                            <div className={cn(
                              "inline-flex items-center gap-2 px-3 py-1.5 rounded-full border shadow-sm",
                              "bg-white/90 backdrop-blur-md border-black/[0.05]"
                            )}>
                              <div className={cn("w-1.5 h-1.5 rounded-full", talk.color)} />
                              <span className="text-[9px] font-black uppercase tracking-[0.15em] text-foreground/80">{talk.type}</span>
                            </div>
                            <span className="text-[8px] font-black text-primary uppercase tracking-[0.2em] opacity-40">#{talk.tag}</span>
                          </div>
                          
                          <div className="space-y-4">
                            <h3 className="text-xl md:text-2xl font-medium text-foreground uppercase italic tracking-tighter leading-[1.2] group-hover:text-primary transition-colors duration-500 line-clamp-2">
                              {talk.title}
                            </h3>
                            <p className="text-primary text-[11px] font-bold uppercase tracking-[0.15em] leading-snug">
                              {talk.event}
                            </p>
                          </div>

                          <div className="space-y-3 pt-2">
                            <div className="flex items-center gap-3 text-muted-foreground/60">
                              <Calendar className="w-4 h-4 text-primary/30 shrink-0" />
                              <span className="text-[10px] font-black uppercase tracking-widest">{talk.date}</span>
                            </div>
                            <div className="flex items-center gap-3 text-muted-foreground/60">
                              <MapPin className="w-4 h-4 text-primary/30 shrink-0" />
                              <span className="text-[10px] font-black uppercase tracking-widest line-clamp-1">{talk.location}</span>
                            </div>
                          </div>
                        </div>

                        <div className="pt-8 border-t border-gray-50">
                          <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-foreground hover:text-primary transition-all group/btn">
                            View Materials 
                            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:text-white transition-all shadow-sm">
                              <Monitor className="w-4 h-4" />
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Custom Progress Bar */}
        <div className="flex justify-center gap-2 mt-16">
          {filteredData.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={cn(
                "h-1.5 transition-all duration-500 rounded-full",
                i === selectedIndex ? "w-10 bg-primary" : "w-2 bg-gray-200"
              )}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
