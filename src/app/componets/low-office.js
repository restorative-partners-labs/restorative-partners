'use client'

import React from "react"
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"

const TinySlider = dynamic(()=>import('tiny-slider-react'),{ssr: false,});
import '../../../node_modules/tiny-slider/dist/tiny-slider.css'

import { lowServices } from "../Data/dataTwo"

export default function LowOffice(){
    let settings2 = {
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
            <TinySlider settings={settings2}>
                {lowServices.map((item, index) =>{
                    return (
                        <div className="tiny-slide" key={index}>
                            <div className="group relative shadow dark:shadow-gray-800 overflow-hidden mx-2">
                                <div className="relative">
                                    <Image src={item.iamge} width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="group-hover:rotate-3 group-hover:scale-110 duration-500 ease-in-out" alt="" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black"></div>
                                </div>

                                <div className="absolute bottom-6 start-6 end-6">
                                    <Link href="#" className="text-white/70 hover:text-white text-lg block font-semibold duration-500 ease-in-out">{item.name}</Link>
                                    <span className="text-white/60 block">{item.role}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </TinySlider>

        </div>
        </>
    )
}