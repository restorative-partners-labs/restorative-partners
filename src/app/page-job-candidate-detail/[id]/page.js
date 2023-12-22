import React from 'react'
import Link from "next/link"
import Image from "next/image"

import Navbar from '../../componets/Navbar/navbar'
import JobFooter from '../../componets/jobFooter'
import Switcher from '../../componets/switcher'
import MobileApp from '../../componets/mobileApp'
import PortfolioImage from '../../componets/portfolio/portfolioImage'

import * as Icon from 'react-feather';
import { candidates } from '../../Data/data'

export default function CandidateDetails(props){
    const candidate = candidates.find((candidats)=>candidats?.id === parseInt(props?.params?.id || 0));
    return(
        <>
        <Navbar navClass="nav-light" />

        <section className="relative table w-full py-72 bg-no-repeat bg-top bg-cover" style={{backgroundImage:"url('/images/job/job.jpg')"}}>
            <div className="absolute inset-0 bg-black opacity-80"></div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                    <div className="lg:col-span-4 md:col-span-5">
                        <div className="lg:-mt-[330px] -mt-[299px]">
                            <div className="rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800">
                                <div className="text-center py-8 p-6 border-b border-gray-100 dark:border-gray-700">
                                    <Image src={candidate?.image} width={96} height={96} className="h-24 w-24 p-1 shadow-md dark:shadow-gray-800 mx-auto rounded-full block" alt="" />
                                    <h5 className="mt-5 text-xl font-semibold mb-0">{candidate?.name}</h5>
                                    <p className="text-slate-400 mb-0">Senior Web Developer</p>
                                </div>

                                <div className="p-6">
                                    <h5 className="font-semibold">Company Details :</h5>
                                    <ul className="list-none   mt-4">
                                        <li className="flex mt-2 items-center font-medium"><Icon.Mail className="h-4 w-4 text-amber-500 me-3"></Icon.Mail><span className="text-slate-400 me-3">Email  :</span> thomas@mail.com</li>
                                        <li className="flex mt-2 items-center font-medium"><Icon.Gift className="h-4 w-4 text-amber-500 me-3"></Icon.Gift><span className="text-slate-400 me-3">D.O.B. :</span> 31st Dec, 1996</li>
                                        <li className="flex mt-2 items-center font-medium"><Icon.Home className="h-4 w-4 text-amber-500 me-3"></Icon.Home><span className="text-slate-400 me-3">Address :</span> 15 Razy street</li>
                                        <li className="flex mt-2 items-center font-medium"><Icon.MapPin className="h-4 w-4 text-amber-500 me-3"></Icon.MapPin><span className="text-slate-400 me-3">City :</span> London</li>
                                        <li className="flex mt-2 items-center font-medium"><Icon.Globe className="h-4 w-4 text-amber-500 me-3"></Icon.Globe><span className="text-slate-400 me-3">Country :</span> UK</li>
                                        <li className="flex mt-2 items-center font-medium"><Icon.Server className="h-4 w-4 text-amber-500 me-3"></Icon.Server><span className="text-slate-400 me-3">Postal Code :</span> 521452</li>
                                        <li className="flex mt-2 items-center font-medium"><Icon.Phone className="h-4 w-4 text-amber-500 me-3"></Icon.Phone><span className="text-slate-400 me-3">Mobile :</span> (+125) 1542-8452</li>
                                    </ul>

                                    <ul className="list-none mt-5 space-x-1 space-y-1">
                                        <li className="inline"><Link href="#"  className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Facebook className="h-4 w-4"></Icon.Facebook></Link></li>
                                        <li className="inline"><Link href="#"  className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Instagram className="h-4 w-4"></Icon.Instagram></Link></li>
                                        <li className="inline"><Link href="#"  className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Twitter className="h-4 w-4"></Icon.Twitter></Link></li>
                                        <li className="inline"><Link href="#"  className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Linkedin className="h-4 w-4"></Icon.Linkedin></Link></li>
                                        <li className="inline"><Link href="#"  className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.GitHub className="h-4 w-4"></Icon.GitHub></Link></li>
                                        <li className="inline"><Link href="#"  className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Youtube className="h-4 w-4"></Icon.Youtube></Link></li>
                                        <li className="inline"><Link href="#"  className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Gitlab className="h-4 w-4"></Icon.Gitlab></Link></li>
                                    </ul>

                                    <Link href="/contact-one" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-6">Contact Me</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-8 md:col-span-7">
                        <h4 className="text-xl font-semibold">About us :</h4>
                        <p className="text-slate-400 mt-4">Obviously I am Web Developer. Web Developer with over 3 years of experience. Experienced with all stages of the development cycle for dynamic web projects. The as opposed to using , making it look like readable English.</p>
                        <p className="text-slate-400 mt-4">Data Structures and Algorithms are the heart of programming. Initially most of the developers do not realize its importance but when you will start your career in software development, you will find your code is either taking too much time or taking too much space.</p>

                        <h4 className="mt-8 text-xl font-semibold">Skills :</h4>
                        <div className="mt-4">
                            <div className="flex justify-between mb-2">
                                <span className="text-slate-400">WordPress</span>
                                <span className="text-slate-400">84%</span>
                            </div>
                            <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                <div className="bg-indigo-600 h-[6px] rounded-full" style={{ "width": "84%" }}></div>
                            </div>
                        </div>

                        <div className="mt-4">
                            <div className="flex justify-between mb-2">
                                <span className="text-slate-400">JavaScript</span>
                                <span className="text-slate-400">79%</span>
                            </div>
                            <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                <div className="bg-indigo-600 h-[6px] rounded-full" style={{ "width": "79%" }}></div>
                            </div>
                        </div>

                        <div className="mt-4">
                            <div className="flex justify-between mb-2">
                                <span className="text-slate-400">HTML</span>
                                <span className="text-slate-400">95%</span>
                            </div>
                            <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                <div className="bg-indigo-600 h-[6px] rounded-full" style={{ "width": "95%" }}></div>
                            </div>
                        </div>

                        <h4 className="mt-8 text-xl font-semibold">Experience :</h4>

                        <div className="flex mt-6">
                            <div className="text-slate-400 font-semibold min-w-[80px] text-center">
                                <Image src="/images/client/shree-logo.png" width={64} height={64} className="h-16 w-16 mx-auto mb-2 block" alt="" /> 2019-22
                            </div>

                            <div className="ms-4">
                                <h5 className="text-lg font-medium mb-0">Full Stack Developer</h5>
                                <span className="text-slate-400 company-university">Shreethemes - India</span>
                                <p className="text-slate-400 mt-2 mb-0">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. </p>
                            </div>
                        </div>

                        <div className="flex mt-6">
                            <div className="text-slate-400 font-semibold min-w-[80px] text-center">
                                <Image src="/images/client/circle-logo.png" width={64} height={64} className="h-16 w-16 mx-auto mb-2 block" alt="" /> 2017-19
                            </div>

                            <div className="ms-4">
                                <h5 className="text-lg font-medium mb-0">Back-end Developer</h5>
                                <span className="text-slate-400 company-university">CircleCI - U.S.A.</span>
                                <p className="text-slate-400 mt-2 mb-0">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. </p>
                            </div>
                        </div>

                        <h4 className="mt-8 text-xl font-semibold">Projects :</h4>
                        <PortfolioImage/>
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