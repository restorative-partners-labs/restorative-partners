"use client"
import React from 'react'

import CountUp from 'react-countup';

export default function Counter(){
    return(
        <div className="relative grid md:grid-cols-4 grid-cols-2 items-center gap-[30px]">
            <div className="counter-box text-center">
                <h1 className="text-4xl font-bold mb-4 text-white"><CountUp className="counter-value" start={1} end={100} />M</h1>
                <h5 className="counter-head text-xs font-semibold text-white">PEOPLE FACING FOOD INSECURITY</h5>
            </div>

            <div className="counter-box text-center">
                <h1 className="text-4xl font-bold mb-4 text-white"><CountUp className="counter-value" start={2} end={152} />M</h1>
                <h5 className="counter-head text-xs font-semibold text-white">PEOPLE WFP AIMS TO REACH IN 2022</h5>
            </div>

            <div className="counter-box text-center">
                <h1 className="text-4xl font-bold mb-4 text-white">$<CountUp className="counter-value" start={0} end={1500} />M</h1>
                <h5 className="counter-head text-xs font-semibold text-white">WFPS FUNDING NEEDS IN 2022</h5>
            </div>

            <div className="counter-box text-center">
                <h1 className="text-4xl font-bold mb-4 text-white"><CountUp className="counter-value" start={0} end={29} />M</h1>
                <h5 className="counter-head text-xs font-semibold text-white">MEALS DISTRIBUTED WORLDWIDE</h5>
            </div>
        </div>
    )
}