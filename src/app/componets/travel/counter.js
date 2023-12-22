"use client"
import React from 'react'
import CountUp from 'react-countup';

export default function Counter(){
    return(
        <div className="grid md:grid-cols-4 grid-cols-2 gap-[30px]">
            <div className="counter-box flex items-center justify-center">
                <h1 className="text-4xl font-bold text-white"><CountUp className="counter-value" start={1} end={100} />k+</h1>
                <h5 className="counter-head text-xs font-semibold text-white/40 ms-2">Happy <br/> Customer</h5>
            </div>

            <div className="counter-box flex items-center justify-center">
                <h1 className="text-4xl font-bold text-white"><CountUp className="counter-value" start={1} end={15} /></h1>
                <h5 className="counter-head text-xs font-semibold text-white/40 ms-2">Years of <br/> experiences</h5>
            </div>

            <div className="counter-box flex items-center justify-center">
                <h1 className="text-4xl font-bold text-white"><CountUp className="counter-value" start={1} end={4} />k+</h1>
                <h5 className="counter-head text-xs font-semibold text-white/40 ms-2">Best <br/> Destinations</h5>
            </div>

            <div className="counter-box flex items-center justify-center">
                <h1 className="text-4xl font-bold text-white"><CountUp className="counter-value" start={1} end={4.9} /></h1>
                <h5 className="counter-head text-xs font-semibold text-white/40 ms-2">Reviews or <br/> Ratings</h5>
            </div>
        </div>
    )
}