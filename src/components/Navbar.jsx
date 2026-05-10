import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-b from-black/90 to-transparent">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-6">
        <h1 className="text-red-600 text-2xl font-black tracking-wide">LOVEFLIX</h1>

        <ul className="hidden md:flex items-center gap-5 text-sm text-zinc-200">
          <li><Link to="/" className="hover:text-white transition">Home</Link></li>
          <li><Link to="/memories" className="hover:text-white transition">Memories</Link></li>
          <li><Link to="/videos" className="hover:text-white transition">Videos</Link></li>
          <li><Link to="/our-story" className="hover:text-white transition">Our Story</Link></li>
          <li><Link to="/gallery" className="hover:text-white transition">Gallery</Link></li>
        </ul>
      </nav>
    </header>
  );
}