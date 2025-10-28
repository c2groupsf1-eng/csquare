"use client";
export default function Footer() {
  return (
  <footer className="bg-white/80 py-6 mt-16 shadow-inner">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div>
          <span className="font-bold text-yellow-500">C² Racing</span> &copy; {new Date().getFullYear()}
        </div>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="mailto:c2groupsf1@gmail.com" className="hover:text-yellow-500">c2groupsf1@gmail.com</a>
          <a href="https://instagram.com/team.c_square" target="_blank" rel="noopener" className="hover:text-yellow-500">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener" className="hover:text-yellow-500">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
