"use client"
import React from "react"
import Image from "next/image";
import Link from "next/link";
import * as Icon from 'react-feather';

import { RecentPostData,TagscloudItem } from "../Data/dataTwo";

export default function BlogUserDetail(props){
    
    return(
        <div className={props.className}>
            <div className="sticky top-20">
                <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center">Author</h5>
                <div className="text-center mt-8">
                    <Image src="/images/client/05.jpg" width={96} height={96} className="h-24 w-24 mx-auto rounded-full shadow mb-4" alt="" />

                    <Link href="#" className="text-lg font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">Cristina Romsey</Link>
                    <p className="text-slate-400">Content Writer</p>
                </div>

                <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8 ">Recent post</h5>

                <div className="flex flex-col gap-3 mt-8"> 
                    {RecentPostData.map((data, index) => {
                        return(
                            <div className="flex " key={index}>
                                <Image src={data.Image} width={96} height={64} className="h-16 rounded-md shadow dark:shadow-gray-800" alt="" />
        
                                <div className="ms-3">
                                    <Link href="#" className="font-semibold hover:text-indigo-600">{data.Title}</Link>
                                    <p className="text-sm text-slate-400">{data.Date}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>



                <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8">Social sites</h5>
                <ul className="list-none text-center mt-8 space-x-1">
                    <li className="inline"><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Facebook className="h-4 w-4"></Icon.Facebook></Link></li>
                    <li className="inline"><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Instagram className="h-4 w-4"></Icon.Instagram></Link></li>
                    <li className="inline"><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Twitter className="h-4 w-4"></Icon.Twitter></Link></li>
                    <li className="inline"><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Linkedin className="h-4 w-4"></Icon.Linkedin></Link></li>
                    <li className="inline"><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.GitHub className="h-4 w-4"></Icon.GitHub></Link></li>
                    <li className="inline"><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Youtube className="h-4 w-4"></Icon.Youtube></Link></li>
                    <li className="inline"><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Gitlab className="h-4 w-4"></Icon.Gitlab></Link></li>
                </ul>

                <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8">Tagscloud</h5>
                <ul className="list-none text-center mt-8">
                    {TagscloudItem.map((data,index) => {
                        return(
                            <li className="inline-block m-2" key={index}><Link href="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">{data}</Link></li>
                        )
                    }
                        
                    )}
                </ul>
            </div>
        </div>
    )
}