import React from 'react'
import Link from "next/link"
import Image from "next/image"

import Navbar from '../componets/Navbar/navbar'
import Footer from '../componets/Footer/footer'
import Switcher from '../componets/switcher'
import CookieModal from '../componets/cookieModal'
import CompanyLogo from '../componets/companyLogo'
import ClientsOne from '../componets/clientsOne'
import VideoModal from '../componets/videoModal/videoModal'
import Cta from '../componets/digital-agency/cta'
import VideoModalThree from '../componets/videoModal/videoModalThree'

import {MdKeyboardArrowRight} from "react-icons/md"
import {FiPhone} from "react-icons/fi"
import { FaArrowRight } from 'react-icons/fa'

import { digitalServices,digitalProduct } from '../Data/data'

export default function DigitalAgency(){

  
    return(
        <>
        <Navbar/>
        <section className="relative table w-full py-36 lg:py-44">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                    <div className="md:col-span-6">
                        <div className="md:me-6">
                            <Image src="/images/logo-icon-40.png" width={46} height={46} className="mb-5" alt="" />
                            <p className="text-indigo-600 text-lg font-medium mb-4">We are a very dedicated team</p>
                            <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">We are a full-service digital agency</h4>
                            <p className="text-slate-400 text-lg max-w-xl">We collaborate with people, teams, and businesses to develop design systems, strategies, and processes to do a better creative work everyday.</p>

                            <div className="mt-6">
                                <VideoModalThree/>
                                <span className="font-semibold ms-2 align-middle">Watch Now</span>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-6">
                        <div className="grid grid-cols-12 gap-4 items-center">
                            <div className="col-span-5">
                                <div className="grid grid-cols-1 gap-4">
                                    <Image src="/images/digital/02.jpg" width={0} height={0} sizes='100vw' style={{width:"100%",height:"auto"}} className="shadow rounded-lg" alt="" />

                                    <div className="ms-auto">
                                        <div className="w-28 h-28 bg-indigo-600/10 rounded-lg"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-7">
                                <div className="grid grid-cols-1 gap-4">
                                    <Image src="/images/digital/01.jpg" width={0} height={0} sizes='100vw' style={{width:"100%",height:"auto"}} className="shadow rounded-lg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="container relative mb-16 mt-8">
            <div className="grid grid-cols-1 pb-4 text-center">
                <h6 className="text-slate-400 text-lg">We are very fortunate to work with these amazing partners</h6>
            </div>
            <CompanyLogo/>
        </section>

        <Cta/>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Services</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-8 gap-[30px]">
                    {digitalServices.map((item,index)=>{
                        let Icons = item.icon
                        return(
                            <div key={index} className="text-center md:px-6">
                                <div className={`${item.background} w-28 h-28  rounded-3xl text-4xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto`}>
                                    <Icons className='w-8 h-8'/>
                                </div>

                                <div className="content mt-7">
                                    <Link href="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">{item.title}</Link>
                                    <p className="text-slate-400 mt-3">{item.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="md:col-span-6">
                        <div className="grid grid-cols-12 gap-4 items-center">
                            <div className="col-span-7">
                                <div className="grid grid-cols-1 gap-4">
                                    <Image src="/images/digital/03.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="shadow rounded-lg" alt="" />
                                </div>
                            </div>

                            <div className="col-span-5">
                                <div className="grid grid-cols-1 gap-4">
                                    <Image src="/images/digital/04.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="shadow rounded-lg" alt="" />

                                    <div className="w-28 h-28 bg-indigo-600/10 rounded-lg"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-6">
                        <div className="md:ms-6">
                            <p className="text-indigo-600 text-lg font-medium mb-4">Web and mobile development</p>
                            <h4 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Analyze your entire market <br /> pricing & stock availability</h4>
                            <p className="text-slate-400 max-w-xl">We collaborate with people, teams, and businesses to develop design systems, strategies, and processes to do a better creative work everyday.</p>

                            <div className="mt-6">
                                <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16 md:pt-0 pt-0">
            <div className="container relative">
                <div className="grid grid-cols-1 justify-center">
                    <div className="relative z-1">
                        <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                            <div className="lg:col-start-2 lg:col-span-10">
                                <div className="relative">
                                    <Image src="/images/digital/cta.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="rounded-md shadow-lg" alt="" />
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
                                                <h6 className="text-white/50 text-lg font-semibold">Techwind Agency</h6>
                                                <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-white mt-2"> We are a full-service <br /> digital company</h3>
                                            </div>
                                        </div>

                                        <div className="mt-8">
                                            <div className="section-title text-md-start">
                                                <p className="text-white/50 max-w-xl mx-auto mb-2">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                                <Link href="#" className="text-white inline-flex items-center space-x-1">Read More <MdKeyboardArrowRight className="text-xl ms-1"/></Link>
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
        <section className="relative md:py-24 py-16">
            <ClientsOne/>
            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 pb-8 items-end">
                    <div className="lg:col-span-8 md:col-span-6 md:text-start text-center">
                        <h6 className="text-indigo-600 font-semibold mb-2">Portfolio</h6>
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Digital Product</h3>
                        <p className="text-slate-400 max-w-xl">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="lg:col-span-4 md:col-span-6 md:text-end hidden md:block">
                        <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">See More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-4" id="grid">
                    {digitalProduct.map((item,index)=>{
                        return(
                            <div key={index} className="picture-item p-4 rounded-md">
                                <div className="">
                                    <div className="relative">
                                        <div className="shadow dark:shadow-gray-800 p-5 pb-0 rounded-md bg-indigo-600/5 dark:bg-indigo-600/30">
                                            <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="rounded-t-md shadow" alt="" />
                                        </div>
                                    </div>
        
                                    <div className="pt-4 px-3">
                                        <h5 className="mb-1 font-semibold text-lg"><Link href="#" className="hover:text-indigo-600 transition-all duration-500 ease-in-out">{item.name}</Link></h5>
                                        <span className="text-slate-400">{item.title}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 md:hidden mt-8">
                    <div className="md:col-span-12 text-center">
                        <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">See More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 text-center">
                    <h6 className="text-indigo-600 text-sm font-bold mb-2">Available for freelance projects</h6>
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Do you have digital project? <br /> Lets talk.</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>

                    <div className="mt-6">
                        <Link href="/contact-one" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-4"><FiPhone className="me-1 text-lg"/> Contact us</Link>
                    </div>
                </div>
            </div>
        </section>

        <Footer/>
        <Switcher/>
        <CookieModal/>
        
        </>

    )
}