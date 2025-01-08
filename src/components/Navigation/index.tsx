import React, { useState, useEffect, useCallback } from 'react';
import { Home, Atom, Database, Award, Image, User, Factory } from 'lucide-react';
import { NavItem } from '../../types';
import { NavigationProps, ScrollState } from './types';

export const Navigation: React.FC<NavigationProps> = ({
  className = '',
  initialActiveSection = 'home',
  navItems: customNavItems
}) => {
  const [scrollState, setScrollState] = useState<ScrollState>({
    progress: 0,
    activeSection: initialActiveSection
  });

  const defaultNavItems: NavItem[] = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'industry', icon: Factory, label: 'Industry' },
    { id: 'nuclear', icon: Atom, label: 'Nuclear' },
    { id: 'web3', icon: Database, label: 'Web3' },
    { id: 'achievements', icon: Award, label: 'Achievements' },
    { id: 'nfts', icon: Image, label: 'NFTs' },
    { id: 'contact', icon: User, label: 'Contact' }
  ];

  const navItems = customNavItems || defaultNavItems;

  const handleScroll = useCallback(() => {
    // Calculate scroll progress
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;

    // Update active section based on scroll position
    const sections = document.querySelectorAll('section');
    let newActiveSection = scrollState.activeSection;

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
        newActiveSection = section.id;
      }
    });

    setScrollState({ progress, activeSection: newActiveSection });
  }, [scrollState.activeSection]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed right-4 top-1/2 transform -translate-y-1/2 z-50 ${className}`}>
      {/* Progress Bar */}
      <div className="absolute left-0 top-0 w-0.5 h-full bg-gray-800">
        <div 
          className="bg-blue-500"
          style={{ height: `${scrollState.progress}%`, transition: 'height 0.1s' }}
        />
      </div>

      {/* Navigation Items */}
      <div className="relative flex flex-col gap-6">
        {navItems.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`group relative flex items-center ${
              scrollState.activeSection === id ? 'text-blue-500' : 'text-gray-400'
            }`}
          >
            <div className={`p-2 rounded-full transition-all duration-300 
              ${scrollState.activeSection === id 
                ? 'bg-gray-800 text-blue-500' 
                : 'hover:bg-gray-800 hover:text-blue-500'}`}>
              <Icon size={20} />
            </div>

            <span className="absolute right-full mr-4 px-2 py-1 bg-gray-800 
              rounded-md text-sm opacity-0 group-hover:opacity-100 
              transition-opacity duration-300 whitespace-nowrap">
              {label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;