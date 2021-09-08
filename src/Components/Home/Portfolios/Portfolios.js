import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import abImg1 from '../../../images/ab1.png';
import abImg2 from '../../../images/ab2.png';
import abImg3 from '../../../images/ab3.png';
import abImg4 from '../../../images/ab4.png';
import callingImg1 from '../../../images/Calling-Cabs.png';
import callingImg2 from '../../../images/Calling-Cabs2.png';
import callingImg3 from '../../../images/Calling-Cabs3.png';
import callingImg4 from '../../../images/Calling-Cabs4.png';
import cslImg1 from '../../../images/csl1.png';
import cslImg2 from '../../../images/csl2.png';
import cslImg3 from '../../../images/csl3.png';
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
        desc: 'User can buy products,see their ordered products. Admin can add new product and,delete existing product. Admin can see all ordered products. User have to login to buy products. User specific data will save in database. Currently Admin panel is open for all user.',
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
        desc: 'Calling Cabs is a react app where you can find various types of transport system. We provide services of Family tour, Emergency transport, Goods transportation on reasonable price. This app is easy to use. Just select your desire vehicle and choose your pick up point and destination you will see it on map also.Thank you!',
        tools: ["React", "React Router", "Firebase"],
        repo: 'https://github.com/SakibNoman/Calling-Cabs/',
        live: 'https://calling-cabss.web.app/'
    },
    {
        id: 4,
        name: 'Chittagong Super League',
        image1: cslImg1,
        image2: cslImg2,
        image3: cslImg3,
        desc: 'Chittagong Super League is a react app where you can add different type of players to your cart. A list will be created and sum of salaries of all players will be showed.Thank you!',
        tools: ["React", "React-Bootstrap", "Font Awesome"],
        repo: 'https://github.com/SakibNoman/Chittagong-Super-League',
        live: 'https://eloquent-curran-574b86.netlify.app/'
    }
    ,
    {
        id: 5,
        name: 'Athletics Buzz',
        image1: abImg3,
        image2: abImg2,
        image3: abImg1,
        image4: abImg4,
        desc: 'Athletics Buzz is a react app where you can find useful information on various leagues of the world. Not only the information of a single sport but also all types of sports leagues information you can find in this app.',
        tools: ["React", "React Router", "Netlify", "React-Bootstrap", "Font Awesome"],
        repo: 'https://github.com/SakibNoman/Athletics-Buzz',
        live: 'https://60490451f6a15f07d7550c29--stupefied-mestorf-a36e41.netlify.app/league/4339/Turkish%20Super%20Lig'
    }
]

const Portfolios = () => {

    const isPortfolio = useLocation().pathname === '/portfolio';

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Container className="pt-2 pt-md-0 mt-md-0" >
            <h2 className="text-center" >Portfolios</h2>
            <div type="scale" className="row justify-content-center my-5 mx-0" >
                {
                    works.map((each, index) => {
                        if (index >= 3 && !isPortfolio) return "";
                        else return <WorkCard key={each.id} info={each} ></WorkCard>
                    })
                }
            </div>
            <div className="mb-5 text-center "><Row as={Link} to="/portfolio" className={`text-decoration-none  ${isPortfolio ? "d-none" : "d-block"}`} ><button className="btn btn-outline-success">See more projects</button></Row></div>
        </Container>
    );
};

export default Portfolios;