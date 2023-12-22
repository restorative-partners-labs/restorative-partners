"use client"
import React from 'react'

import CountUp from 'react-countup';

export default function Counter(){
    return(
        <div className="lg:col-span-3">
            <div className="grid lg:grid-cols-1 grid-cols-2 sticky top-20">
                <div className="counter-box relative md:text-start text-center">
                    <h1 className="font-bold text-3xl text-indigo-600"><CountUp className="counter-value" end={11} start={3} />+</h1>
                    <span className="counter-head font-medium h6">Designers & <br /> developers</span>
                </div>

                <div className="counter-box relative md:text-start text-center lg:mt-6">
                    <h1 className="font-bold text-3xl text-indigo-600"><CountUp className="counter-value" end={5} start={1} />
                    </h1>
                    <span className="counter-head font-medium h6">Years of <br /> Experience</span>
                </div>
            </div>

        </div>
    )
}