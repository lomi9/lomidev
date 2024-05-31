"use client"

import { useState } from 'react';
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

  const toggleAccordion = (tabName) => {
    setOpenTab(openTab === tabName ? null : tabName);
  };

  return (
    <div className='bg-transparent w-full max-w-[1200px] pb-10'>
      {/* Accordéon mobile */}
      <div className="sm:hidden bg-transparent w-full sticky top-0 z-10">
        {tabs.map((tab) => (
          <div key={tab.name} className='bg-transparent w-full my-6'>
            
            <button 
            onClick={() => toggleAccordion(tab.name)}
            className={`p-4 rounded-full w-full flex justify-between relative text-foreground text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-cardbordercolor ${theme === 'dark' ? 'bg-black/30' : 'bg-white/30'}`}>
              <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-300 to-transparent" />
              <div className="absolute inset-x-0 h-px w-1/2 mx-auto -bottom-px shadow-2xl  bg-gradient-to-r from-transparent via-cyan-200 to-transparent" />
              <span className="relative z-20 flex w-full justify-between">
              {tab.name}
              <CircleArrowRight className={`text-teal-400 transition-transform duration-300 ${openTab === tab.name ? 'transform rotate-90' : ''}`} />
              </span>
            </button>


            



            {openTab === tab.name && (
              <div className="accordion-content p-4 border-gray-200 overflow-y-auto max-h-[calc(100vh-200px)]">
                {tab.component}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Onglets pour les autres tailles d'écran */}
      <div className="hidden sm:flex flex-wrap justify-center items-center">
        <div className="border-b border-tagsborder">
          <ul className="-mb-px flex gap-6" aria-label="Tabs">
            {tabs.map((tab) => (
              <li key={tab.name} className="mr-2 relative">
                <p
                  className={`inline-block cursor-pointer p-4 rounded-t-lg ${
                    activeTab === tab.name
                      ? "shrink-0 border-b-2 border-b-transparent px-1 pb-4 text-sm font-medium text-tags"
                      : "text-gray-500 shrink-0 border-transparent px-1 pb-4 text-sm font-medium hover:text-tagshover "
                  }`}
                  onClick={() => setActiveTab(tab.name)}
                >
                  {tab.name}
                </p>
                {activeTab === tab.name && (
                    <div className={`active-teal-line absolute inset-x-0 h-px w-3/4 mx-auto -bottom-px shadow-2xl  bg-gradient-to-r from-transparent to-transparent ${theme === 'dark' ? 'via-teal-400' : 'via-teal-700'}`}>
                    
                    </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4">
          {tabs.find(tab => tab.name === activeTab).component}
        </div>
      </div>
    </div>
  );
}
