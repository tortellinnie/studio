import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Metrics } from '@/components/Metrics';
import { Journey } from '@/components/Journey';
import { Featured } from '@/components/Featured';
import { Projects } from '@/components/Projects';
import { Education } from '@/components/Education';
import { Achievements } from '@/components/Achievements';
import { Experience } from '@/components/Experience';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Metrics />
      <Journey />
      <Featured />
      <Projects />
      <Education />
      <Experience />
      <Achievements />
      <Contact />
    </main>
  );
}
