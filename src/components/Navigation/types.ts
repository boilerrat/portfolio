import { NavItem } from '../../types';

export interface NavigationProps {
  className?: string;  // Optional: for additional styling
  initialActiveSection?: string;  // Optional: to set initial active section
  navItems?: NavItem[];  // Optional: to override default nav items
}

// Local component-specific types
export interface ScrollState {
  progress: number;
  activeSection: string;
}