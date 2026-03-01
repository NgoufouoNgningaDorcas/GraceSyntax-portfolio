import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Project } from './components/sections/Project';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';
import { AllProjects } from './pages/AllProjects';
import { ProjectDetails } from './pages/ProjectDetails';
import { ScrollToTop } from './components/ScrollToTop';
import { Background3D } from './components/Background3D';
import { Github, Linkedin } from 'lucide-react';
import './index.css';

const HomePage = () => (
  <main className="relative z-10">
    <Home />
    <About />
    <Services />
    <Project />
    <Testimonials />
    <Contact />
  </main>
);

function AppContent() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      
      <div
        className={`min-h-screen transition-opacity duration-1000 ease-in-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } bg-[#030303] text-zinc-100 relative overflow-hidden`}
      >
        <Background3D />
        <ScrollToTop />
        <Navbar menuOpen={menuOpen} setIsMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>

        <footer className="py-16 border-t border-white/5 text-center text-zinc-600">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
              <div className="text-left">
                <h3 className="font-display text-2xl font-bold text-white mb-2">GraceSyntax</h3>
                <p className="text-zinc-500 max-w-xs">Building the future of software with precision and passion.</p>
                <div className="flex gap-4 mt-4">
                  <a href="https://github.com/NgoufouoNgningaDorcas" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors"><Github size={18} /></a>
                  <a href="https://www.linkedin.com/in/dorcas-ngoufouo-ngninga-5449ab319?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors"><Linkedin size={18} /></a>
                </div>
              </div>
              <div className="flex gap-8 text-sm font-bold uppercase tracking-widest">
                <a href="/#about" className="hover:text-blue-400 transition-colors">About</a>
                <a href="/projects" className="hover:text-blue-400 transition-colors">Projects</a>
                <a href="/#contact" className="hover:text-blue-400 transition-colors">Contact</a>
              </div>
            </div>
            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
              <p>© {new Date().getFullYear()} GraceSyntax. All rights reserved.</p>
              <p className="font-mono uppercase tracking-widest">Yaoundé, Cameroon • Software Engineering</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
