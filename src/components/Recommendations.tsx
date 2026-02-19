'use client';

import { Quote } from 'lucide-react';

export function Recommendations() {
  const testimonials = [
    {
      name: "Dr. Maria Clara",
      role: "Research Director, FEU Tech",
      text: "Shann is a visionary leader who consistently bridges the gap between complex software engineering and high-impact community solutions. His work on GabayDiwa is proof of his commitment to innovation.",
      imageId: "profile-headshot"
    },
    {
      name: "James Wilson",
      role: "Senior Engineering Manager, P&G",
      text: "An exceptional technical talent with a rare ability to scale neural networks while maintaining a focus on UX. Shann's approach to problem-solving is both rigorous and highly creative.",
      imageId: "profile-headshot"
    },
    {
      name: "Engr. Roberto Santos",
      role: "Lead Architect, DOST-NCR",
      text: "I've witnessed Shann's leadership firsthand during the regional innovation fairs. He leads with technical authority and a profound sense of social responsibility.",
      imageId: "profile-headshot"
    }
  ];

  return (
    <section id="recommendations" className="py-24 bg-gray-50 border-t border-gray-100 overflow-visible">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-[11px] font-black text-primary uppercase tracking-[0.5em]">ENDORSEMENTS</h2>
          <h3 className="text-4xl md:text-5xl font-black text-foreground uppercase italic tracking-tighter leading-none">Voices of Leadership.</h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 relative flex flex-col justify-between">
              <div className="absolute -top-6 left-12 w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-xl shadow-primary/20">
                <Quote className="w-6 h-6 text-white" />
              </div>
              
              <p className="text-lg text-foreground/70 font-medium leading-relaxed italic mb-10">
                "{item.text}"
              </p>
              
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden border-2 border-primary/10">
                  <img src="https://picsum.photos/seed/user/100/100" alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-sm font-black text-foreground uppercase tracking-tight">{item.name}</p>
                  <p className="text-[10px] font-bold text-primary uppercase tracking-widest">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
