import React from 'react'
import Link from "next/link"
import Image from "next/image"

import NftNavbar from '../../componets/Navbar/nftNavbar'
import Footer from '../../componets/Footer/footer'
import Switcher from '../../componets/switcher'
import NftAuctions from '../../componets/nft/nftAuction'

import { NftServices } from '../../Data/data'

import {MdKeyboardArrowRight ,MdKeyboardArrowLeft} from "../../assets/icons/icons"

export default function NftCreatorProfile(props){

    let createrData = NftServices.find((creater)=>creater?.Id === parseInt(props?.params?.id || 0));

    return(
        <>
        <NftNavbar/>
        <section className="relative md:pb-24 pb-16 lg:mt-24 mt-[74px]">
            <div className="lg:container container-fluid">
                <div className="group profile-banner relative overflow-hidden text-transparent lg:rounded-xl shadow dark:shadow-gray-700">
                    <input id="pro-banner" name="profile-banner" type="file" className="hidden"/>
                    <div className="relative shrink-0">
                        <Image src="/images/blog/slide02.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="h-80 w-full object-cover" id="profile-banner" alt="" />
                        <div className="absolute inset-0 bg-slate/10 group-hover:bg-slate-900/10 transition duration-500"></div>
                        <label className="absolute inset-0 cursor-pointer" htmlFor="pro-banner"></label>
                    </div>
                </div>

                <div className="md:flex justify-center">
                    <div className="md:w-full">
                        <div className="relative -mt-[60px] text-center">
                            <div className="group profile-pic w-[112px] mx-auto">
                                <input id="pro-img" name="profile-image" type="file" className="hidden"/>
                                <div>
                                    <div className="relative h-28 w-28 mx-auto rounded-full shadow dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800 overflow-hidden">
                                        <Image src={createrData?.image} width={112} height={112} className="rounded-full" id="profile-image" alt="" />
                                        <div className="absolute inset-0 group-hover:bg-slate-900/10 transition duration-500"></div>
                                        <label className="absolute inset-0 cursor-pointer" htmlFor="pro-img"></label>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <h5 className="text-xl font-semibold">{createrData?.name} <i className="mdi mdi-check-decagram text-emerald-600 align-middle text-lg"></i></h5>
                                <p className="text-slate-400 text-[16px] mt-1">Created by <Link href="/" className="text-indigo-600 font-semibold">1x5484dcdvcdscds56c4</Link></p>

                                <div className="mt-4 space-x-1">
                                    <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"><i className="mdi mdi-plus"></i> Follow me</Link>
                                    <Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"><i className="mdi mdi-account-plus"></i></Link>
                                    <Link href="/nft-creator-profile-edit" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white"><i className="mdi mdi-cog"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative mt-16">
                <NftAuctions/>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                    <div className="md:col-span-12 text-center">
                        <nav aria-label="Page navigation example">
                            <ul className="inline-flex items-center -space-x-px">
                                <li>
                                    <Link href="/#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-s-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
                                        <MdKeyboardArrowLeft className=" text-[20px] rtl:rotate-180 rtl:-mt-1"/>
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
        </section>
        <Footer/>
        <Switcher/>
        </>
    )
}