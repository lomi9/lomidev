"use client";
import React from "react";

const InfoButton = ({ buttonText }) => {
  return (
    <div className="group min-w-[100px] inline-block rounded-full bg-gradient-to-r from-green-200 via-cyan-300 to-pink-300 p-[1px] focus:outline-none focus:ring active:text-opacity-75">
      <span className="flex text-[3.2vw] md:text-[2.5vw] lg:text-[1.3vw] font-thin px-4 py-2 lg:px-2 lg:py-1 rounded-full bg-cardbordercolor group-hover:bg-white/80 items-center justify-center">
        {buttonText}
      </span>
    </div>
  );
};

export default InfoButton;
