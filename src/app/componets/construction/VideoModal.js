"use client"
import React, { useState} from 'react'
import Link from "next/link"

import ModalVideo from 'react-modal-video'
import "../../../../node_modules/react-modal-video/css/modal-video.css";

export default function VideoModal(){
    const [isOpen, setOpen] = useState(false)
    return(
        <>
        <div className="lg:col-span-4 md:col-span-5 md:text-center md:order-2 order-1">
            <Link href="#" onClick={() => setOpen(true)} scroll={false} className="lightbox lg:h-24 h-20 lg:w-24 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white hover:bg-indigo-600 text-indigo-600 hover:text-white duration-500 ease-in-out mx-auto">
                <i className="mdi mdi-play inline-flex items-center justify-center text-3xl"></i>
            </Link>
        </div>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)} />
        </>
    )
}