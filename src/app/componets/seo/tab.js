"use client"
import React, { useState } from 'react'
import Image from 'next/image'

export default function Tab(){
    const [ block, setBlock] = useState(0)
    return(
        <section className="realtive md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">A Performance-driven Marketing Agency</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">We offer flexible and comprehensive online marketing plans and strategies so you can take advantage of our full spectrum of marketing services.</p>
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
                    <div className="lg:col-span-4 md:col-span-5">
                        <div className="sticky top-20">
                            <ul className="flex-column p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                                <li role="presentation" onClick={() =>setBlock(0)}>
                                    <button className={`px-4 py-2 text-start text-base font-semibold rounded-md w-full hover:text-indigo-600 transition-all duration-500 ease-in-out ${block === 0 ? 'text-white bg-indigo-600 hover:text-white' : ''}`} id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="true">
                                        <span className="block">Step 1</span>
                                        <span className="text-xl mt-2 block">SEO Audit</span>
                                        <span className="block mt-2">We offer flexible and comprehensive online marketing plans</span>
                                    </button>
                                </li>
                                <li role="presentation" onClick={() =>setBlock(1)}>
                                    <button className={`px-4 py-2 text-start text-base font-semibold rounded-md w-full mt-6 transition-all duration-500 ease-in-out ${block === 1 ? 'text-white bg-indigo-600 hover:text-white' : ''}`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">
                                        <span className="block">Step 2</span>
                                        <span className="text-xl mt-2 block">Project Execution</span>
                                        <span className="block mt-2">We offer flexible and comprehensive online marketing plans</span>
                                    </button>
                                </li>
                                <li role="presentation" onClick={() =>setBlock(2)}>
                                    <button className={`px-4 py-2 text-start text-base font-semibold rounded-md w-full mt-6 transition-all duration-500 ease-in-out ${block === 2 ? 'text-white bg-indigo-600 hover:text-white' : ''}`} id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">
                                        <span className="block">Step 3</span>
                                        <span className="text-xl mt-2 block">Results & Reporting</span>
                                        <span className="block mt-2">We offer flexible and comprehensive online marketing plans</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-8 md:col-span-7">
                        <div id="myTabContent" className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                            <div role="tabpanel" aria-labelledby="profile-tab">
                                <Image src={ block === 0 ? "/images/cowork/7.jpg": block === 1 ? "/images/cowork/8.jpg" : block === 2 ? "/images/cowork/9.jpg" : '' } width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="shadow rounded-md" alt="" />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}