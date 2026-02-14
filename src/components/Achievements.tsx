import { Award, ShieldCheck, Trophy, BadgeCheck, Sparkles, BookOpen, GraduationCap, Smartphone, Server, Code, Code2, Terminal, BrainCircuit, ShieldAlert, Cpu, Database, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function Achievements() {
  const data = {
    scholarships: [
      {
        title: "Department of Science and Technology (DOST) Scholar",
        org: "DOST Philippines",
        year: "2023 - Present",
        icon: GraduationCap
      },
      {
        title: "Quezon City Youth Development Office (QCYDO) Scholar",
        org: "QC Government",
        year: "2023 - Present",
        icon: BadgeCheck
      },
      {
        title: "FEU Tech Financial Academic Scholar",
        org: "FEU Institute of Technology",
        year: "2023 - Present",
        icon: Sparkles
      },
      {
        title: "Datacamp (Data Engineering Pilipinas) Scholar",
        org: "Data Engineering Pilipinas",
        year: "2024",
        icon: BookOpen
      }
    ],
    honors: [
      {
        title: "2x Top Performing Student",
        org: "Computer Science Department",
        id: "FEU Tech",
        icon: Trophy
      },
      {
        title: "2nd Runner-Up",
        org: "Startup QC",
        id: "Winner 2024",
        icon: Award
      },
      {
        title: "Global Delegate (Japan)",
        org: "International Exchange",
        id: "Representative",
        icon: Globe
      }
    ],
    certifications: [
      {
        title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations",
        org: "Oracle",
        year: "2025",
        icon: BrainCircuit
      },
      {
        title: "Certified Network Security Practitioner (CNSP) with Merit",
        org: "The SecOps Group",
        year: "2025",
        icon: ShieldAlert
      },
      {
        title: "AI Associate",
        org: "Salesforce",
        year: "2025",
        icon: Sparkles
      },
      {
        title: "Accredited Generative AI Fundamentals",
        org: "Databricks Academy",
        year: "2025",
        icon: Database
      },
      {
        title: "Linux Essentials Certification",
        org: "Cisco Networking Academy",
        year: "2025",
        icon: Terminal
      },
      {
        title: "IT Specialist - Python",
        org: "Certiport",
        year: "2025",
        icon: Code2
      },
      {
        title: "Microsoft Summer Bootcamp Bronze Attendee",
        org: "Microsoft",
        year: "2025",
        icon: Cpu
      },
      {
        title: "Android Development with Kotlin",
        org: "LinkedIn",
        year: "2025",
        icon: Smartphone
      },
      {
        title: "Node.js: Testing and Code Quality",
        org: "LinkedIn",
        year: "2025",
        icon: Server
      },
      {
        title: "Learning MATLAB",
        org: "LinkedIn",
        year: "2025",
        icon: Code
      }
    ]
  };

  return (
    <section id="achievements" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 space-y-6">
          <Badge variant="outline" className="border-primary text-primary font-bold uppercase tracking-widest px-4 py-1">Recognition</Badge>
          <h2 className="text-4xl lg:text-6xl font-black text-white uppercase italic">Impact & Credentials.</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            A comprehensive record of academic excellence, national scholarships, and industry-standard certifications.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Scholarships */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold flex items-center gap-3 text-white uppercase tracking-tight">
              <Sparkles className="w-5 h-5 text-primary" />
              Elite Scholarships
            </h3>
            <div className="space-y-4">
              {data.scholarships.map((item, idx) => (
                <Card key={idx} className="glass-card border-white/5 hover:border-primary/30 transition-all duration-500 group">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1 leading-tight">{item.title}</h4>
                      <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">{item.org} • {item.year}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Academic Honors */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold flex items-center gap-3 text-white uppercase tracking-tight">
              <ShieldCheck className="w-5 h-5 text-accent" />
              Honors & Awards
            </h3>
            <div className="space-y-4">
              {data.honors.map((item, idx) => (
                <Card key={idx} className="glass-card border-white/5 hover:border-accent/30 transition-all duration-500 group">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1 leading-tight">{item.title}</h4>
                      <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">{item.org} • {item.id}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Licenses & Certifications */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold flex items-center gap-3 text-white uppercase tracking-tight">
              <Code2 className="w-5 h-5 text-primary" />
              Professional Certs
            </h3>
            <div className="max-h-[800px] overflow-y-auto pr-2 space-y-4 custom-scrollbar">
              {data.certifications.map((item, idx) => (
                <Card key={idx} className="glass-card border-white/5 hover:border-primary/30 transition-all duration-500 group">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-all duration-500">
                      <item.icon className="w-6 h-6 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1 leading-tight">{item.title}</h4>
                      <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">{item.org} • Issued 2025</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
