import React from 'react'
import ImagesGrid from '../../components/cards/ImagesGrid'
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('book');
    }

    return (
        <section className='bg-custom-gradient-bg grid lg:grid-cols-2 2xl:grid-cols-2 relative items-center 
            justify-center px-8'
            style={{ minHeight: `calc(100vh - 170px)` }}>
            
            <article className='grid content-start space-y-12 pt-[2rem] w-full place-self-center ml-[20rem] lg:px-0'>
                <h1 className='text-[2.7rem] md:text-7xl lg:text-8xl text-white font-bold leading-[3rem]'>
                    <span>
                        Where
                        <span className='text-spanishBlue' style={{ margin: '0 1rem' }}>
                            Healthy Smiles
                        </span>
                    </span>
                    Begin
                </h1>
                <p className='text-spanishBlue text-lg md:text-xl lg:text-2xl font-medium w-[45rem]'>
                    Let us take care of your teeth. Our dedicated team of professionals is committed to providing you with top-notch dental care.
                </p>
 
                <button className='btn-filled group relative overflow-hidden transition p-5 w-72 hover:bg-azure' onClick={handleClick}>
                    <span className='relative'>Book online</span>
                    <div className="animate-shine-infinite absolute inset-0 -top-[20px] flex h-[calc(100%+40px)] w-full justify-center blur-[16px]">
                        <div className="relative h-full w-8 bg-white/40"></div>
                    </div>
                </button>
            </article>

            <article className='w-10/12 place-self-center pr-12'>
                <ImagesGrid/>
            </article>
        </section>
    );
};

export default Hero;
