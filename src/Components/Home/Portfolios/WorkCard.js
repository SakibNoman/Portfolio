import React from 'react';
import { Badge, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const WorkCard = ({ info }) => {
    const { name, image, desc, tools, repo, live } = info
    return (
        <div className="col-md-4 justify-content-center d-flex">
            <Card className="my-3 shadow" style={{ width: '22rem' }}>
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
                    <Card.Link className="text-dark" target="_blank" href={repo}>Github Repo</Card.Link>
                    <Card.Link className="text-dark" target="_blank" href={live}>Live Preview</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default WorkCard;