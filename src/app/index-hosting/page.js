import React from 'react'
import Link from "next/link"
import Image from "next/image"

import Navbar from '../componets/Navbar/navbar'
import Footer from '../componets/Footer/footer'
import Switcher from '../componets/switcher'
import CookieModal from '../componets/cookieModal'
import ClientsOne from '../componets/clientsOne'
import HostingServices from '../componets/hosting/slider'
import Pricing from '../componets/hosting/pricing'
import Faq from '../componets/hosting/Faq'

import * as Icon from 'react-feather';
import {BsCheckCircle,MdKeyboardArrowRight} from "../assets/icons/icons"

import { hosting } from '../Data/data'
import { hostingAbout } from '../Data/dataThree'

export default function Hosting(){
   
    return(
        <>
        <Navbar navClass="nav-light" />

        <section className="relative table w-full py-36 lg:py-52  bg-center bg-no-repeat bg-cover" style={{backgroundImage:"url('/images/hosting/bg-hosting.jpg')"}}>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-10">
                    <h5 className="text-lg text-white font-medium mb-3">Bring your ideas to life</h5>
                    <h3 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-white">Powerful Web Hosting Services</h3>

                    <p className="text-slate-300 text-lg max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>

                    <div className="mt-8">
                        <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Get Started</Link>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16 pt-5">
            <div className="container-fluid relative">
                <div className="grid grid-cols-1">
                    <div className="relative z-2 transition-all duration-500 ease-in-out sm:-mt-[200px] -mt-[140px] m-0">
                        <div className="grid grid-cols-1 mt-8">
                            <HostingServices/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 items-end">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Hosting Services</h3>
                    <p className="text-slate-400 max-w-xl">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    {hosting.map((Data,index) => {
                        let Icons = Data.icon
                        return (
                            <div key={index} className="group relative p-6 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden">
                                <div className="relative overflow-hidden inline-flex text-transparent -m-3">
                                    <Icon.Hexagon className="h-24 w-24 fill-indigo-600/5 group-hover:fill-white/10"></Icon.Hexagon>
                                    <div className="absolute top-2/4 -translate-y-2/4 start-8 text-indigo-600 rounded-xl group-hover:text-white transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                                        <Icons className="w-7 h-7"/>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <Link href="#" className="text-lg font-medium group-hover:text-white transition-all duration-500 ease-in-out">{Data.role}</Link>
                                    <p className="text-slate-400 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
                    <div className="lg:col-span-6 md:order-2 order-1">
                        <div className="lg:ms-8">
                            <Image src="/images/hosting/2.png" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} alt="" />
                        </div>
                    </div>
                    <div className="lg:col-span-6 md:order-1 order-2">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Quick Responce <br /> and Secure Server</h3>
                        <p className="text-slate-400 max-w-xl">You can combine all the Techwind templates into a single one, you can take a component from the Application theme and use it in the Website.</p>

                        <ul className="list-none text-slate-400 mt-4">
                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Digital Marketing Solutions for Tomorrow</li>
                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Our Talented & Experienced Marketing Agency</li>
                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Create your own skin to match your brand</li>
                        </ul>

                        <div className="mt-4">
                            <Link href="/page-aboutus" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Find Out More<MdKeyboardArrowRight className="text-xl ms-1"/> </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
                    <div className="lg:col-span-6">
                        <div className="lg:me-8">
                            <Image src="/images/hosting/1.png" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} alt="" />
                        </div>
                    </div>
                    <div className="lg:col-span-6">
                        <div className="grid grid-cols-1 gap-[30px]">
                            {hostingAbout.map((item,index)=>{
                                let Icons = item.icon
                                return(
                                    <div key={index} className="group flex items-center relative overflow-hidden p-6 rounded-md shadow dark:shadow-gray-800 bg-gray-50 dark:bg-slate-800 hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-500 ease-in-out">
                                    <span className="text-indigo-600 group-hover:text-white text-5xl font-semibold transition-all duration-500 ease-in-out">
                                        <Icons className='h-10 w-10'/>
                                    </span>
                                    <div className="flex-1 ms-3">
                                        <h5 className="group-hover:text-white text-xl font-semibold transition-all duration-500 ease-in-out">{item.title}</h5>
                                        <p className="text-slate-400 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-2">{item.desc}</p>
                                    </div>
                                    <div className="absolute start-1 top-5 text-dark/[0.03] dark:text-white/[0.03] text-8xl group-hover:text-white/[0.04] transition-all duration-500 ease-in-out">
                                        <Icons className='w-20 h-20'/>
                                    </div>
                                </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative md:pt-24 md:pb-36 pt-16 pb-24 bg-indigo-600">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold text-white">Hosting / Server Rates</h3>
                    <p className="text-slate-400 max-w-xl mx-auto text-white/70">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                </div>
            </div>
        </section>

        <Pricing/>

        <section className="relative md:py-24 py-16">
            <ClientsOne/>
        </section>

        <section className="relative md:pb-24 pb-16 bg-bottom bg-no-repeat bg-cover" style={{backgroundImage:"url('/images/hosting/bg.png')"}}>
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Frequently Asked Questions</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <Faq/>
            </div>
        </section>

        <Footer/>
        <Switcher/>
        <CookieModal/>
        </>
    )
}