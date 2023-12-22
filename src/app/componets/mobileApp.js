"use client"
import React from "react"
import Link from "next/link"
import Image from "next/image"

import * as Icon from 'react-feather';

import {MdKeyboardArrowRight} from "react-icons/md"

export default function MobileApp(){
    return(
                <div className="container relative md:mt-24 mt-16">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center">
                        <div className="lg:col-span-5 md:col-span-6">
                            <Image src="/images/illustrator/envelope.svg" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="mx-auto d-block" alt="" />
                        </div>

                        <div className="lg:col-span-7 md:col-span-6">
                            <span className="bg-indigo-600/5 text-indigo-600 text-xs font-bold px-2.5 py-0.5 rounded h-5">Mobile Apps</span>
                            <h4 className="md:text-3xl text-2xl lg:leading-normal leading-normal font-medium my-4">Available for your <br /> Smartphones</h4>
                            <p className="text-slate-400 max-w-xl mb-0">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                            <div className="my-5">
                                <Link href="#"><Image src="/images/app/app.png" width={167} height={57} placeholder="blur" blurDataURL="/images/app/app.png" className="m-1 inline-block w-auto h-auto" alt="" /></Link>
                                <Link href="#"><Image src="/images/app/playstore.png" width={167} height={57} placeholder="blur" blurDataURL="/images/app/playstore.png" className="m-1 inline-block  w-auto h-auto" alt="" /></Link>
                            </div>

                            <div className="inline-block">
                                <div className="pt-4 flex items-center border-t border-gray-100 dark:border-gray-700">
                                    <Icon.Smartphone className="me-2 text-indigo-600 h-10 w-10"></Icon.Smartphone>
                                    <div className="content">
                                        <h6 className="text-base font-medium">Install app now on your cellphones</h6>
                                        <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Learn More<MdKeyboardArrowRight className="text-xl ms-1"/></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}