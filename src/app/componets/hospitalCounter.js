"use client"
import React from 'react'

import CountUp from 'react-countup';

export default function HospitalCounter(){
    return(
        <div className="content md:mt-8">
        <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
            <div className="lg:col-start-2 lg:col-span-10">
                <div className="grid md:grid-cols-3 grid-cols-1 items-center">

                    <div className="counter-box text-center">
                        <h1 className="text-white text-4xl font-semibold mb-2"><CountUp className="counter-value" end={99} start={10} />%</h1>
                        <h5 className="counter-head text-white text-lg font-semibold mb-2">Positive feedback</h5>
                        <p className="text-white/50">From Doctors</p>
                    </div>


                    <div className="counter-box text-center">
                        <h1 className="text-white text-4xl font-semibold mb-2"><CountUp className="counter-value" end={25} start={2} />+</h1>
                        <h5 className="counter-head text-white text-lg font-semibold mb-2">Experienced Clinics</h5>
                        <p className="text-white/50">High Qualified</p>
                    </div>


                    <div className="counter-box text-center">
                        <h1 className="text-white text-4xl font-semibold mb-2"><CountUp className="counter-value" end={1251} start={95} />+</h1>
                        <h5 className="counter-head text-white text-lg font-semibold mb-2">Questions & Answers</h5>
                        <p className="text-white/50">Your Questions</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}