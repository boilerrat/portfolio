import React from 'react';
import { Atom, Database, Shield, Binary, Users, Award } from 'lucide-react';
import { ExpertiseProps, ExperienceCardProps, SectionProps } from './types';
import { ExperienceItem } from '../../types';

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  icon: Icon,
  title,
  company,
  period,
  description,
  className = ''
}) => (
  <div className={`bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors duration-300 ${className}`}>
    <div className="flex items-start gap-4">
      <div className="p-3 bg-blue-500/10 rounded-lg">
        <Icon className="text-blue-500" size={24} />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-400 mt-1">{company}</p>
        <p className="text-sm text-gray-500 mt-1">{period}</p>
        <p className="text-gray-300 mt-3">{description}</p>
      </div>
    </div>
  </div>
);

const Section: React.FC<SectionProps> = ({
  title,
  icon: Icon,
  items,
  gradientFrom,
  gradientTo,
  id
}) => (
  <section id={id} className="space-y-8">
    <div className="flex items-center gap-4">
      <Icon size={32} className={`text-${gradientFrom}`} />
      <h2 className={`text-3xl font-bold bg-gradient-to-r from-${gradientFrom} to-${gradientTo} bg-clip-text text-transparent`}>
        {title}
      </h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((exp, index) => (
        <ExperienceCard key={index} {...exp} />
      ))}
    </div>
  </section>
);

const defaultNuclearExperience: ExperienceItem[] = [
  {
    title: "Radiation Protection",
    company: "Makwa-Cahill/Nuvia",
    period: "2019 - Present",
    description: "Delivering comprehensive Radiation Protection services for Bruce Nuclear's Major Component Replacement Project.",
    icon: Shield
  },
  {
    title: "Journeyman Boilermaker",
    company: "International Brotherhood of Boilermakers",
    period: "2003 - Present",
    description: "Leading diverse projects in nuclear facilities, focusing on reactor refurbishment at top facilities.",
    icon: Binary
  }
];

const defaultWeb3Experience: ExperienceItem[] = [
  {
    title: "Public HAUS Champion",
    company: "Public HAUS",
    period: "2022 - Present",
    description: "Secured $197K in grants from Moloch DAO, Optimism, and Public Nouns. Leading onboarding and governance.",
    icon: Users
  },
  {
    title: "Founder",
    company: "DAO Masons",
    period: "2022 - 2024",
    description: "Distributed $100K ARB tokens through Grant Ships, empowering decentralized organizations.",
    icon: Award
  }
];

export const Expertise: React.FC<ExpertiseProps> = ({
  className = '',
  nuclearExperience = defaultNuclearExperience,
  web3Experience = defaultWeb3Experience
}) => {
  return (
    <div className={`min-h-screen bg-black text-white p-8 ${className}`}>
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Nuclear Section */}
        <Section
          id="nuclear"
          title="Nuclear Expertise"
          icon={Atom}
          items={nuclearExperience}
          gradientFrom="blue-500"
          gradientTo="purple-500"
        />

        {/* Web3 Section */}
        <Section
          id="web3"
          title="Web3 Innovation"
          icon={Database}
          items={web3Experience}
          gradientFrom="blue-500"
          gradientTo="purple-500"
        />
      </div>
    </div>
  );
};