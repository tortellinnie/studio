
import { Calendar, GraduationCap, Briefcase, Award } from 'lucide-react';

export function Journey() {
  const milestones = [
    {
      date: 'Aug 2024 - Present',
      title: 'Senior Year CS',
      organization: 'Tech University',
      description: 'Focusing on Advanced Algorithms, Cloud Computing, and Machine Learning. Working on a capstone project for AI-driven cybersecurity.',
      icon: GraduationCap,
      category: 'Education'
    },
    {
      date: 'May 2024 - Aug 2024',
      title: 'Software Engineering Intern',
      organization: 'Innovate Systems',
      description: 'Optimized backend microservices using Node.js and AWS, reducing latency by 30%. Implemented automated CI/CD pipelines.',
      icon: Briefcase,
      category: 'Work'
    },
    {
      date: 'Feb 2024',
      title: 'Hackathon Grand Prize',
      organization: 'CodeFest 2024',
      description: 'Led a team of four to build a real-time carbon footprint tracker. Awarded "Most Innovative Tech Stack".',
      icon: Award,
      category: 'Achievement'
    },
    {
      date: 'Sep 2022',
      title: 'Open Source Contributor',
      organization: 'React Ecosystem',
      description: 'Started contributing to major open-source UI libraries. Authored 15+ merged pull requests focused on accessibility.',
      icon: Briefcase,
      category: 'Growth'
    }
  ];

  return (
    <section id="journey" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold">My Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A chronological look at my growth, from my first line of code to professional internships and leadership roles.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line for desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-12">
            {milestones.map((item, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full md:w-auto mb-8 md:mb-0">
                  <div className={`p-6 bg-white rounded-xl shadow-sm border transition-all hover:shadow-md ${index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}>
                    <div className="flex items-center gap-2 mb-2 text-primary">
                      <Calendar className="w-4 h-4" />
                      <span className="text-xs font-semibold">{item.date}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-primary font-medium mb-3">{item.organization}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Central Circle */}
                <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-white border-2 border-primary rounded-full flex items-center justify-center z-10 shadow-sm md:flex hidden">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>

                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
