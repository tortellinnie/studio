import { GraduationCap, Briefcase, Award, Milestone, Rocket, Building2, BookOpen, Calendar, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export function Journey() {
  const milestones = [
    {
      date: 'March 2026 - Present',
      year: '2026',
      title: 'Incoming IT Intern',
      org: 'Procter & Gamble (P&G)',
      desc: 'Selected for the prestigious P&G IT internship program. Focusing on high-scale technology optimization and digital transformation within a global FMCG leader.',
      icon: Building2,
      status: 'Current'
    },
    {
      date: '2025 - 2026',
      year: '2025',
      title: 'Executive Lead',
      org: 'NERDS 2.0',
      desc: 'Spearheading Salayliwa and Gabaydiwa innovation startups. Managing multidisciplinary teams to develop functional prototypes for cognitive health and gamified literacy.',
      icon: Rocket,
    },
    {
      date: '2024 - 2026',
      year: '2024',
      title: 'President, Library Committee',
      org: 'FEU Tech Library',
      desc: 'Leading the student body as the President of the FEU Tech Library Committee, directing resource strategy and cultural innovation projects in collaboration with the National Library.',
      icon: BookOpen,
    },
    {
      date: '2024 - 2026',
      year: '2024',
      title: 'President & Chief Strategist',
      org: 'AGAPE PH0209',
      desc: 'Led a youth-led NGO with 200+ members. Orchestrated 15+ community programs impacting 600+ beneficiaries nationwide.',
      icon: Briefcase,
    },
    {
      date: '2024 - 2026',
      year: '2024',
      title: 'Software Engineering',
      org: 'FEU Institute of Technology',
      desc: 'Focused on AI, data systems, and user-centered design. Consistently recognized as a Top Performing Student with a 3.6 GPA.',
      icon: GraduationCap,
    }
  ];

  return (
    <section id="journey" className="py-32 bg-transparent relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-24 space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-primary/30" />
            <span className="text-[11px] font-black text-primary uppercase tracking-[0.5em]">Professional Roadmap</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-foreground uppercase italic tracking-tighter leading-none">
            Impact <span className="text-primary/20">History.</span>
          </h2>
        </div>

        <div className="relative pl-8 md:pl-0">
          {/* Vertical Connecting Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/20 to-transparent md:-translate-x-1/2" />

          <div className="space-y-24">
            {milestones.map((item, i) => (
              <div key={i} className={cn(
                "group relative flex flex-col md:flex-row items-center gap-12",
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              )}>
                
                {/* Milestone Node */}
                <div className="absolute left-[-8px] md:left-1/2 top-0 md:top-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary z-10 md:-translate-x-1/2 md:-translate-y-1/2 transition-all duration-500 group-hover:scale-150 group-hover:bg-primary">
                   {item.status === 'Current' && (
                     <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
                   )}
                </div>

                {/* Date Side */}
                <div className={cn(
                  "hidden md:flex flex-col w-full md:w-1/2",
                  i % 2 === 0 ? "items-end text-right pr-12" : "items-start text-left pl-12"
                )}>
                  <div className="space-y-1">
                    <span className="text-3xl font-black italic text-primary/10 group-hover:text-primary/40 transition-colors duration-500">{item.year}</span>
                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em]">{item.date}</p>
                  </div>
                </div>

                {/* Content Side */}
                <div className={cn(
                  "w-full md:w-1/2",
                  i % 2 === 0 ? "md:pl-12" : "md:pr-12"
                )}>
                  <div className="p-8 md:p-10 glass-card rounded-[2.5rem] border-white/5 group-hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden">
                    {/* Corner Icon Backdrop */}
                    <div className="absolute top-[-20px] right-[-20px] opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                      <item.icon className="w-40 h-40" />
                    </div>

                    <div className="relative space-y-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-2">
                          <p className="text-[9px] font-black uppercase tracking-[0.4em] text-primary">{item.org}</p>
                          <h3 className="text-2xl md:text-3xl font-black text-foreground italic uppercase leading-none transition-colors duration-500 group-hover:text-primary">
                            {item.title}
                          </h3>
                        </div>
                        <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0 border border-primary/10 group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                          <item.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                        </div>
                      </div>

                      <p className="text-sm md:text-base text-muted-foreground font-medium leading-relaxed">
                        {item.desc}
                      </p>

                      <div className="flex items-center gap-2 text-[10px] font-black text-muted-foreground/40 uppercase tracking-widest pt-4 md:hidden">
                        <Calendar className="w-3 h-3 text-primary" />
                        {item.date}
                      </div>

                      <div className="pt-4 flex items-center gap-2 text-[9px] font-black text-primary uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                        View Details <ChevronRight className="w-3 h-3" />
                      </div>
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
