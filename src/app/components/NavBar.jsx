"use client"
import React,{useState} from "react";
import Link from "next/link";
import NavLink from "./NavLink"
import {Bars3Icon,XmarkIcon } from "@heroicons/react/24/solid"

const NavBar = () => {
const [navbarOpen, setNavbarOpen] = useState(false)
    const navLinks= [
        {
        title: "Home",
        href: "#home"
    },
    {
        title: "About",
        href: "#about"
    },
    {
        title:"Projects",
        href: "#projects"
    },
    {
        title: "Contact",
        href: "#contact"
    }
]
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <Link className="text-2xl md:text-5xl text-white text-semibold" href={"/"}>
          LOGO
        </Link>
<div className=" mobile-menu block md:hidden">
{
  navbarOpen ? ( <button className="flex px-3 py-2 item-center border border-slate-200 text-slate-200 hover:text-white hover:border-white "> <Bars3Icon className="h-5 w-5"/></button>) 
  : ( <button className="flex px-3 py-2 item-center border border-slate-200 text-slate-200 hover:text-white hover:border-white "> <XmarkIcon className="h-5 w-5"/></button>) )
}
</div>
        <div className="menu  hidden md:block md:w-auto" id="navbar">
          <ul className="flex md:flex-row p-2 md:p-0 md:space-x-8 mt-0">
            {navLinks.map((link, index) => {
               return (
                <li key={index}>
                    <NavLink 
                        title={link.title}
                        href={link.href}   
                        />
                </li>)
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
