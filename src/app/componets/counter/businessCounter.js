"use client"
import React from 'react'

import CountUp from 'react-countup';

export default function BusinessCounter(){
    return(
        <div className="text-center">
            <span className="text-indigo-600 text-2xl font-bold mb-0 block"><CountUp className="counter-value" start={1} end={15} />+</span>
            <span className="font-semibold block mt-2">Years <br/> Experience</span>
        </div>
    )
}