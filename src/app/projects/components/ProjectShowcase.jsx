"use client"

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Header from "./ProjectsHeader";
import ProductCard from "./ProductCard";
import Modal from "./Modal";

const ProjectShowcase = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  useEffect(() => {
    if (selectedProduct) {
      // Disable scrolling when the modal is open
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling when the modal is closed
      document.body.style.overflow = "auto";
    }
  }, [selectedProduct]);

  return (
    <>
      <div
        ref={ref}
        className="h-[350vh] sm:h-[420vh] md:h-[420vh] lg:h-[420vh] xl:h-[380vh] 2xl:h-[350vh] py-40 md:py-32 lg:py-32 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
      >
        <Header />
        <motion.div
          style={{
            rotateX,
            rotateZ,
            translateY,
            opacity,
          }}
          className=""
        >
          <div className="relative w-full bg-transparent flex flex-wrap justify-center my-10">
            <h2 className="text-2xl antialiased font-semibold py-8 ">Casa Marerio</h2>
            <span className="absolute left-20 right-20 bottom-0 h-[2px] dark:h-[1px] bg-gradient-to-r from-green-300 via-pink-300 to-cyan-400 rounded-3xl"></span>
          </div>
          <motion.div className="flex flex-row-reverse space-x-reverse sm:space-x-reverse md:space-x-reverse space-x-4 sm:space-x-10 md:space-x-20 mb-10 sm:mb-20">
            {firstRow.map((product, index) => (
              <ProductCard
                product={product}
                translate={translateX}
                key={product.id || `${product.title}-${index}`}
                onClick={() => openModal(product)}
              />
            ))}
          </motion.div>
          <div className="relative w-full bg-transparent flex flex-wrap justify-center my-10">
            <h2 className="text-2xl antialiased font-semibold py-8 ">Halima Garden</h2>
            <span className="absolute left-20 right-20 bottom-0 h-[2px] dark:h-[1px] bg-gradient-to-r from-green-300 via-pink-300 to-cyan-400 rounded-3xl"></span>
          </div>
          <motion.div className="flex flex-row space-x-4 sm:space-x-10 md:space-x-20 mb-10 sm:mb-20">
            {secondRow.map((product, index) => (
              <ProductCard
                product={product}
                translate={translateXReverse}
                key={product.id || `${product.title}-${index}`}
                onClick={() => openModal(product)}
              />
            ))}
          </motion.div>
          <div className="relative w-full bg-transparent flex flex-wrap justify-center my-10">
            <h2 className="text-2xl antialiased font-semibold py-8 ">Bel Horizon</h2>
            <span className="absolute left-[10rem] right-[10rem] bottom-0 h-[1px] dark:h-[1px] bg-gradient-to-r from-green-300 via-pink-300 to-cyan-400 rounded-3xl"></span>
          </div>
          <motion.div className="flex flex-row-reverse space-x-reverse sm:space-x-reverse md:space-x-reverse space-x-4 sm:space-x-10 md:space-x-20 mb-10 sm:mb-20">
            {thirdRow.map((product, index) => (
              <ProductCard
                product={product}
                translate={translateX}
                key={product.id || `${product.title}-${index}`}
                onClick={() => openModal(product)}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
      {selectedProduct && (
        <Modal product={selectedProduct} onClose={closeModal} />
      )}
    </>
  );
};

export default ProjectShowcase;
