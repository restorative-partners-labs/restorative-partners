"use client"
import React from 'react'
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"

const TinySlider = dynamic(()=>import('tiny-slider-react'),{ssr: false,});
import '../../../../node_modules/tiny-slider/dist/tiny-slider.css'

import { NftServices } from '../../Data/data';

export default function Seller(){
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
                {NftServices.map((item, index) => (
                    <div className="tiny-slide" key={index}>
                        <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800 hover:shadow-lg dark:hover:shadow-gray-800 duration-500 ease-in-out m-2 mb-5">
                            <div className="py-10 bg-gradient-to-r to-orange-600/70 from-indigo-600/70"></div>
                            <div className="p-6 pt-0 -mt-10 text-center">
                                <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 mx-auto" alt="" />

                                <div className="mt-4">
                                    <Link href={`/nft-creator-profile/${item.Id}`} className="text-lg font-semibold hover:text-indigo-600 duration-500 ease-in-out block">{item.name}</Link>
                                    <span className="text-slate-400">@{item.id}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </TinySlider>
        </div>
    )
}