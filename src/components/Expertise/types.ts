import type { ExperienceItem } from '../../types';
import type { LucideIcon } from 'lucide-react';

export interface ExpertiseProps {
  className?: string;
  nuclearExperience?: ExperienceItem[];
  web3Experience?: ExperienceItem[];
}

export interface ExperienceCardProps extends ExperienceItem {
  className?: string;
}

export interface SectionProps {
  id: string;
  title: string;
  icon: LucideIcon;
  items: ExperienceItem[];
  gradientFrom: string;
  gradientTo: string;
}