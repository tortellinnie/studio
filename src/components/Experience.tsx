import { Users, CodeXml, Terminal, Globe, Megaphone, Library, Microscope, Zap, Rocket, Briefcase, Milestone } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function Experience() {
  const experiences = [
    {
      title: 'Executive Lead',
      org: 'NERDS 2.0',
      period: 'Apr 2025 - Present',
      description: 'Spearheading award-winning innovation startups. Directed full-cycle development for Salayliwa (literacy) and Gabaydiwa (dementia care). Currently architecting Proxygen (Fish Pond Risk Assessment) and Birdseye (Poultry Health Monitoring).',
      icon: Microscope,
      details: [
        'Directed full-cycle project development from research integration to prototype deployment.',
        'Led 3 cross-functional teams of developers and researchers using Agile Scrum.',
        'Earned national recognition and presented to 1000+ attendees at innovation fairs.',
        'Collaborated with DOST-PCHRD and Dept. of Neurosciences for validation.'
      ],
      skills: ['Program Management', 'Agile Scrum', 'Data Modeling', 'Product Strategy']
    },
    {
      title: 'President & Chief Strategist',
      org: 'AGAPE PH0209 Child Development Center',
      period: 'Feb 2024 - Present',
      description: 'Directing operations for a youth-led NGO with 200+ active members. Focusing on nationwide community impact and strategic foresight.',
      icon: Users,
      details: [
        'Organized 15+ community programs impacting over 600 beneficiaries nationwide.',
        'Managed cross-functional volunteer teams ensuring success within strict budgets.',
        'Strengthened local government partnerships through city-wide forum representation.',
        'In-charge of strategic foresight reports and innovative proposals for stakeholders.'
      ],
      skills: ['Organizational Leadership', 'Strategic Planning', 'Resource Management']
    },
    {
      title: 'President',
      org: 'FEU Tech Student Library Committee',
      period: 'Oct 2025 - Present',
      description: 'Overseeing operations and strategic initiatives for the campus library system.',
      icon: Library,
      details: [
        'Leading a team of 20+ officers and volunteers for engagement programs.',
        'Increased library engagement by 35% through targeted digital campaigns.',
        'Developed four new library programs enhancing student resource access.',
        'Mentored officers in leadership and organizational management.'
      ],
      skills: ['Team Mentorship', 'Engagement Strategy', 'Project Execution']
    },
    {
      title: 'Chief Marketing Officer',
      org: 'C-RAM Solutions',
      period: 'Dec 2024 - Nov 2025',
      description: 'Positioned the startup for high-value competitive grants and boosted investor relations.',
      icon: Megaphone,
      details: [
        'Drove campaigns that secured grants worth hundreds of thousands in PHP.',
        'Provided UX/UI insights to the Scrum team to shape the product roadmap.',
        'Boosted investor engagement by 30% through strategic competition representation.',
        'Secured positive media mentions in key industry publications.'
      ],
      skills: ['Marketing', 'Innovation Development', 'UX Insights']
    },
    {
      title: 'University Representative',
      org: 'NCR Alliance of DOST Scholars (NADS)',
      period: 'Mar 2024 - Mar 2025',
      description: 'Primary delegate to the DOST-NCR Alliance, representing tens of thousands of scholars.',
      icon: Globe,
      details: [
        'Secured institutional support to formalize the on-campus scholar community.',
        'Shaped regional policy through direct collaboration with 10+ universities.',
        'Coordinated regional development projects maximizing collective scholar impact.'
      ],
      skills: ['Strategic Partnerships', 'Policy Shaping', 'Event Coordination']
    },
    {
      title: 'Project Manager & Frontend Developer',
      org: 'PUP - RISFI',
      period: 'Feb 2022 - Jun 2023',
      description: 'Technical lead for research-driven software solutions at the Research Institute.',
      icon: Terminal,
      details: [
        'Managed a team of six developers, overseeing all delivery and QA metrics.',
        'Executed agile strategic plans meeting strict research institute deadlines.',
        'Liaised between the dev team and business stakeholders to align technical goals.'
      ],
      skills: ['Web Development', 'Project Management', 'Agile Strategic Planning']
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
                  <ul className="space-y-3">
                    {exp.details.map((detail, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground font-medium">
                        <Rocket className="w-4 h-4 text-primary shrink-0 mt-1" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
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
