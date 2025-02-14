import snowscapePreview from '../assets/snowscapepreview.jpeg';
import coursebotPreview from '../assets/CourseBotPreview.png';
import ProjectSlideshow from '../components/ProjectSlideshow';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  technologies: string[];
}

interface ProjectsProps {
  setPage: (page: string) => void;
  isDark: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "SnowScape",
    description: "A mapping website primarily used for viewing ski resort and there current conditions/weather. Main features include: 3D terrain map that can switch between summer and winter, interactive ski resort markers, mapbox API integration, and built in weather forecast. NOTE: Not on Github yet.",
    image: snowscapePreview,
    githubUrl: "https://github.com/",
    technologies: ["React.js", "ShadCN", "Tailwind.css"]
  },

  {
    id: 2,
    title: "CourseBot",
    description: "A Discord bot to simplify course selection at SFU by utilizing web scraping from official SFU sources. The bot features displays course information from JSON files and integrates CourseDigger and RateMyProfessor data for related courses.",
    image: coursebotPreview,
    githubUrl: "https://github.com/Epicslooyer/SFUScrapeBot",
    technologies: ["Python", "AWS", "BeautifulSoup", "Flask"]
  },
];

const Projects: React.FC<ProjectsProps> = ({ isDark }) => {
  
  return (
    <div className="h-full w-[calc(100dvw-16rem)] p-8">
      <h1 className="text-2xl text-[#7aa2f7] mb-6 flex items-center gap-2">
        <span className="text-2xl">⌨️</span> Projects
      </h1>
      
      <ProjectSlideshow 
        projects={projects} 
        isDark={isDark} 
      />
    </div>
  );
};

export default Projects;
