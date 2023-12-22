"use client"
import React from 'react'
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"

const TinySlider = dynamic(()=>import('tiny-slider-react'),{ssr: false,});
import '../../../../node_modules/tiny-slider/dist/tiny-slider.css'

import { insuranceServicesTwo } from '../../Data/dataTwo'

export default function Services(){
    let settings = {
        container: '.tiny-six-item',
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
        nav: false,
        speed: 400,
        gutter: 0,
        responsive: {
            1025: {
                items: 6
            },
    
            992: {
                items: 4
            },
    
            767: {
                items: 3
            },
    
            320: {
                items: 1
            },
        },
    }
    
    return(
        <>
            <div className="tiny-six-item">
                <TinySlider settings={settings}>
                    {insuranceServicesTwo.map((item, index) => (

                        <div className="tiny-slide" key={index}>
                            <div className="mx-2">
                                <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                                    <Link href="#" title="">
                                        <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="transition-all duration-500 group-hover:scale-105" alt="" />
                                        <div className="absolute inset-0 group-hover:bg-indigo-600 opacity-0 group-hover:opacity-70 transition-all duration-500"></div>
                                    </Link>
                                </div>
                                <div className="p-4 pb-0">
                                    <Link href="#" className="relative inline-block font-semibold tracking-wide align-middle text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 hover:text-indigo-600 after:bg-indigo-600 text-xl duration-500 ease-in-out">{item.title}</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </TinySlider>
            </div>
        </>
    )
}