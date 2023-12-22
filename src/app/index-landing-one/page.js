import React from 'react'
import Link from "next/link"
import Image from "next/image"

import Navbar from '../componets/Navbar/navbar'
import Footer from '../componets/Footer/footer'
import Switcher from '../componets/switcher'
import CookieModal from '../componets/cookieModal'
import ClientsOne from '../componets/clientsOne'
import MobileApp from '../componets/mobileApp'
import CompanyLogo from '../componets/companyLogo'

import {BsCheckCircle,LiaTimesCircleSolid,MdKeyboardArrowRight,FaArrowRight,} from "../assets/icons/icons"

import { servicesOne ,pricingTwo} from '../Data/dataThree'

export default function LandingOne(){
   
    return(
        <>
        <Navbar/>

        <section className="relative items-center overflow-hidden bg-indigo-600/5 dark:bg-indigo-600/10">
            <div className="container relative z-2">
                <div className="grid grid-cols-1 md:mt-44 mt-32 text-center">
                    <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">Solve Problem With on Integrated <br /> Marketing Agency</h4>
                    <p className="text-slate-400 text-lg max-w-xl mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                    <div className="mt-6">
                        <div className="subcribe-form mt-6 mb-3">
                            <form className="relative mx-auto max-w-xl">
                                <input type="email" id="subcribe" name="email" className="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800" placeholder="Your Email Address :" />
                                <button type="submit" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide align-middle transition duration-500 ease-in-out text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-full">Get Started <FaArrowRight className="ms-2 text-[10px]"/></button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="md:flex justify-center mt-10">
                    <div className="lg:w-1/2 md:w-2/3">
                        <Image src="/images/illustrator/celebration.svg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="mx-auto" alt="" />
                    </div>
                </div>
            </div>
        </section>
        <div className="relative">
            <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 marketing-hero md:h-[250px] sm:h-[140px] h-[60px] bg-white dark:bg-slate-900 overflow-hidden z-1 text-white dark:text-slate-900"></div>
        </div>

        <section className="py-6">
            <div className="container relative">
               <CompanyLogo/>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Services</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-8 gap-x-[30px] gap-y-[50px]">

                    {
                        servicesOne.map((data,index) => {
                            let Icons = data.icon
                            return (
                                <div className="text-center md:px-3" key={index}>
                                    <div className="w-24 h-24 bg-indigo-600/5 text-indigo-600 rounded-3xl text-4xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                                        <Icons className='w-8 h-8'/>
                                    </div>

                                    <div className="content mt-7">
                                        <Link href="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">{data.feature}</Link>
                                        <p className="text-slate-400 mt-3">The phrasal sequence of the Lorem Ipsum text is now so that many</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 pb-8 items-center">
                    <div className="md:col-span-6 md:text-start text-center">
                        <h3 className="md:mb-0 mb-6 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Why Everyone Loves <br /> Techwind</h3>
                    </div>

                    <div className="md:col-span-6">
                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-8 gap-[30px]">
                    <div className="relative">
                        <Image src="/images/saas/classic02.png" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="rounded-lg shadow-md dark:shadow-gray-800" alt="" />
                    </div>

                    <div className="lg:ms-8">
                        <h4 className="mb-4 text-2xl leading-normal font-medium">Great Product Analytics <br /> With Real Problem</h4>
                        <p className="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                        <ul className="list-none text-slate-400 mt-4">
                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/>Digital Marketing Solutions for Tomorrow</li>
                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/>Our Talented & Experienced Marketing Agency</li>
                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/>Create your own skin to match your brand</li>
                        </ul>

                        <div className="mt-4">
                            <Link href="/page-aboutus" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Find Out More <MdKeyboardArrowRight className="text-xl ms-1"/></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    <div className="relative order-1 md:order-2">
                        <Image src="/images/saas/classic02.png" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="rounded-lg shadow-md dark:shadow-gray-800" alt="" />
                    </div>

                    <div className="lg:me-8 order-2 md:order-1">
                        <h4 className="mb-4 text-2xl leading-normal font-medium">Get Notified About Importent Email</h4>
                        <p className="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                        <ul className="list-none text-slate-400 mt-4">
                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/>Digital Marketing Solutions for Tomorrow</li>
                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/>Our Talented & Experienced Marketing Agency</li>
                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/>Create your own skin to match your brand</li>
                        </ul>

                        <div className="mt-4">
                            <Link href="/page-aboutus" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Find Out More <MdKeyboardArrowRight className="text-xl ms-1"/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Pricing Plans</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    {pricingTwo.map((item,index)=>{
                        return(
                            <div className="group rounded-md shadow bg-white dark:bg-slate-900" key={index}>
                                <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                                    <h6 className="font-bold mb-3 text-lg uppercase">{item.title}</h6>
                                    <p className="text-slate-400 mb-0">{item.desc}</p>

                                    <div className="flex my-5">
                                        <span className="text-xl font-semibold">$</span>
                                        <span className="price text-4xl font-semibold mb-0">{item.time}</span>
                                        <span className="text-xl font-semibold self-end mb-1">/mo</span>
                                    </div>

                                    <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full">Buy Now</Link>
                                </div>

                                <div className="p-6">
                                    <h6 className="mb-3 font-semibold">Features:</h6>
                                    <ul className="list-none text-slate-400">
                                        <li className="mb-1 flex items-center"><span className="text-emerald-600 h5"><BsCheckCircle className="text-base me-2"/></span> 1 Domains</li>
                                        <li className="mb-1 flex items-center"><span className="text-emerald-600 h5"><BsCheckCircle className="text-base me-2"/></span> 1 GB File upload </li>
                                        <li className="mb-1 flex items-center"><span className="text-emerald-600 h5"><BsCheckCircle className="text-base me-2"/></span> 2 GB Secure storage </li>
                                        <li className="mb-1 flex items-center"><span className="text-red-600 h5"><LiaTimesCircleSolid className="text-lg me-2"/></span> Unlimited bandwidth </li>
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="md:flex justify-center mt-4">
                    <div className="text-center">
                        <p className="text-slate-400">Note: <span className="text-red-600 fs-5">*</span>No credit card required</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <ClientsOne/>
            <MobileApp/>
        </section>

        <Footer/>
        <Switcher/>
        <CookieModal/>
        </>
    )
}