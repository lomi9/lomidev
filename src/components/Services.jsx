"use client"
import { useTheme } from '../contexts/ThemeContext';

const Services = () => {

    const { theme } = useTheme();


    return (
        <div className={`w-full h-[70vh] my-[10vw] bg-opacity-30 border border-cardbordercolor rounded-3xl backdrop-blur-[25px] backdrop-saturate-[1.06] ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>Services</div>
    )

}

export default Services;