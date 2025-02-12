export default function Sidebar({ 
  setPage, 
  currentPage,
  isDark,
  setIsDark 
}: { 
  setPage: (page: string) => void;
  currentPage: string;
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}) {
  const navItems = [
    { name: "Home", shortcut: "h", icon: "📄" },
    { name: "About", shortcut: "j", icon: "👤" },
    { name: "Projects", shortcut: "k", icon: "⌨️" },
    { name: "Experience", shortcut: "l", icon: "💼" },
    { name: "Contact", shortcut: "c", icon: "✉️" }
  ];

  return (
    <div className="w-64 bg-gray-50 dark:bg-terminal-black border-r border-gray-200 dark:border-terminal-accent/30 p-6 flex flex-col">
      <div className="flex justify-between items-center mb-8">
        <span className="text-terminal-accent">Sajan S.</span>
        <button 
          onClick={() => setIsDark(!isDark)}
          className="text-gray-500 dark:text-terminal-text"
        >
          {isDark ? '☀️' : '🌙'}
        </button>
      </div>
      
      <nav className="space-y-1 flex-1">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setPage(item.name)}
            className={`w-full text-left px-3 py-2 rounded-sm flex items-center transition-colors
              ${currentPage === item.name 
                ? 'bg-terminal-accent/10 text-terminal-accent border border-terminal-accent/20'
                : `hover:text-terminal-accent ${isDark ? 'bg-terminal-button dark:hover:bg-terminal-accent/5 hover:bg-gray-100' : 'bg-gray-50 hover:bg-gray-100'}`
              }`}
          >
            <span className="mr-3 opacity-70">{item.icon}</span>
            <span className="font-medium">{item.name}</span>
            <span className="ml-auto text-xs opacity-50">{item.shortcut}</span>
          </button>
        ))}
      </nav>

      <div className="pt-6 border-t border-gray-200 dark:border-terminal-accent/10 text-sm opacity-70">
        <p className="mb-2">Based in Vancouver, BC</p>
        <p>v1.0.0</p>
      </div>
    </div>
  );
}
