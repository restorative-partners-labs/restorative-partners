import React from 'react'
import Link from "next/link"
import Image from "next/image"

import EcommerceNavbar from '../../componets/Navbar/ecommerceNavbar'
import Switcher from '../../componets/switcher'
import MobileApp from '../../componets/mobileApp'
import ShopFooter from '../../componets/Footer/shopFooter'
import ProductDetail from '../../componets/shop/productDetailOne'

import {MdKeyboardArrowRight} from "../../assets/icons/icons"

import { productData } from '../../Data/data'


export default function ShopItemDetail(){
    
    return(
        <>
        <EcommerceNavbar/>

        <section className="relative table w-full py-20 lg:py-24 bg-gray-50 dark:bg-slate-800">
            <div className="container relative">
                <div className="grid grid-cols-1 mt-14">
                    <h3 className="text-3xl leading-normal font-semibold">Product / Item Detail</h3>
                </div>

                <div className="relative mt-3">
                    <ul className="tracking-[0.5px] mb-0 inline-flex space-x-1">
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600"><Link href="/index-shop">Techwind</Link></li>
                        <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5"><MdKeyboardArrowRight className="text-xl"/></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-indigo-600" aria-current="page">Item Detail</li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container">
                <ProductDetail/>
            </div>

            <div className="container relative mt-16">
                <div className="grid grid-cols-1 items-center">
                    <h3 className="text-2xl leading-normal font-semibold">Recent Products</h3>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    {productData.slice(0,4).map((item,index)=>{
                        return(
                            <div className="group" key={index}>
                            <div className="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md transition-all duration-500">
                                <Image src={item.image} alt="" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} />

                                <div className="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 transition-all duration-500">
                                    <Link href="/shop-cart" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-slate-900 border-slate-900 text-white w-full rounded-md">Add to Cart</Link>
                                </div>

                                <ul className="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <li><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"><i className="mdi mdi-heart"></i></Link></li>
                                    <li className="mt-1"><Link href="/shop-item-detail" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"><i className="mdi mdi-eye-outline"></i></Link></li>
                                    <li className="mt-1"><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"><i className="mdi mdi-bookmark-outline"></i></Link></li>
                                </ul>
                                {item.tag ? <ul className="list-none absolute top-[10px] start-4">
                                    <li><Link href="#" className={`${item.tagBg} text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5`}>{item.tag}</Link></li>
                                </ul> :""}
                                
                            </div>

                            <div className="mt-4">
                                <Link href="/shop-item-detail" className="hover:text-indigo-600 text-lg font-semibold">{item.name}</Link>
                                <div className="flex justify-between items-center mt-1">
                                    <p className="text-green-600">{item.descAmount} <del className="text-red-600">{item.amount}</del></p>
                                    <ul className="font-medium text-amber-400 list-none">
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
            </div>
            <MobileApp/>
        </section>

        <ShopFooter/>
        <Switcher/>
        </>
    )
}