import React from 'react'
import Link from "next/link"
import Image from "next/image"

import VideoModal from '../componets/videoModal/videoModal'
import CourceCategories from '../componets/courceCategories'
import Navbar from '../componets/Navbar/navbar'
import Footer from '../componets/Footer/footer'
import Switcher from '../componets/switcher'
import CookieModal from '../componets/cookieModal'
import TeamData from '../componets/team'
import BlogTwo from '../componets/blogTwo'
import CompanyLogo from '../componets/companyLogo'

import * as Icon from 'react-feather';

import { FaArrowRight, AiOutlineEye,GoClock,PiBookOpenText } from '../assets/icons/icons'

import { courcesData } from '../Data/data'
import { courseFeature,studentData } from '../Data/dataThree'

export default function Course(){

    return(
        <>
        <Navbar/>

        <section className="relative table w-full py-36 lg:py-44 bg-indigo-600/5 overflow-hidden">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px] relative">
                    <div className="md:col-span-7">
                        <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black dark:text-white">Learn with <span className="text-indigo-600">Expert</span> <br /> Anytime & Anywhere</h4>
                        <p className="text-slate-400 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                        <div className="mt-6">
                            <Link href="#"><Image src="/images/app/app.png" width={167} height={50} className="inline-block m-1" alt="" /></Link>
                            <Link href="#" ><Image src="/images/app/playstore.png" width={167} height={50} className="inline-block m-1" alt="" /></Link>
                        </div>
                    </div>

                    <div className="md:col-span-5">
                        <div className="relative">
                            <Image src="/images/course/hero.png" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} alt="" />
                            <VideoModal/>
                        </div>
                    </div>

                    <div className="overflow-hidden after:content-[''] after:absolute after:h-32 after:w-32 after:bg-red-600/5 after:top-10 after:start-0 after:-z-1 after:rounded-3xl after:animate-[spin_10s_linear_infinite]"></div>
                    <div className="overflow-hidden after:content-[''] after:absolute after:h-[512px] after:w-[512px] after:bg-indigo-600/5 after:top-0 after:-end-5 after:-z-1 after:rounded-full"></div>
                </div>
            </div>
        </section>

        <section className="py-6 border-b border-gray-100 dark:border-gray-800">
            <div className="container relative">
               <CompanyLogo/>
            </div>
        </section>

        <section className="relative md:py-24 py-16 overflow-hidden">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Core Features</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    {courseFeature.map((item,index)=>{
                        let Icons = item.icon
                        return(
                            <div key={index} className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center">
                                <div className="relative overflow-hidden text-transparent -m-3">
                                    <Icon.Hexagon className="h-32 w-32 fill-indigo-600/5 mx-auto"></Icon.Hexagon>
                                    <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
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
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="lg:col-span-5 md:col-span-6">
                        <div className="grid grid-cols-12 gap-6 items-center relative">
                            <div className="col-span-6">
                                <div className="grid grid-cols-1 gap-6">
                                    <Image src="/images/about/ab03.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="shadow rounded-md" alt="" />
                                    <Image src="/images/about/ab02.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="shadow rounded-md" alt="" />
                                </div>
                            </div>

                            <div className="col-span-6">
                                <div className="grid grid-cols-1 gap-6">
                                    <Image src="/images/about/ab01.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="shadow rounded-md" alt="" />
                                </div>
                            </div>
                            <div className="overflow-hidden after:content-[''] after:absolute after:h-[512px] after:w-[512px] after:bg-indigo-600/5 after:top-0 after:-end-5 after:-z-1 after:rounded-full"></div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 md:col-span-6">
                        <div className="lg:ms-5">
                            <h3 className="mb-6 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Online Video <br /> Courses</h3>

                            <p className="text-slate-400 max-w-xl">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with real content.</p>

                            <div className="mt-6">
                                <Link href='#' className="relative inline-flex items-center tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 font-semibold text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Learn more <FaArrowRight className="ms-2 text-[10px]"/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 pb-8 items-end">
                    <div className="lg:col-span-8 md:col-span-6 md:text-start text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Browse Online Cource Categories</h3>
                        <p className="text-slate-400 max-w-xl">Search your future opportunity with our categories</p>
                    </div>

                    <div className="lg:col-span-4 md:col-span-6 md:text-end hidden md:block">
                        <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-slate-400 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">All Categories <FaArrowRight className="ms-2 text-[10px]"/></Link>
                    </div>
                </div>
            </div>

            <CourceCategories/>
        </section>

        <section className="relative md:py-24 py-16 overflow-hidden">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Popular Courses</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
                    {courcesData.slice(0,6).map((item,index)=>{
                        return(
                        <div className="group relative rounded-md shadow hover:shadow-lg dark:shadow-gray-800 duration-500 ease-in-out overflow-hidden" key={index}>
                        <div className="relative overflow-hidden">
                            <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:"100%",height:"auto"}} className="group-hover:scale-110 duration-500 ease-in-out" alt="" />
                            <div className="absolute inset-0 bg-slate-900/50 opacity-0 group-hover:opacity-100 duration-500 ease-in-out"></div>

                            <div className="absolute start-0 bottom-0 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                                <div className="pb-4 ps-4 flex items-center">
                                    <Image src={item.image2} width={30} height={30} className="h-12 w-12 rounded-full shadow-md dark:shadow-gray-800 mx-auto" alt="" />
                                    <div className="ms-3">
                                        <Link href='#' className="font-semibold text-white block">{item.name}</Link>
                                        <span className="text-white/70 text-sm">{item.designation}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="content p-6 relative">
                            <Link href={`/course-detail/${item.id}`} className="font-medium block text-indigo-600">{item.title}</Link>
                            <Link href={`/course-detail/${item.id}`} className="text-lg font-medium block hover:text-indigo-600 duration-500 ease-in-out mt-2">{item.subTitle}</Link>
                            <p className="text-slate-400 mt-3 mb-4">{item.desc}</p>

                            <ul className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center list-none text-slate-400">
                                <li className="flex items-center me-4">
                                    <PiBookOpenText className="text-lg leading-none me-2 text-slate-900 dark:text-white"/>
                                    <span>25 Lectures</span>
                                </li>

                                <li className="flex items-center me-4">
                                    <GoClock className="text-lg leading-none me-2 text-slate-900 dark:text-white"/>
                                    <span>1h 30m</span>
                                </li>

                                <li className="flex items-center">
                                    <AiOutlineEye className=" text-lg leading-none me-2 text-slate-900 dark:text-white"/>
                                    <span>3012</span>
                                </li>
                            </ul>

                            <div className="absolute -top-7 end-6 z-1 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                                <div className="flex justify-center items-center w-14 h-14 bg-white dark:bg-slate-900 rounded-full shadow-lg dark:shadow-gray-800 text-indigo-600 dark:text-white">
                                    <span className="font-semibold">$11</span>
                                </div>
                            </div>
                        </div>
                    </div>
                        )
                    })}
                </div>
                <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                    <div className="md:col-span-12 text-center">
                        <Link href="/course-listing" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-slate-400 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">See All Courses<FaArrowRight className="ms-2 text-[10px]"/></Link>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16 bg-no-repeat bg-fixed bg-top bg-cover" id="table" style={{backgroundImage:"url('/images/course/cta.jpg')"}}>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="container relative">
                <div className="grid lg:grid-cols-12 md:grid-cols-2 items-center gap-[30px]">
                    <div className="lg:col-span-7">
                        <h4 className="font-semibold lg:leading-normal leading-normal text-3xl lg:text-4xl mb-5 text-white">Register Now !</h4>

                        <p className="text-white/70 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                        <div className="relative mt-10">
                            <Link href='#' className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Admission Now</Link>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="bg-white dark:bg-slate-900 rounded-xl shadow dark:shadow-gray-800 md:p-8 p-6 lg:ms-10 z-10 relative">
                            <h4 className="mb-5 text-2xl font-semibold">Register Now</h4>

                            <form>
                                <div className="grid grid-cols-1">
                                    <div className="mb-5">
                                        <label className="form-label font-medium">Your Name : <span className="text-red-600">*</span></label>
                                        <div className="form-icon relative mt-2">
                                            <Icon.User className="w-4 h-4 absolute top-3 start-4"></Icon.User>
                                            <input type="text" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Name" name="name" required />
                                        </div>
                                    </div>

                                    <div className="mb-5">
                                        <label className="form-label font-medium">Your Email : <span className="text-red-600">*</span></label>
                                        <div className="form-icon relative mt-2">
                                            <Icon.Mail className="w-4 h-4 absolute top-3 start-4"></Icon.Mail>
                                            <input type="email" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Email" name="email" required />
                                        </div>
                                    </div>

                                    <div className="mb-5">
                                        <label className="form-label font-medium">Phone No. : <span className="text-red-600">*</span></label>
                                        <div className="form-icon relative mt-2">
                                            <Icon.Phone className="w-4 h-4 absolute top-3 start-4"></Icon.Phone>
                                            <input name="number" id="phNumber" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="+12 12458 854" required />
                                        </div>
                                    </div>

                                    <div>
                                        <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full">Free Trial</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            
        <section className="relative md:py-24 py-16 overflow-hidden">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Our Community</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>
            </div>
            <div className="container-fluid relative">
                <div className="grid grid-cols-1 mt-8">
                    <div className="slider relative overflow-hidden m-auto mb-4 before:content-[''] before:absolute before:top-0 before:start-0 before:z-2 after:content-[''] after:absolute after:top-0 after:end-0 after:z-2">
                        <div className="slide-track flex items-center">
                            {studentData.map((item , index)=>{
                                return(
                                    <div className="slide h-auto md:w-[360px] w-72 m-2" key={index}>
                                        <ul className="space-y-4">
                                        <li className="rounded-lg shadow dark:shadow-gray-800 p-6">
                                            <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                                                <Image src={item.image} width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt="" />

                                                <div className="ps-4">
                                                    <Link href='#' className="text-lg hover:text-indigo-600 duration-500 ease-in-out">{item.name}</Link>
                                                    <p className="text-slate-400">{item.title}</p>
                                                </div>
                                            </div>

                                            <div className="mt-6">
                                                <p className="text-slate-400">{item.des}</p>
                                                <ul className="list-none mb-0 text-amber-400 mt-2 space-x-1">
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                </ul>
                                            </div>
                                        </li>

                                        <li className="rounded-lg shadow dark:shadow-gray-800 p-6">
                                            <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                                                <Image src={item.image2} width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt="" />

                                                <div className="ps-4">
                                                    <Link href='#' className="text-lg hover:text-indigo-600 duration-500 ease-in-out">{item.name2}</Link>
                                                    <p className="text-slate-400">{item.title2}</p>
                                                </div>
                                            </div>

                                            <div className="mt-6">
                                                <p className="text-slate-400">{item.des2}</p>
                                                <ul className="list-none mb-0 text-amber-400 mt-2 space-x-1">
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
                                )
                            })}
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Our Instructor</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <TeamData/>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <BlogTwo title={false}/>
            </div>
        </section>   

        <Footer/>
        <CookieModal/>
        <Switcher/>
        </>
    )
}