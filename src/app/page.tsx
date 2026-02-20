import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Journey } from '@/components/Journey';
import { Featured } from '@/components/Featured';
import { Projects } from '@/components/Projects';
import { Speaking } from '@/components/Speaking';
import { Awards } from '@/components/Awards';
import { Certifications } from '@/components/Certifications';
import { Blogs } from '@/components/Blogs';
import { Recommendations } from '@/components/Recommendations';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-foreground">
      <Navbar />
      <Hero />
      <div className="space-y-0 relative z-10">
        <Journey />
        <Featured />
        <Projects />
        <Speaking />
        <Awards />
        <Certifications />
        <Blogs />
        <Recommendations />
        <Contact />
      </div>
    </main>
  );
}