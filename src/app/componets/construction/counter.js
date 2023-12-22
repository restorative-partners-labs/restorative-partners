"use client"
import React from 'react'

import CountUp from 'react-countup';

export default function Counter(){
    return(
    <div className="pt-6 mt-6 border-t dark:border-gray-700">
        <div className="relative grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
            <div className="counter-box">
                <h1 className="text-4xl font-bold mb-2"><CountUp className="counter-value" start={1010} end={1548} />+</h1>
                <h5 className="counter-head text-lg font-medium">Projects completed</h5>
            </div>

            <div className="counter-box">
                <h1 className="text-4xl font-bold mb-2"><CountUp className="counter-value" start={2} end={25} />+</h1>
                <h5 className="counter-head text-lg font-medium">Years of experience</h5>
            </div>
        </div>
    </div>
    )
}