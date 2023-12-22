"use client"
import React, { useState } from 'react'
import Link from 'next/link';

import ModalVideo from 'react-modal-video'
import "../../../../node_modules/react-modal-video/css/modal-video.css";

export default function Cta(){
    let [isOpen, setOpen] = useState(false);

    return(
        <>
        <section className="relative table w-full py-36 bg-no-repeat bg-center bg-cover" style={{backgroundImage:"url('/images/event/bg2.jpg')"}}>
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/90 to-fuchsia-600/90"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 text-center">
                    <Link href="#" onClick={() => setOpen(true)} scroll={false} className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 mx-auto mb-12">
                        <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                    </Link>
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold text-white">Lets Make Something Together</h3>
                    <p className="text-white/80 max-w-xl mx-auto">The Biggest Event Ever</p>
                </div>
            </div>
        </section>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)} />
        </>
    )
}