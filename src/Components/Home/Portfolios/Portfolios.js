import QueueAnim from 'rc-queue-anim';
import React from 'react';
import { Container } from 'react-bootstrap';
import callingImg1 from '../../../images/Calling-Cabs.png';
import callingImg2 from '../../../images/Calling-Cabs2.png';
import callingImg3 from '../../../images/Calling-Cabs3.png';
import callingImg4 from '../../../images/Calling-Cabs4.png';
import gentsImg1 from '../../../images/Gents-Glamor.png';
import gentsImg2 from '../../../images/Gents-Glamor2.png';
import gentsImg3 from '../../../images/Gents-Glamor3.png';
import gentsImg4 from '../../../images/Gents-Glamor4.png';
import refreshImg1 from '../../../images/Refresh-Professional-Painting-Service.png';
import refreshImg2 from '../../../images/Refresh-Professional-Painting-Service2.png';
import refreshImg3 from '../../../images/Refresh-Professional-Painting-Service3.png';
import refreshImg4 from '../../../images/Refresh-Professional-Painting-Service4.png';
import WorkCard from './WorkCard';

const works = [
    {
        id: 1,
        name: 'Refresh Painting',
        image1: refreshImg1,
        image2: refreshImg2,
        image3: refreshImg3,
        image4: refreshImg4,
        desc: "User can take different services as their need, track status of their taken services, see all order history, pay online through credit card. Admin can add new service and delete service that no longer available. Admin can view all order of services and change status of services.Admin can add new admin",
        tools: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase", "Stripe.js"],
        repo: 'https://github.com/SakibNoman/Refresh-Painting-Client',
        live: 'https://refresh-painting.web.app/'
    },
    {
        id: 2,
        name: 'Gents Glamor',
        image1: gentsImg1,
        image2: gentsImg2,
        image3: gentsImg3,
        image4: gentsImg4,
        desc: 'Calling Cabs is a react app where you can find various types of transport system. We provide services of Family tour, Emergency transport, Goods transportation on reasonable price. This app is easy to use. Just select your desire vehicle and choose your pick up point and destination you will see it on map also.Thank you!',
        tools: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase"],
        repo: 'https://github.com/SakibNoman/Gents-Glamor-Client',
        live: 'https://gents-glamor.web.app/'
    },
    {
        id: 3,
        name: 'Calling Cabs',
        image1: callingImg1,
        image2: callingImg2,
        image3: callingImg3,
        image4: callingImg4,
        desc: 'User can buy products,see their ordered products. Admin can add new product and,delete existing product. Admin can see all ordered products. User have to login to buy products. User specific data will save in database. Currently Admin panel is open for all user.',
        tools: ["React", "React Router", "Firebase"],
        repo: 'https://github.com/SakibNoman/Calling-Cabs/',
        live: 'https://calling-cabss.web.app/'
    }
]

const Portfolios = () => {
    return (
        <Container className="mt-5 pt-5 pt-md-0 mt-md-0" >
            <h2 className="text-center" >Portfolios</h2>
            <QueueAnim type="scale" className="row justify-content-center my-5 px-3 mx-0" >
                {
                    works.map(each => <WorkCard key={each.id} info={each} ></WorkCard>)
                }
            </QueueAnim>
        </Container>
    );
};

export default Portfolios;