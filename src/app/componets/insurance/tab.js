"use client"
import React, { useState } from 'react'
import Link from "next/link"
import Image from "next/image"

import { FaArrowRight } from '../../assets/icons/icons'

import { insuranceTab } from '../../Data/dataTwo'

export default function Tab(){
    let [isOpenTab, setisOpen] = useState(0);

    const handleTabClick = (index) => {
        setisOpen(index);
    };
    return(
        <>
            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                    <div className="lg:col-span-4 md:col-span-5">
                        <div className="sticky top-20">
                            <ul className="flex-column text-center p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                                <li role="presentation">
                                    <button className={`${ isOpenTab === 0 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-base font-semibold rounded-md w-full hover:text-indigo-600 transition-all duration-500 ease-in-out`} id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="true"
                                    onClick={() => handleTabClick(0)}
                                    >Wealth Management</button>
                                </li>
                                <li role="presentation">
                                    <button onClick={() => handleTabClick(1)} className={`${isOpenTab === 1 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-base font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Retirement Planning</button>
                                </li>
                                <li role="presentation">
                                    <button onClick={() => handleTabClick(2)} className={`${isOpenTab === 2 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-base font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`} id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Business Insurance</button>
                                </li>
                                <li role="presentation">
                                    <button onClick={() => handleTabClick(3)} className={`${isOpenTab === 3 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-base font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`} id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Life Insurance</button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-8 md:col-span-7">
                        <div id="myTabContent" className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                            {
                                insuranceTab.map((item, index) => (
                                    <div className={`${isOpenTab === index  ? '': 'hidden'}`} id="profile" role="tabpanel" aria-labelledby="profile-tab" key={index}>
                                    <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="shadow rounded-md" alt="" />
                                    <div className="mt-6">
                                        <h5 className="text-lg font-semibold mb-4">{item.title}</h5>
                                        <p className="text-slate-400 mb-2">{item.description}</p>
                                        <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">See More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}