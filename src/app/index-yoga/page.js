import React from 'react'
import Link from "next/link"
import Image from "next/image"

import Navbar from '../componets/Navbar/navbar'
import FooterTwo from '../componets/Footer/footerTwo'
import Switcher from '../componets/switcher'
import CookieModal from '../componets/cookieModal'
import VideoModalOne from '../componets/yoga/videoModalOne'
import VideoTwo from '../componets/yoga/videoTwo'
import Schedule from '../componets/yoga/schedule'
import YogaImages from '../componets/yoga/yogaImages'

import * as Icon from 'react-feather';
import { FaArrowRight,BsCheckCircle } from '../assets/icons/icons'

import { meditationData,yogaTeam,workData } from '../Data/data'


export default function IndexYoga(){
    return(
        <>
        <Navbar navClass="nav-light"/>

        <section className="relative lg:pt-64 py-36 bg-center bg-cover" style={{backgroundImage:"url('/images/yoga/bg.jpg')"}}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/70 z-2"></div>
            <div className="container relative z-3">
                <div className="grid grid-cols-1 mt-24">
                    <div className="text-center">
                        <VideoModalOne/>

                        <h4 className="font-bold text-white text-2xl mt-6">Body & Mind</h4>
                        <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">Fitness Classes for Every Goal</h1>
                        <p className="text-white/70 text-lg max-w-xl mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                        <div className="mt-8">
                            <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Join Our Classes</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative overflow-hidden md:py-24 py-16">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="lg:col-span-5 md:col-span-6">
                        <div className="grid grid-cols-12 gap-6 items-center relative">
                            <div className="col-span-6">
                                <div className="grid grid-cols-1 gap-6">
                                    <Image src="/images/yoga/ab03.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="shadow rounded-md" alt="" />
                                    <Image src="/images/yoga/ab02.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="shadow rounded-md" alt="" />
                                </div>
                            </div>

                            <div className="col-span-6">
                                <div className="grid grid-cols-1 gap-6">
                                    <Image src="/images/yoga/ab01.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="shadow rounded-md" alt="" />
                                </div>
                            </div>
                            <div className="overflow-hidden after:content-[''] after:absolute after:h-[512px] after:w-[512px] after:bg-indigo-600/5 after:top-0 after:-end-5 after:-z-1 after:rounded-full"></div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 md:col-span-6">
                        <div className="lg:ms-5">
                            <h3 className="mb-6 md:text-4xl md:leading-normal text-3xl leading-normal font-semibold">The Techwind Yoga <br /> & Meditation</h3>

                            <p className="text-slate-400 max-w-xl">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with real content.</p>

                            <div className="mt-6">
                                <Link href="#" className="relative inline-flex items-center tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 font-semibold text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Learn more <FaArrowRight className="ms-2 text-[10px]"/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 pb-8 items-center">
                    <div className="md:col-span-6">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Most Popular Meditation Therapy</h3>
                    </div>

                    <div className="md:col-span-6">
                        <p className="text-slate-400 max-w-xl">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 mt-8 gap-[30px]">
                    {meditationData.map((item,index)=>{
                        const Icon = item.Icon
                        return(
                            <div key={index} className="group rounded-md shadow-md dark:shadow-gray-800 relative overflow-hidden">
                                <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="" alt="" />
                                <div className="absolute inset-0 bg-gradient-to-t to-transparent via-slate-900/60 group-hover:via-slate-900/40 from-slate-900 top-3/4 group-hover:top-0 transition-all duration-500"></div>

                                <div className="absolute bottom-0 mx-auto start-0 end-0 group-hover:bottom-0 transition-all duration-500 px-6 pb-6 text-center">
                                    <Icon className="h-10 w-10 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 mx-auto"></Icon>

                                    <div className="mt-6">
                                        <Link href="#" className="text-xl font-semibold text-white transition-all duration-500">{item.title}</Link>

                                        <p className="text-white/50 hidden group-hover:block transition-all duration-500 ease-in-out mt-4">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">How It Work ?</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    {workData.map((item,index)=>{
                        return(
                            <div key={index} className="group relative lg:px-6 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center">
                                <div className="relative overflow-hidden text-transparent -m-3">
                                    <Icon.Hexagon className="h-32 w-32 fill-indigo-600/5 mx-auto"></Icon.Hexagon>
                                    <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                        <Image src={item.image} width={56} height={56} className="w-14 h-14" alt="" />
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
                <div className="grid grid-cols-1">
                    <div className="relative overflow-hidden bg-indigo-600 rounded-md shadow dark:shadow-gray-700">
                        <div className="grid md:grid-cols-2 items-center gap-[30px]">
                            <VideoTwo/>
                            <div>
                                <div className="text-white p-4">
                                    <h4 className="leading-normal text-4xl mb-3 font-semibold">Check out some of our <br /> Yoga Poses Videos.</h4>

                                    <p className="text-white/70 text-lg max-w-xl">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>

                                    <ul className="list-none text-white/50 mt-4">
                                        <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Digital Marketing Solutions for Tomorrow</li>
                                        <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Our Talented & Experienced Marketing Agency</li>
                                        <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Create your own skin to match your brand</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-20 w-full table relative bg-center bg-fixed bg-no-repeat bg-cover" style={{backgroundImage:"url('/images/yoga/bg02.jpg')"}}>
            <div className="absolute inset-0 bg-slate-900/70"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 text-center">
                    <h3 className="mb-4 md:text-4xl text-3xl text-white font-semibold">Yoga is the journey of the self <br /> through the self</h3>

                    <p className="text-white/80 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>

                    <div className="mt-8">
                        <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Join Our Classes</Link>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Yoga Schedule</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <Schedule/>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Expert Teachers</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
                    {yogaTeam.map((item,index)=>{
                        return(
                            <div key={index} className="lg:col-span-3 md:col-span-6">
                                <div className="group text-center">
                                    <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden shadow-md dark:shadow-gray-800">
                                        <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:"auto"}} className="" alt="" />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

                                        <ul className="list-none space-x-1 absolute start-0 end-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out flex justify-center">
                                        <li className="inline"><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><Icon.Facebook className="h-4 w-4"></Icon.Facebook></Link></li>
                                            <li className="inline"><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><Icon.Instagram className="h-4 w-4"></Icon.Instagram></Link></li>
                                            <li className="inline"><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><Icon.Linkedin className="h-4 w-4"></Icon.Linkedin></Link></li>
                                        </ul>
                                    </div>

                                    <div className="content mt-3">
                                        <Link href="#" className="text-lg font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">{item.name}</Link>
                                        <p className="text-slate-400">{item.title}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>

        <div className="container-fluid relative">
           <YogaImages/>
        </div>

        <FooterTwo/>
        <Switcher/>
        <CookieModal/>
        </>
    )
}