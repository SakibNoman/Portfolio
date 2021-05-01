import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';

const TopNav = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">SAKIB</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link className="ml-4" href="#home">Home</Nav.Link>
                    <Nav.Link className="ml-4" href="#link">About</Nav.Link>
                    <Nav.Link className="ml-4" href="#link">Portfolios</Nav.Link>
                    <Nav.Link className="ml-4" href="#link">Blogs</Nav.Link>
                    <Nav.Link className="ml-4" href="#link">Contacts</Nav.Link>
                </Nav>
                <Button variant="outline-success" className="ml-4" >Resume</Button>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default TopNav;