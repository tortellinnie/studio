'use client';

import { Users, Mic, Landmark } from 'lucide-react';
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
      details: data.beneficiaries,
      title: 'Impacted Communities'
    },
    {
      id: 'speakership',
      label: 'Speakership Reach',
      value: '2,000+',
      description: 'Audience engaged at major innovation fairs.',
      icon: Mic,
      details: data.speakerships,
      title: 'Speaking Sessions'
    },
    {
      id: 'capital',
      label: 'Capital Initiatives',
      value: '₱1.2M+',
      description: 'Secured institutional grants and startup incentives.',
      icon: Landmark,
      details: data.capital,
      title: 'Funding & Support'
    }
  ];

  return (
    <section id="metrics" className="py-16 bg-transparent border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, i) => (
            <Dialog key={i}>
              <DialogTrigger asChild>
                <button className="flex flex-col text-left group space-y-4 outline-none">
                  <div className="flex items-center justify-between w-full">
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500">
                      <stat.icon className="w-4 h-4 text-white/40 group-hover:text-black transition-colors" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 group-hover:text-white/60 transition-colors">
                      Log 2026
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-4xl lg:text-5xl font-black italic tracking-tighter text-white">{stat.value}</h3>
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 group-hover:text-white transition-colors">
                      {stat.label}
                    </p>
                    <p className="text-xs text-white/30 font-medium leading-relaxed max-w-[200px]">
                      {stat.description}
                    </p>
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent className="bg-white border-border text-foreground max-w-lg rounded-3xl p-0 focus:outline-none shadow-2xl overflow-hidden">
                <div className="p-8 border-b border-border bg-gray-50/50">
                  <DialogHeader>
                    <DialogTitle className="text-3xl font-black uppercase italic tracking-tighter">
                      {stat.title}
                    </DialogTitle>
                  </DialogHeader>
                </div>
                
                <ScrollArea className="max-h-[50vh] p-8">
                  <div className="grid gap-4">
                    {stat.details.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between group border-b border-gray-100 pb-4 last:border-0">
                        <span className="font-bold text-foreground/80 text-sm">{item.name}</span>
                        <Badge variant="outline" className="border-border text-muted-foreground text-[8px] font-black uppercase tracking-widest px-3 py-1">
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
      </div>
    </section>
  );
}