import React from "react"
import Link from "next/link"
import Image from "next/image"

import Navbar from "../componets/Navbar/navbar"
import Footer from "../componets/Footer/footer"
import Switcher from "../componets/switcher"
import CookieModal from "../componets/cookieModal"
import CompanyLogo from "../componets/companyLogo"
import ClientsTwo from "../componets/clientsTwo"
import Blog from "../componets/blog"
import TeamData from "../componets/team"
import CounterOne from "../componets/consulting/counterOne"
import CounterTwo from "../componets/consulting/counterTwo"

import {FiAirplay,FaArrowRight} from "../assets/icons/icons"

import { consultingService,consultingAbout,consultingProduct } from "../Data/dataThree"

export default function Consulting(){
   
    return(
        <>
        <Navbar navClass="nav-light"/>

        <section className="relative md:py-60 py-36 bg-right bg-no-repeat bg-cover" style={{backgroundImage:"url('/images/consulting/bg.jpg')"}}>
            <div className="absolute inset-0 bg-slate-900/70"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 items-center mt-10">
                    <span className="text-white/80 font-semibold mb-4 text-lg">Turn Your Skills And Expertise Into A Successful Business</span>
                    <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-white">Grow your business <br /> with focus & clarity.</h4>
                    <p className="text-white/60 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                    <div className="mt-8">
                        <Link href="#" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Learn More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-6 border-t border-b border-gray-100 dark:border-gray-700">
            <div className="container relative">
                <CompanyLogo/>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Business Consulting Services</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    {consultingService.map((item,index)=>{
                        return(
                            <div className="group relative" key={index}>
                                <div className="relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                                    <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="" alt="" />
                                    <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 duration-500 ease-in-out"></div>
                                </div>

                                <div className="mt-6">
                                    <Link href="#" className="text-xl font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">{item.title}</Link>

                                    <p className="text-slate-400 mt-4">{item.desc}</p>

                                    <div className="mt-4">
                                        <Link href="#" className="hover:text-indigo-600 duration-500 ease-in-out font-semibold flex items-center"><span className="hidden group-hover:inline-block">Read More</span><FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>

        <section className="relative bg-gray-50 dark:bg-slate-800 md:py-24 py-16">
            <div className="container relative">
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
                            <CounterOne/>

                            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Business and technology <br /> consulting for growth</h3>

                            <p className="text-slate-400 max-w-xl">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with real content.</p>

                            <div className="mt-6">
                                <Link href="/contact-one" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-2"><FiAirplay className="me-1"/> Get Started</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative mt-16">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                    {consultingAbout.map((item,index)=>{
                        let Icons = item.icon
                        return(
                            <div key={index} className="group px-6 py-8 hover:bg-white dark:hover:bg-slate-900 hover:shadow dark:hover:shadow-gray-800 duration-500 ease-in-out border-b-[3px] border-transparent hover:border-indigo-600">
                                <Icons className="h-10 w-10 stroke-1 text-indigo-600"/>
                                <div className="content mt-6">
                                    <Link href="/page-services" className="title h5 text-xl font-semibold hover:text-indigo-600">{item.title}</Link>
                                    <p className="text-slate-400 mt-4">{item.desc}</p>

                                    <div className="mt-5">
                                        <Link href="/page-services" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Learn More<FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </section>

        <section className="relative md:pt-24 pt-16">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 pb-8 items-end">
                    <div className="lg:col-span-8 md:col-span-6 md:text-start text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Digital Product</h3>
                        <p className="text-slate-400 max-w-xl">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="lg:col-span-4 md:col-span-6 md:text-end hidden md:block">
                        <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">See More<FaArrowRight className="ms-2 text-[10px]"/></Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-2">
                    {consultingProduct.map((item,index)=>{
                        return(
                            <div className="picture-item p-4 rounded-md" key={index}>
                                <div className="">
                                    <div className="relative">
                                        <div className="shadow dark:shadow-gray-800 p-5 pb-0 rounded-md bg-indigo-600/5 dark:bg-indigo-600/30">
                                            <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="rounded-t-md shadow" alt="" />
                                        </div>
                                    </div>
        
                                    <div className="pt-4 px-3">
                                        <h5 className="mb-1 font-semibold text-lg"><Link href="#" className="hover:text-indigo-600 transition-all duration-500 ease-in-out">Techwind Personal Portfolio</Link></h5>
                                        <span className="text-slate-400">Creative</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 md:hidden mt-8">
                    <div className="md:col-span-12 text-center">
                        <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">See More<FaArrowRight className="ms-2 text-[10px]"/></Link>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16 lg:pt-24 pt-16">
                <div className="absolute inset-0 opacity-25 dark:opacity-50  bg-no-repeat bg-center bg-cover" style={{backgroundImage:"url('/images/map.png')"}}></div>
                <div className="relative grid grid-cols-1 pb-8 text-center z-1">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-black dark:text-white">Trusted by more than 10K users</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

               <CounterTwo/>
            </div>
        </section>

        <section>
            <ClientsTwo/>
        </section>

        <section className="relative md:pt-24 pt-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h6 className="text-indigo-600 text-base mb-2">Our Minds</h6>
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Management Team</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>
                <TeamData/>
            </div>
        </section>

        <section className="container relative md:py-24 py-16">
            <Blog/>
        </section>
        
        <Footer/>
        <Switcher/>
        <CookieModal/>
        </>
    )
}