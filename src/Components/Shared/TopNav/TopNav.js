import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './TopNav.css';

const TopNav = () => {

    const { isContact } = useParams()

    return (
        <Navbar bg="transparent" expand="lg">
            <Navbar.Brand as={Link} className={`${isContact ? "text-white" : "text-dark"}`} to="/home">SAKIB</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} className={`ml-4 ${isContact ? "navvy2 text-white" : "navvy text-dark"}`} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} className={`ml-4 ${isContact ? "navvy2 text-white" : "navvy text-dark"}`} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} className={`ml-4 ${isContact ? "navvy2 text-white" : "navvy text-dark"}`} to="/portfolio">Portfolios</Nav.Link>
                    <Nav.Link as={Link} className={`ml-4 ${isContact ? "navvy2 text-white" : "navvy text-dark"}`} to="/blogs">Blogs</Nav.Link>
                    <Nav.Link as={Link} className={`ml-4 ${isContact ? "navvy2 text-white" : "navvy text-dark"}`} to="/contact/true">Contact</Nav.Link>
                </Nav>
                <a href="https://drive.google.com/uc?export=download&id=1bvWFgbl9FN7ooDEqlYrWmh1yY22XyoYq">
                    <Button variant="outline-success" className="ml-4" >Resume</Button>
                </a>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default TopNav;