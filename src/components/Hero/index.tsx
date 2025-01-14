import React, { useState, useEffect } from 'react';
import { Terminal, ExternalLink, AtSign, Calendar } from 'lucide-react';
import { SiFarcaster } from "react-icons/si";
import { HeroProps, QuickLink, AnimationState } from './types';

const defaultIntroText = `> const profile = {
  name: "Christopher Wylde",
  alias: "boiler, boilerrat",
  roles: [
    "Radiation Protection Specialist",
    "Journeyman Boilermaker",
    "Web3 Innovator",
    "DAO Designer"
  ],
  expertise: {
    boilermaker: "20+ years across industrial sectors, nationwide experience",
    nuclear: "20 years total, 8 years specialized in radiation protection",
    web3: "Lead multiple DAOs, $300K+ in grants secured and distributed"
  }
};`;

const quickLinks: QuickLink[] = [
  {
    icon: ExternalLink,
    label: "Full Resume",
    href: "https://rxresu.me/boilerrat/victorious-present-lungfish",
    external: true
  },
  {
    icon: AtSign,
    label: "email",
    href: "mailto:128boilerrat@gmail.com"
  },
  {
    icon: Calendar,
    label: "Schedule a Call",
    href: "https://calendly.com/boiler-chris/call-with-boilerrat",
    external: true
  },
  {
    icon: SiFarcaster,
    label: "DM on Warpcast",
    href: "https://www.warpcast.com/boiler",
    external: true
  }
];

export const Hero: React.FC<HeroProps> = ({
  className = '',
  customIntroText
}) => {
  const [animationState, setAnimationState] = useState<AnimationState>({
    text: '',
    showContent: false
  });

  const introText = customIntroText || defaultIntroText;

  useEffect(() => {
    let currentIndex = 0;
    const typeWriter = setInterval(() => {
      if (currentIndex < introText.length) {
        setAnimationState(prev => ({
          ...prev,
          text: prev.text + introText[currentIndex]
        }));
        currentIndex++;
      } else {
        clearInterval(typeWriter);
        setTimeout(() => setAnimationState(prev => ({
          ...prev,
          showContent: true
        })), 500);
      }
    }, 50);

    return () => clearInterval(typeWriter);
  }, [introText]);

  return (
    <div className={`min-h-screen bg-black text-white flex flex-col items-center justify-center ${className}`}>
      <div className="w-full max-w-3xl px-4">
        {/* Terminal Window */}
        <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl mb-6">
          <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <Terminal className="ml-4" size={14} />
          </div>
          <div className="p-4 font-mono text-sm">
            <pre className="whitespace-pre-wrap">{animationState.text}</pre>
          </div>
        </div>

        {/* Quick Links Section */}
        {animationState.showContent && (
          <div className="space-y-6 opacity-0 animate-fade-in">
            <div className="text-center">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-3">
                Bridging Industry & Web3
              </h1>
              <p className="text-gray-400 text-lg">
                Bringing decades of industrial expertise to decentralized innovation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <link.icon size={20} />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;