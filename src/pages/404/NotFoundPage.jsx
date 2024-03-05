import { ArrowDownward } from '@mui/icons-material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {

    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    }

    return (
        <section className='bg-custom-gradient-bg-left flex justify-center h-[100%]'>
            <div className="flex flex-col items-center w-10/12 h-full pt-16 pb-32">

                <div className="flex flex-col">
                    <div className="flex justify-between items-center gap-10">
                        <h1 className='text-white3 text-left text-[12rem] font-semibold'>404</h1>

                        <p className='text-white3 text-4xl'>{ `(Oh no, this page does NOT exits)`}</p>
                    </div>
                    <div className="flex justify-between gap-16">
                        <span className='text-white3 text-[12rem] font-semibold'>SORRY</span>

                        <span>{[...Array(3)].map((_, index) => (
                            <ArrowDownward key={index}
                                className='text-azure'
                                style={{fontSize: '12rem', marginTop: '3.8rem'}}
                            />
                        ))}</span>
                    </div>
                </div>               

                <button className='btn-filled py-6 px-[12.5vw] my-9' onClick={goToHome}>
                    Go to homepage
                </button>
            </div>

        </section>
    )
}

export default NotFoundPage;