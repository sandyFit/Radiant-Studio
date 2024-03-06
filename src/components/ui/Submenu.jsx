import { Call, Close, Group, Info, LiveHelp, LocalHospitalRounded, Reviews } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import React, {useState} from 'react'
import { Link as ScrollLink } from 'react-scroll';

const Submenu = () => {  

    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    const toggleSubMenu = () => {
        setIsSubmenuOpen(!isSubmenuOpen);
    }


    return (
        <article className='lg:hidden relative space-y-8 py-6'>
            <button className="rounded p-1 text-spanishBlue border-2 border-spanishBlue hover:bg-cyan-400 
                  hover:text-zinc-50 transition-colors focus:ring-2 focus:ring-slate-400"
                onClick={toggleSubMenu}
            >
                {isSubmenuOpen ? <Close /> : <MenuIcon />}
            </button>
            
            <ul className={` bg-custom-gradient-bg-cards w-[100vw] h-auto duration-500 space-y-auto pl-24 pt-12 pb-16
                absolute right-0 top-12 z-50 ${isSubmenuOpen ? 'visible' : 'hidden'}`}
            >
                <h4 className='text-2xl text-white3 font-semibold'>
                    Menu
                </h4>
                <hr className='w-[90%] mt-2'/>
                <li className='block px-3 py-6 rounded-md text-white3 font-medium space-x-4 mt-8
                    hover:text-slate-400'>
                    <Info/>
                    <ScrollLink to='about' smooth={true} duration={500}>
                    About Us
                    </ScrollLink>
                </li>

                <li className='px-3 pb-6 rounded-md text-white3 font-medium space-x-4
                    hover:text-slate-400'>
                    <LocalHospitalRounded/>
                    <ScrollLink to='services' smooth={true} duration={500}>
                        Services
                    </ScrollLink>
                </li>
                    
                <li className='block px-3 pb-6 rounded-md text-white3 font-medium space-x-4
                    hover:text-slate-400'>
                    <Group/>
                    <ScrollLink to='team' smooth={true} duration={500}>
                    Our Team
                    </ScrollLink>
                </li>

                <li className='block px-3 pb-6 rounded-md text-white3 font-medium space-x-4
                    hover:text-slate-400'>
                    <Reviews/>
                    <ScrollLink to='reviews' smooth={true} duration={500}>
                    Testimonials
                    </ScrollLink>
                </li>

                <li className='block px-3 pb-6 rounded-md text-white3 font-medium space-x-4
                    hover:text-slate-400'>
                    <LiveHelp/>
                    <ScrollLink to='faq' smooth={true} duration={500}>
                    FAQs
                    </ScrollLink>
                </li>

                <li className='block px-3  rounded-md text-white3 font-medium space-x-4
                    hover:text-slate-400'>
                    <Call/>
                    <ScrollLink to='contact' smooth={true} duration={500}>
                    Contact us
                    </ScrollLink>
                </li>
            </ul>

          </article>
    )
}

export default Submenu;
