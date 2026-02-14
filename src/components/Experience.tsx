
import { Users, Code, Zap, Globe } from 'lucide-react';

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
            <h2 className="text-3xl font-bold">Leadership & Impact</h2>
            <p className="text-muted-foreground text-lg">
              Beyond code, I am passionate about building communities and mentoring others to foster a collaborative engineering culture.
            </p>
          </div>

          <div className="grid gap-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="group p-8 bg-white border rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <exp.icon className="w-7 h-7" />
                  </div>
                  <div className="space-y-4 flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <p className="text-primary font-semibold">{exp.org}</p>
                      </div>
                      <span className="text-sm font-medium text-muted-foreground px-3 py-1 bg-muted rounded-full w-fit">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-x-8 gap-y-2">
                      {exp.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm font-bold text-[#333333]">
                           <div className="w-1 h-1 bg-accent rounded-full" />
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
