export default function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-md py-6 mt-16 shadow-inner">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div>
          <span className="font-bold text-blue-700">C² Racing</span> &copy; {new Date().getFullYear()}
        </div>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="mailto:contact@c2racing.com" className="hover:text-blue-600">contact@c2racing.com</a>
          <a href="https://instagram.com" target="_blank" rel="noopener" className="hover:text-blue-600">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener" className="hover:text-blue-600">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
