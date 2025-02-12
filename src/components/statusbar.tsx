export default function StatusBar({ currentPage }: { currentPage: string }) {
  return (
    <div className="h-6 bg-terminal-black border-t border-terminal-accent/30 flex items-center px-4 text-xs font-mono">
      <span className="text-terminal-accent">NORMAL</span>
      <span className="mx-2 text-terminal-accent/30">|</span>
      <span className="opacity-75">{currentPage.toLowerCase()}.tsx</span>
      <div className="ml-auto flex items-center gap-2">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <img src="/github-mark-white.svg" alt="GitHub" className="h-4 w-4 opacity-75 hover:opacity-100" />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <img src="/linkedin.svg" alt="LinkedIn" className="h-4 w-4 opacity-75 hover:opacity-100" />
        </a>
      </div>
    </div>
  )
}
