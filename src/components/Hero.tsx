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
import { cn } from '@/lib/utils';

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
    { label: 'SPEAKERSHIPS', value: '2,000+', details: metricData.speakerships, title: 'Speaking Sessions' },
    { label: 'CAPITAL SECURED', value: '₱1.2M+', details: metricData.capital, title: 'Funding & Support' },
  ];

  const specialties = [
    { 
      title: 'ARTIFICIAL INTELLIGENCE', 
      desc: 'Neural Networks & Computer Vision',
      color: 'from-indigo-600 to-violet-800',
      span: 'col-span-2 row-span-1'
    },
    { 
      title: 'SOFTWARE SOLUTIONS', 
      desc: 'Scalable Architecture',
      color: 'from-slate-800 to-slate-950',
      span: 'col-span-1 row-span-2'
    },
    { 
      title: 'AUTOMATION', 
      desc: 'Intelligent Workflows',
      color: 'from-blue-900 to-indigo-950',
      span: 'col-span-1 row-span-1'
    },
    { 
      title: 'CLOUD & IOT', 
      desc: 'Distributed Edge Systems',
      color: 'from-gray-400 to-gray-600',
      span: 'col-span-1 row-span-1'
    }
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-32 pb-16 overflow-hidden bg-white">
      {/* Light Mesh Background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left Column: Mission Typography */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-foreground italic uppercase">
                TURNING VISION INTO <br />
                INTELLIGENT SYSTEMS <br />
                <span className="text-primary">THAT SCALE.</span>
              </h1>
              <div className="flex items-center gap-4 text-muted-foreground/60">
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">SHANN KARL FELIPE</span>
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">AI · LEADERSHIP</span>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-6">
              <Button size="lg" className="rounded-full bg-black text-white hover:bg-black/90 h-14 px-10 text-[11px] font-black uppercase tracking-widest flex items-center gap-3 group shadow-2xl" asChild>
                <Link href="/#contact">
                  Initiate Discussion
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full h-14 px-10 text-[11px] font-black uppercase tracking-widest bg-white border-border hover:bg-gray-50 flex items-center gap-3" asChild>
                <Link href="/resume">
                  <FileText className="w-4 h-4" />
                  Technical Resume
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column: Technical Lattice Diagram */}
          <div className="relative">
            {/* Leadership Axis */}
            <div className="absolute -left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent flex flex-col justify-center items-center">
              <div className="bg-white px-2 py-4 -rotate-90 origin-center whitespace-nowrap">
                <span className="text-[9px] font-black uppercase tracking-[0.6em] text-primary">STRATEGIC LEADERSHIP</span>
              </div>
            </div>

            {/* Bento Specialty Grid */}
            <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[440px]">
              {specialties.map((spec, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "relative group overflow-hidden rounded-[2rem] p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl shadow-sm border border-black/[0.03]",
                    spec.span,
                    "bg-gradient-to-br",
                    spec.color
                  )}
                >
                  {/* Decorative Circuit Lines */}
                  <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 100 100">
                    <line x1="0" y1="20" x2="100" y2="20" stroke="white" strokeWidth="0.5" />
                    <line x1="20" y1="0" x2="20" y2="100" stroke="white" strokeWidth="0.5" />
                  </svg>

                  <div className="relative z-10">
                    <h3 className="text-white text-[11px] font-black uppercase tracking-widest leading-tight mb-2">
                      {spec.title}
                    </h3>
                    <p className="text-white/40 text-[9px] font-bold uppercase tracking-wider">
                      {spec.desc}
                    </p>
                  </div>

                  <div className="absolute bottom-6 right-8 w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stretched Metrics Row (Classy & Intelligent) */}
        <div className="pt-12 border-t border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
          {compactStats.map((stat, i) => (
            <Dialog key={i}>
              <DialogTrigger asChild>
                <button className="flex flex-col items-center lg:items-start text-center lg:text-left hover:opacity-70 transition-opacity outline-none group space-y-3 w-full">
                  <span className="text-5xl lg:text-7xl font-black italic tracking-tighter text-foreground leading-none group-hover:text-primary transition-colors">
                    {stat.value}
                  </span>
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/60 leading-tight">
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
