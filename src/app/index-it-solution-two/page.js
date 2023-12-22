import React from 'react'
import Link from "next/link"
import Image from "next/image"

import Navbar from '../componets/Navbar/navbar'
import Footer from '../componets/Footer/footer'
import Switcher from '../componets/switcher'
import CookieModal from '../componets/cookieModal'
import CompanyLogo from '../componets/companyLogo'
import ClientsOne from '../componets/clientsOne'
import Blog from '../componets/blog'
import VideoModalThree from '../componets/videoModal/videoModalThree'
import Counter from '../componets/AboutUs/counter'
import Cta from '../componets/cta'
import CounterTwo from '../componets/consulting/counterTwo'


import * as Icon from 'react-feather';
import {MdOutlineEventNote} from "../assets/icons/icons"

import { itSolutionData } from '../Data/data'

export default function ItSolutiontwo(){

    return(
        <>
        <Navbar/>

        <section className="relative table w-full py-36 lg:py-64  bg-no-repeat sm:bg-left bg-right overflow-hidden bg-cover" style={{backgroundImage:"url('/images/it/bg.jpg')"}}>
            <div className="container relative z-1">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                    <div className="md:col-span-7">
                        <div className="md:me-6">
                            <span className="text-xl font-semibold">IT Company</span>
                            <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-6xl mb-5 text-black dark:text-white"><span className="after:absolute after:end-0 after:start-0 after:bottom-2 after:h-1.5 after:w-auto after:bg-gradient-to-l after:to-indigo-600 after:from-green-600 relative">Consultant</span> & <br /> Find Bright <span className="after:absolute after:end-0 after:start-0 after:bottom-2 after:h-1.5 after:w-auto after:bg-gradient-to-l after:to-indigo-600 after:from-green-600 relative">Solutions</span></h4>
                            <p className="text-slate-400 text-lg max-w-xl">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>

                            <div className="mt-6">
                                <Link href="#" className="py-2 px-5 me-2 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Contact Us</Link>
                                <VideoModalThree/>
                                <span className="font-semibold ms-1 align-middle"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute md:w-3/4 w-full top-1/2 -translate-y-1/2">
                <div className="absolute w-full h-[5000px] bg-slate-50 dark:bg-slate-800 md:opacity-100 opacity-90 top-1/2 -translate-y-1/2 md:-start-[10%] -start-[25%] ltr:rotate-12 rtl:-rotate-12"></div>
                <div className="absolute md:w-48 w-20 h-[5000px] bg-indigo-600 top-1/2 -translate-y-1/2 md:end-[10%] -end-[1%] ltr:rotate-12 rtl:-rotate-12"></div>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid md:grid-cols-2 grid-cols-1 pb-8 items-center">
                    <div>
                        <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Services</h6>
                        <h3 className="md:text-3xl md:leading-normal text-2xl leading-normal font-semibold mb-4 md:mb-0">It was a very common<br /> question that What IT Service<br /> We Provide now!</h3>
                    </div>
                    <p className="text-slate-400 max-w-xl">Explore and learn more about everything from machine learning and global payments to scaling your team.</p>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    {
                        itSolutionData.map((data, index) => {
                            let Icons = data.icon
                            return (

                                <div key={index} className="group relative p-6 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center">
                                    <div className="relative overflow-hidden text-transparent -m-3">
                                        <Icon.Hexagon className="h-24 w-24 fill-indigo-600/5 group-hover:fill-white/10 mx-auto rotate-90"></Icon.Hexagon>
                                        <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded-xl group-hover:text-white transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                                            <Icons width={30} height={30}/>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <Link href="#" className="text-lg font-medium group-hover:text-white transition-all duration-500 ease-in-out">{data.title}</Link>
                                        <p className="text-slate-400 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-3">It is a long established fact that a reader.</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="md:col-span-6">
                        <div className="lg:me-8">
                            <div className="relative">
                                <Image src="/images/it/about.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="rounded-full shadow-lg dark:shadow-gray-800" alt="" />

                                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 mx-auto lg:w-72 w-56 lg:h-72 h-56 flex justify-center items-center bg-white dark:bg-slate-900 rounded-full shadow-lg dark:shadow-gray-800">
                                    <Counter/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-6">
                        <div className="lg:ms-8">
                            <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Fast & Effective</h6>
                            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">we are a global stakeholder <br /> relations and partnership <br /> building consultancy.</h3>

                            <p className="text-slate-400 max-w-xl mb-6">Get instant helpful resources about anything on the go, easily implement secure money transfer solutions, boost your daily efficiency, connect to other app users and create your own Techwind network, and much more with just a few taps. commodo consequat. Duis aute irure.</p>

                            <Link href="/page-services" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"><MdOutlineEventNote className="me-2 text-lg"/> Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

       <Cta/>

        <section className="relative md:pb-24 pb-16">
            <div className="container relative lg:pt-24 pt-16">
                <div className="absolute inset-0 opacity-25 dark:opacity-50 bg-no-repeat bg-center bg-cover" style={{backgroundImage:"url('/images/map.png')"}}></div>
                <div className="relative grid grid-cols-1 pb-8 text-center z-1">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-black dark:text-white">We have Built This Site With Content Management In Mind.</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <CounterTwo/>
            </div>
        </section>

        <section className="relative md:pb-24 pb-16">
            <ClientsOne/>
        </section>

        <section className="container relative md:pb-24 pb-16">
            <Blog/>
        </section>

        <section className="py-6 border-t border-b border-gray-100 dark:border-gray-700">
            <div className="container relative">
               <CompanyLogo/>
            </div>
        </section>

        <Footer/>
        <Switcher/>
        <CookieModal/>
        </>
    )
}