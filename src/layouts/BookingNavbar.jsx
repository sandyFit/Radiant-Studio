import React from 'react';
import Logo from '../components/ui/Logo';

const BookingNavbar = () => {
    return (
        
        <nav className='bg-[#2d3e5e] py-12 h-[150px]'>
            <div className="flex items-center justify-between mx-8 md:mx-24 lg:mx-36 xl:mx-44">
                <Logo/>
            

                <div className="flex">
                    <h2 className='text-center text-white3 text-xl md:text-3xl xl:text-5xl font-bold
                        w-2/3 lg:w-2/4 xl:w-2/4 2xl:w-full'>
                        <span >
                            Reveal
                            <span className='app-title' style={{ margin: ' 0 1rem' }}>
                                Your Brightest 
                            </span>
                        </span>
                            Smile
                    </h2>
                </div>
            </div>
        </nav>
    )
}

export default BookingNavbar;