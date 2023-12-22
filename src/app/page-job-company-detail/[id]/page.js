import React from 'react'
import Link from "next/link"
import Image from 'next/image'

import Navbar from '../../componets/Navbar/navbar'
import JobFooter from '../../componets/jobFooter'
import Switcher from '../../componets/switcher'
import MobileApp from '../../componets/mobileApp'

import { jobData } from '../../Data/data';

import * as Icon from 'react-feather';

import {comapnyData} from '../../Data/dataThree'

export default function companyDetails(props){

    const company = jobData.find((companies)=>companies?.id === parseInt(props?.params?.id || 0));

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
                                    <Image src={company?.image} width={96} height={96} className="h-24 w-24 p-4 shadow-md mx-auto rounded-full block" alt="" />
                                    <h5 className="mt-5 text-xl font-semibold mb-0">{company?.name}</h5>
                                    <p className="text-slate-400 mb-0">Internet Services</p>
                                </div>

                                <div className="p-6">
                                    <h5 className="font-semibold">Company Details :</h5>
                                    <ul className="list-none mt-4">
                                        <li className="flex mt-2 items-center font-medium"><Icon.MapPin className="h-4 w-4 text-amber-500 me-3"></Icon.MapPin><span className="text-slate-400 me-3">Location :</span> San Francisco</li>
                                        <li className="flex mt-2 items-center font-medium"><Icon.Link className="h-4 w-4 text-amber-500 me-3"></Icon.Link><span className="text-slate-400 me-3">Comapny :</span> circleci.com</li>
                                        <li className="flex mt-2 items-center font-medium"><Icon.DollarSign className="h-4 w-4 text-amber-500 me-3"></Icon.DollarSign><span className="text-slate-400 me-3">Revenue :</span> $ 5M / Annual</li>
                                        <li className="flex mt-2 items-center font-medium"><Icon.Users className="h-4 w-4 text-amber-500 me-3"></Icon.Users><span className="text-slate-400 me-3">No. of employees :</span> 200</li>
                                    </ul>

                                    <Link href="/page-job-apply" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-6">Apply Now</Link>
                                </div>
                            </div>

                            <div className="w-full leading-[0] border-0 mt-8">
                                <iframe title='google' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{ "border": 0 }} className="w-full h-[500px]" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-8 md:col-span-7">
                        <h4 className="text-xl font-semibold">About us :</h4>
                        <p className="text-slate-400 mt-4">Almost no business is immune from the need for quality software development. The act of building quality software, and shipping it quickly, has become the core engine of value creation in companies across all industries. CircleCI allows teams to rapidly release code they trust by automating the build, test, and delivery process. Thousands of leading companies, including Samsung, Ford Motor Company, Spotify, Lyft, Coinbase, PagerDuty, Stitch Fix, and BuzzFeed rely on CircleCI to accelerate delivery and improve quality.</p>
                        <p className="text-slate-400 mt-4">CircleCI was named a Leader in cloud-native continuous integration by Forrester in 2021 and has been named to multiple Best DevOps Tools lists. CircleCI is the first CI/CD tool to become FedRAMP certified and processes more than 30 million builds each month across Linux, macOS, Docker and Windows build environments.</p>
                        <p className="text-slate-400 mt-4">Founded in 2011 and headquartered in San Francisco with a global remote workforce, CircleCI is venture-backed by Scale Venture Partners, Threshold Ventures (formerly DFJ), Baseline Ventures, Top Tier Capital, Industry Ventures, Heavybit, Harrison Metal Capital, Owl Rock Capital Partners, and NextEquity Partners.</p>

                        <h4 className="mt-8 text-xl font-semibold">Join The Team :</h4>
                        <p className="text-slate-400 mt-4">Started in 2011, we have grown to over 200 employees all over the world. Headquartered in San Francisco, we have offices in London, Tokyo, Toronto, Boston, and Denver, with team members working across 50+ cities and 13 countries.</p>

                        <div className="grid lg:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                            {comapnyData.map((item,index)=>{
                                const Icon = item.icon
                                return(
                                    <div key={index}>
                                    <Link href="/page-job-detail" className="group flex  bg-white dark:bg-slate-900 transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md">
                                        <div className="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full me-3">
                                            <Icon className="h-5 w-5 rotate-45"></Icon>
                                        </div>
                                        <div className="content">
                                            <h4 className="text-lg font-medium group-hover:text-indigo-600 duration-500 ease-in-out">{item.title}</h4>
                                            <p className="text-slate-400">{item.location}</p>
                                        </div>
                                    </Link>
                                </div>
                                )
                            })}
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