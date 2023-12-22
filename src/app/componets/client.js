"use client"
import React from 'react'
import Link from "next/link"
import Image from "next/image"

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import { clientsData } from '../Data/dataTwo'

export default function Clients(){
    
    return(
        <div id="grid" className=" mt-4 ">
            <ResponsiveMasonry  columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                <Masonry columnsCount={3}> 
                    {clientsData.map((data,index) => {
                        return (
                            <div className=" p-4 picture-item" key={index}>
                                <div className="rounded-lg shadow dark:shadow-gray-800 p-6">
                                    <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                                        <Image src={data.image} width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt="" />

                                        <div className="ps-4">
                                            <Link href = "#"className="text-lg hover:text-indigo-600 duration-500 ease-in-out">{data.name}</Link>
                                            <p className="text-slate-400">{data.role}</p>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <p className="text-slate-400">{data.desc}</p>
                                        <ul className="list-none mb-0 text-amber-400 mt-2 space-x-1">
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
                </Masonry>
            </ResponsiveMasonry>      
        </div>
    )
}