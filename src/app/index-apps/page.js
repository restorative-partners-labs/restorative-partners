import React from "react"
import Link from "next/link"
import Image from "next/image"

import Navbar from "../componets/Navbar/navbar"
import Footer from "../componets/Footer/footer"
import Switcher from "../componets/switcher"
import CookieModal from "../componets/cookieModal"
import ClientsOne from "../componets/clientsOne"
import MobileApp from "../componets/mobileApp"

import {BsCheckCircle,MdKeyboardArrowRight,FaArrowRight,RiPresentationFill,RiMoneyCnyBoxLine,LiaFileInvoiceDollarSolid} from "../assets/icons/icons"

import { KeyFeaturestwo } from "../Data/data"
import { appFeature } from "../Data/dataTwo"

export default function Application(){
   
    return(
        <>
          <Navbar navClass="nav-light"/>

          <section className="relative table w-full py-36 md:py-56 md:pb-0 overflow-hidden bg-top bg-no-repeat bg-fixed bg-cover" style={{backgroundImage:"url('/images/app/bg.png')"}}>
                <div className="absolute inset-0 bg-indigo-600 opacity-80"></div>
                <div className="container relative z-2">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="lg:col-span-8 md:col-span-7 md:mb-16">
                            <div className="md:me-6">
                                <h4 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">Make Faster, <br /> More Confident <br /> Decision</h4>
                                <p className="text-white/70 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                                <div className="mt-6">
                                    <Link href="#"><Image src="/images/app/app.png" width={167} height={50} className="inline-block m-1" alt="" /></Link>
                                    <Link href="#"><Image src="/images/app/playstore.png" width={167} height={50} className="inline-block m-1" alt="" /></Link>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-4 md:col-span-5 md:mt-0">
                            <div className="relative after:content-[''] after:absolute after:h-40 after:w-40 after:bg-indigo-600 after:bottom-0 after:end-0  after:-z-0 after:rounded-3xl after:animate-[spin_10s_linear_infinite]">
                                <Image src="/images/app/1.png" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="relative z-1" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
          </section>

           <div className="relative">
                <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
                    <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path>
                    </svg>
                </div>
           </div>

           <section className="relative md:py-24 py-16 overflow-hidden">
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Features</h6>
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">What We Do ?</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="grid md:grid-cols-3 grid-cols-1 mt-8 gap-[30px]">
                        {appFeature.map((item,index)=>{
                            let Icons = item.icon
                            return(
                                <div key={index} className="group p-6 md:px-4 rounded-lg shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 bg-white dark:bg-slate-900 text-center transition-all duration-500 ease-in-out">
                                    <div
                                        className="w-16 h-16 bg-indigo-600/5 text-indigo-600 rounded-lg text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                                        <Icons width={30}/>
                                    </div>
        
                                    <div className="content mt-7">
                                        <Link href="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">{item.title}</Link>
                                        <p className="text-slate-400 mt-3">{item.desc}</p>
        
                                        <div className="mt-5">
                                            <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-16 gap-[30px]">
                        <div className="relative">
                            <Image src="/images/app/classic01.png" width={296} height={599} className="mx-auto" alt="" />
                            <div className="overflow-hidden absolute lg:h-[400px] h-[320px] lg:w-[400px] w-[320px] bg-indigo-600/5 bottom-2/4 translate-y-2/4 start-0 rotate-45 -z-1 shadow-md shadow-indigo-600/10 rounded-[100px]"></div>
                        </div>

                        <div className="lg:ms-8">
                            <h4 className="mb-4 md:text-3xl text-2xl lg:leading-normal leading-normal font-medium">We Build High Performing <br /> Application</h4>
                            <p className="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                            <ul className="list-none text-slate-400 mt-4">
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
                            <Image src="/images/app/classic02.png" width={296} height={599} className="mx-auto" alt="" />
                            <div className="overflow-hidden absolute lg:h-[400px] h-[320px] lg:w-[400px] w-[320px] bg-indigo-600/5 bottom-2/4 translate-y-2/4 end-0 rotate-45 -z-1 shadow-md shadow-indigo-600/10 rounded-[100px]"></div>
                        </div>

                        <div className="lg:me-8 order-2 md:order-1">
                            <h4 className="mb-4 md:text-3xl text-2xl lg:leading-normal leading-normal font-medium">Easy And Best Solution <br /> For Your App</h4>
                            <p className="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                            <ul className="list-none text-slate-400 mt-4">
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
                    <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-16 gap-[30px]">
                        <div className="relative">
                            <Image src="/images/app/classic03.png" width={296} height={599} className="mx-auto" alt="" />
                            <div className="overflow-hidden absolute lg:h-[400px] h-[320px] lg:w-[400px] w-[320px] bg-indigo-600/5 bottom-2/4 translate-y-2/4 start-0 rotate-45 -z-1 shadow-md shadow-indigo-600/10 rounded-[100px]"></div>
                        </div>

                        <div className="lg:ms-8">
                            <h4 className="mb-4 md:text-3xl text-2xl lg:leading-normal leading-normal font-medium">Beautiful, Simple & <br /> Easy to Use</h4>
                            <p className="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                            <ul className="list-none text-slate-400 mt-4">
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
                <div className=" md:mt-24 mt-16" >
                    <ClientsOne title={true}/>
               </div>
                <MobileApp/>
            </section>
            <div className="relative">
                <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-dark-footer">
                    <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
          <Footer/>
          <Switcher/>
          <CookieModal/>
        </>
    )
}