import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import NavLinks from "./NavLinks";
import { RiMenu3Fill } from "react-icons/ri";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };

  const [dark,setDark]=useState(false)
  const handleMode=()=>{
    setDark(!dark)
  }

  return (
    <nav className="bg-white">
      <div className="flex items-center container font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img src={Logo}  alt="logo" className="md:cursor-pointer h-9 rounded-[50%]" />
          {/* Mobile menu button */}
          <button
            className="text-3xl md:hidden"
            onClick={toggleMenu}
          >
            <RiMenu3Fill name={`${open ? "close" : "menu"}`} /> 
          </button>
        </div>
        {/* Desktop navigation */}
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Bosh qisim
            </Link>
          </li>
          
          <NavLinks />
        </ul>
        {/* Mobile nav */}
        <ul
          className={`
            md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
            duration-500 ${open ? "left-0" : "left-[-100%]"}
          `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Bosh qisi
            </Link>
          </li>
          <NavLinks />
          <div className="py-5"></div>
        
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
