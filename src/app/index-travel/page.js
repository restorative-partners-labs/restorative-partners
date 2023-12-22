import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../componets/Navbar/navbar';
import Footer from '../componets/Footer/footer';
import CookieModal from '../componets/cookieModal';
import ClientsOne from '../componets/clientsOne';
import Switcher from '../componets/switcher';
import Destination from '../componets/travel/destination';
import Faq from '../componets/travel/faq';
import Counter from '../componets/travel/counter';

import {TbCurrencyDollar, LuSearch, LuCalendarDays} from '../assets/icons/icons'

import { travelBenefit } from '../Data/dataThree';
export default function IndexTravel(){

 return(
    <>
    <Navbar  navClass="nav-light" />
    <section className="relative md:flex md:h-screen items-center md:py-0 pt-36 pb-56 bg-[url('/images/travel/bg.jpg')] bg-no-repeat bg-center bg-cover bg-fixed" style={{backgroundImage:"url('/images/travel/bg.jpg')"}}>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-slate-900/40"></div>
        <div className="container relative">
            <div className="grid grid-cols-1 mt-10">
                <h4 className="lg:leading-normal leading-normal text-white text-4xl lg:text-5xl mb-5 font-bold">Find Your <br/> Favorite Place Here!</h4>
                <p className="text-slate-400 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>
            
                <div className="grid lg:grid-cols-12 grid-cols-1" id="reserve-form">
                    <div className="lg:col-span-10 mt-8">
                        <div className="bg-white dark:bg-slate-900 border-0 shadow rounded p-3">
                            <form action="#">
                                <div className="registration-form relative text-dark text-start">
                                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6 lg:divide-x-[1px] lg:divide-gray-200 lg:dark:divide-gray-700">
                                        <div className="filter-search-form relative">
                                            <LuSearch className="absolute top-[48%] -translate-y-1/2 start-3 z-1 text-indigo-600 text-[20px]"/>
                                            <input name="name" type="text" id="location" className="form-input lg:rounded-t-sm lg:rounded-e-none lg:rounded-b-none lg:rounded-s-sm lg:outline-0 w-full filter-input-box bg-gray-50 dark:bg-slate-800 border-0 focus:ring-0" placeholder="Location"/>
                                        </div>

                                        <div className="filter-search-form relative">
                                            <TbCurrencyDollar className="absolute top-[48%] -translate-y-1/2 start-3 z-1 text-indigo-600 text-[20px]"/>
                                            <i ></i>
                                            <input name="name" type="number" id="job-keyword" className="form-input lg:rounded-t-sm lg:rounded-e-none lg:rounded-b-none lg:rounded-s-sm lg:outline-0 w-full filter-input-box bg-gray-50 dark:bg-slate-800 border-0 focus:ring-0" placeholder="Budget"/>
                                        </div>
                                    
                                        <div className="filter-search-form relative">
                                            <LuCalendarDays className="absolute top-[48%] -translate-y-1/2 start-3 z-1 text-indigo-600 text-[20px]"/>
                                            <input name="name" type="text" id="job-keyword" className="form-input lg:rounded-t-sm lg:rounded-e-none lg:rounded-b-none lg:rounded-s-sm lg:outline-0 w-full filter-input-box bg-gray-50 dark:bg-slate-800 border-0 focus:ring-0 start" placeholder="Select date"/>
                                        </div>

                                        <input type="submit" id="search" name="search" style={{height:'60px'}} className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white searchbtn lg:rounded-t-none lg:rounded-e-sm lg:rounded-b-sm lg:rounded-s-none rounded-lg w-100" value="Search"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container absolute bottom-0 start-0 end-0">
            <div className="grid grid-cols-1">
                <div className="p-6 border-t border-dashed border-white/30">
                   <Counter/>
                </div>
            </div>
        </div>
    </section>

    <section className="relative md:py-24 py-16">
        <div className="container relative">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Benefit for Traveller</h3>

                <p className="text-slate-400 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                {travelBenefit.map((item,index)=>{
                    let Icons = item.icon
                    return(
                        <div key={index} className="group p-6 rounded-lg shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 hover:-translate-y-2 duration-500">
                            <div
                                className="w-16 h-16 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white border-2 border-indigo-600/20 text-indigo-600 rounded-lg text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 duration-500">
                                <Icons/>
                            </div>

                            <div className="content mt-7">
                                <Link href="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">{item.title}</Link>
                                <p className="text-slate-400 mt-3">{item.desc}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

        <Destination/>

        <div className="relative md:mt-24 mt-16">
            <ClientsOne/>
        </div>

        <div className="container relative md:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Frequently Asked Questions</h3>

                <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
            </div>

            <div className="relative grid md:grid-cols-12 grid-cols-1 items-center mt-8 gap-[30px]">
                <div className="md:col-span-6">
                    <Image src='/images/travel/7.jpg' width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} placeholder='blur' blurDataURL='/images/travel/7.jpg' className="rounded-md shadow dark:shadow-gray-800" alt=""/>
                </div>

                <div className="md:col-span-6">
                    <Faq/>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    <CookieModal/>
    <Switcher/>
    </>
 )
}