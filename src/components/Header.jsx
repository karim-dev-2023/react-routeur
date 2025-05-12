import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                    <Nav.Link as={Link} to="/" className="text-secondary">
                        Accueil
                    </Nav.Link>
                    <Nav.Link as={Link} to="/category/Vêtement" className="text-secondary">
                        Vêtement
                    </Nav.Link>
                    <Nav.Link as={Link} to="/category/Chaussures" className="text-secondary">
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
