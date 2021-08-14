import React, { useState, useEffect } from "react";
import Image from "next/image";
// import { NavLink, withRouter } from "react-router-dom";
// import "./Navbar.css";
// import Logo from "../../assests/logof.png";
// import { BiUserCircle } from "react-icons/bi";
// import { GrTextAlignCenter } from "react-icons/gr";
// import { RiAccountCircleFill } from "react-icons/ri";
// import Dropdown from "./Dropdown";
import { MenuIcon, UserCircleIcon } from "@heroicons/react/outline";
// import { isAuthenticated } from "../../Login components/auth";
const Navbar = ({ isOpen }) => {
  //   const [dropdown, setDropdown] = useState(false);
  //   const [navHide, setNavHide] = useState(true);
  //   const [clicked, setClicked] = useState(false);
  //   const handleClick = () => setClicked(!clicked);
  //   const handleNavHide = () => setNavHide(!navHide);
  //   const onDropdownClick = () => {
  //     setNavHide(false);
  //     setDropdown(!dropdown);
  //   };
  //   const onNavHide = () => {
  //     if (window.innerWidth > 970) {
  //       setNavHide(true);
  //       setDropdown(false);
  //     }
  //     setClicked(false);
  //   };

  //   useEffect(() => {
  //     if (isOpen) setNavHide(false);
  //     if (window.innerWidth < 970) {
  //       setNavHide(false);
  //     }
  //   }, []);
  return (
    <div>
      <nav className="md:flex justify-between px-10 items-center py-3 border-b shadow-md">
        {/* <div className="hamburger" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div> */}
        <div className="relative h-16 w-16">
          <Image src="/logof.png" layout="fill" objectFit="contain" />
        </div>

        <ul className="md:flex justify-evenly  items-center md:space-x-4">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Visa Request</li>
          <li>Blogs</li>
          <li>Stories</li>
          <li>Gaia</li>
          <li>Login/SignUp</li>
          <MenuIcon className="h-7 w-7 text-[#Ff7f00]" />
          <UserCircleIcon className="h-7 w-7 text-[#Ff7f00]" />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
