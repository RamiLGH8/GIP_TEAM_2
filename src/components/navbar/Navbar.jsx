import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../navbar/navbar.css'
function Navigationbar() {

    return (
      
     <div className='d-none d-lg-block'>
      <Navbar style={{zIndex: "1", position:"fixed",top:"0",width:'100%',}}>
      <Container>
        <Navbar.Brand href='#home' ><img src='logo.png' alt='' style={{height:'51px',width:'310px'}}></img></Navbar.Brand>
        <Nav className="me-auto" style={{marginLeft:'35%'}}>
          <Nav.Link href="#home" style={{color:'#FFFFFF' ,marginRight:'20px',fontSize:'20px'}}>Home</Nav.Link>
          <Nav.Link href="#details" style={{color:'#FFFFFF' ,marginRight:'20px',fontSize:'20px'}}>Details</Nav.Link>
          <Nav.Link href="#register" style={{color:'#FFFFFF' ,marginRight:'20px',fontSize:'20px'}}><button className='Register-Now'>Register</button></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </div>
   
    );
  }
  
  export default Navigationbar;