export default function StatusBar({ currentPage }: { currentPage: string }) {
  return (
    <div className="h-6 bg-white dark:bg-[#1a1b26] border-t border-gray-200 dark:border-[#7aa2f7]/30 px-4 flex items-center justify-between text-sm text-gray-900 dark:text-[#a9b1d6]">
      <div className="flex items-center gap-2">
        <span className="text-gray-900 dark:text-[#7aa2f7]">Normal</span>
        <span className="mx-2 text-terminal-accent/30">|</span>
        <span className="opacity-75">{currentPage.toLowerCase()}.tsx</span>
      </div>
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
