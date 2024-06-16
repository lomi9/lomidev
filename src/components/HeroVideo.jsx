"use client"
import { useEffect, useState } from "react";
import { useTheme } from '../contexts/ThemeContext';
import Image from "next/image";
import { ChevronRight } from 'lucide-react';


const HeroVideo = () => {

        const { theme } = useTheme();

        // Définition des sources de base pour les vidéos
        const lightVideoBase = "/hero_videos/hero_video";
        const darkVideoBase = "/hero_videos/night_sky";
        const lightPosterBase = "/hero_videos/public/poster_video_light";
        const darkPosterBase = "/hero_videos/public/poster_video_dark";
    

        const [imageSource, setImageSource] = useState('/illustration_ia_colore_light.webp');
        const [videoBase, setVideoBase] = useState(lightVideoBase);
        const [posterBase, setPosterBase] = useState(lightPosterBase + '_720p.webp');

    
        useEffect(() => {
            if (theme === 'light') {
                setVideoBase(lightVideoBase);
                setPosterBase(lightPosterBase + '_720p.webp');
                setImageSource('/illustration_ia_colore_light.webp');
            } else {
                setVideoBase(darkVideoBase);
                setPosterBase(darkPosterBase + '_720p.webp');
                setImageSource('/ilustration_n_et_b.webp');
            }
        }, [theme]);
    

    return (
        <div className='relative w-full h-full overflow-visible'>
        <div className="heroVideoContainer relative w-full h-[40vh] sm:h-[50vh] overflow-hidden rounded-3xl shadow-lg border border-solid border-darkercolor/20">
        <video 
                    key={videoBase}
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="heroVideo w-full h-full object-cover"
                    poster={posterBase}
                >
                    <source src={`${videoBase}_360p.mp4`} type="video/mp4" media="all and (max-width: 599px)" />
                    <source src={`${videoBase}_720p.mp4`} type="video/mp4" media="all and (min-width: 600px) and (max-width: 1023px)" />
                    <source src={`${videoBase}.mp4`} type="video/mp4" media="all and (min-width: 1024px)" />
                    Votre navigateur ne supporte pas les vidéos.
                </video>
            
            <div className={` filter absolute top-0 left-0 w-full h-full ${theme === 'dark' ? 'bg-black opacity-[20%]' : 'bg-white opacity-[55%]'}`}>
               
            </div>
            <div className='title absolute top-0 left-0 w-full h-full flex justify-center items-start pl-2 sm:pl-6 flew-wrap flex-col'>
                <h1 className='antialiased  text-3xl sm:text-5xl font-kanit font-bold pt-4 sm:pt-0 pb-2 sm:pb-8 bg-gradient-to-r from-green-100 via-orange-100 to-pink-100 p-[2px] bg-clip-text text-transparent'>
                    Développeuse web
                </h1>
                <div className='flex items-center'>
                <ChevronRight className='text-foreground text-xl sm:text-2xl font-syne font-[200]'/>
                <h2 className='text-foreground font-[600] antialiased  text-lg sm:text-2xl syne '>
                    Création de sites web sur mesure
                    </h2>
                </div>
            </div>
        </div>
        <div className="absolute bottom-[-120px] sm:bottom-[-260px] md:bottom-[-330px] xl:bottom-[-275px] right-[25%] sm:right-0 xl:right-[8%] flex w-[50%] sm:w-[40%]  md:w-[50%] xl:w-[360px] overflow-x-visible overflow-y-hidden justify-center items-end">
                <Image src={imageSource} alt="illutration IA" width={400} height={400} className="object-cover"></Image>
              </div>
        
        </div>
    )
}
export default HeroVideo;