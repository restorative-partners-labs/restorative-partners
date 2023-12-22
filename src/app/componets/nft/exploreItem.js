"use client"
import React, { useState,useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"

import { nftProdectData } from '../../Data/data'

import {MdOutlineRestartAlt,GoClock} from "../../assets/icons/icons"

export default function ExploreItem(){
    let [selectedCategory, setSelectedCategory] = useState(null);

    let filteredData = selectedCategory
    ? nftProdectData.filter((item) => item.category === selectedCategory)
    : nftProdectData;

    let [ productData ,setProductData] = useState(filteredData);
   
    useEffect(() => {
        let interval = setInterval(() => {
            remainingDays();
        }, 1000);
        
        return () => clearInterval(interval);
    });
    
    let remainingDays = () => {
        let formattedData = filteredData.map((item) => ({
            ...item,
            remaining: calculateDays(item.date),
        }));
        setProductData(formattedData);
    }
    
    let calculateDays = (date) => {
        let startDate = new Date(date);
        let currentDate = new Date();
        let diff = startDate.getTime() - currentDate.getTime();
        
        let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((diff / (1000 * 60)) % 60);
        let seconds = Math.floor((diff / 1000) % 60);
        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        return { hours, minutes, seconds, days }
    }
    let matchCategory = (category) => {
        setSelectedCategory(category);
    };
    return(
        <div className="container relative">
                <div className="grid grid-cols-1 items-center gap-[30px]">
                    <div className="filters-group-wrap text-center">
                        <div className="filters-group">
                            <ul className="mb-0 list-none container-filter-border-bottom filter-options">
                                <li className={`${selectedCategory === null ? 'active' : ''} inline-block text-lg font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-slate-400 transition duration-500`} data-group="all" onClick={() => matchCategory(null)}>All</li>
                                <li className={`${selectedCategory === 'branding' ? 'active' : ''} inline-block text-lg font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-slate-400 transition duration-500`} data-group="branding" onClick={() => matchCategory('branding')} >Branding</li>
                                <li className={`${selectedCategory === 'designing' ? 'active' : ''} inline-block text-lg font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-slate-400 transition duration-500`} data-group="designing" onClick={() => matchCategory('designing')}>Designing</li>
                                <li className={`${selectedCategory === 'photography' ? 'active' : ''} inline-block text-lg font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-slate-400 transition duration-500`} data-group="photography" onClick={() => matchCategory('photography')}>Photography</li>
                                <li className={`${selectedCategory === 'development' ? 'active' : ''} inline-block text-lg font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-slate-400 transition duration-500`} data-group="development" onClick={() => matchCategory('development')}>Development</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div id="grid" className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 mt-4 gap-[30px]">
                        {productData.map((item,index)=>{
                            return(
                                    <div key={index} className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 hover:shadow-lg dark:hover:shadow-gray-800 duration-500 ease-in-out" data-groups='["branding"]'>
                                        <div className="relative">
                                            <Image src={item.image} alt="" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} />
                                            <div className="absolute end-0 top-0 mt-6 me-6 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                                                <Link href="/#!" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-center text-lg bg-white dark:bg-slate-900 border-0 shadow dark:shadow-gray-800 rounded-full text-red-600/20 hover:text-red-600 focus:text-red-600"><i className="mdi mdi-heart"></i></Link>
                                            </div>
            
                                            <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 duration-500 ease-in-out">
                                                <Link href={`/nft-detail/${item.id}`} className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Place Bid</Link>
                                            </div>

                                            {item.date ?  <div className="absolute bottom-0 start-0 ms-6 mb-6 text-lg ltr:bg-gradient-to-r rtl:bg-gradient-to-l to-indigo-600 from-fuchsia-600 text-white rounded-full px-3 inline-flex items-center">
                                                <GoClock className="me-1"/><small id="auction-item-1" className="font-semibold"> {item.remaining?.days} : {item.remaining?.hours}: {item.remaining?.minutes}: {item.remaining?.seconds}</small>
                                            </div> :''}
                                        
                                        </div>
            
                                        <div className="p-6 relative">
                                            <Link href={`/nft-detail/${item.id}`} className="text-lg font-semibold hover:text-indigo-600 duration-500 ease-in-out">{item.title}</Link>
            
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center">
                                                    <i className="mdi mdi-ethereum text-xl leading-none text-indigo-600 me-1"></i>
                                                    <span className="block font-semibold text-indigo-600">{item.amount}</span>
                                                </div>
            
                                                <div>
                                                    <i className="mdi mdi-heart text-red-600"></i> <span className="text-slate-400">{item.like}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            )
                        })} 
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-6">
                    <div className="md:col-span-12 text-center">
                        <Link href="/" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"><MdOutlineRestartAlt className="mdi-spin me-1 animate-[spin_10s_linear_infinite] w-5 h-5"/>Load More</Link>
                    </div>
                </div>
                
            </div>
    )
}