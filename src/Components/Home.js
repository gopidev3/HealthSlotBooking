import React from 'react'
import SideBar from "./Components/Home/SideBar";
import HomePage from "./Components/HomePage/HomePage";
import OnGoing from './About/OnGoing/OneGoing';
import Completed from './About/Completed/Completed';
import NavBar from './NavBar/NavBar';


const Home = () => {
    return (
         <div>
            <Sidebar/> 
            <HomePage/>
            <OnGoing/> 
            <Completed/> 
            <NavBar/>
        </div>
       
    )
}

export default Home