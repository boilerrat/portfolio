import type { FC } from 'react';
import { ChevronRight } from 'lucide-react';
import type { SkillsProps, SkillCardProps, SkillBarProps, Skill } from './types';

const SkillBar: FC<SkillBarProps> = ({
    level,
    maxLevel = 5,
    className = ''
  }) => {
    const percentage = (level / maxLevel) * 100;
    return (
      <div className={`h-2 w-32 bg-gray-800 rounded-full overflow-hidden ${className}`}>
        <div
          className="h-full bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full transform origin-left transition-transform duration-1000 ease-out"
          style={{ transform: `scaleX(${percentage / 100})` }}
        />
      </div>
    );
  };

const SkillCard: FC<SkillCardProps> = ({
  skill,
  className = ''
}) => (
  <div className={`bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-all duration-300 ${className}`}>
    <div className="flex items-center justify-between mb-4">
      <div>
        <h3 className="text-lg font-medium text-white">{skill.name}</h3>
        <p className="text-sm text-gray-400">{skill.description}</p>
      </div>
      <SkillBar level={skill.level} />
    </div>
    <div className="space-y-2">
      {skill.keywords.map((keyword, index) => (
        <div key={index} className="flex items-center text-sm text-gray-400">
          <ChevronRight size={16} className="text-blue-500 mr-2" />
          <span>{keyword}</span>
        </div>
      ))}
    </div>
  </div>
);

const defaultSkills: Skill[] = [
  {
    name: "Radiation Protection",
    description: "Expert",
    level: 5,
    keywords: [
      "Radiation Monitoring",
      "Contamination Control",
      "Radiological Safety",
      "Documentation and Procedure"
    ]
  },
  {
    name: "Rigging",
    description: "Advanced",
    level: 4,
    keywords: [
      "Heavy Machinery",
      "Safety Protocols",
      "Equipment Setup",
      "Planning"
    ]
  },
  {
    name: "Project Management",
    description: "Intermediate",
    level: 3,
    keywords: [
      "Task Prioritization",
      "Time Management",
      "Team Collaboration",
      "Project Scheduling",
      "Milestone Tracking",
      "Problem Solving"
    ]
  },
  {
    name: "Grant Writing",
    description: "Expert",
    level: 4,
    keywords: [
      "Governance",
      "Operations",
      "Community Building",
      "Grants"
    ]
  },
  {
    name: "Community Building",
    description: "Expert",
    level: 3,
    keywords: [
      "Onboarding",
      "Content Creation",
      "Networking"
    ]
  },
  {
    name: "Web Development",
    description: "Novice",
    level: 2,
    keywords: [
      "Python",
      "Javascript",
      "Typescript",
      "HTML",
      "CSS",
      "REACT"
    ]
  }
];

export const Skills: FC<SkillsProps> = ({
    className = '',
    skills = defaultSkills
  }) => {
    return (
      <section id="skills" className={`min-h-screen bg-black text-white p-8 ${className}`}>
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
              Professional Skills
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>
      </section>
    );
  };

export default Skills;