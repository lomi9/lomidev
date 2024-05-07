"use client"
import Link from "next/link"
import Logo from "./Logo"
import { useState } from "react";
import NavLink from "./NavLink";
import Switch from "./ui/Switch";
import { useTheme } from '../contexts/ThemeContext';


const links = [
    { url: "/", title: "Home"},
    { url: "/prices", title: "Tarifs"},
    { url: "/gallery", title: "Galerie"},
    { url: "/contact", title: "Contact"},
];

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="fixed w-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-18 text-xl">
            {/* LOGO */}
            <div className="h-full w-[5rem]">
                <Link href="/">
                    <div> 
                    <Logo color="text-foreground" size="20"/>
                    </div>
                </Link>
            </div>

            {/* DESKTOP MENU */}
            <div className={`hidden md:flex items-center gap-6 px-4 py-2  bg-opacity-40 border border-gray-200 border-opacity-30 rounded-xl backdrop-blur-[25px] backdrop-saturate-[1.06] ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
                <div className=" flex gap-4  ">
                    {links.map((link) => (
                        <NavLink link={link} key={link.title}/>
                        )
                    )}
                </div>
                {/* SWITCH DARK/LIGHT MODE */}
            
            <div className="h-full flex items-center justify-end">
                <Switch 
                    checked={theme === 'dark'}
                    onChange={toggleTheme}>
                    {theme === 'dark' ? 'Dark' : 'Light'}
                </Switch>
            </div>

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