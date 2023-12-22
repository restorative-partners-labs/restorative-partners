import React from 'react'
import Link from "next/link"
import Image from "next/image"

import Navbar from '../componets/Navbar/navbar'
import Footer from '../componets/Footer/footer'
import Switcher from '../componets/switcher'
import CookieModal from '../componets/cookieModal'

import {MdKeyboardArrowRight,FaArrowRight,LuSearch} from "../assets/icons/icons"
import { mobileNumber,aboutTwo } from '../Data/dataThree'
export default function PhoneNumber(){
   
    return(
        <>
        <Navbar/>

        <section className="relative table w-full py-36 lg:py-44 bg-gray-50 dark:bg-slate-800">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                    <div className="md:col-span-7 md:order-2 order-1">
                        <div className="ms-6">
                            <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black dark:text-white">Stand Out With a Custom <span className="text-indigo-600">Phone Number</span></h4>
                            <p className="text-slate-400 text-lg max-w-xl">Techwind is the largest provider of custom phone numbers since 2020</p>

                            <div className="subcribe-form mt-6">
                                <form className="relative max-w-xl">
                                    <input type="text" id="SearchForumKeyword" name="text" className="pt-4 ltr:pr-14 rtl:pl-14 pb-4 ltr:pl-6 rtl:pr-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800" placeholder="Search Number :" />
                                    <button type="submit" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center absolute top-[2px] ltr:right-[3px] rtl:left-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full"><LuSearch className='me-1'/> Find Number</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-5 md:order-1 order-2">
                        <Image src="/images/illustrator/development.svg" width={0} height={0} sizes='100vw' style={{width:"100%" , height:"auto"}} alt="" />
                    </div>
                </div>
            </div>

            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-flex space-x-1">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600"><Link href="/">Techwind</Link></li>
                    <li className="inline-block text-base mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                    <li className="inline  uppercase text-[13px] font-bold duration-500 ease-in-out text-indigo-600" aria-current="page">Phone Number</li>
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
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Why People Choose Techwind for Custom Numbers</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-6 gap-[30px]">
                    {aboutTwo.map((item,index)=>{
                        let Icons = item.icon
                        return(
                            <div key={index} className="p-6 hover:shadow-xl hover:shadow-gray-100 dark:hover:shadow-gray-800 transition duration-500 rounded-2xl mt-6">
                                <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800">
                                    <Icons className='w-7 h-7'/>
                                </div>

                                <div className="content mt-7">
                                    <Link href="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">{item.title}</Link>
                                    <p className="text-slate-400 mt-3">{item.desc}</p>

                                    <div className="mt-5">
                                        <Link href="/page-services" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More<FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Select Phone Numbers</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect</p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    {
                        mobileNumber.map((data,index) => {
                            return (
                                <div key={index} className="group p-4 text-center rounded-lg shadow hover:shadow-lg dark:shadow-gray-800 transition duration-500">
                                    <Link href="#" className="hover:text-indigo-600 text-xl font-semibold">{data.number}</Link>

                                    <div className="mt-3 flex items-center justify-center">
                                        <span className="text-indigo-600 text-lg">{data.money}</span>
                                        <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full ms-3">Buy Now</Link>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                    <div className="md:col-span-12 text-center">
                        <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-slate-400 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">See More Numbers<FaArrowRight className="ms-2 text-[10px]"/></Link>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="md:flex justify-center">
                    <div className="lg:w-2/3 text-center">
                        <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold mb-6">Get the Latest Updates and Offers</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Add some text to explain benefits of subscripton on your services. We will send you the best of our blog just once a weekly.</p>

                        <div className="mt-8">
                            <div className="text-center subcribe-form">
                                <form className="relative mx-auto max-w-xl">
                                    <input type="email" id="subemail" name="name" className="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white/70 dark:bg-slate-900/70 border border-gray-100 dark:border-gray-700" placeholder="Enter your email id.." />
                                    <button type="submit" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle transition duration-500 ease-in-out text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-full">Subcribe Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer/>
        <CookieModal/>
        <Switcher/>
        </>
    )
}