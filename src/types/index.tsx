import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  id: string;
  icon: LucideIcon;
  label: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  icon: LucideIcon;
}

export interface Grant {
  name: string;
  amount: number;
  color: string;
}

export interface Achievement {
  title: string;
  description: string;
  date: string;
}

export interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    payload: Grant;
  }>;
}

export interface Skills {
    title: string;
    description: string;
    date: string;
}

export interface NFT {
  id: number;
  image: string;
  name: string;
  link: string;
}

export interface SocialLink {
  name: string;
  icon: LucideIcon;
  url: string;
  username: string;
}

export interface LinkCategory {
  category: string;
  links: SocialLink[];
}