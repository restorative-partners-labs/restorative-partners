"use client"
import React from "react"
import CountUp from 'react-countup';

export default function CounterOne(){
    return(
        <div className="flex mb-4">
            <span className="text-indigo-600 text-2xl font-bold mb-0"><CountUp className="counter-value text-6xl font-bold"start={1} end={15}></CountUp>+</span>
            <span className="self-end font-semibold ms-2">Years <br /> Experience</span>
        </div>
    )
}
