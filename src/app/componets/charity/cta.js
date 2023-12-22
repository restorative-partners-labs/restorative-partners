"use client"
import React, { useState } from 'react'
import Link from "next/link"

import ModalVideo from 'react-modal-video'
import "../../../../node_modules/react-modal-video/css/modal-video.css";

export default function Cta(){

    let [isOpen, setOpen] = useState(false)

    return(
        <section className="py-20 w-full table relative  bg-top bg-no-repeat bg-cover" style={{backgroundImage:"url('/images/charity/cta.jpg')"}}>
            <div className="absolute inset-0 bg-slate-900/70"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 text-center">
                    <h3 className="mb-4 md:text-3xl text-2xl text-white font-medium">Senior Citizen Program</h3>

                    <p className="text-white/80 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>

                    <Link href="#" onClick={() => setOpen(true)} scroll={false} className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 mx-auto mt-10">
                        <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                    </Link>
                </div>
            </div>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)} />
        </section>
    )
}