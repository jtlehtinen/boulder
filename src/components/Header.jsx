import {NavLink} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {FaCalendarAlt, FaUsers, FaLocationArrow} from 'react-icons/fa';

function Header() {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand as={NavLink} to='/'>Boulder</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link as={NavLink} to='/plan'><FaCalendarAlt/> Plan</Nav.Link>
            <Nav.Link as={NavLink} to='/locations'><FaLocationArrow/> Locations</Nav.Link>
            <Nav.Link as={NavLink} to='/profile'><FaUsers/> Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

