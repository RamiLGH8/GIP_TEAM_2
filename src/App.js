import  {Home} from './components/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigationbar from './components/navbar/Navbar';
import Details from './components/details/Details';
import Registrations from './components/registrations/Registrations';
function App() {
  return (
    <>

        <Navigationbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/register" element={<Registrations />} />
       </Routes>

  
   </> 
    );
}
export default App;
