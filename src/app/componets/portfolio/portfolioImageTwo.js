'use client'
import React,{useState} from 'react'
import Link from "next/link"
import Image from "next/image"

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import {FiCamera} from "../../assets/icons/icons"
import { userProfile } from '../../Data/dataTwo';

export default function PortfolioImageTwo(){
    let [isOpen, setisOpen] = useState(false);
    let [currentImageIndex, setCurrentImageIndex] = useState(0);
      
    let handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + userProfile.length - 1) % userProfile.length);
    };
  
    let handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % userProfile.length);
    };
    let handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setisOpen(true);
    };
    let currentImage = userProfile[currentImageIndex];
    return(
        <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-6 gap-[30px]">
            {
            userProfile.map((data,index) => {
                return (
                <div className="group relative block overflow-hidden rounded-md transition-all duration-500" key={index}>
                    <Image src={data} width={0} height={0} sizes='100vw' style={{width:"100%" , height:"auto"}} className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500" alt="" />
                    <div className="absolute inset-2 group-hover:bg-white/90 dark:group-hover:bg-slate-900/90 transition duration-500 z-0 rounded-md"></div>

                    <div className="content transition-all duration-500">
                    <div className="icon absolute z-10 opacity-0 group-hover:opacity-100 top-6 end-6 transition-all duration-500">
                        <Link href="#" onClick={() => handleImageClick(index)} className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full lightbox"><FiCamera className="w-4 h-4"/></Link>
                    </div>

                    <div className="absolute z-10 opacity-0 group-hover:opacity-100 bottom-6 start-6 transition-all duration-500">
                        <Link href="/portfolio-detail-three" className="h6 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">Mockup Collection</Link>
                        <p className="text-slate-400 mb-0">Abstract</p>
                    </div>
                    </div>
                </div>
                )
            })
            }
            {isOpen && (
                <Lightbox
                    mainSrc={currentImage}
                    prevSrc={userProfile[(currentImageIndex + userProfile.length - 1) % userProfile.length]}
                    nextSrc={userProfile[(currentImageIndex + 1) % userProfile.length]}

                    onCloseRequest={() => setisOpen(false)}
                    onMovePrevRequest={handleMovePrev}
                    onMoveNextRequest={handleMoveNext}
                />
                    )}
        </div>
    )
}