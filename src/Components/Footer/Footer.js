import React from 'react';
import "./Footer.scss";
import { IoMdHome } from "react-icons/io";
import { AiFillFileText } from "react-icons/ai";
import CompletedTasks from "../Tasks/CompletedTasks";

// const OnGoing = () => {
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
                <p>Home</p>
            </div>
            <div className = "sticky-healthslot-cont2">
                <i><AiFillFileText/></i>
                <p>Reports</p>
            </div>
        </div>
    </div>

    )
 }

 export default Footer;