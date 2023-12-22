"use client"
import React, { useState } from 'react'
import Link from "next/link"
import Image from "next/image"

export default function NftTab(){
    let [isOpenTab, setisOpen] = useState(0);

    let handleTabClick = (index) => {
        setisOpen(index);
    };
    return(
        <div className="grid grid-cols-1 mt-8">
            <ul className="md:w-fit w-full flex-wrap justify-center text-center p-3 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md" id="myTab" data-tabs-toggle="#StarterContent" role="tablist">
                <li role="presentation" className="md:inline-block block md:w-fit w-full">
                    <button onClick={() => handleTabClick(0)} className={`${isOpenTab === 0 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-center font-semibold rounded-md w-full  hover:text-indigo-600 transition-all duration-500 ease-in-out`} >Details</button>
                </li>
                <li role="presentation" className="md:inline-block block md:w-fit w-full">
                    <button onClick={() => handleTabClick(1)} className={`${isOpenTab === 1 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-center font-semibold rounded-md w-full  hover:text-indigo-600 transition-all duration-500 ease-in-out`} >Bids</button>
                </li>
                <li role="presentation" className="md:inline-block block md:w-fit w-full">
                    <button onClick={() => handleTabClick(2)} className={`${isOpenTab === 2 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-center font-semibold rounded-md w-full  hover:text-indigo-600 transition-all duration-500 ease-in-out`} >Activity</button>
                </li>
            </ul>

            <div id="StarterContent" className="mt-6">
                {isOpenTab === 0 ? 
                    <div>
                        <div className="grid grid-cols-1">
                            <p className="text-slate-400 mb-4">Hey guys! New exploration about NFT Marketplace Web Design, this time I am inspired by one of my favorite NFT website called Superex (with crypto payment)! What do you think?</p>
                            <p className="text-slate-400 mb-4">What does it mean? Biomechanics is the study of the structure, function and motion of the mechanical aspects of biological systems, at any level from whole organisms to organs, cells and cell organelles, using the methods of mechanics. Biomechanics is a branch of biophysics.</p>
                            <h6 className="text-xl font-semibold">Owner</h6>

                            <div className="flex items-center mt-3">
                                <Image src="/images/client/08.jpg" width={64} height={64} className="h-16 w-16 rounded-full shadow-md dark:shadow-gray-800" alt="" />

                                <div className="ms-3">
                                    <h6 className="text-lg font-semibold"><Link href="/" className="hover:text-indigo-600 duration-500 ease-in-out">PandaOne</Link></h6>
                                </div>
                            </div>
                        </div>
                    </div>:""
                }
                {isOpenTab === 1 ? 
                    <div>
                        <div className="grid grid-cols-1">
                            <div className="flex items-center">
                                <div className="relative">
                                    <Image width={64} height={64} src="/images/client/01.jpg" className="h-16 w-16 rounded-full shadow-md dark:shadow-gray-800" alt="" />
                                </div>

                                <div className="ms-3">
                                    <h6 className="text-lg font-semibold">2 WETH <span className="text-slate-400">by</span> <Link href="/" className="hover:text-indigo-600 duration-500 ease-in-out">0xe849fa28a...ea14</Link></h6>
                                    <span className="text-slate-400">6 hours ago</span>
                                </div>
                            </div>

                            <div className="flex items-center mt-4">
                                <div className="relative">
                                    <Image width={64} height={64} src="/images/client/02.jpg" className="h-16 w-16 rounded-full shadow-md dark:shadow-gray-800" alt="" />
                                </div>

                                <div className="ms-3">
                                    <h6 className="text-lg font-semibold">0.001 WETH <span className="text-slate-400">by</span> <Link href="/" className="hover:text-indigo-600 duration-500 ease-in-out">VOTwear</Link></h6>
                                    <span className="text-slate-400">6 hours ago</span>
                                </div>
                            </div>

                            <div className="flex items-center mt-4">
                                <div className="relative">
                                    <Image width={64} height={64} src="/images/client/03.jpg" className="h-16 w-16 rounded-full shadow-md dark:shadow-gray-800" alt="" />
                                </div>

                                <div className="ms-3">
                                    <h6 className="text-lg font-semibold">1.225 WETH <span className="text-slate-400">by</span> <Link href="/" className="hover:text-indigo-600 duration-500 ease-in-out">PandaOne</Link></h6>
                                    <span className="text-slate-400">6 hours ago</span>
                                </div>
                            </div>
                        </div>
                    </div>:""
                }
                {isOpenTab === 2 ?
                    <div>
                        <div className="grid grid-cols-1">
                            <div className="rounded-md shadow dark:shadow-gray-800 p-6">
                                <div className="flex items-center">
                                    <div className="relative">
                                        <Image width={80} height={80} src="/images/nft/items/1.jpg" className="h-20 w-20 rounded-md shadow-md dark:shadow-gray-800" alt="" />

                                        <div className="absolute top-0 start-0 translate-middle px-1 rounded-md shadow-md bg-white">
                                            <i className="mdi mdi-account-check mdi-18px text-green-600"></i>
                                        </div>
                                    </div>

                                    <span className="content ms-3">
                                        <Link href="/" className="hover:text-indigo-600 text-lg block">Digital Art Collection</Link>
                                        <span className="text-slate-400 block mt-1">Started Following <Link href="/" className="link font-semibold">@Panda</Link></span>

                                        <span className="text-slate-400 block mt-1">1 hours ago</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>:""
                }
            </div>
        </div>
    )
}