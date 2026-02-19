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
    <section id="metrics" className="py-24 bg-transparent">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, i) => (
            <Dialog key={i}>
              <DialogTrigger asChild>
                <button className="flex flex-col text-left group space-y-6">
                  <div className="flex items-center justify-between w-full">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500">
                      <stat.icon className="w-5 h-5 text-white/40 group-hover:text-black transition-colors" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 group-hover:text-white/60 transition-colors">
                      Log 2026
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-5xl lg:text-6xl font-black italic tracking-tighter text-white">{stat.value}</h3>
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 group-hover:text-white transition-colors">
                      {stat.label}
                    </p>
                    <p className="text-sm text-white/30 font-medium leading-relaxed max-w-[240px]">
                      {stat.description}
                    </p>
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent className="bg-[#02040a] border-white/5 text-white max-w-lg rounded-none p-0 focus:outline-none">
                <div className="p-10 border-b border-white/5">
                  <DialogHeader>
                    <DialogTitle className="text-4xl font-black uppercase italic tracking-tighter">
                      {stat.title}
                    </DialogTitle>
                  </DialogHeader>
                </div>
                
                <ScrollArea className="max-h-[60vh] p-10">
                  <div className="grid gap-6">
                    {stat.details.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between group border-b border-white/5 pb-4">
                        <span className="font-bold text-white/60 text-sm">{item.name}</span>
                        <Badge variant="outline" className="border-white/10 text-white/40 text-[9px] font-black uppercase">
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