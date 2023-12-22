"use client"
import React from 'react'

import CountUp from 'react-countup';

export default function JobCounter(){
    return(
        <div className="container relative mt-12">
            <div className="grid grid-cols-2 md:grid-cols-4">
                <div className="counter-box relative text-center">
                    <h3 className="font-extrabold lg:text-[72px] text-[50px] opacity-5"><CountUp className="counter-value" end={200} start={3} />+K</h3>
                    <span className="counter-head font-semibold text-xl absolute top-2/4 start-0 end-0">Total User</span>
                </div>

                <div className="counter-box relative text-center">
                    <h3 className="font-extrabold lg:text-[72px] text-[50px] opacity-5"><CountUp className="counter-value" end={15} start={1} />+</h3>
                    <span className="counter-head font-semibold text-xl absolute top-2/4 start-0 end-0">Years of Experience</span>
                </div>

                <div className="counter-box relative text-center">
                    <h3 className="font-extrabold lg:text-[72px] text-[50px] opacity-5"><CountUp className="counter-value" end={54} start={5} />5</h3>
                    <span className="counter-head font-semibold text-xl absolute top-2/4 start-0 end-0">Offices in the World</span>
                </div>

                <div className="counter-box relative text-center">
                    <h3 className="font-extrabold lg:text-[72px] text-[50px] opacity-5"><CountUp className="counter-value" end={125} start={12} />K</h3>
                    <span className="counter-head font-semibold text-xl absolute top-2/4 start-0 end-0">No. of Job Positions</span>
                </div>
            </div>
        </div>
    )
}