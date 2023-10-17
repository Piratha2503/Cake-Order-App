import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './images/logo.png'
function TabTop() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='myContainer'>
        <Navbar.Brand href="#home" style={{marginLeft:'20%'}}><img src={logo} style={{height:'50px',width:'200px'}}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{marginLeft:'15%', fontSize:'25px'}}> Home </Nav.Link>
            <Nav.Link href="#link" style={{marginLeft:'5%', fontSize:'25px'}}>Designs</Nav.Link>
            <Nav.Link href="#link" style={{marginLeft:'5%', fontSize:'25px'}}>Orders</Nav.Link>
            <Nav.Link href="#link" style={{marginLeft:'5%', fontSize:'25px'}}>Occasions</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown" style={{marginLeft:'5%'}}>
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
            <Nav.Link href="#link" style={{marginLeft:'5%',fontSize:'25px'}}><i className="bi bi-person-fill"></i></Nav.Link>
            <Nav.Link href="#link" style={{marginLeft:'12%', fontSize:'25px', color:'red'}}><i className="bi bi-cart"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default TabTop;