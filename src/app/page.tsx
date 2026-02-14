
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Journey } from '@/components/Journey';
import { Projects } from '@/components/Projects';
import { Achievements } from '@/components/Achievements';
import { Experience } from '@/components/Experience';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Journey />
      <Projects />
      <Achievements />
      <Experience />
      <Contact />
    </main>
  );
}
