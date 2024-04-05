"use client"
import { cn } from '@/lib/utils';
import React from 'react'
import { useInView } from 'react-intersection-observer';

const OutlineSvgText = ({ text }) => {
    const { ref, inView, entry } = useInView({
        threshold: 1.00,
        triggerOnce: true
    });
    return (
        <svg ref={ref} strokeWidth="1" className={`text-transparent webkit-text-stroke-width-1 webkit-text-stroke-primary [font-size:_clamp(48px,13vw,130px)] font-extrabold leading-120 max-h-25 sm:max-h-28 lg:max-h-full ${inView ? 'stroke-primary stroke-dasharray-1000 stroke-dashoffset-1000 animate-text-line-animation' : 'fill-transparent stroke-primary'}`}><text x="0%" dominantBaseline="middle" y="70%">{text}</text></svg>
    )
}

export default OutlineSvgText