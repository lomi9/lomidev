"use client"

import InfoButton from "@/components/ui/InfoButton";
import { CircleCheckBig, CirclePlus, Paintbrush, Settings, SquareDashedBottomCode, SquareUserRound } from "lucide-react";

export default function CustomSolutions() {


  return (
    <div>
      
    <h1 className="flex justify-center text-xl font-bold py-6">Votre site e-commerce ou solution personnalisée</h1>

    <p className="pb-6 text-sm">Idéal si vous souhaitez vendre des produits ou des services en ligne. </p>


    <div className="flex pb-6 flex-wrap w-full md:w-auto lg:h-full lg:p-8 justify-center items-end">
        <p className="w-full flex justify-center text-xs pb-2"> à partir de : </p>
        <InfoButton buttonText={"1850€"}/>
    </div>

    <div className="border border-solid rounded-sm p-4 shadow-inner-halo-valid">
        <p className="text-base py-4 underline">Inclus : </p>

        <ul className="">
            <li className="w-full flex text-base gap-2 pb-4 items-start">
                <CircleCheckBig className="flex icon-small text-green-400 mt-[4px]"/>
                <p className=" w-auto flex flex-wrap items-center justify-start">Création du webdesign entièrement personnalisable selon vos souhaits </p>
            </li>
            <li className="w-full flex text-base gap-2 pb-4 items-center">
                <CircleCheckBig className="icon-small text-green-400"/>
               <p className=" w-auto flex flex-wrap items-center justify-start">Ajout de produits ou services</p>
            </li>
            <li className="w-full flex text-base gap-2 pb-4 items-center">
                <CircleCheckBig className="icon-small text-green-400"/>
               <p className=" w-auto flex flex-wrap items-center justify-start">Gestion du panier client</p>
            </li>
            <li className="w-full flex text-base gap-2 pb-4 items-center">
                <CircleCheckBig className="icon-small text-green-400"/>
               <p className=" w-auto flex flex-wrap items-center justify-start">Base de données</p>
            </li>
            <li className="w-full flex text-base gap-2 pb-4 items-center">
                <CircleCheckBig className="icon-small text-green-400"/>
                <p className=" w-auto flex flex-wrap items-center justify-start">Respect de votre charte graphique</p>
            </li>
            <li className="w-full flex text-base gap-2 pb-4 items-center">
                <CircleCheckBig className="icon-small text-green-400"/>
                <p className=" w-auto flex flex-wrap items-center justify-start">Optimisation SEO</p>
            </li>
            <li className="w-full flex text-base gap-2 pb-4 items-center">
                <CircleCheckBig className="icon-small text-green-400"/>
                <p className=" w-auto flex flex-wrap items-center justify-start">Sécurisation de votre site web</p>
            </li>
            <li className="w-full flex text-base gap-2 pb-4 items-center">
                <CircleCheckBig className="icon-small text-green-400"/>
               <p className=" w-auto flex flex-wrap items-center justify-start">Outils de suivi</p>
            </li>

        </ul>

        <p className="text-md py-4 underline">En option : </p>

        <ul>

            <li className="w-full flex text-base gap-2 pb-4 items-center">
                <CirclePlus className="icon-small text-pink-300"/>
                <p className=" w-auto flex flex-wrap items-center justify-start">Création de logo + charte graphique</p>
                </li>
            <li className="w-full flex text-base gap-2 pb-4 items-start">
                <CirclePlus className="icon-small text-pink-300 mt-[4px]"/>
                <p className=" w-auto flex flex-wrap items-center justify-start">Ajout récurrent de produits ou services</p>
                </li>
            <li className="w-full flex text-base gap-2 pb-4 items-center">
                <CirclePlus className="icon-small text-pink-300"/>
                <p className=" w-auto flex flex-wrap items-center justify-start">Ajout d&#39;animations</p>
                </li>

        </ul>
    </div>

    <div className="border border-solid rounded-sm mt-4 p-4 shadow-inner-halo-unvalid">
    <p className="text-base py-4 underline"> Et, concrètement ? </p>

<ul>
<li className="w-full flex text-base gap-2 pb-4 items-start">
    <SquareDashedBottomCode className="icon-small text-blue-300 mt-[4px]"/>
    <p className=" w-auto flex flex-wrap items-center justify-start">Votre site web est conçu avec WooComerce, Prestashop ou codé à la main selon vos préférences.</p>
    </li>
<li className="w-full flex text-base gap-2 pb-4 items-start">
    <SquareUserRound className="icon-small text-blue-300 mt-[4px]"/>
    <p className=" w-auto flex flex-wrap items-center justify-start">Vous êtes propriétaire de votre site web</p>
    </li>
<li className="w-full flex text-base gap-2 pb-4 items-center">
    <Paintbrush className="icon-small text-blue-300 "/>
    <p className=" w-auto flex flex-wrap items-center justify-start">Possibilité infinie de designs uniques</p>
    </li>
    <li className="w-full flex text-base gap-2 pb-4 items-center">
    <Settings className="icon-small text-blue-300 "/>
    <p className=" w-auto flex flex-wrap items-center justify-start">Possibilité de gérer vous-même votre site web après livraison</p>
    </li>

</ul>
    </div>

</div>
  );
}
