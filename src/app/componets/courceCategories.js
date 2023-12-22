"use client"
import React from 'react'
import Link from "next/link"
import dynamic from "next/dynamic"

const TinySlider = dynamic(()=>import('tiny-slider-react'),{ssr: false,});
import '../../../node_modules/tiny-slider/dist/tiny-slider.css'

import { courseData } from '../Data/dataTwo';

import {FaArrowRight} from "../assets/icons/icons"

export default function CourceCategories(){
    
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
            <div className="container relative">
                <div className="grid grid-cols-1 relative">
                    <div className="tiny-five-item">
                        <TinySlider settings={settings}>
                            {courseData.map((item, index) => {
                                let Icons = item.icon
                                return(
                                    <div className="tiny-slide" key={index}>
                                        <div className="px-3 py-10 rounded-md shadow dark:shadow-gray-800 group text-center bg-white dark:bg-slate-900 hover:bg-indigo-600/5 dark:hover:bg-indigo-600/5 transition duration-500 m-2">
                                            <div className="w-[84px] h-[84px] bg-indigo-600/5 group-hover:bg-indigo-600 text-indigo-600 group-hover:text-white rounded-full text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 transition duration-500 mx-auto">
                                                <Icons className='w-7 h-7'/>
                                            </div>

                                            <div className="content mt-6">
                                                <Link href='#' className="title h5 text-lg font-medium hover:text-indigo-600">{item.course}</Link>
                                                <p className="text-slate-400 mt-3">{item.lesson} Lesson</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </TinySlider>
                    </div>
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 md:hidden mt-8">
                    <div className="md:col-span-12 text-center">
                        <Link href='#' className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-slate-400 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">All Categories <FaArrowRight/></Link>
                    </div>
                </div>
            </div>
    )
}