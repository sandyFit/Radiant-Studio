import React from 'react';
import StarIcon from '@mui/icons-material/Star';

const Stars = () => {
    return (
        <div className='space-x-2'>
            <span className='font-bold'>
                {[...Array(5)].map((_, index) => (
                    <StarIcon key={index} />
                ))}
            </span>
        </div>
    )
}

export default Stars;