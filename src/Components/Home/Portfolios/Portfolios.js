import QueueAnim from 'rc-queue-anim';
import React from 'react';
import { Container } from 'react-bootstrap';
import callingImg from '../../../images/Calling-Cabs.png';
import gentsImg from '../../../images/Gents-Glamor.png';
import refreshImg from '../../../images/Refresh-Professional-Painting-Service.png';
import WorkCard from './WorkCard';

const works = [
    {
        id: 1,
        name: 'Refresh Painting',
        image: refreshImg,
        desc: "User can take different services, and track the state of services, pay online.",
        tools: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase", "Stripe.js"],
        repo: 'https://github.com/SakibNoman/Refresh-Painting-Client',
        live: 'https://refresh-painting.web.app/'
    },
    {
        id: 2,
        name: 'Gents Glamor',
        image: gentsImg,
        desc: 'User can buy products and see their ordered history.Admin can add products',
        tools: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase"],
        repo: 'https://github.com/SakibNoman/Gents-Glamor-Client',
        live: 'https://gents-glamor.web.app/'
    },
    {
        id: 3,
        name: 'Calling Cabs',
        image: callingImg,
        desc: 'User can rent different transport as their need, search place.Firebase Authentication',
        tools: ["React", "React Router", "Firebase"],
        repo: 'https://github.com/SakibNoman/Calling-Cabs/',
        live: 'https://calling-cabss.web.app/'
    }
]

const Portfolios = () => {
    return (
        <Container className="mt-5 pt-5 pt-md-0 mt-md-0" >
            <h2 className="text-center" >Portfolios</h2>
            <QueueAnim type="scale" className="row justify-content-center my-5" >
                {
                    works.map(each => <WorkCard key={each.id} info={each} ></WorkCard>)
                }
            </QueueAnim>
        </Container>
    );
};

export default Portfolios;