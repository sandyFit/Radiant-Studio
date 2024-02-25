import React, { useEffect, useState } from 'react'
import ReviewsCard from './ReviewsCard';
import { ChevronLeftRounded, ChevronRightRounded } from '@mui/icons-material';

const ReviewsCarousel = ({ reviews, autoSlide, autoSlideInterval }) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const getVisibleCards = () => {
        const width = window.innerWidth;
        if (width < 640) return 1;
        if (width < 1280) return 2;
        return 3;
    }

    const [visibleCards, setVisibleCards] = useState(getVisibleCards());

    useEffect(() => {
    const handleResize = () => {
        const newVisibleCards = getVisibleCards();
        setVisibleCards(newVisibleCards);

        // Adjust this condition to ensure we're not setting an activeIndex that's out of bounds
        if (activeIndex + newVisibleCards > reviews.length) {
            setActiveIndex(reviews.length - newVisibleCards); // Ensure the last card is visible and not beyond
        }
    }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [activeIndex, reviews.length, visibleCards]); // Added visibleCards to the dependencies array



    const goNext = () => {
        setActiveIndex((prevIndex) => {
            // Instead of returning undefined when reaching the end, loop back to 0
            let nextIndex = prevIndex + 1;
            if (nextIndex + visibleCards - 1 >= reviews.length) { // Adjusted condition to account for visibleCards
                return 0; // Loop back to the start
            }
            else {
                return nextIndex;
            }
        });
    }


    const goPrev = () => {
        setActiveIndex((prevIndex) => {
            if (prevIndex === 0) {
                return reviews.length - visibleCards; // Got to the last set of items
            }
            else {
                return Math.max(0, prevIndex - 1);
            }
        })
    }

    //  useEffect(() => {
    //     if (!autoSlide) return;
    //     const slideInterval = setInterval(() => {
    //         goNext();
    //     }, autoSlideInterval);
    //     return () => clearInterval(slideInterval);
    // }, [autoSlide, autoSlideInterval, goNext]);


    const renderCards = () => {
        let cards = [];
        for (let i = 0; i < visibleCards; i++) {
            const reviewIndex = (activeIndex + i) % reviews.length;
            const review = reviews[reviewIndex];
            console.log(`Rendering card for review at index: ${reviewIndex}`, review);
            if (review) {
                cards.push(
                    <ReviewsCard key={reviewIndex} index={reviewIndex} {...review} />
                );
            }
        }
        console.log(cards); // Debug: Check the resulting cards array
        return cards;
    };


    return (
        <div className='flex justify-center items-center space-x-8'>
            <button className='p-3 ml-4 text-azure' onClick={goPrev}>
                <ChevronLeftRounded style={{ fontSize: '6rem' }} />
            </button>
            <div className='relative overflow-x-hidden w-auto'>
                <div className='flex gap-6'>
                    {renderCards()}
                </div>
            </div>
            <button className='p-3 mr-4 text-azure' onClick={goNext}>
                <ChevronRightRounded style={{ fontSize: '6rem' }} />
            </button>
        </div>
    )
}

export default ReviewsCarousel;
