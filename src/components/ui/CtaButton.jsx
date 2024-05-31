"use client";
import { ArrowUpRight } from "lucide-react";
import React from "react";

const CtaButton = ( {buttonText} ) => {
  return (
        <button className="relative min-w-[140px] inline-flex h-auto overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-teal-100">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#A6F69D_0%,#F6B9E8_50%,#59E9F6_100%)]" />
          <span className="flex gap-4 h-full w-full cursor-pointer items-center justify-center rounded-full bg-btnbackground hover:bg-white/70 hover:text-btnactivetext px-2 py-1 text-sm font-medium text-foreground backdrop-blur-3xl">
            {buttonText}
            <ArrowUpRight className="w-[15%]"/>
          </span>
        </button>
  );
};

export default CtaButton;
