import { GraduationCap, Briefcase, Award, Milestone } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function Journey() {
  const milestones = [
    {
      date: '2024 - Present',
      title: 'Senior Software Engineering Student',
      org: 'Far Eastern University - Institute of Technology',
      desc: 'Specializing in high-performance computing, distributed systems, and real-time data pipelines. Maintaining a Top Performing Student ranking with a 3.6 GPA.',
      icon: GraduationCap,
      color: 'bg-blue-500'
    },
    {
      date: 'SUMMER 2024',
      title: 'Full Stack Engineer Intern',
      org: 'Tech Innovation Lab',
      desc: 'Architected cloud-native microservices using Next.js and Go. Optimized backend throughput by 40% and implemented automated testing frameworks.',
      icon: Briefcase,
      color: 'bg-primary'
    },
    {
      date: 'JAN 2024',
      title: 'Industry Case Study Winner',
      org: 'National Tech Symposium',
      desc: 'Awarded first place for developing a decentralized identity verification prototype using Ethereum and IPFS.',
      icon: Award,
      color: 'bg-amber-500'
    },
    {
      date: 'AUG 2023',
      title: 'Technical Project Lead',
      org: 'Academic Research Council',
      desc: 'Led a cross-functional team of 5 to build an AI-driven predictive analytics tool for environmental monitoring in urban areas.',
      icon: Milestone,
      color: 'bg-emerald-500'
    }
  ];

  return (
    <section id="journey" className="py-32 relative bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-32 space-y-6">
          <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1.5 rounded-full font-black tracking-widest uppercase text-[10px]">
            Professional Roadmap
          </Badge>
          <h2 className="text-5xl lg:text-7xl font-black text-white uppercase italic">Growth.</h2>
          <p className="text-muted-foreground max-w-2xl text-xl font-medium leading-relaxed">
            A chronological timeline of technical breakthroughs, leadership milestones, and academic milestones.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2 hidden lg:block" />

          <div className="space-y-24">
            {milestones.map((item, i) => (
              <div key={i} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-0 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className={`flex-1 w-full lg:px-20 ${i % 2 === 0 ? 'text-center lg:text-right' : 'text-center lg:text-left'}`}>
                  <div className="inline-block p-8 glass-card rounded-[2.5rem] border-white/[0.05] hover:border-primary/20 transition-all duration-500 group">
                    <span className="text-primary font-black tracking-[0.2em] text-[10px] uppercase mb-4 block">
                      {item.date}
                    </span>
                    <h3 className="text-2xl font-black text-white mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-white/60 font-bold uppercase tracking-widest text-xs mb-6">
                      {item.org}
                    </p>
                    <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="relative flex items-center justify-center z-10 w-16 h-16">
                  <div className={`absolute inset-0 ${item.color} blur-[20px] opacity-20 rounded-full`} />
                  <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center border-white/20 shadow-2xl">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
