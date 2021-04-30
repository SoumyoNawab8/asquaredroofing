import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import './../css/NavBar.css'
import { NavLink } from 'react-router-dom'

const NavBar = (props) => {
    return (
        <Navbar className="Navbar" variant='dark' expand="md">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink className="Link nav-link" exact to="/">Home</NavLink>
                    <NavLink className="Link nav-link" exact to="/services">Services</NavLink>
                    <NavLink className="Link nav-link" exact to="/projects">Projects</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar