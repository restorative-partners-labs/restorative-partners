import React from 'react'
import Link from "next/link"
import Image from "next/image"

import Navbar from '../componets/Navbar/navbar'
import Footer from '../componets/Footer/footer'
import Switcher from '../componets/switcher'
import AccountTab from '../componets/accountTab'

import {FiPhone,FiEdit,RiMapPinLine} from "../assets/icons/icons"

export default function UsersBilling(){
    return(
        <>
        <Navbar navClass="nav-light"/>

        <section className="relative lg:pb-24 pb-16">
            <div className="container-fluid relative">
                <div className="profile-banner relative text-transparent">
                    <input id="pro-banner" name="profile-banner" type="file" className="hidden"  />
                    <div className="relative shrink-0">
                        <Image src="/images/blog/bg.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="h-80 w-full object-cover" id="profile-banner" alt="" />
                        <div className="absolute inset-0 bg-black/70"></div>
                        <label className="absolute inset-0 cursor-pointer" htmlFor="pro-banner"></label>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="md:flex">
                    <div className="lg:w-1/4 md:w-1/3 md:px-3">
                        <div className="relative md:-mt-48 -mt-32">
                            <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                                <div className="profile-pic text-center mb-5">
                                    <input id="pro-img" name="profile-image" type="file" className="hidden" />
                                    <div>
                                        <div className="relative h-28 w-28 mx-auto">
                                            <Image src="/images/client/05.jpg" width={112} height={112} className="rounded-full shadow dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800" id="profile-image" alt="" />
                                            <label className="absolute inset-0 cursor-pointer" htmlFor="pro-img"></label>
                                        </div>

                                        <div className="mt-4">
                                            <h5 className="text-lg font-semibold">Jenny Jimenez</h5>
                                            <p className="text-slate-400">jennyhot@hotmail.com</p>
                                        </div>
                                    </div>
                                </div>
                                <AccountTab/>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-3/4 md:w-2/3 md:px-3 mt-[30px] md:mt-0">
                        <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                            <h6 className="text-slate-400 mb-0">The following addresses will be used on the checkout page by default.</h6>
                            <div className="md:flex mt-6">
                                <div className="md:w-1/2 md:px-3">
                                    <div className="flex items-center mb-4 justify-between">
                                        <h5 className="text-xl font-semibold">Billing Address:</h5>
                                        <Link href="/#" className="text-indigo-600 text-lg"><FiEdit/></Link>
                                    </div>
                                    <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <p className="text-lg font-semibold mb-2">Jenny Jimenez</p>

                                        <ul className="list-none">
                                            <li className="flex items-start">
                                               <RiMapPinLine className="me-2 mt-1"/>
                                                <p className="text-slate-400">C/54 Northwest Freeway, Suite 558, <br /> Houston, USA 485</p>
                                            </li>

                                            <li className="flex mt-1">
                                                <FiPhone className="text-lg me-2"/>
                                                <p className="text-slate-400">+123 897 5468</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="md:w-1/2 md:px-3 mt-[30] md:mt-0">
                                    <div className="flex items-center mb-4 justify-between">
                                        <h5 className="text-xl font-semibold">Shipping Address:</h5>
                                        <Link href="/#" className="text-indigo-600 text-lg"><FiEdit/></Link>
                                    </div>
                                    <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <p className="text-lg font-semibold mb-2">Jenny Jimenez</p>

                                        <ul className="list-none">
                                            <li className="flex items-start">
                                                <RiMapPinLine className="me-2 mt-1"/>
                                                <p className="text-slate-400">C/54 Northwest Freeway, Suite 558, <br /> Houston, USA 485</p>
                                            </li>

                                            <li className="flex mt-1">
                                                <FiPhone className="text-lg me-2"/>
                                                <p className="text-slate-400">+123 897 5468</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer/>
        <Switcher/>
        </>
    )
}