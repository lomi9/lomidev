"use client"

import { useState } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import BasicOffer from './BasicOffer';
import PremiumOffer from './PremiumOffer';
import CustomSolutions from './CustomSolutions';
import MonthlyServices from './MonthlyServices';
import { CircleArrowRight } from 'lucide-react';

const tabs = [
  { name: 'Site vitrine Basique', component: <BasicOffer/> },
  { name: 'Site vitrine Premium', component: <PremiumOffer/> },
  { name: 'E-commerce & Solutions Personnalisées', component: <CustomSolutions/> },
  { name: 'Services Mensuels', component: <MonthlyServices/> }
];

export default function PricingTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].name);
  const [openTab, setOpenTab] = useState(null);
  const { theme } = useTheme();

  const toggleAccordion = (tabName) => {
    setOpenTab(openTab === tabName ? null : tabName);
  };

  return (
    <div className='bg-transparent w-full'>
      {/* Accordéon mobile */}
      <div className="sm:hidden bg-transparent w-full">
        {tabs.map((tab) => (
          <div key={tab.name} className='bg-transparent w-full my-4'>
            <div 
              onClick={() => toggleAccordion(tab.name)}
              className={`button flex justify-between w-full text-left p-4 text-sm font-medium text-gray-500 hover:bg-cardbordercolor focus:outline-none focus:bg-gray-200  focus:bg-opacity-30 bg-opacity-30 border border-gray-200 border-opacity-70 rounded-[40px] backdrop-blur-[25px] backdrop-saturate-[1.06] ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}
            >
              {tab.name}
              <CircleArrowRight className={`text-tags transition-transform duration-300 ${openTab === tab.name ? 'transform rotate-90' : ''}`} />
            </div>
            {openTab === tab.name && (
              <div className="accordion-content p-4 border-gray-200">
                {tab.component}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Onglets pour les autres tailles d'écran */}
      <div className="hidden sm:flex flex-wrap justify-center items-center">
        <div className="border-b border-gray-200">
          <ul className="-mb-px flex gap-6" aria-label="Tabs">
            {tabs.map((tab) => (
              <li key={tab.name} className="mr-2">
                <p
                  className={`inline-block p-4 rounded-t-lg ${
                    activeTab === tab.name
                      ? "shrink-0 border-b-2 border-tags px-1 pb-4 text-sm font-medium text-tags"
                      : "text-gray-500 shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium hover:text-gray-700 hover:border-gray-300"
                  }`}
                  onClick={() => setActiveTab(tab.name)}
                >
                  {tab.name}
                </p>
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
