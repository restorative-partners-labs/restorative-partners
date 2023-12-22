import React from "react"
import Link from "next/link"
import Image from "next/image"

import Navbar from "../componets/Navbar/navbar"
import Footer from "../componets/Footer/footer"
import Switcher from "../componets/switcher"
import CookieModal from "../componets/cookieModal"
import CompanyLogo from "../componets/companyLogo"
import KeyFeature from "../componets/keyFeatures"
import ClientsOne from "../componets/clientsOne"
import PricingOne from "../componets/pricingOne"
import Blog from "../componets/blog"

import {BsCheckCircle} from "react-icons/bs"
import {MdKeyboardArrowRight} from "react-icons/md"

import VideoModal from "../componets/videoModal/videoModal"

export default function IndexSaas(){
    return(
        <>
            <Navbar/>
            <section className="relative before:content-[''] before:absolute xl:before:-top-[30%] lg:before:-top-[50%] sm:before:-top-[80%] before:-top-[90%] before:-start-80 before:end-0 before:w-[140rem] before:h-[65rem] ltr:before:-rotate-12 rtl:before:rotate-12 before:bg-indigo-600/5 dark:before:bg-indigo-600/10 before:z-1 items-center overflow-hidden">
                <div className="container relative z-2">
                    <div className="grid grid-cols-1 md:mt-44 mt-32 text-center">
                        <div className="wow animate__animated animate__fadeIn">
                            <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">Build fast, Released quickly.</h4>
                            <p className="text-slate-400 text-lg max-w-xl mx-auto">Launch your campaign and benefit from our expertise
                                on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                            <div className="mt-6">
                                <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Try For Free</Link>

                                <p className="text-slate-400 text-sm mt-3">No credit card required. Free 14-days trial</p>
                            </div>
                        </div>
                        <div className="home-dashboard mt-8 z-3 wow animate__animated animate__fadeIn">
                            <Image src="/images/saas/classic01.png" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} alt="" className="mover" />
                        </div>
                    </div>

                    <div className="bg-indigo-600 w-8 h-16 z-2 absolute start-2 lg:bottom-28 md:bottom-36 sm:bottom-40 bottom-16"></div>
                    <div className="bg-indigo-600/20 w-8 h-16 z-2 absolute start-12 lg:bottom-32 md:bottom-40 sm:bottom-44 bottom-20"></div>

                    <div className="bg-indigo-600/20 w-8 h-16 z-2 absolute end-12 xl:bottom-[420px] lg:bottom-[315px] md:bottom-[285px] sm:bottom-80 bottom-32"></div>
                    <div className="bg-indigo-600 w-8 h-16 z-2 absolute end-2 xl:bottom-[440px] lg:bottom-[335px] md:bottom-[305px] sm:bottom-[340px] bottom-36"></div>
                </div>
            </section>

            <section className="py-6">
                <div className="container relative">
                    <CompanyLogo/>
                </div>
            </section>

            <section className="relative md:py-24 py-16 overflow-hidden">
                <KeyFeature/>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Why Everyone Loves Techwind</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-16 gap-[30px]">
                        <div className="relative wow animate__animated animate__fadeInLeft" data-wow-delay=".3s">
                            <Image src="/images/saas/classic02.png" width={0} height={0} sizes="100vw" style={{width:"100%",height:"auto"}} className="rounded-lg shadow-md dark:shadow-gray-800" alt="" />
                            <div className="overflow-hidden absolute lg:h-[400px] h-[320px] lg:w-[400px] w-[320px] bg-indigo-600/5 bottom-0 start-0 rotate-45 -z-1 rounded-3xl"></div>
                        </div>

                        <div className="lg:ms-8 wow animate__animated animate__fadeInRight" data-wow-delay=".3s">
                            <h4 className="mb-4 text-2xl leading-normal font-medium">Great Product Analytics <br /> With Real Problem</h4>
                            <p className="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                            <ul className="list-none text-slate-400 mt-4">
                                <li className="mb-1 flex"><BsCheckCircle className="text-indigo-600 text-base me-2"/><i ></i> Digital Marketing Solutions for Tomorrow</li>
                                <li className="mb-1 flex"><BsCheckCircle className="text-indigo-600 text-base me-2"/><i ></i> Our Talented & Experienced Marketing Agency</li>
                                <li className="mb-1 flex"><BsCheckCircle className="text-indigo-600 text-base me-2"/><i ></i> Create your own skin to match your brand</li>
                            </ul>

                            <div className="mt-4">
                                <Link href="/page-aboutus" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Find Out More <MdKeyboardArrowRight className="text-xl ms-1"/></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                        <div className="relative order-1 md:order-2 wow animate__animated animate__fadeInRight" data-wow-delay=".5s">
                            <Image src="/images/saas/classic03.png" width={0} height={0} sizes="100vw" style={{width:"100%",height:"auto"}} className="rounded-lg shadow-md dark:shadow-gray-800" alt="" />
                            <div className="overflow-hidden absolute lg:h-[400px] h-[320px] lg:w-[400px] w-[320px] bg-indigo-600/5 bottom-0 end-0 rotate-45 -z-1 rounded-3xl"></div>
                        </div>

                        <div className="lg:me-8 order-2 md:order-1 wow animate__animated animate__fadeInLeft" data-wow-delay=".5s">
                            <h4 className="mb-4 text-2xl leading-normal font-medium">Get Notified About Importent Email</h4>
                            <p className="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                            <ul className="list-none text-slate-400 mt-4">
                                <li className="mb-1 flex"><BsCheckCircle className="text-indigo-600 text-base me-2"/><i ></i> Digital Marketing Solutions for Tomorrow</li>
                                <li className="mb-1 flex"><BsCheckCircle className="text-indigo-600 text-base me-2"/><i ></i> Our Talented & Experienced Marketing Agency</li>
                                <li className="mb-1 flex"><BsCheckCircle className="text-indigo-600 text-base me-2"/><i ></i> Create your own skin to match your brand</li>
                            </ul>

                            <div className="mt-4">
                                <Link href="/page-aboutus" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Find Out More <MdKeyboardArrowRight className="text-xl ms-1"/></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" md:mt-24 mt-16" >
                    <ClientsOne/>
               </div>
            </section>

            <section className="relative md:py-24 py-16 md:pt-0 pt-0">
                <div className="container relative">
                    <div className="grid grid-cols-1 justify-center wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                        <div className="relative z-1">
                            <div className="grid grid-cols-1 md:text-start text-center justify-center">
                                <div className="relative">
                                    <Image src="/images/saas/home.png" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} alt="" />
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

            <section className="relative md:pb-24 pb-16">
               <PricingOne/>
               <Blog className="container relative md:mt-24 mt-16"/>
            </section>
            <Footer/>
            <Switcher/>
            <CookieModal/>
        </>
    )
}