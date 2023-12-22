"use client"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"

const TinySlider = dynamic(()=>import('tiny-slider-react'),{ssr: false,});
import '../../../../node_modules/tiny-slider/dist/tiny-slider.css'

export default function PortfolioSlider(){
    let services = ["/images/portfolio/16.jpg","/images/portfolio/17.jpg","/images/portfolio/18.jpg"]
        
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
                {services.map((item, index) =>{
                    return (
                        <div className="tiny-slide" key={index}>
                            <div className="m-2">
                                <Image src={item} width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="rounded-md shadow dark:shadow-gray-800" alt="" />
                            </div>
                        </div>
                    )
                })}
            </TinySlider>
        </div>
    )
}