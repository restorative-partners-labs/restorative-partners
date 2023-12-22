"use client"
import React, {useState} from 'react'
import Link from "next/link"
import Image from "next/image"

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import {FaArrowRight} from '../../assets/icons/icons'
import { masonryData } from '../../Data/dataTwo'

export default function MasonryBlog(){
    let [selectedCategory, setSelectedCategory] = useState(null);
   
    let matchCategory = (category) => {
        setSelectedCategory(category);
    };

    let filteredData = selectedCategory
        ? masonryData.filter((item) => item.category === selectedCategory)
        : masonryData;
    return(
        <div className="container relative">
                <div className="grid grid-cols-1 justify-center">
                    <div className="relative z-2 transition-all duration-500 ease-in-out sm:-mt-[220px] -mt-[200px] m-0">
                        <div className="filters-group-wrap">
                            <div className="filters-group">
                                <ul className="mb-0 list-none container-filter-white filter-options text-center">
                                    <li className={`${selectedCategory === null ? 'active' : ''} inline-block text-lg font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-white/70 transition duration-500`} data-group="all" onClick={() => matchCategory(null)}>All</li>
                                    <li className={`${selectedCategory === 'business' ? 'active' : ''} inline-block text-lg font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-white/70 transition duration-500`} data-group="business" onClick={() => matchCategory('business')}>Business</li>
                                    <li className={`${selectedCategory === 'tech' ? 'active' : ''} inline-block text-lg font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-white/70 transition duration-500`} data-group="tech" onClick={() => matchCategory('tech')}>Technology</li>
                                    <li className={`${selectedCategory === 'lifestyle' ? 'active' : ''} inline-block text-lg font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-white/70 transition duration-500`} data-group="lifestyle" onClick={() => matchCategory('lifestyle')}>Lifestyle</li>
                                    <li className={`${selectedCategory === 'food' ? 'active' : ''} inline-block text-lg font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-white/70 transition duration-500`} data-group="food" onClick={() => matchCategory('food')}>Food</li>
                                </ul>
                            </div>
                        </div>
                    <ResponsiveMasonry  columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}} >
                        <Masonry>
                            {filteredData.map((item,index)=>{
                                return(
                                    <div className="p-3 picture-item" data-groups='["business"]' key={index}>
                                    <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                                        <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} alt="" />

                                        <div className="content p-6">
                                            <Link href="/blog-detail" className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">{item.title}</Link>
                                            <p className="text-slate-400 mt-3">{item.desc}</p>

                                            <div className="mt-4">
                                                <Link href="/blog-detail" className="relative inline-flex items-center font-normal tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )
                            })}
                        </Masonry>
                    </ResponsiveMasonry>   
                    </div>
                </div>
            </div>
    )
}