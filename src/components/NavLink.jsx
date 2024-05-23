"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLink = ({link}) => {

    const pathName = usePathname();

    return (

     <Link className={`rounded p-1 hover:bg-btnbackground hover:text-accent-foreground active:text-accent-foreground ${pathName === link.url && " text-accent-foreground bg-accent"}`} href={link.url}>{link.title}</Link>


    )
}

export default NavLink