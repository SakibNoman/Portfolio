import React from 'react';
import TopNav from '../../Shared/TopNav/TopNav';
import Blogs from '../Blogs/Blogs';
import Portfolios from '../Portfolios/Portfolios';
import TopSection from '../TopSection/TopSection';

const Home = () => {
    return (
        <section >
            <TopNav></TopNav>
            <TopSection></TopSection>
            <Portfolios></Portfolios>
            <Blogs></Blogs>
        </section>
    );
};

export default Home;