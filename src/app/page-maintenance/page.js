import React from 'react'
import Image from 'next/image';
import Switcher from '../componets/switcher';
import Maintenance from '../componets/maintenance';

export default function PageMaintenance() {
    return (
        <>
            <section className="relative h-screen flex items-center justify-center text-center bg-no-repeat bg-center bg-cover" style={{backgroundImage:"url('/images/utility.jpg')"}}>
                <div className="absolute inset-0 bg-black/25"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1">
                        <Image src="/images/logo-light.png" width={138} height={24} className="mx-auto" alt="" />
                        <h1 className="text-white mb-6 mt-8 md:text-5xl text-3xl font-bold">We Are Back Soon...</h1>
                        <p className="text-white/70 text-lg max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                   <Maintenance/>

                    <div className="grid grid-cols-1 mt-6">
                        <div className="text-center subcribe-form">
                            <form className="relative mx-auto max-w-xl">
                                <input type="email" id="subemail" name="name" className="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white/70 dark:bg-slate-900/70 border border-gray-100 dark:border-gray-700" placeholder="Enter your email id.." />
                                <button type="submit" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle transition duration-500 ease-in-out text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-full">Subcribe Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Switcher/>
        </>
    )
}
