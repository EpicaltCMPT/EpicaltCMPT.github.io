interface ExperienceProps {
    isDark: boolean;
}


const Experience: React.FC<ExperienceProps> = ({ isDark }) => {
    return (
      <div className="h-full w-[calc(100dvw-16rem)] p-8 bg-white dark:bg-[#1a1b26]">
        <h1 className="text-2xl text-gray-900 dark:text-[#7aa2f7] mb-6"># Experience</h1>
        <div className="space-y-6">
          <div className="border-l-4 border-gray-900 dark:border-[#7aa2f7] pl-4">
            <h2 className="text-xl mb-2 text-gray-800 dark:text-[#a9b1d6]">// Your experience content here</h2>
            <p className="text-gray-700 dark:text-[#a9b1d6] opacity-70">Add your experience details...</p>
          </div>
        </div>
      </div>
    )
}

export default Experience;
