interface HomeProps {
  isDark: boolean;
}

const Home: React.FC<HomeProps> = ({ isDark }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-start gap-6">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-6 text-terminal-accent font-mono">
            {'<Sajan Senghera />'}<span className="animate-pulse">_</span>
          </h1>
          <p className="text-lg leading-relaxed opacity-90 font-mono">
            Hello! This is my site where you can access everything about me. The side bar 
            gives you access to a gallery of my projects, and my resume!
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-terminal-accent font-mono">Some fun facts:</h2>
        <ul className="space-y-3 font-mono">
          <li className="opacity-90">I am a developer from Vancouver, BC, Canada (Its very pretty here!)</li>
          <li className="opacity-90">My main programming language is Javascript/Python, but I like to switch it up from time to time!</li>
          <li className="opacity-90">I love modding/tinkering around- check out my about me!</li>
        </ul>
      </div>

      <div className="flex gap-4 mt-8">
        <button 
          onClick={() => window.location.href = '/#projects'}
          className={`px-4 py-2 rounded-sm text-terminal-accent transition-colors font-mono border border-terminal-accent/30 ${isDark ? 'bg-terminal-button hover:bg-terminal-accent/20' : 'bg-gray-100 hover:bg-gray-200'}`}
        >
          View Projects
        </button>
        <button 
          onClick={() => window.location.href = '/contact'}
          className={`px-4 py-2 rounded-sm text-terminal-accent transition-colors font-mono border border-terminal-accent/30 ${isDark ? 'bg-terminal-button hover:bg-terminal-accent/20' : 'bg-gray-100 hover:bg-gray-200'}`}
        >
          Contact Me
        </button>
      </div>
    </div>
  )
}

export default Home;