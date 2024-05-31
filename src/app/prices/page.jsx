"use client"

import { useTheme } from "@/contexts/ThemeContext";
import PricingTabs from "./components/PricingTabs";
import { PricesTitle } from "./components/PricesTitle";


const PricesPage = () => {

    const { theme } = useTheme();

    
    return (
        <div className="max-w-[1200px] w-screen flex flex-wrap justify-center items-center px-4 md:px-12 lg:px-18 pt-[6rem]">
            <PricesTitle/>
            <div className={`flex w-full justify-center items-center bg-opacity-0 border border-transparent border-opacity-00 rounded-xl backdrop-blur-[25px] backdrop-saturate-[1.06] ${theme === 'dark' ? 'bg-transparent' : 'bg-transparent'}`}>
                <PricingTabs/>
            </div>
        </div>
    )
}

export default PricesPage