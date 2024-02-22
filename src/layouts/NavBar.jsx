import React from 'react'
import MainMenu from '../components/ui/MainMenu';
import Submenu from '../components/ui/Submenu';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('book-appointment');
    }

    return (
        <nav className='bg-navyBlue py-12 h-[170px]'>
            <div className="flex justify-between items-center mx-8 md:mx-24 lg:mx-36 xl:mx-44">
                <div className='flex space-x-2'>
                <img src="./logo.png" alt="Radiant's logo" className='h-16' />
                <div className='flex flex-col'>
                    <span className="text-4xl font-bold text-azure tracking-wide">Radiant</span>
                    <span className='text-2xl font-medium text-white'>Dental Studio</span>
                </div>
                </div>

                {/* Desktop */}
                <div className="hidden 2xl:flex flex-col relative text-base lg:text-lg xl:text-xl">
                    <MainMenu/>  
                </div>

                <button
                    className='hidden 2xl:block transparent-btn hover:text-white hover:bg-custom-gradient-btn px-10 py-3.5 ml-5'
                    onClick={handleClick}
                    >
                    book online
                </button>

                {/* Mobile */}
                 <Submenu />

            </div>
        </nav>   
    )
}

export default NavBar;

