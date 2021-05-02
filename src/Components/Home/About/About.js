import ParticlesBg from 'particles-bg';
import QueueAnim from 'rc-queue-anim';
import React from 'react';
import { Badge, Row } from 'react-bootstrap';
import sakibdp2 from '../../../images/sakib2.png';

const Expertise = ["JavaScript", "React", "REST API", "React Bootstrap", "Bootstrap", "HTML", "CSS"]
const Comfortable = ["Node.js", "Express.js", "MongoDB", "JSON", "C", "C++", "jQuery", "PHP"]
const Familiar = ["Redux.js", "TypeScript", "SQL", "MySQL"]
const Tools = ["Git", "VS Code", "Chrome Dev tool", "Firebase", "Heroku", "Figma", "Photoshop", "XD"]

const About = () => {
    return (
        <div className="container">
            <Row>
                <div className="col-md-6">
                    <div>
                        <img className="w-50" src={sakibdp2} alt="" ></img>
                    </div>
                    <div>
                        <h2>Hi, I'm Sakib Noman</h2>
                        <p>In this age of information technology, I am skilled in JavaScript (React), Express, MongoDB.
                        Strong collaboration skills in application development, problem-solving, and analytics. I have
solved about 300 hundred problems in various online judge.</p>
                    </div>
                </div>
                <QueueAnim className="col-md-6">
                    <h2>Skills</h2>
                    <div key="1" className="mt-3">
                        <h5>Expertise</h5>
                        {Expertise.map(each => <h5 className="d-inline" ><Badge className="mr-3 mb-2" variant="dark" >{each}</Badge></h5>)}
                    </div>
                    <div key="2" className="mt-3">
                        <h5>Comfortable</h5>
                        {Comfortable.map(each => <h5 className="d-inline" ><Badge className="mr-3 mb-2" variant="dark" >{each}</Badge></h5>)}
                    </div>
                    <div key="3" className="mt-3">
                        <h5>Familiar</h5>
                        {Familiar.map(each => <h5 className="d-inline" ><Badge className="mr-3 mb-2" variant="dark" >{each}</Badge></h5>)}
                    </div>
                    <div key="4" className="mt-3">
                        <h5>Tools</h5>
                        {Tools.map(each => <h5 className="d-inline" ><Badge className="mr-3 mb-2" variant="dark" >{each}</Badge></h5>)}
                    </div>
                </QueueAnim>

            </Row>
            <ParticlesBg type="ball" bg={true} />
        </div>
    );
};

export default About;