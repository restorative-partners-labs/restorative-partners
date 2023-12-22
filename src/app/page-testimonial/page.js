import React from 'react'
import Link from "next/link"

import Navbar from '../componets/Navbar/navbar'
import Footer from '../componets/Footer/footer'
import Switcher from '../componets/switcher'
import Clients from '../componets/client'

import {FiPhone,MdKeyboardArrowRight} from "../assets/icons/icons"

export default function Testimonial(){
    
    return(
        <>
       <Navbar navClass="nav-light" />

        <section className="relative table w-full py-36 lg:py-44 bg-no-repeat bg-center bg-cover" style={{backgroundImage:"url('/images/services.jpg')"}}>
            <div className="absolute inset-0 bg-black opacity-75"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-10">
                    <h5 className="text-white/50 text-lg font-medium">Testimonial</h5>
                    <h3 className="mt-2 md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Clients Review</h3>
                </div>
            </div>
            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px]  mb-0 inline-flex mx-auto space-x-1">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Techwind</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="#">Company</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Testimonial</li>
                </ul>
            </div>
        </section>

        <div className="relative">
            <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
                <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <Clients/>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 text-center">
                        <h6 className="text-indigo-600 text-sm font-bold mb-2">Available for freelance projects</h6>
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Do you have digital project? <br /> Lets talk.</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>

                        <div className="mt-6">
                            <Link href="/contact-one" className="py-2 px-5 inline-flex font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-4"><FiPhone className="me-1 text-lg"/>  Contact us</Link>
                        </div>
                    </div>
                </div>
            </section>

        <Footer/>
        <Switcher/>
        </>
    )
}