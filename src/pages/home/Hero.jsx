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
        <section className='bg-custom-gradient-bg-left grid grid-cols-1 lg:grid-cols-2 relative'
            style={{ minHeight: `calc(100vh - 170px)` }}>
            
            <div className='lg:hidden grid place-self-center w-8/12 p-4 mb-10 md:mb-16 bg-white shadow-lg shadow-slate-900 
                transform rotate-2 mt-2 md:mt-4'>
                <div className="image-container">
                    
                    <div className={`curtain bg-slate-600 opacity-95`}>
                        
                    </div>
                    <img src='/people/black-girl.jpg' alt='beautiful-black-girl-smiling' className="w-full"/>
                </div>
                <div className="p-4"></div>
            </div>
            
            <article className='grid space-y-8 md:space-y-12 w-full place-self-center ml-[11rem] md:ml-[16rem] lg:ml-[17.75vw] pb-[5rem]'>
                <h1 className='text-[2.7rem] md:text-[3.5rem] lg:text-[4.2rem] 2xl:text-[5.2rem] text-white 
                font-bold w-9/12 leading-[1em]'>
                <span >
                    Reveal
                    <span className='app-title' style={{ margin: ' 0 1rem' }}>
                    Your Brightest 
                    </span>
                </span>
                    Smile
                </h1>
                <p className='text-spanishBlue text-lg md:text-xl lg:text-2xl font-medium w-9/12'>
                    Let us take care of your teeth. Our dedicated team of professionals is committed to providing you
                    with first-class dental care.
                </p>
 
                <div className="flex flex-col md:flex-row gap-10">

                    <button className="group relative overflow-hidden overflow-x-hidden btn-filled px-12 py-4 w-72"
                        onClick={handleClick}
                    >
                        <span className="relative z-10">Book online</span>
                        <span className="absolute inset-0 overflow-hidden rounded-md">
                            <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full 
                            bg-blue-500 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150">
                            </span>
                        </span>
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

            <article className='hidden lg:grid w-[90%] place-self-center pr-24'>
                <ImagesGrid/>
            </article>
        </section>
    );
};

export default Hero;
