import { GraduationCap, BookOpen, Mic, PenTool, Code, Users, Newspaper, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function Education() {
  const education = [
    {
      school: 'FEU Institute of Technology',
      degree: "Bachelor's degree, Computer Science",
      period: 'Sep 2023 – Jul 2027',
      grade: 'Grade: 3.6 (GPA)',
      activities: [
        { label: 'Senior Writer', sub: 'The Innovator', icon: PenTool },
        { label: 'Campus Journalist', sub: 'UAAP', icon: Newspaper },
        { label: 'Junior Officer', sub: 'ACM', icon: Code },
        { label: 'Podcast Host', sub: 'ACM Diaries', icon: Mic },
        { label: 'Committee Officer', sub: 'GDSC', icon: Users },
        { label: 'President', sub: 'FEU Tech Library', icon: BookOpen }
      ],
      skills: ['Software Solution Development', 'Technical Writing', 'Computational Logic']
    },
    {
      school: 'Polytechnic University of the Philippines',
      degree: 'ICT',
      period: 'Sep 2021 – Jul 2023',
      activities: [
        { label: 'PUPSHS COMELEC', sub: 'ICT Representative', icon: Users }
      ],
      skills: ['Information Technology', 'Systems Management']
    }
  ];

  return (
    <section id="education" className="py-32 relative bg-white/[0.01]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-24 space-y-6">
          <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1.5 rounded-full font-black tracking-widest uppercase text-[10px]">
            Academic Foundation
          </Badge>
          <h2 className="text-5xl lg:text-7xl font-black text-white uppercase italic">Education.</h2>
          <p className="text-muted-foreground max-w-2xl text-xl font-medium leading-relaxed">
            Combining rigorous computer science theory with high-impact campus leadership and technical journalism.
          </p>
        </div>

        <div className="grid gap-12 max-w-5xl mx-auto">
          {education.map((edu, idx) => (
            <div key={idx} className="group p-12 glass-card rounded-[3rem] border-white/5 hover:border-primary/20 transition-all duration-700">
              <div className="grid md:grid-cols-12 gap-12">
                <div className="md:col-span-4 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-black text-white leading-tight">{edu.school}</h3>
                  <p className="text-primary font-bold uppercase tracking-widest text-xs">{edu.degree}</p>
                  <p className="text-muted-foreground font-bold text-sm">{edu.period}</p>
                  {edu.grade && (
                    <div className="inline-block px-4 py-2 rounded-xl bg-white/5 border border-white/10 mt-4">
                      <span className="text-white font-black">{edu.grade}</span>
                    </div>
                  )}
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
                      Core Competencies
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {edu.skills.map((skill, i) => (
                        <span key={i} className="px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-[10px] font-black text-primary uppercase tracking-widest">
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
