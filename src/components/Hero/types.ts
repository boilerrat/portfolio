import { LucideIcon } from 'lucide-react';

export interface HeroProps {
  className?: string;
  customIntroText?: string;
}

export interface QuickLink {
  icon: LucideIcon;
  label: string;
  href: string;
  external?: boolean;
}

export interface AnimationState {
  text: string;
  showContent: boolean;
}