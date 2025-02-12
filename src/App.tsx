import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import StatusBar from './components/statusbar';
import Home from './pages/Home';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // if (e.ctrlKey) {
        console.log(e.key)
        switch (e.key.toLowerCase()) {
          case 'h': setCurrentPage('Home'); break;
          case 'j': setCurrentPage('About'); break;
          case 'k': setCurrentPage('Projects'); break;
          case 'l': setCurrentPage('Experience'); break;
        }
      // }
    }
  
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className={`h-screen flex flex-col font-mono ${isDark ? 'dark' : ''}`}>
      <div className="flex flex-1 overflow-hidden bg-white dark:bg-terminal-bg text-gray-900 dark:text-terminal-text">
        <Sidebar setPage={setCurrentPage} currentPage={currentPage} isDark={isDark} setIsDark={setIsDark} />
        <main className="flex-1 p-8 overflow-auto border-l border-gray-200 dark:border-terminal-accent/30">
          <div className="mx-auto">
            {currentPage === "Home" && <Home />}
          </div>
        </main>
      </div>
      <StatusBar currentPage={currentPage} />
    </div>
  );
}
