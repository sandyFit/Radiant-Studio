import React from 'react'
import MotionText from '../../components/ui/MotionText'

const About = () => {
    return (
        <section className='flex flex-col py-[3rem] bg-custom-gradient-bg-inverse'>
            <MotionText/>
            <div className="relative py-[6rem] flex justify-center items-center">
                
                <img src="/images/dots.png" alt="dots" className='absolute w-72 left-24 bottom-2 opacity-25' />
                <img src="/images/dots.png" alt="dots" className='absolute w-72 left-[40rem] -top-6 rotate-90 opacity-25' />

                <article className='w-1/2 bg-white shadow-xl shadow-slate-900 transform -rotate-3 px-8 pt-6 pb-24 ml-[16rem]'>                   
                    <img src="/images/dental-studio.jpg" alt="Dental Studio" className='' />
                </article>

                <article className='flex flex-col justify-center items-center'>
                    <h2 className='text-center text-white3 text-3xl md:text-5xl xl:text-6xl font-bold
                        w-2/3 lg:w-2/4 xl:w-2/4 2xl:w-3/5'>
                        Service and Safety is Our
                        <span className='app-title ' style={{ margin: ' 0 1rem' }}>
                            Priority
                        </span>         
                        
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
            </div>
        </section>
    )
}

export default About;
