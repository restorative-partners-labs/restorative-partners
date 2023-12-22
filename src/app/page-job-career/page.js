import React from 'react'
import Link from "next/link"
import Image from 'next/image'

import Navbar from '../componets/Navbar/navbar'
import JobFooter from '../componets/jobFooter'
import Switcher from '../componets/switcher'
import MobileApp from '../componets/mobileApp'
import JobCounter from '../componets/counter/jobCounter'

import { FaArrowRight,MdKeyboardArrowRight } from '../assets/icons/icons'

export default function JobCareer(){
    return(
        <>
        <Navbar navClass="nav-sticky"/>

        <section className="relative table w-full py-36 lg:py-44 bg-no-repeat bg-center bg-cover" style={{backgroundImage:"url('/images/job/job.jpg')"}}>
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-12">
                    <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Job Opening</h3>
                </div>
            </div>

            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-flex mx-auto space-x-1">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Techwind</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/index-job">Job</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Job Opening</li>
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

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="lg:col-span-5 md:col-span-6">
                        <div className="grid grid-cols-12 gap-6 items-center">
                            <div className="col-span-6">
                                <div className="grid grid-cols-1 gap-6">
                                    <Image src="/images/about/ab03.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="shadow rounded-md" alt="" />
                                    <Image src="/images/about/ab02.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="shadow rounded-md" alt="" />
                                </div>
                            </div>

                            <div className="col-span-6">
                                <div className="grid grid-cols-1 gap-6">
                                    <Image src="/images/about/ab01.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="shadow rounded-md" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 md:col-span-6">
                        <div className="lg:ms-5">
                            <h3 className="mb-6 md:text-3xl text-2xl lg:leading-normal leading-normal font-medium">We are Largest Job <br /> Site in The World</h3>

                            <p className="text-slate-400 max-w-xl mb-2">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind css html page.</p>
                            <p className="text-slate-400 max-w-xl">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. This might also explain why one can now find slightly different versions.</p>

                            <div className="mt-6">
                                <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <JobCounter/>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Job Openings</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind css html page.</p>
                </div>

                <div className="lg:flex justify-center mt-8">
                    <div className="lg:w-3/4">
                        <div className="group md:flex items-center justify-between p-6 rounded-lg shadow hover:shadow-lg dark:shadow-gray-700 transition-all duration-500">
                            <div>
                                <Link href="/page-job-detail" className="text-lg font-semibold hover:text-indigo-600">Frontend Developer</Link>
                                <p className="text-slate-400 mt-1">Total Openings: 1</p>
                            </div>

                            <Link href="/page-job-detail" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-transparent hover:bg-indigo-600 border-gray-100 dark:border-gray-800 hover:border-indigo-600 dark:hover:border-indigo-600 text-slate-900 dark:text-white hover:text-white rounded-full md:mt-0 mt-4">Apply now</Link>
                        </div>

                        <div className="group md:flex items-center justify-between p-6 rounded-lg shadow hover:shadow-lg dark:shadow-gray-700 transition-all duration-500 mt-6">
                            <div>
                                <Link href="/page-job-detail" className="text-lg font-semibold hover:text-indigo-600">Business Development Manager</Link>
                                <p className="text-slate-400 mt-1">Total Openings: 2</p>
                            </div>

                            <Link href="/page-job-detail" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-transparent hover:bg-indigo-600 border-gray-100 dark:border-gray-800 hover:border-indigo-600 dark:hover:border-indigo-600 text-slate-900 dark:text-white hover:text-white rounded-full md:mt-0 mt-4">Apply now</Link>
                        </div>

                        <div className="group md:flex items-center justify-between p-6 rounded-lg shadow hover:shadow-lg dark:shadow-gray-700 transition-all duration-500 mt-6">
                            <div>
                                <Link href="/page-job-detail" className="text-lg font-semibold hover:text-indigo-600">Backend Developer</Link>
                                <p className="text-slate-400 mt-1">Total Openings: 4</p>
                            </div>

                            <Link href="/page-job-detail" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-transparent hover:bg-indigo-600 border-gray-100 dark:border-gray-800 hover:border-indigo-600 dark:hover:border-indigo-600 text-slate-900 dark:text-white hover:text-white rounded-full md:mt-0 mt-4">Apply now</Link>
                        </div>
                    </div>
                </div>
            </div>
            <MobileApp/>
        </section>


        <JobFooter/>
        <Switcher/>
        </>
    )
}