import { Award, ShieldCheck, Trophy, BadgeCheck, Sparkles, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function Achievements() {
  const data = {
    awards: [
      {
        title: "Dean's List for Academic Excellence",
        org: "School of Computing",
        year: "2021 - 2024",
        icon: Trophy
      },
      {
        title: "National Merit Scholarship",
        org: "Federal Education Board",
        year: "2021",
        icon: Award
      },
      {
        title: "Technological Innovation Finalist",
        org: "Regional Tech Symposium",
        year: "2023",
        icon: Sparkles
      }
    ],
    certs: [
      {
        title: "AWS Certified Developer",
        org: "Amazon Web Services",
        id: "DVA-C02",
        icon: ShieldCheck
      },
      {
        title: "Google Cloud Architect",
        org: "Google Cloud",
        id: "GCP-PCA",
        icon: BadgeCheck
      },
      {
        title: "Meta Front-End Specialization",
        org: "Meta / Coursera",
        id: "META-FE-2022",
        icon: Zap
      }
    ]
  };

  return (
    <section id="achievements" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 space-y-6">
          <Badge variant="outline" className="border-primary text-primary font-bold uppercase tracking-widest px-4 py-1">Recognition</Badge>
          <h2 className="text-4xl lg:text-6xl font-black text-white uppercase italic">Honors & Achievements.</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            A track record of consistent excellence in both elite academic environments and professional industry-standard certifications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Awards */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold flex items-center gap-3 text-white uppercase tracking-tight">
              <Sparkles className="w-6 h-6 text-primary" />
              Academic Honors
            </h3>
            <div className="space-y-4">
              {data.awards.map((item, idx) => (
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

          {/* Certifications */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold flex items-center gap-3 text-white uppercase tracking-tight">
              <ShieldCheck className="w-6 h-6 text-accent" />
              Professional Certs
            </h3>
            <div className="space-y-4">
              {data.certs.map((item, idx) => (
                <Card key={idx} className="glass-card border-white/5 hover:border-accent/30 transition-all duration-500 group">
                  <CardContent className="p-8 flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <item.icon className="w-8 h-8 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-muted-foreground font-medium mb-4">{item.org} • ID: {item.id}</p>
                      <button className="text-[10px] font-black uppercase tracking-[0.2em] text-accent hover:underline decoration-2 underline-offset-8 transition-all">Verify Credential</button>
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
