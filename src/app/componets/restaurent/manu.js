"use client"
import React, { useState } from 'react'
import Link from "next/link"
import Image from "next/image"

import { restaurentData } from '../../Data/data'

export default function Manu(){
    let [selectedCategory, setSelectedCategory] = useState(null);

    let matchCategory = (category) => {
        setSelectedCategory(category);
    };

    let filteredData = selectedCategory
        ? restaurentData.filter((item) => item.category === selectedCategory)
        : restaurentData;
   
    return(
        <>
        <div className="container relative">
                <div className="grid grid-cols-1 items-center gap-[30px]">
                    <div className="filters-group-wrap text-center">
                        <div className="filters-group">
                            <ul className="mb-0 list-none container-filter-border-bottom filter-options">
                                <li className={`${selectedCategory === null ? 'active' : ''} inline-block text-sm uppercase font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-slate-400 transition duration-500`} data-group="all" onClick={() => matchCategory(null)}>All</li>
                                <li className={`${selectedCategory === 'break' ? 'active' : ''} inline-block text-sm uppercase font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-slate-400 transition duration-500`} data-group="break" onClick={() => matchCategory('break')}>Breakfast</li>
                                <li className={`${selectedCategory === 'lunch' ? 'active' : ''} inline-block text-sm uppercase font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-slate-400 transition duration-500`} data-group="lunch" onClick={() => matchCategory('lunch')}>Lunch</li>
                                <li className={`${selectedCategory === 'dinner' ? 'active' : ''} inline-block text-sm uppercase font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-slate-400 transition duration-500`} data-group="dinner" onClick={() => matchCategory('dinner')}>Dinner</li>
                                <li className={`${selectedCategory === 'tea' ? 'active' : ''} inline-block text-sm uppercase font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-slate-400 transition duration-500`} data-group="tea" onClick={() => matchCategory('tea')}>Tea & Coffee</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative mt-8">
                <div id="grid" className="grid lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-5 grid-cols-5 mt-4 gap-[30px]">
                    {
                        filteredData.map((data, index) => {
                            return (
                                <div className="group picture-item p-3 mt-6" data-groups="['break']" key={index}>
                                    <Image src={data.image} width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="rounded-full h-32 w-32 mx-auto group-hover:animate-[spin_10s_linear_infinite]" alt="" />

                                    <div className="mt-4 text-center">
                                        <Link href="#" className="text-lg font-medium block hover:text-indigo-600 transition-all duration-500 ease-in-out">{data.dish}</Link>
                                        <span className="text-slate-400 mt-2 block">A reader will be distracted by the readable</span>

                                        <h5 className="text-indigo-600 font-medium mt-4">$25.00</h5>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}