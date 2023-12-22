import React from 'react'
import Link from "next/link"
import Image from "next/image"

import EcommerceNavbar from '../componets/Navbar/ecommerceNavbar'
import Switcher from '../componets/switcher'
import MobileApp from '../componets/mobileApp'
import ShopFooter from '../componets/Footer/shopFooter'

import {MdKeyboardArrowRight} from "../assets/icons/icons"
import AccountingTab from '../componets/shop/accountingTab'

export default function ShopAccount(){
   
    return(
        <>
        <EcommerceNavbar/>
        <section className="relative table w-full py-20 lg:py-24 bg-gray-50 dark:bg-slate-800">
            <div className="container relative">
                <div className="grid grid-cols-1 mt-14">
                    <h3 className="text-3xl leading-normal font-semibold">My Account</h3>
                </div>

                <div className="relative mt-3">
                    <ul className="tracking-[0.5px] mb-0 inline-flex space-x-1">
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600"><Link href="/index-shop">Techwind</Link></li>
                        <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5"><MdKeyboardArrowRight className="text-xl"/></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-indigo-600"aria-current="page">My Account</li>
                    </ul>
                </div>
            </div>
        </section>
        <section className="relative md:py-24 py-16">
            <div className="container">
                <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-[30px]">
                    <div className="lg:col-span-3 md:col-span-5">
                        <div className="flex items-center">
                            <Image src="/images/client/05.jpg" width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt="" />
                            <div className="ms-2">
                                <p className="font-semibold text-slate-400">Hello,</p>
                                <h5 className="text-lg font-semibold">Cally Joseph</h5>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-9 md:col-span-7">
                        <p className="text-slate-400 max-w-xl">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                   <AccountingTab/>
                </div>
            </div>

            <MobileApp/>
        </section>
        <ShopFooter/>
        <Switcher/>
        </>
    )
}