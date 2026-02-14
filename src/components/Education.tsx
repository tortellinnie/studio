'use client';

import { GraduationCap, BookOpen, Mic, PenTool, Radio, Users, Award, CheckCircle2, Laptop, Terminal } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function Education() {
  const education = [
    {
      school: 'FEU Institute of Technology',
      degree: "Bachelor's degree, Computer Science",
      period: 'Sep 2023 – Jul 2027',
      grade: '3.6 GPA • Top Performing Student',
      activities: [
        { label: 'President', sub: 'Student Library Committee', icon: BookOpen },
        { label: 'Junior Officer', sub: 'ACM Tech Publicity', icon: Radio },
        { label: 'Senior Writer', sub: 'The Innovator', icon: PenTool },
        { label: 'Campus Journalist', sub: 'UAAP', icon: Laptop },
        { label: 'Podcast Host', sub: 'ACM Diaries', icon: Mic },
        { label: 'Committee Officer', sub: 'GDSC', icon: Terminal }
      ],
      skills: ['Software Solution Development', 'Technical Writing', 'Computational Logic'],
      honors: ['DOST Scholar', 'QCYDO Scholar', 'FEU Tech Financial Scholar', 'Datacamp Scholar']
    },
    {
      school: 'Polytechnic University of the Philippines',
      degree: 'Information & Communications Technology (ICT)',
      period: 'Sep 2021 – Jul 2023',
      grade: 'Academic Excellence',
      activities: [
        { label: 'ICT Rep', sub: 'PUPSHS COMELEC', icon: Users }
      ],
      skills: ['Information Technology', 'Systems Management'],
      honors: ['Academic Distinction']
    }
  ];

  return (
    <section id="education" className="py-24 relative bg-white/[0.01]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16 space-y-6">
          <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1.5 rounded-full font-black tracking-widest uppercase text-[10px]">
            Academic Foundation
          </Badge>
          <h2 className="text-5xl lg:text-7xl font-black text-white uppercase italic">Education.</h2>
          <p className="text-muted-foreground max-w-2xl text-xl font-medium leading-relaxed">
            Combining rigorous computer science theory with high-impact campus leadership and technical journalism.
          </p>
        </div>

        <div className="grid gap-8 max-w-5xl mx-auto">
          {education.map((edu, idx) => (
            <div key={idx} className="group p-10 glass-card rounded-[3rem] border-white/5 hover:border-primary/20 transition-all duration-700">
              <div className="grid md:grid-cols-12 gap-10">
                <div className="md:col-span-4 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-black text-white leading-tight">{edu.school}</h3>
                  <p className="text-primary font-bold uppercase tracking-widest text-xs">{edu.degree}</p>
                  <p className="text-muted-foreground font-bold text-sm">{edu.period}</p>
                  <div className="inline-block px-4 py-2 rounded-xl bg-white/5 border border-white/10 mt-4">
                    <span className="text-white font-black">{edu.grade}</span>
                  </div>
                </div>

                <div className="md:col-span-8 space-y-10">
                  <div className="space-y-6">
                    <h4 className="text-xs font-black text-white/40 uppercase tracking-[0.2em] flex items-center gap-3">
                      <Users className="w-4 h-4" />
                      Activities & Societies
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {edu.activities.map((act, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 group-hover:bg-white/[0.04] transition-colors">
                          <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center">
                            <act.icon className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-white leading-tight">{act.label}</p>
                            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{act.sub}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-xs font-black text-white/40 uppercase tracking-[0.2em] flex items-center gap-3">
                      <Award className="w-4 h-4" />
                      Scholarly Recognition
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {edu.honors.map((honor, i) => (
                        <span key={i} className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-[10px] font-black text-accent uppercase tracking-widest">
                          <CheckCircle2 className="w-3 h-3" />
                          {honor}
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
