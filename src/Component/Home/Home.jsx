import React from 'react';
import { Banner } from './Banner/Banner';
import Offer from './OfferPart/Offer';

const Home = () => {
    return (
        <div className=' min-h-screen'>
            <Banner />
            <Offer />
        </div>
    );
};

export default Home;