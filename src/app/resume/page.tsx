'use client';

import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Printer } from 'lucide-react';
import Link from 'next/link';

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Navbar />
      
      <section className="py-16 pt-40 print:pt-0 print:py-0">
        <div className="container mx-auto px-6">
          <div className="max-w-[8.5in] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 print:hidden gap-4">
              <Button variant="ghost" asChild className="text-muted-foreground hover:text-white -ml-4">
                <Link href="/">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
                </Link>
              </Button>
              <div className="flex flex-col items-center md:items-end gap-2">
                <div className="flex gap-4">
                  <Button onClick={handlePrint} className="rounded-full bg-primary hover:bg-primary/90 font-bold uppercase tracking-widest text-[10px] h-11 px-8">
                    <Printer className="w-4 h-4 mr-2" /> Print / Save as PDF
                  </Button>
                </div>
                <p className="text-[10px] text-muted-foreground font-medium italic">Tip: Select "Save as PDF" in the print destination to download</p>
              </div>
            </div>

            <div id="resume-document" className="bg-white !text-black shadow-2xl p-[0.75in] font-serif leading-tight print:shadow-none print:p-0 min-h-[11in] mx-auto border border-slate-200 print:border-none">
              
              <div className="text-center mb-8">
                <div className="text-5xl font-bold uppercase tracking-tight mb-1 !text-black">SHANN KARL FELIPE</div>
                <div className="text-[12pt] font-bold tracking-[0.1em] mb-1 !text-black">SOFTWARE ENGINEER | PROJECT MANAGER</div>
                <div className="text-[10pt] font-medium !text-black">felipeshannkarl@gmail.com | Manila, Philippines</div>
              </div>

              <div className="mb-6">
                <h2 className="text-[11pt] font-bold border-b border-black uppercase mb-2 tracking-widest !text-black">Summary</h2>
                <p className="text-[10pt] text-justify leading-snug !text-black">
                  3rd Year Computer Science student (FEU Tech, 3.6 GPA) specializing in Software Engineering. Recognized as a global delegate (Tokyo 2026) and national award-winning innovator. Proven expertise in AI-powered system design, startup leadership (NERDS 2.0), and cross-functional project management.
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-[11pt] font-bold border-b border-black uppercase mb-2 tracking-widest !text-black">Technical Skills</h2>
                <div className="text-[10pt] space-y-1 !text-black">
                  <div className="grid grid-cols-[140px_1fr]">
                    <span className="font-bold">Languages</span>
                    <span>C, C++, Java, Python, SQL, JavaScript/TypeScript</span>
                  </div>
                  <div className="grid grid-cols-[140px_1fr]">
                    <span className="font-bold">Specializations</span>
                    <span>Software Solution Development, Technical Writing, AI Modeling</span>
                  </div>
                  <div className="grid grid-cols-[140px_1fr]">
                    <span>Certifications</span>
                    <span>Linux Essentials, ITSC Python, OCI AI Foundations, Salesforce AI Associate</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-[11pt] font-bold border-b border-black uppercase mb-2 tracking-widest !text-black">Education</h2>
                
                <div className="mb-4 !text-black">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-[10.5pt]">FEU Institute of Technology</span>
                    <span className="text-[10pt]">Sep 2023 – Jul 2027</span>
                  </div>
                  <div className="flex justify-between items-baseline italic text-[10pt] mb-1">
                    <span>Bachelor's degree, Computer Science</span>
                    <span className="font-bold">GPA: 3.6</span>
                  </div>
                  <ul className="list-disc list-outside ml-5 text-[10pt] space-y-1">
                    <li><span className="font-bold">Activities:</span> Senior Writer at The Innovator; Campus Journalist at UAAP; Publicity and Externals Junior Officer at ACM; Podcast Host at ACM Diaries; Committee Officer at FEU Tech GDSC.</li>
                    <li><span className="font-bold">Key Focus:</span> Software Solution Development, Technical Writing.</li>
                  </ul>
                </div>

                <div className="mb-2 !text-black">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-[10.5pt]">Polytechnic University of the Philippines</span>
                    <span className="text-[10pt]">Sep 2021 – Jul 2023</span>
                  </div>
                  <div className="flex justify-between items-baseline italic text-[10pt] mb-1">
                    <span>Senior High School (ICT Strand)</span>
                    <span className="font-bold">With High Honors</span>
                  </div>
                  <ul className="list-disc list-outside ml-5 text-[10pt] space-y-1">
                    <li><span className="font-bold">Activities:</span> PUPSHS COMELEC ICT Representative.</li>
                  </ul>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-[11pt] font-bold border-b border-black uppercase mb-2 tracking-widest !text-black">Experience</h2>
                
                <div className="mb-4 !text-black">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold underline text-[10.5pt]">Executive Lead</span>
                    <span className="text-[10pt]">August 2025 - Present</span>
                  </div>
                  <div className="flex justify-between items-baseline italic text-[10pt] mb-1">
                    <span>NERDS 2.0</span>
                    <span>Hybrid</span>
                  </div>
                  <ul className="list-disc list-outside ml-5 text-[10pt] space-y-1">
                    <li>Coordinated R&D for award-winning initiatives, securing <span className="font-bold">₱150K</span> in total grants.</li>
                    <li>Architected <span className="font-bold">Proxygen</span> and <span className="font-bold">Birdseye</span> (AI/IoT agriculture solutions).</li>
                  </ul>
                </div>

                <div className="mb-4 !text-black">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold underline text-[10.5pt]">President</span>
                    <span className="text-[10pt]">February 2024 - Present</span>
                  </div>
                  <div className="flex justify-between items-baseline italic text-[10pt] mb-1">
                    <span>AGAPE PH0209 Child Development Center</span>
                    <span>Quezon City, PH</span>
                  </div>
                  <ul className="list-disc list-outside ml-5 text-[10pt] space-y-1">
                    <li>Directed operations for a youth NGO with <span className="font-bold">200+ members</span> and <span className="font-bold">600+ beneficiaries</span>.</li>
                  </ul>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-[11pt] font-bold border-b border-black uppercase mb-2 tracking-widest !text-black">Awards & Recognition</h2>
                <ul className="list-outside ml-0 text-[10pt] space-y-1 !text-black">
                  <li className="flex justify-between items-start mb-1">
                    <span>• Winner - Musashinova Pitching Event (Japan)</span>
                    <span className="text-right shrink-0">Feb 2026</span>
                  </li>
                  <li className="flex justify-between items-start mb-1">
                    <span>• 1st Runner-Up - Philippine Startup Challenge X (NCR)</span>
                    <span className="text-right shrink-0">Oct 2025</span>
                  </li>
                  <li className="flex justify-between items-start mb-1">
                    <span>• Top 2 - NBDB Readers Rising Hackathon (Salayliwa)</span>
                    <span className="text-right shrink-0">Sep 2025</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
