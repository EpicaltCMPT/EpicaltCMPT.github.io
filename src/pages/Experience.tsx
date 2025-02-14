import ExperienceSection from '../components/ExpSect';
import resume from '../assets/Sajan_Resume_main.pdf';
import coverLetter from '../assets/Cover_Letter_Co-op_Preperation_main.pdf';

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

interface ExperienceProps {
  isDark: boolean;
}

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

        <div className="space-y-4">
          <h2 className="text-2xl text-gray-900 dark:text-[#7aa2f7] mb-6"># Documents</h2>
          <div className="flex gap-8">
            <a 
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <div className="p-4 rounded-lg border border-[#7aa2f7]/30">
                <svg className="w-8 h-8 text-[#7aa2f7]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                </svg>
              </div>
              <span className="text-sm text-[#a9b1d6]">Resume</span>
            </a>

            <a 
              href={coverLetter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <div className="p-4 rounded-lg border border-[#7aa2f7]/30">
                <svg className="w-8 h-8 text-[#7aa2f7]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <span className="text-sm text-[#a9b1d6]">Cover Letter</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
