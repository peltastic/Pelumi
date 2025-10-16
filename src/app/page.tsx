"use client";
import AboutMe from "@/components/about-me";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeaderSection from "@/components/header-section";
import Navbar from "@/components/layouts/navbar";
import Projects from "@/components/projects";
import Lenis from "lenis";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);
  return (
    <main className="max-w-[1600px] mx-auto  ">
      <div className="patterned-bg absolute left-0 top-0 w-full h-[120vh] "></div>
      {/* <SmoothScroll> */}
      <HeaderSection />
      <AboutMe />
      <Projects />
      <Footer />
      {/* </SmoothScroll> */}
    </main>
  );
}
