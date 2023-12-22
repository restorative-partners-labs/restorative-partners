"use client"
import React, {useState,} from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { destinationData } from '../../Data/dataTwo'

export default function Destination(){
    let [selectedCategory, setSelectedCategory] = useState(null);
    
    let matchCategory = (category) => {
        setSelectedCategory(category);
    };

    let filteredData = selectedCategory
        ? destinationData.filter((item) => item.category === selectedCategory)
        : destinationData;
    return(
        <div className="container relative md:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-8">
                <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Popular Destination</h3>
                <p className="text-slate-400 max-w-xl">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>

                <div className="filters-group-wrap mt-4">
                    <div className="filters-group">
                        <ul className="mb-0 list-none container-filter-border-bottom filter-options space-x-3">
                            <li className={`${selectedCategory === null ? 'active' : ''} inline-block text-lg font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500`}  onClick={() => matchCategory(null)}>All</li>
                            <li className={`${selectedCategory === 'beach' ? 'active' : ''} inline-block text-lg font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500`} onClick={() => matchCategory('beach')}>Beach</li>
                            <li className={`${selectedCategory === 'park' ? 'active' : ''} inline-block text-lg font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500`} onClick={() => matchCategory('park')}>Park</li>
                            <li className={`${selectedCategory === 'nature' ? 'active' : ''} inline-block text-lg font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500`} onClick={() => matchCategory('nature')}>Nature</li>
                            <li className={`${selectedCategory === 'mountain' ? 'active' : ''} inline-block text-lg font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500`} onClick={() => matchCategory('mountain')}>Mountain</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div id="grid" className=" justify-center mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px] ">
                {filteredData.map((item,index) => {
                    return(
                        <div className="" key={index} >
                            <div className="group relative overflow-hidden rounded-md">
                                <div className="relative overflow-hidden">
                                    <Image src={item.image} width={0} height={0} sizes='100vw' placeholder='blur' blurDataURL={item.image} style={{width:'100%', height:'auto'}} className="roubded-md" alt=""/>
                                    <div className="absolute inset-0 bg-gradient-to-b to-slate-900 from-transparent"></div>
                                </div>

                                <div className="absolute bottom-0 start-0 end-0 flex justify-between p-6">
                                    <div>
                                        <Link href="" className="text-white/80 hover:text-white text-lg font-semibold block">{item.place}</Link>

                                        <ul className="list-none mb-0 text-amber-400">
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                        </ul>
                                    </div>
                                    
                                    <h5 className="text-white/70">${item.amount}/night</h5>
                                </div>

                                <div className="absolute end-0 top-0 m-6 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                                    <Link href="#!" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center text-lg bg-white dark:bg-slate-900 border-0 shadow dark:shadow-gray-800 rounded-full text-red-600/20 hover:text-red-600 focus:text-red-600"><i className="mdi mdi-heart"></i></Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}