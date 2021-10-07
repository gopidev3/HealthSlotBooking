//  import logo from './logo.svg';
import react,{Component} from 'react';
import SideBar from './Components/Home/SideBar';
import HomePage from './Components/HomePage/HomePage';
import OnGoing from './Components/About/OnGoing/OneGoing';
import Completed from './Components/About/Completed/Completed';
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
      </div>
   </Router>
  
  );
}

export default App;
