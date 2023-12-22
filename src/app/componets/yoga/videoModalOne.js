"use client"
import React, { useState } from 'react'
import Link from "next/link"

import ModalVideo from 'react-modal-video'
import "../../../../node_modules/react-modal-video/css/modal-video.css";

export default function VideoModalOne(){
    const [isOpen, setOpen] = useState(false)
    return(
        <>
        <Link href="#" onClick={() => setOpen(true)} scroll={false} className="lightbox h-24 w-24 rounded-full inline-flex items-center justify-center bg-white/10 hover:bg-white/40 text-white dark:bg-slate-900/10 dark:hover:bg-slate-900/40 transition-all duration-500">
            <i className="mdi mdi-play inline-flex items-center justify-center text-3xl"></i>
        </Link>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)} />
        </>
    )
}