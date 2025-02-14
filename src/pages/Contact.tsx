interface ContactProps {
    isDark: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDark }) => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:Epicslooyer@gmail.com?subject=Contact from Personal Website';
  };

  return (
    <div className="w-[calc(100dvw-16rem)] h-full p-8">
      <h1 className="text-2xl text-terminal-accent mb-6"># Contact</h1>
      
      <div className="space-y-8">
        <div className="space-y-6">
          <p className="text-lg leading-relaxed opacity-90 font-mono">
            Contact Me through:
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => window.open('https://github.com/EpicaltCMPT', '_blank')}
              className={`px-4 py-2 rounded-sm text-terminal-accent transition-colors font-mono border border-terminal-accent/30 ${isDark ? 'bg-terminal-button hover:bg-terminal-accent/20' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              GitHub
            </button>
            <button
              onClick={() => window.open('https://www.linkedin.com/in/sajan-s-4613a5270/', '_blank')}
              className={`px-4 py-2 rounded-sm text-terminal-accent transition-colors font-mono border border-terminal-accent/30 ${isDark ? 'bg-terminal-button hover:bg-terminal-accent/20' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              LinkedIn
            </button>
            <a
              href='https://discord.com'
              className={`px-4 py-2 rounded-sm text-terminal-accent transition-colors font-mono border border-terminal-accent/30 ${isDark ? 'bg-terminal-button hover:bg-terminal-accent/20' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              Discord [BROKEN]
            </a>
            <button
              onClick={handleEmailClick}              
              className={`px-4 py-2 rounded-sm text-terminal-accent transition-colors font-mono border border-terminal-accent/30 
                ${isDark ? 'bg-terminal-button hover:bg-terminal-accent/20' : 'bg-gray-100 hover:bg-gray-200'}`}>              
                Gmail            
            </button>          
          </div>        
        </div>
      </div>   
    </div>  
  );
};
export default Contact;