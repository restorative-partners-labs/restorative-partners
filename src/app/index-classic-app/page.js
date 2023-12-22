import React from "react"
import Link from "next/link"
import Image from "next/image"

import Navbar from "../componets/Navbar/navbar"
import FooterTransparent from "../componets/Footer/transparentFooter"
import Switcher from "../componets/switcher"
import CookieModal from "../componets/cookieModal"
import ClientsOne from "../componets/clientsOne"
import MobileApp from "../componets/mobileApp"
import Counter from "../componets/app/counter"
import CounterTwo from "../componets/app/counterTwo"
import VideoModal from "../componets/app/videoModal"
import Accordian from "../componets/app/Accordian"

import * as Icon from 'react-feather';
import {BsCheckCircle,MdKeyboardArrowRight,BiTrendingDown} from "../assets/icons/icons"
import {HiArrowTrendingUp} from "react-icons/hi2"

import { KeyFeaturestwo } from "../Data/data"

export default function ClassicApp(){
  return(
    <>
    <span className="fixed blur-[200px] w-[600px] h-[600px] rounded-full top-1/2 -translate-y-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 bg-indigo-600/20"></span>
    <Navbar/>
    <section className="relative overflow-hidden md:pt-44 pt-36 md:pb-24 pb-16">
        <div className="container relative">
            <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-8 gap-[30px] relative">
                <div className="md:me-6">
                    <ul className="list-none mb-0 text-amber-400 text-xl space-x-1">
                        <li className="inline"><i className="mdi mdi-star"></i></li>
                        <li className="inline"><i className="mdi mdi-star"></i></li>
                        <li className="inline"><i className="mdi mdi-star"></i></li>
                        <li className="inline"><i className="mdi mdi-star"></i></li>
                        <li className="inline"><i className="mdi mdi-star"></i></li>
                    </ul>
                    <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black dark:text-white">Making <span className="after:absolute after:end-0 after:start-0 after:bottom-3 after:-rotate-6 after:h-2 after:w-auto after:rounded-md after:bg-indigo-600/20 relative text-indigo-600">everybody</span> <br /> feel valued at work</h4>
                    <p className="text-slate-400 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                    <div className="mt-6">
                        <Link href="#"><Image src="/images/app/app.png" width={167} height={50} className="inline-block m-1" alt="" /></Link>
                        <Link href="#"><Image src="/images/app/playstore.png" width={167} height={50} className="inline-block m-1" alt="" /></Link>
                    </div>
                </div>

                <div className="relative">
                    <Image src="/images/app/classic02.png" width={295} height={600} className="mx-auto" alt="" />
                    <div className="overflow-hidden absolute md:h-[500px] h-[400px] md:w-[500px] w-[400px] bg-gradient-to-tl to-indigo-600/20 via-indigo-600/70 from-indigo-600 bottom-1/2 translate-y-1/2 md:start-0 start-1/2 ltr:md:translate-x-0 ltr:-translate-x-1/2 rtl:md:translate-x-0 rtl:translate-x-1/2 -z-1 shadow-md shadow-indigo-600/10 rounded-full"></div>

                    <div className="overflow-hidden after:content-[''] after:absolute after:h-10 after:w-10 after:bg-indigo-600/20 after:top-0 after:start-0 after:-z-1 after:rounded-lg after:animate-[spin_10s_linear_infinite]"></div>

                    <div className="absolute flex justify-between items-center top-16 md:-start-10 -start-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-60 m-3">
                        <div className="flex items-center">
                            <div className="flex items-center justify-center h-[65px] min-w-[65px] bg-indigo-600/5 text-indigo-600 text-center rounded-full me-3">
                                <Icon.Monitor className="h-6 w-6"></Icon.Monitor>
                            </div>
                            <Counter/>
                        </div>

                        <span className="text-red-600 inline-flex items-center"><BiTrendingDown className="me-1"/> 0.5%</span>
                    </div>

                    <div className="absolute bottom-1/2 translate-y-1/2 lg:-end-7 -end-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-48 m-3">
                        <h5 className="text-lg font-semibold mb-3">Manage Software</h5>
                        <div className="flex justify-between mt-3 mb-2">
                            <span className="text-slate-400">Progress</span>
                            <span className="text-slate-400">84%</span>
                        </div>
                        <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                            <div className="bg-indigo-600 h-[6px] rounded-full" style={{ "width": "84%" }}></div>
                        </div>
                    </div>

                    <div className="absolute flex justify-between items-center bottom-16 md:start-10 -start-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-44 m-3">
                        <div className="flex items-center">
                            <Image src="/images/client/05.jpg" width={56} height={56} className="h-14 w-14 rounded-full shadow-md dark:shadow-gray-800 me-3" alt="" />
                            <div className="flex-1">
                                <h6 className="text-lg font-semibold">Cristina</h6>
                                <p className="text-slate-400">Manager</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative animate-[spin_30s_linear_infinite] -z-1">
                    <span className="after:absolute after:start-0 after:bottom-1/2 after:translate-y-1/2 after:h-2 after:w-8 after:rounded-md after:bg-indigo-600/20 relative after:z-10"></span>
                    <span className="after:absolute after:start-0 after:bottom-1/2 after:translate-y-1/2 after:rotate-90 after:h-2 after:w-8 after:rounded-md after:bg-indigo-600/20 relative after:z-10"></span>
                </div>
            </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
            <div className="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]">
                <div className="mx-auto py-4">
                    <Image src="/images/client/9.png" width={114} height={80} className="h-20" alt="" />
                </div>

                <div className="mx-auto py-4">
                    <Image src="/images/client/10.png" width={114} height={80} className="h-20" alt="" />
                </div>

                <div className="mx-auto py-4">
                    <Image src="/images/client/11.png" width={114} height={80} className="h-20" alt="" />
                </div>

                <div className="mx-auto py-4">
                    <Image src="/images/client/12.png" width={114} height={80} className="h-20" alt="" />
                </div>

                <div className="mx-auto py-4">
                    <Image src="/images/client/13.png" width={114} height={80} className="h-20" alt="" />
                </div>

                <div className="mx-auto py-4">
                    <Image src="/images/client/14.png" width={114} height={80} className="h-20" alt="" />
                </div>
            </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
            <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-16 gap-[30px]">
                <div className="relative">
                    <div className="relative">
                        <Image src="/images/avatar.jpg" width={384} height={532} className="mx-auto md:max-w-xs lg:max-w-sm rounded-lg shadow-md dark:shadow-gray-800" alt="" />
                        <VideoModal/>
                    </div>

                    <div className="overflow-hidden absolute md:h-[500px] h-[400px] md:w-[500px] w-[400px] bg-gradient-to-tr to-indigo-600/20 via-indigo-600/70 from-indigo-600 bottom-1/2 translate-y-1/2 md:end-0 end-1/2 md:translate-x-0 translate-x-1/2 -z-1 shadow-md shadow-indigo-600/10 rounded-full"></div>

                    <div className="absolute flex justify-between items-center bottom-16 md:-start-10 -start-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-64 m-3">
                        <div className="flex items-center">
                            <div className="flex items-center justify-center h-[65px] min-w-[65px] bg-indigo-600/5 text-indigo-600 text-center rounded-full me-3">
                                <Icon.DollarSign className="h-6 w-6"></Icon.DollarSign>
                            </div>
                            <CounterTwo/>
                        </div>

                        <span className="text-green-600 inline-flex items-center"><HiArrowTrendingUp className="me-1"/> 3.85%</span>
                    </div>
                </div>

                <div className="lg:ms-8">
                    <h4 className="mb-4 md:text-3xl text-2xl lg:leading-normal leading-normal font-semibold">Ready to kick off <br /> your startup journey?</h4>
                    <p className="text-slate-400 mb-6">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>

                    <div className="pt-6 flex items-center border-t dark:border-gray-700">
                        <Image src="/images/client/05.jpg" width={80} height={80} className="h-20 w-20 rounded-full shadow-md dark:shadow-gray-800 me-3" alt="" />
                        <div className="flex-1">
                            <h6 className="text-lg text-slate-400 italic font-semibold">Human perception is tuned to recognize certain patterns and repetitions in texts.</h6>
                            <p className="font-semibold">Owner & CEO</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
            <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                <div className="relative order-1 md:order-2">
                    <div className="grid grid-cols-12 items-center gap-4 lg:gap-0">
                        <div className="col-span-6">
                            <div className="grid grid-cols-1 lg:gap-6 gap-4">
                                <Image src="/images/notification.jpg" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="shadow rounded-md lg:max-w-[240px] mx-auto" alt="" />
                                <Image src="/images/about/ab02.jpg" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="shadow rounded-md lg:max-w-[240px] mx-auto" alt="" />
                            </div>
                        </div>

                        <div className="col-span-6">
                            <div className="grid grid-cols-1">
                                <Image src="/images/about/ab01.jpg" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="shadow rounded-md lg:max-w-[240px] mx-auto" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden absolute md:h-[500px] h-[400px] md:w-[500px] w-[400px] bg-gradient-to-tl to-indigo-600/20 via-indigo-600/70 from-indigo-600 bottom-1/2 translate-y-1/2 md:start-0 start-1/2 ltr:md:translate-x-0 ltr:-translate-x-1/2 rtl:md:translate-x-0 rtl:translate-x-1/2 -z-1 shadow-md shadow-indigo-600/10 rounded-full"></div>

                    <div className="absolute flex justify-between items-center md:bottom-16 bottom-0 end-5 rounded-lg shadow-md dark:shadow-gray-800 lg:w-72 w-48 m-3">
                        <Image src="/images/sales-chart.jpg" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="rounded-lg shadow dark:shadow-gray-800" alt="" />
                    </div>
                </div>

                <div className="lg:me-8 order-2 md:order-1">
                    <h4 className="mb-4 md:text-3xl text-2xl lg:leading-normal leading-normal font-semibold">If you need help, <br /> we are here for you</h4>

                    <Accordian/>

                    <div className="mt-4">
                        <Link href="/page-aboutus" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Find Out More <MdKeyboardArrowRight className="text-xl ms-1"/></Link>
                    </div>
                </div>
            </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
            <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-16 gap-[30px]">
                <div className="relative">
                    <Image src="/images/app/classic04.png" width={265} height={600} className="mx-auto" alt="" />
                    <div className="overflow-hidden absolute md:h-[500px] h-[400px] md:w-[500px] w-[400px] bg-gradient-to-tr to-indigo-600/20 via-indigo-600/70 from-indigo-600 bottom-1/2 translate-y-1/2 md:end-0 end-1/2 md:translate-x-0 translate-x-1/2 -z-1 shadow-md shadow-indigo-600/10 rounded-full"></div>

                    <div className="absolute bottom-1/2 translate-y-1/2 lg:-end-7 -end-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-52 m-3">
                        <div className="flex">
                            <div className="text-center min-w-[75px]">
                                <span className="text-2xl font-bold">4.90</span>
                                <ul className="list-none mb-0 text-amber-400 text-xs space-x-1">
                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                </ul>
                                <span className="text-xs"><span className="font-semibold">950</span> <span className="text-slate-400">Ratings</span></span>
                            </div>

                            <span className="font-bold ms-3">Trusted by over <span className="text-indigo-600">50000</span> members</span>
                        </div>
                    </div>

                    <div className="absolute flex justify-between items-center bottom-16 md:start-10 -start-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-56 m-3">
                        <div className="flex items-center">
                            <Image src="/images/client/01.jpg" width={56} height={56} className="h-14 w-14 rounded-full shadow-md dark:shadow-gray-800 me-3" alt="" />
                            <div className="flex-1">
                                <h6 className="text-lg font-semibold">Advin</h6>
                                <p className="text-slate-400">Owner & CEO</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:ms-8">
                    <h4 className="mb-4 md:text-3xl text-2xl lg:leading-normal leading-normal font-semibold">Plan in front program for your needs</h4>
                    <p className="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                    <ul className="list-none text-slate-400 mt-4">
                        <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Digital Marketing Solutions for Tomorrow</li>
                        <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Our Talented & Experienced Marketing Agency</li>
                        <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Create your own skin to match your brand</li>
                    </ul>

                    <div className="mt-4">
                        <Link href="/page-aboutus" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Find Out More <MdKeyboardArrowRight className="text-xl ms-1"/></Link>
                    </div>
                </div>
            </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Key Features</h3>
                <p className="text-slate-400 max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
            </div>

            <div className="grid lg:grid-cols-12 md:grid-cols-12 grid-cols-1 mt-8 gap-[30px] items-center">
                <div className="lg:col-span-4 md:col-span-6 lg:order-1 order-2">
                    <div className="grid grid-cols-1 gap-[30px]">
                        {KeyFeaturestwo.slice(0,3).map((item,index)=>{
                            let Icons = item.icon
                            return(
                                <div key={index} className="group flex transition-all duration-500 ease-in-out xl:p-3">
                                    <div className="flex md:order-2 order-1 align-middle justify-center items-center w-14 h-14 mt-1 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white text-indigo-600 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                                        <Icons className="w-5 h-5"></Icons>
                                    </div>
                                    <div className="flex-1 md:order-1 order-2 md:text-end md:me-4 md:ms-0 ms-4">
                                        <h4 className="mb-0 text-lg font-medium">{item.title}</h4>
                                        <p className="text-slate-400 mt-3">{item.desc}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="lg:col-span-4 md:col-span-12 lg:mx-8 lg:order-2 order-1">
                    <Image src="/images/feature.png" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="mx-auto md:max-w-[300px]" alt="" />
                </div>

                <div className="lg:col-span-4 md:col-span-6 order-3">
                    <div className="grid grid-cols-1 gap-[30px]">
                        {KeyFeaturestwo.slice(3,6).map((item,index)=>{
                                let Icons = item.icon
                            return(
                                <div key={index} className="group flex transition-all duration-500 ease-in-out xl:p-3">
                                    <div className="flex align-middle justify-center items-center w-14 h-14 mt-1 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white text-indigo-600 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                                        <Icons className="w-5 h-5"></Icons>
                                    </div>
                                    <div className="flex-1 ms-4">
                                        <h4 className="mb-0 text-lg font-medium">{item.title}</h4>
                                        <p className="text-slate-400 mt-3">{item.desc}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    </section> 
    <ClientsOne title={true}/>
    <MobileApp/>
    <FooterTransparent/>
    <Switcher/>
    <CookieModal/>
    </>
  )
}