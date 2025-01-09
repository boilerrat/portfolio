import { LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons';

export interface HeroProps {
  className?: string;
  customIntroText?: string;
}

export interface QuickLink {
  icon: LucideIcon | IconType;  // Allow both Lucide and React icons
  label: string;
  href: string;
  external?: boolean;
}

export interface AnimationState {
  text: string;
  showContent: boolean;
}