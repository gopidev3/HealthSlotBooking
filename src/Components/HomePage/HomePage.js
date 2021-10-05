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
        <div className = "HomePage-Card1-main">
          <div className = "Home-content-main">
            <div className  = "HomePage-content1">
             <h3>Hello,Micheal!</h3>
             <p>Enpowering healthCare diagnosis with artificial
                 intelligence,test your results below!!
             </p>
             <div className = "HomePage-Contentimg">
               <img src = {Robo_img} alt = ""/>
             </div>
             <div className = "HomePage-button">
                <button>Examine Test</button>
             </div>
          </div>
        </div>
       </div>

       <div className = "Second-health-card-maindiv">
             <h3>Your Recent Tests</h3>
             <table className = "myt2">
                <tr>
                  <th>TestName</th>
                  <th>Age</th>
                  <th>Location</th>
                  <th>Slot Timings</th>
                  <th>X-Ray Details</th>
                  <th> </th>
                </tr>
                    <tr>
                      <td>Mark</td>
                      <td>26</td>
                      <td>Hyderabad</td>
                      <td>Tue, 17 Nov 2020 / 04:17:18 GMT</td>
                      <td>Sat, 21 Aug 2020</td>
                      <td><img src = {eye1_img} alt = ""/></td>
                    </tr>
                    <tr>
                      <td>William</td>
                      <td>26</td>
                      <td>Hyderabad</td>
                      <td>Tue, 17 Nov 2020 / 04:17:18 GMT</td>
                      <td>Sat, 21 Aug 2020</td>
                      <td><img src = {eye3_img} alt = ""/></td>
                    </tr>
                    <tr>
                      <td>Joseph</td>
                      <td>25</td>
                      <td>Hyderabad</td>
                      <td>Tue, 17 Nov 2020 / 04:17:18 GMT</td>
                      <td>Sat, 21 Aug 2020</td>
                      <td><img src = {eye3_img} alt = ""/></td>
                    </tr>
                    <tr>
                      <td>Micheal</td>
                      <td>24</td>
                      <td>Hyderabad</td>
                      <td>Tue, 17 Nov 2020 / 04:17:18 GMT</td>
                      <td>Sat, 21 Aug 2020</td>
                      <td><img src = {eye1_img} alt = ""/></td>
                    </tr>
                    <tr>
                      <td>Tony</td>
                      <td>26</td>
                      <td>Hyderabad</td>
                      <td>Tue, 17 Nov 2020 / 04:17:18 GMT</td>
                      <td>Sat, 21 Aug 2020</td>
                      <td><img src = {eye1_img} alt = ""/></td>
                    </tr>
               </table>
          </div>

            <div className = "third-health-Card">
             <div className = "header-bar-main">
               <div className = "header-bar">
                  <h3>Your Activities</h3>
                    <i><MdNotificationsNone/></i> 
             </div>
          </div>

             <div className = "third-health-content-main">
               <div className = "third-cont-1">
                 <button className = "slot1-button"><i><HiOutlineClock/></i></button>
                  <span>You have uploaded Scanned Document</span>  
                   <button className = "slot2-button">now</button>
                </div>

                <div className = "third-cont-1">
                 <button className = "slot1-button"><i><HiOutlineClock/></i></button>
                  <span>You have uploaded Scanned Document</span>  
                   <button className = "slot2-button">now</button>
                </div>

                <div className = "third-cont-1">
                 <button className = "slot1-button"><i><HiOutlineClock/></i></button>
                  <span>You have uploaded Scanned Document</span>  
                   <button className = "slot2-button">2d</button>
                </div>
                <div className = "third-cont-1">
                 <button className = "slot1-button"><i><HiOutlineClock/></i></button>
                  <span>You have uploaded Scanned Document</span>  
                   <button className = "slot2-button">4d</button>
                </div>
                <div className = "third-cont-1">
                 <button className = "slot1-button"><i><HiOutlineClock/></i></button>
                  <span>You have uploaded Scanned Document</span>  
                   <button className = "slot2-button">4d</button>
                </div>
                <div className = "third-cont-1">
                 <button className = "slot1-button"><i><HiOutlineClock/></i></button>
                  <span>You have uploaded Scanned Document</span>  
                   <button className = "slot2-button">4d</button>
                </div>
                <div className = "third-cont-1">
                 <button className = "slot1-button"><i><HiOutlineClock/></i></button>
                  <span>You have uploaded Scanned Document</span>  
                   <button className = "slot2-button">now</button>
                </div>
                <div className = "third-cont-1">
                 <button className = "slot1-button"><i><HiOutlineClock/></i></button>
                  <span>You have uploaded Scanned Document</span>  
                   <button className = "slot2-button">now</button>
                </div>
                <div className = "third-cont-1">
                 <button className = "slot1-button"><i><HiOutlineClock/></i></button>
                  <span>You have uploaded Scanned Document</span>  
                   <button className = "slot2-button">now</button>
                </div>
            </div>
        </div>    
     </div>

    )
}

export default HomePage