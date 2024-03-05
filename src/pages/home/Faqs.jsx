import React, { useState } from 'react'
import QuestionCard from '../../components/cards/QuestionCard';
import questions from '../../data/questions';
import MotionTextShort from '../../components/ui/MotionTextShort';
import UnderlineText from '../../components/ui/UnderlineText';

const Faqs = () => {

    const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

    const handleToggleAccordion = index => {
        setOpenQuestionIndex(openQuestionIndex === index ? null : index);
    }

    return (
        <section className='relative flex flex-col justify-center items-center bg-custom-gradient-bg-inverse-left
            h-auto pt-40 '>
            
            <UnderlineText
                part1={'Got'}
                part2={'Questions?'}

            />
            <div>
                <h2 className='text-center text-white3 text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold
                     pt-6 pb-10' >
                        We Have
                    <span className='app-title' style={{ margin: ' 0 1rem' }}>
                        Answers
                    </span>                      
                </h2>     
            </div> 

            <div className="flex flex-col justify-center items-center space-y-6 pb-64">
                {questions.map((question, index) => (
                <QuestionCard
                    key={index}
                    question={question.question}
                    answer={question.answer}
                    isOpen={index === openQuestionIndex}
                    onToggle={() => handleToggleAccordion(index)}
                />
                ))}
            </div>

            <hr className='w-full h-1 bg-custom-gradient-btn border-none'/>
        </section>
    )
}

export default Faqs;
