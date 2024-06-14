"use client"

import InfoButton from "@/components/ui/InfoButton";
import { CircleCheckBig } from "lucide-react";

export default function MonthlyServices() {


  return (
    <div>
      
    <h3 className="flex justify-center text-xl font-bold py-6">Votre assitance mensuelle personnalisée</h3>

    <div className="flex pb-6 flex-wrap w-full md:w-auto lg:h-full lg:p-8 justify-center items-end">
        <p className="w-full flex justify-center text-xs pb-2"> à partir de : </p>
        <InfoButton buttonText={"35€"}/>
    </div>

    <div className="border border-solid rounded-sm p-4 shadow-inner-halo-valid">
        <p className="text-base py-4 underline">Selon vos besoins : </p>

        <ul className="">
            <li className="w-full flex text-base gap-2 pb-4 items-start">
                <CircleCheckBig className="flex icon-small text-green-400 mt-[4px]"/>
                <p className=" w-auto flex flex-wrap items-center justify-start">Maintenance de votre site web (mises à jour & sécurité )</p>
            </li>
            <li className="w-full flex text-base gap-2 pb-4 items-start">
                <CircleCheckBig className="icon-small text-green-400 mt-[4px]"/>
                <p className=" w-auto flex flex-wrap items-center justify-start">Ajout de contenu récurrent (rédaction de contenu, ajout de photos, vidéos ou fiches produit)</p>
            </li>
            <li className="w-full flex text-base gap-2 pb-4 items-start">
                <CircleCheckBig className="icon-small text-green-400 mt-[4px]"/>
                <p className=" w-auto flex flex-wrap items-center justify-start">Création de contenu pour vos réseaux sociaux</p>
            </li>

        </ul>

        
    </div>

</div>
  );
}
