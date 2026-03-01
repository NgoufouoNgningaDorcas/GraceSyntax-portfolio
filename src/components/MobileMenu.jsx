import React from "react";
import { Link, useLocation } from "react-router-dom";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navItems = [
    { name: "Home", href: isHomePage ? "#home" : "/" },
    { name: "About", href: isHomePage ? "#about" : "/#about" },
    { name: "Services", href: isHomePage ? "#services" : "/#services" },
    { name: "Projects", href: "/projects" },
    { name: "Testimonials", href: isHomePage ? "#testimonials" : "/#testimonials" },
    { name: "Contact", href: isHomePage ? "#contact" : "/#contact" },
  ];

  return (
    <div 
      className={`fixed top-0 left-0 w-full h-screen bg-[#030303]/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
        menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center space-y-6">
        {navItems.map((item, idx) => (
          item.href.startsWith('#') || (item.href.startsWith('/#') && !isHomePage) ? (
            <a 
              key={item.name}
              href={item.href} 
              onClick={() => setMenuOpen(false)} 
              className={`text-3xl font-display font-bold text-white transition-all duration-500 transform ${
                menuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${idx * 75}ms` }}
            >
              {item.name}
            </a>
          ) : (
            <Link 
              key={item.name}
              to={item.href} 
              onClick={() => setMenuOpen(false)} 
              className={`text-3xl font-display font-bold text-white transition-all duration-500 transform ${
                menuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${idx * 75}ms` }}
            >
              {item.name}
            </Link>
          )
        ))}
      </div>
    </div>
  );
};
