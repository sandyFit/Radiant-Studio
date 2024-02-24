import React from 'react';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Team from './Team';

const Home = () => {
    return (
        <div>
            <section>        
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
        </div>
    )
}

export default Home