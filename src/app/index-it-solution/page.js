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
import Counter from '../componets/AboutUs/counter'
import Cta from '../componets/cta'

import * as Icon from 'react-feather';
import {MdOutlineEventNote,FaRegEnvelope} from "../assets/icons/icons"

import { itSolutionData } from '../Data/data'

export default function IndexItSolution(){
    return(
        <>
        <Navbar navClass="nav-light"/>

        <section className="relative table w-full py-36 pb-0 lg:py-44 lg:pb-0 bg-indigo-600  bg-center bg-no-repeat bg-cover" style={{backgroundImage:"url('/images/bg2.png')"}}>
            <div className="container relative">
                <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    <div className="lg:col-span-7">
                        <div className="md:me-6 md:mb-20">
                            <h5 className="text-lg text-white/60">We are creative</h5>
                            <h4 className="font-semibold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-white">Best IT Solution <br /> Company</h4>
                            <p className="text-white/60 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                            <div className="mt-6">
                                <Link href="/contact-one" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700 rounded-md me-2 mt-2"><FaRegEnvelope className="me-2 text-sm"/> Get Started</Link>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <Image src="/images/hero1.png" width={0} height={0} sizes='100vw' style={{height:"auto", width:"100%"}} alt="" />
                    </div>
                </div>
            </div>
        </section>
        <div className="relative">
            <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-gray-50 dark:text-slate-800">
                <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <section className="py-6 bg-gray-50 dark:bg-slate-800">
            <div className="container relative">
               <CompanyLogo/>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">What we do ?</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    {
                        itSolutionData.map((data,index) => {
                            let Icons = data.icon
                            return (
                                <div key={index} className="group relative p-6 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center">
                                    <div className="relative overflow-hidden text-transparent -m-3">
                                        <Icon.Hexagon className="h-24 w-24 fill-indigo-600/5 group-hover:fill-white/10 mx-auto"></Icon.Hexagon>
                                        <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded-xl group-hover:text-white transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                                            <Icons className="w-7 h-7"/>
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
                    <div className="lg:col-span-5 md:col-span-6">
                        <div className="grid grid-cols-12 gap-6 items-center">
                            <div className="col-span-6">
                                <div className="grid grid-cols-1 gap-6">
                                    <Image src="/images/about/ab03.jpg" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="shadow rounded-md" alt="" />
                                    <Image src="/images/about/ab02.jpg" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="shadow rounded-md" alt="" />
                                </div>
                            </div>

                            <div className="col-span-6">
                                <div className="grid grid-cols-1 gap-6">
                                    <Image src="/images/about/ab01.jpg" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="shadow rounded-md" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 md:col-span-6">
                        <div className="lg:ms-5">
                            <Counter/>

                            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Who we are ?</h3>

                            <p className="text-slate-400 max-w-xl">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with real content.</p>

                            <div className="mt-6">
                                <Link href="/contact-one" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2"><FaRegEnvelope className="me-2 text-sm"/> Contact us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="md:col-span-6 order-1 md:order-2">
                        <div className="lg:ms-8">
                            <Image src="/images/shape-image.png" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} alt="" />
                        </div>
                    </div>

                    <div className="md:col-span-6 order-2 md:order-1">
                        <div className="lg:me-5">
                            <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Fast & Effective</h6>
                            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Powerful Digitalization <br /> With Techwind</h3>

                            <p className="text-slate-400 max-w-xl mb-6">Get instant helpful resources about anything on the go, easily implement secure money transfer solutions, boost your daily efficiency, connect to other app users and create your own Techwind network, and much more with just a few taps. commodo consequat. Duis aute irure.</p>

                            <Link href="/page-services" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"><MdOutlineEventNote className="me-2 text-lg"/> Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

       <Cta/>

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