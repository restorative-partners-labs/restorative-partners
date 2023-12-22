import React from 'react'
import Link from "next/link"
import Image from "next/image"

import Navbar from '../componets/Navbar/navbar'
import Footer from '../componets/Footer/footer'
import Switcher from '../componets/switcher'
import CookieModal from '../componets/cookieModal'
import ClientsTwo from '../componets/clientsTwo'
import GetInTuct from '../componets/getInTuch'
import CompanyLogo from '../componets/companyLogo'
import CounterTwo from '../componets/consulting/counterTwo'
import ServiceFaq from '../componets/serviceFaq'

import * as Icon from 'react-feather';


import { discoverData } from '../Data/dataThree'

export default function IndexServices(){
    return(
        <>
        <Navbar/>

        <section className="relative table w-full pt-36 lg:pt-44 pb-32  bg-top bg-no-repeat bg-cover" style={{backgroundImage:"url('/images/home-shape.png')"}}>
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                    <div className="md:col-span-7">
                        <div className="md:me-6">
                            <h4 className="font-semibold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black dark:text-white">Find the perfect <br /> <span className="text-indigo-600">Professional</span> for you</h4>
                            <p className="text-slate-400 text-xl max-w-xl">Get free quotes within minutes</p>

                            <div className="subcribe-form z-1 mt-8">
                                <form className="relative mx-auto max-w-2xl">
                                    <Icon.Search className="w-5 h-5 absolute top-[47%] -translate-y-1/2 start-4"></Icon.Search>
                                    <input type="text" id="search_name" name="name" className="pt-4 pe-40 pb-4 w-full h-[50px] outline-none text-black dark:text-white rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 ps-12" placeholder="What service are you looking for?" />
                                    <button type="submit" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Search</button>
                                </form>
                                <p className="text-slate-400 max-w-xl mt-3"><span className="font-semibold">Popular:</span> House Cleaning, Web Design, Personal Trainers</p>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-5">
                        <Image src="/images/illustrator/services.svg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} alt="" />
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <CompanyLogo/>
            </div>
        </section>

        <section className="relative md:pb-24 pb-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-black dark:text-white">Discover Area</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    {discoverData.map((item,index)=>{
                        let Icons = item.icon
                        return(
                            <div key={index} className="group transition-all duration-500 ease-in-out text-center">
                                <div className="flex align-middle mx-auto justify-center items-center w-14 h-14 mt-1 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white border-2 border-indigo-600/20 text-indigo-600 rounded-lg text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                                    <Icons className="h-6 w-6"/>
                                </div>
                                <div className="mt-4">
                                    <Link href="#"  className="text-xl font-medium hover:text-indigo-600 duration-500 ease-in-out">{item.title}</Link>
                                    <p className="text-slate-400 mt-2">{item.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16 lg:pt-24 pt-16">
                <div className="absolute inset-0 opacity-25 dark:opacity-50  bg-no-repeat bg-center bg-cover" style={{backgroundImage:"url('/images/map.png')"}}></div>
                <div className="relative grid grid-cols-1 pb-8 text-center z-1">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-black dark:text-white">Trusted by more than 10K users</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>
                <CounterTwo/>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <ClientsTwo/>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Frequently Asked Questions</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>
                <ServiceFaq/>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <GetInTuct/>
            </div>
        </section>

        <Footer/>
        <Switcher/>
        <CookieModal/>
        </>
    )
}