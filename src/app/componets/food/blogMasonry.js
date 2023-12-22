"use client"
import React from 'react'
import Link from "next/link"
import Image from "next/image"

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import {LuCalendarDays} from "../../assets/icons/icons"
import { foodBlogData } from '@/app/Data/dataTwo'

export default function BlogMasonry(){
    
    return(
        <div className="container relative md:mt-24 mt-16">
        <div className="grid grid-cols-1 pb-8 text-start">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Recent Blogs</h3>

            <p className="text-slate-400 max-w-xl">Write your own food blog with techwind that can provide everything you need to blog, news, article, etc.</p>
        </div>

        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3, 1200:4}} >
            <Masonry>
                {foodBlogData.map((item,index)=>{
                    return(
                        <div className="picture-item p-2 pb-5" key={index}>
                            <div className="group relative">
                                <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                                    <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="group-hover:scale-105 duration-500 ease-in-out" alt="" />
                                    <div className="absolute top-0 start-0 pt-3 ps-3">
                                        <Link href="#" className="bg-indigo-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded w-fit mx-auto h-5">{item.tag}</Link>
                                    </div>
                                </div>
    
                                <div className="p-3">
                                    <Link href="/food-recipe" className="block hover:text-indigo-600 text-lg font-semibold">{item.title}</Link>
    
                                    <ul className="list-none space-x-1 flex items-center justify-between mt-2">
                                        <li>
                                            <span className="text-slate-400 inline-flex items-center"><LuCalendarDays/> {item.date}</span>
                                        </li>
    
                                        <li className="">
                                            <Link href="/#!" className="text-red-600/20 hover:text-red-600 focus:text-red-600"><i className="mdi mdi-heart"></i></Link> <span className="text-slate-400">22</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Masonry>
        </ResponsiveMasonry>
    </div>
    )
}