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

export function Metrics() {
  const data = {
    beneficiaries: [
      { name: "AGAPE PH0209 Youth Network", detail: "600+ Direct Beneficiaries" },
      { name: "SK Commonwealth Council", detail: "10,000+ Impacted Youth" },
      { name: "DOST-NCR Alliance (NADS)", detail: "Regional Scholar Community" },
      { name: "FEU Institute of Technology", detail: "Student Body & Library Committee" },
      { name: "QCYDO Scholarship Network", detail: "City-wide Economic Support" },
      { name: "NARA (Reading Advocates)", detail: "National Literacy Initiative" },
      { name: "Musashinova Exchange", detail: "Japan-PH Tech Collaboration" },
      { name: "C-RAM & NERDS 2.0 Projects", detail: "Tech-driven Community Solutions" }
    ],
    speakerships: [
      { name: "Musashinova Pitching Event", detail: "Tokyo, Japan" },
      { name: "Philippine Startup Challenge X", detail: "DICT Regional Stage" },
      { name: "NBDB Readers Rising Hackathon", detail: "National Library of PH" },
      { name: "EMC Global Summit", detail: "International Delegate" },
      { name: "FEU Tech Innovation Fair", detail: "Keynote Speaker" },
      { name: "NARA Con 2025", detail: "Literacy Advocate Session" }
    ],
    capital: [
      { name: "C-RAM Solutions Seed Funding", detail: "₱600,000" },
      { name: "NERDS 2.0 R&D Grants", detail: "₱150,000" },
      { name: "Startup QC Prize Capital", detail: "₱50,000+" },
      { name: "NBDB Innovation Grant", detail: "₱50,000+" },
      { name: "DICT NCR Regional Award", detail: "Project Funding" },
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
      color: 'text-emerald-500',
      details: data.capital,
      title: 'Capital Initiatives'
    }
  ];

  return (
    <section className="relative z-20 py-16 bg-background">
      <div className="container mx-auto px-6">
        <TooltipProvider delayDuration={0}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {stats.map((stat, i) => (
              <Dialog key={i}>
                <DialogTrigger asChild>
                  <button className="flex flex-col h-full w-full text-left glass-card p-8 rounded-[2rem] border-white/5 hover:border-primary/20 transition-all duration-500 group relative">
                    {/* Header: Fixed Height for consistency */}
                    <div className="flex items-start justify-between h-14 mb-10">
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                        <stat.icon className={`w-6 h-6 ${stat.color}`} />
                      </div>
                      <div className="flex flex-col items-end pt-5">
                         <div className="h-1 w-12 bg-white/5 rounded-full overflow-hidden">
                           <div className="h-full bg-primary w-2/3 group-hover:w-full transition-all duration-700" />
                         </div>
                      </div>
                    </div>

                    {/* Absolute Hover Hint */}
                    <div className="absolute top-7 right-8 px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-[8px] font-black text-primary uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      Click to view details
                    </div>

                    {/* Content: No mt-auto to ensure numbers align from the top of this block */}
                    <div className="space-y-1">
                      <h3 className="text-4xl font-black text-white tracking-tighter">{stat.value}</h3>
                      <p className="text-[10px] font-black uppercase tracking-widest text-primary">{stat.label}</p>
                      <p className="text-sm text-muted-foreground font-medium leading-tight pt-3">
                        {stat.description}
                      </p>
                    </div>
                  </button>
                </DialogTrigger>
                <DialogContent className="glass-card border-white/10 text-white max-w-lg rounded-[2.5rem] p-10">
                  <DialogHeader className="mb-6">
                    <DialogTitle className="text-3xl font-black uppercase italic tracking-tighter">
                      {stat.title}<span className="text-primary">.</span>
                    </DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-3">
                    {stat.details.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-colors">
                        <span className="font-bold text-white/90 text-sm">{item.name}</span>
                        <Badge variant="outline" className="border-primary/30 text-primary text-[9px] font-black uppercase">
                          {item.detail}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
}
