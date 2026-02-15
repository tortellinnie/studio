'use client';

import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, Printer } from 'lucide-react';
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
            {/* Header Controls */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 print:hidden gap-4">
              <Button variant="ghost" asChild className="text-muted-foreground hover:text-white -ml-4">
                <Link href="/">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
                </Link>
              </Button>
              <div className="flex flex-col items-center md:items-end gap-2">
                <div className="flex gap-4">
                  <Button onClick={handlePrint} variant="outline" className="rounded-full border-slate-200 dark:border-white/20">
                    <Printer className="w-4 h-4 mr-2" /> Print
                  </Button>
                  <Button onClick={handlePrint} className="rounded-full bg-primary hover:bg-primary/90 font-bold uppercase tracking-widest text-[10px] h-11 px-8">
                    <Download className="w-4 h-4 mr-2" /> Download PDF
                  </Button>
                </div>
                <p className="text-[10px] text-muted-foreground font-medium italic">Tip: Select "Save as PDF" in the print destination</p>
              </div>
            </div>

            {/* Formal Resume Document */}
            <div id="resume-document" className="bg-white !text-black shadow-2xl p-[0.75in] font-serif leading-tight print:shadow-none print:p-0 min-h-[11in] mx-auto border border-slate-200 print:border-none">
              
              {/* Name at the VERY top */}
              <div className="text-center mb-10">
                <div className="text-5xl font-bold uppercase tracking-tight mb-2 !text-black">SHANN KARL FELIPE</div>
                <div className="text-[12pt] flex justify-center gap-2 items-center flex-wrap mb-1 !text-black">
                  <span className="font-semibold italic">SOFTWARE ENGINEER | PROJECT MANAGER</span>
                </div>
                <div className="text-[10pt] font-medium !text-black">
                  <span>felipeshannkarl@gmail.com | Manila, Philippines</span>
                </div>
              </div>

              {/* Summary */}
              <div className="mb-6">
                <h2 className="text-[11pt] font-bold border-b border-black uppercase mb-2 tracking-widest !text-black">Summary</h2>
                <p className="text-[10pt] text-justify leading-snug !text-black">
                  3rd Year Computer Science student (FEU Tech, 3.6 GPA) specializing in Software Engineering, recognized as a global delegate and national awardee. Experienced in AI-powered innovation, startup leadership, and cross-functional project delivery, with a proven record of pitching, execution, and scalable software solutions.
                </p>
              </div>

              {/* Technical Skills */}
              <div className="mb-6">
                <h2 className="text-[11pt] font-bold border-b border-black uppercase mb-2 tracking-widest !text-black">Technical Skills</h2>
                <div className="text-[10pt] space-y-1 !text-black">
                  <div className="grid grid-cols-[140px_1fr]">
                    <span className="font-bold">Languages</span>
                    <span>C, C++, Java, Python, SQL</span>
                  </div>
                  <div className="grid grid-cols-[140px_1fr]">
                    <span className="font-bold">Certifications</span>
                    <span>CCNA Linux Essentials, CCNA Introduction to Networks, ITSC Python</span>
                  </div>
                  <div className="grid grid-cols-[140px_1fr]">
                    <span className="font-bold">Methodologies</span>
                    <span>Scrum, Kanban, Lean Software Development</span>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="mb-6">
                <h2 className="text-[11pt] font-bold border-b border-black uppercase mb-2 tracking-widest !text-black">Experience</h2>
                
                {/* NERDS 2.0 */}
                <div className="mb-4 !text-black">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold underline text-[11pt]">Executive Lead</span>
                    <span className="text-[10pt]">August 2025 - Present</span>
                  </div>
                  <div className="flex justify-between items-baseline italic text-[10pt] mb-1">
                    <span>NERDS 2.0</span>
                    <span>Hybrid</span>
                  </div>
                  <ul className="list-disc list-outside ml-5 text-[10pt] space-y-1">
                    <li>Coordinated and collaborated with <span className="font-bold">20+ organizations</span>, including national agencies and private firms, overseeing R&D, leading to award-winning initiatives and a total of <span className="font-bold">₱150,000</span> in grants.</li>
                  </ul>
                </div>

                {/* AGAPE */}
                <div className="mb-4 !text-black">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold underline text-[11pt]">President</span>
                    <span className="text-[10pt]">February 2024 - Present</span>
                  </div>
                  <div className="flex justify-between items-baseline italic text-[10pt] mb-1">
                    <span>AGAPE PH0209 Child Development Center (Youth NGO)</span>
                    <span>Quezon City, PH</span>
                  </div>
                  <ul className="list-disc list-outside ml-5 text-[10pt] space-y-1">
                    <li>Directed operations and strategic planning for a youth-led NGO with <span className="font-bold">200+ active members</span>.</li>
                    <li>Organized and led 15+ community programs, outreach initiatives, and workshops, impacting over <span className="font-bold">600 beneficiaries</span>.</li>
                    <li>Managed <span className="font-bold">5 cross-functional teams of 40+ volunteers</span>, ensuring program success within budget and deadlines.</li>
                  </ul>
                </div>

                {/* C-RAM */}
                <div className="mb-4 !text-black">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold underline text-[11pt]">Lead Marketing Officer</span>
                    <span className="text-[10pt]">December 2024 - December 2025</span>
                  </div>
                  <div className="flex justify-between items-baseline italic text-[10pt] mb-1">
                    <span>C-RAM Solutions</span>
                    <span>Hybrid</span>
                  </div>
                  <ul className="list-disc list-outside ml-5 text-[10pt] space-y-1">
                    <li>Drove marketing campaigns that positioned the startup to secure <span className="font-bold">₱600,000</span> in total capital.</li>
                    <li>Provided UX/UI insights in Scrum team, shaping product roadmap for innovation-driven solutions.</li>
                  </ul>
                </div>
              </div>

              {/* Projects */}
              <div className="mb-6">
                <h2 className="text-[11pt] font-bold border-b border-black uppercase mb-2 tracking-widest !text-black">Projects</h2>
                
                {/* Salayliwa */}
                <div className="mb-4 !text-black">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold underline text-[11pt]">Salayliwa (Glicko-2 Algorithm)</span>
                    <span className="text-[10pt]">September 2025</span>
                  </div>
                  <ul className="list-disc list-outside ml-5 text-[10pt] space-y-1">
                    <li>Led a Scrum team to develop a personalized mobile reading app.</li>
                    <li>Clinched <span className="font-bold">Top 2</span> in the National Book Development Board's Readers Rising Hackathon 2025.</li>
                  </ul>
                </div>

                {/* YT Shorts */}
                <div className="mb-4 !text-black">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold underline text-[11pt]">YT Shorts Automation Engine</span>
                    <span className="text-[10pt]">March 2025</span>
                  </div>
                  <div className="text-[9pt] italic mb-1">(Docker, n8n, Google Cloud APIs, Gemini AI)</div>
                  <ul className="list-disc list-outside ml-5 text-[10pt] space-y-1">
                    <li>Automated content generation and publishing 24/7, producing 100+ YouTube Shorts monthly.</li>
                    <li>Achieved 100% reduction in manual effort.</li>
                  </ul>
                </div>
              </div>

              {/* Education */}
              <div className="mb-6">
                <h2 className="text-[11pt] font-bold border-b border-black uppercase mb-2 tracking-widest !text-black">Education</h2>
                <div className="flex justify-between items-baseline !text-black">
                  <span className="font-bold text-[11pt]">Far Eastern University - Institute of Technology</span>
                  <span className="text-[10pt]">July 2027 (Expected)</span>
                </div>
                <div className="flex justify-between items-baseline text-[10pt] mb-1 !text-black">
                  <span>BS in Computer Science (Software Engineering)</span>
                  <span className="font-bold">GPA: 3.6</span>
                </div>
              </div>

              {/* Awards */}
              <div>
                <h2 className="text-[11pt] font-bold border-b border-black uppercase mb-2 tracking-widest !text-black">Awards</h2>
                <ul className="list-disc list-outside ml-5 text-[10pt] space-y-1 !text-black">
                  <li><span className="font-bold">Winner - EMC Global Summit</span> (Musashino University, Japan) - Feb 2026</li>
                  <li><span className="font-bold">Most Outstanding Youth Award</span> (Innovation, QC Gov) - Jan 2026</li>
                  <li><span className="font-bold">1st Runner-Up - Philippine Startup Challenge X NCR</span> - Oct 2025</li>
                  <li><span className="font-bold">1st Runner-Up - Readers Rising Hackathon 2025</span> - Sep 2025</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
