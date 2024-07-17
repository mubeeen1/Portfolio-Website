import React from "react";
import NavLink from "./NavLink";
const MenuOverlay = (props) => {
  return (
    <ul className="flex flex-col text-xl py-4 items-center">
      {props.links.map((link, index) => {
        return (<li key={index}>
          <NavLink title={link.title} href={link.href} />
        </li>);
      })}
    </ul>
  );
};
export default MenuOverlay;
