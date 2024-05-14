"use client"

import { useRef } from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import HomeTag from "./ui/HomeTag";
import Image from "next/image";


const items = [
    {
        id: 1,
        text: "Développeuse web indépendante, je privilégie le côté humain afin que votre site web reflète réellement votre image.",
        img : "/irridescent-shape-twisted.png",
        alt : "Irridescent IA",
        number : "1",
        tags: [
            { title : 'WebDesign', text: 'Référencement sur les moteurs de recherche'},
            { title : 'Logo', text: 'Respect des legilations en vigueur'},
            { title : 'Charte Grapgique', text: 'Respect des legilations en vigueur'},
            { title : 'Veille concurentielle', text: 'Pour vous démarquer de la concurrence locale'},
        ]
    },
    {
        id: 2,
        text: "Je construit et optimise votre site web de A à Z selon vos besoins. À la livraison de votre site web, vous êtes entièrement propriétaire de celui-ci.",
        img : "/ice_ball.png",
        alt : "glass bubble IA",
        number : "2",
        tags: [
            { title : 'SEO', text: 'Référencement sur les moteurs de recherche'},
            { title : 'RGPD', text: 'Respect des legilations en vigueur'},
        ]
    },
    {
        id: 3,
        text: "Et après ? je maintien le bon fonctionnement et la sécurité de votre site web, et si besoin, j'ajoute du contenu régulièrement. Je suis également disponible afin d'étoffer vos réseaux sociaux.",
        img :  "/irridescent-flash.png",
        alt : "Irridescent flash IA",
        number : "3",
        tags: [
            { title : 'Maintenance', text: 'Mises à jour et résolutions de bugs'},
            { title : 'Réseaux sociaux', text: 'Gestion de la promotion de votre site web'},
        ]
    },
]


const Presentation = () => {

    const { theme } = useTheme();
    const ref = useRef();
    const {scrollYProgress} = useScroll({target:ref});
    const x = useTransform(scrollYProgress, [0,1], ["-25%","-75%"]);

    const tags = {
        tags: [
            { title : 'Webdesign', text: 'Référencement sur les moteurs de recherche'},
            { title : 'Unique', text: 'Respect des legilations en vigueur'},
        ]
    }

    return (
        <div ref={ref} className=" h-[600vh] bg-transparent">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">

                <motion.div style={{ x }} className="flex">
                    <div className=" px-4 h-screen w-screen flex items-center justify-center">
                   
                    </div>
                {items.map((item) => (
                    <div className=" horizontal-scroll-container h-screen  w-screen flex items-center justify-center" key={item.id}>
                        <div className=" px-4 md:px-12 lg:px-18 h-full w-full flex items-center justify-center">
                            <div className={` border-card-container flex flex-wrap w-full h-[75vh] bg-opacity-30 border border-cardbordercolor rounded-3xl backdrop-blur-[25px] backdrop-saturate-[1.06] ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
                                <div className="content-container relative w-full h-full flex flex-wrap justify-start items-center content-between md:content-around px-8 pb-8 overflow-hidden rounded-3xl">
                                    <div className="image-container absolute top-[-10%] right-[-10%] md:right-[-5%] flex justify-end h-[45%] sm:h-[55%] md:h-[60%] lg:h-[66%] rounded-3xl">
                                        <Image src={item.img} width={400} height={400} className=" object-contain" alt={item.alt}></Image>
                                    </div>
                                    <div className="w-[60%] min-h-[35%] sm:min-h-[45%] md:min-h-[30%] lg:min-h-[20%] flex flex-wrap items-center">
                                        <p className="flex w-full justify-center text-6xl items-center">{item.number}.</p>
                                    </div>
                                    <div className="w-full md:w-[65%] flex flex-wrap items-center">
                                        <p className="text-lg sm:text-[3vw] font-thin md:leading-[4vw] xl:leading-[4vw]">{item.text}</p>
                                    </div>
                                    <div className="w-full md:max-w-[65%] flex flex-wrap flex-row justify-evenly gap-4">
                                                {item.tags.map((tag, index) => (
                                                    <HomeTag key={index} title={tag.title} text={tag.text} />
                                                ))}
                                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Presentation;
