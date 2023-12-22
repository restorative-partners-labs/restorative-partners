import React from 'react'
import Link from "next/link"
import Image from "next/image"

import EcommerceNavbar from '../componets/Navbar/ecommerceNavbar'
import Switcher from '../componets/switcher'
import MobileApp from '../componets/mobileApp'
import ShopFooter from '../componets/Footer/shopFooter'

import * as Icon from 'react-feather';
import {MdKeyboardArrowRight,MdOutlineKeyboardArrowLeft} from "../assets/icons/icons"

import { productData } from '../Data/data'
import { shopGrid } from '../Data/dataFour'

export default function ShopGrid(){
    
    return(
        <>
        <EcommerceNavbar/>

        <section className="relative table w-full py-20 lg:py-24 bg-gray-50 dark:bg-slate-800">
            <div className="container relative">
                <div className="grid grid-cols-1 mt-14">
                    <h3 className="text-3xl leading-normal font-semibold">Shop Grid</h3>
                </div>

                <div className="relative mt-3">
                    <ul className="tracking-[0.5px] mb-0 inline-flex space-x-1">
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600"><Link href="/index-shop">Techwind</Link></li>
                        <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5"><MdKeyboardArrowRight className="text-xl"/></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-indigo-600" aria-current="page">Product Grid Two</li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="relative md:pt-24 pt-16">
            <div className="container">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                    <div className="lg:col-span-4 md:col-span-6">
                        <div className="shadow dark:shadow-gray-800 p-6 rounded-md bg-white dark:bg-slate-900 sticky top-20">
                            <form>
                                <div className="grid grid-cols-1 gap-3">
                                    <div>
                                        <label htmlFor="searchname" className="hidden font-semibold"></label>
                                        <div className="relative">
                                            <Icon.Search className="w-4 h-4 absolute top-3 start-3"></Icon.Search>

                                            <input name="search" id="searchname" type="text" className="form-input w-full py-2 px-3 h-10 ps-9 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Search" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="font-semibold">Categories</label>
                                        {shopGrid.map((data,index) => {
                                            return (
                                                <div className="block mt-2" key={index}>
                                                    <div>
                                                        <label className="inline-flex items-center">
                                                            <input type="radio" className="form-radio border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2" name="radio-colors" checked value="1" readOnly />
                                                            <span className="text-slate-400">{data.gender}</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                    </div>

                                    <div>
                                        <label className="font-semibold">Top Products</label>
                                        <div className="block mt-2">
                                            <span className="flex items-center">
                                                <Image src="/images/shop/items/s1.jpg" width={48} height={60} className="rounded shadow dark:shadow-gray-800 w-12" alt="" />
                                                <span className="ms-3">
                                                    <span className="block font-semibold">T-shirt (M)</span>
                                                    <span className="block text-sm text-slate-400">$16USD</span>
                                                </span>
                                            </span>
                                        </div>

                                        <div className="block mt-2">
                                            <span className="flex items-center">
                                                <Image src="/images/shop/items/s2.jpg" width={48} height={60} className="rounded shadow dark:shadow-gray-800 w-12" alt="" />
                                                <span className="ms-3">
                                                    <span className="block font-semibold">Bag</span>
                                                    <span className="block text-sm text-slate-400">$16USD</span>
                                                </span>
                                            </span>
                                        </div>

                                        <div className="block mt-2">
                                            <span className="flex items-center">
                                                <Image src="/images/shop/items/s3.jpg" width={48} height={60} className="rounded shadow dark:shadow-gray-800 w-12" alt="" />
                                                <span className="ms-3">
                                                    <span className="block font-semibold">Watch (Men)</span>
                                                    <span className="block text-sm text-slate-400">$16USD</span>
                                                </span>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mt-2">
                                        <input type="submit" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full" value="Apply Filter" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="lg:col-span-8 md:col-span-6">
                        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                            <div className="lg:col-span-9 md:col-span-8">
                                <h3 className="text-xl leading-normal font-semibold">Showing 1-8 of 16 results</h3>
                            </div>

                            <div className="lg:col-span-3 md:col-span-4 md:text-end">
                                <label className="font-semibold hidden"></label>
                                <select className="form-select form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0">
                                    <option defaultChecked>Sort by latest</option>
                                    <option>Sort by popularity</option>
                                    <option>Sort by rating</option>
                                    <option>Sort by price: low to high</option>
                                    <option>Sort by price: high to low</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                            {productData.slice(0,9).map((item,index)=>{
                            return(
                                <div className="group" key={index}>
                                <div className="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md transition-all duration-500">
                                    <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} alt="" />
    
                                    <div className="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 transition-all duration-500">
                                        <Link href="/shop-cart" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-slate-900 border-slate-900 text-white w-full rounded-md">Add to Cart</Link>
                                    </div>
    
                                    <ul className="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                        <li><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"><i className="mdi mdi-heart"></i></Link></li>
                                        <li className="mt-1"><Link href={`/shop-item-detail/${item.id}`}  className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"><i className="mdi mdi-eye-outline"></i></Link></li>
                                        <li className="mt-1"><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"><i className="mdi mdi-bookmark-outline"></i></Link></li>
                                    </ul>
                                    {item.tag ? <ul className="list-none absolute top-[10px] start-4">
                                        <li><Link href="#" className={`${item.tagBg} text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5`}>{item.tag}</Link></li>
                                    </ul> :""}
                                </div>

                            <div className="mt-4">
                                <Link href={`/shop-item-detail/${item.id}`}  className="hover:text-indigo-600 text-lg font-semibold">{item.name}</Link>
                                <div className="flex justify-between items-center mt-1">
                                    <p className="text-green-600">{item.descAmount} <del className="text-red-600">{item.amount}</del></p>
                                    <ul className="font-medium text-amber-400 list-none space-x-1">
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        )
                            })}
                        </div>

                        <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                            <div className="md:col-span-12 text-center">
                                <nav aria-label="Page navigation example">
                                    <ul className="inline-flex items-center -space-x-px">
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
                </div>
            </div>

            <MobileApp/>
        </section>

        <ShopFooter/>
        <Switcher/>
        </>
    )
}