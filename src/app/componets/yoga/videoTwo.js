"use client"
import React, { useState } from 'react'
import Link from "next/link"
import Image from 'next/image'

import ModalVideo from 'react-modal-video'
import "../../../../node_modules/react-modal-video/css/modal-video.css";

export default function VideoTwo(){
    const [isOpen, setOpen] = useState(false)
    return(
        <>
        <div className="relative">
            <Image src="/images/yoga/cta.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} alt="" />
            <div className="absolute md:bottom-1/2 md:translate-y-1/2 md:-end-10 ltr:md:translate-x-0 rtl:md:translate-x-0 -bottom-10 end-1/2 ltr:translate-x-1/2 rtl:-translate-x-1/2 text-center">
                <Link href="#" onClick={() => setOpen(true)} scroll={false} className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 dark:text-white">
                    <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                </Link>
            </div>
        </div>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)} />
        </>
    )
}