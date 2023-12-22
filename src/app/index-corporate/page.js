import React from "react"
import Link from "next/link"
import Image from "next/image"

import Navbar from "../componets/Navbar/navbar"
import Footer from "../componets/Footer/footer"
import Switcher from "../componets/switcher"
import CookieModal from "../componets/cookieModal"
import KeyFeature from "../componets/keyFeatures"
import ClientsOne from "../componets/clientsOne"
import Blog from "../componets/blog"
import PricingOne from "../componets/pricingOne"
import VideoModal from "../componets/videoModal/videoModal"
import HeroSliderTwo from "../componets/heroSliderTwo"

import {MdKeyboardArrowRight,FaArrowRight} from "../assets/icons/icons"

import { corporateAbout } from "../Data/dataThree"

export default function Corporate(){
   
    return(
        <>
        <Navbar navClass="nav-light"/>

        <section className="swiper-slider-hero relative block h-screen" id="home">
            <HeroSliderTwo/>
        </section>

        <section className="relative bg-gray-50 dark:bg-slate-800 md:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1 justify-center">
                    <div className="relative z-2 transition-all duration-500 ease-in-out sm:-mt-[200px] -mt-[140px] m-0">
                        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[24px]">
                            {corporateAbout.map((item,index)=>{
                                let Icons = item.icon
                                return(
                                    <div key={index} className="group p-6 md:px-4 rounded-lg shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 bg-white dark:bg-slate-900 text-center transition-all duration-500 ease-in-out">
                                        <div className="w-16 h-16 bg-indigo-600/5 text-indigo-600 rounded-lg text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                                            <Icons className="w-7 h-7"/>
                                        </div>
        
                                        <div className="content mt-7">
                                            <Link href="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">{item.title}</Link>
                                            <p className="text-slate-400 mt-3">{item.desc}</p>
        
                                            <div className="mt-5">
                                                <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More<FaArrowRight className="ms-2 text-[10px]"/></Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="md:col-span-5">
                        <div className="relative">
                            <Image src="/images/company/about2.png" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto" }} className="mx-auto" alt="" />
                            <VideoModal/>
                        </div>
                    </div>

                    <div className="md:col-span-7">
                        <div className="lg:ms-4">
                            <h4 className="mb-6 md:text-3xl text-2xl lg:leading-normal leading-normal font-medium">We are the largest <br /> Business expert </h4>
                            <p className="text-slate-400 max-w-xl">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with real content. This is required when, for example, the final text is not yet available. Dummy texts have been in use by typesetters since the 16th century.</p>
                            <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-3">Buy Now <i className="mdi mdi-chevron-right align-middle"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <KeyFeature btnFill={true}/>
        </section>

        <section className="relative md:py-24 py-16 md:pt-0 pt-0">
            <div className="container relative">
                <div className="grid grid-cols-1 justify-center">
                    <div className="relative z-1">
                        <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                            <div className="lg:col-start-2 lg:col-span-10">
                                <div className="relative">
                                    <Image src="/images/cta-bg.jpg" width={0} height={0} sizes="100vw" style={{width:"100%" , height:"auto"}} className="rounded-md shadow-lg" alt="" />
                                   <VideoModal/>
                                </div>
                            </div>
                        </div>
                        <div className="content md:mt-8">
                            <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                                <div className="lg:col-start-2 lg:col-span-10">
                                    <div className="grid md:grid-cols-2 grid-cols-1 items-center">
                                        <div className="mt-8">
                                            <div className="section-title text-md-start">
                                                <h6 className="text-white/50 text-lg font-semibold">Team</h6>
                                                <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-white mt-2">Meet Experience <br /> Team Member</h3>
                                            </div>
                                        </div>

                                        <div className="mt-8">
                                            <div className="section-title text-md-start">
                                                <p className="text-white/50 max-w-xl mx-auto mb-2">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                                <Link href="#" className="text-white flex">Read More <MdKeyboardArrowRight className="text-xl ms-1"/></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 start-0 end-0 sm:h-2/3 h-4/5 bg-gradient-to-b from-indigo-500 to-indigo-600"></div>
        </section>
        <PricingOne/>
        <section className="relative md:py-24 py-16">
            <ClientsOne/>
        </section>

        <section className="container relative md:pb-24 pb-16">
           <Blog/>
        </section>

        <Footer/>
        <Switcher/>
        <CookieModal/>
        </>
    )
}