"use client"

import InfoButton from "@/components/ui/InfoButton";
import { CircleCheckBig, CirclePlus, Paintbrush, PiggyBank, SquareDashedBottomCode, SquareUserRound } from "lucide-react";


export default function PremiumOffer() {


  return (
    <div>
      
        <h3 className="flex justify-center text-xl font-bold py-6">Votre site web vitrine premium</h3>

        <p className="pb-6 text-sm">Idéal pour vous démarquer de la concurrence, avec un site web moderne, attractif et très performant.</p>


        <div className="flex pb-6 flex-wrap w-full md:w-auto lg:h-full lg:p-8 justify-center items-end">
            <p className="w-full flex justify-center text-xs pb-2"> à partir de : </p>
            <InfoButton buttonText={"1250€"}/>
        </div>

        <div className="border border-solid rounded-sm p-4 shadow-inner-halo-valid">
            <p className="text-base py-4 underline">Inclus : </p>

            <ul className="">
                <li className="w-full flex text-base gap-2 pb-4 items-start">
                    <CircleCheckBig className="flex icon-small text-green-400 mt-[4px]"/>
                    <p className=" w-auto flex flex-wrap items-center justify-start"> Création du webdesign entièrement personnalisable selon vos souhaits </p>
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
                <li className="w-full flex text-base gap-2 pb-4 items-center">
                    <CirclePlus className="icon-small text-pink-300"/>
                    <p className=" w-auto flex flex-wrap items-center justify-start">Rédaction du contenu</p>
                    </li>
                <li className="w-full flex text-base gap-2 pb-4 items-center">
                    <CirclePlus className="icon-small text-pink-300"/>
                    <p className=" w-auto flex flex-wrap items-center justify-start">Ajout d&#39;animations</p>
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
        <p className=" w-auto flex flex-wrap items-center justify-start">Votre site web est entièrement codé à la main</p>
        </li>
    <li className="w-full flex text-base gap-2 pb-4 items-start">
        <SquareUserRound className="icon-small text-blue-300 mt-[4px]"/>
        <p className=" w-auto flex flex-wrap items-center justify-start">Vous êtes propriétaire de votre site web</p>
        </li>
    <li className="w-full flex text-base gap-2 pb-4 items-start">
        <Paintbrush className="icon-small text-blue-300 mt-[4px]"/>
        <p className=" w-auto flex flex-wrap items-center justify-start">Possibilités de designs uniques et modernes</p>
        </li>
    <li className="w-full flex text-base gap-2 pb-4 items-center">
        <PiggyBank className="icon-small text-blue-300 "/>
        <p className=" w-auto flex flex-wrap items-center justify-start">Économique sur le long terme</p>
        </li>

</ul>
        </div>

    </div>
  );
}

