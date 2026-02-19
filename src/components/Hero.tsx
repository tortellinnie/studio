'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, FileText } from 'lucide-react';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';

export function Hero() {
  const metricData = {
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

  const compactStats = [
    { label: 'BENEFICIARIES', value: '300K+', details: metricData.beneficiaries, title: 'Impacted Communities' },
    { label: 'SPEAKERSHIP AUDIENCES', value: '2,000+', details: metricData.speakerships, title: 'Speaking Sessions' },
    { label: 'CAPITAL SECURED', value: '₱1.2M+', details: metricData.capital, title: 'Funding & Support' },
  ];

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 pt-32 pb-16 overflow-hidden bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center space-y-16">
          
          <div className="space-y-12 max-w-5xl">
            <div className="space-y-6">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-medium leading-[1.05] tracking-tight text-foreground italic uppercase animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
                  TURNING VISION INTO <br />
                  INTELLIGENT SYSTEMS <br />
                  THAT SCALE<span className="text-primary">.</span>
                </h1>
                <p className="text-[11px] font-black text-muted-foreground uppercase tracking-[0.5em] animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                  SHANN KARL FELIPE · AI/LEADERSHIP
                </p>
              </div>
            </div>
            
            <div className="animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
              <div className="flex flex-wrap justify-center items-center gap-6 pt-2">
                <Button size="lg" className="rounded-full bg-black text-white hover:bg-black/90 h-14 px-12 text-[11px] font-black uppercase tracking-widest flex items-center gap-3 group shadow-2xl" asChild>
                  <Link href="/#contact">
                    Let's Talk
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full h-14 px-12 text-[11px] font-black uppercase tracking-widest bg-white border-border hover:bg-gray-50 flex items-center gap-3" asChild>
                  <Link href="/resume">
                    <FileText className="w-5 h-5" />
                    Resume
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-24 mt-24 border-t border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-32 w-full animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700">
          {compactStats.map((stat, i) => (
            <Dialog key={i}>
              <DialogTrigger asChild>
                <button className="flex flex-col items-center lg:items-start text-center lg:text-left hover:opacity-70 transition-opacity outline-none group space-y-6 w-full">
                  <span className="text-6xl md:text-7xl lg:text-8xl font-black italic tracking-tighter text-foreground leading-none group-hover:text-primary transition-colors">
                    {stat.value}
                  </span>
                  <p className="text-[11px] font-black uppercase tracking-[0.5em] text-muted-foreground/60 leading-tight whitespace-nowrap">
                    {stat.label}
                  </p>
                </button>
              </DialogTrigger>
              <DialogContent className="bg-white border-border text-foreground max-w-lg rounded-[2.5rem] p-0 focus:outline-none shadow-3xl overflow-hidden">
                <div className="p-10 border-b border-border bg-gray-50/50">
                  <DialogHeader>
                    <DialogTitle className="text-4xl font-black uppercase italic tracking-tighter">
                      {stat.title}
                    </DialogTitle>
                  </DialogHeader>
                </div>
                
                <ScrollArea className="max-h-[50vh] p-10">
                  <div className="grid gap-6">
                    {stat.details.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between group border-b border-gray-100 pb-6 last:border-0">
                        <span className="font-bold text-foreground/80 text-base">{item.name}</span>
                        <Badge variant="outline" className="border-border text-muted-foreground text-[9px] font-black uppercase tracking-widest px-4 py-1.5">
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
