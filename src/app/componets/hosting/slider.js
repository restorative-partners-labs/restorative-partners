"use client"
import React from 'react'
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"

const TinySlider = dynamic(()=>import('tiny-slider-react'),{ssr: false,});
import '../../../../node_modules/tiny-slider/dist/tiny-slider.css'

import { hostingServices } from '../../Data/data'

export default function HostingServices(){
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
        <div className="tiny-six-item">
            <TinySlider settings={settings}>
                {hostingServices.map((item, index) =>{
                    return (
                        <div className="tiny-slide" key={index}>
                            <Link href="#" className="group bg-white dark:bg-slate-900 block rounded-md overflow-hidden relative shadow dark:shadow-gray-800 m-2">
                                <span className="p-4 block bg-white dark:bg-slate-900 text-center">
                                    <Image src={item.image} width={64} height={64} className="rounded-full shadow-md mx-auto h-16 w-16 mb-3" alt="" />

                                    <span className="text-xl font-medium group-hover:text-indigo-600 transition-all duration-500 ease-in-out">{item.extension}</span>
                                    <span className="text-slate-400 block">{item.description}</span>
                                </span>
                                <span className={`p-4 block text-center ${item.background}`}>
                                    <span className="text-white font-medium uppercase block">{item.sale}</span>
                                    <span className="flex justify-center mt-2">
                                        <span className="text-base text-white/70 font-semibold">$</span>
                                        <span className="text-lg text-white font-semibold mx-1">{item.price}</span>
                                        <span className="text-base text-white/70 font-semibold self-end">{item.time}</span>
                                    </span>
                                </span>
                            </Link>
                        </div>
                    )
                })}
            </TinySlider>
        </div>
    )
}