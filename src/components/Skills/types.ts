export interface Skill {
    id?: string;
    visible?: boolean;
    name: string;
    description: string;
    level: number;
    keywords: string[];
  }
  
  export interface SkillsProps {
    className?: string;
    skills?: Skill[];
  }
  
  export interface SkillCardProps {
    skill: Skill;
    className?: string;
  }
  
  export interface SkillBarProps {
    level: number;
    maxLevel?: number;
    className?: string;
  }