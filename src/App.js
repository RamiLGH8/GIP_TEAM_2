import  {Home} from './components/home/Home';
import {Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navigationbar from './components/navbar/Navbar';
import {Registrations } from './components/registrations/Registrations'
function App() {
  return (
    <>
     <Navigationbar />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="registrations" element={<Registrations />} />
     </Routes>
   </> 
    );
}
export default App;
