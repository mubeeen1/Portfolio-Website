"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navLinks = [
    {
      title: "Home",
      href: "#home",
    },
    {
      title: "About",
      href: "#about",
    },
    {
      title: "Projects",
      href: "#projects",
    },
    {
      title: "Contact",
      href: "#contact",
    },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          className="text-xl md:text-3xl text-white text-semibold"
          href={"/"}
        >
          LOGO
        </Link>
        <div className=" mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => {
                setNavbarOpen(true);
              }}
              className="flex px-3 py-2 items-center border border-slate-200 text-slate-200 hover:text-white hover:border-white "
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : 
            <button
              onClick={() => {
                setNavbarOpen(false);
              }}
              className="flex px-3 py-2 items-center border border-slate-200 text-slate-200 hover:text-white hover:border-white "
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          }
        </div>
        <div className="menu  hidden md:block md:w-auto" id="navbar">
          <ul className="flex md:flex-row p-2 md:p-0 md:space-x-8 mt-0">
            {navLinks.map((link, index) => {
              return (
                <li key={index}>
                  <NavLink title={link.title} href={link.href} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default NavBar;
