import React from 'react'
import Link from "next/link"
import Image from "next/image"

import Navbar from '../componets/Navbar/navbar'
import Footer from '../componets/Footer/footer'
import Switcher from '../componets/switcher'
import CookieModal from '../componets/cookieModal'
import ClientsOne from '../componets/clientsOne'
import VideoModal from '../componets/videoModal/videoModal'

import { KeyFeaturestwo } from '../Data/data'

import * as Icon from 'react-feather';
import {MdKeyboardArrowRight,BsCheckCircle} from "../assets/icons/icons"
import { watchAbout } from '../Data/dataThree'
export default function SmartWatch(){
   
    return(
        <>
        <Navbar/>

        <section className="relative flex items-center py-36 h-screen bg-gray-50 dark:bg-slate-800 jarallax" data-jarallax data-speed="0.5" style={{ background: `url('/images/smartwatch/hero.png') center no-repeat` }}>
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 mt-10">
                     <div className="grid grid-cols-1 mt-10">
                         <h5 className="text-indigo-600 text-lg font-medium">Here to turn make hand turn</h5>
                        <h1 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">The Future of <br /> Tech is Here</h1>
                        <p className="text-slate-400 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                        <div className="mt-8">
                            <Link href="/page-pricing" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"><Icon.ShoppingCart className="h-4 w-4 inline-block me-1 align-middle"></Icon.ShoppingCart> Buy Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="relative">
            <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
                <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <section className="relative md:py-24 py-16 overflow-hidden">
               <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                       <div className="md:col-span-5">
                           <div className="relative">
                               <Image src="/images/smartwatch/1.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="rounded-md" alt="" />
                               <div className="absolute bottom-16 end-0">
                                    <Image src="/images/smartwatch/2.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="rounded-md shadow-md w-48 h-48" alt="" />
                                  <VideoModal/>
                               </div>
                           </div>
                       </div>
                       <div className="md:col-span-7">
                           <div className="lg:ms-4">
                               <h5 className="font-medium text-lg text-indigo-600">Nice Top Series</h5>
                                <h4 className="mb-6 md:text-4xl text-3xl lg:leading-normal leading-normal font-medium">Black Great Addition</h4>
                               <p className="text-slate-400 max-w-xl">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                               <Link href="/page-aboutus" className="relative inline-flex items-center font-semibold tracking-wide align-middle ease-in-out text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 transition duration-500 mt-4">Find Out More <MdKeyboardArrowRight className="text-xl ms-1"/></Link>
                           </div>
                       </div>
                   </div>
               </div>

               <div className="container relative md:mt-24 mt-16">
                   <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 mt-8 gap-[30px]">
                       {watchAbout.map((item,index)=>{
                           let Icons = item.Icon
                          return(
                              <div key={index} className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center">
                                  <div className="relative overflow-hidden text-transparent -m-3">
                                      <Icon.Hexagon className="h-32 w-32 fill-indigo-600/5 mx-auto"></Icon.Hexagon>
                                      <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                           <Icons className="h-8 w-8"></Icons>
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
                  <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-16 gap-[30px]">
                      <div className="relative">
                          <Image src="/images/smartwatch/2.png" width={440} height={440} className="max-w-[440px] mx-auto" alt="" />
                          <div className="overflow-hidden absolute lg:h-[400px] h-[320px] lg:w-[400px] w-[320px] bg-indigo-600/5 bottom-0 start-0 rotate-45 -z-1 rounded-3xl"></div>
                      </div>

                      <div className="lg:ms-8">
                          <h4 className="mb-4 text-2xl leading-normal font-medium">Real Time Health <br /> Monitoring</h4>
                          <p className="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                          <ul className="list-none text-slate-400 mt-4">
                              <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Digital Marketing Solutions for Tomorrow</li>
                              <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Our Talented & Experienced Marketing Agency</li>
                              <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Create your own skin to match your brand</li>
                          </ul>
                          <div className="mt-4">
                              <Link href="/page-aboutus" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Find Out More<MdKeyboardArrowRight className="text-xl ms-1"/></Link>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="container relative md:mt-24 mt-16">
                  <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                      <div className="relative order-1 md:order-2">
                          <Image src="/images/smartwatch/1.png" width={440} height={440} className="max-w-[440px] mx-auto" alt="" />
                          <div className="overflow-hidden absolute lg:h-[400px] h-[320px] lg:w-[400px] w-[320px] bg-indigo-600/5 bottom-0 end-0 rotate-45 -z-1 rounded-3xl"></div>
                      </div>
                      <div className="lg:me-8 order-2 md:order-1">
                          <h4 className="mb-4 text-2xl leading-normal font-medium">Freedom to play your <br /> favourite tunes !</h4>
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
        </section>

        <section className="relative flex items-center md:py-72 py-44 jarallax" data-jarallax data-speed="0.5" style={{ background: `url('/images/smartwatch/bg2.jpg') fixed center no-repeat` }}></section>

        <section className="relative md:py-24 py-16">
              <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">What we do ?</h3>
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
                            <Image src="/images/smartwatch/feature.png" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="mx-auto md:max-w-[300px]" alt="" />
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

         <section className="relative md:pb-24 pb-16">
            <ClientsOne title={true}/>   
         </section>
        <Footer/>
        <Switcher/>
        <CookieModal/>
        </>
    )
}