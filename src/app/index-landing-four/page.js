import React from 'react'
import Link from "next/link"
import Image from "next/image"

import Navbar from '../componets/Navbar/navbar'
import Footer from '../componets/Footer/footer'
import Switcher from '../componets/switcher'
import CookieModal from '../componets/cookieModal'
import KeyFeature from '../componets/keyFeatures'
import PricingOne from '../componets/pricingOne'
import CompanyLogo from '../componets/companyLogo'
import Blog from '../componets/blog'
import VideoModal from '../componets/videoModal/videoModal'
import VideoModalThree from '../componets/videoModal/videoModalThree'

import * as Icon from 'react-feather';
import { FaArrowRight,MdKeyboardArrowRight } from '../assets/icons/icons'
import { featureOne } from '../Data/dataThree'

export default function LandingFour(){
    
    return(
        <>
        <Navbar/>

        <section className="relative table w-full py-36 lg:py-44 bg-gray-50 dark:bg-slate-800 bg-bottom bg-cover" id="home" style={{backgroundImage:"url('/images/bg4.png')"}}>
            <div className="container relative">
                <div className="grid lg:grid-cols-12 md:grid-cols-2 mt-10 items-center gap-[30px]">
                    <div className="lg:col-span-7">
                        <span className="bg-indigo-600/5 text-indigo-600 text-xs font-bold px-2.5 py-0.5 rounded h-5">Form Landing Page</span>

                        <h4 className="font-semibold lg:leading-normal leading-normal text-4xl lg:text-5xl mt-2 mb-5">Experience, <br /> Expertise, Consulting</h4>

                        <p className="text-slate-400 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                        <div className="relative mt-10">
                            <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full me-1">Get Started</Link>
                            <VideoModalThree/>
                            <small className="text-sm uppercase align-middle font-bold ms-2">Watch Now</small>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="bg-white dark:bg-slate-900 rounded-xl shadow dark:shadow-gray-800 md:p-8 p-6 lg:ms-10 z-10 relative">
                            <h4 className="mb-5 text-2xl font-semibold">We are offering 14 <br /> days free trial</h4>

                            <form>
                                <div className="grid grid-cols-1">
                                    <div className="mb-5">
                                        <label className="form-label font-medium">Your Name : <span className="text-red-600">*</span></label>
                                        <div className="form-icon relative mt-2">
                                            <Icon.User className="w-4 h-4 absolute top-3 start-4"></Icon.User>
                                            <input type="text" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Name" name="name" required />
                                        </div>
                                    </div>

                                    <div className="mb-5">
                                        <label className="form-label font-medium">Your Email : <span className="text-red-600">*</span></label>
                                        <div className="form-icon relative mt-2">
                                            <Icon.Mail className="w-4 h-4 absolute top-3 start-4"></Icon.Mail>
                                            <input type="email" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Email" name="email" required />
                                        </div>
                                    </div>

                                    <div className="mb-5">
                                        <label className="form-label font-medium">Phone No. : <span className="text-red-600">*</span></label>
                                        <div className="form-icon relative mt-2">
                                            <Icon.Phone className="w-4 h-4 absolute top-3 start-4"></Icon.Phone>
                                            <input name="number" id="phNumber" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="+12 12458 854" required />
                                        </div>
                                    </div>

                                    <div>
                                        <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full">Free Trial</Link>
                                    </div>
                                </div>
                            </form>

                        </div>
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
                    <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Features</h6>
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Business strategies and top <br /> permormance ideas</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid md:grid-cols-3 grid-cols-1 mt-8 gap-[30px]">
                    {featureOne.map((item,index)=>{
                        const Icon = item.Icon
                        return(
                            <div className="group text-center" key={index}>
                            <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-lg ltr:rotate-[15deg] rtl:-rotate-[15deg] flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                                <Icon className="w-7 h-7 ltr:-rotate-[15deg] rtl:rotate-[15deg]"></Icon>
                            </div>
                            <div className="mt-8">
                                <Link href="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">{item.title}</Link>
                                <p className="text-slate-400 mt-4">{item.desc}</p>
                                <div className="mt-4">
                                    <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>

            <div className="container relative md:py-24 py-16">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="md:col-span-5">
                        <div className="relative">
                            <Image src="/images/company/about2.png" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="mx-auto" alt="" />
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
            <KeyFeature/>
        </section>

        <section className="relative md:py-24 py-16 md:pt-0 pt-0">
            <div className="container relative">
                <div className="grid grid-cols-1 justify-center">
                    <div className="relative z-1">
                        <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                            <div className="lg:col-start-2 lg:col-span-10">
                                <div className="relative">
                                    <Image src="/images/cta-bg.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="rounded-md shadow-lg" alt="" />
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
        <section className="relative md:py-24 py-16 md:pt-0 pt-0">
            <PricingOne/>
        </section>
        <section className="container relative md:py-24 py-16 md:pt-0 pt-0">
            <Blog/>
        </section>

        <Footer/>
        <Switcher/>
        <CookieModal/>
        </>
    )
}