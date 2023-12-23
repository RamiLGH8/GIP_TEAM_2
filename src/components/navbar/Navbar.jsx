import Container from 'react-bootstrap/Container';
import React,{useState} from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../navbar/navbar.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import MenuIcon from '@mui/icons-material/Menu';

function Navigationbar() {
  const [show, setShow] = useState(false);
  
  const handleClose = () =>{ 
                   setShow(false);
                  };
  const handleShow = () =>{
                   setShow(true);
                  }

    return (
     <> 
     <div className='d-none d-lg-block'>
      <Navbar style={{zIndex: "1", position:"fixed",top:"0",width:'100%',}}>
      <Container>
        <Navbar.Brand href='/' ><img src='logo.png' alt='' style={{height:'51px',width:'310px'}}></img></Navbar.Brand>
        <Nav className="me-auto" style={{marginLeft:'35%'}}>
                  <Nav.Link 
                          href="/"   
                          onMouseOver={(e) => e.target.style.borderBottom = '2px solid white'}  
                          onMouseOut={(e) => e.target.style.borderBottom = '2px solid transparent'}
                          style={{color:'#FFFFFF' ,marginRight:'20px',fontSize:'20px',}}>Home</Nav.Link>
                  <Nav.Link 
                          href="/details"
                          onMouseOver={(e) => e.target.style.borderBottom = '2px solid white'}  
                          onMouseOut={(e) => e.target.style.borderBottom = '2px solid transparent'}
                          style={{color:'#FFFFFF' ,marginRight:'20px',fontSize:'20px'}}>Details</Nav.Link>
                  <Nav.Link 
                          href="/register"
                          style={{color:'#FFFFFF' ,marginRight:'20px',fontSize:'20px'}}><button className='Register-Now'>Register</button></Nav.Link>
        </Nav>
        </Container>
    </Navbar>
       </div> 
         {/* Mobile navbar */}
    <div className='d-lg-none'>
      <Nav style={{position:'fixed',top:'0', width:'100%',display:'flex',}}>
        <Nav.Item style={{marginRight:'auto',height:'90px',display:'flex',alignItems:'center',marginLeft:'10px'}}>
        <Navbar.Brand href='/' style={{width:'100px'}} ><img src='logo.png' alt='' style={{height:'51px',width:'310px'}}></img></Navbar.Brand>
        
        </Nav.Item>
        { <Nav.Item style={{display:'flex',alignItems:'center',marginRight:'10px'}}>
        <btn onClick={handleShow}>
          <MenuIcon style={{color:'#FFFFFF',fontSize:'50px',marginLeft:'auto',}}/>
        </btn>
        </Nav.Item> }
{       
      <Offcanvas  show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
          <Nav.Link href="/" style={{color:'#020617' ,marginRight:'20px',fontSize:'20px',marginLeft:'10px',marginBottom:'15px'}}>Home</Nav.Link>
          <Nav.Link href="/details" style={{color:'#020617' ,marginRight:'20px',fontSize:'20px',marginLeft:'10px',marginBottom:'15px'}}>Details</Nav.Link>
          <Nav.Link href="/register" style={{color:'#020617' ,marginRight:'20px',fontSize:'20px',marginLeft:'10px',marginBottom:'15px'}}>Register</Nav.Link>
        </Offcanvas.Body>
      </Offcanvas> }
      </Nav>
      </div>
     
   </>
    );
  }
  
  export default Navigationbar;