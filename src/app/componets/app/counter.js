"use client"
import React from "react"

import CountUp from 'react-countup';

export default function Counter(){
    return(
        <div className="flex-1">
            <h6 className="text-slate-400">Visitor</h6>
            <p className="text-xl font-bold"><CountUp className="counter-value" start={2100} end={4589} /></p>
        </div>
    )
}