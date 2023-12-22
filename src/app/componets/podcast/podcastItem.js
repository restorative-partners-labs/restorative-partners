"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic';

import ModalVideo from 'react-modal-video'
import "../../../../node_modules/react-modal-video/css/modal-video.css";

const TinySlider = dynamic(()=>import('tiny-slider-react'), {ssr:false});

import {FaArrowRight} from '../../assets/icons/icons'
import { podcastData } from '../../Data/dataTwo';

export default function PodcastItem(){
    let [isOpen, setOpen] = useState(false)

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
        controlsText: ['<i className="mdi mdi-chevron-left "></i>', '<i className="mdi mdi-chevron-right"></i>'],
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
        <div className="tiny-three-item-icon">
        <TinySlider settings={settings}>
            {podcastData.map((item, index)=>{
                return(
                    <div className="tiny-slide" key={index}>
                        <div className="group relative rounded-md shadow dark:shadow-gray-800 overflow-hidden m-3">
                            <div className="relative">
                                <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}}  alt=""/>

                                <Link href="#!" onClick={() => setOpen(true)} scroll={false} className="lightbox h-8 w-8 inline-flex items-center justify-center rounded-full bg-white border border-white text-indigo-600 absolute top-3 end-3"><i className="mdi mdi-play"></i></Link>

                                <div className="absolute start-0 bottom-0 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                                    <div className="pb-4 ps-4 flex items-center">
                                        <Image src='/images/client/01.jpg' width={0} height={0} className="h-10 w-10 rounded-full shadow-md dark:shadow-gray-800 mx-auto" alt=""/>
                                        <div className="ms-3">
                                            <Link href="" className="font-semibold text-white block">Calvin Carlo</Link>
                                            <span className="text-white/70 text-sm">4k Subscribe</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)} />
                            <div className="content p-6">
                                <audio controls className="block w-full max-w-md mx-auto mb-3">
                                    {/* <source src="assets/images/audio.mp3" type="audio/mpeg"/> */}
                                </audio>

                                <Link href="/blog-youtube-post" className="title h5 text-lg font-semibold hover:text-indigo-600 duration-500 ease-in-out">{item.title}</Link>
                                <p className="text-slate-400 mt-3">{item.desc}</p>
                                
                                <div className="mt-4">
                                    <Link href="/blog-youtube-post" className="relative inline-flex items-center tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Watch Now <FaArrowRight className='ms-1 text-[10px]'/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </TinySlider>
        </div>
    )
}