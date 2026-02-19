
'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Contact } from '@/components/Contact';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Brain, Cpu, Shield, Zap, Globe, Github, Terminal } from 'lucide-react';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ImpactDetail() {
  const params = useParams();
  const id = params.id as string;

  const impactDetails: Record<string, any> = {
    'prompt-challenge': {
      title: 'National AI Prompt Design Challenge',
      type: 'Software Engineering',
      location: 'Manila, Philippines',
      date: '2025',
      icon: Brain,
      description: 'Winning first place by crafting highly efficient and technically robust prompts for complex LLM reasoning tasks.',
      content: [
        {
          title: 'Advanced Prompt Engineering',
          desc: 'Developed multi-chain reasoning templates that increased LLM accuracy for complex problem solving.',
          icon: Terminal
        },
        {
          title: 'Systemic Optimization',
          desc: 'Refined token usage and context window management to ensure scalable AI implementation.',
          icon: Cpu
        }
      ],
      highlights: [
        'Winner of the National AI Prompt Design Challenge',
        'Recognized for innovative LLM interaction patterns',
        'Technical implementation using Gemini 1.5 Pro',
        'Optimized for production-ready AI workflows'
      ],
      imageId: 'featured-prompt-challenge'
    },
    'tpu-research': {
      title: 'Google TPU Research Cloud',
      type: 'Machine Learning',
      location: 'Hybrid / Cloud',
      date: '2025',
      icon: Cpu,
      description: 'Supercharging large-scale machine learning research using Google\'s specialized TPU infrastructure.',
      content: [
        {
          title: 'Hardware Acceleration',
          desc: 'Leveraged Cloud TPUs to reduce training time for deep neural networks by 60%.',
          icon: Zap
        },
        {
          title: 'Scalable Architectures',
          desc: 'Implemented distributed training patterns for massive datasets across multiple TPU nodes.',
          icon: Globe
        }
      ],
      highlights: [
        'Member of the TPU Research Cloud (TRC) program',
        'Focused on efficient training of vision transformers',
        'Optimized PyTorch/JAX workloads for TPU v4 hardware',
        'Reducing computational cost for high-impact research'
      ],
      imageId: 'featured-tpu-research'
    },
    'aws-reinvent': {
      title: 'AWS re:Invent 2025',
      type: 'Leadership',
      location: 'Las Vegas, USA',
      date: 'November 2025',
      icon: Zap,
      description: 'Selected for the prestigious All Builders Welcome Grant to attend AWS re:Invent and represent youth engineering leadership.',
      content: [
        {
          title: 'Global Tech Networking',
          desc: 'Engaged with AWS service teams and global engineering leaders on the future of serverless and AI.',
          icon: Globe
        },
        {
          title: 'Strategic Innovation',
          desc: 'Explored multi-cloud strategies and zero-trust security frameworks for international scaling.',
          icon: Shield
        }
      ],
      highlights: [
        'Recipient of the AWS All Builders Welcome Grant',
        'Represented Filipino youth engineering in Las Vegas',
        'Certification path: AWS Solutions Architect Associate',
        'Focusing on Cloud Native and AI/ML services'
      ],
      imageId: 'featured-aws-reinvent'
    },
    'github-universe': {
      title: 'GitHub Universe \'25',
      type: 'Cloud Computing',
      location: 'Manila / Microsoft PH',
      date: '2025',
      icon: Github,
      description: 'Deep diving into az:Repo and GitHub Copilot extensions at Microsoft Office Philippines.',
      content: [
        {
          title: 'DevOps Lifecycle',
          desc: 'Streamlining CI/CD pipelines using GitHub Actions and Azure DevOps integrations.',
          icon: Cpu
        },
        {
          title: 'AI-Powered Dev',
          desc: 'Implementing GitHub Copilot for Enterprises to enhance developer productivity and code security.',
          icon: Shield
        }
      ],
      highlights: [
        'Speaker/Delegate at GitHub Universe Recap event',
        'Collaboration with Microsoft Philppines on az:Repo',
        'Advocating for secure, automated software delivery',
        'Expertise in GitHub Enterprise features'
      ],
      imageId: 'featured-github-universe'
    }
  };

  const impact = impactDetails[id] || impactDetails['prompt-challenge'];
  const imageData = PlaceHolderImages.find(img => img.id === impact.imageId);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="py-20 pt-40">
        <div className="container mx-auto px-6">
          <Button variant="ghost" asChild className="mb-12 text-muted-foreground hover:text-foreground -ml-4">
            <Link href="/#featured">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Featured Work
            </Link>
          </Button>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-start">
              <div className="space-y-12">
                <div className="space-y-8">
                  <div className="flex gap-4 items-center">
                    <div className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                      {impact.type}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-xs font-bold uppercase tracking-widest">
                      {impact.date}
                    </div>
                  </div>
                  
                  <h1 className="text-5xl lg:text-7xl font-black text-foreground leading-[1.1] uppercase italic">
                    {impact.title}<span className="text-primary">.</span>
                  </h1>
                  
                  <p className="text-2xl text-muted-foreground leading-relaxed font-medium">
                    {impact.description}
                  </p>
                </div>

                <div className="grid gap-6">
                  {impact.content.map((item: any, i: number) => (
                    <div key={i} className="p-8 bg-gray-50 rounded-3xl border border-gray-100 space-y-4 group hover:border-primary/20 transition-all">
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center border border-gray-200 group-hover:bg-primary group-hover:border-primary transition-all">
                        <item.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="sticky top-32 space-y-12">
                <div className="bg-gray-50 rounded-[4rem] overflow-hidden border border-gray-100 relative group">
                  <div className="relative aspect-square">
                    {imageData && (
                      <Image 
                        src={imageData.imageUrl} 
                        alt={imageData.description}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        data-ai-hint={imageData.imageHint}
                      />
                    )}
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-xs font-black text-foreground/40 uppercase tracking-[0.3em]">
                    Key Highlights
                  </h4>
                  <div className="grid gap-3">
                    {impact.highlights.map((highlight: string, i: number) => (
                      <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 font-medium text-foreground/80">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full h-16 rounded-2xl bg-primary hover:bg-primary/90 text-xl font-black shadow-lg">
                  Connect on LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
