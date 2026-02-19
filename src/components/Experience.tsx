'use client';

import { Users, Microscope, Rocket, Library, Megaphone, Globe, Terminal, Briefcase, ChevronRight, BookOpen } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function Experience() {
  const experiences = [
    {
      title: 'Executive Lead',
      org: 'NERDS 2.0 · Hybrid',
      period: 'Aug 2025 - Present',
      description: 'Coordinated R&D for award-winning initiatives, securing ₱1.2M+ in total grants and startup incentives.',
      icon: Microscope,
      details: [
        'Coordinated with 20+ organizations, including national agencies and private firms.',
        'Directed R&D operations leading to award-winning initiatives and high-value project grants.',
        'Led 3 cross-functional teams of developers, researchers, and designers using Agile Scrum.',
        'Earned national and regional recognition at major innovation fairs.',
        'Architecting Proxygen and Birdseye AI/IoT solutions.'
      ],
      skills: ['Program Management', 'Agile Scrum', 'R&D Leadership', 'UI/UX Design']
    },
    {
      title: 'President, Library Committee',
      org: 'FEU Institute of Technology · Manila, PH',
      period: 'Aug 2024 - Present',
      description: 'Presiding over the FEU Tech Library Committee, leading student representation for the academic community.',
      icon: BookOpen,
      details: [
        'Presiding over the FEU Tech Library Committee, representing the student body in academic resource planning.',
        'Directing initiatives to improve digital literacy and resource accessibility for FEU Tech students.',
        'Collaborating with faculty and administration to modernize library services and engagement.',
        'Spearheading the Salayliwa edu-cultural project in collaboration with the National Library.'
      ],
      skills: ['Academic Leadership', 'Strategic Planning', 'Technical Advocacy']
    },
    {
      title: 'President',
      org: 'AGAPE PH0209 · Quezon City, PH',
      period: 'Feb 2024 - Present',
      description: 'Directing operations and strategic planning for a youth-led NGO with 200+ members.',
      icon: Users,
      details: [
        'Directed operations for a youth-led NGO with 200+ active members.',
        'Organized 15+ community programs impacting over 600 beneficiaries nationwide.',
        'Managed 5 cross-functional teams of 40+ volunteers ensuring program success.',
        'Represented the organization in 20+ city-wide and institutional forums.'
      ],
      skills: ['Organizational Leadership', 'Strategic Planning', 'Community Outreach']
    },
    {
      title: 'Lead Marketing Officer',
      org: 'C-RAM Solutions · Hybrid',
      period: 'Dec 2024 - Dec 2025',
      description: 'Secured grants and shaped the product roadmap for innovation-driven solutions.',
      icon: Megaphone,
      details: [
        'Drove marketing campaigns that positioned the startup to secure capital grants.',
        'Provided UX/UI insights within the Scrum team to shape the product roadmap.',
        'Boosted investor engagement by 30% through technical storytelling.',
        'Secured positive media mentions for technical innovation.'
      ],
      skills: ['Marketing Strategy', 'Innovation Development', 'Investor Relations']
    },
    {
      title: 'University Representative',
      org: 'NCR Alliance of DOST Scholars (NADS)',
      period: 'Mar 2024 - Mar 2025',
      description: 'Primary delegate to the DOST-NCR Alliance, representing institutional scholars.',
      icon: Globe,
      details: [
        'Secured institutional support to sustain the on-campus scholar community.',
        'Functioned as the primary delegate to the DOST-NCR Alliance regional body.',
        'Coordinated regional development projects with representatives from 10+ universities.',
        'Elevated the institution\'s voice among peer universities in NCR.'
      ],
      skills: ['Strategic Partnerships', 'Policy Shaping', 'Regional Coordination']
    }
  ];

  return (
    <section id="experience" className="py-24 relative bg-transparent overflow-visible">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-white/5 pb-16">
            <div className="space-y-6">
              <Badge className="bg-white/5 text-white/60 border-white/10 px-4 py-1 rounded-full font-black uppercase text-[10px] tracking-widest">
                Impact & Leadership 2026
              </Badge>
              <h2 className="text-5xl lg:text-7xl font-black text-white italic uppercase">Footprint.</h2>
            </div>
            <p className="text-muted-foreground text-xl leading-relaxed max-w-sm font-medium">
              Transforming technical expertise into collective impact through high-performance leadership in Manila.
            </p>
          </div>

          <div className="grid gap-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="group grid md:grid-cols-12 gap-12 p-10 glass-card rounded-[3rem] border-white/5 hover:border-primary/20 transition-all duration-700">
                <div className="md:col-span-1">
                  <div className="w-16 h-16 rounded-[1.25rem] bg-white/[0.02] border border-white/10 flex items-center justify-center group-hover:bg-primary transition-all duration-500 shadow-2xl">
                    <exp.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                </div>
                
                <div className="md:col-span-8 space-y-8">
                  <div>
                    <h3 className="text-3xl font-black text-white group-hover:text-primary transition-colors">{exp.title}</h3>
                    <p className="text-primary font-bold uppercase tracking-[0.2em] text-xs mt-2">{exp.org}</p>
                  </div>
                  <ul className="grid gap-4">
                    {exp.details.map((detail, i) => (
                      <li key={i} className="flex gap-4 text-muted-foreground font-medium group/item">
                        <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-1 group-hover/item:translate-x-1 transition-transform" />
                        <span className="text-sm lg:text-base">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-3 pt-4">
                    {exp.skills.map(skill => (
                      <span key={skill} className="px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-[10px] font-black text-white/40 uppercase tracking-widest">
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