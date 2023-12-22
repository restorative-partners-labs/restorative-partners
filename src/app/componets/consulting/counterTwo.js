"use client"
import React from "react"
import CountUp from 'react-countup';

export default function CounterTwo(){
    return(
        <div className="relative grid md:grid-cols-3 grid-cols-1 items-center mt-8 gap-[30px] z-1">
            <div className="counter-box text-center">
                <h1 className="lg:text-5xl text-4xl font-semibold mb-2 text-slate-400 dark:text-white"><CountUp className="counter-value" start={1010} end={1548} />+</h1>
                <h5 className="counter-head text-lg font-medium">Properties Sell</h5>
            </div>

            <div className="counter-box text-center">
                <h1 className="lg:text-5xl text-4xl font-semibold mb-2 text-slate-400 dark:text-white"><CountUp className="counter-value" start={2} end={25} />+</h1>
                <h5 className="counter-head text-lg font-medium">Award Gained</h5>
            </div>

            <div className="counter-box text-center">
                <h1 className="lg:text-5xl text-4xl font-semibold mb-2 text-slate-400 dark:text-white"><CountUp className="counter-value" start={0} end={9} />+</h1>
                <h5 className="counter-head text-lg font-medium">Years Experience</h5>
            </div>
        </div>
    )
}
