import React from 'react'
import Link from "next/link"
import Image from "next/image"

import Navbar from '../componets/Navbar/navbar'
import JobFooter from '../componets/jobFooter'
import Switcher from '../componets/switcher'
import MobileApp from '../componets/mobileApp'

import { jobData } from '../Data/data'

import {MdKeyboardArrowRight,RiMapPinLine} from "../assets/icons/icons"

export default function JobCompanies(){
    return(
        <>
        <Navbar navClass="nav-light" />
        <section className="relative table w-full py-36 lg:py-44  bg-no-repeat bg-center bg-cover" style={{backgroundImage:"url('/images/job/job.jpg')"}}>
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 className="mb-4 md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Company List</h3>

                    <ul className="tracking-[0.5px] mb-0 inline-flex mx-auto space-x-1">
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Techwind</Link></li>
                        <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/index-job">Job</Link></li>
                        <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Companies</li>
                    </ul>
                </div>
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
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]">
                    {
                        jobData.map((data,index) => {
                            return (
                                <Link href={`/page-job-company-detail/${data.id}`} key={index}  className="group bg-white dark:bg-slate-900 p-6 rounded shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 border-4 border-white dark:border-slate-900 hover:border-b-indigo-600 dark:hover:border-b-indigo-600 text-center duration-500 ease-in-out">
                                    <Image src={data.image} height={64} width={64} className="h-16 w-16 mx-auto p-3 rounded-full bg-gray-50 dark:bg-slate-800 shadow-md dark:shadow-gray-800" alt="" />

                                    <div className="content mt-3">
                                        <span className="text-lg font-semibold group-hover:text-indigo-600 transition duration-500 block">{data.name}</span>

                                        <span className="text-base text-slate-400 inline-flex items-center"><RiMapPinLine className="text-indigo-600 me-1"/>{data.location}</span>
                                    </div>
                                </Link>
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