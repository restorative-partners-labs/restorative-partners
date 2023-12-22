"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const AvailableProject = dynamic(()=>import('./availaleProject'));

import {MdKeyboardArrowRight,MdOutlineKeyboardArrowLeft} from "react-icons/md"
import { portfolioClassic } from '../Data/data';

export default function PortfolioClassicFilter(props) {

    const [selectedCategory, setSelectedCategory] = useState(null);

    const matchCategory = (category) => {
        setSelectedCategory(category);
    };

    const filteredData = selectedCategory
        ? portfolioClassic.filter((item) => item.category === selectedCategory)
        : portfolioClassic;
    return (
        <section className="relative md:py-24 py-16">

           {props.containerfuild === true ?  <div className="container-fluid relative">
            <div className="grid grid-cols-1 items-center gap-[30px]">
                <div className="filters-group-wrap text-center">
                    <div className="filters-group">
                        <ul className="mb-0 list-none container-filter-box filter-options">
                            <li className={`${selectedCategory === null ? 'active' : ''} inline-block font-medium text-base mx-1.5 mb-3 py-1 px-3 cursor-pointer relative text-slate-400 border border-gray-100 dark:border-gray-700 rounded-md transition duration-500`} data-group="all" onClick={() => matchCategory(null)}>All</li>
                            <li className={`${selectedCategory === 'branding' ? 'active' : ''} inline-block font-medium text-base mx-1.5 mb-3 py-1 px-3 cursor-pointer relative text-slate-400 border border-gray-100 dark:border-gray-700 rounded-md transition duration-500`} data-group="branding" onClick={() => matchCategory('branding')} >Branding</li>
                            <li className={`${selectedCategory === 'designing' ? 'active' : ''} inline-block font-medium text-base mx-1.5 mb-3 py-1 px-3 cursor-pointer relative text-slate-400 border border-gray-100 dark:border-gray-700 rounded-md transition duration-500`} data-group="designing" onClick={() => matchCategory('designing')}>Designing</li>
                            <li className={`${selectedCategory === 'photography' ? 'active' : ''} inline-block font-medium text-base mx-1.5 mb-3 py-1 px-3 cursor-pointer relative text-slate-400 border border-gray-100 dark:border-gray-700 rounded-md transition duration-500`} data-group="photography" onClick={() => matchCategory('photography')}>Photography</li>
                            <li className={`${selectedCategory === 'development' ? 'active' : ''} inline-block font-medium text-base mx-1.5 mb-3 py-1 px-3 cursor-pointer relative text-slate-400 border border-gray-100 dark:border-gray-700 rounded-md transition duration-500`} data-group="development" onClick={() => matchCategory('development')}>Development</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={props.className}>
                        {
                            filteredData.map((data,index) => {
                                return (
                                    <div key={index} className="picture-item" data-groups='["branding"]'>
                                        <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                                            <Link href="/portfolio-detail-one"><Image src={data.image} width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="rounded-md" alt="" /></Link>
                                            <div className="content pt-3">
                                                <h5 className="mb-1"><Link href="/portfolio-detail-one" className="hover:text-indigo-600 transition-all duration-500 font-semibold">{data.name}</Link></h5>
                                                <h6 className="text-slate-400">{data.role}</h6>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })

                        }
            </div>

            <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                <div className="md:col-span-12 text-center">
                    <nav aria-label="Page navigation example">
                        <ul className="mb-0 list-none container-filter-border-bottom filter-options flex mx-auto justify-center">
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
        </div> :
         <div className="container relative">
         <div className="grid grid-cols-1 items-center gap-[30px]">
             <div className="filters-group-wrap text-center">
                 <div className="filters-group">
                     <ul className="mb-0 list-none container-filter-box filter-options">
                         <li className={`${selectedCategory ===  null ? 'active' : ''} inline-block font-medium text-base mx-1.5 mb-3 py-1 px-3 cursor-pointer relative text-slate-400 border border-gray-100 dark:border-gray-700 rounded-md transition duration-500`} data-group="all" onClick={() => matchCategory(null)}>All</li>
                         <li className={`${selectedCategory === 'branding' ? 'active' : ''} inline-block font-medium text-base mx-1.5 mb-3 py-1 px-3 cursor-pointer relative text-slate-400 border border-gray-100 dark:border-gray-700 rounded-md transition duration-500`} data-group="branding" onClick={() => matchCategory('branding')} >Branding</li>
                         <li className={`${selectedCategory === 'designing' ? 'active' : ''} inline-block font-medium text-base mx-1.5 mb-3 py-1 px-3 cursor-pointer relative text-slate-400 border border-gray-100 dark:border-gray-700 rounded-md transition duration-500`} data-group="designing" onClick={() => matchCategory('designing')}>Designing</li>
                         <li className={`${selectedCategory === 'photography' ? 'active' : ''} inline-block font-medium text-base mx-1.5 mb-3 py-1 px-3 cursor-pointer relative text-slate-400 border border-gray-100 dark:border-gray-700 rounded-md transition duration-500`} data-group="photography" onClick={() => matchCategory('photography')}>Photography</li>
                         <li className={`${selectedCategory === 'development' ? 'active' : ''} inline-block font-medium text-base mx-1.5 mb-3 py-1 px-3 cursor-pointer relative text-slate-400 border border-gray-100 dark:border-gray-700 rounded-md transition duration-500`} data-group="development" onClick={() => matchCategory('development')}>Development</li>
                     </ul>
                 </div>
             </div>
         </div>
         <div className={props.className}>
                     {
                         filteredData.map((data,index) => {
                             return (
                                <div key={index} className="picture-item" data-groups='["branding"]'>
                                    <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                                        <Link href="/portfolio-detail-one"><Image src={data.image} width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="rounded-md" alt="" /></Link>
                                        <div className="content pt-3">
                                            <h5 className="mb-1"><Link href="/portfolio-detail-one" className="hover:text-indigo-600 transition-all duration-500 font-semibold">{data.name}</Link></h5>
                                            <h6 className="text-slate-400">{data.role}</h6>
                                        </div>
                                    </div>
                                </div>
                             )
                         })

                     }
         </div>

        <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
            <div className="md:col-span-12 text-center">
                <nav aria-label="Page navigation example">
                    <ul className="mb-0 list-none container-filter-border-bottom filter-options flex mx-auto justify-center">
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
        } 
       

       <AvailableProject/>
    </section>

    )
}
