import React from 'react'
import SideBar from "./Components/Home/SideBar";
import HomePage from "./Components/HomePage/HomePage";
import OnGoing from './About/OnGoing/OneGoing';
import Completed from './About/Completed/Completed';
import NavBar from './NavBar/NavBar';
import Reports from './Reports/Reports';

const Home = () => {
    return (
         <div>
            <Sidebar/> 
            <HomePage/>
            <OnGoing/> 
            <Completed/>
            <NavBar/>
            <Reports/>
        </div>
       
    )
}

export default Home