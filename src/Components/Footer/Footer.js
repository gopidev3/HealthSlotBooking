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
                <i><IoMdHome/></i>
               <Link to = "/OnGoingTasks"><p>Home</p></Link>
            </div>
            <div className = "sticky-healthslot-cont2">
                <i><AiFillFileText/></i>
              <Link to = "/CompletedTasks" ><p>Reports</p></Link>
            </div>
        </div>
    </div>

    )
 }

 export default Footer;