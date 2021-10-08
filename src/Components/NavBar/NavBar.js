import React from 'react';
import "./NavBar.scss";
import { FaPowerOff } from "react-icons/fa";
import { FaSignal } from 'react-icons/fa';
import { BsWifi } from "react-icons/bs";
import { BsBatteryFull } from "react-icons/bs";


 const NavBar = () => {
    return (
        <div className = "NavBar-main">
        <div className = "NavBar-content-main">
            <div className = "NavBar-health-cont1">
               <p>9:41</p>
             </div>
             <div className = "NavBar-health-cont2">
               <i><FaSignal/></i>
               <i><BsWifi/></i>
               <i><BsBatteryFull/></i>
              </div>
           </div>     
      </div>

    )
 }
    
       

export default NavBar;