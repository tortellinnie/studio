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
      
      <section className="py-20 pt-40 print:pt-0 print:py-0">
        <div className="container mx-auto px-6">
          <div className="max-w-[8.5in] mx-auto">
            {/* Header Controls */}
            <div className="flex justify-between items-center mb-8 print:hidden">
              <Button variant="ghost" asChild className="text-muted-foreground hover:text-white -ml-4">
                <Link href="/">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
                </Link>
              </Button>
              <div className="flex gap-4">
                <Button onClick={handlePrint} variant="outline" className="rounded-full border-white/10">
                  <Printer className="w-4 h-4 mr-2" /> Print
                </Button>
                <Button onClick={handlePrint} className="rounded-full bg-primary hover:bg-primary/90 font-bold uppercase tracking-widest text-[10px] h-11 px-8">
                  <Download className="w-4 h-4 mr-2" /> Download PDF
                </Button>
              </div>
            </div>

            {/* Formal Resume Document */}
            <div className="bg-white text-black shadow-2xl p-[0.75in] font-serif leading-tight print:shadow-none print:p-0 min-h-[11in] mx-auto border border-slate-200 print:border-none">
              
              {/* Name and Contact */}
              <div className="text-center mb-6">
                <h1 className="text-3xl font-bold uppercase tracking-tight mb-1">SHANN KARL FELIPE</h1>
                <div className="text-[11pt] flex justify-center gap-2 items-center flex-wrap">
                  <span className="font-semibold italic">SOFTWARE ENGINEER | PROJECT MANAGER</span>
                </div>
                <div className="text-[10pt] mt-1">
                  <span>felipeshannkarl@gmail.com</span>
                </div>
              </div>

              {/* Summary */}
              <div className="mb-4">
                <h2 className="text-[11pt] font-bold border-b border-black uppercase mb-1">Summary</h2>
                <p className="text-[10pt] text-justify leading-snug">
                  3rd Year Computer Science student (FEU Tech, 3.6 GPA) specializing in Software Engineering, recognized as a global delegate and national awardee. Experienced in AI-powered innovation, startup leadership, and cross-functional project delivery, with a proven record of pitching, execution, and scalable software solutions.
                </p>
              </div>

              {/* Technical Skills */}
              <div className="mb-4">
                <h2 className="text-[11pt] font-bold border-b border-black uppercase mb-1">Technical Skills</h2>
                <div className="text-[10pt] space-y-0.5">
                  <div className="grid grid-cols-[120px_1fr]">
                    <span className="font-bold">Languages</span>
                    <span>C, C++, Java, Python, SQL</span>
                  </div>
                  <div className="grid grid-cols-[120px_1fr]">
                    <span className="font-bold">Certifications</span>
                    <span>CCNA Linux Essentials, CCNA Introduction to Networks, ITSC Python</span>
                  </div>
                  <div className="grid grid-cols-[120px_1fr]">
                    <span className="font-bold">Methodologies</span>
                    <span>Scrum, Kanban, Lean Software Development</span>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="mb-4">
                <h2 className="text-[11pt] font-bold border-b border-black uppercase mb-1">Experience</h2>
                
                {/* NERDS 2.0 */}
                <div className="mb-3">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold underline">Executive Lead</span>
                    <span className="text-[10pt]">August 2025 - Present</span>
                  </div>
                  <div className="flex justify-between items-baseline italic text-[10pt]">
                    <span>NERDS 2.0</span>
                    <span>Hybrid</span>
                  </div>
                  <ul className="list-disc list-outside ml-5 text-[10pt] mt-1 space-y-0.5">
                    <li>Coordinated and collaborated with <span className="font-bold">20+ organizations</span>, including national agencies and private firms, overseeing R&D, leading to award-winning initiatives and a total of <span className="font-bold">P150K</span> in grants.</li>
                  </ul>
                </div>

                {/* AGAPE */}
                <div className="mb-3">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold underline">President</span>
                    <span className="text-[10pt]">February 2024 - Present</span>
                  </div>
                  <div className="flex justify-between items-baseline italic text-[10pt]">
                    <span>AGAPE PH0209 Child Development Center (Youth Non-Governmental Organization)</span>
                    <span>Quezon City, PH</span>
                  </div>
                  <ul className="list-disc list-outside ml-5 text-[10pt] mt-1 space-y-0.5">
                    <li>Directed operations and strategic planning for a youth-led NGO with <span className="font-bold">200+ active members</span>.</li>
                    <li>Organized and led 15+ community programs, outreach initiatives, and workshops, impacting over <span className="font-bold">600 beneficiaries</span>.</li>
                    <li>Managed <span className="font-bold">5 cross-functional teams of 40+ volunteers</span>, delegating responsibilities and ensuring program success within budget and deadlines.</li>
                    <li>Represented the organization in <span className="font-bold">20+ inter-church and city-wide forums</span>, strengthening partnerships with local government and NGOs.</li>
                  </ul>
                </div>

                {/* C-RAM */}
                <div className="mb-3">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold underline">Lead Marketing Officer</span>
                    <span className="text-[10pt]">December 2024 - December 2025</span>
                  </div>
                  <div className="flex justify-between items-baseline italic text-[10pt]">
                    <span>C-RAM Solutions</span>
                    <span>Hybrid</span>
                  </div>
                  <ul className="list-disc list-outside ml-5 text-[10pt] mt-1 space-y-0.5">
                    <li>Provided UX/UI insights in Scrum team, shaping product roadmap.</li>
                    <li>Drove marketing campaigns that positioned the startup to secure <span className="font-bold">P600K</span> in total capital.</li>
                  </ul>
                </div>
              </div>

              {/* Projects */}
              <div className="mb-4">
                <h2 className="text-[11pt] font-bold border-b border-black uppercase mb-1">Projects</h2>
                
                {/* Salayliwa */}
                <div className="mb-3">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold underline">Salayliwa (Glicko-2 Algorithm)</span>
                    <span className="text-[10pt]">September 2025</span>
                  </div>
                  <ul className="list-disc list-outside ml-5 text-[10pt] mt-1 space-y-0.5">
                    <li>Led a Scrum team to develop a personalized mobile reading app to help combat the nation's reading crisis.</li>
                    <li>Integrated Adaptive Reading Score and Two Tower Neural Network Architecture.</li>
                    <li>Led the team as the presenter, clinching <span className="font-bold">Top 2</span> in the National Book Development Board's Readers Rising Hackathon 2025.</li>
                  </ul>
                </div>

                {/* YT Shorts */}
                <div className="mb-3">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold underline">YT Shorts Automation Engine</span>
                    <span className="text-[10pt]">March 2025</span>
                  </div>
                  <div className="text-[9pt] italic mb-1">(Docker, n8n, ngrok, Google Cloud APIs, Local LLMs (Gemini))</div>
                  <ul className="list-disc list-outside ml-5 text-[10pt] mt-1 space-y-0.5">
                    <li>Automated content generation and publishing 24/7, producing 100+ YouTube Shorts monthly.</li>
                    <li>Achieved 100% reduction in manual effort through a fully autonomous content pipeline.</li>
                    <li>Integrated multiple services for seamless story creation, video rendering, and cloud distribution.</li>
                  </ul>
                </div>
              </div>

              {/* Education */}
              <div className="mb-4">
                <h2 className="text-[11pt] font-bold border-b border-black uppercase mb-1">Education</h2>
                <div className="flex justify-between items-baseline">
                  <span className="font-bold">Far Eastern University - Institute of Technology</span>
                  <span className="text-[10pt]">July 2027 (Expected)</span>
                </div>
                <div className="flex justify-between items-baseline text-[10pt]">
                  <span>Bachelor of Science in Computer Science, with specialization in Software Engineering</span>
                  <span className="font-bold">GPA: 3.6</span>
                </div>
                <ul className="list-disc list-outside ml-5 text-[10pt] mt-1 space-y-0.5">
                  <li><span className="font-bold">Courseworks:</span> Data Structure and Algorithms, Object-Oriented Programming, Software Engineering, Database Management Systems, Distributed and Parallel Computing</li>
                  <li>Recommended 8x by FEU Tech Professors</li>
                  <li>FEU Tech Academic Scholar, DOST Scholar, QCYDO Scholar</li>
                </ul>
              </div>

              {/* Awards */}
              <div className="mb-2">
                <h2 className="text-[11pt] font-bold border-b border-black uppercase mb-1">Awards</h2>
                <ul className="list-disc list-outside ml-5 text-[10pt] space-y-1.5">
                  <li className="relative pr-24">
                    <span className="font-bold">Winner - EMC Global Summit</span> (SwineScan, Agricultural)
                    <div className="italic ml-0 text-[9pt]">Musashino University, EMC Global</div>
                    <span className="absolute right-0 top-0 text-[10pt]">February 2026</span>
                  </li>
                  <li className="relative pr-24">
                    <span className="font-bold">Most Outstanding Youth Award</span> (Technology-Driven Innovation)
                    <div className="italic ml-0 text-[9pt]">Quezon City Government, Sangguniang Kabataan Commonwealth Council</div>
                    <span className="absolute right-0 top-0 text-[10pt]">January 2026</span>
                  </li>
                  <li className="relative pr-24">
                    <span className="font-bold">1st Runner-Up - Philippine Startup Challenge X NCR Leg</span> (GabayDiwa, Healthcare)
                    <div className="italic ml-0 text-[9pt]">Department of Information Communications Technology</div>
                    <span className="absolute right-0 top-0 text-[10pt]">October 2025</span>
                  </li>
                  <li className="relative pr-24">
                    <span className="font-bold">1st Runner-Up - Readers Rising Hackathon 2025</span> (Salayliwa, Edu-Cultural)
                    <div className="italic ml-0 text-[9pt]">National Book Development Board - Philippines</div>
                    <span className="absolute right-0 top-0 text-[10pt]">September 2025</span>
                  </li>
                  <li className="relative pr-24">
                    <span className="font-bold">2x Top Performing Student - Annual Student Recognition 2025</span> (2024, 2025)
                    <div className="italic ml-0 text-[9pt]">FEU Institute of Technology</div>
                    <span className="absolute right-0 top-0 text-[10pt]"></span>
                  </li>
                  <li className="relative pr-24">
                    <span className="font-bold">2nd Runner-Up - Startup QC</span> (SwineScan, Agricultural)
                    <div className="italic ml-0 text-[9pt]">Quezon City Government</div>
                    <span className="absolute right-0 top-0 text-[10pt]">May 2025</span>
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
