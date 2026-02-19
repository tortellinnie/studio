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
        <div className="mb-20 space-y-6">
          <Badge className="bg-white/5 text-white/40 border-white/10 px-4 py-1.5 rounded-full font-black tracking-widest uppercase text-[10px]">
            Professional Roadmap
          </Badge>
          <h2 className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter leading-none">
            Impact.
          </h2>
        </div>

        <div className="space-y-20">
          {milestones.map((item, i) => (
            <div key={i} className="group grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-3">
                <span className="text-sm font-black italic text-white/20 group-hover:text-white transition-colors duration-500">
                  {item.date}
                </span>
              </div>
              <div className="md:col-span-6 space-y-4">
                <div className="space-y-2">
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">{item.org}</p>
                  <h3 className="text-2xl md:text-4xl font-black text-white italic uppercase group-hover:text-accent transition-colors duration-500">
                    {item.title}
                  </h3>
                </div>
                <p className="text-base text-white/40 font-medium leading-relaxed group-hover:text-white/60 transition-colors duration-500">
                  {item.desc}
                </p>
              </div>
              <div className="md:col-span-3 flex justify-end">
                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white transition-all duration-500">
                  <item.icon className="w-5 h-5 text-white/20 group-hover:text-white transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
