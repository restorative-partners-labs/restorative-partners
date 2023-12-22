'use client'
import React from "react"
import Image from "next/image"
import dynamic from "next/dynamic"

const TinySlider = dynamic(()=>import('tiny-slider-react'),{ssr: false,});
import '../../../../node_modules/tiny-slider/dist/tiny-slider.css'

import { insuranceServices } from "../../Data/dataTwo";

export default function Cta(){
   
    let settings = {
        container: '.tiny-single-item',
        items: 1,
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 16,
    }
    return(
        <section className="py-20 w-full relative bg-center bg-no-repeat bg-cover bg-fixed" style={{backgroundImage:"url('/images/insurance/bg.jpg')"}}>
        <div className="container relative">
            <div className="md:flex">
                <div className="lg:w-1/3 md:w-1/2 px-6 py-8 rounded-md shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900">
                    <div className="tiny-single-item">

                        <TinySlider settings={settings}>
                            {insuranceServices.map((item, index) => {
                                return(
                                    <div className="tiny-slide" key={index}>
                                        <div className="text-center">
                                            <p className="text-lg text-slate-400 italic"> {item.feedback} </p>

                                            <div className="text-center mt-5">
                                                <ul className="text-xl font-medium text-amber-400 list-none mb-2">
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                </ul>

                                                <Image src={item.image} width={56} height={56} className="h-14 w-14 rounded-full shadow-md dark:shadow-gray-800 mx-auto" alt="" />
                                                <h6 className="mt-2 font-semibold">{item.name}</h6>
                                                <span className="text-slate-400 text-sm">{item.role}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </TinySlider>

                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}