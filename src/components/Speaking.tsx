
'use client';

import * as React from 'react';
import { Calendar, MapPin, Monitor, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import useEmblaCarousel from 'embla-carousel-react';

const speakingData = [
  {
    type: 'Workshop',
    title: 'Product Building with AI Workshop',
    event: 'Philippine Innovation Conference 2025',
    date: 'Nov 21, 2025',
    location: 'University of Batangas',
    color: 'bg-blue-500'
  },
  {
    type: 'Talk',
    title: "GitHub Universe'25 Recap: AI Edition",
    event: 'az:Repo: The Code and Cloud Agentic Workshop',
    date: 'Nov 14, 2025',
    location: 'Microsoft Office Philippines',
    color: 'bg-red-500'
  },
  {
    type: 'Talk',
    title: "G-Trends: A Developer's Guide to Google's Next-Gen Toolkit",
    event: 'InSession 2025',
    date: 'Nov 6, 2025',
    location: 'TUP - Manila',
    color: 'bg-amber-500'
  },
  {
    type: 'Talk',
    title: 'Internship Employability Session: Resume, LinkedIn, GitHub, and...',
    event: 'DEPLOY():',
    date: 'Nov 5, 2025',
    location: 'Online',
    color: 'bg-green-500'
  },
  {
    type: 'Talk',
    title: 'Open Source Series: Licensing, Version Control, Contributing, and...',
    event: 'Hacktoberfest Philippines 2025',
    date: 'October 30, 2025',
    location: 'National University - Las Piñas',
    color: 'bg-blue-500'
  },
  {
    type: 'Workshop',
    title: "Let's Git Ready: From Commit to Career",
    event: "Let's Git Ready",
    date: 'October 24, 2025',
    location: 'Online',
    color: 'bg-red-500'
  },
  {
    type: 'Talk',
    title: "Supercharge your ML Research with Google's TPU Research Cloud",
    event: 'SOFTCON 2025',
    date: 'October 17, 2025',
    location: 'Online',
    color: 'bg-amber-500'
  },
  {
    type: 'Talk',
    title: 'Boost ML Research with TPU Research Cloud',
    event: 'Devfest 2025',
    date: 'October 13, 2025',
    location: 'LaunchGarage, Quezon City',
    color: 'bg-green-500'
  }
];

export function Speaking() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    skipSnaps: false,
    duration: 35
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
    <section id="speaking" className="py-24 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="space-y-3">
            <h2 className="text-4xl md:text-5xl font-medium text-foreground tracking-tighter uppercase italic">
              SPEAKING
            </h2>
            <p className="text-muted-foreground text-xs font-medium max-w-xl">
              Sharing insights at conferences and events across the technology landscape.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <Button variant="outline" className="rounded-full border-gray-200 hover:bg-gray-50 text-[10px] font-black uppercase tracking-widest px-8 h-12 gap-3 shadow-sm">
              All Speakerships <ArrowRight className="w-4 h-4" />
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
              {speakingData.map((talk, idx) => {
                const isActive = selectedIndex === idx;
                return (
                  <div 
                    key={idx} 
                    className="flex-[0_0_85%] md:flex-[0_0_32%] lg:flex-[0_0_28%] pl-6"
                  >
                    <div 
                      className={cn(
                        "group bg-white rounded-[3.5rem] border border-gray-100 p-10 md:p-12 aspect-[4/5.5] flex flex-col justify-between transition-all duration-700 ease-premium",
                        isActive ? "scale-100 opacity-100 shadow-2xl shadow-black/5 ring-1 ring-primary/5" : "scale-[0.95] opacity-50 shadow-none"
                      )}
                    >
                      <div className="space-y-8">
                        {/* Tiny & Cute Tag */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-black/[0.05] shadow-sm">
                          <div className={cn("w-1.5 h-1.5 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.1)]", talk.color)} />
                          <span className="text-[9px] font-black uppercase tracking-[0.15em] text-foreground/60">{talk.type}</span>
                        </div>
                        
                        <div className="space-y-4">
                          <h3 className="text-xl md:text-2xl font-medium text-foreground uppercase italic tracking-tighter leading-[1.2] group-hover:text-primary transition-colors duration-500">
                            {talk.title}
                          </h3>
                          <p className="text-primary text-[11px] font-bold uppercase tracking-[0.15em] leading-snug">
                            {talk.event}
                          </p>
                        </div>

                        <div className="space-y-3 pt-4">
                          <div className="flex items-center gap-3 text-muted-foreground/60">
                            <Calendar className="w-4 h-4 text-primary/30" />
                            <span className="text-[10px] font-black uppercase tracking-widest">{talk.date}</span>
                          </div>
                          <div className="flex items-center gap-3 text-muted-foreground/60">
                            <MapPin className="w-4 h-4 text-primary/30" />
                            <span className="text-[10px] font-black uppercase tracking-widest line-clamp-1">{talk.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-8 border-t border-gray-50">
                        <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-foreground hover:text-primary transition-all group/btn">
                          View Slides 
                          <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:text-white transition-all">
                            <Monitor className="w-4 h-4" />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center gap-2 mt-16">
          {speakingData.map((_, i) => (
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
