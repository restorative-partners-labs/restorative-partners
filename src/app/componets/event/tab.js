"use client"
import React, { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import {FaArrowRight} from "../../assets/icons/icons"

import { eventOne,eventTwo,eventThree } from '../../Data/dataTwo'

export default function Tab(){
    let [isOpenTab, setisOpen] = useState(0);

    let handleTabClick = (index) => {
        setisOpen(index);
    };

    return(
        <div className="grid grid-cols-1 mt-8">
            <ul className="md:w-fit w-full mx-auto flex-wrap justify-center text-center p-3 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md" id="myTab" data-tabs-toggle="#StarterContent" role="tablist">
                <li role="presentation" className="md:inline-block block md:w-fit w-full">
                    <button onClick={() => handleTabClick(0)} className={`${isOpenTab === 0 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-center font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Tuesday</button>
                </li>
                <li role="presentation" className="md:inline-block block md:w-fit w-full">
                    <button onClick={() => handleTabClick(1)} className={`${isOpenTab === 1 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-center font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Wednesday</button>
                </li>
                <li role="presentation" className="md:inline-block block md:w-fit w-full">
                    <button onClick={() => handleTabClick(2)} className={`${isOpenTab === 2 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-center font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Thursday</button>
                </li>
                <li role="presentation" className="md:inline-block block md:w-fit w-full">
                    <button onClick={() => handleTabClick(3)} className={`${isOpenTab === 3 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-center font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Friday</button>
                </li>
            </ul>

            <div id="StarterContent" className="mt-1">
                {isOpenTab === 0 ?
                    <div>
                        <div className="grid grid-cols-1">
                            <div className="relative overflow-x-auto block w-full bg-white dark:bg-slate-900">
                                <table className="w-full text-start">
                                    <tbody>
                                        {eventOne.map((item,index)=>{
                                            return(
                                            <tr key={index}>
                                                <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[200px] text-slate-400">{item.time}</td>
                                                <td className="p-3 border-b border-gray-100 dark:border-gray-700 min-w-[540px] py-12 px-5">
                                                    <div className="flex items-center">
                                                        <Image src={item.image} width={96} height={96} className="rounded-full h-24 w-24 shadow-md dark:shadow-gray-700" alt="" />
                                                        <div className="ms-4">
                                                            <Link href="#" className="hover:text-indigo-600 text-lg font-semibold">{item.title}</Link>
                                                            <p className="text-slate-400 mt-2">{item.desc}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px] text-slate-400">
                                                    <span className="block">Speaker</span>
                                                    <span className="block text-black dark:text-white text-md mt-1">{item.speaker}</span>
                                                </td>
                                                <td className="text-end border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px]">
                                                    <Link href="#" className="relative inline-flex items-center tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 font-medium hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Buy Ticket <FaArrowRight className='ms-2 text-xs'/></Link>
                                                </td>
                                            </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>:""
                }
                {isOpenTab === 1 ?
                    <div>
                        <div className="grid grid-cols-1">
                            <div className="relative overflow-x-auto block w-full bg-white dark:bg-slate-900">
                                <table className="w-full text-start">
                                    <tbody>
                                        {eventTwo.map((item,index)=>{
                                                return(
                                                <tr key={index}>
                                                    <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[200px] text-slate-400">{item.time}</td>
                                                    <td className="p-3 border-b border-gray-100 dark:border-gray-700 min-w-[540px] py-12 px-5">
                                                        <div className="flex items-center">
                                                            <Image src={item.image} width={96} height={96} className="rounded-full h-24 w-24 shadow-md dark:shadow-gray-700" alt="" />
                                                            <div className="ms-4">
                                                                <Link href="#" className="hover:text-indigo-600 text-lg font-semibold">{item.title}</Link>
                                                                <p className="text-slate-400 mt-2">{item.desc}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px] text-slate-400">
                                                        <span className="block">Speaker</span>
                                                        <span className="block text-black dark:text-white text-md mt-1">{item.speaker}</span>
                                                    </td>
                                                    <td className="text-end border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px]">
                                                        <Link href="#" className="relative inline-flex items-center tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 font-medium hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Buy Ticket <FaArrowRight className='ms-2 text-xs'/></Link>
                                                    </td>
                                                </tr>
                                                )
                                            })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>:""
                }
                {isOpenTab === 2 ?
                    <div>
                        <div className="grid grid-cols-1">
                            <div className="relative overflow-x-auto block w-full bg-white dark:bg-slate-900">
                                <table className="w-full text-start">
                                    <tbody>
                                            {eventThree.map((item,index)=>{
                                                return(
                                                <tr key={index}>
                                                    <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[200px] text-slate-400">{item.time}</td>
                                                    <td className="p-3 border-b border-gray-100 dark:border-gray-700 min-w-[540px] py-12 px-5">
                                                        <div className="flex items-center">
                                                            <Image src={item.image} width={96} height={96} className="rounded-full h-24 w-24 shadow-md dark:shadow-gray-700" alt="" />
                                                            <div className="ms-4">
                                                                <Link href="#" className="hover:text-indigo-600 text-lg font-semibold">{item.title}</Link>
                                                                <p className="text-slate-400 mt-2">{item.desc}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px] text-slate-400">
                                                        <span className="block">Speaker</span>
                                                        <span className="block text-black dark:text-white text-md mt-1">{item.speaker}</span>
                                                    </td>
                                                    <td className="text-end border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px]">
                                                        <Link href="#" className="relative inline-flex items-center tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 font-medium hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Buy Ticket <FaArrowRight/></Link>
                                                    </td>
                                                </tr>
                                                )
                                            })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>:""
                }
                {isOpenTab === 3 ?
                    <div>
                        <div className="grid grid-cols-1">
                            <div className="relative overflow-x-auto block w-full bg-white dark:bg-slate-900">
                                <table className="w-full text-start">
                                    <tbody>
                                        {eventTwo.map((item,index)=>{
                                            return(
                                            <tr key={index}>
                                                <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[200px] text-slate-400">{item.time}</td>
                                                <td className="p-3 border-b border-gray-100 dark:border-gray-700 min-w-[540px] py-12 px-5">
                                                    <div className="flex items-center">
                                                        <Image src={item.image} width={96} height={96} className="rounded-full h-24 w-24 shadow-md dark:shadow-gray-700" alt="" />
                                                        <div className="ms-4">
                                                            <Link href="#" className="hover:text-indigo-600 text-lg font-semibold">{item.title}</Link>
                                                            <p className="text-slate-400 mt-2">{item.desc}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px] text-slate-400">
                                                    <span className="block">Speaker</span>
                                                    <span className="block text-black dark:text-white text-md mt-1">{item.speaker}</span>
                                                </td>
                                                <td className="text-end border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px]">
                                                    <Link href="#" className="relative inline-flex items-center tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 font-medium hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Buy Ticket <FaArrowRight/></Link>
                                                </td>
                                            </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>:""
                }
            </div>
        </div>
    )
}