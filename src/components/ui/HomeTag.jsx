"use client"

import { useState } from 'react';

const HomeTag = ({ title, text }) => {

  const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div className="flex cursor-pointer justify-center">

                  <div 
                   onMouseEnter={() => setShowTooltip(true)}
                   onMouseLeave={() => setShowTooltip(false)}
                  className="group min-w-[100px] inline-block rounded-full bg-gradient-to-r from-green-200 via-orange-300 to-pink-300 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75">
                    <span className="flex text-sm md:text-lg xl:text-2xl rounded-full bg-btnbackground px-2 py-1 sm:px-4 sm:py-2 lg:px-6 lg:py-4 font-medium group-hover:bg-transparent items-center justify-center">
                      {title}
                    </span>
                    {showTooltip && (
                    <div className="absolute bg-white text-black p-2 rounded shadow-lg mt-2">
                        {text}
                    </div>
                )}
                  </div>
              </div>
    )
}

export default HomeTag