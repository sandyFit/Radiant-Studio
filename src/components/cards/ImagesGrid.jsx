import React from 'react';



const ImagesGrid = () => {
    return (
        <div className="grid place-items-center">
            <ul className="grid grid-cols-2 gap-4 p-4">
                <li className='list-none p-2 bg-transparent'>
                    <div className="p-4 bg-white3 shadow-lg transform rotate-2">
                        <img src="/people/asian-girl.jpg" alt="asian girl smiling" className="w-full"/>
                        <div className="p-4"></div>
                    </div>
                </li>
                <li className='list-none p-2 bg-transparent'>
                    <div className="p-4 bg-white shadow-lg transform -rotate-2">
                        <img src="/people/black-girl.jpg" alt="black girl smiling" className="w-full"/>
                        <div className="p-4"></div>
                    </div>
                </li>
                <li className='list-none p-2 bg-transparent'>
                    <div className="p-4 bg-white shadow-lg transform rotate-2">
                        <img src="/people/he.jpg" alt="boy smiling" className="w-full"/>
                        <div className="p-4"></div>
                    </div>
                </li>
                <li className='list-none p-2 bg-transparent shadow-lg'>
                    <div className="p-4 bg-white shadow-lg transform -rotate-2">
                        <img src="/people/white-girl.jpg" alt="white girl smiling" className="w-full"/>
                        <div className="p-4"></div>
                    </div>
                </li>
            </ul>
        </div>

    );
};

export default ImagesGrid;
