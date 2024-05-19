"use client"

import { Check, CheckCircle2 } from "lucide-react";


export default function BasicOffer() {


  return (
    <div>
      
        <h1 className="flex justify-center text-xl font-bold pt-6">Votre site web vitrine basique</h1>

        <p>Idéal si vous débutez une activité, si vous souhaitez gérer vous-même votre site web, ou en cas de budget serré. </p>


        <div className="flex justify-center items-center m-4">
            <div className="bg-white rounded-full px-6 py-2 shadow-lg border border-gray-200">
                <span className="text-lg font-semibold text-gray-700">850€</span>
            </div>
        </div>

        <div className="border border-solid rounded-sm p-4 m-2 shadow-inner-halo-valid">
            <p></p>

            <ul>
                <li className="flex"><Check/> Création du webdesign</li>
                <li className="flex"><Check/> Respect de votre charte graphique</li>
                <li className="flex"><Check/> Rédaction du contenu</li>
                <li className="flex"><Check/> Optimisation SEO</li>
                <li className="flex"><Check/> Sécurisation de votre site web</li>
                <li className="flex"><Check/> Outil de suivi</li>
                <li className="flex"><CheckCircle2/>Création de logo + charte graphique</li>
            </ul>
        </div>

        <div className="border border-solid rounded-sm p-4 m-2 shadow-inner-halo-unvalid">
        <p> Les avantages </p>

<ul>
    <li className="flex"><Check/>Vous êtes propriétaire de votre ste web</li>
    <li className="flex"><Check/>Possibilité de gérer vous même votre site web après livraison</li>
    <li className="flex"><Check/>Économique</li>
    <li className="flex"><Check/> </li>
    <li className="flex"><CheckCircle2/> </li>
</ul>
        </div>

    </div>
  );
}
