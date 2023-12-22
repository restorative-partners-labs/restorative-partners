"use client"
import React from "react"

import CountUp from 'react-countup';

export default function CounterTwo(){
    return(
        <div className="flex-1">
            <h6 className="text-slate-400">Revenue</h6>
            <p className="text-xl font-bold">$<CountUp className="counter-value" start={39548} end={45485} /></p>
        </div>
    )
}