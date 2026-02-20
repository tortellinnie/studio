'use client';

import { Quote } from 'lucide-react';

export function Recommendations() {
  const testimonials = [
    {
      name: "Dr. Maria Clara",
      role: "Research Director, FEU Tech",
      text: "Shann is a visionary leader who consistently bridges the gap between complex software engineering and high-impact community solutions. His work on GabayDiwa is proof of his commitment to innovation.",
      imageId: "https://picsum.photos/seed/user1/100/100"
    },
    {
      name: "James Wilson",
      role: "Senior Engineering Manager, P&G",
      text: "An exceptional technical talent with a rare ability to scale neural networks while maintaining a focus on UX. Shann's approach to problem-solving is both rigorous and highly creative.",
      imageId: "https://picsum.photos/seed/user2/100/100"
    },
    {
      name: "Engr. Roberto Santos",
      role: "Lead Architect, DOST-NCR",
      text: "I've witnessed Shann's leadership firsthand during the regional innovation fairs. He leads with technical authority and a profound sense of social responsibility.",
      imageId: "https://picsum.photos/seed/user3/100/100"
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
        <div className="text-center mb-24 space-y-4">
          <h2 className="text-[11px] font-black text-blue-600 uppercase tracking-[0.5em]">ENDORSEMENTS</h2>
          <h3 className="text-4xl md:text-5xl font-medium text-foreground uppercase italic tracking-tighter leading-none">
            VOICES OF LEADERSHIP<span className="text-blue-600">.</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-700 group relative flex flex-col justify-between h-full">
              <div className="absolute top-10 right-10 opacity-20 group-hover:opacity-100 group-hover:text-blue-600 transition-all duration-500">
                <Quote className="w-12 h-12" />
              </div>
              
              <div className="relative pt-8 mb-16">
                <div className="w-12 h-1 bg-blue-600 rounded-full mb-10" />
                <p className="text-xl text-slate-500 font-medium leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>
              
              <div className="flex items-center gap-5 pt-10 border-t border-slate-50">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-slate-100 shrink-0">
                  <img src={item.imageId} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="min-w-0">
                  <p className="text-base font-black text-foreground uppercase tracking-tight truncate">{item.name}</p>
                  <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest truncate">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
