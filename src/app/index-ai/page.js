"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Navbar from '../componets/Navbar/navbar';
import Footer from '../componets/Footer/footer';
import CookieModal from '../componets/cookieModal';
import CompanyLogo from '../componets/companyLogo';
import MobileApp from '../componets/mobileApp';
import Switcher from '../componets/switcher';

import { TypeAnimation } from 'react-type-animation';
import { accordionData } from '../Data/dataTwo';

import {FaRegEnvelope, FaArrowRight,BsCheckCircle,MdKeyboardArrowRight} from '../assets/icons/icons'

export default function IndexAi(){
    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('dark');
        htmlTag.classList.remove('light')

    });
    const [activeIndex, setActiveIndex] = useState(0);
   

    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(0);
        } else {
            setActiveIndex(index);
        }
    }

   
    const priceData = [
        {
            title:"Free",
            desc:'We offers a free month of service for new customers.',
            features:['Full Access','Source Files', 'Free Appointments', 'Enhanced Security'],
            plan:'0',
            btn:'Signup',
        },
        {
            title:"Starter",
            desc:'We offers a free month of service for new customers.',
            features:['Full Access','Source Files', 'Free Appointments', 'Enhanced Security'],
            plan:'9',
            btn:'Buy Now',
        },
        {
            title:"Business",
            desc:'We offers a free month of service for new customers.',
            features:['Full Access','Source Files', 'Free Appointments', 'Enhanced Security'],
            plan:'29',
            btn:'Started now',
        },
    ]
    return(
        <>
         <span className="fixed blur-[200px] lg:w-[600px] w-[400px] lg:h-[600px] h-[400px] rounded-full top-[10%] md:start-[10%] -start-[20%] bg-indigo-600/20"></span>
        <span className="fixed blur-[200px] lg:w-[600px] w-[400px] lg:h-[600px] h-[400px] rounded-full bottom-[10%] md:end-[10%] -end-[20%] bg-red-600/20"></span>
        <Navbar/>
        <section className="relative table w-full lg:py-40 md:py-36 pt-36 pb-24 overflow-hidden bg-white dark:bg-slate-900">
        <div className="absolute inset-0  bg-repeat opacity-10 dark:opacity-60" style={{backgroundImage:"url('/images/overlay.png')"}}></div>
        <div className="container relative z-1">
            <div className="relative grid lg:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                <div className="lg:col-span-7">
                    <div className="lg:me-6 lg:text-start text-center">
                        <h1 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-6xl mb-5">Access powerful AI <br/>For 
                        <TypeAnimation
                        sequence={[
                            ' Ai Content',
                            2000,
                            ' Blog Writing',
                            2000,
                            ' Technical Writing',
                            2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        className="typewrite bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text"
                        repeat={Infinity}
                    />
                    </h1>
                        <p className="text-lg max-w-xl lg:ms-0 mx-auto">Beatae cum eius, animi itaque aliquid ducimus facere dicta, vitae ipsam maiores nam sit blanditiis, quisquam expedita?</p>
                    
                        <div className="subcribe-form mt-6 mb-3">
                            <form className="relative max-w-md mx-auto lg:ms-0">
                                <div className="relative">
                                    <FaRegEnvelope  className="me-2 text-base  absolute top-4 left-5"/>
                                    <input type="email" id="aiemail" name="email" className="py-4 pe-40 ps-12 w-full h-[50px] outline-none text-black dark:text-white rounded-md bg-white/60 dark:bg-slate-900/60 shadow dark:shadow-gray-800" placeholder="support@techwind.com"/>
                                </div>
                                <button type="submit" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-md">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-5">
                    <div className="relative after:content-[''] after:absolute lg:after:-top-0 after:-top-10 after:-right-32 after:w-[36rem] after:h-[36rem] after:border-2 after:border-dashed after:border-slate-200 dark:after:border-slate-700 after:rounded-full after:animate-[spin_120s_linear_infinite] after:-z-1 before:content-[''] before:absolute lg:before:-top-24 before:-top-36 before:-right-56 before:w-[48rem] before:h-[48rem] before:border-2 before:border-dashed before:border-slate-200 dark:before:border-slate-700 before:rounded-full before:animate-[spin_240s_linear_infinite] before:-z-1">
                        <div className="relative after:content-[''] after:absolute lg:after:-top-0 after:-top-10 after:-right-40 after:w-[36rem] after:h-[36rem] after:bg-gradient-to-tl after:to-indigo-600/30  after:from-red-600/30 dark:after:to-indigo-600/50 dark:after:from-red-600/50 after: after:blur-[200px] after:rounded-full after:-z-1">
                            <Image src='/images/saas/light-dash.png' width={0} height={0} sizes='100vw' placeholder='blur' blurDataURL='/images/saas/light-dash.png' style={{width:'1175px', height:'auto'}} className="lg:max-w-none lg:ms-14" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        <section className="pt-6">
            <div className="container relative">
                <CompanyLogo/>
            </div>
        </section>
        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid md:grid-cols-3 grid-cols-1 shadow shadow-gray-300 dark:shadow-gray-500 rounded-lg md:divide-x-[1px] divide-y-[1px] divide-gray-200 dark:divide-gray-700">
                    <div className="relative p-6 md:p-8">
                        <i className="mdi mdi-account-search-outline bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text text-[45px]"></i>

                        <h5 className="text-xl font-semibold my-5">Search & Write Content</h5>

                        <p className="text-slate-400">If the distribution of letters and words is random, the reader will not be distracted from making.</p>

                        <MdKeyboardArrowRight className="h-8 w-8 p-1 bg-indigo-600 text-white rounded-full flex justify-center items-center absolute md:top-2/4 md:-translate-y-2/4 -bottom-4 md:-end-0 end-2/4 ltr:translate-x-2/4 rtl:-translate-x-2/4 rtl:rotate-180 z-1"/>
                    </div>

                    <div className="relative p-6 md:p-8">
                        <i className="mdi mdi-wallet-bifold-outline bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text text-[45px]"></i>

                        <h5 className="text-xl font-semibold my-5">Discribe Content</h5>

                        <p className="text-slate-400">If the distribution of letters and words is random, the reader will not be distracted from making.</p>

                        <MdKeyboardArrowRight className="h-8 w-8 p-1 bg-indigo-600 text-white rounded-full flex justify-center items-center absolute md:top-2/4 md:-translate-y-2/4 -bottom-4 md:-end-0 end-2/4 ltr:translate-x-2/4 rtl:-translate-x-2/4 rtl:rotate-180 z-1"/>
                    </div>

                    <div className="relative p-6 md:p-8">
                        <i className="mdi mdi-home-plus-outline bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text text-[45px]"></i>

                        <h5 className="text-xl font-semibold my-5">Generate Content</h5>

                        <p className="text-slate-400">If the distribution of letters and words is random, the reader will not be distracted from making.</p>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    <div className="relative overflow-hidden rounded-lg border border-indigo-600/40 bg-indigo-600/10 dark:bg-indigo-600/20 lg:ps-12 ps-8 lg:pt-12 pt-8 lg:me-8">
                        <Image src='/images/saas/1.png' width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="ltr:rounded-tl-lg rtl:rounded-tr-lg" alt=""/>
                    </div>

                    <div className="">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Create Content In Single <br/> Click With AI Power</h3>
                        <p className="text-slate-400 max-w-xl">You can combine all the Techwind templates into a single one, you can take a component from the Application theme and use it in the Website.</p>

                        <ul className="list-none text-slate-400 mt-4">
                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2" /> Digital Marketing Solutions for Tomorrow</li>
                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2" /> Our Talented & Experienced Marketing Agency</li>
                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2" /> Create your own skin to match your brand</li>
                        </ul>

                        <div className="mt-4">
                            <Link href="page-aboutus.html" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Find Out More <MdKeyboardArrowRight className='ms-1 text-lg'/></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    <div className="relative order-1 md:order-2">
                        <div className="relative overflow-hidden rounded-lg border border-indigo-600/40 bg-indigo-600/10 dark:bg-indigo-600/20 lg:pe-12 pe-8 lg:pt-12 pt-8 lg:ms-8">
                            <Image src='/images/saas/2.png'  width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}}  className="ltr:rounded-tr-lg rtl:rounded-tl-lg" alt=""/>
                        </div>
                    </div>

                    <div className="order-2 md:order-1">
                        <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Write Blog Posts, <br/> Stories, & Even Books</h4>
                        <p className="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                        <ul className="list-none text-slate-400 mt-4">
                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2" /> Digital Marketing Solutions for Tomorrow</li>
                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2" />Our Talented & Experienced Marketing Agency</li>
                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2" /> Create your own skin to match your brand</li>
                        </ul>

                        <div className="mt-4">
                            <Link href="page-aboutus.html" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Find Out More <MdKeyboardArrowRight className='ms-1 text-lg'/></Link>
                        </div>
                    </div>
                </div>
            </div>
        
            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px] relative">
                    <div className="lg:col-span-8 md:col-span-12">
                        <div className="grid grid-cols-1 pb-8">
                            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">AI Generate Content In Seconds</h3>
        
                            <p className="text-slate-400 max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>
                        </div>
                    
                        <div className="grid md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                            <div className="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 duration-500 rounded-lg hover:bg-white hover:dark:bg-slate-900">
                               
                                <span className="mdi mdi-flip-horizontal text-4xl bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text"></span>
        
                                <div className="content mt-7">
                                    <Link href="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">Plagiarism checker</Link>
                                    <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                                    
                                    <div className="mt-5">
                                        <Link href="/page-services" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More  <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 duration-500 rounded-lg hover:bg-white hover:dark:bg-slate-900">
                                <span className="mdi mdi-email-edit-outline text-4xl bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text"></span>
        
                                <div className="content mt-7">
                                    <Link href="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">Content Generator</Link>
                                    <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                                    
                                    <div className="mt-5">
                                        <Link href="/page-services" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More  <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 duration-500 rounded-lg hover:bg-white hover:dark:bg-slate-900">
                                <span className="mdi mdi-star-outline text-4xl bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text"></span>
                                <div className="content mt-7">
                                    <Link href="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">Search Engine Optimization</Link>
                                    <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                                    
                                    <div className="mt-5">
                                        <Link href="/page-services" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More  <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 duration-500 rounded-lg hover:bg-white hover:dark:bg-slate-900">
                                <span className="mdi mdi-bookmark-outline text-4xl bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text"></span>
                                <div className="content mt-7">
                                    <Link href="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">Digital name generator</Link>
                                    <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                                    
                                    <div className="mt-5">
                                        <Link href="/page-services" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More  <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4 md:col-span-12">
                        <div className="grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-[30px]">
                            <div className="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 duration-500 rounded-lg hover:bg-white hover:dark:bg-slate-900">
                                <span className="mdi mdi-account-check-outline text-4xl bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text"></span>
                                <div className="content mt-7">
                                    <Link href="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">Ad Targeting tips</Link>
                                    <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                                    
                                    <div className="mt-5">
                                        <Link href="/page-services" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More  <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 duration-500 rounded-lg hover:bg-white hover:dark:bg-slate-900">
                                <span className="mdi mdi-comment-multiple-outline text-4xl bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text"></span>
                                <div className="content mt-7">
                                    <Link href="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">Content Rewriter</Link>
                                    <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                                    
                                    <div className="mt-5">
                                        <Link href="/page-services" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More  <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">What Our Users Say</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>
            </div>

            <div className="container-fluid relative overflow-hidden">
                <div className="grid grid-cols-1 mt-8">
                    <div className="slider relative overflow-hidden m-auto mb-4 before:content-[''] before:absolute before:top-0 before:start-0 before:z-2 after:content-[''] after:absolute after:top-0 after:end-0 after:z-2">
                        <div className="slide-track flex items-center">
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src='/images/client/01.jpg' width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Thomas Israel</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">I didnt know a thing about icon design until I read this book. Now I can create any icon I need in no time. Great resource!</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src='/images/client/02.jpg' width={64} height={64}  className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Barbara McIntosh</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">There are so many things I had to do with my old software that I just dont do at all with Techwind. Suspicious but I can not say I dont love it.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src="/images/client/02.jpg" width={64} height={64}  className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Carl Oliver</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">The best part about Techwind is every time I pay my employees, my bank balance doesnt go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src='/images/client/03.jpg' width={64} height={64}  className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Jill Webb</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">Im trying to get a hold of someone in support, Im in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src='/images/client/04.jpg' width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Barbara McIntosh</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">I used to have to remit tax to the EU and with Techwind I somehow dont have to do that anymore. Nervous to travel there now though.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src='/images/client/05.jpg' width={64} height={64}  className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Janisha Doll</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">This is the fourth emailIvesent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src='/images/client/06.jpg' width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Thomas Israel</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">I didnt know a thing about icon design until I read this book. Now I can create any icon I need in no time. Great resource!</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src='/images/client/07.jpg' width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Barbara McIntosh</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">There are so many things I had to do with my old software that I just dont do at all with Techwind. Suspicious but I can not say I dont love it.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src='/images/client/08.jpg' width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Carl Oliver</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">The best part about Techwind is every time I pay my employees, my bank balance doesnt go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src='/images/client/01.jpg' width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Jill Webb</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">Im trying to get a hold of someone in support, Im in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src='/images/client/02.jpg' width={64} height={64}  className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Barbara McIntosh</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">I used to have to remit tax to the EU and with Techwind I somehow dont have to do that anymore. Nervous to travel there now though.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src='/images/client/03.jpg' width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Janisha Doll</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">This is the fourth emailIvesent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src='/images/client/04.jpg' width={64} height={64}  className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Thomas Israel</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">I didnt know a thing about icon design until I read this book. Now I can create any icon I need in no time. Great resource!</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src='/images/client/05.jpg' width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Barbara McIntosh</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">There are so many things I had to do with my old software that I just dont do at all with Techwind. Suspicious but I can not say I dont love it.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src='/images/client/06.jpg' width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Carl Oliver</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">The best part about Techwind is every time I pay my employees, my bank balance doesnt go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src='/images/client/07.jpg' width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Jill Webb</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">Im trying to get a hold of someone in support, Im in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src='/images/client/08.jpg' width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Barbara McIntosh</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">I used to have to remit tax to the EU and with Techwind I somehow dont have to do that anymore. Nervous to travel there now though.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src='/images/client/01.jpg' width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Janisha Doll</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">This is the fourth emailIvesent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src='/images/client/02.jpg' width={64} height={64}  className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Thomas Israel</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">I didnt know a thing about icon design until I read this book. Now I can create any icon I need in no time. Great resource!</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src='/images/client/03.jpg' width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Barbara McIntosh</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">There are so many things I had to do with my old software that I just dont do at all with Techwind. Suspicious but I can not say I dont love it.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src='/images/client/05.jpg' width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Carl Oliver</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">The best part about Techwind is every time I pay my employees, my bank balance doesnt go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src='/images/client/05.jpg' width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Jill Webb</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">Im trying to get a hold of someone in support, Im in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src='/images/client/07.jpg' width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Barbara McIntosh</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">I used to have to remit tax to the EU and with Techwind I somehow dont have to do that anymore. Nervous to travel there now though.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src='/images/client/07.jpg' width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Janisha Doll</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">This is the fourth emailIvesent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src='/images/client/08.jpg' width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Thomas Israel</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">I didnt know a thing about icon design until I read this book. Now I can create any icon I need in no time. Great resource!</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src='/images/client/01.jpg' width={64} height={64}  className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Barbara McIntosh</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">There are so many things I had to do with my old software that I just dont do at all with Techwind. Suspicious but I can not say I dont love it.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src='/images/client/02.jpg' width={64} height={64}  className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Carl Oliver</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">The best part about Techwind is every time I pay my employees, my bank balance doesnt go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src='/images/client/03.jpg' width={64} height={64}  className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Jill Webb</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">Im trying to get a hold of someone in support, Im in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src='/images/client/04.jpg' width={64} height={64}  className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Barbara McIntosh</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">I used to have to remit tax to the EU and with Techwind I somehow dont have to do that anymore. Nervous to travel there now though.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src='/images/client/05.jpg' width={64} height={64}  className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Janisha Doll</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">This is the fourth emailIvesent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src='/images/client/06.jpg' width={64} height={64}  className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Thomas Israel</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">I didnt know a thing about icon design until I read this book. Now I can create any icon I need in no time. Great resource!</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src='/images/client/07.jpg' width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Barbara McIntosh</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">There are so many things I had to do with my old software that I just dont do at all with Techwind. Suspicious but I can not say I dont love it.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src='/images/client/08.jpg' width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Carl Oliver</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">The best part about Techwind is every time I pay my employees, my bank balance doesnt go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src='/images/client/01.jpg' width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Jill Webb</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">Im trying to get a hold of someone in support, Im in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src='/images/client/02.jpg' width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Barbara McIntosh</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">I used to have to remit tax to the EU and with Techwind I somehow dont have to do that anymore. Nervous to travel there now though.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src='/images/client/03.jpg' width={64} height={64}  className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Janisha Doll</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">This is the fourth emailIvesent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center md:gap-[30px]">
                    <div className="lg:col-span-4 md:mb-0 mb-8">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Frequently Asked Questions</h3>

                        <p className="text-slate-400 max-w-xl mx-auto mb-6">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>

                        <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-indigo-600 border-gray-100 dark:border-gray-800 hover:border-indigo-600 dark:hover:border-indigo-600 text-slate-900 dark:text-white hover:text-white rounded-full">Contact Us</Link>
                    </div>

                    <div className="lg:col-span-8 md:mt-0 mt-8" id="accordion-collapse">
                        {accordionData.slice(0,4).map((item, index) => (
                            <div key={index} className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                                <h2 className="text-base font-semibold" id="accordion-collapse-heading-1">
                                    <button type="button" onClick={() => toggleAccordion(index)} className={`flex justify-between items-center p-5 w-full font-medium text-start ${activeIndex === index ? 'bg-gray-50 dark:bg-slate-800 text-indigo-600' : ''}`} >
                                        <span>{item.title}</span>
                                        <svg data-accordion-icon className={`${activeIndex === index ? "rotate-180" : "rotate-270" } w-4 h-4 shrink-01`}  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                        </svg>
                                    </button>
                                </h2>
                                {activeIndex === index && (
                                    <div>
                                        <div className="p-5">
                                            <p className="text-slate-400 dark:text-gray-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                        ))}
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Our Pricing Plans</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind css html page.</p>
                </div>

                <div className="grid grid-cols-1 mt-8 gap-[30px]">
                    {priceData.map((item, index)=>{
                        return(
                            <div className="group md:flex items-center justify-between p-6 rounded-lg shadow dark:shadow-gray-700" key={index}>
                                <div className="lg:flex items-center justify-between lg:w-2/4">
                                    <div className="lg:mb-0 mb-5">
                                        <h5 className="text-2xl font-semibold">{item.title}</h5>
                                        <p className="text-slate-400 lg:w-[200px] md:w-[300px] mt-2">{item.desc}</p>
                                    </div>
            
                                    <ul className="list-none text-slate-400 md:mb-0 mb-5">
                                        {item.features.map((el,index)=>{
                                            return(
                                                <li key={index} className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2" /> {el}</li>
                                            )
                                        })}
                                    </ul>
                                </div>

                                <div className="flex md:mb-0 mb-5">
                                    <span className="text-xl font-semibold">$</span>
                                    <span className="price text-4xl font-semibold mb-0">{item.plan}</span>
                                    <span className="text-xl font-semibold self-end mb-1">/mo</span>
                                </div>

                                <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-indigo-600 border-gray-100 dark:border-gray-800 hover:border-indigo-600 dark:hover:border-indigo-600 text-slate-900 dark:text-white hover:text-white rounded-full">{item.btn}</Link>
                            </div>
                        )
                    })}
                </div>
            </div>
           <MobileApp/>
        </section>
        <Footer/>
        <CookieModal/>
        <Switcher/>
        </>
    )
}