import { ArrowUpRight } from "lucide-react";


export default function ContactDetails() {

    return (
        <div className=" w-[25em] mx-0 md:mx-auto mt-10 py-6 lg:p-6 bg-background/30 rounded-lg shadow-md border border-solid border-cardbordercolor">
            <div className='flex flex-wrap items-center justify-start mb-6'>
                <h2 className="flex w-full flex-wrap items-center justify-center md:text-xl lg:text-2xl font-bold text-gray-800">
                    Demande de devis
                </h2>
            </div>

            <div className="w-full pt-8 flex flex-wrap justify-evenly lg:justify-between">
                <div className="md:w-[40%] lg:w-[48%] flex flex-wrap">
                    <div className="flex w-full md:w-auto lg:h-full justify-center sm:justify-end items-end">
                        <a className="group h-[4rem] min-w-[140px] inline-block rounded-lg bg-gradient-to-r from-green-200 via-orange-300 to-pink-300 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75" href="#">
                            <span className="flex h-full text-sm rounded-lg bg-btnbackground md:px-2 lg:px-4 py-2 font-medium group-hover:bg-transparent items-center justify-center text-center">
                                Via le questionnaire en ligne
                            </span>
                        </a>
                    </div>
                </div>
                <div className="md:w-[40%] lg:w-[48%] flex flex-wrap">
                    <div className="flex w-full md:w-auto lg:h-full justify-center sm:justify-end items-end">
                        <a className="group h-[4rem] min-w-[140px] inline-block rounded-lg bg-gradient-to-r from-green-200 via-orange-300 to-pink-300 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75" href="#">
                            <span className="flex h-full text-sm rounded-lg bg-btnbackground md:px-2 lg:px-4 py-2 font-medium group-hover:bg-transparent items-center justify-center text-center">
                                Sur rendez-vous
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        
      </div>
    )
}