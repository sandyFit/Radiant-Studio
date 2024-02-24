import { Close } from '@mui/icons-material'
import React from 'react'

const ModalServices = ({ service, isOpen, onClose }) => {

    const isValidCard = Array.isArray(service.categories);

    if (!service) {
    console.log('Service is undefined');
    return null;
    }

    const handleClose = () => {
        onClose();
    }

    if (!isOpen) return null;


    // Adding line breaks to paragraphs
    const renderDescription = (text) => {
        return text.split('\n').map((line, index) => (
            <React.Fragment key={index}>
            {line}<br />
            </React.Fragment>
            ));
        };

   
    return (
        <div className="z-50 overflow-auto bg-azure flex items-center justify-center 
            px-6 lg:px-24 py-24 relative w-[100vw] h-screen">
            
            <button
                className=" text-white absolute top-8 right-16"
                    onClick={handleClose}
                >
                    <Close style={{fontSize: '3rem'}}/>
            </button>
            
            <div className="flex flex-col p-8 rounded-lg w-full py-8 px-24">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-xl lg:text-5xl text-white3 font-bold mb-4">{service.title}</h1>
                    <p className="text-white3 text-3xl font-semibold lg:text-xl mb-6">{service.description}</p>
                </div>


                {isValidCard && (
                    <ul className="flex flex-wrap justify-center list-none pl-4 gap-6">
                        {service.categories.map((category, index) => (
                            <li key={index} className="w-[25rem] h-auto mb-2 bg-blue-300 shadow-xl shadow-blue-700 p-10 rounded-lg">
                                <div className="flex items-start gap-4">
                                    <div>
                                        {/* Access the current category using service.categories[currentCard] */}
                                        <h4 className="text-3xl mb-3 app-title font-bold">{category.name}</h4>
                                        <div className="text-lg text-spaceCadet mb-4">{renderDescription(category.description)}</div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>


        </div>
    )
}

export default ModalServices;

