const MotionText = ({part1, part2, part3}) => {
    return (
        <div className="text-slider-container font-anybody text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] z-10"
            style={{ overflow: 'hidden' }}>
            <h2 className='text-center text-white3 motion-text font-regular tracking-wider'>
                <div style={{display: 'flex', whiteSpace: 'nowrap'}}>
                    <span className='text-white3' style={{margin: '0 1rem'}}>
                        {part1} 
                    </span>
                    <span className="text-spanishBlue">{part2}</span>
                    <span className="text-white" style={{ margin: '0 6rem 0 1rem' }}>{part3}</span>
                    
                    <span className='text-white3' style={{margin: '0 1rem'}}>
                        {part1} 
                    </span>
                    <span className="text-spanishBlue">{part2}</span>
                    <span className="text-white" style={{ margin: '0 6rem 0 1rem' }}>{part3}</span>
                    
                </div>
            </h2>
        </div>
    );
};

export default MotionText;