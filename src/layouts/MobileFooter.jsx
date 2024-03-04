import React from 'react'
import ContactCard from '../components/cards/ContactCard'
import WorkingHrsTable from '../components/forms/WorkingHrsTable'
import NewsletterInput from '../components/forms/NewsletterInput'
import { Link } from 'react-router-dom'

const MobileFooter = () => {
    return (
        <article className="flex flex-col justify-center items-center bg-spaceCadet min-w-full h-auto">
            <div id='contact'>
                <ContactCard/>
            </div>

            <div className="flex flex-col lg:flex-row gap-24 lg:gap-[12.5vw] my-16">
                <div className="flex flex-col justify-center items-center ">
                    <h4 className='text-white3 text-center text-2xl font-semibold'>
                        WORKING HOURS
                    </h4>
                    <div className="flex justify-center">
                        <WorkingHrsTable/>
                    </div>
                </div>

                <div className='w-[18rem] flex flex-col items-center mb-12 lg:mb-0'>
                    <h4 className='text-white3 text-center text-2xl font-semibold mb-6'>
                        NEWSLETTER SIGN UP
                    </h4>
                    <NewsletterInput/>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row justify-center lg:justify-between items-center w-full h-24 
                gap-2 px-16 bg-midnight'>
                <p className="text-md md:text-lg font-medium text-blue-400 text-center">
                    © 2024 Design & Development by Trish Ramos.
                </p>
                <div className="flex justify-evenly list-none text-md md:text-lg font-medium text-blue-400">
                        <Link to='/terms' 
                            style={{color: '#60A5FA', textDecoration: 'none', marginRight: '1rem' }}>
                            Terms of Use
                        </Link>
                            |
                        <Link to='/policy' 
                            style={{color: '#60A5FA', textDecoration: 'none', marginLeft: '1rem'}}>
                            Privacy Policy
                        </Link>                          
                    </div>
            </div>

        </article>
    )
}

export default MobileFooter;
