import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import Switcher from '../componets/switcher';
import Comingsoon from '../componets/comingsoon';

export default function PageComingsoon() {
  return (
    <>
        <section className="relative  bg-no-repeat bg-center bg-cover" style={{backgroundImage:"url('/images/utility.jpg')"}}>
            <div className="absolute inset-0 bg-black/25"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black"></div>
            <div className="container-fluid relative">
                <div className="grid grid-cols-1">
                    <div className="flex flex-col min-h-screen justify-center md:px-10 py-10 px-4">
                        <div className="text-center">
                            <Link href="/"><Image src="/images/logo-icon-64.png" width={72} height={68} className="mx-auto" alt=""/></Link>
                        </div>
                        <div className="title-heading text-center my-auto">
                            <h1 className="text-white mt-3 mb-6 md:text-5xl text-3xl font-bold">We Are Coming Soon...</h1>
                            <p className="text-white/70 text-lg max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        
                           <Comingsoon/>
                        </div>
                        <div className="text-center">
                            <p className="mb-0 text-slate-400">© {new Date().getFullYear()} Techwind. Design & Develop with <i className="mdi mdi-heart text-red-600"></i> by <Link href="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Switcher/>
    </>
  )
}
