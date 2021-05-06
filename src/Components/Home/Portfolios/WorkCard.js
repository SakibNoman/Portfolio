import { Carousel } from '3d-react-carousal';
import React from 'react';
import { Badge, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { GoLinkExternal, GoMarkGithub } from "react-icons/go";

const WorkCard = ({ info, key }) => {
    const { name, image, desc, tools, repo, live, id } = info
    const slides = [
        <img src={image} alt="1" />, <img src={image} alt="2" />, <img src={image} alt="3" />
    ]
    return (
        <div className="col-md-12 px-md-0 mx-3">
            <Card key={id} className="my-3 shadow row flex-row">
                <div className="col-md-6 mt-3" >
                    <Carousel slides={slides} autoplay={true} interval={4000} />
                </div>
                <div className="col-md-6" >
                    <Card.Body className="mt-0" >
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {desc}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>{tools.map(each => <h5 className="d-inline mr-2" ><Badge variant="dark" pill>{each}</Badge></h5>)}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link className="text-dark" target="_blank" href={repo}><GoMarkGithub fontSize="25px" /> <small>Code</small> </Card.Link>
                        <Card.Link className="text-dark" target="_blank" href={live}><GoLinkExternal fontSize="25px" /> <small>Live</small> </Card.Link>
                    </Card.Body>
                </div>
            </Card>
        </div>
    );
};

export default WorkCard;