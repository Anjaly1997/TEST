import React, { useState } from "react";
import logo from "../img/logo.jpg";
import { FiBell, FiPlus } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import Menu from "./Menu";

function Navbar() {
 const [showMenu, setShowMenu] = useState(false);
 return (
  <nav className="navbar">
   {/* Left */}
   <div className="navLeft">
    <img src={logo} alt="" />
    <div>
     <input type="text" placeholder="Search or jump to" />
    </div>
   </div>
   {/* Center */}
   <div className="navCenter">
    <h2>Pulls</h2>
    <h2>Issues</h2>
    <h2>Marketplace</h2>
    <h2>Explore</h2>
   </div>
   {/* Right */}
   <div className="navRight">
    <FiBell />
    <div className="navRightIcons">
     <FiPlus />
     <IoMdArrowDropdown />
    </div>
    <div className="navRightIcons" onClick={() => setShowMenu(!showMenu)}>
     <img
      src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
      alt=""
     />
     <IoMdArrowDropdown />
    </div>
   </div>
   {showMenu && <Menu />}
  </nav>
 );
}

export default Navbar;
