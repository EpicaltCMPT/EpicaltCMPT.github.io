import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import StatusBar from './components/statusbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      console.log(e.key)
      switch (e.key.toLowerCase()) {
        case 'h': setCurrentPage('Home'); break;
        case 'j': setCurrentPage('About'); break;
        case 'k': setCurrentPage('Projects'); break;
        case 'l': setCurrentPage('Experience'); break;
        case 'c': setCurrentPage('Contact'); break;
      }
    }
  
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className={`h-screen flex flex-col font-mono ${isDark ? 'dark' : ''}`}>
      <div className="flex flex-1 bg-[#1a1b26] text-[#a9b1d6]">
        <Sidebar setPage={setCurrentPage} currentPage={currentPage} isDark={isDark} setIsDark={setIsDark} />
        <main className="flex-1 min-w-0 bg-[#1a1b26]">
          {currentPage === "Home" && <Home isDark={isDark} setPage={setCurrentPage} />}
          {currentPage === "Projects" && <Projects isDark={isDark} />}
          {currentPage === "Experience" && <Experience isDark={isDark} />}
          {currentPage === "About" && <About isDark={isDark} />}
          {currentPage === "Contact" && <Contact isDark={isDark} />}
        </main>
      </div>
      <StatusBar currentPage={currentPage} />
    </div>
  );
}


