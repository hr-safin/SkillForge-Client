import React from 'react';
import LiveClass from '../Course/LiveClasses/LiveClass';
import Choose from '../Choose/Choose';
import About from './About';

const AboutSection = () => {
    return (
        <div className=' pt-20 min-h-screen'>
            <About />
            <LiveClass />
            <Choose />
        </div>
    );
};

export default AboutSection;