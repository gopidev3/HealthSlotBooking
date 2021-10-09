
import react,{Component} from 'react';
import SideBar from './Components/Home/SideBar';
import HomePage from './Components/HomePage/HomePage';
import OnGoing from './Components/About/OnGoing/OneGoing';
import Completed from './Components/About/Completed/Completed';
import NavBar from './Components/NavBar/NavBar';
import Reports from './Components/Reports/Reports';
import OnGoingTasks from './Components/Tasks/OnGoingTasks';
import CompletedTasks from './Components/Tasks/CompletedTasks';
import Footer from './Components/Footer/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
           <SideBar/> 
           {/* <HomePage/>    */}
          <Route exact path = "/HomePage" component={HomePage}/>
           {/* <OnGoing/> */}
          <Route exact path = "/AbouPage" component = {OnGoing}/>
          <NavBar/>
          <Reports/>
          <OnGoingTasks/>
          <CompletedTasks/>
          <Footer/>
      </div>
   </Router>
  
  );
}

export default App;
