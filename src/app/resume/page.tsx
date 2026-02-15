'use client';

import { Navbar } from '@/components/Navbar';
import { Contact } from '@/components/Contact';
import { Button } from '@/components/ui/button';
import { 
  Download, 
  Mail, 
  MapPin, 
  Linkedin, 
  Github, 
  ArrowLeft,
  GraduationCap,
  Briefcase,
  Code2,
  Award,
  Terminal,
  Cpu,
  Star
} from 'lucide-react';
import Link from 'next/link';

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-20 pt-40 print:pt-0">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header Controls */}
            <div className="flex justify-between items-center mb-12 print:hidden">
              <Button variant="ghost" asChild className="text-muted-foreground hover:text-white -ml-4">
                <Link href="/">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
                </Link>
              </Button>
              <Button onClick={handlePrint} className="rounded-full bg-primary hover:bg-primary/90 font-black uppercase tracking-widest text-[10px] h-12 px-8">
                <Download className="w-4 h-4 mr-2" /> Download PDF / Print
              </Button>
            </div>

            {/* Resume Content */}
            <div className="glass-card rounded-[3rem] p-12 md:p-20 border-white/5 shadow-2xl space-y-16 print:border-none print:shadow-none print:bg-white print:text-black print:p-0">
              
              {/* Header */}
              <div className="text-center space-y-6">
                <h1 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter print:text-black">
                  SHANN KARL <span className="text-primary">FELIPE</span>
                </h1>
                <div className="flex flex-wrap justify-center gap-4 text-primary font-black uppercase tracking-[0.2em] text-xs">
                  <span>Software Engineer</span>
                  <span className="text-white/20">•</span>
                  <span>Project Manager</span>
                </div>
                <div className="flex flex-wrap justify-center gap-6 pt-4 text-muted-foreground font-medium text-sm print:text-black">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    felipeshannkarl@gmail.com
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    Manila, Philippines
                  </div>
                  <div className="flex items-center gap-4">
                    <a href="https://github.com/tortellinnie" target="_blank" className="hover:text-primary"><Github className="w-5 h-5" /></a>
                    <a href="https://www.linkedin.com/in/shann-karl-felipe/" target="_blank" className="hover:text-primary"><Linkedin className="w-5 h-5" /></a>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-12 gap-16">
                {/* Main Column */}
                <div className="md:col-span-8 space-y-16">
                  {/* Summary */}
                  <section className="space-y-6">
                    <h2 className="text-xl font-black text-white uppercase tracking-widest flex items-center gap-3 print:text-black">
                      <Star className="w-5 h-5 text-primary" />
                      Summary
                    </h2>
                    <p className="text-muted-foreground leading-relaxed font-medium text-lg print:text-black">
                      3rd Year Computer Science student at FEU Tech (3.6 GPA) specializing in Software Engineering, recognized as a global delegate and national awardee. Experienced in AI-powered innovation, startup leadership, and cross-functional project delivery, with a proven record of pitching, execution, and scalable software solutions.
                    </p>
                  </section>

                  {/* Experience */}
                  <section className="space-y-8">
                    <h2 className="text-xl font-black text-white uppercase tracking-widest flex items-center gap-3 print:text-black">
                      <Briefcase className="w-5 h-5 text-primary" />
                      Experience
                    </h2>
                    <div className="space-y-12">
                      <div className="space-y-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-2xl font-black text-white print:text-black">Executive Lead</h3>
                            <p className="text-primary font-bold uppercase tracking-widest text-[10px]">NERDS 2.0 • August 2025 - Present</p>
                          </div>
                        </div>
                        <ul className="list-disc list-outside ml-4 text-muted-foreground space-y-2 font-medium print:text-black">
                          <li>Coordinated and collaborated with 20+ organizations, including national agencies and private firms.</li>
                          <li>Overseeing R&D leading to award-winning initiatives and a total of ₱150K in grants.</li>
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-2xl font-black text-white print:text-black">President</h3>
                            <p className="text-primary font-bold uppercase tracking-widest text-[10px]">AGAPE PH0209 (Youth NGO) • February 2024 - Present</p>
                          </div>
                        </div>
                        <ul className="list-disc list-outside ml-4 text-muted-foreground space-y-2 font-medium print:text-black">
                          <li>Directed operations and strategic planning for a youth-led NGO with 200+ active members.</li>
                          <li>Organized and led 15+ community programs and workshops impacting over 600 beneficiaries.</li>
                          <li>Managed 5 cross-functional teams of 40+ volunteers, ensuring program success within budget.</li>
                          <li>Represented the organization in 20+ inter-church and city-wide forums.</li>
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-2xl font-black text-white print:text-black">Lead Marketing Officer</h3>
                            <p className="text-primary font-bold uppercase tracking-widest text-[10px]">C-RAM Solutions • Dec 2024 - Dec 2025</p>
                          </div>
                        </div>
                        <ul className="list-disc list-outside ml-4 text-muted-foreground space-y-2 font-medium print:text-black">
                          <li>Provided UX/UI insights in Scrum team, shaping the product roadmap.</li>
                          <li>Drove marketing campaigns that positioned the startup to secure ₱600K in total capital.</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Projects */}
                  <section className="space-y-8">
                    <h2 className="text-xl font-black text-white uppercase tracking-widest flex items-center gap-3 print:text-black">
                      <Terminal className="w-5 h-5 text-primary" />
                      Projects
                    </h2>
                    <div className="space-y-10">
                      <div className="space-y-4">
                        <h3 className="text-2xl font-black text-white print:text-black">Salayliwa (Glicko-2 Algorithm)</h3>
                        <p className="text-primary font-bold text-[10px] uppercase tracking-widest">September 2025</p>
                        <ul className="list-disc list-outside ml-4 text-muted-foreground space-y-2 font-medium print:text-black">
                          <li>Led a Scrum team to develop a personalized mobile reading app to combat the reading crisis.</li>
                          <li>Integrated Adaptive Reading Score and Two Tower Neural Network Architecture.</li>
                          <li>Clinched Top 2 in the National Book Development Board's Readers Rising Hackathon 2025.</li>
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-2xl font-black text-white print:text-black">YT Shorts Automation Engine</h3>
                        <p className="text-primary font-bold text-[10px] uppercase tracking-widest">March 2025</p>
                        <ul className="list-disc list-outside ml-4 text-muted-foreground space-y-2 font-medium print:text-black">
                          <li>Automated content generation producing 100+ YouTube Shorts monthly.</li>
                          <li>Achieved 100% reduction in manual effort through a fully autonomous content pipeline.</li>
                          <li>Integrated Docker, n8n, Google Cloud APIs, and Gemini AI.</li>
                        </ul>
                      </div>
                    </div>
                  </section>
                </div>

                {/* Sidebar Column */}
                <div className="md:col-span-4 space-y-16">
                  {/* Skills */}
                  <section className="space-y-8">
                    <h2 className="text-xl font-black text-white uppercase tracking-widest flex items-center gap-3 print:text-black">
                      <Code2 className="w-5 h-5 text-primary" />
                      Skills
                    </h2>
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] print:text-black">Languages</p>
                        <div className="flex flex-wrap gap-2">
                          {['C', 'C++', 'Java', 'Python', 'SQL'].map(s => (
                            <span key={s} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white print:text-black">{s}</span>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-3">
                        <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] print:text-black">Methodologies</p>
                        <div className="flex flex-wrap gap-2">
                          {['Scrum', 'Kanban', 'Lean Software Development'].map(s => (
                            <span key={s} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white print:text-black">{s}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Education */}
                  <section className="space-y-8">
                    <h2 className="text-xl font-black text-white uppercase tracking-widest flex items-center gap-3 print:text-black">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      Education
                    </h2>
                    <div className="space-y-4">
                      <h3 className="font-black text-white text-lg leading-tight print:text-black">FEU Institute of Technology</h3>
                      <p className="text-primary font-bold uppercase tracking-widest text-[10px]">BS in Computer Science</p>
                      <p className="text-muted-foreground text-sm font-bold print:text-black">Expected July 2027</p>
                      <div className="inline-block px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-black text-white print:text-black">GPA: 3.6</div>
                      <div className="pt-2 text-xs text-muted-foreground space-y-1 print:text-black">
                        <p>• FEU Tech Academic Scholar</p>
                        <p>• DOST Scholar</p>
                        <p>• QCYDO Scholar</p>
                      </div>
                    </div>
                  </section>

                  {/* Awards */}
                  <section className="space-y-8">
                    <h2 className="text-xl font-black text-white uppercase tracking-widest flex items-center gap-3 print:text-black">
                      <Award className="w-5 h-5 text-primary" />
                      Awards
                    </h2>
                    <div className="space-y-6">
                      {[
                        { title: "EMC Global Summit Winner", org: "Musashino Uni" },
                        { title: "Most Outstanding Youth", org: "QC Government" },
                        { title: "1st Runner-Up PSC X", org: "DICT Regional" },
                        { title: "1st Runner-Up Readers Rising", org: "NBDB" },
                        { title: "2x Top Student", org: "FEU Tech" }
                      ].map((award, i) => (
                        <div key={i} className="space-y-1">
                          <p className="text-sm font-bold text-white leading-tight print:text-black">{award.title}</p>
                          <p className="text-[10px] font-black text-primary uppercase tracking-widest">{award.org}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
