"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, CreditCard, Headphones, Lock, Star } from "lucide-react";

const carouselVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    transition: { duration: 0.5, ease: "easeInOut" }
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" }
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    transition: { duration: 0.5, ease: "easeInOut" }
  })
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const WhyUs = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const items = [
    { icon: <CreditCard className="h-16 " />, title: 'Paiement en 2 ou 3 fois', description: 'Profitez d\'un paiement échelonnée pour plus de flexibilité.' },
    { icon: <Lock className="h-16 " />, title: 'Propriété', description: 'Vous êtes propriétaire de votre site web, quelle que soit l\'option choisie.' },
    { icon: <Headphones className="h-16 " />, title: 'Support continue', description: 'Je suis disponible à tout moment pour vous aider en cas de besoin.' },
    { icon: <Star className="h-16 " />, title: 'Prestations de Qualité', description: 'Tous les services proposés sont garantis de qualité, avec une assurance de bon fonctionnement.' }
  ];

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000); // Défilement automatique toutes les 3 secondes
    return () => clearInterval(interval);
  }, [page]);

  return (
  <>
       {/* mobile */}
    <div className="mobile-slider-container md:hidden max-w-[400px] px-2 h-[370px] flex flex-wrap items-center relative w-full justify-center overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={carouselVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="info-item-why relative h-[350px] flex-wrap items-center border border-transparent px-12 py-8 flex flex-col justify-center border-solid "
        >
          <div className='flex flex-wrap justify-center'>
          {items[page % items.length].icon}
          </div>
          <h3 className="font-bold text-xl mb-6 flex flex-wrap justify-center text-center">{items[page % items.length].title}</h3>
          <p className="text-gray-700 dark:text-gray-400 text-center">{items[page % items.length].description}</p>
          <div className="absolute inset-x-0 h-px w-2/3 mx-auto -bottom-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-300 dark:via-cyan-200 to-transparent" />
          <div className="absolute inset-x-0 h-px w-2/3 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-300 dark:via-cyan-200 to-transparent" />
        </motion.div>
      </AnimatePresence>
      <button className="prev absolute left-[6px] top-1/2 z-20" onClick={() => paginate(-1)}><ArrowLeft/></button>
      <button className="next absolute right-[6px] top-1/2 z-20" onClick={() => paginate(1)}><ArrowRight/></button>
    
     </div>

     {/* desktop */}

     <div className="hidden md:flex max-w-[1300px] justify-center items-center w-full py-8">
      <div className="grid grid-cols-4 gap-4 w-full px-4">
        {items.map((item, index) => (
          <div key={index} className="flex relative pb-10 flex-col items-center justify-start text-center p-4 border border-transparent shadow-sm rounded-lg">
            {item.icon}
            <h3 className="mt-2 h-[25%] mb-1 text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
            <div className="absolute inset-x-0 h-px w-2/3 mx-auto -bottom-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-300 dark:via-cyan-200 to-transparent" />
            <div className="absolute inset-x-0 h-px w-2/3 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-300 dark:via-cyan-200 to-transparent" />
        
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default WhyUs;
