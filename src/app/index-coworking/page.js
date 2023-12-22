import React from 'react'
import Link from "next/link"
import Image from "next/image"

import Navbar from '../componets/Navbar/navbar'
import Footer from '../componets/Footer/footer'
import Switcher from '../componets/switcher'
import CookieModal from '../componets/cookieModal'
import ClientsOne from '../componets/clientsOne'
import Blog from '../componets/blog'
import VideoModal from '../componets/videoModal/videoModal'
import Office from '../componets/co-working/office'
import WorkingTab from '../componets/co-working/workingTab'
import Contact from '../componets/co-working/contact'

import * as Icon from 'react-feather';

import {MdKeyboardArrowRight} from "../assets/icons/icons"
import { coworkAbout } from '../Data/dataThree'

export default function Coworking(){
    return(
        <>
        <Navbar navClass='nav-light'/>

        <section className="relative md:py-60 py-36 items-center">
            <div className="absolute top-0 start-0 w-full h-full z-0 pointer-events-none overflow-hidden">
                <iframe
                    src="https://www.youtube.com/embed/JsNvHJsufhI?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1"
                    className="absolute top-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 w-screen h-[56.25vw] min-h-screen min-w-[177.77vw]"
                    title="Embedded YouTube Video"
                ></iframe>
            </div>
            <div className="absolute inset-0 opacity-20  bg-no-repeat bg-center bg-cover" style={{backgroundImage:"url('/images/map.svg')"}}></div>
            <div className="absolute inset-0 bg-black/70"></div>

            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-10">
                    <Image src="/images/logo-icon-64.png" width={82} height={80} className="block mx-auto animate-[spin_10s_linear_infinite]" alt="" />
                    <h3 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 mt-10 text-white">Coworking Just Feels Right</h3>

                    <p className="text-slate-300 text-lg max-w-2xl mx-auto">Coworking spaces offer a wealth of advantages for self starters, including networking opportunities, daily structure, and increased productivity.</p>

                    <div className="subcribe-form z-1 mt-8">
                        <form className="relative mx-auto max-w-xl">
                            <Icon.MapPin className="w-5 h-5 absolute top-[48%] -translate-y-1/2 start-4"></Icon.MapPin>
                            <input type="text" id="search_name" name="name" className="pt-4 pe-40 pb-4 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 ps-12" placeholder="Washington, D.C." />
                            <button type="submit" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle transition duration-500 ease-in-out text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-full">Find A Space</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="md:col-span-6">
                        <div className="lg:me-8">
                            <Image src="/images/shape-image.png" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} alt="" />
                        </div>
                    </div>

                    <div className="md:col-span-6">
                        <div className="lg:me-5">
                            <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Our History</h6>
                            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">“Sweet as the Moment When <br /> the coworking Went Pop”</h3>

                            <p className="text-slate-400 max-w-xl mb-6">Get instant helpful resources about anything on the go, easily implement secure money transfer solutions, boost your daily efficiency, connect to other app users and create your own Techwind network, and much more with just a few taps. commodo consequat. Duis aute irure.</p>

                            <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-full">Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Services</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-4 gap-[30px]">
                    {coworkAbout.map((item,index)=>{
                        let Icons = item.icon
                        return(
                            <div key={index} className="group relative lg:px-10 mt-4 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center">
                                <div className="relative overflow-hidden text-transparent -m-3">
                                    <Icon.Hexagon className="h-32 w-32 fill-indigo-600/5 mx-auto"></Icon.Hexagon>
                                    <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded-xl transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                                        <Icons className='w-7 h-7'/>
                                    </div>
                                </div>
        
                                <div className="mt-6">
                                    <Link href="#" className="text-xl font-medium transition-all duration-500 ease-in-out hover:text-indigo-600">{item.title}</Link>
                                    <p className="text-slate-400 transition-all duration-500 ease-in-out mt-3">{item.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">We provide Different types of office</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>
            </div>
            <Office/>
        </section>

        <section className="relative md:py-24 py-16 md:pt-0 pt-0">
            <div className="container relative">
                <div className="grid grid-cols-1 justify-center">
                    <div className="relative z-1">
                        <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                            <div className="lg:col-start-2 lg:col-span-10">
                                <div className="relative">
                                    <Image src="/images/digital/cta.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="rounded-md shadow-lg" alt="" />
                                    <VideoModal/>
                                </div>
                            </div>
                        </div>
                        <div className="content md:mt-8">
                            <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                                <div className="lg:col-start-2 lg:col-span-10">
                                    <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                                        <div className="mt-8">
                                            <div className="section-title text-md-start">
                                                <h6 className="text-white/50 text-lg font-semibold">Customers needs</h6>
                                                <h3
                                                    className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-white mt-2">
                                                    Spaces for every size <br /> and type of need.</h3>
                                            </div>
                                        </div>

                                        <div className="section-title text-md-start">
                                            <p className="text-white/50 max-w-xl mx-auto mb-2">Start working with Techwind
                                                that can provide everything you need to generate awareness, drive
                                                traffic, connect.</p>
                                            <Link href="#" className="text-white flex">Read More<MdKeyboardArrowRight className="text-xl ms-1"/></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="absolute bottom-0 start-0 end-0 sm:h-2/3 h-4/5 bg-gradient-to-b from-indigo-500 to-indigo-600"></div>
        </section>

        <section className="realtive md:py-24 py-16">
            <WorkingTab/>

            <div className=" relative md:mt-24 mt-16">
                <ClientsOne/>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <Blog/>
            </div>
        </section>

       <Contact/>

        <Footer/>
        <Switcher/>
        <CookieModal/>
        </>
    )
}