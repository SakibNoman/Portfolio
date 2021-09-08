import React from 'react';
import { Badge, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import { GoLinkExternal, GoMarkGithub } from "react-icons/go";

const WorkCard = ({ info, key }) => {
    const { name, image1, image2, image3, image4, desc, tools, repo, live, id } = info

    const imageCollection = [];
    if (image1) imageCollection.push(image1)
    if (image2) imageCollection.push(image2)
    if (image3) imageCollection.push(image3)
    if (image4) imageCollection.push(image4)

    const images = imageCollection.map((size) => ({
        src: `${size}`
    }));
    return (
        <div className="col-md-12 px-md-0">
            <Card key={id} className="my-3 shadow row flex-row">
                <div className="col-md-6 m-0 p-0" >
                    <Carousel
                        images={images}
                        shouldLazyLoad={false}
                        autoPlayInterval={3000}
                        isAutoPlaying={true}
                        hasMediaButton={false}
                        hasSizeButton={false}
                    />
                </div>
                <div className="col-md-6" >
                    <Card.Body className="mt-0" >
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {desc}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>{tools.map(each => <h5 className="d-inline mr-2" ><Badge variant="dark">{each}</Badge></h5>)}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link className="text-dark" target="_blank" href={repo}><GoMarkGithub fontSize="25px" className="social-icon" /> <small>Code</small> </Card.Link>
                        <Card.Link className="text-dark" target="_blank" href={live}><GoLinkExternal fontSize="25px" className="social-icon" /> <small>Live</small> </Card.Link>
                    </Card.Body>
                </div>
            </Card>
        </div>
    );
};

export default WorkCard;