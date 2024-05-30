"use client"

import { useState } from 'react';

const HomeTag = ({ title, text }) => {

  const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div className="flex cursor-pointer">

                  <div 
                   onMouseEnter={() => setShowTooltip(true)}
                   onMouseLeave={() => setShowTooltip(false)}
                  className="group min-w-[100px] inline-block rounded-full bg-gradient-to-r from-green-200 via-orange-300 to-pink-300 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75">
                    <span className="flex text-[3.2vw] md:text-[2.5vw] lg:text-[1vw] font-thin px-4 py-2 lg:px-2 lg:py-1 rounded-full bg-cardbordercolor group-hover:bg-transparent items-center justify-center">
                      {title}
                    </span>
                    {showTooltip && (
                    <div className="absolute text-[3.2vw] md:text-[2.5vw] lg:text-[1vw] bg-white text-black p-2 rounded shadow-lg mt-2">
                        {text}
                    </div>
                )}
                  </div>
              </div>
    )
}

export default HomeTag