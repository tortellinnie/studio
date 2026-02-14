
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function Hero() {
  const profileImage = PlaceHolderImages.find(img => img.id === 'profile-headshot');

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-primary font-semibold tracking-wider uppercase text-sm">Computer Science Student</h2>
            <h1 className="text-5xl lg:text-7xl font-bold text-[#333333] leading-tight">
              Scaling Heights in <span className="text-primary">Software Engineering</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Hi, I'm Alex. I specialize in building robust distributed systems and intuitive user interfaces. Currently exploring the intersection of AI and cloud infrastructure.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 h-12 px-8">
              View Projects
            </Button>
            <div className="flex items-center gap-2 px-2">
              <a href="#" className="p-2 hover:bg-secondary rounded-full transition-colors text-muted-foreground hover:text-primary">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 hover:bg-secondary rounded-full transition-colors text-muted-foreground hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 hover:bg-secondary rounded-full transition-colors text-muted-foreground hover:text-primary">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-2xl -z-10" />
          <div className="aspect-square relative overflow-hidden rounded-2xl border-8 border-white shadow-2xl">
            <Image
              src={profileImage?.imageUrl || ''}
              alt="Alex's Portrait"
              fill
              className="object-cover"
              data-ai-hint="professional headshot student"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border md:flex items-center gap-4 hidden">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
              3.9
            </div>
            <div>
              <p className="text-xs font-bold uppercase text-muted-foreground">Cumulative GPA</p>
              <p className="text-sm font-semibold">Dean's List Honoree</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
