import Navbar from "@/components/Navbar";
import Decor from "@/components/ui/Decor";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Spotify from "@/components/Spotify";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-x-hidden">
        <Decor />
        <Hero />
        <Stats />
        <Marquee />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Spotify />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
