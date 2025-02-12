export default function About() {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl text-terminal-accent">#! About Me</h1>
        <p>Test this</p>
        
        <div className="border-l-4 border-terminal-accent pl-4">
          <h2 className="text-xl mb-2">Education</h2>
          <div className="space-y-1">
            <p className="font-bold">Simon Fraser University</p>
            <p>Computing Science | 2023 - 2028</p>
          </div>
        </div>
  
        <div>
          <h2 className="text-xl mb-2">Hobbies</h2>
          <div className="flex gap-2 flex-wrap">
            {['PC Building', 'Skiing', 'Mountain Biking', 'Hiking'].map(hobby => (
              <span key={hobby} className="px-3 py-1 bg-terminal-accent/10 text-terminal-accent">
                {hobby}
              </span>
            ))}
          </div>
        </div>
      </div>
    )
  }