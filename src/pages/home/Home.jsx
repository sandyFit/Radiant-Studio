import React from 'react';
import Hero from './Hero';
import About from './About';
import Services from './Services';

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
        </div>
    )
}

export default Home