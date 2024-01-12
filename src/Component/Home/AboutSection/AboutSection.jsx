import React from 'react';
import LiveClass from '../Course/LiveClasses/LiveClass';
import Choose from '../Choose/Choose';
import About from './About';
import AboutUs from '../../About/AboutUs';

const AboutSection = () => {
    return (
        <div className=' pt-20 min-h-screen'>
            <AboutUs />
            <LiveClass />
            <Choose />
        </div>
    );
};

export default AboutSection;