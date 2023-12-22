"use client"
import React, {useState} from 'react'
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"

const TinySlider = dynamic(()=>import('tiny-slider-react'),{ssr: false,});
import '../../../../node_modules/tiny-slider/dist/tiny-slider.css'

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import { portfolioTwo , portfolioImageTwo } from '../../Data/dataTwo'

export default function ProjectWork(){
    let settings2 = {
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
    let [isOpen, setisOpen] = useState(false);
    let [currentImageIndex, setCurrentImageIndex] = useState(0);

    let handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + portfolioImageTwo.length - 1) % portfolioImageTwo.length);
    };
  
    let handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % portfolioImageTwo.length);
    };
    let handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setisOpen(true);
    };
    let currentImage = portfolioImageTwo[currentImageIndex];
    return(
        <div className="tiny-six-item">
            <TinySlider settings={settings2}>
                {portfolioTwo.map((item, index) =>{
                    return (
                        <div className="tiny-slide" key={index}>
                            <div className="group relative block overflow-hidden rounded-md transition-all duration-500 mx-2">
                                <Link href="#" onClick={() => handleImageClick(index)} scroll={false} className="lightbox transition-all duration-500 group-hover:scale-105" title="">
                                    <Image src={item.image} className="" alt="" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} />
                                </Link>
                                <div className="absolute -bottom-52 group-hover:bottom-2 start-2 end-2 transition-all duration-500 bg-white dark:bg-slate-900 p-4 rounded shadow dark:shadow-gray-800">
                                    <Link href="/portfolio-detail-two" className="hover:text-indigo-600 text-lg transition duration-500 font-medium">{item.name}</Link>
                                    <h6 className="text-slate-400">{item.role}</h6>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </TinySlider>
            {isOpen && (
                <Lightbox
                    mainSrc={currentImage}
                    prevSrc={portfolioImageTwo[(currentImageIndex + portfolioImageTwo.length - 1) % portfolioImageTwo.length]}
                    nextSrc={portfolioImageTwo[(currentImageIndex + 1) % portfolioImageTwo.length]}

                    onCloseRequest={() => setisOpen(false)}
                    onMovePrevRequest={handleMovePrev}
                    onMoveNextRequest={handleMoveNext}
                />
            )}
        </div>
    )
}