import React from 'react'
import Link from 'next/link';

import Switcher from '../componets/switcher';

import {FiThumbsUp} from "../assets/icons/icons"

export default function PageThankyou() {
    return (
        <>
        <section className="relative h-screen flex items-center justify-center text-center bg-gray-50 dark:bg-slate-800">
            <div className="container relative">
                <div className="grid grid-cols-1">
                    <div className="title-heading text-center my-auto">
                        <div className="w-24 h-24 bg-indigo-600/5 text-indigo-600 rounded-full text-5xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                            <FiThumbsUp className='w-11 h-11'/>
                        </div>
                        <h1 className="mt-6 mb-8 md:text-5xl text-3xl font-bold">Thank You</h1>
                        <p className="text-slate-400 max-w-xl mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind x3 html page.</p>

                        <div className="mt-6">
                            <Link href="/" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-md">Back to Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Switcher/>
        </>
    )
}