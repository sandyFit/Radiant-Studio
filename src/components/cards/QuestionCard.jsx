import { Add, Remove } from '@mui/icons-material';
import React from 'react';
import { renderDescription } from '../../utils/functions';

const QuestionCard = ({ question, answer, isOpen, onToggle }) => {
    

    return (
        <article className={`gradient-border flex flex-col w-[60rem] gap-2 rounded-lg ${ isOpen ? 'active' : '' }`}>
            <div className="flex justify-between items-center px-12 py-8"
                onClick={onToggle}>
                
                <h4 className="app-title text-2xl font-semibold">
                    {question}
                </h4>

                <button className={`item text-azure ${ isOpen ? 'activeIcon' : 'inactiveIcon' }`}>
                    {isOpen ? <Remove style={{ fontSize: '2rem' }} /> : <Add style={{ fontSize: '2rem' }} />}                   
                </button>
            </div>

            { isOpen && (
                <div className=" text-xl content">
                    <p className='px-12 pb-12 text-spanishBlue'>
                        {renderDescription(answer)}
                    </p>
                </div>
            )}
        </article>
    )
}

export default QuestionCard;

