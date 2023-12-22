"use client"
import React, {useState} from 'react'
import Link from "next/link"

import {BsCheckCircle} from '../assets/icons/icons'
import { accordionData } from '../Data/dataTwo'

export default function PricingTab(){
    const [activeIndex, setActiveIndex] = useState(1);
    const [isOpenTab, setisOpenTab] = useState(0);
    
    const handleTabClick = (index) => {
        setisOpenTab(index);
    };


    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(0);
        } else {
            setActiveIndex(index);
        }
    }

    const accordionData1 = accordionData.filter((x) => x.id < 5);
    const accordionData2 = accordionData.filter((x) => x.id > 4);
    return(
        <div className="grid grid-cols-1">
                    <ul className="inline-block w-fit mx-auto flex-wrap justify-center text-center p-2 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-full">
                        <li role="presentation" className="inline-block">
                            <button onClick={() => handleTabClick(0)} className={`${isOpenTab === 0 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-1 text-sm font-semibold rounded-full w-full hover:text-indigo-600 transition-all duration-500 ease-in-out`}>Monthly</button>
                        </li>
                        <li role="presentation" className="inline-block">
                            <button onClick={() => handleTabClick(1)}  className={`${isOpenTab === 1 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-1 text-sm font-semibold rounded-full w-full transition-all duration-500 ease-in-out`}>Yearly <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-0.5 rounded-full h-5 ms-1">Save 25%</span></button>
                        </li>
                    </ul>

                    <div id="StarterContent" className="mt-6">
                        {isOpenTab === 0 ?
                            <div>
                                <div className="grid lg:grid-cols-4 md:grid-cols-2 mt-8 gap-[30px]">
                                    <div className="group border-b-[3px] dark:border-gray-700 p-6 py-8 hover:border-indigo-600 dark:hover:border-indigo-600 transition-all duration-500 ease-in-out hover:scale-105 relative overflow-hidden shadow dark:shadow-gray-800 rounded-md bg-gray-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-900 h-fit">
                                        <h6 className="font-bold uppercase mb-5 text-indigo-600">Free</h6>

                                        <div className="flex mb-5">
                                            <span className="text-xl font-semibold">$</span>
                                            <span className="price text-4xl font-semibold mb-0">0</span>
                                            <span className="text-xl font-semibold self-end mb-1">/mo</span>
                                        </div>

                                        <ul className="list-none text-slate-400">
                                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/>Full Access</li>
                                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Source Files</li>
                                        </ul>
                                        <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Signup</Link>
                                    </div>

                                    <div className="group border-b-[3px] dark:border-gray-700 p-6 py-8 hover:border-indigo-600 dark:hover:border-indigo-600 transition-all duration-500 ease-in-out hover:scale-105 relative overflow-hidden shadow dark:shadow-gray-800 rounded-md bg-gray-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-900 h-fit">
                                        <h6 className="font-bold uppercase mb-5 text-indigo-600">Starter</h6>

                                        <div className="flex mb-5">
                                            <span className="text-xl font-semibold">$</span>
                                            <span className="price text-4xl font-semibold mb-0">9</span>
                                            <span className="text-xl font-semibold self-end mb-1">/mo</span>
                                        </div>

                                        <ul className="list-none text-slate-400">
                                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Full Access</li>
                                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Source Files</li>
                                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Enhanced Security</li>
                                        </ul>
                                        <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Buy Now</Link>
                                    </div>

                                    <div className="group border-b-[3px] border-indigo-600 p-6 py-8 transition-all duration-500 ease-in-out hover:scale-105 relative overflow-hidden shadow dark:shadow-gray-800 rounded-md bg-white dark:bg-slate-900 h-fit">
                                        <span className="absolute -end-11 -top-[10px] ltr:rotate-[45deg] rtl:-rotate-[45deg] w-32 h-16 pt-4 px-2 pb-0 flex items-center justify-center text-white bg-amber-500 font-semibold text-lg">Best</span>
                                        <h6 className="font-bold uppercase mb-5 text-indigo-600">Business</h6>

                                        <div className="flex mb-5">
                                            <span className="text-xl font-semibold">$</span>
                                            <span className="price text-4xl font-semibold mb-0">74</span>
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

                                    <div className="group border-b-[3px] dark:border-gray-700 p-6 py-8 hover:border-indigo-600 dark:hover:border-indigo-600 transition-all duration-500 ease-in-out hover:scale-105 relative overflow-hidden shadow dark:shadow-gray-800 rounded-md bg-gray-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-900 h-fit">
                                        <h6 className="font-bold uppercase mb-5 text-indigo-600">Professional</h6>

                                        <div className="flex mb-5">
                                            <span className="text-xl font-semibold">$</span>
                                            <span className="price text-4xl font-semibold mb-0">99</span>
                                            <span className="text-xl font-semibold self-end mb-1">/mo</span>
                                        </div>

                                        <ul className="list-none text-slate-400">
                                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Full Access</li>
                                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Source Files</li>
                                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Free Appointments</li>
                                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Enhanced Security</li>
                                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Free Installment</li>
                                        </ul>
                                        <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Started Now</Link>
                                    </div>
                                </div>
                            </div>:""
                            }
                            {isOpenTab === 1 ?
                            <div >
                                <div className="grid lg:grid-cols-4 md:grid-cols-2 mt-8 gap-[30px]">
                                    <div className="group border-b-[3px] dark:border-gray-700 p-6 py-8 hover:border-indigo-600 dark:hover:border-indigo-600 transition-all duration-500 ease-in-out hover:scale-105 relative overflow-hidden shadow dark:shadow-gray-800 rounded-md bg-gray-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-900 h-fit">
                                        <h6 className="font-bold uppercase mb-5 text-indigo-600">Free</h6>

                                        <div className="flex mb-5">
                                            <span className="text-xl font-semibold">$</span>
                                            <span className="price text-4xl font-semibold mb-0">0</span>
                                            <span className="text-xl font-semibold self-end mb-1">/mo</span>
                                        </div>

                                        <ul className="list-none text-slate-400">
                                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Full Access</li>
                                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Source Files</li>
                                        </ul>
                                        <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Signup</Link>
                                    </div>

                                    <div className="group border-b-[3px] dark:border-gray-700 p-6 py-8 hover:border-indigo-600 dark:hover:border-indigo-600 transition-all duration-500 ease-in-out hover:scale-105 relative overflow-hidden shadow dark:shadow-gray-800 rounded-md bg-gray-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-900 h-fit">
                                        <h6 className="font-bold uppercase mb-5 text-indigo-600">Starter</h6>

                                        <div className="flex mb-5">
                                            <span className="text-xl font-semibold">$</span>
                                            <span className="price text-4xl font-semibold mb-0">39</span>
                                            <span className="text-xl font-semibold self-end mb-1">/mo</span>
                                        </div>

                                        <ul className="list-none text-slate-400">
                                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Full Access</li>
                                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Source Files</li>
                                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Enhanced Security</li>
                                        </ul>
                                        <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Buy Now</Link>
                                    </div>

                                    <div className="group border-b-[3px] border-indigo-600 p-6 py-8 transition-all duration-500 ease-in-out hover:scale-105 relative overflow-hidden shadow dark:shadow-gray-800 rounded-md bg-white dark:bg-slate-900 h-fit">
                                        <span className="absolute -end-11 -top-[10px] ltr:rotate-[45deg] rtl:-rotate-[45deg] w-32 h-16 pt-4 px-2 pb-0 flex items-center justify-center text-white bg-amber-500 font-semibold text-lg">Best</span>
                                        <h6 className="font-bold uppercase mb-5 text-indigo-600">Business</h6>

                                        <div className="flex mb-5">
                                            <span className="text-xl font-semibold">$</span>
                                            <span className="price text-4xl font-semibold mb-0">274</span>
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

                                    <div className="group border-b-[3px] dark:border-gray-700 p-6 py-8 hover:border-indigo-600 dark:hover:border-indigo-600 transition-all duration-500 ease-in-out hover:scale-105 relative overflow-hidden shadow dark:shadow-gray-800 rounded-md bg-gray-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-900 h-fit">
                                        <h6 className="font-bold uppercase mb-5 text-indigo-600">Professional</h6>

                                        <div className="flex mb-5">
                                            <span className="text-xl font-semibold">$</span>
                                            <span className="price text-4xl font-semibold mb-0">599</span>
                                            <span className="text-xl font-semibold self-end mb-1">/mo</span>
                                        </div>

                                        <ul className="list-none text-slate-400">
                                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Full Access</li>
                                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Source Files</li>
                                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Free Appointments</li>
                                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Enhanced Security</li>
                                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Free Installment</li>
                                        </ul>
                                        <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Started Now</Link>
                                    </div>
                                </div>
                            </div>:""
                            }
                    </div>
                </div>
    )
}