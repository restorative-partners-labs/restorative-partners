import React from 'react'
import Link from "next/link"
import Image from "next/image"

import Navbar from '../componets/Navbar/navbar'
import SmallFooter from '../componets/Footer/smallFooter'
import Switcher from '../componets/switcher'
import CookieModal from '../componets/cookieModal'
import HeroSlider from '../componets/furniture/heroSlider'
import Cta from '../componets/furniture/cta'
import Product from '../componets/furniture/product'

import * as Icon from 'react-feather';
import { FaArrowRight } from '../assets/icons/icons'

import { furnitureItem, featuredcollections, furnitureServices} from '../Data/dataThree'

export default function Furniture(){
    return(
        <>
        <Navbar navClass="nav-light"/>

        <HeroSlider/>
        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-[30px]">
                    <div className="group relative overflow-hidden shadow dark:shadow-gray-800">
                        <Image src="/images/furniture/fea1.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="group-hover:scale-105 transition-all duration-500" alt="" />

                        <div className="absolute top-1/2 -translate-y-1/2 p-6">
                            <Link href="#" className="font-semibold text-2xl text-slate-950 hover:text-indigo-600 transition-all duration-500">Sofa Set for House</Link>

                            <p className="mt-2 text-slate-950 font-medium">Dispatched within a week, from $125</p>

                            <div className="mt-6">
                                <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Shop Now <FaArrowRight className="ms-2 text-[10px]"/></Link>
                            </div>
                        </div>
                    </div>

                    <div className="group relative overflow-hidden shadow dark:shadow-gray-800">
                        <Image src="/images/furniture/fea2.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="group-hover:scale-105 transition-all duration-500" alt="" />

                        <div className="absolute top-1/2 -translate-y-1/2 p-6">
                            <Link href="#" className="font-semibold text-2xl text-slate-950 hover:text-indigo-600 transition-all duration-500">Lighting on Express</Link>

                            <p className="mt-2 text-slate-950 font-medium">Dispatched within a week, from $125</p>

                            <div className="mt-6">
                                <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Shop Now <FaArrowRight className="ms-2 text-[10px]"/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 pb-8 items-end">
                    <div className="lg:col-span-8 md:col-span-6 md:text-start text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Featured Products</h3>
                        <p className="text-slate-400 max-w-xl">Please check the below our latest or popular items</p>
                    </div>

                    <div className="lg:col-span-4 md:col-span-6 md:text-end hidden md:block">
                        <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-slate-400 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">See More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                    </div>
                </div>

                <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    {furnitureItem.map((item,index)=>{
                        return(
                            <div className="group" key={index}>
                                <div className="relative overflow-hidden shadow dark:shadow-gray-800">
                                    <Image src={item.iamge} width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="group-hover:scale-105 transition-all duration-500" alt="" />

                                    <div className="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 transition-all duration-500">
                                        <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-slate-900 border-slate-900 text-white w-full">Add to Cart</Link>
                                    </div>

                                    <span className="absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                        <Link href="#" className="text-slate-900 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600 text-2xl"><i className="mdi mdi-heart"></i></Link>
                                    </span>
                                </div>

                                <div className="p-4 pb-0 text-center">
                                    <Link href="#" className="text-lg font-semibold hover:text-indigo-600">{item.name}</Link>

                                    <p className="text-slate-400 font-semibold">{item.amount}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="grid md:grid-cols-12 grid-cols-1 md:hidden mt-8">
                    <div className="md:col-span-12 text-center">
                        <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-slate-400 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">See More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                    </div>
                </div>
            </div>
        </section>

       <Cta/>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Featured Collections</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid md:grid-cols-3 grid-cols-1 mt-8 gap-[30px]">
                    {featuredcollections.map((item,index)=>{
                        return(
                            <div key={index} className="group relative overflow-hidden shadow dark:shadow-gray-800">
                                <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="group-hover:scale-105 transition-all duration-500" alt="" />

                                <div className="absolute top-0 start-0 end-0 p-6">
                                    <Link href="#" className="font-semibold text-2xl text-slate-950 hover:text-indigo-600 transition-all duration-500">{item.title}</Link>

                                    <p className="mt-2 text-slate-950 font-medium">{item.desc}</p>

                                    <div className="mt-4">
                                        <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">See Collections <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30]">
                    {furnitureServices.map((item,index)=>{
                        let Icons = item.icon
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
        </section>

        <Product/>

        <SmallFooter/>
        <Switcher/>
        <CookieModal/>
        </>
    )
}