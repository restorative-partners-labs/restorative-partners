import React from 'react'
import Link from "next/link"
import Image from 'next/image'

import Navbar from '../componets/Navbar/navbar'
import JobFooter from '../componets/jobFooter'
import Switcher from '../componets/switcher'
import MobileApp from '../componets/mobileApp'

import {MdKeyboardArrowRight,PiCurrencyDollarSimpleLight,RiMapPinLine,BiBookmark} from "../assets/icons/icons"

import { candidates } from '../Data/data'

export default function JobCareer(){
    return(
        <>
        <Navbar navClass="nav-sticky"/>

        <section className="relative table w-full py-36 lg:py-44 bg-no-repeat bg-center bg-cover" style={{backgroundImage:"url('/images/job/job.jpg')"}}>
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-12">
                    <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Company List</h3>
                </div>
            </div>

            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-flex mx-auto space-x-1">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Techwind</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/index-job">Job</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Companies</li>
                </ul>
            </div>
        </section>
        <div className="relative">
            <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-gray-50 dark:text-slate-800">
                <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
            <div className="container relative">
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]">
                    {
                        candidates.map((data,index) => {
                            return (
                                <div key={index} className="group relative p-6 rounded-md shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 bg-white dark:bg-slate-900 transition duration-500 text-center">
                                    <div className="mt-8">
                                        <Image src={data.image} width={80} height={80} className="rounded-full shadow-md h-20 w-20 mx-auto block" alt="" />

                                        <div className="mt-3">
                                            <Link href={`/page-job-candidate-detail/${data.id}`} className="text-lg font-medium hover:text-indigo-600 transition duration-500 block">{data.name}</Link>
                                            <span className="block text-sm text-slate-400">Web Designer</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-around my-4">
                                        <span className="text-slate-400 flex items-center"><RiMapPinLine  className="text-indigo-600 me-1"/>London</span>
                                        <span className="text-slate-400 flex items-center"><PiCurrencyDollarSimpleLight className="text-indigo-600 me-2"/>3300/mo</span>
                                    </div>

                                    <Link href="#" className="bg-gray-100 dark:bg-gray-800 text-slate-400 text-xs font-medium px-3 py-1 rounded-lg h-[24px] inline-block m-1">PHP</Link>
                                    <Link href="#" className="bg-gray-100 dark:bg-gray-800 text-slate-400 text-xs font-medium px-3 py-1 rounded-lg h-[24px] inline-block m-1">HTML</Link>
                                    <Link href="#" className="bg-gray-100 dark:bg-gray-800 text-slate-400 text-xs font-medium px-3 py-1 rounded-lg h-[24px] inline-block m-1">CSS</Link>
                                    <Link href="#" className="bg-gray-100 dark:bg-gray-800 text-slate-400 text-xs font-medium px-3 py-1 rounded-lg h-[24px] inline-block m-1">WordPress</Link>

                                    <div className="mt-4">
                                        <Link href={`/page-job-candidate-detail/${data.id}`} className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-md w-full">View Profile</Link>
                                    </div>

                                    <div className="absolute top-6 start-6">
                                        <span className="bg-indigo-600/5 text-indigo-600 text-sm font-medium px-4 py-1 rounded-full h-[28px]">Featured</span>
                                    </div>
                                    <div className="absolute top-6 end-6">
                                        <Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 border hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700 rounded-full"><BiBookmark/></Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <MobileApp/>
        </section>

        <JobFooter/>
        <Switcher/>
        </>
    )
}