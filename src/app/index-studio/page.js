import React from 'react'
import Link from "next/link"
import Image from "next/image"

import Navbar from '../componets/Navbar/navbar'
import Footer from '../componets/Footer/footer'
import Switcher from '../componets/switcher'
import CookieModal from '../componets/cookieModal'
import ClientsOne from '../componets/clientsOne'
import AvailableProject from '../componets/availaleProject'
import CompanyLogo from '../componets/companyLogo'
import VideoModal from '../componets/videoModal/videoModal'
import Counter from '../componets/studio/counter'
import HeroSlider from '../componets/studio/heroSlider'
import Tab from '../componets/studio/tab'
import Portfolio from '../componets/studio/portfolio'

import {MdKeyboardArrowRight,FaArrowRight,RiPresentationFill,RiMoneyCnyBoxLine,LiaFileInvoiceDollarSolid,AiOutlineDollar} from "../assets/icons/icons"
import { studioAbout } from '../Data/dataThree'

export default function IndexStudio(){

    return(
        <>
        <Navbar/>

        <section className="relative table w-full py-36 lg:py-44 before:content-[''] before:absolute  xl:before:start-[50rem] lg:before:start-[30rem] md:before:start-[15rem] before:start-[0rem] lg:before:bottom-[10rem] md:before:bottom-[12rem] before:bottom-[14rem] before:w-[60rem] before:h-[30rem] before:rounded-[18rem] ltr:before:rotate-[135deg] rtl:before:rotate-[45deg] before:bg-indigo-600/5 dark:before:bg-indigo-600/10 overflow-hidden">
            <div className="absolute inset-0 bg-indigo-600 opacity-5"></div>
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                    <div className="md:col-span-7">
                        <div className="md:me-6">
                            <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">Bigger, Bolder
                                <br /> <span className="text-indigo-600">& Better</span></h4>
                            <p className="text-slate-400 text-lg max-w-xl">Launch your campaign and benefit from our expertise
                                on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                            <div className="mt-6">
                                <Link href="/page-aboutus" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Company</Link>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-5">
                        <div className="relative">
                            <HeroSlider/>
                            <VideoModal/>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16 pt-12">
            <div className="container relative">
                <CompanyLogo/>
            </div>
            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 pb-8 items-end">
                    <div className="lg:col-span-8 md:col-span-6 md:text-start text-center">
                        <h3 className="md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">We create
                            world-className <br /> web design, and <br /> branding.</h3>
                    </div>

                    <div className="lg:col-span-4 md:col-span-6 md:text-end hidden md:block">
                        <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-slate-400 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">See
                            More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                    </div>
                </div>
                <div className="grid lg:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
                    <Counter/>
                    <div className="lg:col-span-9">
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-[30px]">
                                    {studioAbout.map((item,index)=>{
                                        let Icons = item.icon
                                            return(
                                            <div key={index} className="p-6 rounded-lg shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                                                <div
                                                    className="w-16 h-16 bg-indigo-600/5 border-2 border-indigo-600/20 text-indigo-600 rounded-lg text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800">
                                                    <Icons width={24} height={24}/>
                                                </div>
            
                                                <div className="content mt-7">
                                                    <Link href="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">{item.title}</Link>
                                                    <p className="text-slate-400 mt-3">{item.desc}</p>
            
                                                    <div className="mt-5">
                                                        <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read
                                                            More<FaArrowRight className="ms-2 text-[10px]"/></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            )
                                    })} 
                        </div>

                        <div className="grid md:grid-cols-12 grid-cols-1 md:hidden mt-8">
                            <div className="md:col-span-12 text-center">
                                <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-slate-400 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">See
                                    More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16 md:pt-0 pt-0">
            <div className="container relative">
                <div className="grid grid-cols-1 justify-center">
                    <div className="relative z-1">
                        <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                            <div className="lg:col-start-2 lg:col-span-10">
                                <div className="relative">
                                    <Image src="/images/digital/cta.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="rounded-md shadow-lg" alt="" />
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
                                                <h6 className="text-white/50 text-lg font-semibold">Techwind Agency</h6>
                                                <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-white mt-2"> We are a full-service <br /> digital company</h3>
                                            </div>
                                        </div>

                                        <div className="mt-8">
                                            <div className="section-title text-md-start">
                                                <p className="text-white/50 max-w-xl mx-auto mb-2">Start working with Techwind that can provide everything you need to generate awareness, drivetraffic, connect.</p>
                                                <Link href="#" className="text-white flex items-center">Read More <MdKeyboardArrowRight className="text-xl ms-1"/></Link>
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

      <Tab/>

        <section className="relative md:py-24 py-16">
            <Portfolio/>
            <div className=" md:mt-24 mt-16">
                <ClientsOne/>
                <AvailableProject/>
            </div>
        </section>

        <Footer/>
        <Switcher/>
        <CookieModal/>
        </>
    )
}