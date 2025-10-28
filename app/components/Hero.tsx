"use client";
import { Button } from "../../components/ui/button";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  const scrollToTeam = () => {
    document.getElementById("team")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
  <section ref={heroRef} id="home" className="flex flex-col items-center justify-center min-h-[80vh] text-center">
  <h1 className="text-5xl md:text-7xl font-extrabold text-yellow-600 mb-4">Team C²</h1>
  <p className="text-xl md:text-2xl text-yellow-500 mb-8">Engineering Speed. Shaping the Future.</p>
      <Button size="lg" onClick={scrollToTeam}>Meet the Team</Button>
      {/* Animated shapes with GSAP can be added here */}
    </section>
  );
}
