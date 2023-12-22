import React from "react"
import Link from "next/link"
import Image from "next/image"

import Navbar from "../componets/Navbar/navbar"
import SmallFooter from "../componets/Footer/smallFooter"
import Switcher from "../componets/switcher"
import CookieModal from "../componets/cookieModal"
import CompanyLogo from "../componets/companyLogo"
import TeamData from "../componets/team"
import ClientsOne from "../componets/clientsOne"
import BlogTwo from "../componets/blogTwo"
import VideoModalThree from "../componets/videoModal/videoModalThree"
import Cta from "../componets/cta"

import { FaArrowRight, FaRegEnvelope} from "../assets/icons/icons"
import { startAbout, startServices } from "../Data/dataThree"

export default function Startup(){
    return(
        <>
        <Navbar navClass="nav-sticky"/>

        <section className="relative md:h-screen flex items-center py-36 before:content-[''] before:absolute before:bottom-40 xl:before:start-[45rem] xl:before:w-[90rem] xl:before:h-[35rem] ltr:before:rotate-[115deg] rtl:before:rotate-[65deg] before:bg-indigo-600 md:before:start-40 before:w-[75rem] before:h-[30rem] after:content-[''] after:absolute xl:after:bottom-96 xl:after:start-[30rem] xl:after:w-[75rem] xl:after:h-40 ltr:after:rotate-[115deg] rtl:after:rotate-[65deg] after:bg-indigo-600/10 after:-z-1 md:after:start-0 before:-start-0 after:-start-40 after:bottom-80 after:w-[75rem] after:h-60 overflow-hidden">
            <div className="absolute inset-0" id="overlay" 
            style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundImage: `url('/images/startup/02.png')` }}
            ></div>
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                    <div className="md:col-span-7">
                        <div className="md:me-6">
                            <Image src="/images/logo-icon-40.png" width={46} height={40} className="mb-4" alt="" />
                            <h4 className="font-semibold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black dark:text-white">Build, Grow, And <br /> Manage Your Brand</h4>
                            <p className="text-slate-400 text-lg max-w-xl">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>

                            <div className="mt-6">
                                <Link href="#" className="py-2 px-5 me-2 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Learn More</Link>
                                <VideoModalThree/>
                                <span className="font-semibold ms-1 align-middle">Watch Now</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative py-16 bg-gray-50 dark:bg-slate-800">
            <div className="container relative">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                    {startAbout.map((item,index)=>{
                        let Icons = item.icon
                        return(
                            <div key={index} className="flex">
                                <div className="flex align-middle justify-center items-center min-w-[56px] h-[56px] bg-indigo-600/5 border-2 border-indigo-600/20 text-indigo-600 rounded-lg text-xl shadow-sm dark:shadow-gray-800">
                                    <Icons className="w-6 h-6"/>
                                </div>
    
                                <div className="content ms-6">
                                    <Link href="#" className="text-lg font-medium hover:text-indigo-600">{item.title}</Link>
                                    <p className="text-slate-400 mt-3">{item.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="lg:col-span-5 md:col-span-6">
                        <div className="grid grid-cols-12 gap-6 items-center">
                            <div className="col-span-6">
                                <div className="grid grid-cols-1 gap-6">
                                    <Image src="/images/about/ab03.jpg" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="shadow rounded-md" alt="" />
                                    <Image src="/images/about/ab02.jpg"  width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="shadow rounded-md" alt="" />
                                </div>
                            </div>

                            <div className="col-span-6">
                                <div className="grid grid-cols-1 gap-6">
                                    <Image src="/images/about/ab01.jpg"  width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="shadow rounded-md" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 md:col-span-6">
                        <div className="lg:ms-5">
                            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">We are a Big Team</h3>

                            <p className="text-slate-400 max-w-xl">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with real content.</p>

                            <div className="mt-6">
                                <Link href="/contact-one" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2"><FaRegEnvelope className="me-2 text-sm"/>Contact us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Cta/>

        <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Services</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    {startServices.map((item,index)=>{
                        let Icons = item.icon
                        return(
                            <div key={index} className="group p-6 rounded-lg shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 hover:-translate-y-2 transition-all duration-500 ease-in-out">
                                <div
                                    className="w-16 h-16 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white border-2 border-indigo-600/20 text-indigo-600 rounded-lg text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                                    <Icons className="w-6 h-6"/>
                                </div>
    
                                <div className="content mt-7">
                                    <Link href="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">{item.title}</Link>
                                    <p className="text-slate-400 mt-3">{item.desc}</p>
    
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

        <section className="relative md:py-24 py-16">
            <ClientsOne/>
        </section>

        <section className="container">
            <CompanyLogo/>
        </section>
            
        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h6 className="text-indigo-600 text-base mb-2">Our Minds</h6>
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Management Team</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>
                <TeamData/>
            </div>
        </section>

        <BlogTwo className="container md:pb-24 pb-16"/>

        <SmallFooter/>
        <Switcher/>
        <CookieModal/>
        </>
    )
}