import React from "react";
import Link from "next/link";
import Image from "next/image";

import {FiMail,FiPhone,FiDribbble,FaBehance,FiLinkedin,FiFacebook,FiInstagram,FiBox,FiCamera,FiBell,FiMonitor,PiNotepadBold} from "../assets/icons/icons"
import NavbarTwo from "../componets/Navbar/navbarTwo";
import Clients from "../componets/client";
import Blog from "../componets/blog";
import ClientsOne from "../componets/clientsOne";
import BusinessCounter from "../componets/counter/businessCounter";
import CounterTwo from "../componets/counter/counterTwo";
import VideoModalFive from "../componets/videoModal/videoModalFive";
import Footer from "../componets/Footer/footer";
import CookieModal from "../componets/cookieModal";
import Switcher from "../componets/switcher";

export default function ClassicBusiness(){
    return(
        <>
        <div className="tagline bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-gray-800">
            <div className="container">                
                <div className="grid grid-cols-1">
                    <div className="flex items-center justify-between">
                        <ul className="list-none mb-0">
                            <li className="inline mb-0"><Link href="mailto:contact@example.com" className="text-slate-400 hover:text-indigo-600 inline-flex items-center"><FiMail className="h-4 w-4 me-1 text-indigo-600"/> contact@example.com</Link></li>
                            <li className="inline mb-0 ms-3"><Link href="tel:+152534-468-854" className="text-slate-400 hover:text-indigo-600 inline-flex items-center"><FiPhone className="h-4 w-4 me-1 text-indigo-600"/> +152 534-468-854</Link></li>
                        </ul>

                        <ul className="list-none mb-0">
                            <li className="inline"><Link href="https://dribbble.com/shreethemes" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center text-gray-400 hover:text-white border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FiDribbble /></Link></li>
                            <li className="inline"><Link href="https://www.behance.net/shreethemes" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center text-gray-400 hover:text-white border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FaBehance /></Link></li>
                            <li className="inline"><Link href="http://linkedin.com/company/shreethemes" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center text-gray-400 hover:text-white border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FiLinkedin /></Link></li>
                            <li className="inline"><Link href="https://www.facebook.com/shreethemes" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center text-gray-400 hover:text-white border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FiFacebook /></Link></li>
                            <li className="inline"><Link href="https://www.instagram.com/shreethemes/" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center text-gray-400 hover:text-white border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FiInstagram /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <NavbarTwo navClass="nav-sticky"/>
        <section className="relative table w-full md:pt-72 md:pb-40 py-36 bg-no-repeat bg-center bg-cover" style={{backgroundImage:'url("/images/business/bg04.jpg")'}}>
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/50 dark:via-slate-900/50 to-white dark:to-slate-900"></div>
            <div className="container relative mt-10">
                <div className="grid grid-cols-1">
                    <h1 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">We Provide Best <br/> Business Solutions</h1>
                    <p className="text-slate-400 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>
                    
                    <div className="mt-6">
                        <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Explore More <i className="mdi mdi-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        </section>
        <section className="relative overflow-hidden md:py-24 py-16">
            <div className="container relative pb-16">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
                    <div className="lg:col-span-5 md:col-span-6">
                        <div className="relative">
                            <div className="relative flex justify-end">
                                <Image src="/images/business/about01.jpg" width={0} height={0} sizes="100vw" className="lg:w-[400px] w-[280px] rounded shadow dark:shadow-gray-700" alt=""/>
                                <VideoModalFive/>
                            </div>
                            <div className="absolute md:-start-5 start-0 -bottom-16">
                                <Image src="/images/business/about01.jpg" width={0} height={0} sizes="100vw" className="lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900 rounded" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 md:col-span-6">
                        <div className="lg:ms-5">
                            <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Creative Vision & Mission</h6>
                            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">We develop & create <br/> digital future.</h3>

                            <p className="text-slate-400 max-w-xl mb-6">Get instant helpful resources about anything on the go, easily implement secure money transfer solutions, boost your daily efficiency, connect to other app users and create your own Techwind network, and much more with just a few taps. commodo consequat. Duis aute irure.</p>

                            <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded">Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Features</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-[30px] mt-8">
                    <div className="group rounded shadow-lg relative p-6 overflow-hidden h-fit">
                        <div className="flex items-center justify-center h-14 w-14 -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full me-3">
                            <FiBox className="h-6 w-6 rotate-45"/>
                        </div>

                        <div className="content mt-6 relative z-1">
                            <Link href="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">Web Design</Link>
                            <p className="text-slate-400 mt-3">If the distribution of letters and words is random, the reader will not be distracted from making.</p>

                            <div className="mt-6">
                                <Link href="" className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i className="uil uil-arrow-right"></i></Link>
                            </div>
                        </div>

                        <div className="absolute bottom-0 -end-16">
                            <FiBox className="h-48 w-48 text-indigo-600 opacity-[0.03] dark:opacity-[0.04] group-hover:opacity-10 duration-500"/>
                        </div>
                    </div>

                    <div className="group rounded shadow-lg relative p-6 overflow-hidden h-fit lg:mt-16">
                        <div className="flex items-center justify-center h-14 w-14 -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full me-3">
                        <FiCamera className="h-6 w-6 rotate-45"/>
                        </div>

                        <div className="content mt-6 relative z-1">
                            <Link href="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">Search Engine Optimization</Link>
                            <p className="text-slate-400 mt-3">If the distribution of letters and words is random, the reader will not be distracted from making.</p>

                            <div className="mt-6">
                                <Link href="" className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i className="uil uil-arrow-right"></i></Link>
                            </div>
                        </div>

                        <div className="absolute bottom-0 -end-16">
                            <FiCamera className="h-48 w-48 text-indigo-600 opacity-[0.03] dark:opacity-[0.04] group-hover:opacity-10 duration-500"/>
                        </div>
                    </div>

                    <div className="group rounded shadow-lg relative p-6 overflow-hidden h-fit">
                        <div className="flex items-center justify-center h-14 w-14 -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full me-3">
                            <FiBell className="h-6 w-6 rotate-45"/>
                        </div>

                        <div className="content mt-6 relative z-1">
                            <Link href="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">Social Media</Link>
                            <p className="text-slate-400 mt-3">If the distribution of letters and words is random, the reader will not be distracted from making.</p>

                            <div className="mt-6">
                                <Link href="" className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i className="uil uil-arrow-right"></i></Link>
                            </div>
                        </div>

                        <div className="absolute bottom-0 -end-16">
                            <FiBell className="h-48 w-48 text-indigo-600 opacity-[0.03] dark:opacity-[0.04] group-hover:opacity-10 duration-500"/>
                        </div>
                    </div>

                    <div className="group rounded shadow-lg relative p-6 overflow-hidden h-fit lg:mt-16">
                        <div className="flex items-center justify-center h-14 w-14 -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full me-3">
                            <FiMonitor className="h-6 w-6 rotate-45"/>
                        </div>

                        <div className="content mt-6 relative z-1">
                            <Link href="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">Design & Branding</Link>
                            <p className="text-slate-400 mt-3">If the distribution of letters and words is random, the reader will not be distracted from making.</p>

                            <div className="mt-6">
                                <Link href="" className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i className="uil uil-arrow-right"></i></Link>
                            </div>
                        </div>

                        <div className="absolute bottom-0 -end-16">
                            <FiMonitor className="h-48 w-48 text-indigo-600 opacity-[0.03] dark:opacity-[0.04] group-hover:opacity-10 duration-500"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16 lg:pt-24 pt-16">
                <div className="absolute inset-0 opacity-25 dark:opacity-50  bg-no-repeat bg-center bg-cover" style={{backgroundImage:"url('/images/map.png')"}}></div>
                <div className="relative grid grid-cols-1 pb-8 text-center z-1">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-black dark:text-white">Global clients around the world</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <CounterTwo/>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="md:col-span-6 order-1 md:order-2">
                        <div className="lg:ms-8">
                            <Image src="/images/shape-image.png" width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} alt=""/>
                        </div>
                    </div>

                    <div className="md:col-span-6 order-2 md:order-1">
                        <div className="lg:me-5">
                            <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Fast & Effective</h6>
                            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Powerful Digitalization <br/> With Techwind</h3>

                            <p className="text-slate-400 max-w-xl mb-6">Get instant helpful resources about anything on the go, easily implement secure money transfer solutions, boost your daily efficiency, connect to other app users and create your own Techwind network, and much more with just a few taps. commodo consequat. Duis aute irure.</p>

                            <Link href="/page-services" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"><PiNotepadBold className="me-1"/> Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16 md:mb-24 mb-16" >
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="md:col-span-6">
                        <div className="lg:me-8">
                            <div className="relative">
                                <Image src='/images/shape-image.png' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="rounded-full shadow-lg dark:shadow-gray-800" alt=""/>

                                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 mx-auto lg:w-72 w-56 lg:h-72 h-56 flex justify-center items-center bg-white dark:bg-slate-900 rounded-full shadow-lg dark:shadow-gray-800">
                                    <BusinessCounter/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-6">
                        <div className="lg:ms-8">
                            <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Fast & Effective</h6>
                            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Were a global stakeholder <br/> relations and partnership <br/> building consultancy.</h3>

                            <p className="text-slate-400 max-w-xl mb-6">Get instant helpful resources about anything on the go, easily implement secure money transfer solutions, boost your daily efficiency, connect to other app users and create your own Techwind network, and much more with just a few taps. commodo consequat. Duis aute irure.</p>

                            <Link href="/page-services" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"><PiNotepadBold className="me-1"/> Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>
            <ClientsOne/>
            <Blog className="container relative md:mt-24 mt-16"/>
        </section>
        <Footer/>
        <CookieModal/>
        <Switcher/>
        </>
    
    )
}