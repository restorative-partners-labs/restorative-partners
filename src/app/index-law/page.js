import React from 'react'
import Link from "next/link"
import Image from "next/image"

import Navbar from '../componets/Navbar/navbar'
import Footer from '../componets/Footer/footer'
import Switcher from '../componets/switcher'
import CookieModal from '../componets/cookieModal'
import CompanyLogo from '../componets/companyLogo'
import BlogTwo from '../componets/blogTwo'
import TeamData from '../componets/team'
import VideoModal from '../componets/videoModal/videoModal'
import LowOffice from '../componets/low-office'
import VideoModalTwo from '../componets/videoModal/videoModalTwo'

import * as Icon from 'react-feather';

import {BsCheckCircle,MdKeyboardArrowRight,FaRegEnvelope,LiaUniversitySolid, LiaMoneyBillAltSolid, LiaAwardSolid} from "../assets/icons/icons"
import { lowClient } from '../Data/dataThree'


export default function IndexLow(){

    return(
        <>
        <Navbar navClass="nav-light" />

        <section className="flex md:h-screen py-36 items-center bg-center bg-no-repeat bg-cover" style={{backgroundImage:"url('/images/law/bg.jpg')"}}>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 mt-10">
                    <h5 className="text-lg text-white font-medium mb-3">Best Law Firm</h5>
                    <h3 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-white">Unbelievable solutions <br /> for all legal cases</h3>

                    <p className="text-slate-300 text-lg max-w-xl">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>

                    <div className="mt-8">
                        <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white">Get Started</Link>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800 overflow-hidden">
            <div className="container relative">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                    <div className="group relative p-6 hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-500 ease-in-out bg-white dark:bg-slate-900 overflow-hidden text-center">
                        <div className="w-20 h-20 bg-indigo-600 group-hover:bg-white text-white group-hover:text-indigo-600 rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 dark:group-hover:shadow-gray-700 mx-auto">
                            <LiaUniversitySolid className="h-7 w-7"/>
                        </div>

                        <div className="mt-6">
                            <Link href="#" className="text-lg font-medium group-hover:text-white transition-all duration-500 ease-in-out">Professional Court Service</Link>
                            <p className="text-slate-400 group-hover:text-white/75 transition-all duration-500 ease-in-out mt-3">Competently leverage existing enterprise wide niches through stand alone services. Quickly productize technically.</p>
                        </div>
                    </div>

                    <div className="group relative p-6 bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-500 ease-in-out overflow-hidden text-center">
                        <div className="w-20 h-20 bg-white text-indigo-600 rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-600 mx-auto">
                            
                            <LiaMoneyBillAltSolid className="h-7 w-7"/>
                        </div>

                        <div className="mt-6">
                            <Link href="#" className="text-lg font-medium text-white transition-all duration-500 ease-in-out">Competitive Pricing</Link>
                            <p className="text-white/75 transition-all duration-500 ease-in-out mt-3">Competently leverage existing enterprise wide niches through stand alone services. Quickly productize technically.</p>
                        </div>
                    </div>

                    <div className="group relative p-6 hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-500 ease-in-out bg-white dark:bg-slate-900 overflow-hidden text-center">
                        <div className="w-20 h-20 bg-indigo-600 group-hover:bg-white text-white group-hover:text-indigo-600 rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 dark:group-hover:shadow-gray-700 mx-auto">
                           
                            <LiaAwardSolid className="h-7 w-7"/>
                        </div>

                        <div className="mt-6">
                            <Link href="#" className="text-lg font-medium group-hover:text-white transition-all duration-500 ease-in-out">Top Expart Attorney</Link>
                            <p className="text-slate-400 group-hover:text-white/75 transition-all duration-500 ease-in-out mt-3">Competently leverage existing enterprise wide niches through stand alone services. Quickly productize technically.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="lg:col-span-5 md:col-span-6">
                        <div className="relative">
                            <div className="relative">
                                <Image src="/images/law/ab1.jpg" width={0} height={0} sizes='100vw' style={{width:"100%" , height:"auto"}} className="lg:w-[400px] w-[280px]" alt="" />
                                <VideoModalTwo/>
                            </div>
                            <div className="absolute -end-5 -bottom-16">
                                <Image src="/images/law/ab2.jpg" width={0} height={0} sizes='100vw' style={{width:"100%" , height:"auto"}} className="lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 md:col-span-6 mt-8 md:mt-0">
                        <div className="lg:ms-5">
                            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Welcome to Techwind <br /> Law Firm Company</h3>

                            <p className="text-slate-400 max-w-xl">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with real content.</p>

                            <ul className="list-none text-slate-400 mt-4">
                                <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Digital Marketing Solutions for Tomorrow</li>
                                <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Our Talented & Experienced Marketing Agency</li>
                                <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Create your own skin to match your brand</li>
                            </ul>

                            <div className="mt-6">
                                <Link href="/contact-one" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white me-2 mt-2"><FaRegEnvelope className="me-2 text-sm"/> Contact us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16 pt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">We provide Different types of office</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>
            </div>

            <div className="container-fluid relative">
                <div className="flex justify-center relative mt-8">
                    <div className="relative w-full">
                        <LowOffice/>
                    </div>
                </div>
            </div>
        </section>

        <section className="pt-20 pb-32 w-full table relative bg-center bg-no-repeat bg-cover" style={{backgroundImage:"url('/images/business/bg02.jpg')"}}>
            <div className="absolute inset-0 bg-slate-900/70"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 text-center">
                    <h3 className="mb-4 md:text-3xl text-2xl text-white font-medium">Speak With Our Expert <br /> Lawyers Today!</h3>

                    <p className="text-white/80 max-w-xl mx-auto mb-0">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>

                    <div className="mt-6">
                        <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2">Free Consultation</Link>
                    </div>
                </div>
            </div>
        </section>

        <div className="container relative">
            <div className="grid grid-cols-1">
                <div className="relative -top-[52px] shadow dark:shadow-gray-800 py-6 bg-white dark:bg-slate-900">
                   <CompanyLogo/>
                </div>
            </div>
        </div>

        <section className="relative md:pt-11 pt-3 md:pb-24 pb-16 overflow-hidden">
            <div className="container relative">
                <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
                    <div className="lg:col-span-5 md:order-2 order-1">
                        <div className="lg:ms-10 relative">
                            <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 p-6">
                                <h3 className="mb-6 text-2xl leading-normal font-medium">Free Consultation</h3>

                                <form>
                                    <div className="grid grid-cols-1 gap-4">
                                        <div className="text-start">
                                            <label htmlFor="name" className="font-semibold">Your Name:</label>
                                            <div className="form-icon relative mt-2">
                                                <Icon.User className="w-4 h-4 absolute top-3 start-4"></Icon.User>
                                                <input name="name" id="name" type="text" className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Name :" />
                                            </div>
                                        </div>

                                        <div className="text-start">
                                            <label htmlFor="email" className="font-semibold">Your Email:</label>
                                            <div className="form-icon relative mt-2">
                                                <Icon.Mail className="w-4 h-4 absolute top-3 start-4"></Icon.Mail>
                                                <input name="email" id="email" type="email" className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Email :" />
                                            </div>
                                        </div>

                                        <div className="text-start">
                                            <label htmlFor="subject" className="font-semibold">Your Question:</label>
                                            <div className="form-icon relative mt-2">
                                                <Icon.Book className="w-4 h-4 absolute top-3 start-4"></Icon.Book>
                                                <input name="subject" id="subject" className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Subject :" />
                                            </div>
                                        </div>

                                        <div className="text-start">
                                            <label htmlFor="comments" className="font-semibold">Your Comment:</label>
                                            <div className="form-icon relative mt-2">
                                                <Icon.MessageCircle className="w-4 h-4 absolute top-3 start-4"></Icon.MessageCircle>
                                                <textarea name="comments" id="comments" className="form-input ps-11 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Message :"></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <button type="submit" id="submit" name="send" className="py-2 px-5 font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md justify-center flex items-center mt-3">Send Message</button>
                                </form>
                            </div>
                            <div className="overflow-hidden absolute lg:h-[400px] h-[320px] lg:w-[400px] w-[320px] bg-indigo-600/5 bottom-0 end-0 rotate-45 -z-1 rounded-3xl"></div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 md:order-1 order-2">
                        <h4 className="mb-4 text-2xl leading-normal font-medium">We Are Ready To Help <br /> You To Get a Solution.</h4>
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
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Clients Testimonials</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    {lowClient.map((item,index)=>{
                        return(
                            <ul className="space-y-8" key={index}>
                                <li className="shadow dark:shadow-gray-800 p-6">
                                    <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                                        <Image src={item.image} width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt="" />
    
                                        <div className="ps-4">
                                            <Link href="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">{item.name}</Link>
                                            <p className="text-slate-400">{item.title}</p>
                                        </div>
                                    </div>
    
                                    <div className="mt-6">
                                        <p className="text-slate-400">{item.desc}</p>
                                        <ul className="list-none space-x-1 mb-0 text-amber-400 mt-2">
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                        </ul>
                                    </div>
                                </li>
    
                                <li className="shadow dark:shadow-gray-800 p-6">
                                    <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                                        <Image src={item.image1} width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt="" />
    
                                        <div className="ps-4">
                                            <Link href="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">{item.name1}</Link>
                                            <p className="text-slate-400">{item.title1}</p>
                                        </div>
                                    </div>
    
                                    <div className="mt-6">
                                        <p className="text-slate-400">{item.desc}</p>
                                        <ul className="list-none space-x-1 mb-0 text-amber-400 mt-2">
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        )
                    })}
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16 md:pt-0 pt-0">
            <div className="container relative">
                <div className="grid grid-cols-1 justify-center">
                    <div className="relative z-1">
                        <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                            <div className="lg:col-start-2 lg:col-span-10">
                                <div className="relative">
                                    <Image src="/images/law/bg2.jpg" width={0} height={0} sizes='100vw' style={{height:"auto", width:"100%"}} className="shadow-lg" alt="" />
                                    <VideoModal/>
                                </div>
                            </div>
                        </div>
                        <div className="content md:mt-8">
                            <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                                <div className="lg:col-start-2 lg:col-span-10">
                                    <div className="grid md:grid-cols-2 grid-cols-1 items-center">
                                        <div className="mt-8">
                                            <div className="section-title text-md-start">
                                                <h6 className="text-white/50 text-lg font-semibold">Team</h6>
                                                <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-white mt-2">Meet Experience <br /> Team Member</h3>
                                            </div>
                                        </div>

                                        <div className="mt-8">
                                            <div className="section-title text-md-start">
                                                <p className="text-white/50 max-w-xl mx-auto mb-2">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                                <Link href="#" className="text-white flex items-center">Read More <MdKeyboardArrowRight className="text-xl ms-1"/></Link>
                                            </div>
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

        
        <section className="relative md:pt-24 pt-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h6 className="text-indigo-600 text-base mb-2">Our Minds</h6>
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Management Team</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>
                <TeamData/>
            </div>
        </section>

        <section className="container relative md:py-24 py-16">
            <BlogTwo/>
        </section>

        <Footer/>
        <Switcher/>
        <CookieModal/>
        </>
    )
}