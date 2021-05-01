import React from 'react';
import { Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import sakibdp from '../../../images/sakib1.png';
import './TopSection.css';

const TopSection = () => {
    return (
        <div className="container my-5 py-5 py-md-0 my-md-0">
            <Row className="align-items-center" style={{ height: '600px' }} >
                <div className="col-md-6">
                    <p>Hi, I'm</p>
                    <h1>Sakib Noman</h1>
                    <div><span>Web Developer</span> <span>Programmer</span> </div>
                    <p className="mt-3" >In this age of information technology, I am skilled in JavaScript (React), Express, MongoDB.
                    Strong collaboration skills in application development, problem-solving, and analytics. I have
solved about 300 hundred problems in various online judge.</p>
                    <div className="mt-4" >
                        <Button as={Link} to="/about" className="btn btn-success">About Me</Button>
                    </div>
                </div>
                <div className="col-md-6 p-5">
                    <img className="img-fluid" src={sakibdp} alt="" />
                </div>
            </Row>
        </div>
    );
};

export default TopSection;