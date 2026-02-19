'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Blogs() {
  const blogs = [
    {
      title: "The Future of Edge AI in Agriculture",
      excerpt: "Exploring how real-time computer vision on edge devices is transforming modern farm management.",
      date: "Oct 2025",
      imageId: "featured-prompt-challenge",
      readTime: "5 min read"
    },
    {
      title: "Autonomous Video Production with Gemini",
      excerpt: "A deep dive into building an end-to-end automation pipeline using n8n, Docker, and Gemini 2.5 Flash.",
      date: "Sep 2025",
      imageId: "featured-github-universe",
      readTime: "8 min read"
    },
    {
      title: "Scaling Neural Networks on Cloud TPUs",
      excerpt: "Technical insights from my research experience with the Google TPU Research Cloud (TRC) program.",
      date: "Aug 2025",
      imageId: "featured-tpu-research",
      readTime: "12 min read"
    }
  ];

  return (
    <section id="blogs" className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex justify-between items-end mb-16">
          <div className="space-y-2">
            <h2 className="text-4xl font-black text-foreground uppercase italic tracking-tighter">Insights</h2>
            <p className="text-muted-foreground text-sm font-medium">Thoughts on technology, engineering, and innovation.</p>
          </div>
          <Link href="#" className="text-[10px] font-black uppercase tracking-widest text-primary hover:opacity-80 transition-opacity">
            View All Articles →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => {
            const imageData = PlaceHolderImages.find(img => img.id === blog.imageId);
            return (
              <div key={idx} className="group flex flex-col bg-white rounded-[2rem] border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500">
                <div className="relative aspect-video overflow-hidden bg-gray-50">
                  {imageData && (
                    <Image 
                      src={imageData.imageUrl} 
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      data-ai-hint={imageData.imageHint}
                    />
                  )}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[9px] font-black uppercase tracking-widest text-foreground">
                    {blog.readTime}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">{blog.date}</p>
                  <h3 className="text-xl font-black text-foreground leading-tight mb-4 flex-grow">
                    {blog.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-medium mb-6 line-clamp-2">
                    {blog.excerpt}
                  </p>
                  <Link href="#" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
