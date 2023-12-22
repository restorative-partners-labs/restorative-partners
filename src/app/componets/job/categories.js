"use client"
import React from 'react'
import Link from "next/link"
import dynamic from "next/dynamic"

const TinySlider = dynamic(()=>import('tiny-slider-react'),{ssr: false,});
import '../../../../node_modules/tiny-slider/dist/tiny-slider.css'
import { jobServices } from '../../Data/data'

export default function Categories(){
    let settings = {
        container: '.tiny-five-item',
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
                items: 5
            },
    
            992: {
                items: 4
            },
    
            767: {
                items: 3
            },
    
            425: {
                items: 1
            },
        },
    }
    return(
        <div className="tiny-five-item">
            <TinySlider settings={settings}>
                {jobServices.map((item, index) => {
                    let Icons = item.icon
                    return(
                    
                        <div className="tiny-slide" key={index}>
                            <div className="px-3 py-10 rounded-md shadow dark:shadow-gray-800 group text-center bg-white dark:bg-slate-900 hover:bg-indigo-600/5 dark:hover:bg-indigo-600/5 transition duration-500 m-2">
                                <div className="w-[84px] h-[84px] bg-indigo-600/5 group-hover:bg-indigo-600 text-indigo-600 group-hover:text-white rounded-full text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 transition duration-500 mx-auto">
                                    <Icons className='w-7 h-7'/>
                                </div>

                                <div className="content mt-6">
                                    <Link href
                                    ="/page-job-grid" className="title h5 text-lg font-medium hover:text-indigo-600">{item.title} <br /> {item.title2}</Link>
                                    <p className="text-slate-400 mt-3">{item.jobs} Jobs</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </TinySlider>
        </div>
    )
}