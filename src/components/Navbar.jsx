import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const Navbar = ({ menuOpen, setIsMenuOpen }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const navItems = [
    { name: 'Home', href: isHomePage ? '#home' : '/' },
    { name: 'About', href: isHomePage ? '#about' : '/#about' },
    { name: 'Services', href: isHomePage ? '#services' : '/#services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Testimonials', href: isHomePage ? '#testimonials' : '/#testimonials' },
    { name: 'Contact', href: isHomePage ? '#contact' : '/#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-white/5 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="font-display text-2xl font-bold text-white tracking-tighter hover:opacity-80 transition-opacity">
            Grace<span className="text-blue-500">Syntax</span>
          </Link>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-zinc-400 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.href.startsWith('#') || (item.href.startsWith('/#') && !isHomePage) ? (
                <a 
                  key={item.name}
                  href={item.href} 
                  className="text-sm font-medium text-zinc-400 hover:text-blue-400 transition-all hover:-translate-y-0.5"
                >
                  {item.name}
                </a>
              ) : (
                <Link 
                  key={item.name}
                  to={item.href} 
                  className="text-sm font-medium text-zinc-400 hover:text-blue-400 transition-all hover:-translate-y-0.5"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
