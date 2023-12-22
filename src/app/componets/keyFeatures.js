"use client"
import React from "react"
import Link from "next/link"
import {MdKeyboardArrowRight} from "react-icons/md"
import { KeyFeatures } from "../Data/data";

export default function KeyFeature({btnFill}){
    return(
        <div className="container ">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Key Features</h3>

                <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
            </div>

            <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px] mt-8">
                {KeyFeatures.map((item,index)=>{
                    const Icon = item.Icon
                    return(
                        <div className="lg:col-span-4 md:col-span-6" key={index}>
                        <div className="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                            <div className="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full me-3">
                                <Icon className="h-5 w-5 rotate-45"></Icon>
                            </div>
                            <div className="flex-1">
                                <h4 className="mb-0 text-lg font-medium">{item.title}</h4>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
            {btnFill ?  <div className="grid grid-cols-1 justify-center">
                <div className="mt-6 text-center">
                    <Link href="/page-services" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2">See More <MdKeyboardArrowRight className="text-xl ms-1"/></Link>
                </div>
            </div> :
            <div className="grid grid-cols-1 justify-center">
                <div className="mt-6 text-center">
                    <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">See More <MdKeyboardArrowRight className="text-xl ms-1"/></Link>
                </div>
            </div>
            }
           

        </div>
    )
}