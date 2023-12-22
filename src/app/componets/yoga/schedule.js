"use client"
import React, { useState } from 'react'
import Image from 'next/image'

import { timeData } from '../../Data/data'

export default function Schedule(){
    let [isOpenTab, setisOpenTab] = useState(0);

    let handleTabClick = (index) => {
        setisOpenTab(index);
    };
    return(
        <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
            <div className="lg:col-span-4 md:col-span-5">
                <div className="sticky top-20">
                    <ul className="flex-column text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                        <li role="presentation">
                            <button onClick={() => handleTabClick(0)} className={`${isOpenTab === 0 ?'text-white bg-indigo-600 hover:text-white' : ''} shadow dark:shadow-gray-800 px-4 py-2 text-center font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`}>Monday</button>
                        </li>
                        <li role="presentation">
                            <button onClick={() => handleTabClick(1)} className={`${isOpenTab === 1 ?'text-white bg-indigo-600 hover:text-white' : ''} shadow dark:shadow-gray-800 px-4 py-2 text-center font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`}>Tuesday</button>
                        </li>
                        <li role="presentation">
                            <button onClick={() => handleTabClick(2)} className={`${isOpenTab === 2 ?'text-white bg-indigo-600 hover:text-white' : ''} shadow dark:shadow-gray-800 px-4 py-2 text-center font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`}>Wednesday</button>
                        </li>
                        <li role="presentation">
                            <button onClick={() => handleTabClick(3)} className={`${isOpenTab === 3 ?'text-white bg-indigo-600 hover:text-white' : ''} shadow dark:shadow-gray-800 px-4 py-2 text-center font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`}>Thursday</button>
                        </li>
                        <li role="presentation">
                            <button onClick={() => handleTabClick(4)} className={`${isOpenTab === 4 ?'text-white bg-indigo-600 hover:text-white' : ''} shadow dark:shadow-gray-800 px-4 py-2 text-center font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`}>Friday</button>
                        </li>
                        <li role="presentation">
                            <button onClick={() => handleTabClick(5)} className={`${isOpenTab === 5 ?'text-white bg-indigo-600 hover:text-white' : ''} shadow dark:shadow-gray-800 px-4 py-2 text-center font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`}>Saturday</button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="lg:col-span-8 md:col-span-7">
                <div id="myTabContent" className="bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                    {isOpenTab === 0 ?
                        <div className="relative overflow-hidden">
                            {timeData.map((item,index)=>{
                                return(
                                    <div key={index} className="md:flex items-center p-6 relative z-1">
                                        <h5 className="text-xl font-semibold w-24">{item.time}</h5>

                                        <div className="flex items-center md:ms-4 md:mt-0 mt-4">
                                            <Image src={item.image} width={40} height={40} className="h-10 w-10 rounded-full shadow dark:shadow-gray-800" alt="" />

                                            <div className="ms-4">
                                                <h5 className="text-lg font-semibold">{item.title}</h5>

                                                <p className="text-slate-400">{item.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                            <div className="absolute inset-0  bg-center bg-cover opacity-5" style={{backgroundImage:"url('/images/yoga/ab01.jpg')"}}></div>
                        </div>:""
                    }
                    {isOpenTab === 1 ?
                        <div className="relative overflow-hidden">
                            {timeData.slice(0,5).map((item,index)=>{
                                return(
                                    <div key={index} className="md:flex items-center p-6 relative z-1">
                                        <h5 className="text-xl font-semibold w-24">{item.time}</h5>

                                        <div className="flex items-center md:ms-4 md:mt-0 mt-4">
                                            <Image src={item.image} width={40} height={40} className="h-10 w-10 rounded-full shadow dark:shadow-gray-800" alt="" />

                                            <div className="ms-4">
                                                <h5 className="text-lg font-semibold">{item.title}</h5>

                                                <p className="text-slate-400">{item.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                            <div className="absolute inset-0  bg-center bg-cover opacity-5" style={{backgroundImage:"url('/images/yoga/ab02.jpg')"}}></div>
                        </div>:""
                    }
                    {isOpenTab === 2 ?
                        <div className="relative overflow-hidden" >
                            {timeData.slice(0,5).map((item,index)=>{
                                return(
                                    <div key={index} className="md:flex items-center p-6 relative z-1">
                                        <h5 className="text-xl font-semibold w-24">{item.time}</h5>

                                        <div className="flex items-center md:ms-4 md:mt-0 mt-4">
                                            <Image src={item.image} width={40} height={40} className="h-10 w-10 rounded-full shadow dark:shadow-gray-800" alt="" />

                                            <div className="ms-4">
                                                <h5 className="text-lg font-semibold">{item.title}</h5>

                                                <p className="text-slate-400">{item.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                            <div className="absolute inset-0  bg-center bg-cover opacity-5" style={{backgroundImage:"url('/images/yoga/ab03.jpg')"}}></div>
                        </div>:""
                    }
                    {isOpenTab === 3 ? 
                        <div className="relative overflow-hidden">
                            {timeData.slice(0,4).map((item,index)=>{
                                return(
                                    <div key={index} className="md:flex items-center p-6 relative z-1">
                                        <h5 className="text-xl font-semibold w-24">{item.time}</h5>

                                        <div className="flex items-center md:ms-4 md:mt-0 mt-4">
                                            <Image src={item.image} width={40} height={40} className="h-10 w-10 rounded-full shadow dark:shadow-gray-800" alt="" />

                                            <div className="ms-4">
                                                <h5 className="text-lg font-semibold">{item.title}</h5>

                                                <p className="text-slate-400">{item.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                            <div className="absolute inset-0  bg-center bg-cover opacity-5" style={{backgroundImage:"url('/images/yoga/i9.jpg')"}}></div>
                        </div>:""
                    }
                    {isOpenTab === 4 ? 
                        <div className="relative overflow-hidden">
                            {timeData.slice(0,6).map((item,index)=>{
                                return(
                                    <div key={index} className="md:flex items-center p-6 relative z-1">
                                        <h5 className="text-xl font-semibold w-24">{item.time}</h5>

                                        <div className="flex items-center md:ms-4 md:mt-0 mt-4">
                                            <Image src={item.image} width={40} height={40} className="h-10 w-10 rounded-full shadow dark:shadow-gray-800" alt="" />

                                            <div className="ms-4">
                                                <h5 className="text-lg font-semibold">{item.title}</h5>

                                                <p className="text-slate-400">{item.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                            <div className="absolute inset-0  bg-center bg-cover opacity-5" style={{backgroundImage:"url('/images/yoga/bg.jpg')"}}></div>
                        </div>:""
                    }
                    {isOpenTab === 5 ?
                        <div className="relative overflow-hidden">
                            {timeData.slice(0,3).map((item,index)=>{
                                return(
                                    <div key={index} className="md:flex items-center p-6 relative z-1">
                                        <h5 className="text-xl font-semibold w-24">{item.time}</h5>

                                        <div className="flex items-center md:ms-4 md:mt-0 mt-4">
                                            <Image src={item.image} width={40} height={40} className="h-10 w-10 rounded-full shadow dark:shadow-gray-800" alt="" />

                                            <div className="ms-4">
                                                <h5 className="text-lg font-semibold">{item.title}</h5>

                                                <p className="text-slate-400">{item.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                            <div className="absolute inset-0 bg-center bg-cover opacity-5" style={{backgroundImage:"url('/images/yoga/i11.jpg')"}}></div>
                        </div>:""
                    }
                </div>
            </div>
        </div>
    )
}