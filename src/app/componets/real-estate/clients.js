"use client"
import React from "react"
import Image from "next/image"
import dynamic from "next/dynamic"

const TinySlider = dynamic(()=>import('tiny-slider-react'),{ssr: false,});
import '../../../../node_modules/tiny-slider/dist/tiny-slider.css'
import { realEstateServices } from "../../Data/dataTwo";

export default function Clients(){
    let settings = {
        container: '.tiny-three-item',
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 12,
        responsive: {
            992: {
                items: 3
            },
    
            767: {
                items: 2
            },
    
            320: {
                items: 1
            },
        },
    }
    return(
        <div className="tiny-three-item">
            <TinySlider settings={settings}>
                {realEstateServices.map((item, index) => {
                    return(
                        <div className="tiny-slide" key={index}>
                            <div className="text-center mx-3">
                                <p className="text-lg text-slate-400 italic"> {item.description} </p>

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
    )
}