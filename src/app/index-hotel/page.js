import React from 'react'
import Link from "next/link"
import Image from "next/image"

import Navbar from '../componets/Navbar/navbar'
import Footer from '../componets/Footer/footer'
import Switcher from '../componets/switcher'
import CookieModal from '../componets/cookieModal'
import ClientsOne from '../componets/clientsOne'
import CompanyLogo from '../componets/companyLogo'
import Blog from '../componets/blog'
import VideoModalThree from '../componets/videoModal/videoModalThree'

import {BsCheckCircle,FaRegEnvelope,PiCurrencyDollarSimpleLight,PiAirplaneTakeoff} from "../assets/icons/icons"
 
import { hotelData } from '../Data/data'

export default function Hotel(){
    
    return(
        <>
        <Navbar navClass="nav-light"/>

        <section className="relative table w-full py-36 lg:py-64">
            <div className="absolute inset-0" id="overlay" style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundImage: `url('/images/hotel/bg2.jpg')` }}></div>
            <div className="absolute inset-0 ltr:md:bg-gradient-to-l rtl:md:bg-gradient-to-r md:from-transparent md:via-indigo-600/80 md:to-indigo-800"></div>
            <div className="container relative">
                <div className="grid grid-cols-1">
                    <div className="md:text-start text-center mt-10">
                        <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">Make your holidays <br /> memorables</h1>
                        <p className="text-white/70 text-xl max-w-xl">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>

                        <Link href="#">
                            <i className="mdi mdi-arrow-down text-center inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-900 h-12 w-12 mx-auto shadow-md dark:shadow-gray-800 mt-6"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative">
            <div className="container relative">
                <div className="grid grid-cols-1 justify-center">
                    <div className="relative -mt-28">
                        <div className="p-6 bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800">
                            <div className="section-title">
                                <h4 className="text-2xl font-semibold mb-3">Search your trip</h4>
                                <p className="text-slate-400 mx-auto para-desc">We make it a priority to offer flexible services to accomodate your needs</p>
                            </div>

                            <form className="mt-4" >
                                <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4">
                                    <div>
                                        <label className="font-semibold">Check in :</label>
                                        <input name="date" type="date" className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 start" placeholder="Select date :" />
                                    </div>

                                    <div>
                                        <label className="font-semibold">Check out :</label>
                                        <input name="date1" type="date" className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 end" placeholder="Select date :" />
                                    </div>

                                    <div>
                                        <label className="font-semibold">Adults :</label>
                                        <input type="number" min="0"  id="adult" className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" required="" placeholder="Adults :" />
                                    </div>

                                    <div>
                                        <label className="font-semibold">Childrens :</label>
                                        <input type="number" min="0"  id="childrens" className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" required="" placeholder="Childrens :" />
                                    </div>

                                    <div className="lg:mt-7">
                                        <input type="submit" id="submit" name="send" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full" value="Search Now" />
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
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="lg:col-span-5 md:col-span-6">
                        <div className="relative">
                            <Image width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} src="/images/hotel/ab1.jpg" className="rounded-full lg:w-[400px] w-[280px]" alt="" />
                            <div className="absolute -end-5 -bottom-16">
                                <Image width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} src="/images/hotel/ab2.jpg" className="rounded-full lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 md:col-span-6 mt-8 md:mt-0">
                        <div className="lg:ms-5">
                            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Get inspiration for future trips weekly</h3>

                            <p className="text-slate-400 max-w-xl">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with real content.</p>

                            <ul className="list-none text-slate-400 mt-4">
                                <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Digital Marketing Solutions for Tomorrow</li>
                                <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Our Talented & Experienced Marketing Agency</li>
                                <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Create your own skin to match your brand</li>
                            </ul>

                            <div className="mt-6">
                                <Link href="/contact-one" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2"><FaRegEnvelope className="me-2 text-sm"/> Contact us</Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <CompanyLogo/>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Popular Tours</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-[30px] mt-8">

                    {
                        hotelData.map((Data,index) => {
                            return (
                                <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800" key={index}>
                                    <Image width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} src={Data.image} alt="" />
                                    <span className="absolute inset-0 bg-slate-900/20 duration-500"></span>
                                    <div className="absolute top-0 start-0 p-4 pb-0">
                                        <span className="bg-orange-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Recommend</span>
                                    </div>
                                    <div className="absolute bottom-0 start-0 end-0 p-4 pt-0">
                                        <Link href="#" className="text-white/80 hover:text-white text-xl font-semibold">Paradise Beach, Island</Link>
                                        <div className="flex justify-between mt-1">
                                            <span className="text-gray-100 flex items-center"><PiCurrencyDollarSimpleLight className="me-2"/> 549</span>
                                            <span className="text-gray-100 flex items-center"><PiAirplaneTakeoff className="me-1"/>10 Days</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="lg:col-span-5 md:col-span-6 order-1 md:order-2">
                        <Image src="/images/hotel/ab3.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="rounded-full" alt="" />
                    </div>

                    <div className="lg:col-span-7 md:col-span-6 order-2 md:order-1">
                        <div className="lg:me-5">
                            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Resort Surprises</h3>

                            <p className="text-slate-400 max-w-xl">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with real content.</p>

                            <ul className="list-none  text-slate-400 mt-4">
                                <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Digital Marketing Solutions for Tomorrow</li>
                                <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Our Talented & Experienced Marketing Agency</li>
                                <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Create your own skin to match your brand</li>
                            </ul>

                            <div className="mt-6">
                                <VideoModalThree/>
                                <span className="font-semibold ms-2 align-middle">Watch Now</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" md:mt-24 mt-16" >
                <ClientsOne/>
            </div>
            
        </section>

        <section className='container md:mb-24 mb-16'>
          <Blog/>
        </section>

        <Footer/>
        <Switcher/>
        <CookieModal/>
        </>
    )
}