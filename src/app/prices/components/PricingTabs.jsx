"use client"

import { useState } from 'react';
import BasicOffer from './BasicOffer';
import PremiumOffers from './PremiumOffer';
import CustomSolutions from './CustomSolutions';
import MonthlyServices from './MonthlyServices';

const tabs = [
  { name: 'Site vitrine Basique', component: <BasicOffer/> },
  { name: 'Site vitrine Premium', component: <PremiumOffers/> },
  { name: 'E-commerce & Solutions Personnalisées', component: <CustomSolutions/> },
  { name: 'Services Mensuels', component: <MonthlyServices/> }
];

export default function PricingTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const toggleAccordion = (tabName) => {
    if (activeTab === tabName) {
      setActiveTab(null); 
    } else {
      setActiveTab(tabName); 
    }
  };

  return (
    <div>

         {/* Accordéon mobile */}
         <div className="sm:hidden">
            {tabs.map((tab) => (
              <div key={tab.name}>
                <button 
                  onClick={() => toggleAccordion(tab.name)}
                  className="w-full text-left p-4 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
                >
                  {tab.name}
                </button>
                {activeTab === tab.name && (
                  <div className="p-4 border-t border-gray-200">
                    {tab.component}
                  </div>
                )}
              </div>
            ))}
        </div>

        {/* Onglets pour les autres tailles d'écran */}

        <div className="hidden sm:block">
            <div className="border-b border-gray-200">
                <ul className="-mb-px flex gap-6" aria-label="Tabs">
                    {tabs.map((tab) => (
                        <li key={tab.name} className="mr-2">
                            <button
                            className={`inline-block p-4 rounded-t-lg border-b-2 ${
                            activeTab.name === tab.name
                            ? "shrink-0 border-b-2 border-tags px-1 pb-4 text-sm font-medium text-tags"
                            : "text-gray-500 shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium hover:text-gray-700 hover:border-gray-300 "
                            } `}
                            onClick={() => setActiveTab(tab)}
                            >
                                {tab.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            </div>
            <div className="p-4">
                {activeTab.component}
             </div>
    </div>
  );
}
