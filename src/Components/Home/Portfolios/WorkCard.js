import React from 'react';
import { Badge, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { GoLinkExternal, GoMarkGithub } from "react-icons/go";

const WorkCard = ({ info, key }) => {
    const { name, image, desc, tools, repo, live, id } = info
    return (
        <div className="col-md-4 justify-content-center d-flex">
            <Card key={id} className="my-3 shadow" style={{ width: '22rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
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
            </Card>
        </div>
    );
};

export default WorkCard;