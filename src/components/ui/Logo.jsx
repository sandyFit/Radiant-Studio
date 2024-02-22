import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div className='flex space-x-2'>
             <Link to="/" className="flex flex-row items-center space-x-2">
                {/* <img src="./logo.png" alt="Radiant's logo" className='h-16' /> */}
                <div className='flex flex-col'>
                    <span className="text-4xl font-bai uppercase font-bold text-azure tracking-[.5em]">Radiant</span>
                    <span className='text-base text-right pr-4 font-medium uppercase text-white'>Dental Studio</span>
                </div>
            </Link>
        </div>
    )
}

export default Logo