import React from "react"
import Link from "next/link"
import Image from "next/image"

import Navbar from "../componets/Navbar/navbar"
import Footer from "../componets/Footer/footer"
import Switcher from "../componets/switcher"
import CookieModal from "../componets/cookieModal"
import ClientsTwo from "../componets/clientsTwo"
import Blog from "../componets/blog"

import { FaArrowRight,AiOutlineCheckCircle } from "../assets/icons/icons"

import VideoModalFour from "../componets/videoModal/videoModalFour"
import Cta from "../componets/cta"

import { corporateAboutTwo,corporateService } from "../Data/dataThree"

export default function CorporateTwo(){

    return(
        <>
        <Navbar navClass="nav-light"/>

        <section className="relative table w-full py-36 lg:py-64 bg-no-repeat bg-center bg-cover" style={{backgroundImage:"url('/images/corporate/bg.jpg')"}}>
            <div className="absolute inset-0 bg-gradient-to-b to-transparent via-gray-900/50 from-gray-900"></div>
            <div className="absolute inset-0 bg-repeat bg-center bg-cover" style={{backgroundImage:"url('/images/overlay.png')"}}></div>
            <div className="container relative">
                <div className="grid grid-cols-1 text-center mt-10">
                    <span className="text-white/60 font-bold text-sm mb-3">HAVE YOU NOTICED</span>
                    <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-white">Small Details Create <br /> The Big Picture</h4>
                    <p className="text-white/60 text-lg max-w-xl mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                    <div className="mt-8">
                        <Link href="#" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-gray-50 hover:bg-indigo-600 border-gray-50 hover:border-indigo-600 text-slate-900 hover:text-white rounded-md">Learn More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                    </div>
                </div>
            </div>
        </section>
        <div className="relative">
            <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-indigo-600">
                <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <section className="relative bg-indigo-600 py-10">
            <div className="container relative">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                    {
                        corporateAboutTwo.map((item,index)=>{
                            let Icons = item.icon
                            return(
                                <div key={index} className="group px-6 py-8 hover:bg-indigo-700 duration-500 ease-in-out">
                                    <Icons className="h-10 w-10 stroke-1 text-white"/>
                                    <div className="content mt-6">
                                        <Link href="#" className="text-lg font-semibold text-white/80 hover:text-white">{item.title}</Link>
                                        <p className="text-white/50 mt-4">{item.desc}</p>
            
                                        <div className="mt-5">
                                            <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-white hover:text-white after:bg-white duration-500 ease-in-out">Learn More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="lg:col-span-4 md:col-span-6 lg:order-1 order-2 lg:text-center">
                        <VideoModalFour/>

                        <h6 className="text-indigo-600 text-sm font-bold uppercase mt-8 mb-2">About Us</h6>
                        <h3 className="mb-4 md:text-4xl md:leading-normal text-3xl leading-normal font-bold">Who we are ?</h3>
                        <p className="text-slate-400 max-w-xl">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="lg:col-span-4 md:col-span-6 lg:order-2 order-1">
                        <Image src="/images/corporate/experience-wall.jpg" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="shadow-md dark:shadow-gray-800" alt="" />
                    </div>

                    <div className="lg:col-span-4 md:col-span-12 lg:order-3 order-2">
                        <p className="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                        <ul className="list-none text-slate-400 mt-4">
                            <li className="mb-1 flex items-center"><AiOutlineCheckCircle className="text-indigo-600 text-xl me-2"/> Digital Marketing Solutions for Tomorrow</li>
                            <li className="mb-1 flex items-center"><AiOutlineCheckCircle className="text-indigo-600 text-xl me-2"/> Our Talented &amp; Experienced Marketing Agency</li>
                            <li className="mb-1 flex items-center"><AiOutlineCheckCircle className="text-indigo-600 text-xl me-2"/> Create your own skin to match your brand</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16 pt-16">
                <div className="absolute inset-0 opacity-25 dark:opacity-50 bg-no-repeat bg-center bg-cover" style={{backgroundImage:"url('/images/map.png')"}}></div>
                <div className="relative grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">The Industries We Serve</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="relative grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    {corporateService.map((item,index)=>{
                        let Icons = item.icon
                        return(
                            <div key={index} className="group px-6 py-8 bg-white dark:bg-slate-900 shadow hover:shadow-lg dark:hover:shadow-gray-800 duration-500 ease-in-out border-t-[3px] border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600">
                                <Icons className="w-7 h-7 text-indigo-600"/>
                                <div className="content mt-6">
                                    <Link href="#" className="text-xl font-semibold hover:text-indigo-600 duration-500 ease-in-out">{item.title}</Link>
                                    <p className="text-slate-400 mt-4">{item.desc}</p>

                                    <div className="mt-5">
                                        <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>

        <Cta/>

        <section className="relative md:pt-24 pt-16">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 pb-8 items-end">
                    <div className="lg:col-span-8 md:col-span-6 md:text-start text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Explore Latest Works</h3>
                        <p className="text-slate-400 max-w-xl">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="lg:col-span-4 md:col-span-6 md:text-end hidden md:block">
                        <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">See More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                    </div>
                </div>

                <div className="sm:flex mt-4">
                    <div className="sm:w-1/2 picture-item p-4 rounded-md">
                        <div className="">
                            <div className="relative">
                                <div className="shadow dark:shadow-gray-800 p-5 pb-0 rounded-md bg-indigo-600/5 dark:bg-indigo-600/30">
                                    <Image src="/images/portfolio/01.jpg" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto" }} className="rounded-t-md shadow" alt="" />
                                </div>
                            </div>

                            <div className="pt-4 px-3">
                                <h5 className="mb-1 font-semibold text-xl"><Link href="#" className="hover:text-indigo-600 transition-all duration-500 ease-in-out">Techwind Personal Portfolio</Link></h5>
                                <span className="text-slate-400">Creative</span>
                            </div>
                        </div>
                    </div>

                    <div className="sm:w-1/2 picture-item p-4 rounded-md">
                        <div className="">
                            <div className="relative">
                                <div className="shadow dark:shadow-gray-800 p-5 pb-0 rounded-md bg-emerald-600/5 dark:bg-emerald-600/30">
                                    <Image src="/images/portfolio/02.jpg" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto" }} className="rounded-t-md shadow" alt="" />
                                </div>
                            </div>

                            <div className="pt-4 px-3">
                                <h5 className="mb-1 font-semibold text-xl"><Link href="#" className="hover:text-emerald-600 transition-all duration-500 ease-in-out">Techwind Minimal Portfolio</Link></h5>
                                <span className="text-slate-400">Minimal</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        <section className="md:mb-24 mb-16">
            <ClientsTwo />
            <Blog className="container relative md:mt-24 mt-16" id={""} />
        </section>

        <Footer/>
        <Switcher/>
        <CookieModal/>
        </>
    )
}