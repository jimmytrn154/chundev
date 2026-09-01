import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ParticleBackground from "@/components/ParticleBackground";
import ScrollAnimations from "@/components/ScrollAnimations";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Honors from "@/components/Honors";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <ScrollAnimations />
      <Nav />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Honors />
      <Education />
      <Footer />
    </>
  );
}
