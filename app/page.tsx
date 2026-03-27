import { About } from "@/components/About";
import { CTA } from "@/components/CTA";
import { Experience } from "@/components/Experience";
import { Features } from "@/components/Features";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { Menu } from "@/components/Menu";
import { Navbar } from "@/components/Navbar";
import { Testimonial } from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-x-clip">
        <Hero />
        <About />
        <Features />
        <Gallery />
        <Menu />
        <Experience />
        <Location />
        <Testimonial />
        <CTA />
      </main>
    </>
  );
}
