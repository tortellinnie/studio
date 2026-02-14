import { Award, ShieldCheck, Trophy, BadgeCheck, Sparkles } from 'lucide-react';
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
      }
    ]
  };

  return (
    <section id="achievements" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 space-y-6">
          <Badge variant="outline" className="border-primary text-primary font-bold">RECOGNITION</Badge>
          <h2 className="text-4xl lg:text-6xl font-black text-white">HONORS & ACHIEVEMENTS</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            A track record of excellence in both academic environments and professional standard certifications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Awards */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold flex items-center gap-3 text-white">
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
            <h3 className="text-2xl font-bold flex items-center gap-3 text-white">
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
                      <button className="text-xs font-black uppercase tracking-widest text-accent hover:underline decoration-2 underline-offset-4">Verify Credential</button>
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