import React from 'react'
import Link from "next/link"
import Image from "next/image"

import Navbar from '../componets/Navbar/navbar'
import Footer from '../componets/Footer/footer'
import Switcher from '../componets/switcher'
import CookieModal from '../componets/cookieModal'
import Clientsthree from '../componets/clientsThree'
import VideoModalTwo from '../componets/videoModal/videoModalTwo'
import SpaCta from '../componets/spaCta'

import * as Icon from 'react-feather';
import { FaArrowRight,FiArrowUpRight } from '../assets/icons/icons'

import { teamData,blogData } from '../Data/data'
import { spaAbout,spaData } from '../Data/dataThree'

export default function IndexSpa(){
    return(
        <>
        <Navbar navClass="nav-light"/>
        <section className="relative md:py-60 py-36 bg-center bg-no-repeat bg-cover jarallax bg-fixed " style={{backgroundImage:"url('/images/spa/bg.jpg')"}}>
            <div className="absolute inset-0 bg-slate-900/10 bg-fixed"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-transparent bg-fixed"></div>

            <div className="container relative">
                <div className="grid grid-cols-1 text-center mt-10">
                    <h5 className="font-head-ebgaramond text-white text-xl font-medium wow animate__animated animate__fadeInUp" data-wow-delay=".1s">Discover a truly relaxing experience</h5>
                    <h4 className="font-cursive-alex lg:text-9xl lg:leading-tight text-7xl text-white mt-4 wow animate__animated animate__fadeInUp" data-wow-delay=".3s">Beauty spa and wellness</h4>
                    <p className="text-white/70 max-w-xl mx-auto mt-6 wow animate__animated animate__fadeInUp" data-wow-delay=".5s">Every treatment is specifically designed to using massage sequences and the most potent actives available in the world today.</p>

                    <div className="mt-8">
                        <Link href="#" className="py-2 px-5 inline-block tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-transparent hover:bg-white border-white text-white hover:text-slate-900 font-normal wow animate__ animate__fadeInUp animated" data-wow-delay=".5s">Explore Now</Link>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid md:grid-cols-3 gap-[30px]">

                   {spaAbout.map((item,index)=>{
                       return(
                            <div key={index} className="relative overflow-hidden h-fit">
                                <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="" alt="" />
                                <div className="absolute inset-0 h-full w-full bg-gradient-to-t to-transparent via-slate-900/50 from-slate-900 "></div>

                                <div className="absolute p-6 bottom-0 start-0 end-0">
                                    <h6 className="text-white/70 mb-1">{item.title}</h6>
                                    <Link href="#" className="font-semibold font-head-ebgaramond text-white uppercase tracking-wide inline-flex items-center">{item.desc}<FiArrowUpRight className="ms-1 w-5 h-20"/></Link>
                                </div>
                            </div>
                       )
                   })} 
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="lg:col-span-5 md:col-span-6">
                        <div className="relative">
                            <div className="relative">
                                <Image src="/images/spa/ab1.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="lg:w-[400px] w-[280px]" alt="" />
                                <VideoModalTwo/>
                            </div>
                            <div className="absolute -end-5 -bottom-16">
                                <Image src="/images/spa/ab2.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 md:col-span-6 mt-8 md:mt-0">
                        <div className="lg:ms-6">
                            <h4 className="font-cursive-alex text-3xl">Our Story</h4>
                            <h3 className="mb-4 md:text-4xl md:leading-normal text-3xl leading-normal font-head-ebgaramond font-medium">Incredible Experience</h3>
                            <p className="text-slate-400 max-w-xl mb-2">Every treatment is specifically designed to using massage sequences and the most potent actives available in the world today.</p>
                            <p className="text-slate-400 max-w-xl">We must now retrace our way a little. It was mentioned that upon first breaking ground in the whales back, the blubber-hook was inserted into the original hole there cut by the spades of the mates.</p>

                            <div className="mt-8">
                                <Link href="#" className="py-2 px-5 inline-block tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white font-normal">Explore Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16 pt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h4 className="font-cursive-alex text-3xl">Spa & Massage</h4>
                    <h3 className="mb-4 md:text-4xl md:leading-normal text-3xl leading-normal font-head-ebgaramond font-medium">Our Services</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">Every treatment is specifically designed to using massage sequences and the most potent actives available in the world today.</p>
                </div>

                <div className="grid md:grid-cols-2 mt-8 gap-[30px]">
                    {
                        spaData.map((data,index) => {
                            return (
                                <div className="flex " key={index}>
                                    <Image src={data.image} width={64} height={64} className="h-16 w-16" alt="" />
                                    <div className="ms-2 w-full">
                                        <div className="flex justify-between pb-2 border-b border-gray-100 dark:border-gray-800">
                                            <Link href="#" className="font-head-ebgaramond hover:text-indigo-600 text-xl font-semibold">{data.type}</Link>
                                            <h6 className="text-indigo-600">$140</h6>
                                        </div>
                                        <p className="text-slate-400 mt-2">Your athletic spa experience and recovery.</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </section>
        <SpaCta/>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h4 className="font-cursive-alex text-3xl">Testimonial</h4>
                    <h3 className="mb-4 md:text-4xl md:leading-normal text-3xl leading-normal font-head-ebgaramond font-medium">What Our Users Say</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Every treatment is specifically designed to using massage sequences and the most potent actives available in the world today.</p>
                </div>
                <Clientsthree/>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h4 className="font-cursive-alex text-3xl">Our Minds</h4>
                    <h3 className="mb-4 md:text-4xl md:leading-normal text-3xl leading-normal font-head-ebgaramond font-medium">Management Team</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Every treatment is specifically designed to using massage sequences and the most potent actives available in the world today.</p>
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
                    {teamData.slice(0,4).map((item,index)=>{
                        return(
                            <div key={index} className="lg:col-span-3 md:col-span-6">
                                <div className="group text-center">
                                    <div className="relative inline-block mx-auto h-52 w-52 overflow-hidden">
                                        <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="" alt="" />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

                                        <ul className="list-none space-x-1 absolute start-0 end-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out flex justify-center">
                                            <li><Link href="#"  className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><Icon.Facebook className="h-4 w-4"></Icon.Facebook></Link></li>
                                            <li><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><Icon.Instagram className="h-4 w-4"></Icon.Instagram></Link></li>
                                            <li><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><Icon.Linkedin className="h-4 w-4"></Icon.Linkedin></Link></li>
                                        </ul>
                                    </div>

                                    <div className="content mt-3">
                                        <Link href="#" className="text-xl font-semibold font-head-ebgaramond hover:text-indigo-600 transition-all duration-500 ease-in-out">{item.name}</Link>
                                        <p className="text-slate-400">Thai Massage</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h4 className="font-cursive-alex text-3xl">Blog</h4>
                    <h3 className="mb-4 md:text-4xl md:leading-normal text-3xl leading-normal font-head-ebgaramond font-medium">Blog Or News</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Every treatment is specifically designed to using massage sequences and the most potent actives available in the world today.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
                    {blogData.slice(9,12).map((item,index)=>{
                        return(
                            <div key={index} className="blog relative shadow dark:shadow-gray-800 overflow-hidden">
                                <Image src={item.Image} width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} alt="" />

                                <div className="content p-6">
                                    <Link href={`/blog-detail/${item.id}`} className="title h5 text-xl font-semibold font-head-ebgaramond hover:text-indigo-600 duration-500 ease-in-out">{item.title}</Link>
                                    <p className="text-slate-400 mt-3">{item.desc}</p>

                                    <div className="mt-4">
                                        <Link href={`/blog-detail/${item.id}`} className="relative inline-flex items-center font-normal tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More <FaArrowRight className="ms-2 text-[10px]"/></Link>
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
        <CookieModal/>
        </>
    )
}