import { Mail, Smartphone } from "lucide-react";
import CtaButton from "../../../components/ui/CtaButton";


export default function ContactDetails() {

    const calendly = "https://calendly.com/loriane-michel-pro/parlons-de-votre-projet-web";
    const typeform = "https://8yjdazjfoda.typeform.com/to/LNX3zQRj";

    return (
        <div className="devis-card w-[25em] h-[30em] mx-0 md:mx-auto mt-10 py-6 lg:p-6 bg-background/30 rounded-lg shadow-md border border-solid border-cardbordercolor flex flex-wrap content-between justify-center">
            <div className='flex flex-wrap items-center justify-start mb-6'>
                <h2 className="flex w-full flex-wrap items-center justify-center md:text-xl lg:text-2xl font-bold text-foreground">
                    Demande de devis
                </h2>
            </div>

            <div className="w-full pt-8 flex flex-wrap justify-center">
                <div className="w-full flex flex-wrap justify-center">
                    <CtaButton buttonText={"Sur rendez-vous"} link={calendly}/>
                </div>
                <div className="w-full pt-4 pb-6 flex flex-wrap justify-center">
                    <CtaButton buttonText={"Questionnaire en ligne"} link={typeform}/>
                </div>
            </div>

            <div className="flex flex-wrap h-[50%] content-evenly">
            <span className=" w-full h-[1px] bg-border rounded-3xl"></span>
                <div className=" pl-4 w-full flex flex-wrap items-center">
                    <Mail className="w-[1rem]"/>
                    <p className="text-base pl-4">contact@lomi-dev.com</p>
                </div>
                <div className="pl-4 w-full flex flex-wrap items-center">
                    <Smartphone className="w-[1rem]"/>
                    <p className="text-base pl-4">07 49 47 01 32</p>
                </div>
            </div>
        
      </div>
    )
}