"use client";
import Image from "next/image";
import { useFadeInOnScroll } from "./hooks/useFadeInOnScroll";

const sponsors = [
  { name: "Sponsor 1", logo: "/sponsors/perpetuus.png" },
  { name: "Sponsor 2", logo: "/sponsors/planetearth.png" },
  { name: "Sponsor 3", logo: "/sponsors/giis.png" },
  { name: "Sponsor 4", logo: "/sponsors/f1bearings.png" },
  { name: "Sponsor 5", logo: "/sponsors/whooshsg.png" },
];

export default function Sponsors() {
  useFadeInOnScroll("#sponsors .sponsor-logo");
  return (
  <section id="sponsors" className="max-w-4xl mx-auto py-16 px-4">
  <h2 className="text-3xl font-bold text-white mb-8 text-center">Sponsors</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 items-center justify-items-center">
        {sponsors.map((s, i) => (
            <div key={i} className="sponsor-logo p-4 bg-gray-300 rounded-xl shadow hover:scale-105 transition">
            <Image src={s.logo} alt={s.name} width={256} height={128} className="w-full max-h-32 object-contain mx-auto" />
          </div>
        ))}
      </div>
    </section>
  );
}
// ...existing code...
