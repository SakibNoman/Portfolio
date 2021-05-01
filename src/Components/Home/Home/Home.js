import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import TopNav from '../../Shared/TopNav/TopNav';
import TopSection from '../TopSection/TopSection';

const Home = () => {
    return (
        <section >
            <TopNav></TopNav>
            <TopSection></TopSection>
            <Footer></Footer>
        </section>
    );
};

export default Home;