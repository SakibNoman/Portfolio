import React from 'react';
import { Card } from 'react-bootstrap';

const BlogCard = ({ info }) => {
    const { image, desc, title, url } = info
    return (
        <div className="col-md-4 justify-content-center d-flex">
            <a href={url} rel="noreferrer" className="text-secondary text-decoration-none" target="_blank">
                <Card className="my-3 shadow" style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body >
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {desc}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </a>
        </div>
    );
};

export default BlogCard;