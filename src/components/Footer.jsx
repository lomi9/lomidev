"use client"
import { BadgeCheck, Mail, Phone } from "lucide-react";
import facebookIcon from "../../public/facebook_icon.png";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";


const Footer = () => {

    const facebook = facebookIcon;
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <footer className="relative bg-transparent mt-12 overflow-y-hidden max-h-[200px] sm:max-h-[300px]">
          <div className="relative bg-transparent text-white overflow-hidden rounded-t-full h-[700px]">
                {/* Halos de lumière */}
                    <div className="absolute inset-0 pt-[10px] sm:pt-[100px] flex justify-center">
                        <div className="absolute w-[8rem] h-[8rem] sm:w-[16rem] sm:h-[32rem] bg-gradient-to-r from-purple-400 to-blue-600 rounded-full opacity-50 filter blur-2xl sm:blur-3xl"></div>
                        <div className="absolute w-[10rem] h-[10rem] sm:w-[24rem] sm:h-[48rem] bg-gradient-to-r from-yellow-400 to-pink-600 rounded-full opacity-50 filter blur-xl sm:blur-3xl mt-10 sm:mt-24"></div>
                    </div>

                {/* Contenu du footer */}
                
            </div>
            <div className="absolute w-full bottom-0 left-0 z-20 rounded-t-[50px] bg-transparent px-0 sm:px-4 py-6 sm:py-12">
                    <div className=" w-full container flex justify-center flex-wrap mx-auto text-center">
                        <div className="flex mb-4 sm:mb-10 flex-wrap items-center bg-secondary/40 rounded-lg border-gray-200 px-4 py-2">
                            <BadgeCheck className=" w-[1rem] text-green-300"/>
                            <p className="font-kanit text-xs pl-2"> Délai actuel de prise en charge : 2 semaines </p>
                        </div>
                        <div className="w-full flex justify-center items-center space-x-6">
            <div
              className="relative flex flex-wrap justify-center items-center"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <a href="" className="hover:text-gray-400">
                <Image src={facebook} width={30} height={30} alt="facebook icon" />
              </a>
              {showTooltip && (
                <div className="absolute bottom-full mb-2 px-2 py-1 bg-gray-700 text-white text-xs rounded">
                  Bientôt
                </div>
              )}
            </div>
            <a href="tel:+123456789" className="hover:text-gray-400 flex flex-wrap justify-center items-center">
              <Phone />
            </a>
            <a href="mailto:contact@lomi-dev.com" className="hover:text-gray-400 flex flex-wrap justify-center items-center">
              <Mail />
            </a>
          </div>
                            <div className="w-full flex justify-center items-center space-x-6  mt-4 sm:mt-6">
                                <Link href="/mentions" className="hover:text-gray-400 text-xs flex flex-wrap justify-center items-center">Mentions légales</Link>
                                <p>-</p>
                                <a href="#" className="hover:text-gray-400 text-xs flex flex-wrap justify-center items-center">Conditions générales de vente</a>
                            </div>
                    </div>
                </div>
        </footer>
        )
}

export default Footer