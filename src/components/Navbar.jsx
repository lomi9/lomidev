"use client"
import Link from "next/link"
import Logo from "./Logo"
import { useState } from "react";
import NavLink from "./NavLink";

const links = [
    { url: "/", title: "Home"},
    { url: "/prices", title: "Tarifs"},
    { url: "/gallery", title: "Galerie"},
    { url: "/contact", title: "Contact"},
];

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
            {/* LOGO */}
            <div className="">
                <Link href="/">
                    <div className="w-20"> 
                    <Logo color="text-red-500" size="6"/>
                    </div>
                </Link>
                
            </div>
             {/* DESKTOP MENU */}
            <div className="hidden md:flex gap-4 ">
                {links.map((link) => (
                   <NavLink link={link} key={link.title}/>
                    )
                )}
            </div>

            {/* RESPONSIVE MENU */}
            <div className="md:hidden">
                {/* MENU BUTTON */}
                <button onClick={(()=>setOpen(!open))} className="w-10 h-8 flex flex-col justify-between z-50 relative">
                    <div className="w-10  h-1 bg-black rounded"></div>
                    <div className="w-10  h-1 bg-black rounded"></div>
                    <div className="w-10  h-1 bg-black rounded"></div>
                </button>
                {/* MENU LIST */}
                {open && (
                    <div className="bg-black text-white absolute top-0 left-0 w-screen h-screen flex flex-col items-center justify-center gap-8 text-4xl ">
                        {links.map(link=>(
                            <Link href={link.url} key={link.title}>{link.title}</Link>
                            )
                        )}
                    </div>
                )}

            </div>
        </div>
    )
}

export default Navbar