'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, FileText } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
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
  const headshot = PlaceHolderImages.find(img => img.id === 'profile-headshot');
  
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
    <section className="relative min-h-[85vh] flex flex-col justify-center px-6 pt-24 pb-4 overflow-hidden bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 items-start pt-8">
          
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em] animate-in fade-in slide-in-from-bottom-2 duration-700">
                SOFTWARE ENGINEERING & R&D
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tighter text-foreground italic uppercase animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
                Turning Vision <br />
                Into Intelligent Systems <br />
                That Scale.<span className="text-primary">.</span>
              </h1>
            </div>
            
            <div className="space-y-8 max-w-xl animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
              <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                Shann Karl Felipe  •  Leadership/AI Automation
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <Button size="lg" className="rounded-full bg-black text-white hover:bg-black/90 h-12 px-10 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 group shadow-2xl" asChild>
                  <Link href="/#contact">
                    Let's Talk
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full h-12 px-10 text-[10px] font-black uppercase tracking-widest bg-white border-border hover:bg-gray-50 flex items-center gap-2" asChild>
                  <Link href="/resume">
                    <FileText className="w-4 h-4" />
                    Resume
                  </Link>
                </Button>
              </div>
            </div>

            <div className="pt-8 grid grid-cols-3 gap-8 border-t border-gray-100 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
              {compactStats.map((stat, i) => (
                <Dialog key={i}>
                  <DialogTrigger asChild>
                    <button className="space-y-2 text-center lg:text-left hover:opacity-70 transition-opacity outline-none group">
                      <span className="text-3xl md:text-4xl font-black italic tracking-tighter text-foreground leading-none block group-hover:text-primary transition-colors">
                        {stat.value}
                      </span>
                      <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground/60 leading-tight">
                        {stat.label}
                      </p>
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

          <div className="lg:col-span-5 relative animate-in fade-in zoom-in-95 duration-1000 delay-500">
            <div className="relative aspect-[4/5] w-full max-w-[440px] mx-auto overflow-hidden rounded-[3rem] border border-border shadow-[0_48px_80px_-16px_rgba(0,0,0,0.12)] group bg-white/5">
              {headshot && (
                <Image
                  src={headshot.imageUrl}
                  alt={headshot.description}
                  fill
                  className="object-cover transition-all duration-700 scale-100 group-hover:scale-105"
                  data-ai-hint={headshot.imageHint}
                  priority
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-3xl border border-white/20 px-8 py-4 rounded-2xl w-fit shadow-2xl">
                  <p className="text-lg font-black text-white uppercase italic tracking-tighter leading-none">AI AUTOMATION ENGINEER</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
