"use client"

import { useState } from 'react';

const HomeTag = ({ title, text }) => {

  const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div className="flex cursor-pointer">

                  <div 
                   onMouseEnter={() => setShowTooltip(true)}
                   onMouseLeave={() => setShowTooltip(false)}
                  className="group relative min-w-[100px] inline-block rounded-full bg-gradient-to-r from-green-200 via-cyan-300 to-pink-300 p-[1px] focus:outline-none focus:ring active:text-opacity-75">
                    <span className="flex text-[3.2vw] md:text-[2.5vw] lg:text-[1vw] font-thin px-4 py-2 lg:px-2 lg:py-1 rounded-full bg-cardbordercolor group-hover:bg-background/70 items-center justify-center">
                      {title}
                    </span>
                    {showTooltip && (
                      <>
                    <div className="absolute bottom-[110%] w-[130%] left-[-10%] text-[3.2vw] md:text-[2.5vw] lg:text-[1vw] bg-background text-foreground p-2 rounded shadow-lg mt-2 border border-solid border-foreground/10">
                        {text}
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[85%] w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-background "></div>
                    </>
                )} 
                  </div>
              </div>
    )
}

export default HomeTag