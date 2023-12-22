import React from 'react'
import Link from "next/link"

import Navbar from '../componets/Navbar/navbar';
import Footer from '../componets/Footer/footer';
import Switcher from '../componets/switcher';
import GetInTuct from '../componets/getInTuch';
import Faq from '../componets/faq';

import {MdKeyboardArrowRight} from "react-icons/md"

export default function HelpcenterFaq(){

    return(
        <>
        <Navbar navClass="nav-light"/>

        <section className="relative table w-full py-36  bg-center bg-no-repeat bg-cover" style={{backgroundImage:"url('/images/helpcenter.jpg')"}}>
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 className="md:text-4xl text-3xl md:leading-normal tracking-wide leading-normal font-medium text-white">Frequently Asked Questions</h3>

                </div>
            </div>

            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-flex space-x-1">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Techwind</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/helpcenter-overview">Helpcenter</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">FAQs</li>
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

        <section className="relative md:py-24 py-16 ">
            <Faq/>

           <GetInTuct/>
        </section>

        <Footer/>
        <Switcher/>
        </>
    )
}