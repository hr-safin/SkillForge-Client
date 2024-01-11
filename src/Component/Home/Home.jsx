import React from 'react';
import { Banner } from './Banner/Banner';
import Offer from './OfferPart/Offer';
import AboutUs from '../About/AboutUs';
import Course from './Course/Course';
import LiveClass from './Course/LiveClasses/LiveClass';
import Choose from './Choose/Choose';

const Home = () => {
    return (
        <div className=' min-h-screen'>
            <Banner />
            <Offer />
            <AboutUs />
            <Course />
            <LiveClass />
            <Choose />
        </div>
    );
};

export default Home;