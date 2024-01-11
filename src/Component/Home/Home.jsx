import React from 'react';
import { Banner } from './Banner/Banner';
import Offer from './OfferPart/Offer';
import AboutUs from '../About/AboutUs';
import Course from './Course/Course';
import LiveClass from './Course/LiveClasses/LiveClass';

const Home = () => {
    return (
        <div className=' min-h-screen'>
            <Banner />
            <Offer />
            <AboutUs />
            <Course />
            <LiveClass />
        </div>
    );
};

export default Home;