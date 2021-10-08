import React from 'react';
import "./OnGoingTasks.scss";
import { BsEye } from "react-icons/bs";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import eye1_img from '../../Assets/imgs/eye1_img.png';
import { AiFillExclamationCircle } from "react-icons/ai";


const OnGoingTasks = () => {
    return (
        <div className = "OnGoingTasks-mainroot">
          <div className = "On-Going-main">
            <div className = "OnGoingTasks-cont1">
               <span>On-Going</span>
               <span>Completed</span>
             </div>
            </div>
         
         <div className = "OnGoing-Card-container">
            <div className = "Ongoing-health-card">
                    <span>Mark</span>
                    <img src = {eye1_img} alt = ""/>
                   <p>Hyderabad</p> 
                   <span className = "cl-span">Tue 17th Nov/4:17:18 GMT</span>
                 <i className = "I-T"><AiFillExclamationCircle/></i> 
              </div>
          </div>
       </div>

    )
 }

 export default OnGoingTasks;