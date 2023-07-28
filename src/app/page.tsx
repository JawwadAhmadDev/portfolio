import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Experiences from "@/components/Experiences";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <main className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-yellow-600/75">
      {/* <h1 className="text-3xl">My Personal Portfolio</h1> */}

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <Experiences />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer flex justify-center items-center hover:animate-bounce">
          <div>
            <HomeIcon className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0" />
          </div>
        </footer>
      </Link>
    </main>
  );
}
