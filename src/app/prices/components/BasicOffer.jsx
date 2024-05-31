"use client"

import InfoButton from "@/components/ui/InfoButton";
import { CircleCheckBig, CirclePlus, PiggyBank, Settings, SquareDashedBottomCode, SquareUserRound } from "lucide-react";


export default function BasicOffer() {


  return (
    <div>
      
        <h1 className="flex justify-center text-xl font-bold py-6">Votre site web vitrine basique</h1>

        <p className="pb-6 text-sm">Idéal si vous débutez une activité, si vous souhaitez gérer vous-même votre site web, ou en cas de budget serré. </p>


        <div className="flex pb-6 flex-wrap w-full lg:h-full lg:p-8 justify-center items-end">
            <p className="w-full flex justify-center text-xs pb-2"> à partir de : </p>
            <InfoButton buttonText={"850€"}/>
        </div>

        <div className="border border-solid rounded-sm p-4 shadow-inner-halo-valid">
            <p className="text-base py-4 underline">Inclus : </p>

            <ul>
                
            <li className="w-full flex text-base gap-2 pb-4 items-center">
                    <CircleCheckBig className="flex icon-small text-green-400"/>
                    <p className=" w-auto flex flex-wrap items-center justify-start"> Création du webdesign</p>
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

            <li className="w-full flex text-base gap-2 pb-4 items-start">
                    <CirclePlus className="icon-small text-pink-300 mt-[4px]"/>
                    <p className=" w-auto flex flex-wrap items-center justify-start">Création de logo + charte graphique</p>
                    </li>
                <li className="w-full flex text-base gap-2 pb-4 items-start">
                    <CirclePlus className="icon-small text-pink-300 mt-[4px]"/>
                    <p className=" w-auto flex flex-wrap items-center justify-start">Rédaction du contenu</p>
                    </li>
                    <li className="w-full flex text-base gap-2 pb-4 items-start">
                    <CirclePlus className="icon-small text-pink-300 mt-[4px]"/>
                    <p className=" w-auto flex flex-wrap items-center justify-start">Création de votre fiche d&#39;établissement Google</p>
                    </li>
                    <li className="w-full flex text-base gap-2 pb-4 items-start">
                    <CirclePlus className="icon-small text-pink-300 mt-[4px]"/>
                    <p className=" w-auto flex flex-wrap items-center justify-start">Création de comptes réseaux sociaux</p>
                    </li>
            </ul>
        </div>

        <div className="border border-solid rounded-sm mt-4 p-4 shadow-inner-halo-unvalid">
        <p className="text-base py-4 underline"> Et, concrètement ? </p>

<ul>

<li className="w-full flex text-base gap-2 pb-4 items-start">
        <SquareDashedBottomCode className="icon-small text-blue-300 mt-[4px]"/>
        <p className=" w-auto flex flex-wrap items-center justify-start">Votre site web est conçu avec Wordpress</p>
        </li>
    <li className="w-full flex text-base gap-2 pb-4 items-start">
        <SquareUserRound className="icon-small text-blue-300 mt-[4px]"/>
        <p className=" w-auto flex flex-wrap items-center justify-start">Vous êtes propriétaire de votre site web</p>
        </li>
    <li className="w-full flex text-base gap-2 pb-4 items-start">
        <Settings className="icon-small text-blue-300 mt-[4px]"/>
        <p className=" w-auto flex flex-wrap items-center justify-start">Possibilité de gérer vous-même votre site web après livraison</p>
        </li>
    <li className="w-full flex text-base gap-2 pb-4 items-center">
        <PiggyBank className="icon-small text-blue-300 "/>
        <p className=" w-auto flex flex-wrap items-center justify-start">Économique dans le temps</p>
        </li>
</ul>
        </div>

    </div>
  );
}
