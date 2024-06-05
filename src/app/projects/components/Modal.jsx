import React from "react";
import { X } from "lucide-react";
import ImageCarousel from "./ImageCarousel"; 

const Modal = ({ product, onClose }) => {
  return (
    <div className="fixed w-screen h-screen inset-0 left-0 flex items-center justify-center z-50">
      <div className="modal_background fixed inset-0 bg-foreground opacity-60" onClick={onClose}></div>
      <div className="fixed px-8 rounded z-10 w-full sm:w-[80%]">
        <div className="w-full h-full flex flex-wrap rounded px-8 pb-8 pt-2 bg-background/60 backdrop-blur-[25px] backdrop-saturate-[1.06] border border-solid border-cardbordercolor/20">
          <div className="w-full flex pb-8 flex-wrap justify-between"> 
            <h2 className="text-2xl pt-6 font-bold">{product.title}</h2>
            <button
              className="bg-transparent text-foreground"
              onClick={onClose}
            >
              <X />
            </button>
          </div>

          <div className="modal-content flex flex-wrap w-full">
            <div className="w-full md:w-[50%]">
              <ImageCarousel images={product.images} /> 
            </div>
            <div className="modal-description mt-4 w-full md:w-[50%] sm:pl-8">
                <div className="w-full pb-8 flex flex-wrap">
                    <p className="relative font-semibold mr-4">
                        Offre:
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from transparent via-cyan-200 dark:via-teal-200 to-transparent"></span>
                    </p>
                    <p>{product.offer}</p>
                </div>

                <div className="w-full pb-8 flex flex-wrap">
                    <div>
                    <p className="relative font-semibold mr-4">
                    Prestation(s):
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from transparent via-orange-200 dark:via-orange-200 to-transparent"></span>
                    </p>
                </div>
                <ul className="list-disc list-inside">
                {product.prestations.map((prestation) => (
                  <li key={prestation.id}>{prestation.name}</li>
                ))}
              </ul>
              </div>
              <div className="w-full pb-8 flex flex-wrap">
                    <p className="relative font-semibold mr-4">
                    Description du projet :
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from transparent via-green-200 dark:via-green-200 to-transparent"></span>
                    </p>
                    <p>{product.description}</p>
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
