"use client"


import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import BasicOffer from './BasicOffer';
import PremiumOffer from './PremiumOffer';
import CustomSolutions from './CustomSolutions';
import MonthlyServices from './MonthlyServices';
import { CircleArrowRight } from 'lucide-react';

const tabs = [
  { name: 'Site vitrine Basique', component: <BasicOffer /> },
  { name: 'Site vitrine Premium', component: <PremiumOffer /> },
  { name: 'E-commerce & Solutions Personnalisées', component: <CustomSolutions /> },
  { name: 'Services Mensuels', component: <MonthlyServices /> }
];

export default function PricingTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].name);
  const [openTab, setOpenTab] = useState(null);
  const { theme } = useTheme();
  const tabRefs = useRef({});

  useEffect(() => {
    if (openTab && tabRefs.current[openTab]) {
      const element = tabRefs.current[openTab];
      const navbarOffset = 50; // Assurez-vous que cela correspond à la hauteur de votre navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - navbarOffset;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }, [openTab]);

  const toggleAccordion = (tabName) => {
    setOpenTab(openTab === tabName ? null : tabName);
    setActiveTab(tabName);
  };

  return (
    <div className='bg-transparent w-full max-w-[1200px] pb-10'>
      <nav className="sm:hidden bg-transparent w-full sticky top-0 z-10">
        {tabs.map((tab) => (
          <div key={tab.name} className='bg-transparent w-full my-6'>
            <button 
              ref={el => tabRefs.current[tab.name] = el}
              onClick={() => toggleAccordion(tab.name)}
              className={`p-4 rounded-full w-full flex justify-between relative text-foreground text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-cardbordercolor ${theme === 'dark' ? 'bg-black/30' : 'bg-white/30'}`}>
              <h2 className="relative z-20 flex w-full justify-between">
                {tab.name}
                <CircleArrowRight className={`text-teal-400 transition-transform duration-300 ${openTab === tab.name ? 'transform rotate-90' : ''}`} />
              </h2>
            </button>
            {openTab === tab.name && (
              <div className="accordion-content p-4 border-gray-200 overflow-y-auto max-h-[calc(100vh-200px)]">
                {tab.component}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}
