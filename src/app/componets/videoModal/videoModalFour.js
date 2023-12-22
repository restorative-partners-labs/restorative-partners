"use client"
import React,{useState} from "react"
import Link from "next/link"

import ModalVideo from 'react-modal-video'
import "../../../../node_modules/react-modal-video/css/modal-video.css";

export default function VideoModalFour(){
    const [isOpen, setOpen] = useState(false)
    return(
        <>
        <Link href="#" onClick={() => setOpen(true)} scroll={false} className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white duration-500 ease-in-out mx-auto">
            <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
        </Link>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)} />
        </>
    )
}