import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TopNav = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/home" >SAKIB</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} className="ml-4" to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} className="ml-4" to="/about">About</Nav.Link>
                    <Nav.Link as={Link} className="ml-4" to="/portfolio">Portfolios</Nav.Link>
                    <Nav.Link as={Link} className="ml-4" to="/blogs">Blogs</Nav.Link>
                    <Nav.Link as={Link} className="ml-4" to="/contact">Contact</Nav.Link>
                </Nav>
                <Button variant="outline-success" className="ml-4" >Resume</Button>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default TopNav;