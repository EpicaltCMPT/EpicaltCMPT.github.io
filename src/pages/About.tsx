export default function About() {
    return (
      <div className="w-[calc(100dvw-16rem)] h-full p-8 text-left">
        <h1 className="text-2xl text-[#7aa2f7] mb-6">#! About Me</h1>
        <p className="text-[#a9b1d6] mb-8">Test this</p>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl text-[#7aa2f7]">Education</h2>
            <div className="space-y-1 text-[#a9b1d6] border-l-2 border-[#7aa2f7] pl-4">
              <p className="font-semibold">Simon Fraser University</p>
              <p className="opacity-80">Computing Science | 2023 - 2028</p>
            </div>
          </div>
    
          <div className="space-y-2">
            <h2 className="text-xl text-[#7aa2f7]">Hobbies</h2>
            <div className="flex gap-3 flex-wrap">
              {['PC Building', 'Skiing', 'Mountain Biking', 'Hiking'].map(hobby => (
                <span 
                  key={hobby} 
                  className="px-3 py-1 bg-[#1a1b26] text-[#7aa2f7] border border-[#7aa2f7]/30 rounded-sm"
                >
                  {hobby}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
}