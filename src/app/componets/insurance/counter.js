'use client'
import React from 'react'

import CountUp from 'react-countup';

export default function Counter(){
    return(
        <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-[30px]">
                <div className="counter-box text-center">
                    <h1 className="lg:text-5xl text-4xl font-bold mb-2 text-white"><CountUp className="counter-value" end={145} start={101} />M</h1>
                    <h5 className="text-white text-xl font-medium">Insured Customers</h5>
                </div>

                <div className="counter-box text-center">
                    <h1 className="lg:text-5xl text-4xl font-bold mb-2 text-white"><CountUp className="counter-value" end={99} start={2} />%</h1>
                    <h5 className="text-white text-xl font-medium">Clients Satisfaction</h5>
                </div>
            </div>
        </div>
    )
}