"use client"

import { useTheme } from "@/contexts/ThemeContext";
import HomeTag from "./ui/HomeTag";
import Image from "next/image";


const items = [
    {
        id: 1,
        text: "Développeuse web indépendante, je privilégie le côté humain afin que votre site web reflète réellement votre image.",
        img : "/irridescent_process_1.png",
        alt : "Irridescent processus 1",
        number : "1",
        title : "Identité",
        tags: [
            { title : 'WebDesign', text: 'Conception personnalisée de votre site web'},
            { title : 'Charte Graphique', text: 'Élaboration de votre image de marque, possibilité de création d\'un logo unique'},
            { title : 'Veille concurentielle', text: 'Analyse de la concurrence pour vous démarquer'},
            { title : 'Contenu personnalisé', text: 'Rédaction de contenu reflètant votre image'},

        ]
    },
    {
        id: 2,
        text: "Je construis et optimise votre site web de A à Z selon vos besoins. À la livraison de votre site web, vous êtes entièrement propriétaire de celui-ci.",
        img : "/irridescent_process_2.png",
        alt : "Irridescent processus 2",
        number : "2",
        title : "Développement",
        tags: [
            { title : 'SEO', text: 'Référencement de votre site web sur les moteurs de recherche'},
            { title : 'RGPD', text: 'Conformité aux réglementations en vigueur'},
            { title : 'Performance', text: 'Optimisation de la vitesse de chargement'},
            { title : 'Accessibilité', text: 'Assurance de l\'accessibilité pour tous les utilisateurs'},
            { title : 'Responsive design', text: 'Site web adapté tous supports (ordinateur, tablette et mobile)'},
        ]
    },
    {
        id: 3,
        text: "Et après ? Je maintiens le bon fonctionnement et la sécurité de votre site web, et si besoin, j\'ajoute du contenu régulièrement. Je suis également disponible afin d'étoffer vos réseaux sociaux.",
        img :  "/irridescent_process_3.png",
        alt : "Irridescent processus 3",
        number : "3",
        title : "Support",
        tags: [
            { title : 'Outils de suivi', text: 'Analyse des performances et du trafic utilisateurs'},
            { title : 'Réseaux sociaux', text: 'Gestion de la promotion de votre site web et de votre activité'},
            { title : 'Sécurité', text: 'Surveillance et protection contre les menaces'},
            { title : 'Assistance', text: 'Disponibilité continue en cas de besoin d\'assistance'},
            { title : 'Maintenance', text: 'Mises à jour et résolutions de bugs'},
        ]
    },
]


const Presentation = () => {

    const { theme } = useTheme();


    return (
        <div className=" presentation-section bg-transparent flex flex-wrap w-full px-4 md:px-12 lg:px-18 gap-10">
                   
                {items.map((item) => (
                    <div className=" presentation-section-item flex flex-1 items-center justify-center" key={item.id}>
                        <div className="h-full w-full flex items-center justify-center">
                            <div className={` border-card-container flex flex-wrap w-full bg-opacity-30 border border-cardbordercolor rounded-3xl backdrop-blur-[25px] backdrop-saturate-[1.06] ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
                                <div className="content-container relative w-full h-full flex flex-wrap justify-start items-center pb-12 overflow-hidden rounded-3xl">
                                    <div className="image-container  w-[70%] absolute top-[-10%] right-[-15%] flex justify-end">
                                        <Image src={item.img} width={400} height={400} className=" object-contain" alt={item.alt}></Image>
                                    </div>
                                    <div className="w-[55%] min-h-[15em] flex flex-wrap items-center justify-center">
                                        <p className=" hidden w-full justify-center text-6xl items-center">{item.number}.</p>
                                        <p className="flex flex-wrap flex-col w-auto justify-center text-xl font-bold items-center">{item.title}
                                        <span className="flex w-[60%] bg-gradient-to-r from-green-100 via-orange-200 to-pink-200 h-[2px] rounded-3xl"></span></p>
                                    </div>
                                    <div className="w-full px-8 pt-4 pb-16 flex flex-wrap items-center">
                                        <p className="text-base font-thin">{item.text}</p>
                                    </div>
                                    <div className="px-8 pb-12 w-[100%] flex flex-wrap gap-4 justify-evenly">
                                                {item.tags.map((tag, index) => (
                                                    <HomeTag key={index} title={tag.title} text={tag.text} />
                                                ))}
                                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default Presentation;