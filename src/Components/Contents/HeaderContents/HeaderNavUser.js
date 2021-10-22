import React, { useState, useEffect, useRef } from "react";

import logo from "../../../Assets/images/netflix-logo.svg";

import avator from "../../../Assets/images/Netflix-avatar.png";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import LogOutScreen from "../../Pages/UserPages/LogOutScreen";

const HeaderNav = (props) => {
    const [navBackground, setNavBackground] = useState(false);
    const navRef = useRef();
    navRef.current = navBackground;
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 50;
            if (navRef.current !== show) {
                setNavBackground(show);
            }
        };
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Navbar
                collapseOnSelect
                expand="lg"
                variant="dark"
                className="navbar navbar-expand-lg navbar-dark  fixed-top text-white-50"
                style={{
                    transition: "1s ease",
                    backgroundColor: navBackground ? "#141414" : "transparent",
                }}
            >
                <Navbar.Brand href="#home">
                    <img
                        className="d-inline-block align-top logo"
                        src={logo}
                        alt="Netflix Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse
                    id="basic-navbar-nav"
                    className="px-md-5 px-sm-5 px-xs-5 py-md-5 py-sm-5"
                >
                    <Nav className="mr-auto"></Nav>

                    <img className="avator" src={avator} alt="avator" />
                    <NavDropdown title="" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">User 1</NavDropdown.Item>
                        <NavDropdown.Item href="#">User 2</NavDropdown.Item>
                        <NavDropdown.Item href="#">Profilen Beheren</NavDropdown.Item>
                        <NavDropdown.Divider />

                        <NavDropdown.Item href="DashboardScreen">Account</NavDropdown.Item>

                        <NavDropdown.Item href="#">Helpcentrum</NavDropdown.Item>

                        <NavDropdown.Item>
                            <LogOutScreen />
                        </NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default HeaderNav;
