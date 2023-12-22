import React from 'react'
import Link from "next/link"
import Image from "next/image"

import Navbar from '../componets/Navbar/navbar'
import Footer from '../componets/Footer/footer'
import Switcher from '../componets/switcher'
import CookieModal from '../componets/cookieModal'
import TeamData from '../componets/team'
import Blog from '../componets/blog'
import VideoModal from '../componets/event/videoModal'
import Cta from '../componets/event/cta'
import CtaTwo from '../componets/event/ctaTwo'
import Tab from '../componets/event/tab'

import {FaRegEnvelope,BsCheckCircle,GoClock,PiMapPinLight} from '../assets/icons/icons';

export default function IndexEvent(){
   
    return(
        <>
        <Navbar navClass="nav-light" />
        <section className="relative table w-full py-36 lg:py-64  bg-no-repeat bg-center bg-cover" style={{backgroundImage:"url('/images/event/bg.jpg')"}}>
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/90 to-fuchsia-600/90"></div>
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                    <div className="lg:col-span-8 md:col-span-7 md:order-1 order-2">
                        <h5 className="text-xl text-white/60 mb-3">October 11, 2022</h5>
                        <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-white">Join Our <br /> Web Design Seminar</h4>
                        <p className="text-white/60 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                        <div className="mt-8">
                            <Link href="/#ticket" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"><FaRegEnvelope  className="me-2 text-sm"/> Buy Ticket</Link>
                        </div>
                    </div>
                    <div className="lg:col-span-4 md:col-span-5 md:text-center md:order-2 order-1">
                       <VideoModal/>
                    </div>
                </div>
            </div>
        </section>
        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="md:col-span-6">
                        <div className="grid grid-cols-12 gap-4 items-center">
                            <div className="col-span-7">
                                <div className="grid grid-cols-1 gap-4">
                                    <Image src="/images/event/1.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="shadow rounded-lg" alt="" />
                                </div>
                            </div>

                            <div className="col-span-5">
                                <div className="grid grid-cols-1 gap-4">
                                    <Image src="/images/event/2.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}}  className="shadow rounded-lg" alt="" />

                                    <div className="w-28 h-28 bg-indigo-600/10 rounded-lg"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-6">
                        <div className="lg:ms-5">
                            <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Outpace Your Competition</h6>
                            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Get access to the full <br /> conference experience.</h3>

                            <p className="text-slate-400 max-w-xl mb-6">Get instant helpful resources about anything on the go, easily implement secure money transfer solutions, boost your daily efficiency, connect to other app users and create your own Techwind network, and much more with just a few taps. commodo consequat. Duis aute irure.</p>

                            <div className="flex mt-6">
                                <PiMapPinLight className="text-indigo-600 text-4xl me-4 mt-2"/>
                                <div className="">
                                    <h5 className="text-xl font-semibold mb-0">Location</h5>
                                    <p className="text-slate-400 mt-2">C/54 Northwest Freeway, <br /> Suite 558, Houston, <br /> USA 485</p>
                                </div>
                            </div>

                            <div className="flex mt-6">
                                <GoClock className="text-indigo-600 text-3xl me-4 mt-2"/>
                                <div className="">
                                    <h5 className="text-xl font-semibold mb-0">Time</h5>
                                    <p className="text-slate-400 mt-2">October 11, 2022 <br /> 9:00A.M. - 12:00P.M.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Event Speakers</h6>
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Meet Our Speakers</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>
                <TeamData/>
            </div>
        </section>
       <CtaTwo/>
        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Event Schedules</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <Tab/>
            </div>
        </section>
       <Cta/>

        <section className="relative md:py-24 py-16" id="ticket">
            <div className="container relative">
                <div className="grid lg:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="lg:col-span-5">
                        <div className="lg:text-start text-center">
                            <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Secure Your Place Now</h6>

                            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">This event is for you. <br /> Buy tickets now!</h3>

                            <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>

                    <div className="lg:col-span-7 mt-8 lg:mt-0">
                        <div className="lg:ms-8">
                            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-[30px]">
                                <div className="group border-b-[3px] dark:border-gray-700 relative shadow dark:shadow-gray-800 rounded-md md:scale-110 z-3 bg-white dark:bg-slate-900">
                                    <div className="p-6 py-8">
                                        <h6 className="font-bold uppercase mb-5 text-indigo-600">Personal</h6>

                                        <div className="flex mb-5">
                                            <span className="text-xl font-semibold">$</span>
                                            <span className="price text-4xl font-semibold mb-0">09</span>
                                            <span className="text-xl font-semibold self-end mb-1">/event</span>
                                        </div>

                                        <ul className="list-none  text-slate-400">
                                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/>Full Access</li>
                                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/>Source Files</li>
                                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/>Free Appointments</li>
                                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/>Enhanced Security</li>
                                        </ul>
                                        <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Get Started</Link>
                                    </div>
                                </div>

                                <div className="group border-b-[3px] dark:border-gray-700 relative shadow dark:shadow-gray-800 rounded-md z-2 bg-gray-50 dark:bg-slate-800">
                                    <div className="p-6 py-8 md:ps-10">
                                        <h6 className="font-bold uppercase mb-5 text-indigo-600">Business</h6>

                                        <div className="flex mb-5">
                                            <span className="text-xl font-semibold">$</span>
                                            <span className="price text-4xl font-semibold mb-0">149</span>
                                            <span className="text-xl font-semibold self-end mb-1">/event</span>
                                        </div>

                                        <ul className="list-none  text-slate-400">
                                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/>Full Access</li>
                                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/>Source Files</li>
                                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/>Free Appointments</li>
                                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/>Enhanced Security</li>
                                        </ul>
                                        <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Try it Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container relative md:mt-24 mt-16">
                <Blog/>
            </div>
        </section>

        <Footer/>
        <Switcher/>
        <CookieModal/>
        </>
    )
}