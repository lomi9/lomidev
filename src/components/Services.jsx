"use client"
import { useTheme } from '../contexts/ThemeContext';
import question from "../assets/question-mark.svg";
import Image from 'next/image';

const Services = () => {

    const { theme } = useTheme();
    const questionImage = question;


    return (
        <div className={`w-full h-[80vh] bg-opacity-30 border border-cardbordercolor rounded-3xl backdrop-blur-[25px] backdrop-saturate-[1.06] ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
            
            Services
            
            
            <h1 className=' section-presentation-title py-6 text-[2em] flex flex-wrap color-foreground justify-center'>Votre site web, à votre image</h1>
                <div className='section-presentation-layout flex justify-between items-stretch w-full gap-6'>
                    <article className='relative flex-1 h-[200px] bg-transparent overflow-hidden'>
                        <Image src={questionImage} width={50} height={50} alt='question-mark' className='absolute object-contain w-[80%] h-[120%] right-[-25%] top-[-20%] text-blue-500'/>
                        <div className='filter absolute w-full h-full bg-red-500 opacity-20'></div>

                    </article>
                    <article className='flex-1 h-[200px] bg-green-300'>

                    </article>
                    <article className='flex-1 h-[200px] bg-blue-300'>

                    </article>
                </div>
            <p>Développeuse web indépendante, je privilégie le côté humain pour que votre site web reflète votre image.</p>
            <p>Je construit et optimise votre site web de A à Z selon vos besoins. À la livraison de votre site web, vous êtes entièrement propriétaire de celui-ci. </p>
            <p>Et après ? je maintien le bon fonctionnement et la sécurité de votre site web, et si besoin, j'ajoute du contenu régulièrement. Je suis également disponible afin d'étoffer vos réseaux sociaux.</p>
    
    </div>
    )

}

export default Services;