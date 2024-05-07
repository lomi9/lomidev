"use client"
import HeroVideo from "./HeroVideo";
import { useTheme } from '../contexts/ThemeContext';
import { ArrowUpRight, AtSign, BookType, CodeXml, Network, ShieldCheck } from "lucide-react";



const Hero = () => {


  const { theme } = useTheme();

    return (
        <>
        <div className="hero-grid w-screen h-screen">

          <div className="grid grid-cols-4 xl:grid-cols-5 grid-rows-3 gap-8 border border-solid border-transparent">
            <div className="flex div1 col-start-1 col-end-5 row-start-1 row-end-3">
              <HeroVideo/>
            </div>

            <div className={`div2 flex col-start-1 col-end-3 row-start-3 row-end-4 items-center justify-between bg-opacity-30 border border-cardbordercolor rounded-3xl backdrop-blur-[25px] backdrop-saturate-[1.06] ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
              
              <div>
                <p className="font-bold p-2 pl-8" >Obtenez un devis gratuit !</p>
                <p className="font-thin pt-2 pl-8"> Présentez-moi votre projet via ce petit questionnaire :</p>
              </div>
              <div className="flex h-full p-8 justify-end items-end">

<a
  className="group min-w-[140px] inline-block rounded-full bg-gradient-to-r from-green-200 via-orange-300 to-pink-300 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
  href="#"
>
  <span
    className="flex rounded-full bg-btnbackground px-4 py-2 text-sm font-medium group-hover:bg-transparent items-center justify-between"
  >
    C&apos;est parti ! <ArrowUpRight className="w-[20%]"/>
  </span>
</a>
              </div>
              </div>

            <div className="flex div3 col-start-2 col-end-5 row-start-3 row-end-4 ">
              
            </div>
            <div className={` hidden xl:flex div4 col-start-5 col-end-6 row-start-1 row-end-4 bg-opacity-30 border border-cardbordercolor rounded-3xl backdrop-blur-[25px] backdrop-saturate-[1.06] overflow-hidden justify-end items-center ${theme === 'dark' ? 'bg-black ' : 'bg-white'}`}>
              
              <div className="relative w-[180px] h-[358px] rounded-l-[200px]">
                <div className="w-full h-full card-radial-gradient bg-cardradialgradientbg rounded-l-[200px]">
                </div>

                <div className="icon1 absolute top-[-27px] right-[25px] p-[3px] bg-gradient-to-r from-green-200 via-orange-300 to-pink-300 rounded-full">
                  <div className="w-[50px] h-[50px] rounded-full bg-gradient-to-r from-cardradialgradientbg to-darkercolor ">
                    <p className=" h-full w-full flex text-accent-foreground justify-center items-center">
                      <AtSign/>
                    </p>
                  </div>
                </div>
                
                <div className="icon2 absolute top-[37px] right-[120px] p-[3px] bg-gradient-to-r from-green-200 via-orange-300 to-pink-300 rounded-full">
                  <div className="w-[50px] h-[50px] rounded-full bg-gradient-to-r from-cardradialgradientbg to-darkercolor ">
                  <p className=" h-full w-full flex text-accent-foreground justify-center items-center">
                      <BookType/>
                    </p>
                  </div>
                </div>

                <div className="icon3 absolute top-[155px] right-[155px] p-[3px] bg-gradient-to-r from-green-200 via-orange-300 to-pink-300 rounded-full">
                  <div className="w-[50px] h-[50px] rounded-full bg-gradient-to-r from-cardradialgradientbg to-darkercolor ">
                  <p className=" h-full w-full text-accent-foreground flex justify-center items-center">
                      <CodeXml/>
                    </p>
                  </div>
                </div>

                <div className="icon4 absolute bottom-[37px] right-[120px] p-[3px] bg-gradient-to-r from-green-200 via-orange-300 to-pink-300 rounded-full">
                  <div className="w-[50px] h-[50px] rounded-full bg-gradient-to-r from-cardradialgradientbg to-darkercolor ">
                  <p className=" h-full w-full text-accent-foreground flex justify-center items-center">
                      <Network/>
                    </p>
                  </div>
                </div>

                <div className="icon5 absolute bottom-[-27px] right-[25px] p-[3px] bg-gradient-to-r from-green-200 via-orange-300 to-pink-300 rounded-full">
                  <div className="w-[50px] h-[50px] rounded-full bg-gradient-to-r from-cardradialgradientbg to-darkercolor ">
                  <p className=" h-full w-full text-accent-foreground flex justify-center items-center">
                      <ShieldCheck/>
                    </p>
                  </div>
                </div>

              </div>


              </div>
          </div>

        </div>
    <div className="hidden">
      {/* TEXT CONTAINER*/}
      <div className=" h-auto lg:h-full lg:w-1/2 flex flex-col gap-4 lg:gap-8 items-center lg:justify-center">
        {/* TITLE */}
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">LOMI WEB - Développeuse web - Créatrice de sites web</h1>
        {/* DESC */}
        <p className="md:text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, quod vero incidunt natus eius ullam expedita! In consectetur minima dolor impedit cumque maxime enim eum amet odio perspiciatis, earum excepturi!</p>
        {/* BUTTONS */}
        <div className="flex gap-4">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">Tarifs</button>
          <button className="p-4 rounded-lg ring-1 ring-black">Demander un devis</button>
        </div>

      </div>
      </div>
        </>
    )
}

export default Hero