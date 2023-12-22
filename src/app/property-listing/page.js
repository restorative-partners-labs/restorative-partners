import React from "react"
import Link from "next/link"
import Image from "next/image"

import Navbar from "../componets/Navbar/navbar"
import Footer from "../componets/Footer/footer"
import Switcher from "../componets/switcher"
import CookieModal from "../componets/cookieModal"
import Form from "../componets/real-estate/form"

import {MdKeyboardArrowRight,MdOutlineKeyboardArrowLeft,LuBedDouble, LuBath,LiaCompressArrowsAltSolid} from "../assets/icons/icons"

import { propertyData } from "../Data/data"

export default function propertyListing(){
    
    return(
        <>
        <Navbar navClass="nav-light"/>
        <section className="relative table w-full py-32 lg:py-36  bg-no-repeat bg-center bg-cover" style={{backgroundImage:"url('/images/real/bg/01.jpg')"}}>
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 text-center mt-10">
                    <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Grid View Layout</h3>
                </div>
            </div>
        </section>

        <div className="relative">
            <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
                <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <div className="container relative -mt-16 z-1">
            <div className="grid grid-cols-1">
                <div>
                    <Form/>
                </div>
            </div>
        </div>

        <section className="relative lg:py-24 py-16">
            <div className="container relative">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                    { propertyData.map((data,index) => {
                            return (
                                <div key={index} className="group rounded-md bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-800 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
                                    <div className="relative">
                                        <Image src={data.image} width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} alt="" />

                                        <div className="absolute top-6 end-6">
                                            <Link href="#" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-lg text-center bg-white dark:bg-slate-900 border-0 shadow dark:shadow-gray-800 rounded-full text-red-600"><i className="mdi mdi-heart"></i></Link>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <div className="pb-6">
                                            <Link href={`/property-detail/${data.id}`} className="text-lg hover:text-indigo-600 font-medium ease-in-out duration-500">{data.address}</Link>
                                        </div>

                                        <ul className="py-6 border-y border-gray-100 dark:border-gray-800 flex items-center list-none">
                                            <li className="flex items-center me-4">
                                                <LiaCompressArrowsAltSolid className=" text-2xl me-2 text-indigo-600"/>
                                                <span>8000sqf</span>
                                            </li>

                                            <li className="flex items-center me-4">
                                                <LuBedDouble className="text-2xl me-2 text-indigo-600"/>
                                                <span>4 Beds</span>
                                            </li>

                                            <li className="flex items-center">
                                                <LuBath className="text-2xl me-2 text-indigo-600"/>
                                                <span>4 Baths</span>
                                            </li>
                                        </ul>

                                        <ul className="pt-6 flex justify-between items-center list-none">
                                            <li>
                                                <span className="text-slate-400">Price</span>
                                                <p className="text-lg font-medium">$5000</p>
                                            </li>

                                            <li>
                                                <span className="text-slate-400">Rating</span>
                                                <ul className="text-lg font-medium text-amber-400 list-none">
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline text-black dark:text-white">5.0(30)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                    <div className="md:col-span-12 text-center">
                        <nav>
                            <ul className="inline-flex items-center -space-x-px">
                                <li>
                                    <Link href="/#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-s-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
                                        <MdOutlineKeyboardArrowLeft className="text-[20px] rtl:rotate-180 rtl:-mt-1"/>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">1</Link>
                                </li>
                                <li>
                                    <Link href="/#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">2</Link>
                                </li>
                                <li>
                                    <Link href="/#" aria-current="page" className="z-10 w-[40px] h-[40px] inline-flex justify-center items-center text-white bg-indigo-600 border border-indigo-600">3</Link>
                                </li>
                                <li>
                                    <Link href="/#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">4</Link>
                                </li>
                                <li>
                                    <Link href="/#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">5</Link>
                                </li>
                                <li>
                                    <Link href="/#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-e-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
                                        <MdKeyboardArrowRight className="text-xl rtl:rotate-180 rtl:-mt-1"/>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
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