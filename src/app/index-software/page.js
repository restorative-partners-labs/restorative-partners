import React from 'react'
import Link from "next/link"
import Image from "next/image"

import Navbar from '../componets/Navbar/navbar'
import Footer from '../componets/Footer/footer'
import Switcher from '../componets/switcher'
import CookieModal from '../componets/cookieModal'
import MobileApp from '../componets/mobileApp'
import CompanyLogo from '../componets/companyLogo'
import ClientsTwo from '../componets/clientsTwo'

import * as Icon from 'react-feather';

import {BsCheckCircle,MdKeyboardArrowRight,MdAirplay, MdApi,FaArrowRight,FaRegComments,LiaSwatchbookSolid,BiTachometer,LuUserCheck} from "../assets/icons/icons"
import {HiOutlineCog6Tooth} from "react-icons/hi2"
import ServiceFaq from '../componets/serviceFaq'
import { hostingAbout } from '../Data/dataThree'

export default function Software(){
  
    return(
        <>
        <Navbar navClass="nav-light" />

        <section className="relative md:h-screen md:py-0 py-36 items-center overflow-hidden bg-indigo-600  bg-center bg-no-repeat bg-cover" style={{backgroundImage:"url('/images/bg3.png')"}}>
            <div className="container relative">
                <div className="grid grid-cols-1 md:mt-36 mt-10 text-center">
                    <h4 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">Integrated Techwind <span className="text-orange-500">Software <br /> & Saas</span> Plateform </h4>
                    <p className="text-white/70 text-lg max-w-xl mx-auto">Launch your campaign and benefit from our expertise
                        on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                    <div className="subcribe-form mt-6 mb-3">
                        <form className="relative max-w-xl mx-auto">
                            <input type="email" id="subcribe" name="email" className="form-input border-0 pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800" placeholder="Your Email Address :" />

                            <button type="submit" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white rounded-full">Try it for free <FaArrowRight className="ms-2 text-[10px]"/></button>
                        </form>
                    </div>

                    <span className="text-slate-400 font-medium">Looking for help? <Link href="#" className="text-orange-500">Get in touch with us</Link></span>

                    <div className="overflow-hidden mt-8">
                        <Image src="/images/saas/home.png" alt="" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}}/>
                    </div>

                    <div className="overflow-hidden after:content-[''] after:absolute after:h-14 after:w-14 after:bg-white/20 after:-top-[40px] after:start-[30%] after:rounded-lg after:animate-[spin_10s_linear_infinite]"></div>

                    <div className="overflow-hidden after:content-[''] after:absolute after:h-10 after:w-10 after:bg-white/20 after:top-[30%] after:end-[20%] after:rounded-full after:animate-ping"></div>
                </div>
            </div>
        </section>
        
        <div className="relative">
            <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-white dark:text-slate-900">
                <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <section className="py-6 border-t border-b border-gray-100 dark:border-gray-700">
            <div className="container relative">
                <CompanyLogo/>
            </div>
        </section>

        <section className="relative md:py-24 py-16 overflow-hidden">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">How It Works?</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">

                    <div className="group relative hover:bg-white dark:hover:bg-slate-900 hover:shadow dark:hover:shadow-gray-800 p-6 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center h-fit">
                        <div className="relative overflow-hidden text-transparent -m-3">
                            <Icon.Hexagon className="h-28 w-28 fill-indigo-600/5 dark:fill-white/5 mx-auto rotate-[30deg]"></Icon.Hexagon>
                            <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 dark:text-white rounded-xl transition duration-500 ease-in-out text-3xl flex align-middle justify-center items-center"> <MdAirplay className="w-7 h-7"/>
                            </div>
                        </div>

                        <div className="mt-6">
                            <Link href="#" className="text-xl font-medium hover:text-indigo-600 duration-500 ease-in-out">UX / UI Design</Link>
                            <p className="text-slate-400 transition duration-500 ease-in-out mt-3">If the distribution of letters and words is random, the reader will not be distracted from making.</p>
                        </div>
                    </div>

                    <div className="group relative hover:bg-white dark:hover:bg-slate-900 hover:shadow dark:hover:shadow-gray-800 p-6 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center h-fit md:mt-16">
                        <div className="relative overflow-hidden text-transparent -m-3">
                            <Icon.Hexagon className="h-28 w-28 fill-indigo-600/5 dark:fill-white/5 mx-auto rotate-[30deg]"></Icon.Hexagon>
                            <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 dark:text-white rounded-xl transition duration-500 ease-in-out text-3xl flex align-middle justify-center items-center"><MdApi className="w-7 h-7"/>
                            </div>
                        </div>

                        <div className="mt-6">
                            <Link href="#" className="text-xl font-medium hover:text-indigo-600 duration-500 ease-in-out">IOS App Designer</Link>
                            <p className="text-slate-400 transition duration-500 ease-in-out mt-3">If the distribution of letters and words is random, the reader will not be distracted from making.</p>
                        </div>
                    </div>

                    <div className="group relative hover:bg-white dark:hover:bg-slate-900 hover:shadow dark:hover:shadow-gray-800 p-6 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center h-fit">
                        <div className="relative overflow-hidden text-transparent -m-3">
                            <Icon.Hexagon className="h-28 w-28 fill-indigo-600/5 dark:fill-white/5 mx-auto rotate-[30deg]"></Icon.Hexagon>
                            <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 dark:text-white rounded-xl transition duration-500 ease-in-out text-3xl flex align-middle justify-center items-center"><HiOutlineCog6Tooth className="w-7 h-7"/>
                            </div>
                        </div>

                        <div className="mt-6">
                            <Link href="#" className="text-xl font-medium hover:text-indigo-600 duration-500 ease-in-out">Web Security</Link>
                            <p className="text-slate-400 transition duration-500 ease-in-out mt-3">If the distribution of letters and words is random, the reader will not be distracted from making.</p>
                        </div>
                    </div>

                    <div className="group relative hover:bg-white dark:hover:bg-slate-900 hover:shadow dark:hover:shadow-gray-800 p-6 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center h-fit md:mt-16">
                        <div className="relative overflow-hidden text-transparent -m-3">
                            <Icon.Hexagon className="h-28 w-28 fill-indigo-600/5 dark:fill-white/5 mx-auto rotate-[30deg]"></Icon.Hexagon>
                            <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 dark:text-white rounded-xl transition duration-500 ease-in-out text-3xl flex align-middle justify-center items-center"><FaRegComments className="w-7 h-7"/>
                            </div>
                        </div>

                        <div className="mt-6">
                            <Link href="#" className="text-xl font-medium hover:text-indigo-600 duration-500 ease-in-out">24/7 Support</Link>
                            <p className="text-slate-400 transition duration-500 ease-in-out mt-3">If the distribution of letters and words is random, the reader will not be distracted from making.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    <Image src="/images/shape-image.png" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} alt="" />

                    <div className="lg:ms-8">
                        <h4 className="mb-4 text-2xl leading-normal font-medium">Great Product Analytics <br /> With Real Problem</h4>
                        <p className="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                        <ul className="list-none  text-slate-400 mt-4">
                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Digital Marketing Solutions for Tomorrow</li>
                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Our Talented & Experienced Marketing Agency</li>
                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Create your own skin to match your brand</li>
                        </ul>

                        <div className="mt-4">
                              <Link href="/page-aboutus" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Find Out More <MdKeyboardArrowRight className="text-xl ms-1"/> </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    <div className="relative order-1 md:order-2">
                        <Image src="/images/saas/classic03.png" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}}  className="rounded-lg shadow-md dark:shadow-gray-800" alt="" />
                        <div className="overflow-hidden absolute lg:h-[400px] h-[320px] lg:w-[400px] w-[320px] bg-indigo-600/5 bottom-0 end-0 rotate-45 -z-1 rounded-3xl"></div>
                    </div>

                    <div className="lg:me-8 order-2 md:order-1">
                        <h4 className="mb-4 text-2xl leading-normal font-medium">Get Notified About Importent Email</h4>
                        <p className="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                        <ul className="list-none  text-slate-400 mt-4">
                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Digital Marketing Solutions for Tomorrow</li>
                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Our Talented & Experienced Marketing Agency</li>
                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Create your own skin to match your brand</li>
                        </ul>

                        <div className="mt-4">
                            <Link href="/page-aboutus" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Find Out More <MdKeyboardArrowRight className="text-xl ms-1"/> </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
                    <div className="relative">
                        <Image src="/images/saas/classic02.png" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}}  className="rounded-lg shadow-md dark:shadow-gray-800" alt="" />
                        <div className="overflow-hidden absolute lg:h-[400px] h-[320px] lg:w-[400px] w-[320px] bg-indigo-600/5 bottom-0 start-0 rotate-45 -z-1 rounded-3xl"></div>
                    </div>

                    <div className="lg:ms-8">
                        <div className="grid grid-cols-1 gap-[30px]">
                            {hostingAbout.map((item,index)=>{
                                let Icons = item.icon
                                return(
                                    <div key={index} className="group flex items-center relative overflow-hidden p-6 rounded-md shadow dark:shadow-gray-800 bg-gray-50 dark:bg-slate-800 hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-500 ease-in-out">
                                        <span className="text-indigo-600 group-hover:text-white text-5xl font-semibold transition-all duration-500 ease-in-out">
                                            <Icons className="w-8 h-8"/>
                                        </span>
                                        <div className="flex-1 ms-3">
                                            <h5 className="group-hover:text-white text-xl font-semibold transition-all duration-500 ease-in-out">{item.title}</h5>
                                            <p className="text-slate-400 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-2">{item.desc}</p>
                                        </div>
                                        <div className="absolute start-1 top-5 text-dark/[0.03] dark:text-white/[0.03] text-8xl group-hover:text-white/[0.04] transition-all duration-500 ease-in-out">
                                            <Icons className="w-20 h-20"/>
                                        </div>
                                    </div>

                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <ClientsTwo/>

             <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Pricing Plans</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid md:grid-cols-3 grid-cols-1 mt-8 gap-[30px] items-center">
                    <div className="p-6">
                        <div className="pb-8">
                            <h3 className="mb-6 text-xl font-medium dark:text-white">Free</h3>
                            <div className="mb-6 dark:text-white/50">
                                <span className="relative h6 -top-5 text-xl">$</span>
                                <span className="text-5xl h6 font-medium dark:text-white">00</span>
                                <span className="inline-block h6 ml-1">/ month</span>
                            </div>
                            <p className="mb-6 text-slate-400">Free features for your business.</p>
                            <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-md w-full">Redeem Now</Link>
                        </div>
                        <div className="border-b border-slate-200 dark:border-slate-200/5"></div>
                        <ul className="self-start pt-8">
                            <li className="flex items-center mb-1 text-slate-400">
                                <BsCheckCircle className="text-indigo-600 text-base me-2"/>
                                <span>Complete documentation</span>
                            </li>
                            <li className="flex items-center my-1 text-slate-400">
                                <BsCheckCircle className="text-indigo-600 text-base me-2"/>
                                <span>Working materials in Figma</span>
                            </li>
                            <li className="flex items-center my-1 text-slate-400">
                                <BsCheckCircle className="text-indigo-600 text-base me-2"/>
                                <span>100GB cloud storage</span>
                            </li>
                            <li className="flex items-center my-1 text-slate-400">
                                <BsCheckCircle className="text-indigo-600 text-base me-2"/>
                                <span>500 team members</span>
                            </li>
                            <li className="flex items-center my-1 text-slate-400">
                                <BsCheckCircle className="text-indigo-600 text-base me-2"/>
                                <span>Free Support</span>
                            </li>
                        </ul>
                    </div>

                    <div className="shadow rounded-md p-6 bg-gradient-to-t bg-indigo-600">
                        <div className="pb-8">
                            <h3 className="mb-6 text-xl font-medium text-white">Business</h3>
                            <div className="mb-6 text-white/50">
                                <span className="relative h6 -top-5 text-xl">$</span>
                                <span className="text-5xl h6 font-bold text-white">10</span>
                                <span className="inline-block h6 ml-1">/ month</span>
                            </div>
                            <p className="mb-6 text-white">Basic features for up to 10 users.</p>
                            <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white rounded-md w-full">Started Now</Link>
                        </div>
                        <div className="border-b border-slate-200/10"></div>
                        <ul className="self-start pt-8">
                            <li className="flex items-center mb-1 text-white/80">
                                <BsCheckCircle className="text-orange-500 text-base me-2"/>
                                <span>Complete documentation</span>
                            </li>
                            <li className="flex items-center my-1 text-white/80">
                                <BsCheckCircle className="text-orange-500 text-base me-2"/>
                                <span>Working materials in Figma</span>
                            </li>
                            <li className="flex items-center my-1 text-white/80">
                                <BsCheckCircle className="text-orange-500 text-base me-2"/>
                                <span>100GB cloud storage</span>
                            </li>
                            <li className="flex items-center my-1 text-white/80">
                                <BsCheckCircle className="text-orange-500 text-base me-2"/>
                                <span>500 team members</span>
                            </li>
                            <li className="flex items-center my-1 text-white/80">
                                <BsCheckCircle className="text-orange-500 text-base me-2"/>
                                <span>Free Support</span>
                            </li>
                        </ul>
                    </div>

                    <div className="p-6">
                        <div className="pb-8">
                            <h3 className="mb-6 text-xl font-medium dark:text-white">Corporate</h3>
                            <div className="mb-6 dark:text-white/50">
                                <span className="relative h6 -top-5 text-xl">$</span>
                                <span className="text-5xl h6 font-medium dark:text-white">49</span>
                                <span className="inline-block h6 ml-1">/ month</span>
                            </div>
                            <p className="mb-6 text-slate-400">Corporate features for up to 100 users.</p>
                            <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full">Signup Now</Link>
                        </div>
                        <div className="border-b border-slate-200 dark:border-slate-200/5"></div>
                        <ul className="self-start pt-8">
                            <li className="flex items-center mb-1 text-slate-400">
                                <BsCheckCircle className="text-indigo-600 text-base me-2"/>
                                <span>Complete documentation</span>
                            </li>
                            <li className="flex items-center my-1 text-slate-400">
                                <BsCheckCircle className="text-indigo-600 text-base me-2"/>
                                <span>Working materials in Figma</span>
                            </li>
                            <li className="flex items-center my-1 text-slate-400">
                                <BsCheckCircle className="text-indigo-600 text-base me-2"/>
                                <span>100GB cloud storage</span>
                            </li>
                            <li className="flex items-center my-1 text-slate-400">
                                <BsCheckCircle className="text-indigo-600 text-base me-2"/>
                                <span>500 team members</span>
                            </li>
                            <li className="flex items-center my-1 text-slate-400">
                                <BsCheckCircle className="text-indigo-600 text-base me-2"/>
                                <span>Free Support</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Frequently Asked Questions</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <ServiceFaq/>
            </div>

            <MobileApp/>

        </section>

        <Footer/>
        <Switcher/>
        <CookieModal/>
        </>
    )
}