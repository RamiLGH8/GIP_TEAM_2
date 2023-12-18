import  {Home} from './components/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navigationbar from './components/navbar/Navbar';
function App() {
  return (
    <>
     <Navigationbar />
     <Home />
   </> 
    );
}
export default App;
