"use client"
import React from "react"
import Link from "next/link"
import {BsCheckCircle} from "react-icons/bs"
import {RiMastercardLine} from "react-icons/ri"

export default function PricingOne(){
    return(
        <div className="container relative md:mt-24 mt-16">
            <div className="grid lg:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="lg:col-span-5">
                <div className="lg:text-start text-center">
                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Our Comfortable Rates</h3>

                <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>

                <div className="mt-6">
                    <Link href="/page-pricing" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2"><RiMastercardLine className="me-1 text-lg"/> Subscribe Now</Link>
                </div>
                </div>
            </div>

            <div className="lg:col-span-7 mt-8 lg:mt-0">
                <div className="lg:ms-8">
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-[30px]">
                    <div className="group border-b-[3px] dark:border-gray-700 relative shadow dark:shadow-gray-800 rounded-md md:scale-110 z-3 bg-white dark:bg-slate-900">
                    <div className="p-6 py-8">
                        <h6 className="font-bold uppercase mb-5 text-indigo-600">Starter</h6>

                        <div className="flex mb-5">
                        <span className="text-xl font-semibold">$</span>
                        <span className="price text-4xl font-semibold mb-0">39</span>
                        <span className="text-xl font-semibold self-end mb-1">/mo</span>
                        </div>

                        <ul className="list-none text-slate-400">
                        <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/>Full Access</li>
                        <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Source Files</li>
                        <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Free Appointments</li>
                        <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Enhanced Security</li>
                        </ul>
                        <Link href='#' className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Get Started</Link>
                    </div>
                    </div>

                    <div className="group border-b-[3px] dark:border-gray-700 relative shadow dark:shadow-gray-800 rounded-md z-2 bg-gray-50 dark:bg-slate-800">
                    <div className="p-6 py-8 md:ps-10">
                        <h6 className="font-bold uppercase mb-5 text-indigo-600">Professional</h6>

                        <div className="flex mb-5">
                        <span className="text-xl font-semibold">$</span>
                        <span className="price text-4xl font-semibold mb-0">59</span>
                        <span className="text-xl font-semibold self-end mb-1">/mo</span>
                        </div>

                        <ul className="list-none text-slate-400">
                        <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Full Access</li>
                        <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Source Files</li>
                        <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Free Appointments</li>
                        <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Enhanced Security</li>
                        </ul>
                        <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Try it Now</Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}