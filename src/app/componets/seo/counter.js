"use client"
import React from 'react'

import CountUp from 'react-countup';

export default function Counter(){
    return(
        <div className="md:flex justify-center">
            <div className="md:w-1/3">
                <div className="text-center">
                    <h6 className="text-slate-400 mb-0">External Backlinks</h6>
                    <h2 className="mb-0 text-4xl mt-3 font-bold"><CountUp className="counter-value" start={1990} end={2021} />K+</h2>
                </div>
            </div>

            <div className="md:w-1/3 mt-8 md:mt-0">
                <div className="text-center">
                    <h6 className="text-slate-400 mb-0">Pages Crawled Daily</h6>
                    <h2 className="mb-0 text-4xl mt-3 font-bold"><CountUp className="counter-value" start={2} end={210} />B+</h2>
                </div>
            </div>

            <div className="md:w-1/3 mt-8 md:mt-0">
                <div className="text-center">
                    <h6 className="text-slate-400 mb-0">Domain Indexed</h6>
                    <h2 className="mb-0 text-4xl mt-3 font-bold"><CountUp className="counter-value" start={1} end={18} />M+</h2>
                </div>
            </div>
        </div>
    )
}