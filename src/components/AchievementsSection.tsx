'use client';

import * as React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Briefcase, Trophy, Globe, Code2, Terminal, ShieldCheck, Info, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const leadershipData = [
  {
    id: 'agape',
    date: 'Feb 2024 – Present',
    role: 'President',
    org: 'AGAPE PH0209 · Quezon City',
    description: 'Directed strategic operations for a youth-led NGO with 200+ members, orchestrating 15+ community programs impacting over 600 beneficiaries nationwide.',
    start: 1, // Feb 2024 (Index from Jan 2024 = 0)
    duration: 23, // 23 months to current
    color: 'bg-blue-600'
  },
  {
    id: 'library',
    date: 'Aug 2024 – Present',
    role: 'President, Library Committee',
    org: 'FEU Institute of Technology',
    description: 'Presiding over academic resource planning and digital literacy initiatives, spearheading the Salayliwa edu-cultural project with the National Library.',
    start: 7, // Aug 2024
    duration: 17,
    color: 'bg-indigo-600'
  },
  {
    id: 'nerds',
    date: 'Aug 2025 – Present',
    role: 'Executive Lead',
    org: 'NERDS 2.0 · Hybrid',
    description: 'Directed R&D operations for award-winning initiatives, securing ₱1.2M+ in total grants and startup incentives while leading cross-functional engineering teams.',
    start: 19, // Aug 2025
    duration: 5,
    color: 'bg-slate-800'
  }
];

const certificationData = [
  { name: 'Linux Essentials', issuer: 'Cisco Networking Academy', date: '2025', icon: Terminal },
  { name: 'IT Specialist - Python', issuer: 'Certiport', date: '2025', icon: Code2 },
  { name: 'OCI AI Foundations', issuer: 'Oracle', date: '2025', icon: Globe },
  { name: 'AI Associate', issuer: 'Salesforce', date: '2025', icon: ShieldCheck },
  { name: 'GenAI Fundamentals', issuer: 'Databricks Academy', date: '2025', icon: Briefcase },
  { name: 'Network Security', issuer: 'The SecOps Group', date: '2025', icon: ShieldCheck },
  { name: 'Android with Kotlin', issuer: 'LinkedIn Learning', date: '2025', icon: Code2 },
  { name: 'MATLAB Professional', issuer: 'LinkedIn Learning', date: '2025', icon: Terminal }
];

const awardsData = [
  { title: 'EMC Global Award', issuer: 'EMC Global Summit', year: '2026' },
  { title: 'Most Outstanding Youth Awardee', issuer: 'QC Gov / SK Commonwealth', year: '2025' },
  { title: '1st Runner-Up, Startup Challenge X', issuer: 'DICT Regional NCR', year: '2025' },
  { title: 'Winner, Musashinova Pitching', issuer: 'EMC Global / Musashino Uni', year: '2025' },
  { title: 'DOST Merit Scholarship', issuer: 'DOST Philippines', year: '2023' },
  { title: 'QCYDO Economic Scholarship', issuer: 'Quezon City Government', year: '2025' }
];

const timelineQuarters = [
  { label: 'Q1 2024', pos: 0 },
  { label: 'Q3 2024', pos: 25 },
  { label: 'Q1 2025', pos: 50 },
  { label: 'Q3 2025', pos: 75 },
  { label: '2026', pos: 100 },
];

export function AchievementsSection() {
  const [activeRole, setActiveRole] = React.useState(leadershipData[0]);

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-white">
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
             backgroundSize: '40px 40px' 
           }} />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
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
            <div className="max-w-4xl mx-auto space-y-16">
              {/* Gantt Chart Implementation */}
              <div className="relative pt-12 pb-20">
                {/* Horizontal Baseline */}
                <div className="absolute top-[calc(100%-40px)] left-0 w-full h-px bg-slate-200" />
                
                {/* Quarter Markers (Vertical Lines) */}
                <div className="absolute inset-x-0 bottom-8 h-4 flex justify-between pointer-events-none">
                  {timelineQuarters.map((q) => (
                    <div key={q.label} className="relative flex flex-col items-center">
                      <div className="h-2 w-px bg-slate-300" />
                      <span className="absolute top-4 whitespace-nowrap text-[8px] font-black uppercase tracking-[0.2em] text-slate-400">
                        {q.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Gantt Bars */}
                <div className="relative space-y-4 px-4">
                  {leadershipData.map((item) => {
                    const left = (item.start / 24) * 100;
                    const width = (item.duration / 24) * 100;
                    const isActive = activeRole.id === item.id;

                    return (
                      <div key={item.id} className="relative h-12">
                        <TooltipProvider delayDuration={0}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button
                                onClick={() => setActiveRole(item)}
                                style={{ 
                                  left: `${left}%`, 
                                  width: `${width}%` 
                                }}
                                className={cn(
                                  "absolute h-8 rounded-xl transition-all duration-500 border shadow-sm group overflow-hidden flex items-center px-4",
                                  isActive 
                                    ? cn(item.color, "border-white/20 shadow-xl shadow-blue-600/10 scale-[1.02] z-20") 
                                    : "bg-slate-50 border-slate-100 hover:border-slate-300 z-10"
                                )}
                              >
                                <div className={cn(
                                  "w-1.5 h-1.5 rounded-full mr-3 shrink-0",
                                  isActive ? "bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" : cn(item.color, "opacity-40")
                                )} />
                                <span className={cn(
                                  "text-[9px] font-black uppercase tracking-widest truncate",
                                  isActive ? "text-white" : "text-slate-400"
                                )}>
                                  {item.role}
                                </span>
                              </button>
                            </TooltipTrigger>
                            <TooltipContent 
                              side="top" 
                              className="bg-white border-slate-100 rounded-xl px-4 py-2 shadow-xl mb-2"
                            >
                              <p className="text-[10px] font-black uppercase tracking-widest text-blue-600">{item.date}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Active Role Summary Card */}
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <Card className="bg-white border-slate-100 rounded-[2.5rem] p-10 shadow-sm border overflow-hidden relative group">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Briefcase className="w-32 h-32 text-blue-600" />
                  </div>
                  <CardContent className="p-0 space-y-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <Calendar className="w-4 h-4 text-slate-300" />
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">{activeRole.date}</p>
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-3xl font-medium text-foreground uppercase italic tracking-tighter leading-none">
                          {activeRole.role}
                        </h3>
                        <p className="text-blue-600 font-bold uppercase tracking-widest text-xs">{activeRole.org}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-6 items-start">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                        <Info className="w-5 h-5 text-blue-600" />
                      </div>
                      <p className="text-slate-500 font-medium leading-relaxed max-w-2xl text-lg">
                        {activeRole.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="certs" className="mt-0 focus-visible:outline-none">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {certificationData.map((cert, idx) => (
                <Card key={idx} className="bg-white border-slate-200 rounded-3xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/5 hover:border-blue-600/20 group text-center">
                  <CardContent className="p-0 flex flex-col items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center transition-colors group-hover:bg-blue-600">
                      <cert.icon className="w-8 h-8 text-blue-600 transition-colors group-hover:text-white" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-[11px] font-black text-foreground uppercase tracking-tight leading-tight">{cert.name}</h4>
                      <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">{cert.issuer}</p>
                      <div className="flex items-center justify-center gap-2 pt-2">
                         <span className="text-[9px] font-black text-blue-600/40 uppercase">{cert.date}</span>
                         <ExternalLink className="w-3 h-3 text-slate-300 group-hover:text-blue-600 transition-colors" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="awards" className="mt-0 focus-visible:outline-none">
            <div className="max-w-4xl mx-auto divide-y divide-slate-100">
              {awardsData.map((award, idx) => (
                <div key={idx} className="py-8 first:pt-0 last:pb-0 group transition-all duration-300 hover:px-6 hover:bg-slate-50/50 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                      <Trophy className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-foreground uppercase italic tracking-tighter leading-none">{award.title}</h4>
                      <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">{award.issuer}</p>
                    </div>
                  </div>
                  <span className="text-xs font-black text-slate-300 group-hover:text-blue-600 transition-colors">{award.year}</span>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}