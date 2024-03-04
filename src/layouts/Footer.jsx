import WorkingHrsTable from '../components/forms/WorkingHrsTable';
import NewsletterInput from '../components/forms/NewsletterInput';
import ContactCard from '../components/cards/ContactCard';
import MobileFooter from './MobileFooter';
import { Link } from '@mui/material';



const Footer = () => {


    return (
        <section className='bg-custom-gradient-bg-right h-[50rem] lg:h-[35rem]'>

            {/* Desktop */}

            <article className='relative z-1 hidden 2xl:flex flex-col justify-between'>

                <div className='flex justify-evenly space-x-6 text-spaceCadet pl-32'>
                    <div id="contact">
                        <ContactCard/>
                    </div>
          
                    <div className="flex flex-col w-full px-20">
                        <div className="flex justify-evenly items-center w-full">
                            <div className='w-1/2 flex flex-col justify-center items-center mt-[5rem]'>
                                <h4 className='text-white3 text-center text-2xl font-semibold mb-3'>
                                WORKING HOURS
                                </h4>
                                <WorkingHrsTable />                                     
                            </div>

                            <div className='w-1/2 flex flex-col items-center mt-[5rem]'>
                                <h4 className='text-white3 text-center text-2xl font-semibold mb-8'>
                                NEWSLETTER SIGN UP
                                </h4>
                                <NewsletterInput/>
                            </div>
                        </div>
                        
                    </div>
                    

                </div>

                
                <div className='absolute inset-0 top-[35rem] w-full h-16 bg-[#111f3b] flex items-center justify-end
                    text-center pr-[3rem] 2xl:pr-[7.8em] gap-[5rem] 2xl:gap-[12.5em]'>
                    <p className="text-lg font-light text-blue-400 ">
                        © 2024 Design & Development by Trish Ramos. 
                    </p>
                    <div className="flex justify-evenly text-blue-400
                        list-none text-lg w-[22%] pr-[5rem] ">
                        <Link to='/terms' 
                            style={{color: '#60A5FA', textDecoration: 'none'}}>
                            Terms of Use
                        </Link>
                            |
                        <Link to='/policy' 
                            style={{color: '#60A5FA', textDecoration: 'none'}}>
                            Privacy Policy
                        </Link>                          
                    </div>
                </div>

            </article>

            {/* Mobile */}
            <article className="2xl:hidden flex flex-col justify-center items-center">
                <MobileFooter/>
            </article>
      
        </section>
    )
}

export default Footer;
