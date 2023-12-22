"use client"
import React, { useState} from 'react'
import Link from "next/link"

import ModalVideo from 'react-modal-video'
import "../../../../node_modules/react-modal-video/css/modal-video.css";

export default function VideoModalTwo(){
    const [isOpen, setOpen] = useState(false)
    return(
        <>
        <div className="absolute bottom-0 end-0 text-center">
            <Link href="#" onClick={() => setOpen(true)} scroll={false} className="lightbox h-14 w-14 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-indigo-600 text-white">
                <i className="mdi mdi-play inline-flex items-center justify-center text-xl"></i>
            </Link>
        </div>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)} />
        </>
    )
}