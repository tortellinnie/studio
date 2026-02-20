'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Contact } from '@/components/Contact';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft, 
  Github, 
  Globe, 
  CheckCircle2, 
  Workflow, 
  Zap, 
  Brain, 
  Fish, 
  BookOpen, 
  Eye, 
  Target, 
  Users2, 
  Terminal,
  Cpu,
  ShieldCheck
} from 'lucide-react';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ProjectDetail() {
  const params = useParams();
  const id = params.id as string;

  const projectDetails: Record<string, any> = {
    'birdseye': {
      title: 'Birdseye',
      tags: ['Computer Vision', 'Edge AI', 'IoT'],
      description: 'Transforming poultry farm management using computer vision on edge devices to detect wet zones in litter in real-time.',
      background: 'Ammonia emissions in poultry farms often stem from "wet zones" in litter, leading to significant respiratory issues for birds. Traditional monitoring is manual and reactive. Birdseye was engineered to provide a proactive, automated solution using edge-based computer vision.',
      results: [
        '30% reduction in ammonia-related health risks for birds.',
        'Successful pilot deployment in commercial farms across Luzon.',
        'Real-time data streaming to farm manager dashboards via MQTT.',
        'Significant improvement in bird welfare and overall farm productivity.'
      ],
      collaborators: ['FEU Institute of Technology', 'Local Poultry Farms', 'DA-PH'],
      status: 'Pilot Phase',
      icon: Eye,
      technologies: ['TensorFlow Lite', 'Raspberry Pi 4', 'MQTT', 'React'],
      imageId: 'project-birdseye',
      demoUrl: '#',
      codeUrl: '#'
    },
    'video-automation': {
      title: 'Video Automation Engine',
      tags: ['Automation', 'AI', 'Cloud'],
      description: 'Fully autonomous content generation pipeline using Docker, n8n, and Gemini AI for massive-scale short-form media production.',
      background: 'The bottleneck in content creation is often the repetitive nature of editing and delivery. This engine was built to automate the entire lifecycle—from content generation using LLMs to video rendering via FFmpeg and autonomous scheduling.',
      results: [
        '100% autonomous pipeline requiring zero manual intervention.',
        'Capability to generate and upload 50+ unique short-form videos weekly.',
        'Optimized token usage through local LLM logic branches.',
        'Scalable containerized architecture ready for cloud deployment.'
      ],
      collaborators: ['Independent R&D', 'Open Source Community'],
      status: 'Autonomous',
      icon: Zap,
      technologies: ['Docker', 'n8n', 'Gemini 2.5 Flash', 'FFmpeg', 'Node.js'],
      imageId: 'project-video-automation',
      demoUrl: '#',
      codeUrl: '#'
    },
    'gabaydiwa': {
      title: 'GabayDiwa',
      tags: ['Healthcare', 'AI', 'Startup'],
      description: 'Healthcare innovation system empowering caregivers with cognitive trend maps and dementia progression tracking.',
      background: 'Dementia care often lacks objective data for home-based caregivers. GabayDiwa bridges the gap by providing a Cognitive Health and Progression Monitoring System that tracks trends and provides data-driven insights.',
      results: [
        '1st Runner-Up in Philippine Startup Challenge X Regional (NCR).',
        'Recognized for exceptional User Experience in healthcare tech.',
        'Empowered 50+ pilot caregivers with structured health tracking.',
        'Developing proactive risk indicators for early intervention.'
      ],
      collaborators: ['DICT Philippines', 'Healthcare Professionals', 'NERDS 2.0'],
      status: 'Award-Winning',
      icon: Brain,
      technologies: ['React Native', 'Firebase', 'Cognitive Modeling', 'Tailwind'],
      imageId: 'project-gabaydiwa',
      demoUrl: '#',
      codeUrl: '#'
    },
    'proxygen': {
      title: 'Proxygen',
      tags: ['Cloud & IoT', 'Data Science'],
      description: 'Proactive dissolved oxygen management system for pond aquaculture preventing mass fish kills through fuzzy logic.',
      background: 'Dissolved oxygen (DO) levels in aquaculture fluctuate rapidly based on diurnal cycles and weather. Sudden drops cause mass fish kills, devastating local fisherfolk. Proxygen uses sensor fusion and fuzzy logic to predict and prevent these events.',
      results: [
        '40% improvement in DO maintenance levels during pilot tests.',
        'Prevented estimated ₱100k+ in potential fish losses per pond.',
        'Seamless integration with AWS IoT Core for remote monitoring.',
        'Aligned with UN SDGs 2, 9, 12, and 15.'
      ],
      collaborators: ['Department of Agriculture', 'Regional Fisherfolk Communities'],
      status: 'Industrial Grade',
      icon: Fish,
      technologies: ['ESP32', 'AWS IoT Core', 'Fuzzy Logic', 'Python'],
      imageId: 'project-proxygen',
      demoUrl: '#',
      codeUrl: '#'
    },
    'salayliwa': {
      title: 'Salayliwa',
      tags: ['EduTech', 'AI', 'UX'],
      description: 'A personalized mobile reading app using Glicko-2 and Neural Networks to combat the national reading crisis.',
      background: 'The Philippines faces a significant literacy challenge. Salayliwa uses adaptive digital experiences and culturally resonant stories to revitalize reading engagement among the youth through gamified progression.',
      results: [
        'National award-winning edu-cultural project.',
        'Recognized at NARA Con 2025 at the National Library of the Philippines.',
        'Successful pilot engagement with community reading hubs.',
        'Adaptive difficulty scaling using the Glicko-2 algorithm.'
      ],
      collaborators: ['National Library of PH', 'NBDB-Philippines', 'NARA'],
      status: 'National Award',
      icon: BookOpen,
      technologies: ['Next.js', 'Glicko-2 AI', 'PostgreSQL', 'Framer Motion'],
      imageId: 'project-salayliwa',
      demoUrl: '#',
      codeUrl: '#'
    }
  };

  const project = projectDetails[id] || projectDetails['birdseye'];
  const imageData = PlaceHolderImages.find(img => img.id === project.imageId);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="py-20 pt-40">
        <div className="container mx-auto px-6 max-w-7xl">
          <Button variant="ghost" asChild className="mb-12 text-slate-400 hover:text-foreground -ml-4">
            <Link href="/#projects">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Engineering Log
            </Link>
          </Button>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Main Content Area */}
            <div className="lg:col-span-8 space-y-16">
              <div className="space-y-8">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag: string) => (
                    <div key={tag} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.4)]" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">{tag}</span>
                    </div>
                  ))}
                </div>
                <h1 className="text-5xl lg:text-7xl font-medium text-foreground leading-[1.1] uppercase italic tracking-tighter">
                  {project.title}<span className="text-blue-600">.</span>
                </h1>
                <p className="text-2xl text-slate-500 leading-relaxed font-medium max-w-3xl">
                  {project.description}
                </p>
              </div>

              <div className="space-y-10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                    <Target className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-xl font-black uppercase tracking-widest text-foreground italic">Project Background</h2>
                </div>
                <p className="text-lg text-slate-500 leading-relaxed font-medium">
                  {project.background}
                </p>
              </div>

              <div className="space-y-10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-xl font-black uppercase tracking-widest text-foreground italic">Impact & Results</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  {project.results.map((result: string, i: number) => (
                    <div key={i} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex gap-4 transition-all hover:border-blue-200">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                      <p className="text-slate-600 font-medium leading-relaxed">{result}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Information */}
            <div className="lg:col-span-4 sticky top-32 space-y-10">
              <div className="rounded-[3rem] overflow-hidden border border-slate-100 relative group aspect-[4/5] bg-slate-100">
                {imageData && (
                  <Image 
                    src={imageData.imageUrl} 
                    alt={imageData.description}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                    data-ai-hint={imageData.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8">
                   <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                     <project.icon className="w-8 h-8 text-white" />
                   </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Technical Specs</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech: string) => (
                      <span key={tech} className="px-3 py-1 rounded-md bg-slate-100 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Collaborators</h3>
                  <div className="space-y-2">
                    {project.collaborators.map((partner: string) => (
                      <div key={partner} className="flex items-center gap-3 text-slate-600 font-bold text-xs uppercase tracking-widest">
                        <Users2 className="w-3.5 h-3.5 text-blue-600/40" />
                        {partner}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 grid grid-cols-2 gap-4">
                   <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Status</p>
                      <p className="text-xs font-black text-blue-600 uppercase tracking-tighter">{project.status}</p>
                   </div>
                   <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Role</p>
                      <p className="text-xs font-black text-foreground uppercase tracking-tighter">Lead Dev</p>
                   </div>
                </div>

                <div className="flex gap-3 pt-6">
                  <Button className="flex-1 h-14 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-widest text-[10px] shadow-lg shadow-blue-600/20" asChild>
                    <a href={project.demoUrl} target="_blank">
                      <Globe className="w-4 h-4 mr-2" /> Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" className="flex-1 h-14 rounded-2xl border-slate-200 hover:bg-slate-50 text-foreground font-black uppercase tracking-widest text-[10px]" asChild>
                    <a href={project.codeUrl} target="_blank">
                      <Github className="w-4 h-4 mr-2" /> View Code
                    </a>
                  </Button>
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
