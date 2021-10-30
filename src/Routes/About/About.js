import React from 'react';
import { Container } from 'react-bootstrap';
import Hero from '../Hero/Hero';
import Places from '../Landing Page/Places/Places';

const About = () => {
    return (
        <div className="text-center">
            <Container>
                <br /> <br /> <br />
                <h2 className="text-center display-3 mt-5"> About Us</h2>
                <hr className="w-25 fw-bold border border-5 border-white rounded  mx-auto" />
                <p className="fs-3">Hi, TourDaw is a online Travelling platform, Where you can choose nice places and Book tickets online for your best vacation.</p>
            </Container>
            <Places>BOOK YOUR VACATION</Places>
            <Hero>PLACES</Hero>

        </div>
    );
};

export default About;