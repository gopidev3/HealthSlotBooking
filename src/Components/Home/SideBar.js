import React from 'react'
import "./SideBar.scss";
import { AiFillFileText } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { FaPowerOff } from "react-icons/fa";
import { FaSignal } from 'react-icons/fa';
import { BsWifi } from "react-icons/bs";
import { BsBatteryFull } from "react-icons/bs";
import micheal_img from '../../Assets/imgs/micheal_img.png';
// import { withRouter } from 'react-router';
    
// const SideBar extends Component {
//     constructor(props) {
//        super(props)
//        this.state = {
//            page: 'SideBar'
//        }
//    }


// changePage = (e2) => {
//     this.props.history.push('/Home')
// }


// render() {const { page } = this.state;
//   console.log('home', page)
const SideBar = () => {
    return (
        <div className = "Side-bar">
            <div className = "SideBar-content-main">
                <div className = "Side-Bar-content1">
                   <button><i><AiFillHome/></i></button>
                    <p>Home</p>
                </div>
                <div className = "Side-Bar-content2">
                 <button><i><AiFillFileText/></i></button>
                 <p>Reports</p>
                </div>
                <div className = "Side-Bar-cont3">
                  <img src = {micheal_img} alt = ""/> 
                 <p>Micheal Jordan</p>
              </div>
              <div className = "Side-Bar-cont4">
                 <i><FaPowerOff/></i>
                 <span>Log Out</span>
              </div>   
           </div>    
        </div>
       
    )
}

export default SideBar