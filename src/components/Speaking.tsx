
'use client';

import * as React from 'react';
import Image from 'next/image';
import { Calendar, MapPin, ChevronLeft, ChevronRight, MessageSquarePlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import useEmblaCarousel from 'embla-carousel-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const speakingData = [
  {
    type: 'Workshop',
    title: 'PRODUCT BUILDING WITH AI WORKSHOP',
    event: 'PHILIPPINE INNOVATION CONFERENCE 2025',
    date: 'NOV 21, 2025',
    location: 'UNIVERSITY OF BATANGAS',
    color: 'bg-emerald-500',
    tag: 'AI',
    imageId: 'featured-prompt-challenge'
  },
  {
    type: 'Talk',
    title: "GITHUB UNIVERSE'25 RECAP: AI EDITION",
    event: 'AZ:REPO: THE AGENTIC WORKSHOP',
    date: 'NOV 14, 2025',
    location: 'MICROSOFT OFFICE PHILIPPINES',
    color: 'bg-blue-500',
    tag: 'Automation',
    imageId: 'featured-github-universe'
  },
  {
    type: 'Talk',
    title: "G-TRENDS: GOOGLE'S NEXT-GEN TOOLKIT",
    event: 'INSESSION 2025',
    date: 'NOV 6, 2025',
    location: 'TUP - MANILA',
    color: 'bg-amber-500',
    tag: 'Cloud',
    imageId: 'featured-tpu-research'
  },
  {
    type: 'Talk',
    title: 'INTERNSHIP EMPLOYABILITY SESSION',
    event: 'DEPLOY(): 2025',
    date: 'NOV 5, 2025',
    location: 'ONLINE SESSION',
    color: 'bg-purple-500',
    tag: 'Career',
    imageId: 'featured-aws-reinvent'
  }
];

const categories = ['All', 'AI', 'Career', 'Cloud', 'Automation'];

export function Speaking() {
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'center',
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
    <section id="speaking" className="py-24 bg-white relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
             backgroundSize: '40px 40px' 
           }} />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-20 gap-10">
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-5xl md:text-6xl font-medium text-foreground tracking-tighter italic uppercase">
              SPEAKING
            </h2>
            <p className="text-slate-500 text-sm font-medium max-w-xl">
              Sharing engineering insights and leadership strategies at conferences across the technology landscape.
            </p>
            
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border",
                    activeCategory === cat 
                      ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/20" 
                      : "bg-white border-slate-100 text-slate-400 hover:border-blue-600/30"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Button className="rounded-2xl bg-blue-600 text-white hover:bg-blue-700 text-[10px] font-black uppercase tracking-widest px-8 h-14 gap-3 shadow-xl shadow-blue-600/20">
              Book me to speak <MessageSquarePlus className="w-4 h-4" />
            </Button>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full w-12 h-12 border-slate-200 transition-all hover:bg-slate-50 bg-white"
                onClick={() => emblaApi?.scrollPrev()}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full w-12 h-12 border-slate-200 transition-all hover:bg-slate-50 bg-white"
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
                const imageData = PlaceHolderImages.find(img => img.id === talk.imageId);
                
                return (
                  <div 
                    key={idx} 
                    className="flex-[0_0_85%] md:flex-[0_0_50%] lg:flex-[0_0_35%] pl-6"
                  >
                    <div className="group bg-white rounded-[3.5rem] border border-slate-100 overflow-hidden flex flex-col transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 h-full">
                      {/* Image Section - Landscape 3:2 */}
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
                      </div>

                      {/* Content Section */}
                      <div className="flex-1 p-10 flex flex-col space-y-8">
                        {/* Tags Section */}
                        <div className="flex items-center gap-3">
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-100 bg-slate-50/50">
                            <div className={cn("w-1.5 h-1.5 rounded-full", talk.color)} />
                            <span className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-800">{talk.type}</span>
                          </div>
                          <span className="text-[9px] font-bold text-blue-600/50 uppercase tracking-[0.15em]">{talk.tag}</span>
                        </div>
                        
                        <div className="space-y-4">
                          <h3 className="text-2xl font-medium text-foreground uppercase italic tracking-tighter leading-tight group-hover:text-blue-600 transition-colors duration-500">
                            {talk.title}
                          </h3>
                          <p className="text-blue-600 font-bold uppercase tracking-[0.15em] text-[11px] leading-tight">
                            {talk.event}
                          </p>
                        </div>

                        <div className="space-y-3 pt-6 border-t border-slate-50 mt-auto">
                          <div className="flex items-center gap-3 text-slate-400">
                            <Calendar className="w-4 h-4 text-blue-600/30 shrink-0" />
                            <span className="text-[10px] font-black uppercase tracking-widest">{talk.date}</span>
                          </div>
                          <div className="flex items-center gap-3 text-slate-400">
                            <MapPin className="w-4 h-4 text-blue-600/30 shrink-0" />
                            <span className="text-[10px] font-black uppercase tracking-widest line-clamp-1">{talk.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
