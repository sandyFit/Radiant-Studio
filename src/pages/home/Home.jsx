import React from 'react';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Team from './Team';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <section id='hero'>        
                <Hero />
            </section>
            <section id="about">
                <About/>
            </section>
            <section id="services">
                <Services/>
            </section>
            <section id="team">
                <Team/>
            </section>
            <section id="reviews">
                <Reviews/>
            </section>
        </div>
    )
}

export default Home