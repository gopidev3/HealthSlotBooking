import React from 'react';
import './HomePage.scss'
import Robo_img from '../../Assets/imgs/Robo_img.JPG';
import eye1_img from '../../Assets/imgs/eye1_img.png';
import eye3_img from '../../Assets/imgs/eye3_img.png';
import {MdNotificationsNone } from "react-icons/md";
import {HiOutlineClock } from "react-icons/hi";

const HomePage = () => {
    return (
      <div className = "main-root">
         <div className = "Second-Health-slot-maindiv">
           <div className = "Second-Health-card">
            <div className = "Subont-main-content">
              <div className  = "subont1">
                <h3>Hello,Micheal!</h3>
                 <p>Enpowering healthCare diagnosis with artificial
                    intelligence,test your results below!!
                </p>  
              </div>
               <div className = "subont-img">
                 <img src = {Robo_img} alt = ""/> 
                </div>
                <div className = "yt-button">
                   <button>ExamineTest</button> 
                </div>             
            </div>
           </div>
       </div>

       <div className = "Second-health-card-maindiv">
          <div className = "Table-card">
            <h3>Your Recent Tests</h3>
              <table className = "health-care-table">
                <thead>
                  <tr>
                    <th>Test name</th>
                    <th>Age</th>
                    <th>Location</th>
                    <th>Slot Timings</th>
                    <th>X-Ray Date</th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                   <td>Mark</td>
                   <td>26</td>
                   <td>Hyderabad</td>
                   <td>Tue,17 Nov 2020 /4:17:18 GMT</td>
                   <td>Sat,21 Aug 2020</td>
                   <td><img src = {eye1_img} alt = ""/></td>
                 </tr>
                  <tr>
                   <td>William</td>
                   <td>26</td>
                   <td>Hyderabad</td>
                   <td>Tue,17 Nov 2020 /4:17:18 GMT</td>
                   <td>Sat,21 Aug 2020</td>
                   <td><img src = {eye3_img} alt = ""/></td>
                 </tr>
                  <tr>
                   <td>Joseph</td>
                   <td>26</td>
                   <td>Hyderabad</td>
                   <td>Tue,17 Nov 2020 /4:17:18 GMT</td>
                   <td>Sat,21 Aug 2020</td>
                   <td><img src = {eye3_img} alt = ""/></td>
                 </tr>
                  <tr>
                   <td>Micheal</td>
                   <td>26</td>
                   <td>Hyderabad</td>
                   <td>Tue,17 Nov 2020 /4:17:18 GMT</td>
                   <td>Sat,21 Aug 2020</td>
                   <td><img src = {eye1_img} alt = ""/></td>
                 </tr>
                  <tr>
                   <td>Tony</td>
                   <td>26</td>
                   <td>Hyderabad</td>
                   <td>Tue,17 Nov 2020 /4:17:18 GMT</td>
                   <td>Sat,21 Aug 2020</td>
                   <td><img src = {eye1_img} alt = ""/></td>
                 </tr>
               </tbody>
             </table>
          </div> 
        </div>

           {/* <div className = "third-card-maindiv">
             <div className = "third-health-Card">
             <div className = "header-bar-main">
               <div className = "header-bar">
                  <h3>Your Activities</h3>
                  <i><MdNotificationsNone/></i> 
             </div>
          </div>     
      </div>
   </div> */}
</div>

    )
}

export default HomePage