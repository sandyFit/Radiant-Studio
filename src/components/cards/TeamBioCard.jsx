import React from 'react'
import { renderDescription } from '../../utils/functions'

const TeambioCard = ({ firstName, lastName, bio }) => {
    
    return (
        <article className='w-[36rem] h-auto gradient-border p-16 rounded-3xl'>
            <h2 className='text-center text-white2 text-2xl xl:text-4xl font-bold'>
                {firstName}
                <span className='app-title' style={{ margin: ' 0 1rem' }}>
                    {lastName}
                </span>
            </h2>

            <hr className='border-2 border-spanishBlue w-36 my-3 ml-36' />

            <p className='text-white3 text-md md:text-lg xl-text-xl font-regular xl:font-medium'>
                {renderDescription(bio)}
            </p>
        </article>
    )
}

export default TeambioCard