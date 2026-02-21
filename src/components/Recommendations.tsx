'use client';

import * as React from 'react';
import { Quote } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

const testimonials = [
  {
    name: "Dr. Maria Clara",
    role: "RESEARCH DIRECTOR, FEU TECH",
    text: "Shann is a visionary leader who consistently bridges the gap between complex software engineering and high-impact community solutions.",
    avatarUrl: "https://picsum.photos/seed/maria/100/100",
    initials: "MC"
  },
  {
    name: "James Wilson",
    role: "SENIOR ENGINEERING MANAGER, P&G",
    text: "An exceptional technical talent with a rare ability to scale neural networks while maintaining a focus on UX.",
    avatarUrl: "https://picsum.photos/seed/james/100/100",
    initials: "JW"
  },
  {
    name: "Engr. Roberto Santos",
    role: "LEAD ARCHITECT, DOST-NCR",
    text: "I've witnessed Shann's leadership firsthand. He leads with technical authority and a profound sense of social responsibility.",
    avatarUrl: "https://picsum.photos/seed/roberto/100/100",
    initials: "RS"
  },
  {
    name: "Sarah Jenkins",
    role: "PRODUCT LEAD, GOOGLE PH",
    text: "Shann's work in AI prompt design is world-class. He has an intuitive understanding of model behavior and optimization.",
    avatarUrl: "https://picsum.photos/seed/sarah/100/100",
    initials: "SJ"
  },
  {
    name: "Michael Chen",
    role: "CTO, TECHNO INNOVATE",
    text: "Working with Shann on Edge AI implementations was a highlight of our research cycle. He delivers industrial-grade results.",
    avatarUrl: "https://picsum.photos/seed/michael/100/100",
    initials: "MC"
  }
];

export function Recommendations() {
  return (
    <section id="recommendations" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
             backgroundSize: '40px 40px' 
           }} />

      <div className="container mx-auto px-6 max-w-7xl mb-12 relative z-10">
        <div className="space-y-2 border-b border-gray-100 pb-10 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
            Recommendations
          </h2>
          <p className="text-slate-500 text-sm font-medium">What colleagues say about working with me.</p>
        </div>
      </div>

      <div className="relative z-10">
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex w-max space-x-6 px-6 pb-8">
            {testimonials.map((item, idx) => (
              <div key={idx} className="w-[280px] md:w-[320px] shrink-0 whitespace-normal">
                <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-700 group flex flex-col justify-between h-full min-h-[280px]">
                  <div className="space-y-6">
                    <div className="text-blue-600">
                      <Quote className="w-6 h-6 opacity-20" fill="currentColor" />
                    </div>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">
                      "{item.text}"
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 pt-8 mt-auto">
                    <Avatar className="w-10 h-10 border border-slate-50 ring-2 ring-slate-50">
                      <AvatarImage src={item.avatarUrl} alt={item.name} className="object-cover" />
                      <AvatarFallback className="bg-blue-600 text-white font-medium text-[10px]">
                        {item.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-foreground tracking-tight truncate">{item.name}</p>
                      <p className="text-[9px] font-semibold text-blue-600 uppercase tracking-widest truncate">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="h-2 bg-slate-100/50" />
        </ScrollArea>
      </div>
    </section>
  );
}
