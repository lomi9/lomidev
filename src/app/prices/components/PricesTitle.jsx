import React, { useState } from "react";
import { FlipWords } from "./FlipWords";
import { Info } from "lucide-react";

export function PricesTitle() {
  const words = ["raisonnables", "équilibrés", "transparents"];
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const showTooltip = () => setIsTooltipVisible(true);
  const hideTooltip = () => setIsTooltipVisible(false);

  return (
    <div className="h-auto w-full flex justify-start items-center px-4 py-[5vw]">
      <div className="text-2xl md:text-3xl lg:text-4xl w-full font-normal text-neutral-600 dark:text-neutral-400 relative">
        Des tarifs
        <FlipWords words={words} /> <br />
        pour un projet correspondant à vos attentes. 
        <span
          className="relative inline-block ml-2"
          onMouseEnter={showTooltip}
          onMouseLeave={hideTooltip}
          onClick={showTooltip}
        >
          <Info className="inline-block w-6 h-6 text-neutral-600 dark:text-neutral-400 cursor-pointer" />
          {isTooltipVisible && (
            <span className="absolute z-20  w-[400px] right-0 top-full mb-2 text-sm text-foreground bg-background border border-solid border-foreground/40 p-2 rounded">
           Je m&#39;engage à vous fournir un site web performant et à la hauteur de vos attentes. <br/> La création d&#39;un site web, quelle que soit la technologie utilisée, nécessite du temps, de l&#39;expertise, et de l&#39;investissement.  <br/> Par conséquent, les tarifs sont établis en fonction du temps estimé pour réaliser votre projet, et des coûts associés à sa mise en œuvre.
            </span>
          )}
        </span>
      </div>
    </div>
  );
}
