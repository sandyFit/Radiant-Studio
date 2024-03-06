import React from 'react';
import Submenu from '../components/ui/Submenu';
import MainMenu from '../components/ui/MainMenu';
import Logo from '../components/ui/Logo';



const NavBar = () => {


    return (
        <nav className='bg-navyBlue pt-2 lg:pt-12 h-[120px] lg:h-[170px]'>
            
            <div className="flex items-center justify-between mx-8 md:mx-24 lg:mx-36 xl:mx-44">

                <Logo/>

                {/* Desktop */}
                <div className="hidden 2xl:flex flex-col relative text-xl ">
                    <MainMenu/>  
                </div>

                {/* Mobile */}

                <Submenu/>
            
            </div>
        </nav>   
    )
}

export default NavBar;

