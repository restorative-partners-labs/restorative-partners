import React from 'react'
import Link from "next/link"
import Image from "next/image"

import Navbar from '../componets/Navbar/navbar'
import Footer from '../componets/Footer/footer'
import Switcher from '../componets/switcher'
import CookieModal from '../componets/cookieModal'

import * as Icon from 'react-feather';
import {MdKeyboardArrowRight,FaRegComments} from "../assets/icons/icons"
import { RecentPostData,topicsData } from '../Data/dataTwo'

export default function fourmsTopic(){
    
    return(
        <>
        <Navbar/>

        <section className="relative table w-full py-32 lg:py-40 bg-gray-50 dark:bg-slate-800">
            <div className="container relative">
                <div className="grid grid-cols-1 text-center mt-10">
                    <h3 className="text-3xl leading-normal font-medium">Techwind Announcements</h3>
                </div>
            </div>

            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-flex space-x-1">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600"><Link href="/">Techwind</Link></li>
                    <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600"><Link href="/index-forums">Forum</Link></li>
                    <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-indigo-600"aria-current="page">Techwind Announcements</li>
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
            <div className="container relative">
                <div className="grid lg:grid-cols-12 grid-cols-1 gap-[30px]">
                    <div className="lg:col-span-8">
                        <div className="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 rounded-md border border-gray-100 dark:border-slate-800">
                            <table className="w-full text-start">
                                <thead className="text-lg border-b border-gray-100 dark:border-slate-800">
                                    <tr>
                                        <th className="text-start py-6 px-4 font-semibold min-w-[300px]">Topics</th>
                                        <th className="text-end py-6 px-4 font-semibold min-w-[160px]">Comments</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {topicsData.map((item,index)=>{
                                        return(
                                            <tr className="border-b border-gray-100 dark:border-slate-800" key={index}>
                                                <th className="text-start p-4">
                                                    <div className="flex">
                                                        <FaRegComments className="text-indigo-600 text-2xl"/>
                                                        <div className="ms-2">
                                                            <Link href="/forums-comments" className="hover:text-indigo-600 text-lg">{item.title}</Link>
                                                            <p className="text-slate-400 font-normal">Write by: <Link href="#" className="text-indigo-600">{item.name}</Link></p>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td className="text-end p-4">3</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="lg:col-span-4 md:col-span-6">
                        <div className="sticky top-20">
                            <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center">Sign In</h5>
                            <form className="text-start mt-8">
                                <div className="grid grid-cols-1">
                                    <div className="mb-4">
                                        <label className="font-semibold" htmlFor="LoginEmail">Email Address:</label>
                                        <input id="LoginEmail" type="email" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="name@example.com" />
                                    </div>

                                    <div className="mb-4">
                                        <label className="font-semibold" htmlFor="LoginPassword">Password:</label>
                                        <input id="LoginPassword" type="password" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Password:" />
                                    </div>

                                    <div className="flex justify-between mb-4">
                                        <div className="flex items-center mb-0">
                                            <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2" type="checkbox" value="" id="RememberMe" />
                                            <label className="form-checkbox-label text-slate-400" htmlFor="RememberMe">Remember me</label>
                                        </div>
                                        <p className="text-slate-400 mb-0"><Link href="/auth-re-password" className="text-slate-400">Forgot password ?</Link></p>
                                    </div>

                                    <div className="mb-4">
                                        <input type="submit" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full" value="Login / Sign in" />
                                    </div>

                                    <div className="text-center">
                                        <span className="text-slate-400 me-2">Do not have an account ?</span> <Link href="/auth-signup" className="text-black dark:text-white font-bold inline-block">Sign Up</Link>
                                    </div>
                                </div>
                            </form>

                            <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8">Recent Reply</h5>
                            {RecentPostData.map((item,index)=>{
                                return(
                                    <div className="flex items-center mt-8" key={index}>
                                        <Image src={item.image} width={96} height={84} className="h-16 rounded-md shadow dark:shadow-gray-800" alt="" />
        
                                        <div className="ms-3">
                                            <Link href="#" className="font-semibold hover:text-indigo-600">{item.title}</Link>
                                            <p className="text-sm text-slate-400">1st May 2022</p>
                                        </div>
                                    </div>
                                )
                            })}

                            <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8">Social sites</h5>
                            <ul className="list-none text-center mt-8 space-x-1">
                                <li className="inline"><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Facebook className="h-4 w-4"></Icon.Facebook></Link></li>
                                <li className="inline"><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Instagram className="h-4 w-4"></Icon.Instagram></Link></li>
                                <li className="inline"><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Twitter className="h-4 w-4"></Icon.Twitter></Link></li>
                                <li className="inline"><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Linkedin className="h-4 w-4"></Icon.Linkedin></Link></li>
                                <li className="inline"><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.GitHub className="h-4 w-4"></Icon.GitHub></Link></li>
                                <li className="inline"><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Youtube className="h-4 w-4"></Icon.Youtube></Link></li>
                                <li className="inline"><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Gitlab className="h-4 w-4"></Icon.Gitlab></Link></li>
                            </ul>

                            <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8">Tagscloud</h5>
                            <ul className="list-none text-center mt-8 space-x-1">
                                <li className="inline-block m-2"><Link href="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Business</Link></li>
                                <li className="inline-block m-2"><Link href="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Finance</Link></li>
                                <li className="inline-block m-2"><Link href="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Marketing</Link></li>
                                <li className="inline-block m-2"><Link href="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Fashion</Link></li>
                                <li className="inline-block m-2"><Link href="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Bride</Link></li>
                                <li className="inline-block m-2"><Link href="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Lifestyle</Link></li>
                                <li className="inline-block m-2"><Link href="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Travel</Link></li>
                                <li className="inline-block m-2"><Link href="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Beauty</Link></li>
                                <li className="inline-block m-2"><Link href="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Video</Link></li>
                                <li className="inline-block m-2"><Link href="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Audio</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer/>
        <Switcher/>
        <CookieModal/>
        </>
    )
}