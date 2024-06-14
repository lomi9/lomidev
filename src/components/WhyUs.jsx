import { CreditCard, Headphones, Lock, Star } from "lucide-react"

const WhyUs = () => {


    return (

     <div className="flex flex-wrap w-full pt-[5rem] justify-center">
            <section id="info-section" className="bg-transparent px-4 md:px-12 lg:px-18">
      <div className="container-why mx-auto grid grid-cols-1 sm:grid-cols-2 text-center relative">
        <div className="info-item-why px-12 py-8 flex flex-col items-center border-gradient">
        <CreditCard className="h-16 " />
          <h3 className="font-bold text-xl mb-2">Paiement en 2 ou 3 fois</h3>
          <p className="text-gray-700 dark:text-gray-400">Profitez d&#39;un paiement échelonnée pour plus de flexibilité.</p>
        </div>
        <div className="info-item-why relative px-12 py-8 flex flex-col items-center border-gradient">
        <div className="absolute left-0 top-0 bottom-0 h-full w-[2px] bg-gradient-to-t from-transparent via-cyan-500 dark:via-teal-300 to-transparent"></div>
          <Lock className="h-16 " />
          <h3 className="font-bold text-xl mb-2">Sécurité de vos données</h3>
          <p className="text-gray-700 dark:text-gray-400">Toutes vos transactions sont sécurisées avec les dernières technologies de cryptage.</p>
        </div>
        <div className="info-item-why relative px-12 py-8 flex flex-col items-center border-gradient">
        <div className="absolute top-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 dark:via-teal-300 to-transparent"></div>
          <Headphones className="h-16 " />
          <h3 className="font-bold text-xl mb-2">Support continue</h3>
          <p className="text-gray-700 dark:text-gray-400">Je suis disponible à tout moment pour vous aider, quelquesoit l&#39;option choisie.</p>
        </div>
        <div className="info-item-why relative px-12 py-8 flex flex-col items-center border-gradient">
        <div className="absolute top-0  w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 dark:via-teal-300 to-transparent"></div>
        <div className="absolute left-0 top-0 bottom-0 h-full w-[2px] bg-gradient-to-t from-transparent via-cyan-500 dark:via-teal-300 to-transparent"></div>
         <Star className="h-16 " />
          <h3 className="font-bold text-xl mb-2">Prestations de Qualité</h3>
          <p className="text-gray-700 dark:text-gray-400">Tous les services proposés sont garantis de qualité, avec une assurance de bon fonctionnement.</p>
        </div>

      </div>
    </section>
        
    
    </div>

    )
}

export default WhyUs