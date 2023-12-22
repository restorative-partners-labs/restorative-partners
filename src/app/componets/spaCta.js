"use client"
import React, {useState} from 'react'
import Link from "next/link"

import ModalVideo from 'react-modal-video'
import "../../../node_modules/react-modal-video/css/modal-video.css";

export default function SpaCta(){
    const [isOpen, setOpen] = useState(false)
    return(
        <section className="py-20 w-full table relative  bg-center bg-no-repeat bg-cover jarallax bg-fixed" data-jarallax data-speed="0.5" style={{backgroundImage:"url(/images/spa/cta.jpg)"}}>
        <div className="absolute inset-0 bg-slate-900/70"></div>
        <div className="container relative">
            <div className="grid grid-cols-1 text-center">
                <h3 className="mb-6 md:text-4xl text-3xl font-head-ebgaramond text-white font-medium">Stop leaving money on the table.</h3>

                <p className="text-white/80 max-w-xl mx-auto">Every treatment is specifically designed to using massage sequences and the most potent actives available in the world today.</p>

                <Link href="#" onClick={() => setOpen(true)} data-type="youtube" data-id="S_CGed6E610" className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 mx-auto mt-10">
                    <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                </Link>
            </div>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)} />
        </div>
    </section>
    )
}