"use client"
import { useEffect, useState } from "react";
import { useTheme } from '../contexts/ThemeContext';
import Image from "next/image";
import illustration from "../assets/ilustration_n_et_b.webp";
import { ChevronRight } from 'lucide-react';


const HeroVideo = () => {
    const heroVideoSource = "/hero_video.webm";
    const image = illustration;
    const { theme } = useTheme();

    const [imageSource, setImageSource] = useState('/illustration_ia_colore_light.webp');

    useEffect(() => {
        setImageSource(theme === 'light' ? '/illustration_ia_colore_light.webp' : '/ilustration_n_et_b.webp');
    }, [theme]);


    return (
        <div className='relative w-full h-full overflow-visible'>
        <div className="heroVideoContainer relative w-full h-[50vh] overflow-hidden rounded-3xl shadow-lg border border-solid border-danger">
            <video key={heroVideoSource} autoPlay loop muted playsInline className="heroVideo w-full h-full object-cover">
                <source src={heroVideoSource} type="video/webm" />
                Votre navigateur ne supporte pas les vidéos.
            </video>
            
            <div className={` filter absolute top-0 left-0 w-full h-full ${theme === 'dark' ? 'bg-white opacity-[20%]' : 'bg-white opacity-[55%]'}`}>
               
            </div>
            <div className='title absolute top-0 left-0 w-full h-full flex justify-center items-start pl-6 flew-wrap flex-col translate-y-[10%]'>
                <h1 className=' text-4xl sm:text-5xl font-kanit font-bold pb-8 bg-[#F0EFEC] bg-clip-text text-transparent'>Développeuse web</h1>
                <div className='flex items-center'>
                <ChevronRight className='text-gray-800 text-xl sm:text-2xl font-syne font-[200]'/>
                <h2 className='text-gray-800 text-xl sm:text-2xl font-syne font-[200]'>Création de sites web sur mesure </h2>
                </div>
            </div>
        </div>
        <div className="absolute bottom-[-250px] sm:bottom-[-260px] md:bottom-[-350px] right-[0] flex w-[50%] sm:w-[40%]  md:w-[50%] overflow-x-visible overflow-y-hidden justify-center items-end">
                <Image src={imageSource} alt="illutration IA" width={400} height={400} className="object-cover"></Image>
              </div>
        
        </div>
    )
}
export default HeroVideo;