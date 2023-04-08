import React from 'react';
import Header from './Header';
import WhyChoose from './WhyChoose';
import DoWeSell from './DoWeSell';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Header />
            <Slider />
            <DoWeSell />
            <WhyChoose />
        </div>
    );
};

export default Home;