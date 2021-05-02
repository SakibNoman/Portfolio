import ParticlesBg from 'particles-bg';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import blogImg from '../../../images/blog.jpeg';
import BlogCard from './BlogCard';

const blogs = [
    {
        id: 1,
        title: 'Getting started JavaScript as a C++ programmer',
        desc: 'If you are a C++ Programmer then starting with JavaScript is almost easier for you... To start journey with a new programming language',
        image: blogImg,
        url: 'https://nomansakib.medium.com/getting-started-javascript-as-a-c-programmer-9577e5f1a584'
    }
]

const Blogs = () => {
    return (
        <Container className="" >
            <h2 className="text-center" >Blogs</h2>
            <Row className="justify-content-center my-5" >
                {
                    blogs.map(each => <BlogCard key={each.id} info={each} ></BlogCard>)
                }
            </Row>
            <ParticlesBg type="color" bg={true} />
        </Container>
    );
};

export default Blogs;