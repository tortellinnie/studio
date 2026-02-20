'use client';

import * as React from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import useEmblaCarousel from 'embla-carousel-react';

export function Recommendations() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  
  const testimonials = [
    {
      name: "Dr. Maria Clara",
      role: "Research Director, FEU Tech",
      text: "Shann is a visionary leader who consistently bridges the gap between complex software engineering and high-impact community solutions. His work on GabayDiwa is proof of his commitment to innovation.",
      initials: "MC"
    },
    {
      name: "James Wilson",
      role: "Senior Engineering Manager, P&G",
      text: "An exceptional technical talent with a rare ability to scale neural networks while maintaining a focus on UX. Shann's approach to problem-solving is both rigorous and highly creative.",
      initials: "JW"
    },
    {
      name: "Engr. Roberto Santos",
      role: "Lead Architect, DOST-NCR",
      text: "I've witnessed Shann's leadership firsthand during the regional innovation fairs. He leads with technical authority and a profound sense of social responsibility.",
      initials: "RS"
    }
  ];

  return (
    <section id="recommendations" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
             backgroundSize: '80px 80px' 
           }} />
           
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-medium text-foreground uppercase italic tracking-tighter leading-none">
              Recommendations
            </h2>
            <p className="text-slate-500 text-sm font-medium">What colleagues say about working with me.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full w-12 h-12 border-slate-100 bg-white hover:bg-slate-50"
              onClick={() => emblaApi?.scrollPrev()}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full w-12 h-12 border-slate-100 bg-white hover:bg-slate-50"
              onClick={() => emblaApi?.scrollNext()}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-8">
            {testimonials.map((item, idx) => (
              <div key={idx} className="flex-[0_0_100%] md:flex-[0_0_33.33%] pl-8">
                <div className="bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-700 group relative flex flex-col justify-between h-full min-h-[420px]">
                  <div className="space-y-8">
                    <div className="text-blue-600 opacity-20 group-hover:opacity-100 transition-opacity">
                      <Quote className="w-12 h-12" />
                    </div>
                    <p className="text-xl text-slate-500 font-medium leading-relaxed italic">
                      "{item.text}"
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-5 pt-10 mt-auto">
                    <Avatar className="w-14 h-14 border-2 border-slate-100">
                      <AvatarFallback className="bg-blue-600 text-white font-black text-sm">
                        {item.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <p className="text-base font-black text-foreground uppercase tracking-tight truncate">{item.name}</p>
                      <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest truncate">{item.role}</p>
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
