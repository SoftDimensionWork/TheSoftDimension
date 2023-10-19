import React from 'react'
import AboutUSCard from './AboutUSCard'
import OurTeamCard from './OurTeamCard';
import OurTeamData from '../Data/OurTeamData';


export default function AboutUsSection() {
    return (
        <>
            <div className="w-full h-auto t-black py-28">
                <div className='w-full container mx-auto'>

                    {/* Our Wrok Profile */}

                    <div className='md:flex justify-between'>
                        <AboutUSCard number="1" title="Year Of Experience" />
                        <AboutUSCard number="7" title="Project Completed" />
                        <AboutUSCard number="1" title="Countries Served" />
                        <AboutUSCard number="5" title="It Professionals" />
                    </div>

                    {/* Our Team */}

                    <div className='w-full'>
                        <div className='w-full text-center text-[44px] py-[150px] pb-[100px] text-white'>
                            Our Team
                        </div>
                        <div className="w-full flex justify-around flex-wrap">
                            {
                                OurTeamData.map((data , index) => {
                                    return (
                                    <OurTeamCard
                                        key={index}
                                        name={data.name}
                                        position={data.position}
                                        image={data.image}
                                    />
                                    )
                                })
                            }
                            
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

// 195*290