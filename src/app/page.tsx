import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
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
    <main className="min-h-screen bg-white text-foreground">
      <Navbar />
      <Hero />
      <div className="space-y-0">
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
