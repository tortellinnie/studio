'use client';

import * as React from 'react';
import Image from 'next/image';
import { 
  Calendar, 
  MapPin, 
  ChevronLeft, 
  ChevronRight, 
  MessageSquarePlus, 
  Presentation, 
  ImagePlus
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import useEmblaCarousel from 'embla-carousel-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from '@/components/ui/scroll-area';

const speakingData = [
  {
    type: 'Talk',
    title: 'Internship Employability Session',
    event: 'deploy(): 2025',
    date: 'Nov 5, 2025',
    location: 'Online Session',
    color: 'bg-purple-500',
    tag: 'CAREER',
    imageId: 'featured-aws-reinvent',
    slidesUrl: '#',
    gallery: [
      'https://picsum.photos/seed/speak8/800/600'
    ]
  },
  {
    type: 'Workshop',
    title: 'Product Building with AI Workshop',
    event: 'Philippine Innovation Conference 2025',
    date: 'Nov 21, 2025',
    location: 'University of Batangas',
    color: 'bg-emerald-500',
    tag: 'AI',
    imageId: 'featured-prompt-challenge',
    slidesUrl: '#',
    gallery: [
      'https://picsum.photos/seed/speak1/800/600',
      'https://picsum.photos/seed/speak2/800/600',
      'https://picsum.photos/seed/speak3/800/600'
    ]
  },
  {
    type: 'Talk',
    title: "GitHub Universe'25 Recap: AI Edition",
    event: 'az:Repo: The Agentic Workshop',
    date: 'Nov 14, 2025',
    location: 'Microsoft Office Philippines',
    color: 'bg-blue-500',
    tag: 'AUTOMATION',
    imageId: 'featured-github-universe',
    slidesUrl: '#',
    gallery: [
      'https://picsum.photos/seed/speak4/800/600',
      'https://picsum.photos/seed/speak5/800/600'
    ]
  },
  {
    type: 'Talk',
    title: "G-Trends: Google's Next-Gen Toolkit",
    event: 'Insession 2025',
    date: 'Nov 6, 2025',
    location: 'TUP - Manila',
    color: 'bg-amber-500',
    tag: 'CLOUD',
    imageId: 'featured-tpu-research',
    slidesUrl: '#',
    gallery: [
      'https://picsum.photos/seed/speak6/800/600',
      'https://picsum.photos/seed/speak7/800/600'
    ]
  }
];

const categories = ['All', 'AI', 'CAREER', 'CLOUD', 'AUTOMATION'];

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
    if (!api) return;
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
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
             backgroundSize: '40px 40px' 
           }} />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-10">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
              Speaking
            </h2>
            <p className="text-slate-500 text-sm font-medium max-w-xl">
              Sharing engineering insights and leadership strategies at conferences across the technology landscape.
            </p>
            
            <div className="flex flex-wrap gap-2 pt-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-6 py-2 rounded-full text-[10px] font-semibold transition-all duration-300 border",
                    activeCategory === cat 
                      ? "bg-blue-600 text-white border-blue-600 shadow-lg" 
                      : "bg-white border-slate-100 text-slate-400 hover:border-blue-600/30",
                    "uppercase tracking-widest"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-4 self-end md:self-center">
            <Button className="rounded-2xl bg-blue-600 text-white hover:bg-blue-700 text-[10px] font-semibold uppercase tracking-widest px-8 h-12 gap-3 shadow-xl shadow-blue-600/20">
              Book me to speak <MessageSquarePlus className="w-4 h-4" />
            </Button>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full w-10 h-10 border-slate-100 bg-white hover:bg-slate-50"
                onClick={() => emblaApi?.scrollPrev()}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full w-10 h-10 border-slate-100 bg-white hover:bg-slate-50"
                onClick={() => emblaApi?.scrollNext()}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-visible" ref={emblaRef}>
            <div className="flex -ml-6">
              {filteredData.map((talk, idx) => {
                const imageData = PlaceHolderImages.find(img => img.id === talk.imageId);
                
                return (
                  <div 
                    key={idx} 
                    className="flex-[0_0_90%] md:flex-[0_0_40%] lg:flex-[0_0_31%] pl-6"
                  >
                    <div className="group bg-white rounded-[3rem] border border-slate-100 overflow-hidden flex flex-col transition-all duration-500 hover:shadow-2xl h-full">
                      <div className="relative aspect-[4/3] w-full overflow-hidden shrink-0">
                        {imageData && (
                          <Image 
                            src={imageData.imageUrl} 
                            alt={talk.title}
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            data-ai-hint="speaker stage"
                          />
                        )}
                        <div className="absolute top-5 left-5">
                           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-white shadow-sm">
                             <div className={cn("w-1.5 h-1.5 rounded-full", talk.color)} />
                             <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-800">{talk.type}</span>
                           </div>
                        </div>
                      </div>

                      <div className="flex-1 p-8 flex flex-col">
                        <div className="space-y-6 mb-8">
                          <div className="space-y-3">
                            <h3 className="text-lg font-semibold text-foreground leading-tight group-hover:text-blue-600 transition-colors">
                              {talk.title}
                            </h3>
                            <p className="text-blue-600 font-semibold uppercase text-[10px] tracking-widest">
                              {talk.event}
                            </p>
                          </div>

                          <div className="space-y-3">
                            <div className="flex items-center gap-3 text-slate-400">
                              <Calendar className="w-3.5 h-3.5 text-blue-600/30 shrink-0" />
                              <span className="text-xs font-medium text-slate-500">{talk.date}</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-400">
                              <MapPin className="w-3.5 h-3.5 text-blue-600/30 shrink-0" />
                              <span className="text-xs font-medium text-slate-500 line-clamp-1">{talk.location}</span>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 mt-auto">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="h-11 rounded-2xl border-slate-100 hover:bg-slate-50 text-[10px] font-semibold uppercase tracking-widest gap-2 w-full"
                            asChild
                          >
                            <a href={talk.slidesUrl} target="_blank" className="flex items-center justify-center gap-2">
                              <Presentation className="w-3.5 h-3.5 text-blue-600" />
                              Slides
                            </a>
                          </Button>
                          
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="h-11 rounded-2xl border-slate-100 hover:bg-slate-50 text-[10px] font-semibold uppercase tracking-widest gap-2 w-full"
                              >
                                <ImagePlus className="w-3.5 h-3.5 text-slate-400" />
                                Gallery
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl bg-white border-slate-200 rounded-[2.5rem] p-0 overflow-hidden shadow-3xl">
                              <div className="p-8 border-b border-slate-100 bg-slate-50/50">
                                <DialogHeader>
                                  <DialogTitle className="text-2xl font-semibold text-foreground">
                                    Event Gallery: <span className="text-blue-600">{talk.title}</span>
                                  </DialogTitle>
                                </DialogHeader>
                              </div>
                              <ScrollArea className="max-h-[70vh] p-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  {talk.gallery.map((img, i) => (
                                    <div key={i} className="relative aspect-video rounded-2xl overflow-hidden border border-slate-100 group/img">
                                      <Image 
                                        src={img} 
                                        alt={`Gallery ${i + 1}`} 
                                        fill 
                                        className="object-cover transition-transform duration-500 group-hover/img:scale-105"
                                        data-ai-hint="event photo"
                                      />
                                    </div>
                                  ))}
                                </div>
                              </ScrollArea>
                            </DialogContent>
                          </Dialog>
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
