import About from "@/components/About";
import Experiences from "@/components/Experiences";
import Haider from "@/components/Haider";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      {/* <h1 className="text-3xl">My Personal Portfolio</h1> */}

      <Haider />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experiences */}
      <section id="experience" className="snap-center">
        <Experiences />
      </section>

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </main>
  );
}
