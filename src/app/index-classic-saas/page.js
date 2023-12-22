import React from "react"
import Link from "next/link"
import Image from "next/image"

import VideoModal from "../componets/videoModal/videoModal"
import Navbar from "../componets/Navbar/navbar"
import Footer from "../componets/Footer/footer"
import Switcher from "../componets/switcher"
import CookieModal from "../componets/cookieModal"
import CompanyLogo from "../componets/companyLogo"
import ClientsOne from "../componets/clientsOne"
import MobileApp from "../componets/mobileApp"
import VideoModalThree from "../componets/videoModal/videoModalThree"

import * as Icon from 'react-feather';

import {BsCheckCircle,MdKeyboardArrowRight} from "../assets/icons/icons"

import { saasFeatures } from "../Data/dataThree"

export default function ClassicSaas(){

    return(
        <>
            <Navbar navClass="nav-sticky"/>

            <section className="relative table w-full py-36 lg:py-44 overflow-hidden">
                <div className="container relative">
                    <div className="relative grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                        <div className="md:col-span-7">
                            <div className="md:me-6">
                                <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black dark:text-white relative">Fast and clean help <br /> <span className="after:absolute after:end-0 after:start-0 after:bottom-3 after:lg:h-3 after:h-2 after:w-auto after:rounded-md after:bg-indigo-600/30 relative text-indigo-600">Structure</span> your work</h4>
                                <p className="text-slate-400 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                                <div className="relative mt-8">
                                    <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2">Get Started</Link>
                                    <VideoModalThree/>
                                    <small className="text-sm font-semibold uppercase align-middle ms-2">Watch Now</small>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-5">
                            <div className="relative after:content-[''] after:absolute after:md:bottom-12 after:-bottom-20 lg:after:-start-0 md:after:-start-20 after:-start-24
                        after:bg-indigo-600 after:shadow-2xl after:shadow-indigo-600/40 after:-z-1 ltr:after:rotate-[130deg] rtl:after:-rotate-[130deg] after:w-[75rem] after:md:h-[55rem] after:h-[30rem] after:rounded-[20rem]">
                                <Image src="/images/laptop.png" width={0} height={0} sizes="100vw" style={{width:'1175px' , height:"auto"}} placeholder="blur" blurDataURL="/images/laptop.png"  className="lg:max-w-none md:max-w-md" alt="" />
                            </div>
                        </div>

                        <div className="overflow-hidden after:content-[''] after:absolute after:h-32 after:w-32 after:bg-indigo-600/5 after:top-16 after:start-0  after:-z-1 after:rounded-3xl after:animate-[spin_10s_linear_infinite]"></div>
                    </div>
                </div>
            </section>

            <section className="py-6 border-t border-b border-gray-100 dark:border-gray-700">
                <div className="container relative">
                     <CompanyLogo/>
                </div>
            </section>

            <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="features">
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Features</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-4 gap-[30px]">
                        {saasFeatures.map((item,index)=>{
                            let Icons = item.icon
                            return(
                                <div key={index} className="group relative lg:px-6 mt-4 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center">
                                    <div className="relative overflow-hidden text-transparent -m-3">
                                        <Icon.Hexagon className="h-28 w-28 fill-indigo-600/5 mx-auto rotate-[30deg]"></Icon.Hexagon>
                                        <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded-xl transition duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                                            <Icons/>
                                        </div>
                                    </div>
        
                                    <div className="mt-6">
                                        <Link href="#" className="text-xl font-medium hover:text-indigo-600 duration-500 ease-in-out">{item.title}</Link>
                                        <p className="text-slate-400 transition duration-500 ease-in-out mt-3">{item.desc}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-16 gap-[30px]">
                        <div className="relative">
                            <div className="md:me-10">
                                <Image src="/images/saas/about.jpg" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} placeholder="blur" blurDataURL="/images/saas/about.jpg" className="rounded-lg shadow-md dark:shadow-gray-800" alt="" />
                            </div>
                            <div className="absolute -bottom-10 end-0 p-6 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 md:w-80 w-60">
                                <h5 className="text-lg font-semibold mb-3">Helpcenter Software</h5>
                                <p className="text-slate-400">If the distribution of letters and words is random</p>
                                <div className="flex justify-between mt-3 mb-2">
                                    <span className="text-slate-400">Work in progress</span>
                                    <span className="text-slate-400">84%</span>
                                </div>
                                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                    <div className="bg-indigo-600 h-[6px] rounded-full" style={{ "width": "84%" }}></div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:ms-8 mt-8 md:mt-0">
                            <h4 className="mb-4 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Manage all your tasks <br /> on this one plateform</h4>
                            <p className="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>

                            <div className="mt-4">
                                <Link href="/page-aboutus" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Find Out More <MdKeyboardArrowRight className="text-xl ms-1"/></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                        <div className="relative order-1 md:order-2">
                            <Image src="/images/saas/classic03.png" placeholder="blur" blurDataURL="/images/saas/classic03.png" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}}  className="rounded-lg shadow-md dark:shadow-gray-800" alt="" />
                        </div>

                        <div className="lg:me-8 order-2 md:order-1">
                            <h4 className="mb-4 text-2xl leading-normal font-medium">Get Notified About Importent Email</h4>
                            <p className="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                            <ul className="list-none text-slate-400 mt-4">
                                <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2" /> Digital Marketing Solutions for Tomorrow</li>
                                <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2" /> Our Talented & Experienced Marketing Agency</li>
                                <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2" /> Create your own skin to match your brand</li>
                            </ul>

                            <div className="mt-4">
                                <Link href="/page-aboutus" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Find Out More <MdKeyboardArrowRight className="text-xl ms-1"/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16">
                <ClientsOne/>
            </section>

            <section className="relative md:py-24 py-16 md:pt-0 pt-0">
                <div className="container relative">
                    <div className="grid grid-cols-1 justify-center wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                        <div className="relative z-1">
                            <div className="grid grid-cols-1 md:text-start text-center justify-center">
                                <div className="relative">
                                    <Image src="/images/saas/home.png" placeholder="blur" blurDataURL="/images/saas/home.png" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} alt="" />
                                    <VideoModal/>
                                </div>
                            </div>

                            <div className="content md:mt-8">
                                <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                                    <div className="lg:col-start-2 lg:col-span-10">
                                        <div className="grid md:grid-cols-2 grid-cols-1 items-center">
                                            <div className="mt-8">
                                                <div className="section-title text-md-start">
                                                    <h6 className="text-white/50 text-lg font-semibold">Get Free Trial</h6>
                                                    <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-white mt-2">Get An Easy Start <br /> With Techwind Now</h3>
                                                </div>
                                            </div>

                                            <div className="mt-8">
                                                <div className="section-title text-md-start">
                                                    <p className="text-white/50 max-w-xl mx-auto mb-2">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                                    <Link href="#" className="text-white inline-flex items-center">Read More <MdKeyboardArrowRight className="text-xl ms-1"/></Link>
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
            <MobileApp/>
            <Footer/>
            <Switcher/>
            <CookieModal/>
        </>
    )
}