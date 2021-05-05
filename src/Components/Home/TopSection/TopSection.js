import ParticlesBg from 'particles-bg';
import React from 'react';
import { Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import sakibdp from '../../../images/sakib1.png';
import Social from '../../Shared/Social/Social';
import './TopSection.css';

const TopSection = () => {
    return (
        <div className="container">
            <Row className="align-items-center" >
                <div className="col-md-6">
                    <p>Hi, I'm</p>
                    <h1>Sakib Noman</h1>
                    <div><span><h5>Front End Developer</h5></span></div>
                    <p className="mt-3" >In this age of information technology, I am skilled in JavaScript (React), Express, MongoDB.
                    Strong collaboration skills in application development, problem-solving, and analytics. I have
solved about 300 hundred problems in various online judge.</p>
                    <div>
                        <Social></Social>
                    </div>
                    <div className="mt-4" >
                        <Button as={Link} to="/about" className="btn btn-success">About Me</Button>
                    </div>
                </div>
                <div className="col-md-6 p-5">
                    <img className="img-fluid" src={sakibdp} alt="" />
                </div>
            </Row>
            <ParticlesBg type="polygon" bg={true} />
        </div>
    );
};

export default TopSection;