import ParticlesBg from 'particles-bg';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import blogImg from '../../../images/blog.jpeg';
import blogImg2 from '../../../images/blog2.jpeg';
import BlogCard from './BlogCard';

const blogs = [
    {
        id: 1,
        title: 'Getting started JavaScript as a C++ programmer',
        desc: 'If you are a C++ Programmer then starting with JavaScript is almost easier for you... To start journey with a new programming language',
        image: blogImg,
        url: 'https://nomansakib.medium.com/getting-started-javascript-as-a-c-programmer-9577e5f1a584'
    },
    {
        id: 2,
        title: '10 JavaScript concept you should read again',
        desc: 'JavaScripts number data type is so different from integer of other programming languages... for example, binary 2, octal 8, hexadecimal 16, decimal 10.',
        image: blogImg2,
        url: 'https://nomansakib.medium.com/10-javascript-concept-you-should-read-again-76128399346e'

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
            <ParticlesBg type="ball" bg={true} />
        </Container>
    );
};

export default Blogs;