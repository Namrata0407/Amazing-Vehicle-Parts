
import './App.css';
import FooterTwo from './Components/FooterTwo';
import Navbar from './Components/Navbar';

import {Divider} from '@chakra-ui/react'
import Home from './Pages/Home';






function App() {
  return (
    <div className="App">
      <Navbar/>
      <Divider/>
    <Home/>
    
      <br/>
      <br/>
      <br/>
    <FooterTwo/>
       
    </div>
  );
}

export default App;
