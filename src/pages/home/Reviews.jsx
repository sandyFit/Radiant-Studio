import React from 'react';
import reviews from '../../data/reviewsData';
import ReviewsCarousel from '../../components/cards/ReviewsCarousel';

const Reviews = () => {
    return (
        <section className='bg-custom-gradient-bg-left flex flex-col justify-center pt-36'>
            <div className="flex flex-col items-center gap-8 relative">
                <h2 className='text-center text-white3 text-3xl md:text-6xl font-bold w-2/3 
                    lg:w-2/4 xl:w-2/4 2xl:w-4/5 pt-20 lg:pt-4' >
                    What   
                    <span className='app-title' style={{ margin: ' 0 1rem' }}>
                        Our Patients
                    </span>   
                    Say About Us
                </h2>

                <p className='text-oceanBlue text-lg md:text-xl xl:text-2xl font-medium w-3/4 md:w-2/4 2xl:w-[64%]'>
                    Radiant Dental Studio always appreciates feedback from our valued patients.
                    To date, we're thrilled to have collected over 100 reviews with an average rating of 5 out of 5 stars.
                    Please read what others are saying about us below, and as always, we would love to
                    <span className='border-b-2 border-spanishBlue' style={{ margin: ' 0 .6rem' }}>
                        <a href="#">collect your feedback.</a>
                    </span>
                </p>
            </div>

            {/* Cards Render Dynamically acording to Responsive Size */}
            <div className="flex justify-center items-center space-x-4" >
                <ReviewsCarousel
                reviews={reviews}
                autoSlide={true}
                autoSlideInterval={6000}
                />

            </div>
        </section>
    )
}

export default Reviews;
