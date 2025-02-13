interface ExperienceItem {
  title: string;
  description: string;
}

interface ExperienceSectionProps {
  sectionTitle: string;
  items: ExperienceItem[];
  isDark: boolean;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ sectionTitle, items}) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl text-gray-900 dark:text-[#7aa2f7] mb-6"># {sectionTitle}</h2>
      {items.map((item, index) => (
        <div key={index} className="border-l-4 border-gray-900 dark:border-[#7aa2f7] pl-4">
          <h3 className="text-xl mb-2 text-gray-800 dark:text-[#a9b1d6]">// {item.title}</h3>
          <p className="text-gray-700 dark:text-[#a9b1d6] opacity-70">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
