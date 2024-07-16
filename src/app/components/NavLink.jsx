import React from "react";
import Link from "next/link"

const NavLink = (props) => (
    <Link
    href={props.href}
    className="block py-3 pl-3 pr-4 sm:text-xl text-[#ADB7BE] ronded md:p-0 hover:text-white">    
{props.title}
  </Link>
  )
  

export default NavLink;
