import React, { useEffect } from "react";
import { ArrowUpRight, X } from "lucide-react";
import ImageCarousel from "./ImageCarousel"; 
import Link from "next/link";

const Modal = ({ product, onClose }) => {

  useEffect(() => {
    // Ajoute la classe no-scroll au body lorsque la modal est ouverte
    document.body.classList.add('no-scroll');
    // Retire la classe no-scroll du body lorsque la modal est fermée
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return (
    <section className="modal-screen-container flex flex-wrap fixed w-screen h-screen top-0 left-0 items-center justify-center z-50">
      <div className="modal-screen-background relative w-full h-full flex flex-wrap items-center bg-foreground opacity-60" onClick={onClose}></div>
      <div className="modal-screen-position mt-4 h-[85vh] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-2 sm:px-8 pb-8 rounded z-10 w-full">
        <div className="relative modal-background overflow-hidden mt-4 w-full h-[85vh] flex flex-wrap rounded px-8 pb-8 pt-2 border border-solid border-cardbordercolor/20">
          <div className="absolute overflow-hidden w-full h-full top-0 left-0 rounded bg-background/60 backdrop-blur-[25px] backdrop-saturate-[1.06]"></div>
          <div className="modal-title-container pt-12 sm:pt-6 relative w-full flex pb-8 flex-wrap justify-between lg:justify-center items-center"> 
            <div className="w-full flex flex-wrap justify-center items-center">
              <h2 className="modal-title text-2xl font-bold pr-2 sm:pr-4 z-20">{product.title}</h2>
              <a href={product.link}><ArrowUpRight/></a>
            </div>
            <div className="w-full flex flex-wrap justify-center items-center py-2">
              <p className="flex flex-wrap justify-center items-center italic tex-xs text-red-400">{product.build}</p>
            </div>
            <button
              className="absolute top-5 right-0 modal-close bg-transparent text-foreground z-20"
              onClick={onClose}
            >
              <X />
            </button>
          </div>
          <div className="modal-content pb-20 max-h-[70vh] overflow-y-scroll flex flex-wrap w-full">
            <div className="modal-carousel-container w-full md:w-[50%] ">
              <ImageCarousel images={product.images}/> 
            </div>
            <div className="modal-description flex flex-wrap mt-4 w-full md:w-[50%] sm:pl-8">
              <div className="w-full pb-8 flex flex-wrap">
                <div className="pb-8">
                  <p className="relative font-semibold mr-4">
                    Offre:
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from transparent via-cyan-200 dark:via-teal-200 to-transparent"></span>
                  </p>
                </div>
                <Link href={`/prices?tab=${encodeURIComponent(product.tabName)}`} className="z-20">{product.offer}</Link>
              </div>
              <div className="w-full pb-8 flex flex-wrap">
                <div className="pb-4 z-20">
                  <p className="relative font-semibold z-20 mr-4">
                    Prestation(s):
                    <span className="absolute z-20 bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from transparent via-orange-200 dark:via-orange-200 to-transparent"></span>
                  </p>
                </div>
                <ul className="list-disc list-inside z-20">
                  {product.prestations.map((prestation) => (
                    <li key={prestation.id}>{prestation.name}</li> // Assurez-vous que prestation.id est unique
                  ))}
                </ul>
              </div>
              <div className="w-full pb-8 flex flex-wrap">
                <div className="pb-8">
                  <p className="relative font-semibold mr-4">
                    Description du projet :
                    <span className=" z-20 absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from transparent via-green-200 dark:via-green-200 to-transparent"></span>
                  </p>
                </div>
                <p className="z-20">{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
