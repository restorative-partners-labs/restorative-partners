'use client'
import React from 'react'

export default function Qtn({item}){
    const handleStepDown = (e) => {
        const input = e.target.parentNode.querySelector('input[type="number"]')
        if (input) {
            input.stepDown();
        }
    };

    const handleStepUp = (e) => {
        const input = e.target.parentNode.querySelector('input[type="number"]')
        if (input) {
            input.stepUp();
        }
    };
    return(
    <div className="qty-icons space-x-1">
        <button onClick={handleStepDown} className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white minus">
            -
        </button>
        <input min="0" readOnly name="quantity" value={item} type="number" className="h-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white pointer-events-none w-16 ps-4 quantity" />
        <button onClick={handleStepUp} className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white plus" >
            +
        </button>
    </div>
    )
}