'use client';

import * as React from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import useEmblaCarousel from 'embla-carousel-react';

export function Recommendations() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    slidesToScroll: 1
  });
  
  const testimonials = [
    {
      name: "Dr. Maria Clara",
      role: "Research Director, FEU Tech",
      text: "Shann is a visionary leader who consistently bridges the gap between complex software engineering and high-impact community solutions.",
      avatarUrl: "https://picsum.photos/seed/maria/100/100",
      initials: "MC"
    },
    {
      name: "James Wilson",
      role: "Senior Engineering Manager, P&G",
      text: "An exceptional technical talent with a rare ability to scale neural networks while maintaining a focus on UX.",
      avatarUrl: "https://picsum.photos/seed/james/100/100",
      initials: "JW"
    },
    {
      name: "Engr. Roberto Santos",
      role: "Lead Architect, DOST-NCR",
      text: "I've witnessed Shann's leadership firsthand. He leads with technical authority and a profound sense of social responsibility.",
      avatarUrl: "https://picsum.photos/seed/roberto/100/100",
      initials: "RS"
    },
    {
      name: "Sarah Jenkins",
      role: "Product Lead, Google PH",
      text: "Shann's work in AI prompt design is world-class. He has an intuitive understanding of model behavior and optimization.",
      avatarUrl: "https://picsum.photos/seed/sarah/100/100",
      initials: "SJ"
    }
  ];

  return (
    <section id="recommendations" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-10">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight leading-none">
              Recommendations
            </h2>
            <p className="text-slate-500 text-sm font-medium">What colleagues say about working with me.</p>
          </div>
          
          <div className="flex items-center gap-3">
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

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-6">
            {testimonials.map((item, idx) => (
              <div key={idx} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-6">
                <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-700 group relative flex flex-col justify-between h-full min-h-[380px]">
                  <div className="space-y-6">
                    <div className="text-blue-600">
                      <Quote className="w-10 h-10 opacity-20" fill="currentColor" />
                    </div>
                    <p className="text-lg text-slate-500 font-medium leading-relaxed italic">
                      "{item.text}"
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 pt-8 mt-auto">
                    <Avatar className="w-14 h-14 border-2 border-slate-50">
                      <AvatarImage src={item.avatarUrl} alt={item.name} className="object-cover" />
                      <AvatarFallback className="bg-blue-600 text-white font-medium text-xs">
                        {item.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground tracking-tight truncate">{item.name}</p>
                      <p className="text-[10px] font-semibold text-blue-600 uppercase tracking-widest truncate">{item.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}