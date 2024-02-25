import React from 'react'
import ImagesGrid from '../../components/cards/ImagesGrid'
import { useNavigate } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';

const Hero = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('book');
    }

    return (
        <section className='bg-custom-gradient-bg-left grid lg:grid-cols-2 2xl:grid-cols-2 relative items-center 
            justify-center px-8'
            style={{ minHeight: `calc(100vh - 170px)` }}>
            
            <article className='grid content-start space-y-12 w-full place-self-center ml-[20rem] lg:px-0 pb-[5rem]'>
                <h1 className='text-[2.7rem] md:text-7xl lg:text-[5.2rem] text-white font-bold w-full max-w-12 
                leading-[3rem]'>
                <span >
                    Reveal
                    <span className='app-title' style={{ margin: ' 0 1rem' }}>
                    Your Brightest 
                    </span>
                </span>
                    Smile
                </h1>
                <p className='text-spanishBlue text-lg md:text-xl lg:text-2xl font-medium w-[45rem]'>
                    Let us take care of your teeth. Our dedicated team of professionals is committed to providing you
                    with first-class dental care.
                </p>
 
                <div className="flex gap-10">
                    <button className='btn-filled group relative overflow-hidden transition px-12 w-72 hover:bg-azure' onClick={handleClick}>
                        <span className='relative'>Book online</span>
                        <div className="animate-shine-infinite absolute inset-0 -top-[20px] flex h-[calc(100%+40px)] w-full justify-center blur-[16px]">
                            <div className="relative h-full w-8 bg-white/40"></div>
                        </div>
                    </button>

                    <div className="flex items-center gap-2">
                        <div className="flex">
                            <img src="/icons/google.png" alt="Google logo" className='w-16'/>
                        </div>

                        <div className="flex flex-col justify-center text-blue-100 h-16">             
                            <p className='text-xl font-semibold'>100 +</p>
                            <div className='space-x-2'>
                                <span className='font-bold'>
                                    {[...Array(5)].map((_, index) => (
                                        <StarIcon key={index} style={{fontSize: '1rem'} } />
                                    ))}
                                </span>
                            </div>
                            <p className='text-sm'>Verified Reviews</p>
                        </div>
                    </div>

                </div>
            </article>

            <article className='w-[90%] place-self-center pr-12'>
                <ImagesGrid/>
            </article>
        </section>
    );
};

export default Hero;
