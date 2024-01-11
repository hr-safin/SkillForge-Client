import React from 'react';
import { Banner } from './Banner/Banner';
import Offer from './OfferPart/Offer';
import AboutUs from '../About/AboutUs';

const Home = () => {
    return (
        <div className=' min-h-screen'>
            <Banner />
            <Offer />
            <AboutUs />
        </div>
    );
};

export default Home;