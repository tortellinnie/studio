
'use client';

import * as React from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight,
  Trophy,
  ArrowUpRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const leadershipData = [
  {
    id: 'pupshs',
    date: 'Sep 2021 – Jul 2023',
    role: 'ICT Representative',
    org: 'PUPSHS COMELEC',
    start: 8, // Months from Jan 2021
    duration: 22,
  },
  {
    id: 'agape',
    date: 'Feb 2024 – Present',
    role: 'President',
    org: 'AGAPE PH0209',
    start: 37,
    duration: 35,
  },
  {
    id: 'library',
    date: 'Aug 2024 – Present',
    role: 'President, Library Committee',
    org: 'FEU Institute of Technology',
    start: 43,
    duration: 29,
  },
  {
    id: 'cram',
    date: 'Dec 2024 – Dec 2025',
    role: 'Lead Marketing Officer',
    org: 'C-RAM Solutions',
    start: 47,
    duration: 12,
  },
  {
    id: 'nerds',
    date: 'Aug 2025 – Present',
    role: 'Executive Lead',
    org: 'NERDS 2.0',
    start: 55,
    duration: 17,
  }
];

const certificationData = [
  { name: 'Linux Essentials', issuer: 'Cisco Networking Academy', date: '2025' },
  { name: 'IT Specialist - Python', issuer: 'Certiport', date: '2025' },
  { name: 'OCI AI Foundations', issuer: 'Oracle', date: '2025' },
  { name: 'AI Associate', issuer: 'Salesforce', date: '2025' },
  { name: 'GenAI Fundamentals', issuer: 'Databricks Academy', date: '2025' },
  { name: 'Network Security', issuer: 'The SecOps Group', date: '2025' },
  { name: 'Android with Kotlin', issuer: 'LinkedIn Learning', date: '2025' },
  { name: 'MATLAB Professional', issuer: 'LinkedIn Learning', date: '2025' },
  { name: 'Node.js Testing', issuer: 'LinkedIn Learning', date: '2025' },
  { name: 'IT Specialist - Java', issuer: 'Certiport', date: '2025' },
  { name: 'MS Summer Bootcamp', issuer: 'Microsoft', date: '2025' },
  { name: 'Cloud AI Literacy', issuer: 'Google Cloud', date: '2025' },
  { name: 'Cybersecurity Ops', issuer: 'Cisco Academy', date: '2025' },
  { name: 'Data Engineering', issuer: 'Datacamp', date: '2024' },
  { name: 'Innovation Dev', issuer: 'Urban Youth Academy', date: '2025' },
  { name: 'Technical Writing', issuer: 'FEU Tech ACM', date: '2024' }
];

const awardsData = [
  { title: 'EMC Global Award', issuer: 'EMC Global Summit', year: '2026', imageId: 'featured-prompt-challenge' },
  { title: 'Most Outstanding Youth Awardee', issuer: 'QC Gov / SK Commonwealth', year: '2025', imageId: 'featured-tpu-research' },
  { title: '1st Runner-Up, Startup Challenge X', issuer: 'DICT Regional NCR', year: '2025', imageId: 'featured-aws-reinvent' },
  { title: 'Winner, Musashinova Pitching', issuer: 'EMC Global / Musashino Uni', year: '2025', imageId: 'featured-github-universe' },
  { title: 'DOST Merit Scholarship', issuer: 'DOST Philippines', year: '2023', imageId: 'featured-prompt-challenge' },
  { title: 'QCYDO Economic Scholarship', issuer: 'Quezon City Government', year: '2025', imageId: 'featured-tpu-research' }
];

const timelineYears = [
  { label: '2021', pos: 0 },
  { label: '2022', pos: 16.66 },
  { label: '2023', pos: 33.33 },
  { label: '2024', pos: 50 },
  { label: '2025', pos: 66.66 },
  { label: '2026', pos: 83.33 },
  { label: '2027', pos: 100 },
];

export function AchievementsSection() {
  const [certPage, setCertPage] = React.useState(0);
  const certsPerPage = 8;
  const paginatedCerts = certificationData.slice(certPage * certsPerPage, (certPage + 1) * certsPerPage);
  const totalCertPages = Math.ceil(certificationData.length / certsPerPage);

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-white">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
             backgroundSize: '40px 40px' 
           }} />
      
      <div className="container mx-auto px-6 max-w-[100rem] relative z-10">
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-4xl md:text-5xl font-medium text-foreground italic uppercase tracking-tighter">
            IMPACT & RECOGNITION
          </h2>
          <p className="text-slate-500 text-sm font-medium">
            Milestones, technical validations, and community leadership.
          </p>
        </div>

        <Tabs defaultValue="leadership" className="w-full">
          <div className="flex justify-center mb-16">
            <TabsList className="bg-slate-100/50 p-1.5 rounded-full h-14 border border-slate-200">
              <TabsTrigger 
                value="leadership" 
                className="rounded-full px-8 text-xs font-black uppercase tracking-widest data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm transition-all"
              >
                Leadership
              </TabsTrigger>
              <TabsTrigger 
                value="certs" 
                className="rounded-full px-8 text-xs font-black uppercase tracking-widest data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm transition-all"
              >
                Certifications
              </TabsTrigger>
              <TabsTrigger 
                value="awards" 
                className="rounded-full px-8 text-xs font-black uppercase tracking-widest data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm transition-all"
              >
                Awards & Scholarships
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="leadership" className="mt-0 focus-visible:outline-none">
            <div className="w-full">
              <TooltipProvider delayDuration={0}>
                <div className="relative pt-12 pb-32 overflow-x-auto custom-scrollbar">
                  <div className="min-w-[1800px] relative pb-24">
                    <div className="absolute inset-x-0 top-0 bottom-24 flex justify-between pointer-events-none px-4">
                      {Array.from({ length: 73 }).map((_, i) => (
                        <div key={i} className={cn(
                          "w-px h-full",
                          i % 12 === 0 ? "bg-slate-800 w-[2px]" : "bg-slate-100"
                        )} />
                      ))}
                    </div>

                    <div className="absolute bottom-[80px] left-0 w-full h-[1.5px] bg-slate-300" />

                    <div className="absolute inset-x-0 bottom-0 h-8 flex justify-between pointer-events-none px-4">
                      {timelineYears.map((y) => (
                        <div key={y.label} className="relative flex flex-col items-center">
                          <span className="whitespace-nowrap text-[10px] font-black uppercase tracking-[0.3em] text-slate-800">
                            {y.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="relative space-y-8 px-4 min-h-[420px] pt-4">
                      {leadershipData.map((item) => {
                        const left = (item.start / 72) * 100;
                        const width = (item.duration / 72) * 100;

                        return (
                          <div key={item.id} className="relative h-12">
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div
                                  style={{ 
                                    left: `${left}%`, 
                                    width: `${width}%` 
                                  }}
                                  className="absolute h-10 rounded-lg bg-white border border-slate-200 shadow-sm flex items-center px-4 transition-all hover:border-blue-600 hover:shadow-lg hover:shadow-blue-600/5 group cursor-default"
                                >
                                  <span className="text-[10px] font-black uppercase tracking-widest truncate text-slate-500 group-hover:text-foreground transition-colors">
                                    {item.role}
                                  </span>
                                </div>
                              </TooltipTrigger>
                              <TooltipContent 
                                side="top" 
                                sideOffset={12}
                                className="bg-white border-slate-200 p-5 rounded-2xl shadow-xl max-w-xs z-[100]"
                              >
                                <div className="space-y-2">
                                  <h4 className="text-[11px] font-black uppercase italic tracking-tighter text-foreground leading-none">
                                    {item.role}
                                  </h4>
                                  <p className="text-[9px] font-bold text-blue-600 uppercase tracking-widest">
                                    {item.org}
                                  </p>
                                  <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest pt-1 border-t border-slate-100">
                                    {item.date}
                                  </p>
                                </div>
                              </TooltipContent>
                            </Tooltip>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </TooltipProvider>
            </div>
          </TabsContent>

          <TabsContent value="certs" className="mt-0 focus-visible:outline-none">
            <div className="max-w-7xl mx-auto space-y-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {paginatedCerts.map((cert, idx) => (
                  <Card key={idx} className="bg-white border-slate-100 rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/5 hover:border-blue-600/20 group text-center">
                    <CardContent className="p-0 flex flex-col items-center gap-6">
                      <div className="relative w-16 h-16">
                        <Image 
                          src="/assets/images/emc.png" 
                          alt="EMC Logo" 
                          fill 
                          className="object-contain" 
                        />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-[11px] font-black text-foreground uppercase tracking-tight leading-tight">{cert.name}</h4>
                        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">{cert.issuer}</p>
                        <div className="flex items-center justify-center gap-2 pt-2">
                          <span className="text-[9px] font-black text-blue-600 uppercase">{cert.date}</span>
                          <ExternalLink className="w-3 h-3 text-slate-300 group-hover:text-blue-600 transition-colors" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center items-center gap-4">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full w-10 h-10 border-slate-200 disabled:opacity-20"
                  onClick={() => setCertPage(p => Math.max(0, p - 1))}
                  disabled={certPage === 0}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                
                <div className="flex gap-2">
                  {Array.from({ length: totalCertPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCertPage(i)}
                      className={cn(
                        "h-1.5 transition-all duration-500 rounded-full",
                        i === certPage ? "w-8 bg-blue-600" : "w-2 bg-slate-200"
                      )}
                    />
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full w-10 h-10 border-slate-200 disabled:opacity-20"
                  onClick={() => setCertPage(p => Math.min(totalCertPages - 1, p + 1))}
                  disabled={certPage === totalCertPages - 1}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="awards" className="mt-0 focus-visible:outline-none">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {awardsData.map((award, idx) => {
                  const imageData = PlaceHolderImages.find(img => img.id === award.imageId);
                  return (
                    <Card key={idx} className="bg-white border-slate-100 rounded-[2.5rem] overflow-hidden group transition-all duration-700 hover:shadow-2xl hover:shadow-blue-600/5 hover:-translate-y-1.5">
                      <div className="relative aspect-video overflow-hidden bg-slate-50">
                        {imageData && (
                          <Image 
                            src={imageData.imageUrl} 
                            alt={award.title}
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            data-ai-hint="award ceremony"
                          />
                        )}
                        <div className="absolute top-4 left-4">
                          <div className="p-2 rounded-xl bg-white/90 backdrop-blur-md border border-white/20 shadow-sm">
                            <Trophy className="w-4 h-4 text-blue-600" />
                          </div>
                        </div>
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center">
                            <ArrowUpRight className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-8 space-y-4">
                        <div className="flex justify-between items-start gap-4">
                          <div className="space-y-1">
                            <h4 className="text-base font-medium text-foreground uppercase italic tracking-tighter leading-tight group-hover:text-blue-600 transition-colors">
                              {award.title}
                            </h4>
                            <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">{award.issuer}</p>
                          </div>
                          <span className="shrink-0 px-3 py-1 rounded-full bg-slate-100 text-[9px] font-black text-slate-500 uppercase tracking-widest">
                            {award.year}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
