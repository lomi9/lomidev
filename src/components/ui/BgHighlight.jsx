import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const BgHighlight = ({ children, className }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  };

  const backgroundStyle = useTransform([mouseX, mouseY], ([x, y]) => ({
    background: `radial-gradient(circle at ${x}px ${y}px, var(--accent) 0%, transparent 70%)`
  }));

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      className={`relative flex items-center justify-center w-full h-full ${className}`}
      style={backgroundStyle}
    >
      {children}
    </motion.div>
  );
};

export default BgHighlight;
