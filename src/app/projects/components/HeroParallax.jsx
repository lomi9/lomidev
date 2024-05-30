"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HeroParallax = ({ products }) => {
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

  return (
    <div
      ref={ref}
      className=" h-[280vh] sm:h-[500vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
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
        <motion.div className="flex flex-row-reverse space-x-reverse sm:space-x-reverse md:space-x-reverse space-x-4 sm:space-x-10 md:space-x-20 mb-10 sm:mb-20">
        {firstRow.map((product, index) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={`${product.title}-${index}`}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row space-x-4 sm:space-x-10 md:space-x-20 mb-10 sm:mb-20">
        {secondRow.map((product, index) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={`${product.title}-${index}`}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse sm:space-x-reverse md:space-x-reverse space-x-4 sm:space-x-10 md:space-x-20 mb-10 sm:mb-20">
        {thirdRow.map((product, index) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={`${product.title}-${index}`}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

const Header = () => {
  return (
    <div className=" max-w-screen-sm sm:max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        Coup d&#39;oeil <br /> Sur mes projets
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        Je construis chacun de mes projets en utilisant les dernières technologies. Étant passionnée, je m&#39;efforce de vous livrer un site web moderne, en portant une grande attention aux détails.
      </p>
    </div>
  );
};

const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-80 w-[25rem] sm:h-96 sm:w-[30rem] relative flex-shrink-0"
    >
      <div className="block group-hover/product:shadow-2xl">
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-center-center absolute h-full w-full inset-0"
          alt={product.title}
        />
      </div>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-70 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};

export default HeroParallax;
