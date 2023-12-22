import React from 'react'
import Link from "next/link"
import Image from "next/image"

import Navbar from '../componets/Navbar/navbar'
import Footer from '../componets/Footer/footer'
import Switcher from '../componets/switcher'
import CookieModal from '../componets/cookieModal'
import CompanyLogo from '../componets/companyLogo'
import Blog from '../componets/blog'
import VideoModal from '../componets/videoModal/videoModal'
import Services from '../componets/insurance/services'
import Accordion from '../componets/insurance/accordion'
import Tab from '../componets/insurance/tab'
import Cta from '../componets/insurance/cta'
import Counter from '../componets/insurance/counter'

export default function Insurance(){
    return(
        <>
        <Navbar/>
        <section className="relative table w-full md:py-44 py-36 bg-gray-50 dark:bg-slate-800">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                    <div className="md:col-span-7">
                        <div className="md:me-6">
                            <div className="bg-white dark:bg-slate-900 text-slate-400 py-2 px-4 inline-flex items-center font-medium rounded-full shadow dark:shadow-gray-800"><span className="bg-indigo-600 text-white text-[12px] font-bold px-2.5 py-0 rounded-full me-2">Techwind</span> Get an insurance</div>
                            <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 mt-4">Insurance makes <br /> your life your better</h4>
                            <p className="text-slate-400 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                            <div className="mt-6">
                                <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2">Request a Quote</Link>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-5">
                        <div className="relative">
                            <Image src="/images/insurance/hero.png" width={0} height={0} sizes='100vw' style={{height:"auto", width:"100%"}} className="rounded-lg shadow-md dark:shadow-gray-800" alt="" />
                           <VideoModal/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 items-end">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold"><span className="text-indigo-600">Get the right protection</span> <br /> and move forward</h3>
                    <p className="text-slate-400 max-w-xl">Explore and learn more about everything from machine learning and global payments to scaling your team.</p>
                </div>
            </div>

            <div className="container-fluid relative mt-8">
                <div className="grid grid-cols-1 mt-8">
                    <Services/>
                </div>
            </div>
        </section>

        <section className="py-36 w-full table relative bg-indigo-600">
            <div className="absolute inset-0 bg-bottom bg-no-repeat bg-cover" style={{backgroundImage:"url('/images/insurance/cta.png')"}}></div>
            <div className="container relative">
                <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    <div className="order-2 lg:order-1 lg:mt-0 mt-8">
                        <div className="lg:me-6 text-center lg:text-start">
                            <h3 className="mb-4 md:text-4xl text-3xl lg:leading-normal leading-normal text-white font-semibold">Compare insurance packages <br /> and obtain the best offer</h3>

                            <p className="text-white/80 max-w-xl mx-auto lg:ms-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>

                            <div className="mt-6">
                                <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-slate-100 hover:bg-slate-200 border-slate-100 hover:border-slate-200 text-indigo-600 rounded-md me-2 mt-2">Get a custom plan</Link>
                            </div>
                        </div>
                    </div>

                    <Counter/>
                </div>
            </div>
        </section>

        <section className="py-6 border-b border-gray-100 dark:border-gray-700">
            <div className="container relative">
                <CompanyLogo/>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    <div className="relative">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold"><span className="text-indigo-600">Insurance</span> for your <br /> everyday needs</h3>
                        <p className="text-slate-400 max-w-xl">Explore and learn more about everything from machine learning and global payments to scaling your team.</p>

                        <div className="mt-6">
                            <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2">Get started</Link>
                        </div>
                    </div>

                 <Accordion/>
                </div>
            </div>
            <Tab/>
        </section>

        <Cta/>

        <Blog className="container relative md:mt-24 mt-16 mb-16" id={""} />

        <Footer/>
        <Switcher/>
        <CookieModal/>
        </>
    )
}