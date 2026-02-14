import { Users, Code2, Terminal, Globe } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function Experience() {
  const experiences = [
    {
      title: 'Executive President',
      org: 'Computer Science Society',
      period: '2023 - Present',
      description: 'Orchestrating technical development initiatives and hackathons for a student body of 1,000+. Focused on bridging the gap between academia and industry.',
      icon: Users,
      skills: ['Strategic Leadership', 'Public Speaking', 'Community Building']
    },
    {
      title: 'Advanced DSA Peer Mentor',
      org: 'University Tech Academy',
      period: '2022 - 2023',
      description: 'Guided 50+ students through complex algorithmic challenges and competitive programming logic. Developed custom technical assessments.',
      icon: Terminal,
      skills: ['Algorithms', 'Mentorship', 'C++', 'Java']
    },
    {
      title: 'Software Development Associate',
      org: 'Student Tech Collective',
      period: '2021 - 2022',
      description: 'Collaborated on internal university portal improvements and open-source automation scripts using Python and React.',
      icon: Code2,
      skills: ['Full Stack', 'CI/CD', 'Git Workflow']
    }
  ];

  return (
    <section id="experience" className="py-32 relative bg-white/[0.01]">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto space-y-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-white/5 pb-16">
            <div className="space-y-6">
              <Badge className="bg-white/5 text-white/60 border-white/10 px-4 py-1 rounded-full font-black uppercase text-[10px] tracking-widest">
                Impact & Leadership
              </Badge>
              <h2 className="text-5xl lg:text-7xl font-black text-white italic uppercase">Footprint.</h2>
            </div>
            <p className="text-muted-foreground text-xl leading-relaxed max-w-sm font-medium">
              Transforming technical expertise into collective impact through leadership and mentorship.
            </p>
          </div>

          <div className="grid gap-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="group grid md:grid-cols-12 gap-12 p-12 glass-card rounded-[3rem] border-white/5 hover:border-primary/20 transition-all duration-700">
                <div className="md:col-span-1">
                  <div className="w-16 h-16 rounded-[1.25rem] bg-white/[0.02] border border-white/10 flex items-center justify-center group-hover:bg-primary transition-all duration-500 shadow-2xl">
                    <exp.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                </div>
                
                <div className="md:col-span-8 space-y-6">
                  <div>
                    <h3 className="text-3xl font-black text-white group-hover:text-primary transition-colors">{exp.title}</h3>
                    <p className="text-primary font-bold uppercase tracking-[0.2em] text-xs mt-2">{exp.org}</p>
                  </div>
                  <p className="text-muted-foreground text-xl font-medium leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {exp.skills.map(skill => (
                      <span key={skill} className="px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-xs font-bold text-white/40 uppercase tracking-widest">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-3 text-right">
                  <span className="text-sm font-black uppercase tracking-widest text-muted-foreground px-6 py-2 bg-white/[0.02] border border-white/10 rounded-full">
                    {exp.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
