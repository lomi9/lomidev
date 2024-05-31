import { ArrowUpRight } from "lucide-react";
import CtaButton from "../../../components/ui/CtaButton";


export default function ContactDetails() {

    return (
        <div className=" w-[25em] mx-0 md:mx-auto mt-10 py-6 lg:p-6 bg-background/30 rounded-lg shadow-md border border-solid border-cardbordercolor">
            <div className='flex flex-wrap items-center justify-start mb-6'>
                <h2 className="flex w-full flex-wrap items-center justify-center md:text-xl lg:text-2xl font-bold text-foreground">
                    Demande de devis
                </h2>
            </div>

            <div className="w-full pt-8 flex flex-wrap justify-evenly lg:justify-between">
                <div className="md:w-[40%] lg:w-[48%] flex flex-wrap">
                    <CtaButton buttonText={"Via le questionnaire en ligne"}/>
                </div>
                <div className="md:w-[40%] lg:w-[48%] flex flex-wrap">
                    <CtaButton buttonText={"Sur rendez-vous"}/>
                </div>
            </div>
        
      </div>
    )
}