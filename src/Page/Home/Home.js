import React from 'react';
import Footer from './Footer';
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
            <Footer />
        </div>
    );
};

export default Home;