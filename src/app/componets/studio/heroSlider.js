"use client"
import React, { useState,} from 'react'
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';

const TinySlider = dynamic(()=>import('tiny-slider-react'),{ssr: false,});
import '../../../../node_modules/tiny-slider/dist/tiny-slider.css'

export default function HeroSlider(){
    let settings = {
        container: '.tiny-one-item',
        items: 1,
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
    }
    let services = ["/images/studio/01.jpg","/images/studio/02.jpg","/images/studio/03.jpg"];
    return(
        <div className="tiny-one-item studio-img">

            <TinySlider settings={settings}>
                {services.map((item, index) => {
                    return(
                        <div className="tiny-slide" key={index}>
                            <div className="m-2 mx-3">
                                <Image src={item} width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="rounded-lg" alt="" />
                            </div>
                        </div>
                    )
                })}
            </TinySlider>
        </div>
    )
}