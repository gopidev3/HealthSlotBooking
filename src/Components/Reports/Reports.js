import React from 'react';
import "./Reports.scss";
import micheal_img from '../../Assets/imgs/micheal_img.png';
import {MdNotificationsNone } from "react-icons/md";

 const Reports = () => {
    return (
        <div className = "Reports-content-root">
        <div className = "Reports-content-main">
            <div className = "Reports-cont1">
              <p>Reports</p>
            </div>
            <div className = "Reports-cont2">
              <i><MdNotificationsNone/></i>
              <img src = {micheal_img} alt = ""/>
            </div>
       </div>
    </div>

    )
 }
    
       

export default Reports;