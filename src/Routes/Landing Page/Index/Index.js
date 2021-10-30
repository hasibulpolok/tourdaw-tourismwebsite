import React from 'react';
import ContacUs from '../../ContactUs/ContacUs';
import Hero from '../../Hero/Hero';
import Carouesl from '../Carousel/Carouesl';
import Places from '../Places/Places';

const Index = () => {
    return (
        <div className="mt-5 mb-5">
            <Carouesl></Carouesl>
            <Places>Our Places</Places>
            <Hero>TourDaw Gallery</Hero>
            <ContacUs></ContacUs>
        </div>
    );
};

export default Index;