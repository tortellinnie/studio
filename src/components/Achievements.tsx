import { Award, ShieldCheck, Trophy, BadgeCheck, Sparkles, BookOpen, GraduationCap } from 'lucide-react';
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
        title: "Industry Case Study Winner",
        org: "National Tech Symposium",
        id: "Winner 2024",
        icon: Award
      },
      {
        title: "AWS Certified Developer",
        org: "Amazon Web Services",
        id: "DVA-C02",
        icon: ShieldCheck
      }
    ]
  };

  return (
    <section id="achievements" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 space-y-6">
          <Badge variant="outline" className="border-primary text-primary font-bold uppercase tracking-widest px-4 py-1">Recognition</Badge>
          <h2 className="text-4xl lg:text-6xl font-black text-white uppercase italic">Honors.</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Consistently recognized for academic rigor, innovation in tech symposiums, and multi-sectoral scholarship excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Scholarships */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold flex items-center gap-3 text-white uppercase tracking-tight">
              <Sparkles className="w-6 h-6 text-primary" />
              Elite Scholarships
            </h3>
            <div className="space-y-4">
              {data.scholarships.map((item, idx) => (
                <Card key={idx} className="glass-card border-white/5 hover:border-primary/30 transition-all duration-500 group">
                  <CardContent className="p-8 flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-muted-foreground font-medium">{item.org} • {item.year}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Academic Honors */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold flex items-center gap-3 text-white uppercase tracking-tight">
              <ShieldCheck className="w-6 h-6 text-accent" />
              Academic & Industry Honors
            </h3>
            <div className="space-y-4">
              {data.honors.map((item, idx) => (
                <Card key={idx} className="glass-card border-white/5 hover:border-accent/30 transition-all duration-500 group">
                  <CardContent className="p-8 flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <item.icon className="w-8 h-8 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-muted-foreground font-medium mb-4">{item.org} • {item.id}</p>
                      <button className="text-[10px] font-black uppercase tracking-[0.2em] text-accent hover:underline decoration-2 underline-offset-8 transition-all">Verify Rank</button>
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
