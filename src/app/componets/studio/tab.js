"use client"
import React, { useState,} from 'react'
import Link from 'next/link';
import Image from 'next/image';

import {FaArrowRight} from '../../assets/icons/icons'

export default function Tab(){

    const [isOpenTab, setisOpen] = useState(0);

    const handleTabClick = (index) => {
        setisOpen(index);
    };

    return(
        <section className="realtive md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
        <div className="container relative">
            <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                <div className="lg:col-span-4 md:col-span-5">
                    <div className="sticky top-20">
                        <ul className="flex-column text-center p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                            <li role="presentation">
                                    <button onClick={() => handleTabClick(0)} className={`${isOpenTab === 0 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-center font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Project Strategy</button>
                            </li>
                            <li role="presentation">
                                <button onClick={() => handleTabClick(1)} className={`${isOpenTab === 1 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-center font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Ux Research and Concept </button>
                            </li>
                            <li role="presentation">
                                <button onClick={() => handleTabClick(2)} className={`${isOpenTab === 2 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-center font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Creative Front-End </button>
                            </li>
                            <li role="presentation">
                                <button onClick={() => handleTabClick(3)} className={`${isOpenTab === 3 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-center font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Content Strategy</button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="lg:col-span-8 md:col-span-7">
                    <div id="myTabContent" className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                        {isOpenTab === 0 ? 
                            <div id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <Image src="/images/studio/p01.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="shadow rounded-md" alt="" />
                                <div className="mt-6">
                                    <p className="text-slate-400 mb-2">This is required when, for example, the final text is not yet available. Dummy text is also known as fill text. It is said that song composers of the past used dummy texts as lyrics.</p>
                                    <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">See More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                </div>
                            </div> : ""}
                        {isOpenTab === 1 ? 
                            <div  id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                                <Image src="/images/studio/p02.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="shadow rounded-md" alt="" />
                                <div className="mt-6">
                                    <p className="text-slate-400 mb-2">This is required when, for example, the final text is not yet available. Dummy text is also known as fill text. It is said that song composers of the past used dummy texts as lyrics.</p>
                                    <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">See More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                </div>
                            </div> :""
                        }    
                        {isOpenTab === 2 ?
                            <div  id="settings" role="tabpanel" aria-labelledby="settings-tab">
                                <Image src="/images/studio/p03.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="shadow rounded-md" alt="" />
                                <div className="mt-6">
                                    <p className="text-slate-400 mb-2">This is required when, for example, the final text is not yet available. Dummy text is also known as fill text. It is said that song composers of the past used dummy texts as lyrics.</p>
                                    <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">See More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                </div>
                            </div>:""
                        }
                        {isOpenTab === 3 ? 
                        <div  id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
                            <Image src="/images/studio/p04.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="shadow rounded-md" alt="" />
                            <div className="mt-6">
                                <p className="text-slate-400 mb-2">This is required when, for example, the final text is not yet available. Dummy text is also known as fill text. It is said that song composers of the past used dummy texts as lyrics.</p>
                                <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">See More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                            </div>
                        </div> : ""
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}