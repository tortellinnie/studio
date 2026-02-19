'use client';

import { cn } from '@/lib/utils';

export function Journey() {
  const milestones = [
    {
      year: '2026',
      title: 'Incoming IT Intern',
      org: 'Procter & Gamble (P&G)',
      desc: 'Selected for the prestigious P&G IT internship program. Focusing on high-scale technology optimization and digital transformation within a global FMCG leader.',
      status: 'Current'
    },
    {
      year: '2025',
      title: 'Executive Lead',
      org: 'NERDS 2.0',
      desc: 'Spearheading Salayliwa and Gabaydiwa innovation startups. Managing multidisciplinary R&D teams to develop functional prototypes for cognitive health and gamified literacy.',
    },
    {
      year: '2024',
      title: 'President, Library Committee',
      org: 'FEU Tech Library',
      desc: 'Leading the student body as the President of the FEU Tech Library Committee, directing resource strategy and cultural innovation projects in collaboration with the National Library.',
    },
    {
      year: '2024',
      title: 'President & Chief Strategist',
      org: 'AGAPE PH0209',
      desc: 'Led a youth-led NGO with 200+ members. Orchestrated 15+ community programs impacting 600+ beneficiaries nationwide through strategic technical leadership.',
    },
    {
      year: '2024',
      title: 'Software Engineering',
      org: 'FEU Institute of Technology',
      desc: 'Focused on AI, data systems, and user-centered design. Consistently recognized as a Top Performing Student with a 3.6 GPA and active academic scholarship.',
    }
  ];

  return (
    <section id="journey" className="py-32 bg-white relative overflow-hidden">
      {/* Subtle Grid Background - Matching Hero Theme */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-32 space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-primary/30" />
            <span className="text-[11px] font-black text-primary uppercase tracking-[0.5em]">Professional Roadmap</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-foreground uppercase italic tracking-tighter leading-none">
            IMPACT HISTORY<span className="text-primary">.</span>
          </h2>
        </div>

        <div className="space-y-0">
          {milestones.map((item, i) => (
            <div 
              key={i} 
              className="group border-t border-black/[0.06] py-24 first:border-t-0 transition-all duration-700 hover:bg-gray-50/50 px-8 -mx-8 rounded-[3rem]"
            >
              <div className="grid md:grid-cols-12 gap-12 items-start">
                {/* Year Column - Large, Italic, Primary Blue (Matching Hero Stats) */}
                <div className="md:col-span-4 lg:col-span-3">
                  <div className="flex flex-col">
                    <span className="text-6xl md:text-9xl font-semibold italic tracking-tighter text-primary leading-none">
                      {item.year}
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/20 mt-4 md:mt-6">
                      CHRONOLOGICAL LOG
                    </span>
                  </div>
                </div>

                {/* Content Column */}
                <div className="md:col-span-6 lg:col-span-7 space-y-8">
                  <div className="space-y-3">
                    <p className="text-[11px] font-black uppercase tracking-[0.4em] text-primary/60">
                      {item.org}
                    </p>
                    <h3 className="text-3xl md:text-5xl font-black text-foreground italic uppercase leading-[1.1] tracking-tight group-hover:text-primary transition-colors duration-500">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-foreground/50 text-xl font-medium leading-relaxed max-w-2xl">
                    {item.desc}
                  </p>
                </div>

                {/* Status Column */}
                <div className="md:col-span-2 flex md:justify-end items-start pt-4">
                   {item.status === 'Current' ? (
                     <div className="px-6 py-2.5 rounded-full bg-black text-white text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl flex items-center gap-3">
                       <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                       Active Phase
                     </div>
                   ) : (
                     <div className="w-3 h-3 rounded-full bg-primary/10 border border-primary/20" />
                   )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
