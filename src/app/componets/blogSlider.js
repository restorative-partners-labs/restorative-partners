"use client"
import React from "react"
import dynamic from "next/dynamic";
import Image from "next/image";

const TinySlider = dynamic(()=>import('tiny-slider-react'),{ssr: false,});
import '../../../node_modules/tiny-slider/dist/tiny-slider.css'

export default function BlogSlider(){
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
    let services = ["/images/blog/01.jpg","/images/blog/02.jpg","/images/blog/03.jpg"]
    return(
        <div className="tiny-single-item">
            <TinySlider settings={settings}>
                {services.map((item, index) => (
                    <div className="tiny-slide" key={index}><Image src={item} width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="rounded-md" alt="" /></div>
                ))}
            </TinySlider>
        </div>
    )
}