import React from 'react'
import ServicesCard from '../../components/cards/ServicesCard';
import servicesCardData from '../../data/servicesCardData.json';

const Services = () => {
    return (
        <section className='flex justify-center bg-custom-gradient-bg-right py-12'>
            <div className="flex flex-col items-center gap-8">
                <h2 className='text-center text-white3 text-3xl md:text-6xl font-bold w-2/3 
                    lg:w-2/4 xl:w-2/4 2xl:w-4/5 pt-20 lg:pt-4' data-aos="fade-up">
                    Discover Our Exceptional  
                    <span className='app-title' style={{ margin: ' 0 1rem' }}>
                        Dental Services
                    </span>         
                </h2>

                <p className='text-oceanBlue text-lg md:text-xl xl:text-2xl font-medium w-3/4 md:w-2/4 2xl:w-[64%]'
                    data-aos="fade-up">
                    We provide a wide range of treatments, including cosmetic dentistry. Our commitment is rooted in
                    assisting patients in preserving lifelong healthy teeth. Trust us for diverse services aimed at
                    enhancing both the aesthetics and longevity of your smile.
                </p>
                  
                <article className="flex flex-wrap gap-20 w-3/5 mt-4" data-aos='zoom-in-up'>
                    {servicesCardData.map((service, index) => (
                        <div key={index} className=''>                    
                            <ServicesCard
                                iconSrc={service.iconSrc}
                                title={service.title}
                                description={service.description}
                            />
                        </div>
                    ))}
                </article>

            </div>             

        </section>
    )
}

export default Services;
