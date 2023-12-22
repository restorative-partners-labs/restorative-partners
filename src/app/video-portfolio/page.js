"use client"
import React, { useEffect ,useState } from 'react'
import Link from "next/link"
import Image from "next/image"

import VideoNavbar from '../componets/Navbar/videoNavbar'
import Switcher from '../componets/switcher'
import SmallFooter from '../componets/Footer/smallFooter'

import { FaArrowRight } from '../assets/icons/icons'

import ModalVideo from 'react-modal-video'
import "../../../node_modules/react-modal-video/css/modal-video.css";

export default function VideoPortfolio(){
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('dark');
        htmlTag.classList.remove('light')

    });
    const data = [
        {
            image:"/images/portfolio/01.jpg",
            image1:"/images/video/bg.png"
        },
        {
            image:"/images/portfolio/02.jpg",
            image1:"/images/video/bg.png"
        },
        {
            image:"/images/portfolio/03.jpg",
            image1:"/images/video/bg.png"
        },
        {
            image:"/images/portfolio/04.jpg",
            image1:"/images/video/bg.png"
        },
        {
            image:"/images/portfolio/05.jpg",
            image1:"/images/video/bg.png"
        },
        {
            image:"/images/portfolio/06.jpg",
            image1:"/images/video/bg.png"
        },
      
    ]
    return(
        <>
         <VideoNavbar/>
            <section className="relative md:pt-40 pt-28 md:pb-48 pb-40  bg-cover bg-fixed"  id="aboutme" style={{backgroundImage:"url('/images/photography/photographer.jpg')"}}>
                <div className="absolute inset-0 h-full w-full bg-slate-900/60"></div>

                <div className="container relative">
                    <div className="grid grid-cols-1 mt-10">
                        <div className="text-center">
                            <h3 className="md:text-3xl md:leading-normal text-2xl leading-normal font-bold text-white">Watch Our Videos</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative md:pb-24 pb-16 -mt-10">
                <div className="container relative">
                    <div className="lg:flex lg:w-4/5 mx-auto">
                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-[30px]">
                            {data.map((item,index)=>{
                                return(
                                    <div key={index} className="picture-item" data-groups='["branding"]'>
                                        <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                                            <Link href="#!" onClick={() => setOpen(true)}  className="lightbox max-w-full max-h-full">
                                                <span className="relative">
                                                    <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="rounded-md" alt="" />
                                                    <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                                        <Image src={item.image1} width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}}  className="rounded-md absolute top-1/2 -translate-y-1/2 start-0 end-0 p-4" alt="" />
                                                    </div>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })}
                            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)} />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 mt-8">
                        <div className="text-center">
                            <Link href="photography-portfolio" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-slate-400 dark:text-white/70 dark:hover:text-white hover:text-indigo-600 after:bg-indigo-600 dark:after:bg-white duration-500 ease-in-out">See More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                        </div>
                    </div>
                </div>
            </section>
            <SmallFooter/>
            <Switcher/>
        </>
    )
}