
import { Award, ShieldCheck, Trophy, BadgeCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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
        title: "AWS Certified Developer Associate",
        org: "Amazon Web Services",
        id: "DVA-C02",
        icon: ShieldCheck
      },
      {
        title: "Professional Google Cloud Architect",
        org: "Google Cloud",
        id: "GCP-PCA",
        icon: BadgeCheck
      }
    ]
  };

  return (
    <section id="achievements" className="py-24 bg-[#333333] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold text-white">Achievements & Certifications</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A testament to my commitment to continuous learning and professional standards in the tech industry.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Awards */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-3 text-accent">
              <Trophy className="w-6 h-6" />
              Academic Honors & Awards
            </h3>
            <div className="space-y-4">
              {data.awards.map((item, idx) => (
                <Card key={idx} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.org} • {item.year}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-3 text-accent">
              <ShieldCheck className="w-6 h-6" />
              Professional Certifications
            </h3>
            <div className="space-y-4">
              {data.certs.map((item, idx) => (
                <Card key={idx} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.org} • ID: {item.id}</p>
                      <button className="text-xs text-accent hover:underline mt-2 font-semibold">Verify Credential</button>
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
