import type { IconType } from 'react-icons';

// Define SocialLink type
export interface SocialLink {
  name: string;
  icon: IconType; // Correct type for react-icons components
  url: string;
  username?: string; // Make this optional
}

// Define LinkCategory type
export interface LinkCategory {
  category: string;
  links: SocialLink[];
}

// Update ContactProps to use LinkCategory[]
export interface ContactProps {
  className?: string;
  socialLinks?: LinkCategory[];
}

// Update SocialLinkCardProps to extend SocialLink
export interface SocialLinkCardProps extends SocialLink {
  className?: string;
}

// Update CategorySectionProps to use the updated SocialLink type
export interface CategorySectionProps {
  category: string;
  links: SocialLink[];
  className?: string;
}
