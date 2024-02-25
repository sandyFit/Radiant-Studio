import React from 'react';
import { Link as ScrollLink } from 'react-scroll';


const MenuCurtain = ({isMenuOpen}) => {
    return (
        <article className='flex flex-col justify-center
            rounded-3xl bg-custom-gradient-bg-cards p-36 menu-article'
            style={{
                transform: isMenuOpen ? 'translateX(0)' : 'translateX(-100%)'
            }}
        >
            {/* Menu items */}

            <ul className="flex flex-col items-start gap-6">
           
                <li className='text-white3 text-6xl font-anybody font-bold hover:opacity-75'>
                    <ScrollLink to='hero' smooth={true} duration={500}>
                        Home
                    </ScrollLink>
                </li>

                <li className='text-white3 text-6xl font-anybody font-bold hover:opacity-75'>
                    <ScrollLink to='about' smooth={true} duration={500}>
                        About Us
                    </ScrollLink>
                </li>

                <li className='text-white3 text-6xl font-anybody font-bold hover:opacity-75'>
                    <ScrollLink to='services' smooth={true} duration={500}>
                        Services
                    </ScrollLink>
                </li>
                
                <li className='text-white3 text-6xl font-anybody font-bold hover:opacity-75'>
                    <ScrollLink to='team' smooth={true} duration={500}>
                        Our Team
                    </ScrollLink>
                </li>

                <li className='text-white3 text-6xl font-anybody font-bold hover:opacity-75'>
                    <ScrollLink to='reviews' smooth={true} duration={500}>
                        Testimonials
                    </ScrollLink>
                </li>

                <li className='text-white3 text-6xl font-anybody font-bold hover:opacity-75'>
                    <ScrollLink to='faq' smooth={true} duration={500}>
                        FAQs
                    </ScrollLink>
                </li>

                <li className='text-white3 text-6xl font-anybody font-bold hover:opacity-75'>
                    <ScrollLink to='contact' smooth={true} duration={500}>
                        Contact Us
                    </ScrollLink>
                </li>
            </ul>      
        </article>
    )
}

export default MenuCurtain;
