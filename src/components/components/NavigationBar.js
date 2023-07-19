import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, Outlet} from "react-router-dom";
import { TiWeatherPartlySunny } from "react-icons/ti";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";

function NavigationBar() {



    return (
       <>
            <Navbar sticky="top" className ="text-white" bg="dark" data-bs-theme="dark" collapseOnSelect expand="lg" >
                <Container>
                  <Navbar.Brand>
                      <TiWeatherPartlySunny size={32}/>
                      Weather Mash-UP
                  </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto-auto">
                              <Nav.Link >
                                  <Link to={"/"} activeClassName="active">Home</Link>
                              </Nav.Link>
                            <Nav.Link >
                                <Link to={"/the-app"} activeClassName="active">The App</Link>
                            </Nav.Link>
                              <Nav.Link >
                                  <Link to={"/code"} activeClassName="active">Code</Link>
                              </Nav.Link>
                              <Nav.Link >
                                  <Link to={"/git-repo"} activeClassName="active">Git Repo</Link>
                              </Nav.Link>
                              <Nav.Link >
                                  <Link to={"/about"} activeClassName="active">About</Link>
                              </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavigationBar;
