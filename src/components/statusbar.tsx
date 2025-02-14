export default function StatusBar({ currentPage }: { currentPage: string }) {
  return (
    <div className="h-6 bg-white dark:bg-[#1a1b26] border-t border-gray-200 dark:border-[#7aa2f7]/30 px-4 flex items-center justify-between text-sm text-gray-900 dark:text-[#a9b1d6]">
      <div className="flex items-center gap-2">
        <span className="text-gray-900 dark:text-[#7aa2f7]">Normal</span>
        <span className="mx-2 text-terminal-accent/30">|</span>
        <span className="opacity-75">{currentPage.toLowerCase()}.tsx</span>
      </div>
      <div className="ml-auto flex items-center gap-2">
        <a href="https://github.com/EpicaltCMPT" target="_blank" rel="noopener noreferrer">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd" />
        </svg>
        </a>
        <a href="https://www.linkedin.com/in/sajan-s-4613a5270/" target="_blank" rel="noopener noreferrer">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M19.5 0h-15C2.01 0 0 2.01 0 4.5v15C0 21.99 2.01 24 4.5 24h15c2.49 0 4.5-2.01 4.5-4.5v-15C24 2.01 21.99 0 19.5 0zM7.5 20h-3v-10h3v10zm-1.5-11.5c-1.03 0-1.5-.68-1.5-1.5 0-.83.47-1.5 1.5-1.5s1.5.67 1.5 1.5c0 .82-.47 1.5-1.5 1.5zm15 11.5h-3v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.91v5.59h-3v-10h3v1.36c.42-.65 1.17-1.36 2.41-1.36 2.58 0 3.06 1.69 3.06 3.89v6.11z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  )
}
