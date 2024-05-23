"use client"

import { CircleCheckBig } from "lucide-react";

export default function MonthlyServices() {


  return (
    <div>
      
    <h1 className="flex justify-center text-xl font-bold py-6">Votre assitance mensuelle personnalisée</h1>

    <div className="flex pb-6 flex-wrap w-full md:w-auto lg:h-full lg:p-8 justify-center sm:justify-end items-end">
        <p className="w-full flex justify-center text-xs pb-2"> à partir de : </p>
        <div className="group min-w-[120px] inline-block rounded-full bg-gradient-to-r from-green-200 via-orange-300 to-pink-300 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75">
            <span className="flex text-sm rounded-full bg-btnbackground px-4 py-2 font-medium group-hover:bg-transparent items-center justify-center flex-wrap">
                <p className="w-full flex justify-center text-lg"> 30€ /mois</p>
            </span>
        </div>
    </div>

    <div className="w-full border border-solid rounded-sm p-4 shadow-inner-halo-valid">
        <p className="text-base py-4 underline">Selon vos besoins : </p>

        <ul className="w-full flex flex-wrap">
            <li className="w-full flex text-base gap-2 pb-4 items-center">
                <CircleCheckBig className="flex icon-small text-green-400"/>
                <p className=" w-auto flex flex-wrap items-center justify-start">Maintenance de votre site web (mises à jour & sécurité )</p>
            </li>
            <li className="w-full flex text-base gap-2 pb-4 items-center">
                <CircleCheckBig className="icon-small text-green-400"/>
                <p className=" w-auto flex flex-wrap items-center justify-start">Ajout de contenu récurrent (rédaction de contenu, ajout de photos, vidéo ou fiches produit)</p>
            </li>
            <li className="w-full flex text-base gap-2 pb-4 items-center">
                <CircleCheckBig className="icon-small text-green-400"/>
                <p className=" w-auto flex flex-wrap items-center justify-start">Création de contenu pour vos réseaux sociaux</p>
            </li>

        </ul>

        
    </div>

</div>
  );
}
