import React from 'react';
import Submenu from '../components/ui/Submenu';
import MainMenu from '../components/ui/MainMenu';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/ui/Logo';


const NavBar = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('book-appointment');
    }


    return (
        <nav className='bg-navyBlue pt-12 h-[170px]'>
            
            <div className="flex items-center justify-between mx-8 md:mx-24 lg:mx-36 xl:mx-44">

                <Logo/>

                {/* Desktop */}
                <div className="hidden 2xl:flex flex-col relative text-base lg:text-lg xl:text-2xl">
                    <MainMenu/>  
                </div>

                {/* Mobile */}

                <Submenu />
            
            </div>
        </nav>   
    )
}

export default NavBar;

