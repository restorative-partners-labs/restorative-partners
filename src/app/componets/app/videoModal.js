"use client"
import React,{useState} from "react"
import Link from "next/link"

import ModalVideo from 'react-modal-video'
import "../../../../node_modules/react-modal-video/css/modal-video.css";

export default function VideoModal(){
    let[isOpen,setOpen] = useState(false)
    return(
        <>
        <div className="absolute top-4 md:end-14 -end-2 text-center">
            <Link href="#" onClick={() => setOpen(true)} scroll={false} className="lightbox h-20 w-20 rounded-full shadow-md dark:shadow-gyay-700 inline-flex items-center justify-center text-white bg-indigo-600">
                <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
            </Link>
        </div>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)} />
        </>
    )
}