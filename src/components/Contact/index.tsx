import type { FC } from 'react';
import {
  MdEmail,
  MdCalendarToday,
  MdLanguage
} from 'react-icons/md';
import {
  FaGithub,
  FaLinkedin,
  FaTelegram
} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { SiFarcaster } from "react-icons/si";
import { BiSearch } from "react-icons/bi";
import type { ContactProps, SocialLinkCardProps, CategorySectionProps } from './types';

const SocialLinkCard: FC<SocialLinkCardProps> = ({
  name,
  icon: Icon,
  url,
  username,
  className = ''
}) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={`group bg-gray-900 rounded-lg p-4 hover:bg-gray-800 transition-all duration-300 ${className}`}
  >
    <div className="flex items-center gap-4">
      <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors">
        <Icon size={20} className="text-blue-400" />
      </div>
      <div>
        <div className="text-sm text-gray-400">{name}</div>
        <div className="text-white">{username}</div>
      </div>
    </div>
  </a>
);

const CategorySection: FC<CategorySectionProps> = ({
  category,
  links,
  className = ''
}) => (
  <div className={`space-y-6 ${className}`}>
    <h3 className="text-xl font-medium text-gray-400">
      {category}
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {links.map((link, index) => (
        <SocialLinkCard key={index} {...link} />
      ))}
    </div>
  </div>
);

export const Contact: FC<ContactProps> = ({
  className = '',
  socialLinks = defaultSocialLinks
}) => {
  return (
    <section id="contact" className={`min-h-screen bg-black text-white p-8 ${className}`}>
      <div className="max-w-4xl mx-auto space-y-16">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
          Connect With Me
        </h2>
        <div className="grid gap-12">
          {socialLinks.map((category, index) => (
            <CategorySection
              key={index}
              category={category.category}
              links={category.links}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const defaultSocialLinks = [
  {
    category: "Professional",
    links: [
      {
        name: "Email",
        icon: MdEmail,
        url: "mailto:128boilerrat@gmail.com",
        username: "128boilerrat@gmail.com"
      },
      {
        name: "Calendar",
        icon: MdCalendarToday,
        url: "https://calendly.com/boiler-chris/call-with-boilerrat",
        username: "Schedule a call"
      },
      {
        name: "Resume",
        icon: MdLanguage,
        url: "//https://rxresu.me/boilerrat/victorious-present-lungfish",
        username: "Download PDF"
      }
    ]
  },
  {
    category: "Social",
    links: [
      {
        name: "X",
        icon: FaXTwitter,
        url: "https://twitter.com/boilerrat",
        username: "@boilerrat"
      },
      {
        name: "GitHub",
        icon: FaGithub,
        url: "https://github.com/boilerrat",
        username: "boilerrat"
      },
      {
        name: "LinkedIn",
        icon: FaLinkedin,
        url: "https://www.linkedin.com/in/christopherwylde/",
        username: "christopherwylde"
      },
      {
        name: "Telegram",
        icon: FaTelegram,
        url: "https://t.me/boilerrat"
      },
      {
        name: "Farcaster",
        icon: SiFarcaster,
        url: "https://warpcast.com/boiler",
        username: "boiler"
      },
      {
        name: "Lens",
        icon: BiSearch, // You might want to find a more specific Lens icon
        url: "https://lenster.xyz/u/boilerrat",
        username: "boilerrat"
      }
    ]
  },

];