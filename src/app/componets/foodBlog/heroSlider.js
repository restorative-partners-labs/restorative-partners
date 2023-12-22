"use client"
import React from 'react'
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"

const TinySlider = dynamic(()=>import('tiny-slider-react'),{ssr: false,});
import '../../../../node_modules/tiny-slider/dist/tiny-slider.css'
import { foodServices } from '../../Data/dataTwo'

export default function HeroSlider(){
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
                {foodServices.map((item, index) => {
                    return(
                        <div className="tiny-slide" key={index}>
                            <div className="group relative overflow-hidden">
                                <Image src={item.iamge} width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="group-hover:scale-105 duration-500 ease-in-out" alt="" />
                                <div className="absolute inset-0 bg-gradient-to-b to-slate-900 via-slate-900/50 from-transparent opacity-0 group-hover:opacity-100 duration-500 ease-in-out"></div>

                                <div className="absolute bottom-0 start-0 end-0 p-6 -mb-96 group-hover:mb-0 duration-500 ease-in-out">
                                    <div className="text-center">
                                        <Link href="#" className="bg-indigo-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded w-fit mx-auto h-5">{item.title}</Link>
                                        <Link href="/food-recipe" className="text-white font-semibold hover:text-indigo-600 block text-lg mt-4 duration-500 ease-in-out">{item.description}</Link>

                                        <div className="flex items-center justify-center mt-4">
                                            <Image src={item.imageList} width={40} height={40} className="h-10 w-10 rounded-full shadow-md dark:shadow-gray-800" alt="" />
                                            <Link href="#" className="font-medium text-white block ms-2">{item.name}</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute end-0 top-0 p-4 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                                    <Link href="/#!" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-center text-lg bg-white dark:bg-slate-900 border-0 shadow dark:shadow-gray-800 rounded-full text-red-600/20 hover:text-red-600 focus:text-red-600"><i className="mdi mdi-heart"></i></Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </TinySlider>
        </div>
    )
}