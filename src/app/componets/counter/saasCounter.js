"use client"
import React from "react"

import CountUp from 'react-countup';

export default function SaasCounter(){
    return(
        <div className="flex-1">
            <h6 className="text-slate-400">Visitor</h6>
            <p className="text-xl font-bold"><CountUp className="counter-value" end={4589} start={2100} /></p>
        </div>
    )
}