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
import { PlaceHolderImages } from '@/lib/placeholder-images';

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

  const partners = [
    { id: "logo-png", name: "P&G" },
    { id: "logo-aws", name: "AWS" },
    { id: "logo-dost", name: "DOST" },
    { id: "logo-dict", name: "DICT" },
    { id: "logo-qc", name: "QC Gov" },
    { id: "logo-nbdb", name: "NBDB" },
    { id: "logo-dti", name: "DTI" },
    { id: "logo-sk", name: "SK Commonwealth" }
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-32 pb-16 overflow-hidden bg-white">
      {/* Light Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          
          {/* Left Column: Typography & Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight text-foreground italic uppercase">
                TURNING VISION INTO <br />
                INTELLIGENT SYSTEMS <br />
                THAT SCALE<span className="text-primary">.</span>
              </h1>
              <p className="text-[11px] font-black text-muted-foreground uppercase tracking-[0.5em]">
                SHANN KARL FELIPE · AI/LEADERSHIP
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-6">
              <Button size="lg" className="rounded-full bg-black text-white hover:bg-black/90 h-14 px-10 text-[11px] font-black uppercase tracking-widest flex items-center gap-3 group shadow-2xl" asChild>
                <Link href="/#contact">
                  Let's Talk
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full h-14 px-10 text-[11px] font-black uppercase tracking-widest bg-white border-border hover:bg-gray-50 flex items-center gap-3" asChild>
                <Link href="/resume">
                  <FileText className="w-4 h-4" />
                  View Resume
                </Link>
              </Button>
            </div>

            {/* Affiliated Logos Integration */}
            <div className="pt-10 space-y-6">
              <p className="text-[10px] font-black text-muted-foreground/40 uppercase tracking-[0.3em]">
                Affiliated with Leading Organizations
              </p>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-6 opacity-60">
                {partners.map((org) => {
                  const logo = PlaceHolderImages.find(img => img.id === org.id);
                  return logo ? (
                    <div key={org.id} className="h-6 w-auto flex items-center">
                      <Image 
                        src={logo.imageUrl} 
                        alt={org.name}
                        width={80}
                        height={24}
                        className="object-contain h-full w-auto grayscale hover:grayscale-0 transition-all duration-300"
                        data-ai-hint={logo.imageHint}
                      />
                    </div>
                  ) : null;
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Huddle Hub (Hub-and-Spoke) */}
          <div className="relative h-[500px] flex items-center justify-center">
            {/* SVG Spokes */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 500">
              {/* Software (Top Left) */}
              <line x1="250" y1="250" x2="150" y2="150" stroke="#2563eb" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
              {/* Computer Vision (Top Right) */}
              <line x1="250" y1="250" x2="350" y2="150" stroke="#dc2626" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
              {/* Leadership (Bottom Left) */}
              <line x1="250" y1="250" x2="150" y2="350" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
              {/* Cloud (Bottom Right) */}
              <line x1="250" y1="250" x2="350" y2="350" stroke="#16a34a" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
              
              {/* Spoke Dots */}
              <circle cx="150" cy="150" r="4" fill="#2563eb" />
              <circle cx="350" cy="150" r="4" fill="#dc2626" />
              <circle cx="150" cy="350" r="4" fill="#f59e0b" />
              <circle cx="350" cy="350" r="4" fill="#16a34a" />
            </svg>

            {/* Central Hub */}
            <div className="z-10 w-28 h-28 rounded-full bg-white border-2 border-gray-100 shadow-2xl flex items-center justify-center text-center p-4 huddle-item">
              <span className="text-[10px] font-black uppercase tracking-tight text-foreground leading-tight">
                AI /<br />LEADERSHIP
              </span>
            </div>

            {/* Satellite Nodes */}
            {/* Software Engineering */}
            <div className="absolute top-[100px] left-[40px] w-36 h-20 rounded-xl bg-blue-600 shadow-xl flex items-center justify-center p-4 text-center huddle-item">
              <span className="text-[10px] font-black uppercase tracking-widest text-white">Software<br />Solutions</span>
            </div>
            {/* Machine Learning / CV */}
            <div className="absolute top-[100px] right-[40px] w-36 h-20 rounded-xl bg-red-600 shadow-xl flex items-center justify-center p-4 text-center huddle-item">
              <span className="text-[10px] font-black uppercase tracking-widest text-white">Computer<br />Vision</span>
            </div>
            {/* Leadership */}
            <div className="absolute bottom-[100px] left-[40px] w-36 h-20 rounded-xl bg-amber-500 shadow-xl flex items-center justify-center p-4 text-center huddle-item">
              <span className="text-[10px] font-black uppercase tracking-widest text-white">R&D<br />Leadership</span>
            </div>
            {/* Cloud Computing */}
            <div className="absolute bottom-[100px] right-[40px] w-36 h-20 rounded-xl bg-green-600 shadow-xl flex items-center justify-center p-4 text-center huddle-item">
              <span className="text-[10px] font-black uppercase tracking-widest text-white">Cloud<br />& IoT</span>
            </div>
          </div>
        </div>

        {/* Stretched Metrics Row */}
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
