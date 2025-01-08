import type { LinkCategory, SocialLink } from '../../types';

export interface ContactProps {
  className?: string;
  socialLinks?: LinkCategory[];
}

export interface SocialLinkCardProps extends SocialLink {
  className?: string;
}

export interface CategorySectionProps {
  category: string;
  links: SocialLink[];
  className?: string;
}