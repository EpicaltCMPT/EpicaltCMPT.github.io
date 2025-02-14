import { useState, useEffect } from 'react';
import { DarkModeProvider, useDarkMode } from './components/DarkModeProvider';
import Sidebar from './components/Sidebar';
import StatusBar from './components/statusbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';

const AppContent = () => {
  const [currentPage, setCurrentPage] = useState('Home');
  const { isDark } = useDarkMode();

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
    <div className="h-screen flex flex-col font-mono">
      <div className="flex flex-1">
        <Sidebar 
          setPage={setCurrentPage} 
          currentPage={currentPage} 
        />
        <main className="flex-1 min-w-0">
          {currentPage === "Home" && <Home setPage={setCurrentPage} isDark={isDark} />}
          {currentPage === "Projects" && <Projects setPage={setCurrentPage} isDark={isDark} />}
          {currentPage === "Experience" && <Experience isDark={isDark} />}
          {currentPage === "About" && <About isDark={isDark} />}
          {currentPage === "Contact" && <Contact isDark={isDark} />}
        </main>
      </div>
      <StatusBar currentPage={currentPage} />
    </div>
  );
};

export default function App() {
  return (
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  );
}


