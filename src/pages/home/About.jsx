import React from 'react'

const About = () => {
    return (
        <section className="relative py-[18rem] bg-custom-gradient-bg-inverse flex justify-center
            items-center">
            <img src="/images/dots.png" alt="dots" className='absolute w-72 left-36 bottom-24 opacity-45' />
            <img src="/images/dots.png" alt="dots" className='absolute w-72 left-[36rem] top-[7rem] rotate-90 opacity-45' />
            <article className='w-1/2 bg-white shadow-lg transform -rotate-3 px-8 pt-6 pb-24 ml-[16rem]'>
                
                <img src="/images/dental-studio.jpg" alt="Dental Studio" className='' />
            </article>

            <article className='flex flex-col justify-center items-center'>
                <h2 className='text-center text-white3 text-3xl md:text-5xl xl:text-7xl font-bold
                    w-2/3 lg:w-2/4 xl:w-2/4 2xl:w-[50rem]'>
                    Welcome to
                    <span className='app-title ' style={{ margin: ' 0 1rem' }}>
                        Radiant Dental
                    </span>         
                    Studio
                </h2>

                <p className='text-lg md:text-xl xl:text-2xl text-white3 font-medium mt-8 w-3/4 lg:w-2/4 xl:w-2/4 2xl:w-3/5'>
                    At Radiant Dental Studio, your well-being is our top priority. We cultivate robust dentist-patient
                    relationships by prioritizing your needs.
                    <br/><br/>
                    With cutting-edge equipment, we deliver exceptional dental care, ensuring your interests come first
                    for a healthier, brighter smile.
                    <br/><br/>
                     Serving all ages in Northern New Jersey, our state-of-the-art facility in Jersey City offers a
                    welcoming environment. Trust us for comprehensive dental care with a commitment to excellence.
                </p>
            </article>
        </section>
    )
}

export default About