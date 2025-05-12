import { Container, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router";
function Header() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Collapse className="justify-content-end">
          <Stack direction="horizontal" gap={3}>
            <Link as="a" to="/" className="text-secondary">
              Accueil
            </Link>
            <Link as="a" to="/category/Vêtement" className="text-secondary">
              Vêtement
            </Link>
            <Link as="a" to="/category/Chaussures" className="text-secondary">
              Chaussures
            </Link>
          </Stack>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
