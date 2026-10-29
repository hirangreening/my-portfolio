import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import About from '@/components/About';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen p-8 md:p-24 bg-gray-900 text-white font-sans flex flex-col">
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Footer />
    </main>
  );
}