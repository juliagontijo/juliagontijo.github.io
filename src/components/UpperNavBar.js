import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './UpperNavBar.css';
import { NavLink } from 'react-router-dom';

function UpperNavBar({ onPageChange }) {

  const handleLinkClick = (page) => {
    // Call the callback prop
    onPageChange(page);
  };

  return (

    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className = "navbar-brand-custom" href="/home">Julia Gontijo Lopes</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Item className="nav-item-custom">
          <NavLink to="/home" className="nav-link" onClick={() => handleLinkClick('home')}>Home</NavLink>
          </Nav.Item>
          <Nav.Item className="nav-item-custom">
            <NavLink to="/projects" className="nav-link" onClick={() => handleLinkClick('projects')}>Projects</NavLink>
          </Nav.Item>
          <Nav.Item className="nav-item-custom">
            <NavLink to="/resume" className="nav-link" onClick={() => handleLinkClick('resume')}>Resume</NavLink>
          </Nav.Item>
          {/* <Nav.Item className="nav-item-custom">
            <NavLink to="/interests" className="nav-link" onClick={() => handleLinkClick('interests')}>What we could talk about</NavLink>
          </Nav.Item> */}
          <Nav.Item className="nav-item-custom">
          <NavLink to="/contact" className="nav-link" onClick={() => handleLinkClick('contact')}>Contact</NavLink>
        </Nav.Item>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    
  );
}

export default UpperNavBar;