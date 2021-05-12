import React from 'react';
import { Button, Row } from 'react-bootstrap';
import { GoCloudDownload } from "react-icons/go";
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
                    <h1>Abdullah Al Noman Sakib</h1>
                    <div><span><h5>Front End Developer</h5></span></div>
                    <p className="mt-3" >In this age of information technology, I am skilled in JavaScript (React), Express, MongoDB.
                    Strong collaboration skills in application development, problem-solving, and analytics. I have
solved about 300 hundred problems in various online judge.</p>
                    <div>
                        <Social></Social>
                    </div>
                    <div className="mt-4" >
                        <Button as={Link} to="/about" className="btn btn-success">About Me</Button>
                        <a href="https://drive.google.com/uc?export=download&id=1bvWFgbl9FN7ooDEqlYrWmh1yY22XyoYq">
                            <Button variant="outline-success" className="ml-4" > <GoCloudDownload /> Resume</Button>
                        </a>
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