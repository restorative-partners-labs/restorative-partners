"use client"
import React from 'react'
import dynamic from "next/dynamic"
import Image from 'next/image';

const TinySlider = dynamic(()=>import('tiny-slider-react'),{ssr: false,});
import '../../../../node_modules/tiny-slider/dist/tiny-slider.css'
import { aboutServices } from '@/app/Data/dataTwo';

export default function Clients(){
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
            <div className="tiny-single-item">
                <TinySlider settings={settings}>
                    {aboutServices.map((item, index) => (
                        <div className="tiny-slide text-center" key={index}>
                            <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="h-6 mx-auto" alt="" />
                            <p className="text-slate-400 mt-6">{item.description}</p>
                            <h6 className="text-indigo-600 font-semibold mt-3">- {item.name}</h6>
                        </div>
                    ))}
                </TinySlider>
            </div>
    )
}