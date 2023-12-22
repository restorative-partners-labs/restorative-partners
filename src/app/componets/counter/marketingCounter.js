"use client"
import React from 'react'

import CountUp from 'react-countup';

export default function MarketingCounter(){
    return(
    <div className="grid grid-cols-2 md:grid-cols-4">
        <div className="counter-box relative text-center">
            <h3 className="font-extrabold lg:text-[72px] text-[50px] text-white opacity-10"><CountUp className="counter-value" end={3452} start={3000} />+</h3>
            <span className="counter-head font-semibold text-xl text-white absolute top-2/4 start-0 end-0">Investment Projects</span>
        </div>

        <div className="counter-box relative text-center">
            <h3 className="font-extrabold lg:text-[72px] text-[50px] text-white opacity-10"><CountUp className="counter-value" end={15} start={1} />+</h3>
            <span className="counter-head font-semibold text-xl text-white absolute top-2/4 start-0 end-0">Years of Experience</span>
        </div>

        <div className="counter-box relative text-center">
            <h3 className="font-extrabold lg:text-[72px] text-[50px] text-white opacity-10"><CountUp className="counter-value" end={54} start={5} /></h3>
            <span className="counter-head font-semibold text-xl text-white absolute top-2/4 start-0 end-0">Offices in the World</span>
        </div>

        <div className="counter-box relative text-center">
            <h3 className="font-extrabold lg:text-[72px] text-[50px] text-white opacity-10"><CountUp className="counter-value" end={247} start={12} />+</h3>
            <span className="counter-head font-semibold text-xl text-white absolute top-2/4 start-0 end-0">Successful Cases</span>
        </div>
    </div>
    )
}