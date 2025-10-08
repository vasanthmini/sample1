import { Fragment } from "react";
import "./Header.css";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHandsAmericanSignLanguageInterpreting } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

function Header() {
  return (
    <Fragment>
      <header className="header-containers">
        <h1 className="site-title">
          Sports MINI World Accessories{" "}
          <FontAwesomeIcon className="text-info " icon={faHandsAmericanSignLanguageInterpreting} />{" "}
        </h1>

        <Navbar expand="lg" className="custom-navbar" sticky="top">
          <Container>
            <Navbar.Brand as={NavLink} to="/home/Demo" className="brand">
              Sports Shop
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={NavLink} to="/home/welcome" className="nav-link">
                  Welcome
                </Nav.Link>

                {/* ✅ Dropdown Menu */}
                <NavDropdown
                  title="Products"
                  id="products-dropdown"
                  className="nav-dropdown"
                >
                  <NavDropdown.Item as={NavLink} to="bat">
                    Bats
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="Gym">
                    Gym
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="shoes">
                    Shoes
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="Jersey">
                    Jersey
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="FootBall">
                    FootBall
                  </NavDropdown.Item>
                  {/* <NavDropdown.Divider />
                  <NavDropdown.Item as={NavLink} to="Jersey">
                    All Products
                  </NavDropdown.Item> */}
                </NavDropdown>

                <Nav.Link as={NavLink} to="about" className="nav-link">
                  About
                </Nav.Link>
                <Nav.Link as={NavLink} to="contact" className="nav-link">
                  Contact
                </Nav.Link>
                <Nav.Link as={NavLink} to="/login" className="nav-link">
                  Logout
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </Fragment>
  );
}

export default Header;
