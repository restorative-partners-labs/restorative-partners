"use client"
import React,{useState} from "react"
import Link from "next/link"

import ModalVideo from 'react-modal-video'
import "../../../../node_modules/react-modal-video/css/modal-video.css";

export default function VideoModalThree(){
    let [isOpen, setOpen] = useState(false);
    return(
        <>
        <Link href="#" onClick={() => setOpen(true)} scroll={false} className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full lightbox"><i className="mdi mdi-play text-xl align-middle"></i></Link>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)} />
        </>
    )
}