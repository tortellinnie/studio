
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

export function Featured() {
  const featuredWork = [
    {
      id: 'prompt-challenge',
      tag: 'Software Engineering',
      title: 'Crafting the Winning Prompt of National AI Prompt Design Challenge',
      badgeColor: 'bg-blue-600',
      textColor: 'text-blue-600',
      imageId: 'featured-prompt-challenge'
    },
    {
      id: 'tpu-research',
      tag: 'Machine Learning',
      title: 'Supercharge your ML Research with Google TPU Research Cloud',
      badgeColor: 'bg-red-600',
      textColor: 'text-red-600',
      imageId: 'featured-tpu-research'
    },
    {
      id: 'aws-reinvent',
      tag: 'Leadership',
      title: 'AWS re:Invent 2025 All Builders Welcome Grant Experience',
      badgeColor: 'bg-amber-500',
      textColor: 'text-amber-500',
      imageId: 'featured-aws-reinvent'
    },
    {
      id: 'github-universe',
      tag: 'Cloud Computing',
      title: 'GitHub Universe\'25 Recap from az:Repo at Microsoft Office Philippines',
      badgeColor: 'bg-green-600',
      textColor: 'text-green-600',
      imageId: 'featured-github-universe'
    }
  ];

  return (
    <section id="featured" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Featured Work</h2>
          <p className="text-muted-foreground text-lg">Highlights from my recent projects and research</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredWork.map((work) => {
            const imageData = PlaceHolderImages.find(img => img.id === work.imageId);
            return (
              <div key={work.id} className="group flex flex-col bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="relative aspect-[4/3] overflow-hidden">
                  {imageData && (
                    <Image
                      src={imageData.imageUrl}
                      alt={imageData.description}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      data-ai-hint={imageData.imageHint}
                    />
                  )}
                  <div className={cn(
                    "absolute top-4 left-4 px-4 py-1.5 rounded-full text-[10px] font-bold text-white uppercase tracking-wider",
                    work.badgeColor
                  )}>
                    {work.tag}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-foreground leading-snug mb-8 flex-grow">
                    {work.title}
                  </h3>
                  
                  <Link 
                    href={`/impact/${work.id}`} 
                    className={cn(
                      "inline-flex items-center gap-2 text-sm font-bold transition-opacity hover:opacity-80",
                      work.textColor
                    )}
                  >
                    Read more 
                    <ArrowRight className="w-4 h-4" />
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
