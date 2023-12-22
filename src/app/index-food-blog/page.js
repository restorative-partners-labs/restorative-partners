import React from 'react'
import Link from "next/link"
import Image from "next/image"

import Navbar from '../componets/Navbar/navbar'
import SmallFooter from '../componets/Footer/smallFooter'
import Switcher from '../componets/switcher'
import CookieModal from '../componets/cookieModal'
import FoodSlider from '../componets/foodSlider'
import HeroSlider from '../componets/foodBlog/heroSlider'
import LatestBlog from '../componets/foodBlog/latestBlog'

import {MdOutlineCalendarMonth} from "../assets/icons/icons"

import { FoodImage } from '../Data/dataThree'

export default function FoodBlog(){
    
    return(
        <>
        <Navbar/>

        <section className="relative mt-[74px]">
            <div className="container-fluid relative">
                <div className="grid grid-cols-1">
                    <HeroSlider/>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4 justify-center">
                    {FoodImage.map((item,index)=>{
                        return(
                            <div key={index} className="group relative rounded-md shadow-md dark:shadow-gray-800 overflow-hidden">
                                <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="group-hover:scale-105 duration-500 ease-in-out" alt="" />
                                <div className="absolute inset-0 bg-slate-900/60"></div>

                                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center">
                                    <Link href="/#!" className="text-white font-semibold text-xl mb-0">{item.title}</Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <LatestBlog/>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Trending Posts</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Write your own food blog with techwind that can provide everything you need to blog, news, article, etc.</p>
                </div>

                <div className="grid lg:grid-cols-2 grid-cols-1 items-center mt-8 gap-4">
                    <div className="group relative overflow-hidden rounded-md">
                        <Image src="/images/food/blog/8.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="group-hover:scale-105 duration-500 ease-in-out" alt="" />
                        <div className="absolute inset-0 bg-gradient-to-b to-slate-900 via-slate-900/50 from-transparent opacity-0 group-hover:opacity-100 duration-500 ease-in-out"></div>

                        <div className="absolute bottom-0 start-0 end-0 p-6 -mb-96 group-hover:mb-0 duration-500 ease-in-out">
                            <div className="text-center">
                                <Link href="#" className="bg-indigo-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded w-fit mx-auto h-5">Eggs</Link>
                                <Link href="/food-recipe" className="text-white font-semibold hover:text-indigo-600 block text-lg mt-4 duration-500 ease-in-out">Spicy Cauliflower Burgers and Salad Recipe</Link>

                                <div className="flex items-center justify-center mt-4">
                                    <Image src="/images/food/1.jpg" width={40} height={40} className="h-10 w-10 rounded-full shadow-md dark:shadow-gray-800" alt="" />
                                    <Link href="#" className="font-medium text-white block ms-2">Calvin Carlo</Link>
                                </div>
                            </div>
                        </div>

                        <div className="absolute end-0 top-0 p-4 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                            <Link href="/#!" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-center text-lg bg-white dark:bg-slate-900 border-0 shadow dark:shadow-gray-800 rounded-full text-red-600/20 hover:text-red-600 focus:text-red-600"><i className="mdi mdi-heart"></i></Link>
                        </div>
                    </div>

                    <div>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="group md:flex items-center relative overflow-hidden">
                                <div className="md:w-[40%] relative overflow-hidden rounded-md">
                                    <Image src="/images/food/blog/1.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="group-hover:scale-105 duration-500 ease-in-out" alt="" />
                                    <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 duration-500 ease-in-out"></div>
                                    <div className="absolute end-0 top-0 p-4 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                                        <Link href="/#!" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-center text-lg bg-white dark:bg-slate-900 border-0 shadow dark:shadow-gray-800 rounded-full text-red-600/20 hover:text-red-600 focus:text-red-600"><i className="mdi mdi-heart"></i></Link>
                                    </div>
                                </div>

                                <div className="md:w-[60%] md:ps-4 pt-4 md:pt-0">
                                    <Link href="#" className="bg-indigo-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded w-fit mx-auto h-5">Food</Link>
                                    <Link href="/food-recipe" className="block hover:text-indigo-600 text-lg font-semibold mt-3">Change Your Strategy: Find a Business Consultant</Link>

                                    <span className="text-slate-400 flex items-center me-2 mt-3"><MdOutlineCalendarMonth/> 14th July 2022</span>
                                </div>
                            </div>

                            <div className="group md:flex items-center relative overflow-hidden">
                                <div className="md:w-[40%] relative overflow-hidden rounded-md">
                                    <Image src="/images/food/blog/5.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="group-hover:scale-105 duration-500 ease-in-out" alt="" />
                                    <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 duration-500 ease-in-out"></div>
                                    <div className="absolute end-0 top-0 p-4 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                                        <Link href="/#!" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-center text-lg bg-white dark:bg-slate-900 border-0 shadow dark:shadow-gray-800 rounded-full text-red-600/20 hover:text-red-600 focus:text-red-600"><i className="mdi mdi-heart"></i></Link>
                                    </div>
                                </div>

                                <div className="md:w-[60%] md:ps-4 pt-4 md:pt-0">
                                    <Link href="#" className="bg-indigo-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded w-fit mx-auto h-5">Food</Link>
                                    <Link href="/food-recipe" className="block hover:text-indigo-600 text-lg font-semibold mt-3">Creamy Garlic Parmesan Chicken Salad</Link>

                                    <span className="text-slate-400 flex items-center mt-3"><MdOutlineCalendarMonth /> 14th July 2022</span>
                                </div>
                            </div>

                            <div className="group md:flex items-center relative overflow-hidden">
                                <div className="md:w-[40%] relative overflow-hidden rounded-md">
                                    <Image src="/images/food/blog/4.jpg" width={0} height={0} sizes='100vw' style={{width:"100%",height:"auto"}} className="group-hover:scale-105 duration-500 ease-in-out" alt="" />
                                    <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 duration-500 ease-in-out"></div>
                                    <div className="absolute end-0 top-0 p-4 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                                        <Link href="/#!" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-center text-lg bg-white dark:bg-slate-900 border-0 shadow dark:shadow-gray-800 rounded-full text-red-600/20 hover:text-red-600 focus:text-red-600"><i className="mdi mdi-heart"></i></Link>
                                    </div>
                                </div>

                                <div className="md:w-[60%] md:ps-4 pt-4 md:pt-0">
                                    <Link href="#" className="bg-indigo-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded w-fit mx-auto h-5">Food</Link>
                                    <Link href="/food-recipe" className="block hover:text-indigo-600 text-lg font-semibold mt-3">Bourbon Street Rib-Eye Steak With Cheese</Link>

                                    <span className="text-slate-400 flex items-center mt-3"><MdOutlineCalendarMonth/> 14th July 2022</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
            <div className="container relative">
                <div className="md:flex justify-center">
                    <div className="lg:w-2/3 text-center">
                        <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold mb-6">Subscribe our weekly subscription</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Add some text to explain benefits of subscripton on your services. We will send you the best of our blog just once a weekly.</p>

                        <div className="mt-8">
                            <div className="text-center subcribe-form">
                                <form className="relative mx-auto max-w-xl">
                                    <input type="email" id="subemail" name="name" className="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white/70 dark:bg-slate-900/70 border border-gray-100 dark:border-gray-700" placeholder="Enter your email id.." />
                                    <button type="submit" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle transition duration-500 ease-in-out text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-full">Subcribe Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
                            
        <FoodSlider/>
        <SmallFooter/>
        <Switcher/>
        <CookieModal/>
        </>
    )
}