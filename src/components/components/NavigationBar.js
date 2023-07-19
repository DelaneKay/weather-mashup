import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, Outlet} from "react-router-dom";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";

function NavigationBar() {



    return (
       <>
            <Navbar sticky="top" className ="text-white" bg="dark" data-bs-theme="dark" collapseOnSelect expand="lg" >
                <Container>
                  <Navbar.Brand>
                      Weather Mash-UP
                  </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                              <Nav.Link >
                                  <Link to={"/"} >Home</Link>
                              </Nav.Link>
                            <Nav.Link >
                                <Link to={"/the-app"} >The App</Link>
                            </Nav.Link>
                              <Nav.Link >
                                  <Link to={"/code"} >Code</Link>
                              </Nav.Link>
                              <Nav.Link >
                                  <Link to={"/git-repo"} >Git Repo</Link>
                              </Nav.Link>
                              <Nav.Link >
                                  <Link to={"/about"} >About</Link>
                              </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavigationBar;
