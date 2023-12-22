import React from "react";
import Link from "next/link";
import Image from "next/image";

import CountDown from "../componets/countdown";
import MobileApp from "../componets/mobileApp";
import ShopFooter from "../componets/Footer/shopFooter";
import Switcher from "../componets/switcher";

import {FiHexagon} from "../assets/icons/icons"

import { christmasFeature } from "../Data/dataFour";
import { productData } from "../Data/data";
import { topCategories } from "../Data/dataThree";


export default function Christmas(){
    return(
        <>
        <section className="relative overflow-hidden md:h-screen py-36 flex justify-center items-center  bg-center bg-no-repeat bg-cover" style={{backgroundImage:'url("/images/christmas/bg-hero.jpg")'}} id="home">
            <div className="absolute inset-0" id="particles-snow"></div>
            <div className="absolute inset-0 bg-gradient-to-t to-transparent from-slate-900"></div>

            <Link href="/" className="absolute top-10 end-0 start-0 text-center justify-center mx-auto"><Image src='/images/logo-light.png' width={138} height={24} className="mx-auto block" alt=""/></Link>
            <div className="container relative z-1">
                <div className="grid grid-cols-1 justify-center text-center">
                    <h4 className="font-bold lg:leading-normal leading-normal text-white uppercase text-5xl lg:text-7xl">Christmas Offers</h4>

                   <CountDown/>
                </div>
            </div>
        </section>

        <div className="relative">
            <div className="absolute block w-full h-auto bottom-[25px] z-1 start-0">
                <Link href="#"><i className="mdi mdi-arrow-down absolute top-0 start-0 end-0 text-center inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-900 h-12 w-12 mx-auto shadow-md dark:shadow-gray-800"></i></Link>
            </div>

            <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-white dark:text-slate-900">
                <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <section className="relative lg:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Features</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-4 gap-[30px]">
                    {christmasFeature.map((item,index)=>{
                        let Icon = item.icon
                        return(
                            <div className="group relative lg:px-6 mt-4 duration-500 rounded-xl overflow-hidden text-center" key={index}>
                                <div className="relative overflow-hidden text-transparent -m-3">
                                    <FiHexagon className="h-28 w-28 fill-indigo-600/5 mx-auto rotate-[30deg]"/>
                                    <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded-xl duration-500 text-3xl flex align-middle justify-center items-center">
                                        <Icon/>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <Link href="#" className="text-xl font-medium hover:text-indigo-600 duration-500 ease-in-out">{item.title}</Link>
                                    <p className="text-slate-400 duration-500 mt-3">{item.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>

        <section className="relative bg-cover jarallax pt-36 pb-10" data-jarallax data-speed="0.5" style={{backgroundImage:'url("/images/christmas/bg2.jpg")', backgroundAttachment:'fixed'}} >
       
            <div className="absolute inset-0 h-full w-full bg-gradient-to-t to-transparent from-slate-900"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 text-center">
                    <h3 className="md:text-3xl md:leading-normal text-2xl leading-normal font-semibold text-white">Todays Offer Products</h3>
                </div>
            </div>
        </section>

        <section className="relative lg:py-24 py-16">
            <div className="container relative">
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]">
                    {productData.slice(0,8).map((item,index)=>{
                        return(
                            <div className="group" key={index}>
                                <div className="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md transition-all duration-500">
                                    <Image src={item.image} alt="" width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} />
    
                                    <div className="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 transition-all duration-500">
                                        <Link href="/shop-cart" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-slate-900 border-slate-900 text-white w-full rounded-md">Add to Cart</Link>
                                    </div>
    
                                    <ul className="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                        <li><Link href='#' className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"><i className="mdi mdi-heart"></i></Link></li>
                                        <li className="mt-1"><Link href={`/shop-item-detail/${item.id}`} className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"><i className="mdi mdi-eye-outline"></i></Link></li>
                                        <li className="mt-1"><Link href='#' className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"><i className="mdi mdi-bookmark-outline"></i></Link></li>
                                    </ul>
                                    {item.tag ? <ul className="list-none absolute top-[10px] start-4">
                                        <li><Link href='#' className={`${item.tagBg} text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5`}>{item.tag}</Link></li>
                                    </ul> :""}
                                    
                                </div>
    
                                <div className="mt-4">
                                    <Link href={`/shop-item-detail/${item.id}`} className="hover:text-indigo-600 text-lg font-semibold">{item.name}</Link>
                                    <div className="flex justify-between items-center mt-1">
                                        <p className="text-green-600">{item.descAmount} <del className="text-red-600">{item.amount}</del></p>
                                        <ul className="font-medium text-amber-400 list-none">
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="container relative mt-16">
                <div className="grid grid-cols-1 items-center">
                    <h3 className="text-2xl leading-normal font-semibold">Top Categories</h3>
                </div>

                <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 mt-8 gap-[30px]">
                    {topCategories.map((item,index)=>{
                        return(
                            <div key={index} className="group relative overflow-hidden hover:shadow-lg hover:dark:shadow-gray-800 rounded-md transition-all duration-500 p-6 text-center">
                                <Image src={item.image} width={80} height={80} className="rounded-full shadow-md dark:shadow-gray-800 h-20 w-20 block mx-auto mb-2" alt="" />
    
                                <Link href='#' className="font-semibold hover:text-indigo-600 text-lg">{item.title}</Link>
                            </div>
                        )
                    })}
                </div>
            </div>

            <MobileApp/>
        </section>
        <ShopFooter/>
        <Switcher/>
        </>

        
    )
}
