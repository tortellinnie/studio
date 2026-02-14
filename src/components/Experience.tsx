import { Users, Zap } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: 'President',
      org: 'Computer Science Society',
      period: '2023 - Present',
      description: 'Managing a team of 12 executive members to organize workshops, hackathons, and guest lectures for 500+ student members.',
      icon: Users,
      highlights: ['Increased membership by 40%', 'Secured $5k in sponsorships']
    },
    {
      title: 'Peer Mentor',
      org: 'University Tutoring Center',
      period: '2022 - 2023',
      description: 'Assisted 30+ students weekly in Data Structures and Algorithms. Developed custom study guides and practice problems.',
      icon: Zap,
      highlights: ['Average student grade improved by 15%', 'Voted Mentor of the Term']
    }
  ];

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-white">LEADERSHIP & IMPACT</h2>
            <p className="text-muted-foreground text-lg leading-relaxed font-medium">
              Beyond code, I am passionate about building communities and mentoring others to foster a collaborative engineering culture.
            </p>
          </div>

          <div className="grid gap-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="group p-8 glass-card border-white/5 rounded-2xl shadow-sm hover:border-primary/20 transition-all duration-500">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-all duration-500">
                    <exp.icon className="w-7 h-7 text-primary group-hover:text-white" />
                  </div>
                  <div className="space-y-4 flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <p className="text-primary font-bold uppercase tracking-widest text-[10px]">{exp.org}</p>
                      </div>
                      <span className="text-xs font-black uppercase tracking-widest text-muted-foreground px-3 py-1 bg-white/5 rounded-full w-fit border border-white/5">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed font-medium">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-x-8 gap-y-2">
                      {exp.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm font-bold text-white/70">
                           <div className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
                           {h}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
