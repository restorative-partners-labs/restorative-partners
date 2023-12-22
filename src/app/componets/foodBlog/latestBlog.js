"use client"
import React from 'react'
import Link from "next/link"
import Image from 'next/image'

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import {MdKeyboardArrowRight,MdOutlineKeyboardArrowLeft,MdOutlineCalendarMonth} from '../../assets/icons/icons'
import { foodBlogData } from '../../Data/dataTwo'
export default function LatestBlog(){
    
    return(
        <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Latest Blogs</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Write your own food blog with techwind that can provide everything you need to blog, news, article, etc.</p>
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
                                                    <span className="text-slate-400 flex items-center"><MdOutlineCalendarMonth className='me-2'/> {item.date}</span>
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

                <div className="grid md:grid-cols-12 grid-cols-1 mt-6">
                    <div className="md:col-span-12 text-center">
                        <nav aria-label="Page navigation example">
                            <ul className="inline-flex items-center -space-x-px">
                                <li>
                                    <Link href="/#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-s-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
                                        <MdOutlineKeyboardArrowLeft className="text-[20px] rtl:rotate-180 rtl:-mt-1"/>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">1</Link>
                                </li>
                                <li>
                                    <Link href="/#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">2</Link>
                                </li>
                                <li>
                                    <Link href="/#" aria-current="page" className="z-10 w-[40px] h-[40px] inline-flex justify-center items-center text-white bg-indigo-600 border border-indigo-600">3</Link>
                                </li>
                                <li>
                                    <Link href="/#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">4</Link>
                                </li>
                                <li>
                                    <Link href="/#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">5</Link>
                                </li>
                                <li>
                                    <Link href="/#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-e-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
                                        <MdKeyboardArrowRight className="text-xl rtl:rotate-180 rtl:-mt-1"/>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
    )
}