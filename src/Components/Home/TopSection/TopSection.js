import React from 'react';
import { Row } from 'react-bootstrap';
import sakibdp from '../../../images/sakib1.png';
import './TopSection.css';

const TopSection = () => {
    return (
        <div className="container my-5 py-5 py-md-0 my-md-0">
            <Row className="align-items-center" style={{ height: '600px' }} >
                <div className="col-md-6">
                    <p>Hi, I'm</p>
                    <h1>Noman Sakib</h1>
                    <div><span>Web Developer</span> <span>Programmer</span> </div>
                    <p className="mt-3" >A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</p>
                    <div className="mt-4" >
                        <button className="btn btn-success">About Me</button>
                        <button className="btn btn-outline-success ml-4">Get in touch</button>
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