import React, { useEffect, useState } from 'react'
import MotionText from '../../components/ui/MotionText'
import { Element, animateScroll as scroll } from 'react-scroll';
import { ArrowUpward, Close, Menu } from '@mui/icons-material';
import MenuCurtain from '../../components/cards/MenuCurtain';

const About = () => {

    const [showFloatingBtn, setShowFloatingBtn] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;

        // Adjust the scroll threshold based on your layout
        const scrollThreshold = 1140;

        if (scrollPosition > scrollThreshold) {
        setShowFloatingBtn(true);
        } else {
        setShowFloatingBtn(false);
        }
    };


    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

  useEffect(() => {
    // Add event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return (
        <Element className='flex flex-col py-[3rem] bg-custom-gradient-bg-inverse-left' >
                <MotionText part1={'Welcome to'}
                    part2={'Radiant Dental'}
                    part3={'Studio'}
                />

            <div className="relative py-[6rem] flex flex-col xl:flex-row justify-center items-center gap-16 md:gap-24">
                
                <img src="/images/dots.png" alt="dots" className='hidden 2xl:block absolute w-72 left-24 bottom-2 opacity-25' />
                <img src="/images/dots.png" alt="dots" className='hidden 2xl:block absolute w-72 left-[40rem] -top-6 rotate-90 opacity-25' />

                <article className='w-9/12 lg:w-8/12 2xl:w-1/2 bg-white shadow-xl shadow-slate-900 transform -rotate-3 px-8 pt-6 
                    pb-24 ml-[1rem] lg:ml-36 2xl:ml-[16rem]'>                   
                    <img src="/images/dental-studio.jpg" alt="Dental Studio"/>
                </article>

                <article className='flex flex-col justify-center items-center relative'>

                    <button onClick={toggleMenu}
                        className={`fixed p-5 top-8 right-[110rem] group inline-flex items-center 
                            justify-center overflow-hidden rounded-full bg-white3 bg-opacity-30 
                            z-50 ${showFloatingBtn ? '' : 'invisible'} `}>
                        <div className={`transition duration-300 text-spaceCadet ${isMenuOpen ? 'rotate-icon' : ''}`}>
                            {isMenuOpen ? <Close style={{fontSize: '3rem'}} /> : <Menu style={{fontSize: '3rem'}} />}
                        </div>
                    </button>

                
                    <div className={`z-30 ${showFloatingBtn ? '' : 'invisible'}`}>                       
                        {isMenuOpen && (
                            <MenuCurtain isMenuOpen={isMenuOpen}
                                
                            />
                        
                        )}
                    </div>
                        

                    <button onClick={scrollToTop}
                        className={`fixed p-5 left-96 2xl:left-[110rem] 2xl:top-[48rem] group inline-flex  items-center 
                            justify-center overflow-hidden rounded-full bg-white3 bg-opacity-30 z-50
                            ${showFloatingBtn ? '' : 'invisible'}`}>
                        <div className="transition duration-300 group-hover:rotate-[360deg] text-spaceCadet">
                            <ArrowUpward style={{fontSize: '3rem'}}/>
                        </div>
                    </button>

                    <h2 className='text-center text-white3 text-3xl md:text-4xl xl:text-5xl font-bold
                        w-2/3 lg:w-3/4 2xl:w-3/5'>
                        Service and Safety is Our
                        <span className='app-title ' style={{ margin: ' 0 1rem' }}>
                            Priority
                        </span>         
                        
                    </h2>

                    <p className='text-lg md:text-xl 2xl:text-2xl text-white3 font-light mt-8 w-3/4 
                        2xl:w-3/5'>
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
        </Element>
    )
}

export default About;
