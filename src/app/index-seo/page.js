import React from 'react'
import Link from "next/link"
import Image from "next/image"

import Navbar from '../componets/Navbar/navbar'
import Footer from '../componets/Footer/footer'
import Switcher from '../componets/switcher'
import CookieModal from '../componets/cookieModal'
import CompanyLogo from '../componets/companyLogo'
import GetInTuct from '../componets/getInTuch'
import Blog from '../componets/blog'
import Tab from '../componets/seo/tab'
import VideoModal from '../componets/videoModal/videoModal'
import TextAnimation from '../componets/seo/textAnimation'
import Counter from '../componets/seo/counter'

import { SeoServece,clientsDataTwo } from '../Data/data'

import { FaArrowRight } from '../assets/icons/icons'

export default function Seo(){
    return(
        <>
        <Navbar/>

        <section className="relative md:py-64 py-36 items-center  bg-center bg-no-repeat bg-cover" style={{backgroundImage:"url('/images/bg-seo.png')"}}>
            <div className="container relative">
                <div className="grid grid-cols-1 justify-center text-center">
                    <div className="">
                       <TextAnimation/>
                        <p className="text-lg max-w-xl mx-auto">Beatae cum eius, animi itaque aliquid ducimus facere dicta, vitae ipsam maiores nam sit blanditiis, quisquam expedita?</p>

                        <div className="subcribe-form mt-6 mb-3">
                            <form className="relative max-w-xl mx-auto">
                                <input type="url" id="site-url" name="url" className="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white/60 dark:bg-slate-900/60 shadow dark:shadow-gray-800" placeholder="http://www.yourdomain.com" />
                                <button type="submit" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle transition duration-500 ease-in-out text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-full">Start Free Trial</button>
                            </form>
                        </div>

                        <span className="font-medium">Looking for help? <Link href="#" className="text-indigo-600">Get in touch with us</Link></span>
                    </div>
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

        <section className="relative md:pb-24 pb-16">
            <div className="container relative">
                <div className="md:flex justify-center">
                    <div className="lg:w-3/4 md:w-full relative -mt-16">
                        <div className="p-6 bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800">
                            <Counter/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Services</h6>
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold bg-gradient-to-r from-red-600 to-indigo-600 text-transparent bg-clip-text">We are SEO Professionals</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Your content is an integral part of your SEO efforts and online marketing strategy</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-6 gap-[30px]">
                    {SeoServece.map((item,index)=>{
                        let Icons = item.icon
                        return(
                            <div key={index} className="p-6 hover:shadow-xl hover:shadow-gray-100 dark:hover:shadow-gray-800 transition duration-500 rounded-2xl mt-6">
                                <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800">
                                    <Icons className="h-7 w-7"/>
                                </div>

                                <div className="content mt-7">
                                    <Link href="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">{item.title}</Link>
                                    <p className="text-slate-400 mt-3">{item.desc}</p>

                                    <div className="mt-5">
                                        <Link href="/page-services" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
        
        <Tab/>

        <section className="realtive md:py-24 py-16">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="md:col-span-6">
                        <div className="relative lg:me-8">
                            <Image src="/images/business/about01.jpg" width={400} height={500}  className="rounded-md" alt="" />

                            <div className="absolute bottom-24 end-0">
                                <Image src="/images/business/about02.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}}  className="rounded-md shadow-md w-48 h-48" alt="" />
                                <VideoModal/>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-6">
                        <div className="lg:ms-5">
                            <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Our History</h6>
                            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">“Sweet as the Moment When <br /> the coworking Went Pop”</h3>

                            <p className="text-slate-400 max-w-xl mb-6">Get instant helpful resources about anything on the go, easily implement secure money transfer solutions, boost your daily efficiency, connect to other app users and create your own Techwind network, and much more with just a few taps. commodo consequat. Duis aute irure.</p>

                            <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-md">Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
               <CompanyLogo/>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Loved by businesses worldwide</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    {clientsDataTwo.map((item,index)=>{
                            return(
                                <ul className="space-y-8" key={index}>
                                    <li className="shadow dark:shadow-gray-800 p-6">
                                        <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                                            <Image src={item.image} height={64} width={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt="" />
        
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
                                            <Image src={item.image1} height={64} width={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt="" />
        
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
            <div className='container relative md:mt-24 mt-16'>
                <Blog/>
            </div>
         <GetInTuct className="container relative md:mt-24 mt-16" title={true}/>  
        </section>
        <Footer/>
        <Switcher/>
        <CookieModal/>
        </>
    )
}