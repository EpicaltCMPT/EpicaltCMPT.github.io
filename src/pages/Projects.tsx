import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
//import ImageFrame from '../components/ImageFrame';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  technologies: string[];
}

interface ProjectsProps {
    isDark: boolean;
    setPage: (page: string) => void;
  }

const projects: Project[] = [
  {
    id: 1,
    title: "SnowScape",
    description: "A mapping website primarily used for viewing ski resort and there current conditions/weather. Main features include: 3D terrain map that can switch between summer and winter, interactive ski resort markers, mapbox API integration, and built in weather forecast.",
    image: "/snowscape-preview.png",
    githubUrl: "https://github.com/yourusername/snowscape",
    technologies: ["React.js", "ShadCN", "Tailwind.css"]
  },

  {
    id: 2,
    title: "CourseBot",
    description: "A mapping website primarily used for viewing ski resort and there current conditions/weather. Main features include: 3D terrain map that can switch between summer and winter, interactive ski resort markers, mapbox API integration, and built in weather forecast.",
    image: "/snowscape-preview.png",
    githubUrl: "https://github.com/yourusername/snowscape",
    technologies: ["React.js", "ShadCN", "Tailwind.css"]
  },
];

const Projects: React.FC<ProjectsProps> = ({ isDark}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [key, setKey] = useState(0);

  const nextProject = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setKey(prev => prev + 1);
  };

  const previousProject = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setKey(prev => prev + 1);
  };

  const currentProject = projects[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="h-full w-[calc(100dvw-16rem)] p-8">
      <h1 className="text-2xl text-[#7aa2f7] mb-6 flex items-center gap-2">
        <span className="text-2xl">⌨️</span> Projects
      </h1>
      
      <div className="relative mt-8 max-w-lg mx-auto" style={{ height: "600px" }}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className={`absolute inset-0 rounded-lg border border-[#7aa2f7]/30 p-6 ${
              isDark ? 'bg-[#1a1b26]' : 'bg-white'
            }`}
          >


            <div className="space-y-4">
              <h2 className="text-xl text-[#7aa2f7] h-7">
                <TypeAnimation
                  key={`title-${key}`}
                  sequence={[currentProject.title]}
                  wrapper="span"
                  speed={50}
                  cursor={false}
                />
              </h2>
              <div className={`opacity-70 min-h-[4rem] ${
                isDark ? 'text-[#a9b1d6]' : 'text-gray-700'
              }`}>
                <TypeAnimation
                  key={`desc-${key}`}
                  sequence={[currentProject.description]}
                  wrapper="p"
                  speed={50}
                  cursor={false}
                />
              </div>

              <div className="flex gap-2 flex-wrap">
                {currentProject.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className={`px-3 py-1 text-sm text-[#7aa2f7] border border-[#7aa2f7]/30 rounded-sm ${
                      isDark ? 'bg-[#1a1b26]' : 'bg-white'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-4">
                <a 
                  href={currentProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7aa2f7] hover:text-[#7aa2f7]/80 transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd" />
                  </svg>
                  <span>View on GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={previousProject}
          className={`absolute -left-10 top-1/2 -translate-y-1/2 z-10 transition-colors ${
            isDark ? 'text-[#7aa2f7] hover:text-[#7aa2f7]/80' : 'text-gray-600 hover:text-gray-800'
          }`}
          aria-label="Previous project"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextProject}
          className={`absolute -right-10 top-1/2 -translate-y-1/2 z-10 transition-colors ${
            isDark ? 'text-[#7aa2f7] hover:text-[#7aa2f7]/80' : 'text-gray-600 hover:text-gray-800'
          }`}
          aria-label="Next project"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Projects;
