
import './App.css';
import FooterTwo from './Components/FooterTwo';
import Navbar from './Components/Navbar';

import {Divider} from '@chakra-ui/react'
// import Home from './Pages/Home';
import BackToTop from './Elements/BacktoTop';
import AllRoutes from './Components/AllRoutes';
// import Login from './Pages/Login';






function App() {
  return (
    <div className="App">
      <Navbar/>
      <Divider/>
    {/* <Home/> */}
    <AllRoutes/>
    {/* <Login/> */}
    <FooterTwo/>
       <BackToTop/>
    </div>
  );
}

export default App;
