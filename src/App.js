import  {Home} from './components/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navigationbar from './components/navbar/Navbar';
import Details from './components/details/Details';
import Registrations from './components/registrations/Registrations';
function App() {
  return (
    <>
     <Navigationbar/>
     <Home />
     <Details />
     <Registrations />
   </> 
    );
}
export default App;
