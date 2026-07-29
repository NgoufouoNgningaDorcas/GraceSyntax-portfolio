import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const navItems = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 bg-black/80 backdrop-blur-lg flex items-center justify-center"
          onClick={() => setMenuOpen(false)}
        >
          <motion.div
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "-100vh" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center justify-center gap-8"
          >
            {navItems.map((item) => (
              <Link key={item.name} to={item.href} onClick={() => setMenuOpen(false)} className="text-3xl font-display font-bold text-zinc-300 hover:text-blue-400 transition-colors">
                {item.name}
              </Link>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};