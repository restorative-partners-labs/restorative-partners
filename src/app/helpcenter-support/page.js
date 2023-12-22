import React from 'react'
import Link from "next/link"

import Navbar from '../componets/Navbar/navbar';
import Footer from '../componets/Footer/footer';
import Switcher from '../componets/switcher';

import * as Icon from 'react-feather';

import {MdKeyboardArrowRight,FaArrowRight,} from "../assets/icons/icons"

import { helpData } from '../Data/dataTwo';

export default function HelpcenterSupport(){
    
    return(
        <>
        <Navbar navClass="nav-light"/>

        <section className="relative table w-full py-36 bg-center bg-no-repeat bg-cover" style={{backgroundImage:"url('/images/helpcenter.jpg')"}}>
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 className="md:text-4xl text-3xl md:leading-normal tracking-wide leading-normal font-medium text-white">Submit Your Support Request</h3>
                </div>
            </div>

            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-flex space-x-1">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Techwind</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/helpcenter-overview">Helpcenter</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Support</li>
                </ul>
            </div>
        </section>

        <div className="relative">
            <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-gray-50 dark:text-slate-800">
                <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px] mx-auto text-center">
                    <div className="lg:col-start-3 lg:col-span-8 md:col-start-2 md:col-span-10">
                        <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 p-6">
                        <form>
                                <div className="grid lg:grid-cols-12 lg:gap-6">
                                    <div className="lg:col-span-6 mb-5">
                                        <div className="text-start">
                                            <label htmlFor="name" className="font-semibold">Your Name:</label>
                                            <div className="form-icon relative mt-2">
                                                <Icon.User className="w-4 h-4 absolute top-3 start-4"></Icon.User>
                                                <input name="name" id="name" type="text" className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Name :" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="lg:col-span-6 mb-5">
                                        <div className="text-start">
                                            <label htmlFor="email" className="font-semibold">Your Email:</label>
                                            <div className="form-icon relative mt-2">
                                                <Icon.Mail className="w-4 h-4 absolute top-3 start-4"></Icon.Mail>
                                                <input name="email" id="email" type="email" className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Email :" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1">
                                    <div className="mb-5">
                                        <div className="text-start">
                                            <label htmlFor="subject" className="font-semibold">Your Question:</label>
                                            <div className="form-icon relative mt-2">
                                                <Icon.Book className="w-4 h-4 absolute top-3 start-4"></Icon.Book>
                                                <input name="subject" id="subject" className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Subject :" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-5">
                                        <div className="text-start">
                                            <label htmlFor="comments" className="font-semibold">Your Comment:</label>
                                            <div className="form-icon relative mt-2">
                                                <Icon.MessageCircle className="w-4 h-4 absolute top-3 start-4"></Icon.MessageCircle>
                                                <textarea name="comments" id="comments" className="form-input ps-11 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Message :"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" id="submit" name="send" className="py-2 px-5 font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md justify-center flex items-center">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Find The Help You Need</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-6 gap-[30px]">
                    {helpData.map((item,index)=>{
                        let Icons = item.icon
                        return(
                            <div className="text-center px-6 mt-6" key={index}>
                                <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                                    <Icons className="h-[30px] w-[30px]"/>
                                </div>

                                <div className="content mt-7">
                                    <Link href="/helpcenter-faqs" className="title h5 text-lg font-medium hover:text-indigo-600">{item.title}</Link>
                                    <p className="text-slate-400 mt-3">{item.desc}</p>

                                    <div className="mt-5">
                                        <Link href="/helpcenter-faqs" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </section>

        <Footer/>
        <Switcher/>
        </>
    )
}