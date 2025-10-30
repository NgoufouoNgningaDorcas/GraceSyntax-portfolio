import './App.css';
import { LoadingScreen } from './components/LoadingScreen';
import './index.css';
import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/mobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Project } from './components/sections/Project';
import { Contact } from './components/sections/Contact';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      {/* main app content: fade in when loaded */}
      <div
        className={`min-h-screen transition-opacity duration-500 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'
          } bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setIsMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Project />
        <Contact />
      </div>
    </>
  );
}

export default App;
