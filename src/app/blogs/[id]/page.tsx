'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Contact } from '@/components/Contact';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, Calendar, Tag, Share2, Bookmark, User } from 'lucide-react';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function BlogDetail() {
  const params = useParams();
  const id = params.id as string;

  const blogDetails: Record<string, any> = {
    'edge-ai-agri': {
      title: 'The Future of Edge AI in Agriculture',
      category: 'Agriculture',
      date: 'Oct 24, 2025',
      readTime: '5 min read',
      author: 'Shann Karl Felipe',
      imageId: 'featured-prompt-challenge',
      content: [
        {
          heading: 'Redefining Precision Farming',
          text: 'The integration of real-time computer vision on edge devices is no longer a luxury—it is a necessity for sustainable farm management. By processing data locally on the edge, we eliminate the latency of cloud communication, allowing for immediate interventions in critical environments like poultry wet-zone detection.'
        },
        {
          heading: 'Technical Implementation',
          text: 'Utilizing TensorFlow Lite on Raspberry Pi 4 infrastructures, we have successfully deployed models that detect litter moisture levels with 92% accuracy. This proactive approach has already demonstrated a significant reduction in ammonia-related respiratory risks for livestock.'
        }
      ],
      tags: ['Edge AI', 'IoT', 'Sustainability', 'AgriTech']
    },
    'video-automation-gemini': {
      title: 'Autonomous Video Production with Gemini',
      category: 'Automation',
      date: 'Sep 12, 2025',
      readTime: '8 min read',
      author: 'Shann Karl Felipe',
      imageId: 'featured-github-universe',
      content: [
        {
          heading: 'The Content Bottleneck',
          text: 'Scaling short-form content production typically requires a massive creative team. However, by leveraging LLMs like Gemini 2.5 Flash for script generation and FFmpeg for automated rendering, we can build a fully autonomous pipeline that generates over 50 unique videos per week.'
        },
        {
          heading: 'Building with n8n and Docker',
          text: 'The architecture uses Dockerized n8n instances to orchestrate the lifecycle of a video—from the initial prompt to the final upload. This ensures the system is cloud-agnostic and ready for massive scale without increasing manual overhead.'
        }
      ],
      tags: ['Gemini AI', 'Automation', 'Docker', 'n8n']
    },
    'tpu-scaling': {
      title: 'Scaling Neural Networks on Cloud TPUs',
      category: 'Machine Learning',
      date: 'Aug 05, 2025',
      readTime: '12 min read',
      author: 'Shann Karl Felipe',
      imageId: 'featured-tpu-research',
      content: [
        {
          heading: 'Accelerating Innovation',
          text: 'The Google TPU Research Cloud (TRC) program provides unparalleled access to specialized hardware designed specifically for matrix operations. Our research focused on optimizing vision transformers, reducing training cycles from weeks to days.'
        },
        {
          heading: 'Distributed Learning Patterns',
          text: 'Scaling to multiple TPU nodes requires a deep understanding of distributed training architectures. By implementing JAX-based optimization patterns, we achieved near-linear scaling performance across v4-8 TPU topologies.'
        }
      ],
      tags: ['Google TPU', 'ML Research', 'Cloud Computing', 'JAX']
    }
  };

  const blog = blogDetails[id] || blogDetails['edge-ai-agri'];
  const imageData = PlaceHolderImages.find(img => img.id === blog.imageId);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="py-20 pt-40">
        <div className="container mx-auto px-6 max-w-7xl">
          <Button variant="ghost" asChild className="mb-12 text-slate-400 hover:text-foreground -ml-4">
            <Link href="/#blogs">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Insights
            </Link>
          </Button>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Main Content Area */}
            <div className="lg:col-span-8 space-y-16">
              <div className="space-y-8">
                <div className="flex flex-wrap gap-4 items-center">
                  <div className="px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-black uppercase tracking-widest text-blue-600">
                    {blog.category}
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                    <Calendar className="w-3.5 h-3.5" /> {blog.date}
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                    <Clock className="w-3.5 h-3.5" /> {blog.readTime}
                  </div>
                </div>

                <h1 className="text-5xl lg:text-7xl font-medium text-foreground leading-[1.1] uppercase italic tracking-tighter">
                  {blog.title}<span className="text-blue-600">.</span>
                </h1>

                <div className="flex items-center gap-4 pt-4">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
                    <User className="w-6 h-6 text-slate-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Written By</p>
                    <p className="text-sm font-black text-foreground uppercase italic tracking-tighter">{blog.author}</p>
                  </div>
                </div>
              </div>

              <div className="prose prose-slate max-w-none">
                {blog.content.map((section: any, i: number) => (
                  <div key={i} className="mb-16 space-y-6">
                    <h2 className="text-2xl font-black text-foreground uppercase italic tracking-tight flex items-center gap-4">
                      <span className="w-8 h-px bg-blue-600" />
                      {section.heading}
                    </h2>
                    <p className="text-xl text-slate-500 leading-relaxed font-medium">
                      {section.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-16 border-t border-slate-100 flex flex-wrap gap-3">
                {blog.tags.map((tag: string) => (
                  <span key={tag} className="px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Sidebar Information */}
            <div className="lg:col-span-4 sticky top-32 space-y-10">
              <div className="rounded-[4rem] overflow-hidden border border-slate-100 relative group aspect-[2/3] bg-slate-100">
                {imageData && (
                  <Image 
                    src={imageData.imageUrl} 
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <div className="space-y-8 p-10 bg-slate-50 rounded-[3rem] border border-slate-100">
                <div className="space-y-6">
                  <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Share Insight</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="h-12 rounded-2xl border-slate-200 bg-white hover:bg-slate-50 text-[10px] font-black uppercase tracking-widest gap-2">
                      <Share2 className="w-3.5 h-3.5" /> Share
                    </Button>
                    <Button variant="outline" className="h-12 rounded-2xl border-slate-200 bg-white hover:bg-slate-50 text-[10px] font-black uppercase tracking-widest gap-2">
                      <Bookmark className="w-3.5 h-3.5" /> Save
                    </Button>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200">
                   <p className="text-[11px] font-black text-foreground/40 uppercase tracking-[0.2em] mb-4 text-center">
                     Engage with this research
                   </p>
                   <Button className="w-full h-14 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-black uppercase tracking-widest shadow-xl shadow-blue-600/20">
                     Discuss on LinkedIn
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
