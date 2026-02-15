'use client';

import { Users, Mic, Landmark } from 'lucide-react';
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';

export function Metrics() {
  const data = {
    beneficiaries: [
      { name: "SK Commonwealth Council", detail: "300,000+ Impacted Youth" },
      { name: "AGAPE PH0209 Youth Network", detail: "600+ Direct Beneficiaries" },
      { name: "DOST-NCR Alliance (NADS)", detail: "Regional Scholar Community" },
      { name: "FEU Institute of Technology", detail: "Library Committee Presidency" },
      { name: "QCYDO Scholarship Network", detail: "City-wide Economic Support" },
      { name: "NARA (Reading Advocates)", detail: "National Literacy Initiative" },
      { name: "Musashinova Exchange", detail: "Japan-PH Tech Collaboration" },
      { name: "C-RAM & NERDS 2.0 Projects", detail: "Tech-driven Community Solutions" }
    ],
    speakerships: [
      { name: "AGAPE PH0209 Community Event", detail: "Youth Program Host" },
      { name: "Musashinova Pitching Event", detail: "Tokyo, Japan" },
      { name: "Philippine Startup Challenge X", detail: "DICT Regional Stage" },
      { name: "NBDB Readers Rising Hackathon", detail: "National Library of PH" },
      { name: "EMC Global Summit", detail: "International Delegate" },
      { name: "FEU Tech Innovation Fair", detail: "Keynote Speaker" },
      { name: "NARA Con 2025", detail: "Literacy Advocate Session" }
    ],
    capital: [
      { name: "C-RAM Solutions Funding", detail: "Venture Capital Seed" },
      { name: "NERDS 2.0 R&D Grants", detail: "Institutional R&D Support" },
      { name: "Startup QC Prize Capital", detail: "Awarded Innovation Grant" },
      { name: "NBDB Innovation Grant", detail: "Cultural Tech Support" },
      { name: "DICT NCR Regional Award", detail: "Regional Project Grant" },
      { name: "DOST Merit Scholarships", detail: "Academic Support" }
    ]
  };

  const stats = [
    {
      id: 'beneficiaries',
      label: 'Direct Beneficiaries',
      value: '300,000+',
      description: 'Impacted across community initiatives in Manila.',
      icon: Users,
      color: 'text-primary',
      details: data.beneficiaries,
      title: 'Impacted Communities'
    },
    {
      id: 'speakership',
      label: 'Speakership Reach',
      value: '2,000+',
      description: 'Audience engaged at major innovation fairs.',
      icon: Mic,
      color: 'text-accent',
      details: data.speakerships,
      title: 'Speaking Sessions'
    },
    {
      id: 'capital',
      label: 'Capital Initiatives',
      value: 'Secured',
      description: 'Institutional grants for startup innovation.',
      icon: Landmark,
      color: 'text-white/60',
      details: data.capital,
      title: 'Funding & Support'
    }
  ];

  return (
    <section id="metrics" className="relative z-20 pb-24 bg-transparent overflow-visible">
      <div className="container mx-auto px-6 max-w-6xl">
        <TooltipProvider delayDuration={0}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {stats.map((stat, i) => (
              <Dialog key={i}>
                <DialogTrigger asChild>
                  <button className="flex flex-col h-full w-full text-left glass-card p-10 rounded-[2rem] border-white/5 group relative transition-all duration-300 pointer-events-auto cursor-pointer shadow-lg">
                    <div className="flex items-start justify-between h-12 mb-8 relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                        <stat.icon className={`w-6 h-6 ${stat.color} group-hover:text-white transition-colors`} />
                      </div>
                      <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[8px] font-black text-white/40 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                        View Log
                      </div>
                    </div>

                    <div className="space-y-1 relative z-10">
                      <h3 className="text-4xl font-black text-white tracking-tighter mb-1">{stat.value}</h3>
                      <p className="text-[9px] font-black uppercase tracking-[0.2em] text-primary">{stat.label}</p>
                      <p className="text-xs text-white/40 font-medium leading-relaxed pt-3">
                        {stat.description}
                      </p>
                    </div>
                  </button>
                </DialogTrigger>
                <DialogContent className="premium-glass border-white/10 text-white max-w-lg rounded-[2rem] p-0 overflow-hidden backdrop-blur-3xl bg-[#02040a]/90 focus:outline-none">
                  <div className="p-10 pb-4">
                    <DialogHeader className="mb-2">
                      <DialogTitle className="text-3xl font-black uppercase italic tracking-tighter">
                        {stat.title}<span className="text-primary">.</span>
                      </DialogTitle>
                    </DialogHeader>
                  </div>
                  
                  <ScrollArea className="max-h-[50vh] px-10 pb-10">
                    <div className="grid gap-3">
                      {stat.details.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors group">
                          <span className="font-bold text-white/80 text-sm pr-4">{item.name}</span>
                          <Badge variant="outline" className="shrink-0 border-primary/20 text-primary text-[9px] font-black uppercase">
                            {item.detail}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
}
