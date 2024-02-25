import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import StarIcon from '@mui/icons-material/Star';
import reviews from '../../data/reviewsData';
import { renderDescription } from '../../utils/functions';

const Reviews = () => {
    return (
        <section className='bg-custom-gradient-bg-left flex flex-col justify-center'>
            <div className="flex flex-col items-center gap-8 relative">
                <h2 className='text-center text-white3 text-5xl font-bold' data-aos="fade-up">
                    What   
                    <span className='app-title' style={{ margin: ' 0 1rem' }}>
                        Our Patients
                    </span>   
                    Say About Us
                </h2>

                <p className='text-oceanBlue text-lg md:text-xl xl:text-2xl font-medium w-3/4 md:w-2/4 2xl:w-[64%]'
                    data-aos="fade-up">
                    Radiant Dental Studio always appreciates feedback from our valued patients.
                    To date, we're thrilled to have collected over 100 reviews with an average rating of 5 out of 5 stars.
                    Please read what others are saying about us below, and as always, we would love to
                    <span className='border-b-2 border-spanishBlue' style={{ margin: ' 0 .6rem' }}>
                        <a href="#">collect your feedback.</a>
                    </span>
                </p>
            </div>

            <Carousel
                centerMode={true}
                centerSlidePercentage={30}
                showArrows={true}
                showThumbs={false}
                showStatus={false}
                useKeyboardArrows
                className="pt-16"
            >
                
                {reviews.map((review, index) => (
                
                    <div key={index} className=' gradient-border rounded-3xl p-12'>  
                        <div className="flex flex-col justify-center space-x-4">
                            <div className=" flex justify-center items-center">
                                <img src={review.srcImg} alt={`${review.name} avatar`}
                                    style={{width: '88px', border: 'solid 3px #53B4DE', borderRadius: '50%'}} />
                                
                                <div className='space-x-2'>
                                    <span className='font-bold text-yellow-400'>
                                        {[...Array(5)].map((_, index) => (
                                            <StarIcon key={index} style={{fontSize: '2rem'} } />
                                        ))}
                                    </span>
                                </div>
                            </div>
                            <h4 className='text-spanishBlue text-4xl font-bold'>{review.name}</h4>
                        </div>
                        <p className='text-spanishBlue text-xl pb-6'>{renderDescription(review.review)}</p>
                    </div>
                ))}
            </Carousel>
        </section>
    );
};

export default Reviews;
