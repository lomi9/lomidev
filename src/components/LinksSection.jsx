"use client"

import Image from "next/image"
import Link from "next/link"
import csspattern from "../../public/css-pattern.png"



const LinksSection = () => {

    const pattern = csspattern;

    return (

        <div className="w-full gap-8 flex nowrap border border-solid border-transparent px-4 sm:px-8 md:px-12 lg:px-18">

        <article className="w-auto p-8  flex flex-wrap justify-center border border-solid border-cardbordercolor rounded-xl bg-background/30 backdrop-blur-[25px] backdrop-saturate-[1.06]">
            
            <h4 className="text-[5vw] md:text-[4vw] lg:text-[1.5vw] font-bold pb-8">Lorem ipsum</h4>
            <p className="text-[4.5vw] md:text-[3vw] lg:text-[1.3vw] font-thin">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam odit praesentium, laborum distinctio voluptatem fugiat expedita quos minus beatae earum nostrum nesciunt id ullam veniam, accusantium perferendis et, veritatis a saepe labore recusandae animi similique nihil! Fugit quos autem, sunt ullam nesciunt eaque necessitatibus rem? Odio enim ullam nam repellendus!
            </p>
        </article>

        <div className=" relative w-auto px-8 gap-4 flex flex-wrap border border-solid border-transparent justify-center flex-col">
        

        <div class="blob-container absolute w-full h-full top-0 left-0 z-10">
            <div className="relative w-full h-full">
                        <div class="blob blob1 bg-orange-200 dark:bg-blue-950 absolute top-0 left-0"></div>
                        <div class="blob blob2 bg-green-200 dark:bg-teal-950 absolute top-[-40px] right-0"></div>
                        <div class="blob blob4 bg-cyan-200 dark:bg-green-950 absolute top-1/3 left-1/4"></div>
                        <div class="blob blob3 bg-teal-200 dark:bg-green-950 absolute bottom-[-30px] left-0"></div>
                        <div class="blob blob5 bg-pink-100 dark:bg-blue-950 absolute bottom-[-10px] right-[-10px]"></div>
                        </div>
        </div>


        <div className="w-[30vw] relative z-20 card h-[100px] flex flex-wrap justify-center items-center border border-solid border-cardbordercolor rounded-xl bg-background/30 backdrop-blur-[25px] backdrop-saturate-[1.06] ">
            <div className="absolute dark:hidden top-0 left-0 w-full rounded-xl h-full overflow-hidden">
                <Image src={pattern} layout="fill" alt="pattern" className="w-full h-full cover"/>
            </div>
            <Link href="/prices" className="text-gray-600 dark:text-gray-200 antialiased w-full  h-full flex flex-wrap justify-center items-center text-[5vw] md:text-[4vw] lg:text-[1.5vw] font-bold ">
                Tarifs</Link>
                <div className="w-full bottom-0 left-0 bg-gradient-to-r from-transparent via-teal-300 to transparent h-[1px]"></div>
                <div className="w-full top-0 left-0 bg-gradient-to-r from-transparent via-teal-300 to transparent h-[1px]"></div>
            
            </div>

            <div className="w-[30vw] relative z-20 card h-[100px] flex flex-wrap justify-center items-center border border-solid border-cardbordercolor rounded-xl bg-background/30 backdrop-blur-[25px] backdrop-saturate-[1.06] ">
            <div className="absolute dark:hidden top-0 left-0 w-full rounded-xl h-full overflow-hidden">
                <Image src={pattern} layout="fill" alt="pattern" className="w-full h-full cover"/>
            </div>
            <Link href="/projects" className="text-gray-600 dark:text-gray-200 antialiased w-full h-full flex flex-wrap justify-center items-center text-[5vw] md:text-[4vw] lg:text-[1.5vw] font-bold ">
                Gallerie</Link>
                <div className="w-full bottom-0 left-0 bg-gradient-to-r from-transparent via-orange-300 to transparent h-[1px]"></div>
                <div className="w-full top-0 left-0 bg-gradient-to-r from-transparent via-orange-300 to transparent h-[1px]"></div>
            
            </div>

            <div className="w-[30vw] relative z-20 card h-[100px] flex flex-wrap justify-center items-center border border-solid border-cardbordercolor rounded-xl bg-background/30 backdrop-blur-[25px] backdrop-saturate-[1.06] ">
            <div className="absolute dark:hidden top-0 left-0 w-full rounded-xl h-full overflow-hidden">
                <Image src={pattern} layout="fill" alt="pattern" className="w-full h-full cover"/>
            </div>
            <Link href="/contact" className="text-gray-600 dark:text-gray-200 antialiased w-full h-full flex flex-wrap justify-center items-center text-[5vw] md:text-[4vw] lg:text-[1.5vw] font-bold ">
                Me contacter</Link>
                <div className="w-full bottom-0 left-0 bg-gradient-to-r from-transparent via-green-300 to transparent h-[1px]"></div>
                <div className="w-full top-0 left-0 bg-gradient-to-r from-transparent via-green-300 to transparent h-[1px]"></div>
            
            </div>

        </div>

        </div>

        )
}

export default LinksSection