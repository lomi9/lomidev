import Link from "next/link"


const Cgv = () => {
    
    return (

        <main className="flex flex-wrap mt-[12rem] px-12 max-w-[1000px]">
            <h1 className="text-3xl font-bold pb-8">
                Conditions générales de vente
            </h1>

            <div>
                <p className="text-sm italic">Dernière mise à jour : 20/06/2024</p>

            <article className="py-8">
                <h2 className="text-xl font-bold py-4">1. Description des services</h2>
                    <p className="text-sm">
                    Lomi Dev propose des services de développement et de création de sites web, de maintenance et de rédaction web. Chaque projet sera adapté aux spécifications fournies par le client, conformément à la proposition technique et commerciale validée par les deux parties.
                    </p>
                    
            </article>

            <article className="py-8">
                <h2 className="text-xl font-bold py-4">2. Modalités de paiement.</h2>
                <p className="text-sm">
                Deux options de paiement sont disponibles :
                </p>
                <ul className="text-sm py-4 pl-8 list-disc">
                        <li> 50% du montant total à la commande et 50% à la livraison du projet.</li>
                        <li>30% à la commande, 30% à la validation de la maquette et 40% à la livraison du projet.</li>
                </ul>
                <p className="text-sm">
                Les paiements peuvent être effectués par virement bancaire ou via Stripe. Les détails de paiement seront fournis dans la proposition commerciale. Le site ne sera pas mis en ligne tant que le paiement total n'aura pas été effectué.
                </p>

            </article>


            <article className="py-8">
                <h2 className="text-xl font-bold py-4">3. Livraison et Délais.</h2>
                <p className="text-sm">
                Les délais de livraison sont variables et seront déterminés en fonction des exigences spécifiques de chaque projet. Aucun engagement ferme de date de livraison n'est pris, en raison des délais variables induits par les révisions ou modifications requises par le client. La mise en ligne du site web est effectuée à réception du dernier paiement, sur l'hébergeur choisi par le client.
                </p>
            </article>

            <article className="py-8">
                <h2 className="text-xl font-bold py-4">4. Révisions et Approbations.</h2>
                <p className="text-sm">
                Le service inclut jusqu'à trois révisions ou modifications par projet avant la livraison finale. Toute demande supplémentaire de révision peut entraîner des frais additionnels qui seront discutés et convenus avec le client.</p>
            </article>

            <article className="py-8">
                <h2 className="text-xl font-bold py-4">5. Annulation du Projet.</h2>
                <p className="text-sm">
                En cas d'annulation du projet par le client, les travaux déjà accomplis peuvent être réutilisés ou détruits à notre discrétion, et aucun remboursement ne sera effectué pour les sommes déjà versées.
                </p>
            </article>

            <article className="py-8">
                <h2 className="text-xl font-bold py-4">6. Droits de Propriété Intellectuelle.</h2>
                <p className="text-sm">
                Les droits de propriété intellectuelle seront spécifiés individuellement pour chaque projet, en fonction des arrangements pris avec le client (cession des droits, licence d'utilisation, etc.).
                </p>
            </article>

            <article className="py-8">

                <h2 className="text-xl font-bold py-4">7. Clause de Confidentialité.</h2>
                <p className="text-sm">
                Lomi Dev s'engage à garder confidentielles toutes les informations fournies par le client et à les stocker de manière sécurisée. Aucune information ne sera partagée avec des tiers sans le consentement explicite du client.
                </p>

            </article>

            <article className="py-8">
            <h2 className="text-base font-bold py-4"> 8. Limitation de Responsabilités.</h2>
                <p className="text-sm">
                Lomi Dev ne peut être tenu pour responsable des dommages indirects ou consécutifs pouvant survenir de l'utilisation ou de l'incapacité à utiliser le site web livré. Notre responsabilité se limite strictement à la correction des défauts conformément aux spécifications du projet validé.
                </p>
            </article>

            <article className="py-8">
            <h2 className="text-base font-bold py-4"> 9.  RGPD et Protection des Données.</h2>
                <div className="text-sm">
                <p>Pour plus d'informations sur la gestion des données personnelles, veuillez consulter les </p> <Link href="/mentions" className="italic underline hover:text-gray-500">mentions légales.</Link>
                </div>

            </article>

            <article className="py-8">
                <h2 className="text-xl font-bold py-4">10.  Sous-traitance.</h2>
                <p className="text-sm">
                Lomi Dev se réserve le droit de faire appel à des sous-traitants pour certaines parties du projet (graphismes, parties juridiques...). Lomi Dev agira en tant qu'intermédiaire avec l'accord du client, en veillant à ce que la qualité et les conditions du projet soient respectées.</p>
            </article>

            <article className="py-8">
                <h2 className="text-xl font-bold py-4">11.  Gestion des Litiges.</h2>
                <p className="text-sm">
                En cas de litige, les parties s'efforceront de trouver une solution amiable. Faute d'accord, les litiges seront soumis aux tribunaux compétents selon la loi applicable.

                </p>
            </article>

            <article className="py-8">
                <h2 className="text-xl font-bold py-4">11.  Modifications des CGV.</h2>
                <p className="text-sm">
                Ces conditions générales de vente peuvent être modifiées à tout moment. Les modifications entreront en vigueur immédiatement après leur publication sur notre site web. Il est conseillé aux clients de consulter régulièrement les CGV pour rester informés de nos termes actuels.

                </p>
            </article>

            </div>

        </main>
    )
}

export default Cgv