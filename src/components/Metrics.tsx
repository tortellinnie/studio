
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
      { name: "FEU Institute of Technology", detail: "Student Body & Library Committee" },
      { name: "QCYDO Scholarship Network", detail: "City-wide Economic Support" },
      { name: "NARA (Reading Advocates)", detail: "National Literacy Initiative" },
      { name: "Musashinova Exchange", detail: "Japan-PH Tech Collaboration" },
      { name: "C-RAM & NERDS 2.0 Projects", detail: "Tech-driven Community Solutions" }
    ],
    speakerships: [
      { name: "AGAPE PH0209 Youth Program", detail: "Community Event" },
      { name: "Musashinova Pitching Event", detail: "Tokyo, Japan" },
      { name: "Philippine Startup Challenge X", detail: "DICT Regional Stage" },
      { name: "NBDB Readers Rising Hackathon", detail: "National Library of PH" },
      { name: "EMC Global Summit", detail: "International Delegate" },
      { name: "FEU Tech Innovation Fair", detail: "Keynote Speaker" },
      { name: "NARA Con 2025", detail: "Literacy Advocate Session" }
    ],
    capital: [
      { name: "C-RAM Solutions Seed Funding", detail: "Venture Capital" },
      { name: "NERDS 2.0 R&D Grants", detail: "Institutional Funding" },
      { name: "Startup QC Prize Capital", detail: "Awarded Capital" },
      { name: "NBDB Innovation Grant", detail: "Innovation Support" },
      { name: "DICT NCR Regional Award", detail: "Project Grant" },
      { name: "DOST Merit Scholarships", detail: "Academic Support" }
    ]
  };

  const stats = [
    {
      id: 'beneficiaries',
      label: 'Direct Beneficiaries',
      value: '300,000+',
      description: 'Impacted across community initiatives',
      icon: Users,
      color: 'text-primary',
      details: data.beneficiaries,
      title: 'Impacted Communities'
    },
    {
      id: 'speakership',
      label: 'Speakership Reach',
      value: '2,000+',
      description: 'Audience at major innovation fairs',
      icon: Mic,
      color: 'text-accent',
      details: data.speakerships,
      title: 'Speaking Sessions'
    },
    {
      id: 'capital',
      label: 'Total Capital',
      value: '₱1.2M+',
      description: 'Secured for startup initiatives',
      icon: Landmark,
      color: 'text-emerald-400',
      details: data.capital,
      title: 'Capital Initiatives'
    }
  ];

  return (
    <section id="metrics" className="relative z-20 pb-24 bg-transparent overflow-visible">
      <div className="container mx-auto px-6 max-w-6xl">
        <TooltipProvider delayDuration={0}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {stats.map((stat, i) => (
              <Dialog key={i}>
                <DialogTrigger asChild>
                  <button className="flex flex-col h-full w-full text-left glass-card p-10 rounded-[2.5rem] border-white/10 group relative transition-all duration-300 pointer-events-auto cursor-pointer shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
                    
                    <div className="flex items-start justify-between h-14 mb-12 relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                        <stat.icon className={`w-7 h-7 ${stat.color} group-hover:text-white transition-colors`} />
                      </div>
                    </div>

                    <div className="absolute top-8 right-10 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[9px] font-black text-primary uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all pointer-events-none">
                      Details
                    </div>

                    <div className="space-y-2 relative z-10">
                      <h3 className="text-5xl font-black text-white tracking-tighter mb-2">{stat.value}</h3>
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">{stat.label}</p>
                      <p className="text-sm text-white/50 font-medium leading-relaxed pt-4">
                        {stat.description}
                      </p>
                    </div>
                  </button>
                </DialogTrigger>
                <DialogContent className="premium-glass border-white/20 text-white max-w-lg rounded-[3rem] p-0 overflow-hidden backdrop-blur-[60px] bg-black/80 focus:outline-none shadow-3xl">
                  <div className="p-12 pb-6">
                    <DialogHeader className="mb-4">
                      <DialogTitle className="text-4xl font-black uppercase italic tracking-tighter">
                        {stat.title}<span className="text-primary">.</span>
                      </DialogTitle>
                    </DialogHeader>
                  </div>
                  
                  <ScrollArea className="max-h-[50vh] px-12 pb-12">
                    <div className="grid gap-4">
                      {stat.details.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.08] transition-colors group">
                          <span className="font-bold text-white/90 text-sm md:text-base pr-4">{item.name}</span>
                          <Badge variant="outline" className="shrink-0 border-primary/40 text-primary text-[10px] font-black uppercase group-hover:bg-primary group-hover:text-white transition-all">
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
