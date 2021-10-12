import React from 'react';
import "./Footer.scss";
import { IoMdHome } from "react-icons/io";
import { AiFillFileText } from "react-icons/ai";
import { Link } from "react-router-dom";
// const OnGoingTasks = () => {
//     const [state, setstate] = useState("OnGoingTasks")
//     const handleClick=(item)=>{
//             setstate(item)
//     }
const Footer = () => {
    return (
        <div className = "sticky-health-fter">
        <div className = "sticky-health-fter-content">
            <div className = "sticky-healthslot-cont1">
              <Link to = "/CompletedTasks"><i><IoMdHome/></i></Link>
                <p>Home</p>
            </div>
            <div className = "sticky-healthslot-cont2">
               <Link to = "/OnGoingTaks"><i><AiFillFileText/></i></Link>
                <p>Reports</p>
            </div>
        </div>
    </div>

    )
 }

 export default Footer;