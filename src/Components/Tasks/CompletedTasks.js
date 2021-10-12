import React from 'react';
import "./CompletedTasks.scss";
import eye1_img from '../../Assets/imgs/eye1_img.png';
import { AiFillExclamationCircle } from "react-icons/ai";
import eye2_img from '../../Assets/imgs/eye2_img.png';
import Robo1_img from '../../Assets/imgs/Robo1_img.JPG';

const CompletedTasks = () => {
    return (
    <div className = "Seventh-amain-root">
        <div className = "Seventh-card-container">
            <div className = "Sevent-content-main">
            <div className = "Seventh-card">
               <h3>Hello Micheal</h3>
                 <p>Enpowering health care diagnosis with artificial intelligence
                   test your results below!!
               </p>
               <div className = "Seventh-card-img">
                   <img src = {Robo1_img} alt = "" className = "myimg"/>
               </div>
               <div className = "Seventh-card-button">
                   <button>Examine Test</button>
               </div>
               </div>
            </div>
        </div>
        <p className = "prt">Your Recent Tests</p>
         <div className = "Seventh-health-cards-conatainer">
           <div className = "Seventh-heallth-Card">
                <span>Mark</span>
                <img src = {eye1_img} alt = ""/>
                 <p>Hyderabad</p> 
                <span className = "cl-span">Tue 17th Nov/4:17:18 GMT</span>
                <i className = "I-T"><AiFillExclamationCircle/></i> 
            </div>
            <div className = "Seventh-heallth-Card">
                 <span>William</span>
                <img src = {eye2_img} alt = ""/>
                 <p>Hyderabad</p> 
                 <span className = "cl-span">Tue 17th Nov/4:17:18 GMT</span>
                 <i className = "I-T"><AiFillExclamationCircle/></i> 
            </div>
            <div className = "Seventh-heallth-Card">
                 <span>Joseph</span>
                <img src = {eye2_img} alt = ""/>
                 <p>Hyderabad</p> 
                <span className = "cl-span">Tue 17th Nov/4:17:18 GMT</span>
                <i className = "I-T"><AiFillExclamationCircle/></i> 
            </div>
            <div className = "Seventh-heallth-Card">
                <span>Micheal</span>
                <img src = {eye1_img} alt = ""/>
                 <p>Hyderabad</p> 
                 <span className = "cl-span">Tue 17th Nov/4:17:18 GMT</span>
                 <i className = "I-T"><AiFillExclamationCircle/></i> 
            </div>
            <div className = "Seventh-heallth-Card">
                <span>Tony</span>
                <img src = {eye1_img} alt = ""/>
                 <p>Hyderabad</p> 
                 <span className = "cl-span">Tue 17th Nov/4:17:18 GMT</span>
                 <i className = "I-T"><AiFillExclamationCircle/></i> 
            </div>
           </div>
        </div>        

    )
 }

 export default CompletedTasks;