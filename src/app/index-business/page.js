import React from "react"
import Link from "next/link"
import Image from "next/image"

import Navbar from "../componets/Navbar/navbar"
import Footer from "../componets/Footer/footer"
import Switcher from "../componets/switcher"
import CookieModal from "../componets/cookieModal"
import CompanyLogo from "../componets/companyLogo"
import ClientsOne from "../componets/clientsOne"
import Blog from "../componets/blog"
import VideoModal from "../componets/videoModal/videoModal"
import Cta from "../componets/cta"
import HeroSlider from "../componets/heroSlider"

import {BsCheckCircle,FaArrowRight} from "../assets/icons/icons"
import { businessAbout,PricingData } from "../Data/dataThree"

export default function Business(){
   
    return(
        <>
        <Navbar navClass="nav-light"/>

       <HeroSlider/>

        <section className="relative py-8 bg-indigo-600">
            <div className="container relative">
                <CompanyLogo/>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="md:col-span-5">
                        <div className="relative">
                            <Image src="/images/business/about01.jpg" width={400} height={500}  className="rounded-md" alt="" />
                            <div className="absolute bottom-24 end-0">
                                <Image src="/images/business/about01.jpg" width={0} height={0} sizes="100vw" style={{width:"100%",height:"auto"}}  className="rounded-md shadow-md w-48 h-48" alt="" />
                                <VideoModal/>
                            </div>
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

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Who We Are ?</h6>
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Business strategies and top <br /> permormance ideas</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid md:grid-cols-3 grid-cols-1 mt-8 gap-[30px]">
                    {businessAbout.map((item,index)=>{
                        let Icons = item.icon
                        return(
                            <div className="group text-center" key={index}>
                                <Icons className="h-10 w-10 stroke-1 group-hover:stroke-[1.5px] group-hover:text-indigo-600 transition-all duration-500 ease-in-out mx-auto"/>
                                <div className="mt-6">
                                    <Link href="#" className="text-xl font-semibold group-hover:text-indigo-600 transition-all duration-500 ease-in-out">Profitable Marketing</Link>

                                    <p className="text-slate-400 mt-4">We develop digital strategies, products and services appreciated by clients.</p>

                                    <div className="mt-4">
                                        <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <FaArrowRight className="ms-2 text-[10px]"/> </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>

       <Cta/>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Choose Pricing Plan</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
                    {PricingData.map((item,index)=>{
                        return(
                            <div key={index} className="group border-b-[3px] dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 transition-all duration-500 ease-in-out hover:scale-105 relative shadow dark:shadow-gray-800 rounded-md bg-white dark:bg-slate-900">
                                <div className="p-6 py-8">
                                    <h6 className="font-bold uppercase mb-5 text-indigo-600">{item.title}</h6>
        
                                    <div className="flex mb-5">
                                        <span className="text-xl font-semibold">$</span>
                                        <span className="price text-4xl font-semibold mb-0">{item.amount}</span>
                                        <span className="text-xl font-semibold self-end mb-1">/mo</span>
                                    </div>
        
                                    <ul className="list-none text-slate-400">
                                        {item.subData.map((el,index)=>{
                                            return(
                                                <li className="mb-1 flex" key={index}><BsCheckCircle className="text-indigo-600 text-base me-2"/>{el}</li>
                                            )
                                        })}
                                       
                                    </ul>
                                    <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Get Started</Link>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
            <div className=" md:mt-24 mt-16" >
               <ClientsOne/>
            </div>
            <Blog className="container relative md:mt-24 mt-16" />
        </section>

        <Footer/>
        <Switcher/>
        <CookieModal/>
        </>
    )
}