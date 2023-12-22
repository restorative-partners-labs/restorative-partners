import React from 'react'
import Link from "next/link"
import Image from "next/image"

import Navbar from '../componets/Navbar/navbar'
import Footer from '../componets/Footer/footer'
import Switcher from '../componets/switcher'
import AccountTab from '../componets/accountTab'
import PaymentModal from '../componets/paymentModal'

import * as Icon from 'react-feather';
import { paymentMethod } from '../Data/dataFour'
export default function UserPayment(){
      
   
    return(
        <>
        <Navbar navClass="nav-light"/>

        <section className="relative lg:pb-24 pb-16">
            <div className="container-fluid relative">
                <div className="profile-banner relative text-transparent">
                    <input id="pro-banner" name="profile-banner" type="file" className="hidden"/>
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
                        <div className="rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                            <div className="p-6 md:flex justify-between items-center border-b border-gray-100 dark:border-gray-700">
                                <div className="mb-4 md:mb-0">
                                    <h5 className="text-xl font-semibold">Current Plan</h5>
                                </div>
                                <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Switch to Annual Plan</Link>
                            </div>

                            <div className="p-6">
                                <h5 className="text-2xl font-bold">$18/Monthly</h5>
                                <p className="text-slate-400 mt-2">Your next monthly charge of $18 will be applied to your primary payment method on July 20, 2022.</p>
                            </div>
                        </div>

                        <div className="rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 mt-6">
                            <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                                <h5 className="text-xl font-semibold">Payment Methods</h5>
                                <p className="text-slate-400 mt-2">Primary payment method is used by default</p>
                            </div>

                            <div className="px-6">
                                <ul>
                                    {paymentMethod.map((item,index)=>{
                                        return(
                                            <li className="flex justify-between items-center py-6" key={index}>
                                                <div className="flex items-center">
                                                    <Image src={item.image} width={48} height={32} className="rounded shadow dark:shadow-gray-800 w-12" alt="" />
    
                                                    <div className="ms-3">
                                                        <p className="font-semibold">{item.title}</p>
                                                        <p className="text-slate-400 text-sm">{item.time}</p>
                                                    </div>
                                                </div>
    
                                                <div>
                                                    <Link href="#" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center bg-red-600/5 hover:bg-red-600 border-red-600/10 hover:border-red-600 text-red-600 hover:text-white rounded-full"><Icon.Trash2 className="h-4 w-4"></Icon.Trash2></Link>
                                                </div>
                                            </li>
                                        )
                                    })}

                                    <PaymentModal/>
                                </ul>
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