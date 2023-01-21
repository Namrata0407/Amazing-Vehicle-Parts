
import './App.css';
import FooterTwo from './Components/FooterTwo';
import Navbar from './Components/Navbar';

import {Divider} from '@chakra-ui/react'
// import Home from './Pages/Home';
import BackToTop from './Elements/BacktoTop';
import AllRoutes from './Components/AllRoutes';








function App() {
  return (
    <div className="App">
      <Navbar/>
      <Divider/>
   
    <AllRoutes/>
   
    <FooterTwo/>
    
       <BackToTop/>
    </div>
  );
}

export default App;
