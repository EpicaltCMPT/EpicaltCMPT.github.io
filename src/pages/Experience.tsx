import ExperienceSection from '../components/ExpSect';

interface ExperienceProps {
  isDark: boolean;
}

const workExperience = [
  {
    title: "Science Alive",
    description: "Led interactive STEM workshops at multiple elementary schools across the Lower Mainland, engaging students through hands-on demonstrations and inspiring interest in science and technology."
  },
  {
    title: "Steamoji",
    description: "Taught groups of kids 7-12 years old STEM subjects including Arduino, Python programming, and VEX robotics, helped foster an environment where children could explore and learn critical soft skills including problem solving and developing a growth mindset."
  }
];

const volunteerExperience = [
  {
    title: "Currently nothing here, come back later!",
    description: ""
  }
];

const Experience: React.FC<ExperienceProps> = ({ isDark }) => {
  return (
    <div className={`h-full w-[calc(100dvw-16rem)] p-8 ${isDark ? 'bg-[#1a1b26]' : 'bg-white'}`}>
      <div className="space-y-12">
        <ExperienceSection 
          sectionTitle="Work Experience" 
          items={workExperience} 
          isDark={isDark}
        />
        <ExperienceSection 
          sectionTitle="Volunteer Experience" 
          items={volunteerExperience} 
          isDark={isDark}
        />
      </div>
    </div>
  );
};

export default Experience;
