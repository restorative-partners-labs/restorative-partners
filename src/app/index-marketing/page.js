import React from 'react'
import Link from "next/link"
import Image from "next/image"

import Navbar from '../componets/Navbar/navbar'
import Footer from '../componets/Footer/footer'
import Switcher from '../componets/switcher'
import CookieModal from '../componets/cookieModal'
import ClientsOne from '../componets/clientsOne'
import VideoModal from '../componets/videoModal/videoModal'
import MarketingCounter from '../componets/counter/marketingCounter'

import { contactData } from '../Data/data'

import * as Icon from 'react-feather';
import { FaArrowRight,BsCheckCircle } from '../assets/icons/icons'

export default function Marketing(){
    return(
        <>
        <Navbar/>

        <section className="relative table w-full md:py-44 py-36">
             <div className="absolute inset-0 bg-indigo-600/5"></div>
             <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                       <div className="md:col-span-7">
                           <div className="md:me-6">
                               <span className="text-indigo-600 font-medium">Techwind Marketing</span>
                              <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">Increase Your Business <br /> With Techwind</h4>
                              <p className="text-slate-400 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>
                              <div className="subcribe-form mt-6 mb-3">
                                  <form className="relative max-w-xl">
                                      <input type="email" id="subcribe" name="email" className="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800" placeholder="Your Email Address :" />
                                      <button type="submit" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide align-middle transition duration-500 ease-in-out text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-full">Try it for free<FaArrowRight className="ms-2 text-[10px]"/></button>
                                  </form>
                              </div>
                             <span className="text-slate-400 font-medium">Looking for help? <Link href="#" className="text-indigo-600">Get in touch with us</Link></span>
                         </div>
                     </div>
                      <div className="md:col-span-5">
                          <div className="relative">
                              <Image src="/images/marketing.png" width={0} height={0} sizes='100vw' style={{width:"100%",height:"auto"}} alt="" />
                             <VideoModal/>
                           </div>
                     </div>
                   </div>
             </div>
        </section>

        <section className="py-10 bg-indigo-600">
            <div className="container relative">
                <MarketingCounter/>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px] relative">
                    <div className="lg:col-span-8 md:col-span-12">
                        <div className="grid grid-cols-1 pb-8">
                            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Instant Smart Solutions <br /> With Techwind</h3>

                            <p className="text-slate-400 max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>
                        </div>

                        <div className="grid md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">

                            <div className="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900">
                                <Icon.Codesandbox className="h-12 w-12 stroke-1 text-indigo-600"></Icon.Codesandbox>
                                <div className="content mt-7">
                                    <Link href="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">User Friendly</Link>
                                    <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                                    <div className="mt-5">
                                        <Link href="/page-services" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900">
                                <Icon.Send className="h-12 w-12 stroke-1 text-indigo-600"></Icon.Send>

                                <div className="content mt-7">
                                    <Link href="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">Super Fast</Link>
                                    <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>

                                    <div className="mt-5">
                                        <Link href="/page-services" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More<FaArrowRight className="ms-2 text-[10px]"/> </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900">
                                <Icon.Star className="h-12 w-12 stroke-1 text-indigo-600"></Icon.Star>

                                <div className="content mt-7">
                                    <Link href="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">Insightful Analytics</Link>
                                    <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>

                                    <div className="mt-5">
                                        <Link href="/page-services" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More<FaArrowRight className="ms-2 text-[10px]"/> </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900">
                                <Icon.Bookmark className="h-12 w-12 stroke-1 text-indigo-600"></Icon.Bookmark>

                                <div className="content mt-7">
                                    <Link href="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">Highly Rated</Link>
                                    <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>

                                    <div className="mt-5">
                                        <Link href="/page-services" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4 md:col-span-12">
                        <div className="grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-[30px]">
                            <div className="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900">
                                <Icon.Users className="h-12 w-12 stroke-1 text-indigo-600"></Icon.Users>

                                <div className="content mt-7">
                                    <Link href="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">User Forum Forum</Link>
                                    <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>

                                    <div className="mt-5">
                                        <Link href="/page-services" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More<FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900">
                                <Icon.MessageCircle className="h-12 w-12 stroke-1 text-indigo-600"></Icon.MessageCircle>

                                <div className="content mt-7">
                                    <Link href="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">24/7 Support</Link>
                                    <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>

                                    <div className="mt-5">
                                        <Link href="/page-services" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-hidden after:content-[''] after:absolute after:h-40 after:w-40 after:bg-red-600/5 after:top-2/4 after:start-0 after:-z-1 after:rounded-3xl after:animate-[spin_10s_linear_infinite]"></div>
                    <div className="overflow-hidden after:content-[''] after:absolute after:h-[512px] after:w-[512px] after:bg-indigo-600/5 after:top-1/4 after:end-0 after:-z-1 after:rounded-full"></div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="md:col-span-6">
                        <div className="lg:me-8">
                            <Image src="/images/shape-image.png" width={0} height={0} sizes='100vw' style={{width:"100%",height:"auto"}} alt="" />
                        </div>
                    </div>

                    <div className="md:col-span-6">
                        <div className="lg:ms-5">
                            <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Fast & Effective</h6>
                            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Powerful Digitalization <br /> With Techwind</h3>

                            <p className="text-slate-400 max-w-xl mb-6">Get instant helpful resources about anything on the go, easily implement secure money transfer solutions, boost your daily efficiency, connect to other app users and create your own Techwind network, and much more with just a few taps. commodo consequat. Duis aute irure.</p>

                            <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-full">Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="md:col-span-6 order-1 md:order-2">
                        <div className="lg:ms-8">
                            <Image src="/images/illustrator/SEO_SVG.svg" width={0} height={0} sizes='100vw' style={{width:"100%",height:"auto"}} alt="" />
                        </div>
                    </div>

                    <div className="md:col-span-6 order2 md:order-1">
                        <div className="lg:me-5">
                            <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Easy To Track</h6>
                            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Techwind Marketing <br /> Analytics For All Expenses</h3>

                            <p className="text-slate-400 max-w-xl">You can combine all the Techwind templates into a single one, you can take a component from the Application theme and use it in the Website.</p>

                            <ul className="list-none text-slate-400 my-6">
                                <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Digital Marketing Solutions for Tomorrow</li>
                                <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Our Talented & Experienced Marketing Agency</li>
                                <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Create your own skin to match your brand</li>
                            </ul>

                            <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-full">Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
           <ClientsOne/>
        </section>

        <section className="relative md:py-24 py-16 overflow-hidden">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="lg:col-span-5 md:col-span-6">
                        <div className="lg:me-8">
                            <div className="relative">
                                <Image src="/images/feature.png" alt="" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}}/>
                                <div className="overflow-hidden absolute h-[512px] w-[512px] bg-indigo-600/5 top-1/4 start-0 end-0 align-middle -z-1 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 md:col-span-6">
                        <div className="lg:ms-5">
                            <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 p-6">
                                <h3 className="mb-6 text-2xl leading-normal font-medium">Get in touch !</h3>

                                <form>
                                    <div className="grid lg:grid-cols-12 lg:gap-6">
                                        <div className="lg:col-span-6 mb-5">
                                            <div className="text-start">
                                                <label htmlFor="name" className="font-semibold">Your Name:</label>
                                                <div className="form-icon relative mt-2">
                                                    <Icon.User className="w-4 h-4 absolute top-3 start-4"></Icon.User>
                                                    <input name="name" id="name" type="text" className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Name :" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="lg:col-span-6 mb-5">
                                            <div className="text-start">
                                                <label htmlFor="email" className="font-semibold">Your Email:</label>
                                                <div className="form-icon relative mt-2">
                                                    <Icon.Mail className="w-4 h-4 absolute top-3 start-4"></Icon.Mail>
                                                    <input name="email" id="email" type="email" className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Email :" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1">
                                        <div className="mb-5">
                                            <div className="text-start">
                                                <label htmlFor="subject" className="font-semibold">Your Question:</label>
                                                <div className="form-icon relative mt-2">
                                                    <Icon.Book className="w-4 h-4 absolute top-3 start-4"></Icon.Book>
                                                    <input name="subject" id="subject" className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Subject :" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-5">
                                            <div className="text-start">
                                                <label htmlFor="comments" className="font-semibold">Your Comment:</label>
                                                <div className="form-icon relative mt-2">
                                                    <Icon.MessageCircle className="w-4 h-4 absolute top-3 start-4"></Icon.MessageCircle>
                                                    <textarea name="comments" id="comments" className="form-input ps-11 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Message :"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" id="submit" name="send" className="py-2 px-5 font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md justify-center flex items-center">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
                    {contactData.map((item, index)=>{
                       let Icons = item.icon
                        return(
                            <div className="text-center px-6" key={index}>
                                <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                                    <Icons className="w-[24px] h-[24px]"/>
                                </div>

                                <div className="content mt-7">
                                    <h5 className="text-xl font-semibold">{item.name}</h5>
                                    <p className="text-slate-400 mt-3">{item.desc}</p>

                                    <div className="mt-5">
                                        <Link href="#" className="text-indigo-600 font-medium">{item.title}</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>

        <Footer/>
        <Switcher/>
        <Switcher/>
        <CookieModal/>
        </>
    )
}