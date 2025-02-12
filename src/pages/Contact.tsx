
interface ContactProps {
    isDark: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDark }) => {
  return (
    <div className="space-y-8 w-full">
      <h1 className="text-4xl font-bold mb-6 text-terminal-accent font-mono">
        Contact Me
      </h1>
      <p className="text-lg leading-relaxed opacity-90 font-mono">
        Contact Me through:
      </p>
      <div className="flex gap-4 mt-8">
        <button
          onClick={() => window.open('https://github.com', '_blank')}
          className={`px-4 py-2 rounded-sm text-terminal-accent transition-colors font-mono border border-terminal-accent/30 ${isDark ? 'bg-terminal-button hover:bg-terminal-accent/20' : 'bg-gray-100 hover:bg-gray-200'}`}
        >
          GitHub
        </button>
        <button
          onClick={() => window.open('https://linkedin.com', '_blank')}
          className={`px-4 py-2 rounded-sm text-terminal-accent transition-colors font-mono border border-terminal-accent/30 ${isDark ? 'bg-terminal-button hover:bg-terminal-accent/20' : 'bg-gray-100 hover:bg-gray-200'}`}
        >
          LinkedIn
        </button>
        <button
          onClick={() => window.open('https://discord.com', '_blank')}
          className={`px-4 py-2 rounded-sm text-terminal-accent transition-colors font-mono border border-terminal-accent/30 ${isDark ? 'bg-terminal-button hover:bg-terminal-accent/20' : 'bg-gray-100 hover:bg-gray-200'}`}
        >
          Discord
        </button>
      </div>
    </div>
  );
};

export default Contact;