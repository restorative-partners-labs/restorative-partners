"use client"
import React, { useState } from 'react'
import Link from "next/link"
import {MdKeyboardArrowRight} from '../../assets/icons/icons'

export default function Pricing(){
    const [isOpenTab, setisOpen] = useState(0);
    const [isOpenTab1, setisOpen1] = useState(0);
    const [isOpenTab2, setisOpen2] = useState(0);

    const handleTabClick = (index) => {
        setisOpen(index);
    };
    const handleTabClick1 = (index) => {
        setisOpen1(index);
    };
    const handleTabClick2 = (index) => {
        setisOpen2(index);
    };

    return(
        <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
            <div className="container relative">
                <div className="grid grid-cols-1">
                    <div className="relative z-2 transition-all duration-500 ease-in-out sm:-mt-[200px] -mt-[140px] m-0">
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                            <div className="group relative rounded-md overflow-hidden hover:shadow dark:hover:shadow-gray-700 bg-white dark:bg-slate-900 text-center transition-all duration-500 ease-in-out h-fit">
                                <div className="p-6 py-8 border-b border-gray-100 dark:border-gray-700">
                                    <h5 className="text-lg font-semibold uppercase">Starter</h5>
                                    <p className="text-slate-400 mt-4">We offers a <b className="text-black dark:text-white">free month</b> of service for new customers.</p>
                                </div>

                                <div className="p-6 hosting-price">
                                    <ul className="inline-block flex-wrap justify-center text-center p-1 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-full" >
                                        <li className="inline-block">
                                            <button onClick={() => handleTabClick(0)} className={`${isOpenTab === 0 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-1 text-sm font-semibold rounded-full w-full transition-all duration-500 ease-in-out`} id="dashboard-tab" >Monthly</button>
                                        </li>
                                        <li className="inline-block">
                                            <button onClick={() => handleTabClick(1)} className={`${isOpenTab === 1 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-1 text-sm font-semibold rounded-full w-full transition-all duration-500 ease-in-out`} >Monthly</button>
                                            
                                        </li>
                                    </ul>

                                    <div id="StarterContent" className="mt-6">
                                        {isOpenTab === 0 ? 
                                            <div className="flex justify-center">
                                                <span className="text-sm text-slate-400 font-semibold">$</span>
                                                <span className="text-3xl font-semibold mx-1">3.99</span>
                                                <span className="text-sm text-slate-400 font-semibold self-end">/month</span>
                                            </div>:""
                                        }
                                        {isOpenTab === 1 ? 
                                            <div className="flex justify-center">
                                                <span className="text-sm text-slate-400 font-semibold">$</span>
                                                <span className="text-3xl font-semibold mx-1">15.99</span>
                                                <span className="text-sm text-slate-400 font-semibold self-end">/year</span>
                                            </div>:""
                                        }
                                    </div>

                                    <div className="mt-6">
                                        <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-md">Add Cart</Link>
                                    </div>
                                </div>

                                <div className="py-3 px-2 bg-gray-50 dark:bg-slate-800">
                                    <p className="text-slate-400 mb-0">Great Start For A <b className="text-black dark:text-white">Single</b> Site.</p>
                                </div>

                                <div className="p-6 border-b border-gray-100 dark:border-gray-700 text-start">
                                    <ul className="list-none space-x-1">
                                        <li className="text-slate-400 my-1"><i className="mdi mdi-check me-2 text-emerald-600"></i><b className="text-black dark:text-white">1</b> Website</li>
                                        <li className="text-slate-400 my-1"><i className="mdi mdi-check me-2 text-amber-500"></i><b className="text-black dark:text-white">1</b> Email Account</li>
                                        <li className="text-slate-400 my-1"><i className="mdi mdi-check me-2 text-amber-500"></i><b className="text-black dark:text-white">Limited</b> Bandwidth (100 GB)</li>
                                        <li className="text-slate-400 my-1"><i className="mdi mdi-check me-2 text-amber-500"></i><b className="text-black dark:text-white">1X Processing</b> Power &amp; Memory</li>
                                    </ul>
                                </div>

                                <div className="p-4">
                                    <Link href="/page-services" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More <MdKeyboardArrowRight className="text-xl ms-1"/></Link>
                                </div>
                            </div>


                            <div className="group relative rounded-md overflow-hidden hover:shadow dark:shadow-gray-800 hover:shadow-indigo-600 border-[3px] border-indigo-600 bg-white dark:bg-slate-900 text-center transition-all duration-500 ease-in-out">
                                <div className="p-6 py-8 border-b border-gray-100 dark:border-gray-700">
                                    <h5 className="text-lg font-semibold uppercase">Premium</h5>
                                    <p className="text-slate-400 mt-4">We offers a <b className="text-black dark:text-white">free month</b> of service for new customers.</p>
                                </div>

                                <div className="p-6 hosting-price">
                                    <ul className="inline-block flex-wrap justify-center text-center p-1 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-full" id="myTabtwo" data-tabs-toggle="#PremiumContent" role="tablist">
                                    <li className="inline-block">
                                            <button onClick={() => handleTabClick1(0)} className={`${isOpenTab1 === 0 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-1 text-sm font-semibold rounded-full w-full transition-all duration-500 ease-in-out`} id="dashboard-tab" >Monthly</button>
                                        </li>
                                        <li className="inline-block">
                                            <button onClick={() => handleTabClick1(1)} className={`${isOpenTab1 === 1 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-1 text-sm font-semibold rounded-full w-full transition-all duration-500 ease-in-out`} >Monthly</button>
                                        </li>
                                    </ul>

                                    <div id="PremiumContent" className="mt-6">
                                        {isOpenTab1 === 0 ? 
                                            <div className="flex justify-center">
                                                <span className="text-sm text-slate-400 font-semibold">$</span>
                                                <span className="text-3xl font-semibold mx-1">14.99</span>
                                                <span className="text-sm text-slate-400 font-semibold self-end">/month</span>
                                            </div>:""
                                        }
                                        {isOpenTab1 === 1 ? 
                                            <div className="flex justify-center">
                                                <span className="text-sm text-slate-400 font-semibold">$</span>
                                                <span className="text-3xl font-semibold mx-1">149.99</span>
                                                <span className="text-sm text-slate-400 font-semibold self-end">/year</span>
                                            </div>:""
                                        }
                                    </div>

                                    <div className="mt-6">
                                        <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-md">Add Cart</Link>
                                    </div>
                                </div>

                                <div className="py-3 px-2 bg-gray-50 dark:bg-slate-800">
                                    <p className="text-slate-400 mb-0">More Sites & <b className="text-black dark:text-white">2X</b> Resources.</p>
                                </div>

                                <div className="p-6 border-b border-gray-100 dark:border-gray-700 text-start">
                                    <ul className="list-none space-x-1">
                                        <li className="text-slate-400 my-1"><i className="mdi mdi-check me-2 text-emerald-600"></i><b className="text-black dark:text-white">Unlimited</b> Number of Websites</li>
                                        <li className="text-slate-400 my-1"><i className="mdi mdi-check me-2 text-emerald-600"></i><b className="text-black dark:text-white">Unlimited</b> Email Accounts</li>
                                        <li className="text-slate-400 my-1"><i className="mdi mdi-check me-2 text-emerald-600"></i><b className="text-black dark:text-white">Unlimited</b> Bandwidth</li>
                                        <li className="text-slate-400 my-1"><i className="mdi mdi-check me-2 text-amber-400"></i><b className="text-black dark:text-white">2X Processing</b> Power &amp; Memory</li>
                                    </ul>
                                </div>

                                <div className="p-4">
                                    <Link href="/page-services" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More <MdKeyboardArrowRight className="text-xl ms-1"/></Link>
                                </div>

                                <div className="p-4 bg-indigo-600">
                                    <p className="text-white text-sm">The most frequently chosen package</p>
                                </div>
                            </div>


                            <div className="group relative rounded-md overflow-hidden hover:shadow dark:hover:shadow-gray-700 bg-white dark:bg-slate-900 text-center transition-all duration-500 ease-in-out h-fit">
                                <div className="p-6 py-8 border-b border-gray-100 dark:border-gray-700">
                                    <h5 className="text-lg font-semibold uppercase">Business</h5>
                                    <p className="text-slate-400 mt-4">We offers a <b className="text-black dark:text-white">free month</b> of service for new customers.</p>
                                </div>

                                <div className="p-6 hosting-price">
                                    <ul className="inline-block flex-wrap justify-center text-center p-1 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-full" id="myTabthree" data-tabs-toggle="#BusinessContent" role="tablist">
                                            <li className="inline-block">
                                            <button onClick={() => handleTabClick2(0)} className={`${isOpenTab2 === 0 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-1 text-sm font-semibold rounded-full w-full transition-all duration-500 ease-in-out`} id="dashboard-tab" >Monthly</button>
                                        </li>
                                        <li className="inline-block">
                                            <button onClick={() => handleTabClick2(1)} className={`${isOpenTab2 === 1 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-1 text-sm font-semibold rounded-full w-full transition-all duration-500 ease-in-out`} >Monthly</button>
                                        </li>
                                    </ul>

                                    <div id="BusinessContent" className="mt-6">
                                    {isOpenTab2 === 0 ?
                                        <div className="flex justify-center">
                                            <span className="text-sm text-slate-400 font-semibold">$</span>
                                            <span className="text-3xl font-semibold mx-1">29.99</span>
                                            <span className="text-sm text-slate-400 font-semibold self-end">/month</span>
                                        </div>:""
                                    }
                                    {isOpenTab2 === 1 ? 
                                        <div className="flex justify-center">
                                            <span className="text-sm text-slate-400 font-semibold">$</span>
                                            <span className="text-3xl font-semibold mx-1">259.99</span>
                                            <span className="text-sm text-slate-400 font-semibold self-end">/year</span>
                                        </div>:""
                                    }
                                    </div>

                                    <div className="mt-6">
                                        <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-md">Add Cart</Link>
                                    </div>
                                </div>

                                <div className="py-3 px-2 bg-gray-50 dark:bg-slate-800">
                                    <p className="text-slate-400 mb-0">Boost Servers <b className="text-black dark:text-white">+ More Power</b></p>
                                </div>

                                <div className="p-6 border-b border-gray-100 dark:border-gray-700 text-start">
                                    <ul className="list-none space-x-1">
                                        <li className="text-slate-400 my-1"><i className="mdi mdi-check me-2 text-emerald-600"></i><b className="text-black dark:text-white">All Benefits From Premium</b></li>
                                        <li className="text-slate-400 my-1"><i className="mdi mdi-check me-2 text-emerald-600"></i><b className="text-black dark:text-white">Daily</b> Backups</li>
                                        <li className="text-slate-400 my-1"><i className="mdi mdi-check me-2 text-emerald-600"></i><b className="text-black dark:text-white">Free</b> SSL Certificate</li>
                                        <li className="text-slate-400 my-1"><i className="mdi mdi-check me-2 text-emerald-600"></i><b className="text-black dark:text-white">4X Processing</b> Power &amp; Memory</li>
                                    </ul>
                                </div>

                                <div className="p-4">
                                    <Link href="/page-services" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More <MdKeyboardArrowRight className="text-xl ms-1"/></Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}