"use client";
import { Button } from "../../components/ui/button";

export default function Navbar() {
  return (
  <nav className="flex items-center justify-between px-6 py-4 bg-white/80 shadow-md fixed w-full z-50">
      <div className="flex items-center gap-2">
  <span className="text-2xl font-bold text-yellow-500">C²</span>
      </div>
      <div className="flex gap-6">
  <a href="#home" className="hover:text-yellow-500 transition">Home</a>
  <a href="#team" className="hover:text-yellow-500 transition">Team</a>
  <a href="#sponsors" className="hover:text-yellow-500 transition">Sponsors</a>
  <a href="#car" className="hover:text-yellow-500 transition">Car</a>
      </div>
      <a href="mailto:c2groupsf1@gmail.com">
        <Button variant="outline" className="hidden md:block">Contact</Button>
      </a>
    </nav>
  );
}
