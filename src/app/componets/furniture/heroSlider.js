"use client"
import React from 'react'
import Link from 'next/link';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import {FaArrowRight} from '../../assets/icons/icons'

export default function HeroSlider(){
    return(
        <section>
            <div className="overflow-hidden relative h-screen inset-0">
            <Swiper
                    className='swiper-wrapper'
                    spaceBetween={50}
                    slidesPerView={1}
                    onSwiper={(swiper) => console.log(swiper)}
                    modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
                    navigation={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                >
                    <SwiperSlide>
                        <div className="flex items-center justify-center transition-all h-screen duration-700  bg-center bg-no-repeat bg-cover" data-carousel-item="active" style={{backgroundImage:"url('/images/furniture/bg01.jpg')"}}>
                            <div className="absolute md:end-0 md:start-auto bottom-0 w-full lg:w-[700px] md:w-[500px] h-fit bg-white dark:bg-slate-900 md:p-20 p-10">
                                <h5 className="uppercase font-bold mb-4 text-sm">New Arrivals</h5>
                                <h1 className="font-bold dark:text-white lg:leading-normal leading-normal text-3xl lg:text-5xl">Modern <br /> Furniture</h1>

                                <div className="mt-8">
                                    <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Shop Now <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center justify-center transition-all h-screen duration-700  bg-center bg-no-repeat bg-cover" data-carousel-item="" style={{backgroundImage:"url('/images/furniture/bg02.jpg')"}}>
                            <div className="absolute md:end-0 md:start-auto bottom-0 w-full lg:w-[700px] md:w-[500px] h-fit bg-white dark:bg-slate-900 md:p-20 p-10">
                                <h5 className="uppercase font-bold mb-4 text-sm">New Arrivals</h5>
                                <h1 className="font-bold dark:text-white lg:leading-normal leading-normal text-3xl lg:text-5xl">Dream <br /> Sofa Design</h1>

                                <div className="mt-8">
                                    <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Shop Now<FaArrowRight className="ms-2 text-[10px]"/></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center justify-center transition-all h-screen duration-700  bg-center bg-no-repeat bg-cover" style={{backgroundImage:"url('/images/furniture/bg03.jpg')"}}>
                            <div className="absolute md:end-0 md:start-auto bottom-0 w-full lg:w-[700px] md:w-[500px] h-fit bg-white dark:bg-slate-900 md:p-20 p-10">
                                <h5 className="uppercase font-bold mb-4 text-sm">New Arrivals</h5>
                                <h1 className="font-bold dark:text-white lg:leading-normal leading-normal text-3xl lg:text-5xl">Look <br /> Modern House</h1>

                                <div className="mt-8">
                                    <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Shop Now <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}