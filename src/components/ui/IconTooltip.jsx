import React, { useState } from 'react';
import { motion, useTransform, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

const IconTooltip = ({ icon: IconComponent, className, tooltipText }) => {
  const [hovered, setHovered] = useState(false);
  const springConfig = { stiffness: 300, damping: 20 };
  const x = useMotionValue(0);
  const rotate = useSpring(useTransform(x, [-50, 50], [-15, 15]), springConfig);
  const translateX = useSpring(useTransform(x, [-50, 50], [-10, 10]), springConfig);

  const handleMouseMove = (event) => {
    const halfWidth = event.currentTarget.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="p-[1px] bg-gradient-to-r from-[#A6F69D] via-[#59E9F6] to-[#F6B9E8] rounded-full">
        <div className="w-[50px] h-[50px] rounded-full bg-gradient-to-r from-cardradialgradientbg hover:from-background/60 to-darkercolor flex justify-center items-center hover:bg-background/60">
          <IconComponent className="text-foreground" />
        </div>
      </div>
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            style={{ translateX: translateX, rotate: rotate, whiteSpace: "nowrap" }}
            className="absolute bottom-full right-1/2 transform -translate-x-1/2 mb-2 flex flex-col items-center justify-center rounded-md bg-background dark:bg-[#050419] border border-solid border-cardbordercolor border-b-0 text-foreground z-50 shadow-xl px-4 py-2"
          >
            <div className="font-bold relative text-base">
              {tooltipText}
            </div>
            <div className='absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 dark:via-cyan-200 to-transparent '></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IconTooltip;
