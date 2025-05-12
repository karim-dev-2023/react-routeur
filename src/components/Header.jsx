import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../css/Header.css";

function Header() {
  return (
    <header>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                    <Nav.Link as={NavLink} to="/" className="text-secondary">
                        Accueil
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/category/Vêtement" className="text-secondary">
                        Vêtement
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/category/Chaussures" className="text-secondary">
                        Chaussures
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  );
}

export default Header;
