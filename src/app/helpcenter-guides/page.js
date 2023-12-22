import React from 'react'
import Link from "next/link"

import Navbar from '../componets/Navbar/navbar';
import Footer from '../componets/Footer/footer';
import Switcher from '../componets/switcher';
import GetInTuct from '../componets/getInTuch';

import {MdKeyboardArrowRight} from "../assets/icons/icons"

export default function HelpcenterGuides(){
    return(
        <>
        <Navbar navClass="nav-light"/>

        <section className="relative table w-full py-36 bg-center bg-no-repeat bg-cover" style={{backgroundImage:"url('/images/helpcenter.jpg')"}}>
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 className="md:text-4xl text-3xl md:leading-normal tracking-wide leading-normal font-medium text-white">Guides & Support</h3>

                </div>
            </div>

            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-flex space-x-1">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Techwind</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/helpcenter-overview">Helpcenter</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Guides</li>
                </ul>
            </div>
        </section>

        <div className="relative">
            <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
                <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <section className="relative md:py-24 py-16">
            <div className="container relative md:pb-24 pb-16">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">


                    <div className="">
                        <h5 className="font-semibold text-xl">Getting started</h5>
                        <ul className="list-none mt-4">
                            
                            <li className="mt-2"><Link href="#" className="text-slate-400"><i className="mdi mdi-arrow-right text-indigo-600 me-2"></i>Deciding to purchase</Link></li>
                            <li className="mt-2"><Link href="#" className="text-slate-400"><i className="mdi mdi-arrow-right text-indigo-600 me-2"></i>List your space</Link></li>
                            <li className="mt-2"><Link href="#" className="text-slate-400"><i className="mdi mdi-arrow-right text-indigo-600 me-2"></i>Landing an experience or adventure</Link></li>
                            <li className="mt-2"><Link href="#" className="text-slate-400"><i className="mdi mdi-arrow-right text-indigo-600 me-2"></i>Top uses questions</Link></li>
                            
                        </ul>
                    </div>

                    <div className="">
                        <h5 className="font-semibold text-xl">Your calendar</h5>
                        <ul className="list-none mt-4">
                            <li className="mt-2"><Link href="#" className="text-slate-400"><i className="mdi mdi-arrow-right text-indigo-600 me-2"></i>Pricing & availability</Link></li>
                            <li className="mt-2"><Link href="#" className="text-slate-400"><i className="mdi mdi-arrow-right text-indigo-600 me-2"></i>Booking settings</Link></li>
                            <li className="mt-2"><Link href="#" className="text-slate-400"><i className="mdi mdi-arrow-right text-indigo-600 me-2"></i>Responding to enquiries & requests</Link></li>
                            <li className="mt-2"><Link href="#" className="text-slate-400"><i className="mdi mdi-arrow-right text-indigo-600 me-2"></i>Snoozing or deactivating your listing</Link></li>
                        </ul>
                    </div>

                    <div className="">
                        <h5 className="font-semibold text-xl">Your listings</h5>
                        <ul className="list-none mt-4">
                            <li className="mt-2"><Link href="#" className="text-slate-400"><i className="mdi mdi-arrow-right text-indigo-600 me-2"></i>Updating your listing</Link></li>
                            <li className="mt-2"><Link href="#" className="text-slate-400"><i className="mdi mdi-arrow-right text-indigo-600 me-2"></i>Neighbourhoods</Link></li>
                            <li className="mt-2"><Link href="#" className="text-slate-400"><i className="mdi mdi-arrow-right text-indigo-600 me-2"></i>Listing photos & photography</Link></li>
                            <li className="mt-2"><Link href="#" className="text-slate-400"><i className="mdi mdi-arrow-right text-indigo-600 me-2"></i>Techwind Plus</Link></li>
                            <li className="mt-2"><Link href="#" className="text-slate-400"><i className="mdi mdi-arrow-right text-indigo-600 me-2"></i>API-connected software</Link></li>
                        </ul>
                    </div>

                    <div className="">
                        <h5 className="font-semibold text-xl">How payouts work</h5>
                        <ul className="list-none mt-4">
                            <li className="mt-2"><Link href="#" className="text-slate-400"><i className="mdi mdi-arrow-right text-indigo-600 me-2"></i>Getting paid</Link></li>
                            <li className="mt-2"><Link href="#" className="text-slate-400"><i className="mdi mdi-arrow-right text-indigo-600 me-2"></i>Adding payout info</Link></li>
                            <li className="mt-2"><Link href="#" className="text-slate-400"><i className="mdi mdi-arrow-right text-indigo-600 me-2"></i>Your payout status</Link></li>
                            <li className="mt-2"><Link href="#" className="text-slate-400"><i className="mdi mdi-arrow-right text-indigo-600 me-2"></i>Donations</Link></li>
                            <li className="mt-2"><Link href="#" className="text-slate-400"><i className="mdi mdi-arrow-right text-indigo-600 me-2"></i>Taxes</Link></li>
                        </ul>
                    </div>

                    <div className="">
                        <h5 className="font-semibold text-xl">Your reservations</h5>
                        <ul className="list-none mt-4">
                            <li className="mt-2"><Link href="#" className="text-slate-400"><i className="mdi mdi-arrow-right text-indigo-600 me-2"></i>Techwind safely</Link></li>
                            <li className="mt-2"><Link href="#" className="text-slate-400"><i className="mdi mdi-arrow-right text-indigo-600 me-2"></i>Techwind Experiences and Adventures</Link></li>
                            <li className="mt-2"><Link href="#" className="text-slate-400"><i className="mdi mdi-arrow-right text-indigo-600 me-2"></i>Changing a reservation</Link></li>
                            <li className="mt-2"><Link href="#" className="text-slate-400"><i className="mdi mdi-arrow-right text-indigo-600 me-2"></i>Cancelling a reservation</Link></li>
                            <li className="mt-2"><Link href="#" className="text-slate-400"><i className="mdi mdi-arrow-right text-indigo-600 me-2"></i>Long-term reservations</Link></li>
                        </ul>
                    </div>

                    <div className="">
                        <h5 className="font-semibold text-xl">Reservation help</h5>
                        <ul className="list-none mt-4">
                            <li className="mt-2"><Link href="#" className="text-slate-400"><i className="mdi mdi-arrow-right text-indigo-600 me-2"></i>Help with a reservation or guest</Link></li>
                            <li className="mt-2"><Link href="#" className="text-slate-400"><i className="mdi mdi-arrow-right text-indigo-600 me-2"></i>Guest cancellations</Link></li>
                        </ul>
                    </div>

                    <div className="">
                        <h5 className="font-semibold text-xl">Your account</h5>
                        <ul className="list-none mt-4">
                            <li className="mt-2"><Link href="#" className="text-slate-400"><i className="mdi mdi-arrow-right text-indigo-600 me-2"></i>Your profile</Link></li>
                            <li className="mt-2"><Link href="#" className="text-slate-400"><i className="mdi mdi-arrow-right text-indigo-600 me-2"></i>Account security</Link></li>
                            <li className="mt-2"><Link href="#" className="text-slate-400"><i className="mdi mdi-arrow-right text-indigo-600 me-2"></i>Identification & verifications</Link></li>
                            <li className="mt-2"><Link href="#" className="text-slate-400"><i className="mdi mdi-arrow-right text-indigo-600 me-2"></i>Reviews</Link></li>
                            <li className="mt-2"><Link href="#" className="text-slate-400"><i className="mdi mdi-arrow-right text-indigo-600 me-2"></i>Superhost status</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

           <GetInTuct/>
        </section>
        <Footer/>
        <Switcher/>
        </>
    )
}