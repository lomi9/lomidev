"use client"

import { useTheme } from "@/contexts/ThemeContext";
import PricingTabs from "./components/PricingTabs";


const PricesPage = () => {

    const { theme } = useTheme();

    
    return (
        <div className="w-screen flex justify-center items-center px-4 md:px-12 lg:px-18 pt-[6rem]">
            <div className={`flex w-full justify-center items-center bg-opacity-40 border border-gray-200 border-opacity-30 rounded-xl backdrop-blur-[25px] backdrop-saturate-[1.06] ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
                <PricingTabs/>
            </div>
        </div>
    )
}

export default PricesPage