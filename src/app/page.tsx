import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { SDGs } from '@/components/SDGs';
import { Featured } from '@/components/Featured';
import { Projects } from '@/components/Projects';
import { Education } from '@/components/Education';
import { Achievements } from '@/components/Achievements';
import { Experience } from '@/components/Experience';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      <Navbar />
      <Hero />
      <div className="space-y-0">
        <Featured />
        <Projects />
        <SDGs />
        <Education />
        <Experience />
        <Achievements />
        <Contact />
      </div>
    </main>
  );
}
