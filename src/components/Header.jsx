import React, { useState } from "react";
import {
  Row,
  Button,
  Container,
  Nav,
  Navbar,
  Form,
  NavDropdown,
  Badge,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import LoginModal from "./LoginModal";

const Header = ({ handleShow, count }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false); // Trạng thái đăng nhập
  const [menuOpen, setMenuOpen] = useState(false); // Trạng thái mở/đóng menu

  const handleLoginShow = () => setShowLogin(true);
  const handleLoginClose = () => setShowLogin(false);

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const handleLoginSuccess = () => {
    setLoggedIn(true);
    setShowLogin(false);
  };

  return (
    <>
      <Row>
        <Navbar bg="light" expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="#">Pizza House</Navbar.Brand>
            {/* Đảm bảo rằng aria-controls khớp với ID của Navbar.Collapse */}
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="More" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action1">Action 1</NavDropdown.Item>
                  <NavDropdown.Item href="#action2">Action 2</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action3">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                  Disabled Link
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
              <Button className="ms-2" variant="primary" onClick={handleShow}>
                Cart <Badge bg="secondary">{count}</Badge>
                <span className="visually-hidden">items in cart</span>
              </Button>
              {loggedIn ? (
                <Button className="ms-2" variant="outline-danger" onClick={handleLogout}>
                  Logout
                </Button>
              ) : (
                <Button className="ms-2" variant="outline-primary" onClick={handleLoginShow}>
                  <FontAwesomeIcon icon={faUser} /> Login
                </Button>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>

      {/* Modal Đăng Nhập */}
      <LoginModal show={showLogin} handleClose={handleLoginClose} setLoggedIn={handleLoginSuccess} />
    </>
  );
};

export default Header;
