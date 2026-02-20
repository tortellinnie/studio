'use client';

import * as React from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ChevronLeft, 
  ChevronRight,
  CheckCircle2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const leadershipData = [
  {
    id: 'pupshs',
    date: 'Sep 2021 – Jul 2023',
    role: 'ICT REPRESENTATIVE',
    org: 'PUPSHS COMELEC',
    start: 8, // Months from Jan 2021
    duration: 22,
    summary: 'Spearheaded technical logistics for campus-wide elections, ensuring digital integrity and streamlined student representation.',
    highlights: [
      'Managed digital ballot systems for 5,000+ students.',
      'Optimized verification workflows reducing wait times by 40%.',
      'Coordinated ICT support teams across 5 departments.'
    ]
  },
  {
    id: 'agape',
    date: 'Feb 2024 – Present',
    role: 'PRESIDENT',
    org: 'AGAPE PH0209',
    start: 37,
    duration: 35,
    summary: 'Directing operations and strategic planning for a youth-led NGO with 200+ members, focusing on nationwide community programs.',
    highlights: [
      'Orchestrated 15+ community programs impacting 600+ beneficiaries.',
      'Managed 5 cross-functional teams of 40+ volunteers.',
      'Secured institutional support from 20+ city-wide forums.'
    ]
  },
  {
    id: 'library',
    date: 'Aug 2024 – Present',
    role: 'PRESIDENT, LIBRARY COMMITTEE',
    org: 'FEU Institute of Technology',
    start: 43,
    duration: 29,
    summary: 'Leading student representation for the academic community, directing resource strategy and cultural innovation projects.',
    highlights: [
      'Spearheading the Salayliwa edu-cultural project with the National Library.',
      'Directing initiatives to improve digital literacy for 4,000+ students.',
      'Modernizing library engagement through proactive faculty collaboration.'
    ]
  },
  {
    id: 'cram',
    date: 'Dec 2024 – Dec 2025',
    role: 'LEAD MARKETING OFFICER',
    org: 'C-RAM Solutions',
    start: 47,
    duration: 12,
    summary: 'Secured critical capital grants and shaped product roadmaps for innovation-driven technological solutions.',
    highlights: [
      'Drove marketing campaigns securing venture capital seed funding.',
      'Provided UX/UI insights within the Scrum team for product roadmaps.',
      'Boosted investor engagement by 30% through technical storytelling.'
    ]
  },
  {
    id: 'nerds',
    date: 'Aug 2025 – Present',
    role: 'EXECUTIVE LEAD',
    org: 'NERDS 2.0',
    start: 55,
    duration: 17,
    summary: 'Coordinating R&D for award-winning initiatives, securing significant grants and directing cross-functional innovation teams.',
    highlights: [
      'Directing R&D leading to ₱1.2M+ in total grants and incentives.',
      'Architecting Proxygen and Birdseye AI/IoT industrial solutions.',
      'Leading 3 cross-functional teams of developers and researchers.'
    ]
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
  { name: 'Cloud AI Literacy', issuer: 'Google Cloud', date: '2025' }
];

const awardsData = [
  { title: 'EMC Global Award', issuer: 'EMC Global Summit', year: '2026', type: 'AWARD', imageId: 'featured-prompt-challenge' },
  { title: 'Most Outstanding Youth', issuer: 'QC Gov', year: '2025', type: 'AWARD', imageId: 'featured-tpu-research' },
  { title: 'DOST Merit Scholarship', issuer: 'DOST Philippines', year: '2023', type: 'SCHOLARSHIP', imageId: 'featured-aws-reinvent' },
  { title: 'Winner, Musashinova', issuer: 'EMC Global', year: '2025', type: 'AWARD', imageId: 'featured-github-universe' },
  { title: 'Startup Challenge X', issuer: 'DICT NCR', year: '2025', type: 'AWARD', imageId: 'featured-prompt-challenge' },
  { title: 'QCYDO Scholarship', issuer: 'Quezon City Gov', year: '2025', type: 'SCHOLARSHIP', imageId: 'featured-tpu-research' }
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
  const certsPerPage = 9;
  const paginatedCerts = certificationData.slice(certPage * certsPerPage, (certPage + 1) * certsPerPage);
  const totalCertPages = Math.ceil(certificationData.length / certsPerPage);

  const [selectedRole, setSelectedRole] = React.useState(leadershipData[leadershipData.length - 1]);

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
          <div className="flex justify-center mb-10">
            <TabsList className="bg-slate-100/50 p-1.5 rounded-full h-14 border border-slate-200">
              <TabsTrigger 
                value="leadership" 
                className="rounded-full px-8 text-[10px] font-black uppercase tracking-widest data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm transition-all"
              >
                Leadership
              </TabsTrigger>
              <TabsTrigger 
                value="certs" 
                className="rounded-full px-8 text-[10px] font-black uppercase tracking-widest data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm transition-all"
              >
                Certifications
              </TabsTrigger>
              <TabsTrigger 
                value="awards" 
                className="rounded-full px-8 text-[10px] font-black uppercase tracking-widest data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm transition-all"
              >
                Awards & Scholarships
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="leadership" className="mt-0 focus-visible:outline-none">
            <div className="w-full space-y-6">
              <TooltipProvider delayDuration={0}>
                <div className="relative pt-8 pb-12 overflow-x-auto custom-scrollbar">
                  <div className="min-w-[1800px] relative pb-16 px-4">
                    {/* Month Vertical Ticks */}
                    <div className="absolute inset-x-0 top-0 bottom-16 flex justify-between pointer-events-none px-4">
                      {Array.from({ length: 73 }).map((_, i) => (
                        <div key={i} className={cn(
                          "w-px h-full",
                          i % 12 === 0 ? "bg-slate-900 w-[2px]" : "bg-slate-100"
                        )} />
                      ))}
                    </div>

                    {/* Base Timeline Line */}
                    <div className="absolute bottom-[48px] left-0 w-full h-[1.5px] bg-slate-300" />

                    {/* Year Labels */}
                    <div className="absolute inset-x-0 bottom-0 h-6 flex justify-between pointer-events-none px-4">
                      {timelineYears.map((y) => (
                        <div key={y.label} className="relative flex flex-col items-center">
                          <span className="whitespace-nowrap text-[10px] font-black uppercase tracking-[0.4em] text-slate-900">
                            {y.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Gantt Bars Area - Thinner Bars */}
                    <div className="relative space-y-4 pt-4 min-h-[260px]">
                      {leadershipData.map((item) => {
                        const left = (item.start / 72) * 100;
                        const width = (item.duration / 72) * 100;
                        const isActive = selectedRole.id === item.id;

                        return (
                          <div key={item.id} className="relative h-8">
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <button
                                  onClick={() => setSelectedRole(item)}
                                  style={{ 
                                    left: `${left}%`, 
                                    width: `${width}%` 
                                  }}
                                  className={cn(
                                    "absolute h-5 rounded-full flex items-center px-4 transition-all duration-500 border overflow-hidden",
                                    isActive 
                                      ? "bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-600/20 z-10" 
                                      : "bg-white border-slate-200 text-slate-500 hover:border-blue-600/30 shadow-sm"
                                  )}
                                >
                                  <span className="text-[9px] font-black uppercase tracking-widest truncate">
                                    {item.role}
                                  </span>
                                </button>
                              </TooltipTrigger>
                              <TooltipContent 
                                side="top" 
                                className="bg-white border-slate-200 p-6 rounded-2xl shadow-xl z-[100] min-w-[280px]"
                              >
                                <div className="space-y-3">
                                  <h4 className="text-[13px] font-black uppercase tracking-tight text-foreground leading-none">
                                    {item.role}
                                  </h4>
                                  <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">
                                    {item.org}
                                  </p>
                                  <div className="pt-2 border-t border-slate-100">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">
                                      {item.date}
                                    </p>
                                  </div>
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

              {/* Selected Role Summary - More Compact and Closer */}
              <div className="max-w-4xl mx-auto">
                <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <div className="space-y-3">
                    <div className="flex items-center gap-4">
                      <div className="px-3 py-1 rounded-full bg-blue-600/10 border border-blue-600/20">
                         <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest">{selectedRole.org}</span>
                      </div>
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{selectedRole.date}</span>
                    </div>
                    <h3 className="text-2xl font-medium text-foreground uppercase italic tracking-tighter">
                      {selectedRole.role}
                    </h3>
                    <p className="text-base text-slate-500 font-medium leading-relaxed">
                      {selectedRole.summary}
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
                    {selectedRole.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex gap-3">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <p className="text-[13px] text-slate-600 font-medium leading-relaxed">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="certs" className="mt-0 focus-visible:outline-none">
            <div className="max-w-7xl mx-auto space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedCerts.map((cert, idx) => (
                  <Card key={idx} className="bg-white border-slate-100 rounded-3xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/5 hover:border-blue-600/20 group">
                    <CardContent className="p-0 flex items-center gap-6">
                      <div className="relative w-12 h-12 shrink-0">
                        <Image 
                          src="/assets/images/emc.png" 
                          alt="EMC Logo" 
                          fill 
                          className="object-contain" 
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-[13px] font-black text-foreground uppercase tracking-tight leading-tight truncate mb-2">{cert.name}</h4>
                        <div className="flex items-center justify-between">
                          <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest truncate">{cert.issuer}</p>
                          <span className="text-[9px] font-black text-blue-600 uppercase shrink-0 ml-4">{cert.date}</span>
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {awardsData.map((award, idx) => {
                  const imageData = PlaceHolderImages.find(img => img.id === award.imageId);
                  return (
                    <Card key={idx} className="bg-white border-slate-100 rounded-[2.5rem] overflow-hidden group transition-all duration-700 hover:shadow-2xl hover:shadow-blue-600/5">
                      <div className="relative aspect-[3/2] overflow-hidden bg-slate-50">
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
                          <div className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white/20 shadow-sm">
                            <span className="text-[9px] font-black text-foreground uppercase tracking-widest">{award.type}</span>
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
