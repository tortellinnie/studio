'use client';

import { GraduationCap, BookOpen, PenTool, Radio, Users, Award, CheckCircle2, Terminal, Mic2, Newspaper } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function Education() {
  const education = [
    {
      school: 'FEU Institute of Technology',
      degree: "Bachelor's degree, Computer Science",
      period: 'Sep 2023 – Jul 2027',
      grade: '3.6 GPA • FEU Tech Academic Scholar',
      activities: [
        { label: 'Senior Writer', sub: 'The Innovator', icon: PenTool },
        { label: 'Campus Journalist', sub: 'UAAP', icon: Newspaper },
        { label: 'Junior Officer', sub: 'ACM Publicity & Externals', icon: Radio },
        { label: 'Podcast Host', sub: 'ACM Diaries', icon: Mic2 },
        { label: 'Committee Officer', sub: 'FEU Tech GDSC', icon: Terminal }
      ],
      skills: ['Software Solution Development', 'Technical Writing', 'Software Engineering'],
      honors: ['FEU Tech Academic Scholar', 'DOST Scholar', 'QCYDO Scholar']
    },
    {
      school: 'Polytechnic University of the Philippines',
      degree: "Senior High School (ICT Strand)",
      period: 'Sep 2021 – Jul 2023',
      grade: 'With High Honors',
      activities: [
        { label: 'ICT Representative', sub: 'PUPSHS COMELEC', icon: Users }
      ],
      skills: ['Information & Communications Tech', 'Leadership', 'Database Management'],
      honors: ['With High Honors', 'Research Excellence Award']
    }
  ];

  return (
    <section id="education" className="py-24 relative bg-transparent overflow-visible">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16 space-y-6">
          <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1.5 rounded-full font-black tracking-widest uppercase text-[10px]">
            Academic Foundation
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-black text-white uppercase italic">Education.</h2>
          <p className="text-muted-foreground max-w-2xl text-lg font-medium leading-relaxed">
            Combining rigorous computer science theory with high-impact campus leadership and technical journalism.
          </p>
        </div>

        <div className="grid gap-10 max-w-6xl mx-auto">
          {education.map((edu, idx) => (
            <div key={idx} className="group p-8 lg:p-10 glass-card rounded-[2.5rem] border-white/5 hover:border-primary/20 transition-all duration-700">
              <div className="grid md:grid-cols-12 gap-10">
                <div className="md:col-span-4 space-y-4 border-b md:border-b-0 md:border-r border-white/5 pb-8 md:pb-0">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                    <GraduationCap className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black text-white leading-tight">{edu.school}</h3>
                  <p className="text-primary font-bold uppercase tracking-widest text-[10px]">{edu.degree}</p>
                  <p className="text-muted-foreground font-bold text-xs">{edu.period}</p>
                  <div className="inline-block px-4 py-2 rounded-xl bg-white/5 border border-white/10 mt-4">
                    <span className="text-white text-sm font-black italic">{edu.grade}</span>
                  </div>
                </div>

                <div className="md:col-span-8 space-y-8">
                  <div className="space-y-6">
                    <h4 className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] flex items-center gap-3">
                      <Users className="w-3.5 h-3.5" />
                      Activities & Societies
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {edu.activities.map((act, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 group-hover:bg-white/[0.04] transition-colors">
                          <div className="w-9 h-9 rounded-xl bg-primary/5 flex items-center justify-center">
                            <act.icon className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-white leading-tight">{act.label}</p>
                            <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest">{act.sub}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] flex items-center gap-3">
                      <Award className="w-3.5 h-3.5" />
                      Skills & Focus
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.skills.map((skill, i) => (
                        <span key={i} className="flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-[9px] font-black text-accent uppercase tracking-widest">
                          <CheckCircle2 className="w-3 h-3" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}