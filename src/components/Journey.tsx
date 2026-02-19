import { GraduationCap, Briefcase, Award, Milestone, Rocket, Building2, BookOpen } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function Journey() {
  const milestones = [
    {
      date: 'March 2026 - Present',
      title: 'Incoming IT Intern',
      org: 'Procter & Gamble (P&G)',
      desc: 'Selected for the prestigious P&G IT internship program. Focusing on high-scale technology optimization and digital transformation within a global FMCG leader.',
      icon: Building2,
    },
    {
      date: '2025 - 2026',
      title: 'Executive Lead',
      org: 'NERDS 2.0',
      desc: 'Spearheading Salayliwa and Gabaydiwa innovation startups. Managing multidisciplinary teams to develop functional prototypes for cognitive health and gamified literacy.',
      icon: Rocket,
    },
    {
      date: '2024 - 2026',
      title: 'President, Library Committee',
      org: 'FEU Tech Library',
      desc: 'Leading the student body as the President of the FEU Tech Library Committee, directing resource strategy and cultural innovation projects in collaboration with the National Library.',
      icon: BookOpen,
    },
    {
      date: '2024 - 2026',
      title: 'President & Chief Strategist',
      org: 'AGAPE PH0209',
      desc: 'Led a youth-led NGO with 200+ members. Orchestrated 15+ community programs impacting 600+ beneficiaries nationwide.',
      icon: Briefcase,
    },
    {
      date: '2024 - 2026',
      title: 'Software Engineering',
      org: 'FEU Institute of Technology',
      desc: 'Focused on AI, data systems, and user-centered design. Consistently recognized as a Top Performing Student with a 3.6 GPA.',
      icon: GraduationCap,
    }
  ];

  return (
    <section id="journey" className="py-24 bg-transparent">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-20 space-y-4">
          <p className="text-[11px] font-black text-red-500 uppercase tracking-[0.4em]">Professional Roadmap</p>
          <h2 className="text-4xl md:text-6xl font-black text-foreground uppercase italic tracking-tighter">Impact History.</h2>
        </div>

        <div className="space-y-16">
          {milestones.map((item, i) => (
            <div key={i} className="group grid md:grid-cols-12 gap-8 items-start relative pb-16 border-b border-gray-100 last:border-0">
              <div className="md:col-span-3">
                <span className="text-sm font-black italic text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                  {item.date}
                </span>
              </div>
              <div className="md:col-span-6 space-y-4">
                <div className="space-y-2">
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground">{item.org}</p>
                  <h3 className="text-2xl md:text-4xl font-black text-foreground italic uppercase transition-colors duration-500">
                    {item.title}
                  </h3>
                </div>
                <p className="text-base text-muted-foreground font-medium leading-relaxed group-hover:text-foreground/80 transition-colors duration-500">
                  {item.desc}
                </p>
              </div>
              <div className="md:col-span-3 flex justify-end">
                <div className="w-14 h-14 rounded-full border border-border flex items-center justify-center group-hover:border-black transition-all duration-500">
                  <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-black transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}