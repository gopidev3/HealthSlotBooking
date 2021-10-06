//  import logo from './logo.svg';
import SideBar from './Components/Home/SideBar';
import HomePage from './Components/HomePage/HomePage';
import OnGoing from './Components/About/OnGoing/OneGoing';
import Completed from './Components/About/Completed/Completed';


function App() {
  return (
    <div className="App">
         <SideBar/>  
         {/* <HomePage/>  */}
         <OnGoing/>  
       {/* <Completed/> */}
    </div>
  );
}

export default App;
