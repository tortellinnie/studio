'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, FileText } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
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
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const partners = [
    { name: "Procter & Gamble (P&G)", logoId: "logo-png" },
    { name: "DOST Philippines", logoId: "logo-dost" },
    { name: "DICT Philippines", logoId: "logo-dict" },
    { name: "Quezon City Government", logoId: "logo-qc" },
    { name: "NBDB-Philippines", logoId: "logo-nbdb" },
    { name: "DTI Philippines", logoId: "logo-dti" },
    { name: "SK Commonwealth", logoId: "logo-sk" },
    { name: "EMC Global", logoId: "logo-emc" },
    { name: "PLDT-Smart", logoId: "logo-pldtsmart" },
    { name: "Department of Agriculture", logoId: "logo-da" },
    { name: "PSA", logoId: "logo-psa" }
  ];

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
    { label: 'Beneficiaries', value: '300k+', details: metricData.beneficiaries, title: 'Impacted Communities' },
    { label: 'Speakerships', value: '2,000+', details: metricData.speakerships, title: 'Speaking Sessions' },
    { label: 'Capital Secured', value: '₱1.2m+', details: metricData.capital, title: 'Funding & Support' },
  ];

  const specialties = [
    { 
      title: 'Artificial Intelligence', 
      desc: 'Neural Networks & Computer Vision',
      color: 'from-blue-600 to-blue-700',
      span: 'col-span-2 row-span-1'
    },
    { 
      title: 'Software Solutions', 
      desc: 'Scalable Architecture',
      color: 'from-slate-800 to-slate-900',
      span: 'col-span-1 row-span-2'
    },
    { 
      title: 'Automation', 
      desc: 'Intelligent Workflows',
      color: 'from-indigo-800 to-indigo-950',
      span: 'col-span-1 row-span-1'
    },
    { 
      title: 'Cloud & IoT', 
      desc: 'Distributed Edge Systems',
      color: 'from-slate-400 to-slate-500',
      span: 'col-span-1 row-span-1'
    }
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20 pb-8 overflow-hidden bg-transparent hero-glow">
      <div className="container mx-auto max-w-7xl relative z-10 flex flex-col h-full justify-between">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-10">
          <div className="space-y-10">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold leading-[1.1] tracking-tight text-foreground">
                Turning vision into <br />
                intelligent systems <br />
                <span className="text-primary">that scale.</span>
              </h1>

              <div className="flex items-center gap-4 text-sm font-medium text-slate-400">
                <span>Shann Karl Felipe • AI & Leadership</span>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" className="rounded-full bg-black text-white hover:bg-black/90 h-12 px-8 text-sm font-medium flex items-center gap-3 group shadow-2xl" asChild>
                <Link href="/#contact">
                  Initiate Discussion
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full h-12 px-8 text-sm font-medium bg-white border-border hover:bg-gray-50 flex items-center gap-3" asChild>
                <Link href="/resume">
                  <FileText className="w-4 h-4" />
                  Technical Resume
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent flex flex-col justify-center items-center">
              <div className="bg-white/50 backdrop-blur-sm px-2 py-4 -rotate-90 origin-center whitespace-nowrap">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">STRATEGIC LEADERSHIP</span>
              </div>
            </div>

            <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[340px]">
              {specialties.map((spec, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "relative group overflow-hidden rounded-[2.5rem] p-8 flex flex-col justify-between transition-all duration-500 hover:shadow-2xl shadow-sm border border-black/[0.03]",
                    spec.span,
                    "bg-gradient-to-br",
                    spec.color
                  )}
                >
                  <div className="relative z-10 space-y-2">
                    <h3 className="text-white text-lg font-semibold tracking-tight">
                      {spec.title}
                    </h3>
                    <p className="text-white/60 text-xs font-medium leading-relaxed">
                      {spec.desc}
                    </p>
                  </div>

                  <div className="absolute bottom-8 right-8 w-1 h-1 rounded-full bg-white/20 group-hover:bg-white transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex justify-center pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-5xl">
              {compactStats.map((stat, i) => (
                <Dialog key={i}>
                  <DialogTrigger asChild>
                    <button className="flex flex-col items-center text-center hover:opacity-70 transition-opacity outline-none group space-y-2 w-full">
                      <span className="text-5xl lg:text-7xl font-semibold tracking-tighter text-primary leading-none">
                        {stat.value}
                      </span>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                        {stat.label}
                      </p>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="bg-white border-border text-foreground max-w-lg rounded-[2.5rem] p-0 focus:outline-none shadow-3xl overflow-hidden">
                    <div className="p-10 border-b border-border bg-slate-50">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-semibold tracking-tight text-primary">
                          {stat.title}
                        </DialogTitle>
                      </DialogHeader>
                    </div>
                    
                    <ScrollArea className="max-h-[50vh] p-10">
                      <div className="grid gap-6">
                        {stat.details.map((item, idx) => (
                          <div key={idx} className="flex items-center justify-between group border-b border-slate-100 pb-6 last:border-0">
                            <span className="font-medium text-foreground/80 text-sm">{item.name}</span>
                            <Badge variant="outline" className="border-border text-slate-500 text-[9px] font-semibold uppercase tracking-wider px-3 py-1">
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

          <div className="pt-6 border-t border-black/[0.05] overflow-hidden">
            <div className="flex flex-nowrap items-center justify-center gap-x-14 max-w-[90vw] mx-auto py-2">
              {partners.map((partner, i) => {
                const logo = PlaceHolderImages.find(img => img.id === partner.logoId);
                return (
                  <div key={i} className="relative h-16 w-auto min-w-[120px] flex items-center justify-center transition-all duration-500 hover:scale-110 shrink-0">
                    {logo && (
                      <Image 
                        src={logo.imageUrl} 
                        alt={partner.name}
                        width={200}
                        height={80}
                        className="object-contain h-full w-auto opacity-80 hover:opacity-100 transition-all duration-500"
                        data-ai-hint={logo.imageHint}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
