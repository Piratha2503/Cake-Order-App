import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './imgs/myLogo.jpg'
function TabTop() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='myContainer'>
        <Navbar.Brand href="#home"><img src={logo} style={{height:'50px',width:'200px'}}></img></Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{fontSize:'25px'}}> Home </Nav.Link>
            <Nav.Link href="#link" style={{ fontSize:'25px'}}>Designs</Nav.Link>
            <Nav.Link href="#link" style={{ fontSize:'25px'}}>Orders</Nav.Link>
            <Nav.Link href="#link" style={{ fontSize:'25px'}}>Occasions</Nav.Link>
            <NavDropdown title="About Us" style={{ fontSize:'25px'}} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" style={{fontSize:'30px'}}><i className="bi bi-person-fill"></i></Nav.Link>
            <Nav.Link href="#link" style={{fontSize:'25px', color:'red'}}><i className="bi bi-cart"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default TabTop;