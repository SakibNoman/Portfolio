import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import signature from '../../../images/signature.png';
import './TopNav.css';

const TopNav = () => {

    const { isContact } = useParams()

    return (
        <Navbar bg="white" className="sticky-top p-0" expand="lg">
            <Navbar.Brand as={Link} className="text-dark" to="/home"> <img width="250px" src={signature} alt="" /> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} data-toggle="collapse" data-target=".navbar-collapse.show" className="navvy text-dark ml-md-0 ml-4" to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} data-toggle="collapse" data-target=".navbar-collapse.show" className="navvy text-dark ml-md-0 ml-4" to="/about">About</Nav.Link>
                    <Nav.Link as={Link} data-toggle="collapse" data-target=".navbar-collapse.show" className="navvy text-dark ml-md-0 ml-4" to="/portfolio">Projects</Nav.Link>
                    <Nav.Link as={Link} data-toggle="collapse" data-target=".navbar-collapse.show" className="navvy text-dark ml-md-0 ml-4" to="/blogs">Blogs</Nav.Link>
                    <Nav.Link as={Link} data-toggle="collapse" data-target=".navbar-collapse.show" className="navvy text-dark ml-md-0 ml-4" to="/contact/true">Contact</Nav.Link>
                </Nav>
                <a href="https://drive.google.com/file/d/1bvWFgbl9FN7ooDEqlYrWmh1yY22XyoYq/view?usp=sharing" target="_blank" rel="noreferrer">
                    <Button variant="outline-success" className="ml-4 mr-3" >Resume</Button>
                </a>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default TopNav;