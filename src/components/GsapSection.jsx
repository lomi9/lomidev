"use client"

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GsapSection = () => {
    const containerRef = useRef(null);

    useEffect(() => {

      const sections = gsap.utils.toArray('.panel');
  
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".container",
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + document.querySelector(".container").offsetWidth
        }
      });
      
    }, []);
  
    return (
        <>
        <div className="firstContainer flex flex-col justify-center items-center h-[100vh] bg-yellow-500">
        <h1>Testing horizontal scrolling w/ three sections</h1>
        <h2>First Container</h2>
      </div>
      <div className="container w-[400%] h-[100vh] flex flex-nowrap">
        <div className="description panel blue bg-blue-400 w-screen h-screen">
          <div>
            SCROLL DOWN
            <div className="scroll-down"><div class="arrow"></div></div>
          </div>
        </div>
      
        <section className="panel red bg-red-400 w-screen h-screen">
          ONE
        </section>
        <section className="panel orange bg-orange-400 w-screen h-screen">
          TWO
        </section>
        <section className="panel purple bg-purple-400 w-screen h-screen">
          THREE
        </section>
      </div>
      <div className="lastContainer flex h-[100vh] bg-yellow-400">
        Last Container
      </div>
      </>
    );
};

export default GsapSection;
