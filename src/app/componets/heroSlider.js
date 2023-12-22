"use client"
import React from "react"
import Link from "next/link"

import { CarouselProvider, Slider, Slide} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function HeroSlider(){
    return(
        <section  className="relative">
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={55}
                totalSlides={3}
                interval={5000}
                isPlaying={true}
                className='h-screen'
            >
                <Slider className='h-full careHeight'>
                    <Slide index={0} className='h-full'>
                        <div className="flex items-center justify-center transition-all duration-700 ease-in-out h-full overflow-hidden">
                            <div className="absolute inset-0 image-wrap z-1 bg-no-repeat bg-center bg-cover " style={{backgroundImage:"url('/images/business/bg01.jpg')"}}></div>
                            <div className="absolute inset-0 ltr:md:bg-gradient-to-r rtl:md:bg-gradient-to-l md:from-black md:via-black/80 md:bg-black/20 bg-black/70 z-2"></div>
                            <div className="container relative z-3 flex items-center ">
                                <div className="grid grid-cols-1 md:mt-10 mt-14">
                                    <div className="md:text-start text-center">
                                        <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl md:mb-6 mb-2">Take Care of Your Future</h1>
                                        <p className="text-white/70 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                                        <div className="md:mt-8 mt-4">
                                            <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Contact us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slide>
                    <Slide index={1} className='h-full'>
                        <div className="flex items-center justify-center transition-all duration-700 ease-in-out h-full overflow-hidden">
                            <div className="absolute inset-0 image-wrap z-1 bg-no-repeat bg-center bg-cover " style={{backgroundImage:"url('/images/business/bg02.jpg')"}}></div>
                            <div className="absolute inset-0 md:bg-gradient-to-b md:from-transparent md:to-black md:bg-black/20 bg-black/70 z-2"></div>
                            <div className="container relative z-3 flex items-center justify-center">
                                <div className="grid grid-cols-1 mt-10">
                                    <div className="text-center">
                                        <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">Lets Start With Techwind</h1>
                                        <p className="text-white/70 text-lg max-w-xl mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                                        <div className="mt-8">
                                            <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">See Services</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slide>
                    <Slide index={2} className='h-full'>
                        <div className="flex items-center justify-center transition-all duration-700 ease-in-out h-full overflow-hidden">
                            <div className="absolute inset-0 image-wrap z-1 bg-no-repeat bg-center bg-cover " style={{backgroundImage:"url('/images/business/bg03.jpg')"}}></div>
                            <div className="absolute inset-0 ltr:md:bg-gradient-to-l rtl:md:bg-gradient-to-r md:from-black md:via-black/80 md:bg-black/20 bg-black/70 z-2"></div>
                            <div className="container relative z-3">
                                <div className="grid grid-cols-1 mt-10">
                                    <div className="md:text-end text-center">
                                        <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">Build and Grow Your Business</h1>
                                        <p className="text-white/70 text-lg max-w-xl md:ms-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                                        <div className="mt-8">
                                            <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Pricing Plans</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slide>
                </Slider>
            </CarouselProvider>
        </section>
    )
}