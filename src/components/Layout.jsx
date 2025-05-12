import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import { Container } from "react-bootstrap";

function Layout() {
  return (
    <>
      <Header />
      <Container className="my-5">
        <main>
          <Outlet />
        </main>
      </Container>
      <Footer />
    </>
  );
}

export default Layout;
