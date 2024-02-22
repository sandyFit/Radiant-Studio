const MotionText = () => {
    return (
        <div className="text-slider-container font-bai uppercase" style={{overflow: 'hidden'}}>
            <h2 className='text-center text-white3 motion-text font-regular'>
                <div style={{display: 'flex', whiteSpace: 'nowrap'}}>
                    <span className='text-white3' style={{margin: '0 1rem'}}>
                        Welcome to 
                    </span>
                    <span className="text-spanishBlue">Radiant Dental</span>
                    <span className="text-white" style={{margin: '0 8rem 0 1rem'}}>Studio  </span>
                    <span className='text-white3' style={{margin: '0 1rem'}}>
                        Welcome to 
                    </span>
                    <span className="text-spanishBlue">Radiant Dental</span>
                    <span className="text-white" style={{margin: '0 8rem 0 1rem'}}>Studio </span>
                    
                </div>
            </h2>
        </div>
    );
};

export default MotionText;