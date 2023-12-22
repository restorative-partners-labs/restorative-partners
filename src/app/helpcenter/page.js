import React from 'react'
import Link from "next/link"

import Navbar from '../componets/Navbar/navbar';
import Footer from '../componets/Footer/footer';
import Switcher from '../componets/switcher';
import GetInTuct from '../componets/getInTuch';

import * as Icon from 'react-feather';
import {MdKeyboardArrowRight,FaArrowRight} from "../assets/icons/icons"

import { helpData } from '../Data/dataTwo';

export default function Helpcenter(){
   
    return(
        <>
        <Navbar navClass="nav-light"/>

        <section className="relative table w-full py-36 bg-center bg-no-repeat bg-cover" style={{backgroundImage:"url('/images/helpcenter.jpg')"}}>
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 className="mb-6 md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Hello ! <br /> How can we help you?</h3>

                    <div className="text-center subcribe-form mt-4 pt-2">
                        <form className="relative mx-auto max-w-xl">
                            <input type="text" id="help" name="name" className="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white opacity-70 dark:bg-slate-900 border border-gray-100 dark:border-gray-700" placeholder="Search your questions or topic..." />
                            <button type="submit" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle transition duration-500 ease-in-out text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-full">Search</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-flex space-x-1">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Techwind</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Helpcenter</li>
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
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Find The Help You Need</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-6 gap-[30px]">
                    {helpData.map((item,index)=>{
                        let Ions = item.icon
                        return(
                            <div key={index} className="text-center px-6 mt-6">
                                <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                                    <Ions className="w-7 h-7"/>
                                </div>
    
                                <div className="content mt-7">
                                    <Link href={item.link} className="title h5 text-lg font-medium hover:text-indigo-600">{item.title}</Link>
                                    <p className="text-slate-400 mt-3">{item.desc}</p>
    
                                    <div className="mt-5">
                                        <Link href={item.link} className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="container relative md:py-24 py-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Get Started</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    <div className="flex">
                        <Icon.HelpCircle className="fea icon-ex-md text-indigo-600 me-3"></Icon.HelpCircle>
                        <div className="flex-1">
                            <h5 className="mb-2 text-xl font-semibold">How our <span className="text-indigo-600">Techwind</span> work ?</h5>
                            <p className="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.</p>
                        </div>
                    </div>

                    <div className="flex">
                        <Icon.HelpCircle className="fea icon-ex-md text-indigo-600 me-3"></Icon.HelpCircle>
                        <div className="flex-1">
                            <h5 className="mb-2 text-xl font-semibold"> What is the main process open account ?</h5>
                            <p className="text-slate-400">If the distribution of letters and words is random, the reader will not be distracted from making a neutral judgement on the visual impact</p>
                        </div>
                    </div>

                    <div className="flex">
                        <Icon.HelpCircle className="fea icon-ex-md text-indigo-600 me-3"></Icon.HelpCircle>
                        <div className="flex-1">
                            <h5 className="mb-2 text-xl font-semibold"> How to make unlimited data entry ?</h5>
                            <p className="text-slate-400">Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.</p>
                        </div>
                    </div>

                    <div className="flex">
                        <Icon.HelpCircle className="fea icon-ex-md text-indigo-600 me-3"></Icon.HelpCircle>
                        <div className="flex-1">
                            <h5 className="mb-2 text-xl font-semibold"> Is <span className="text-indigo-600">Techwind</span> safer to use with my account ?</h5>
                            <p className="text-slate-400">The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to proper Latin.</p>
                        </div>
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