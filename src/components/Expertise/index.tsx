import React from 'react';
import { Atom, Database, Shield, Binary, Users, Award, Wrench, Factory, Power, Coins } from 'lucide-react';
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

const defaultIndustryExperience: ExperienceItem[] = [
  {
    title: "Journeyman Boilermaker",
    company: "International Brotherhood of Boilermakers",
    period: "2003 - Present",
    description: "Two decades of experience across industrial sectors, specializing in pressure vessels, heat exchangers, and critical infrastructure. Led teams in major projects nationwide.",
    icon: Wrench
  },
  {
    title: "Industrial Operations",
    company: "Multiple Sectors",
    period: "2003 - Present",
    description: "Extensive experience in oil refineries, steel mills, and power generation facilities. Specialized in maintenance, repairs, and large-scale equipment installations.",
    icon: Factory
  }
];

const defaultNuclearExperience: ExperienceItem[] = [
  {
    title: "Radiation Protection",
    company: "Makwa-Cahill/Nuvia",
    period: "2019 - Present",
    description: "Lead Radiation Protection Specialist for Bruce Nuclear's Major Component Replacement Project. Managing radiological safety for one of North America's largest nuclear refurbishment projects.",
    icon: Shield
  },
  {
    title: "Nuclear Maintenance and Refurbishment",
    company: "Multiple Nuclear Facilities",
    period: "2003 - Present",
    description: "20 years of nuclear experience including Pickering, Darlington, and Bruce Power. Specialized focus on reactor refurbishment and maintenance",
    icon: Power
  }
];

const defaultWeb3Experience: ExperienceItem[] = [
  {
    title: "DAO Governance Lead",
    company: "Public HAUS",
    period: "2022 - Present",
    description: "Secured $300K+ in grants through governance proposals to Moloch DAO, Optimism, Plurality Labs and Public Nouns. Pioneering governance frameworks and community development initiatives.",
    icon: Users
  },
  {
    title: "Web3 Innovation",
    company: "DAO Masons & MetaCartel",
    period: "2022 - 2024",
    description: "Founded DAO Masons, led Grant Ships program distributing $100K ARB tokens. Active contributor to MetaCartel, driving Web3 adoption and innovation in DAOs.",
    icon: Coins
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
        {/* Industry Section */}
        <Section
          id="industry"
          title="Industrial Expertise"
          icon={Factory}
          items={defaultIndustryExperience}
          gradientFrom="blue-500"
          gradientTo="purple-500"
        />
        
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

export default Expertise;