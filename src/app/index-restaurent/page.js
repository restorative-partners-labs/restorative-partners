import React from 'react'
import Link from "next/link"
import Image from "next/image"

import Navbar from '../componets/Navbar/navbar'
import CafeFooter from '../componets/Footer/cafeFooter'
import Switcher from '../componets/switcher'
import CookieModal from '../componets/cookieModal'
import ClientsOne from '../componets/clientsOne'
import Manu from '../componets/restaurent/manu'
import FoodItem from '../componets/restaurent/foodItem'

import {IoRestaurantOutline} from "react-icons/io5"
import { FaArrowRight } from '../assets/icons/icons'
import { restaurentAboutData } from '../Data/data';


export default function Restaurent(){
    return(
        <>
        <Navbar navClass="nav-light"/>

        <section className="flex md:h-screen py-36 items-center bg-no-repeat bg-fixed bg-top bg-cover" style={{backgroundImage:"url('/images/food/bg01.jpg')"}}>
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 justify-center text-center">
                    <div className="">
                        <h1 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-6xl text-white mb-5">Amazing Food, Fresh <br /> Products & Wine</h1>
                        <p className="text-white/70 text-lg max-w-xl mx-auto">Beatae cum eius, animi itaque aliquid ducimus facere dicta, vitae ipsam maiores nam sit blanditiis, quisquam expedita?</p>

                        <div className="mt-8">
                            <Link href="/#table" className="py-2 px-5 inline-flex font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"><IoRestaurantOutline className="me-1"/> Book A Table</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="lg:col-span-5 md:col-span-6">
                        <Image src="/images/food/about.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="rounded-md shadow dark:shadow-gray-800" alt="" />
                    </div>

                    <div className="lg:col-span-7 md:col-span-6">
                        <div className="ms-6">
                            <p className="text-slate-400 text-lg mb-0">The phrasal sequence of the Lorem Ipsum text is now so widespread and commonplace that many DTP programmes can generate dummy text using the starting sequence Lorem ipsum.</p>

                            <h4 className="my-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Food is our common ground, <br /> a universal experience.</h4>

                            <p className="text-slate-400">Fortunately, the phrase Lorem Ipsum is now recognized by electronic pre-press systems and, when found, an alarm can be raised. This avoids a publication going to print with overlooked dummy text.</p>

                            <div className="mt-6">
                                <Image src="/images/sign.png" width={128} height={32} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-6 gap-[30px]">
                    {restaurentAboutData.map((item,index)=>{
                        let Icons = item.icon
                        return(
                            <div key={index} className="md:px-6 transition duration-500 rounded-2xl text-center">
                                <div className="w-20 h-20 bg-indigo-600/5 mx-auto text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800">
                                    <Icons className='w-8 h-8'/>
                                </div>
    
                                <div className="content mt-7">
                                    <Link href="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">{item.title}</Link>
                                    <p className="text-slate-400 mt-3">{item.desc}</p>
    
                                    <div className="mt-5">
                                        <Link href="/page-services" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>

        <section className="relative py-36 bg-no-repeat bg-fixed bg-top bg-cover" style={{backgroundImage:"url('/images/food/menu.jpg')"}}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
            <div className="absolute bottom-0 start-0 end-0 text-center px-3">
                <h5 className="text-slate-400 text-xl leading-normal font-semibold">Our Menu</h5>
                <h4 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-white mb-5">Choose your mixture & order now!</h4>
            </div>
        </section>

        <section className="relative md:py-24 py-16 md:pt-12 bg-no-repeat bg-top" style={{backgroundImage:"url('/images/food/food-menu.png')"}}>
           <Manu/>
        </section>

        <section className="relative md:py-24 py-16 bg-no-repeat bg-fixed bg-top bg-cover" id="table" style={{backgroundImage:"url('/images/food/cta.jpg')"}}>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="container relative">
                <div className="flex justify-end">
                    <div className="lg:w-1/2 md:w-2/3">
                        <div className="bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md lg:p-12 p-6 lg:ms-12">
                            <div className="section-title mb-4">
                                <span className="bg-indigo-600/5 text-indigo-600 text-xs font-bold px-2.5 py-0.5 rounded h-5">Reservation</span>
                                <h4 className="text-4xl font-bold uppercase my-4">Book A Table</h4>
                                <p className="text-slate-400 mx-auto para-desc">We make it a priority to offer flexible services to accomodate your needs</p>
                            </div>

                            <form>
                                <div className="grid md:grid-cols-2 gap-4 mt-6">
                                    <div>
                                        <label className="font-semibold">Your Name</label>
                                        <input name="name" id="name" type="text" className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="First Name :" />
                                    </div>

                                    <div>
                                        <label className="font-semibold">Your Email</label>
                                        <input name="email" id="email" type="email" className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Your email :" />
                                    </div>

                                    <div>
                                        <label className="font-semibold">Phone no.</label>
                                        <input name="number" type="number" id="phone-number" className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Phone no. :" />
                                    </div>

                                    <div>
                                        <label className="font-semibold">Person</label>
                                        <input type="number" min="0" autoComplete="off" id="adult" className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" required="" placeholder="Person :" />
                                    </div>

                                    <div>
                                        <label className="font-semibold">Date</label>
                                        <input name="date" type="text" className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 start" placeholder="(ex: mm/ dd/ yy)" />
                                    </div>

                                    <div>
                                        <label className="font-semibold">Time</label>
                                        <input name="time" type="text" id="input-time" className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 timepicker" placeholder="(ex: 8:00 p.m)" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 mt-4">
                                    <input type="submit" id="submit" name="send" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full" value="Book a table" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16 bg-indigo-600/5">
            <div className=" relative">
                <ClientsOne clients="Happy Clients"/>
            </div>
        </section>

        <div className="container-fluid relative">
            <FoodItem/>
        </div>
        
        <CafeFooter/>
        <Switcher/>
        <CookieModal/>
        </>
    )
}