import BacktoTop from '@/components/BacktoTop';
import ContactMe from '@/components/ContactMe';
import EducationAndExperience from '@/components/EducationAndExperience';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ParticlesBackground from '@/components/Particles';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <main
      className="h-screen w-full snap-y snap-mandatory overflow-x-hidden overflow-y-scroll scroll-smooth text-white"
      id="main-container">
      <ParticlesBackground />
      <Header />
      <Hero />
      <EducationAndExperience />
      <Skills />
      <Projects />
      <ContactMe />
      <BacktoTop containerId="main-container" />
    </main>
  );
}
