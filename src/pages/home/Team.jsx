import React, { useState } from 'react'
import UnderlineText from '../../components/ui/UnderlineText';
import staffData from '../../data/staffData';
import StaffCard from '../../components/cards/StaffCard';
import bioData from '../../data/bioData';
import TeambioCard from '../../components/cards/TeambioCard';

const Team = () => {

    const [selectedTeamMember, setSelectedTeamMember] = useState(bioData[0]);

    const handleClick = id => {
        const selectedMember = bioData.find((member) => member.id === id);
        console.log(`Slected Member: ${selectedMember}`)
        setSelectedTeamMember(selectedMember);
    }

    return (
        <section className='flex flex-col bg-custom-gradient-bg-inverse-right pt-36 '>
            <UnderlineText part1={'Nice to'}
                part2={'Meet You!'}

            />

            <div className="flex flex-col lg:flex-row justify-center gap-8 py-12">
                <article className='w-full lg:w-1/2'>
                    <div className="flex flex-wrap justify-center">
                        {staffData.map(member => {
                            return (
                                <StaffCard key={member.id} {...member}
                                    onClick={() => handleClick(member.id)}
                                    className={ `${member.id % 2 === 0 ? 'rotate-2' : '-rotate-2'}`} />
                            );
                        })}
                    </div>
                </article>

                <article>
                    <div className='pt-4 flex justify-center'>
                        {/* Render TeamBigCard and manage visibility through state */}
                        {/* Conditionally render TeamBigCard for mobile based on openMobileModal */}
                        {/* For desktop, it's always rendered but uses CSS for responsiveness */}
                        <TeambioCard {...selectedTeamMember}/>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Team;
