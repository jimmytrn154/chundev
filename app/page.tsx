import Sidebar from "@/components/Sidebar";
import About from "@/components/About";
import ResearchInterests from "@/components/ResearchInterests";
import News from "@/components/News";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Honors from "@/components/Honors";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="page">
      <Sidebar />
      <main>
        <About />
        <ResearchInterests />
        <News />
        <Experience />
        <Projects />
        <Skills />
        <Honors />
        <Education />
        <Footer />
      </main>
    </div>
  );
}
