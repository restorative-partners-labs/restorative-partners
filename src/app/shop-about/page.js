import React from 'react'
import Link from "next/link"
import Image from "next/image"

import EcommerceNavbar from '../componets/Navbar/ecommerceNavbar'
import Switcher from '../componets/switcher'
import MobileApp from '../componets/mobileApp'
import ShopFooter from '../componets/Footer/shopFooter'

import * as Icon from 'react-feather';

import {MdKeyboardArrowRight,GoRocket,BiCreditCardAlt,BiUserVoice} from "../assets/icons/icons"

import { shopFeature } from '../Data/dataFour'

export default function ShopAbout(){
   
    return(
        <>
        <EcommerceNavbar/>

        <section className="relative table w-full py-20 lg:py-24 bg-gray-50 dark:bg-slate-800">
            <div className="container relative">
                <div className="grid grid-cols-1 text-center mt-14">
                    <h3 className="text-3xl leading-normal font-semibold">Shop Story</h3>
                </div>

                <div className="relative text-center mt-3">
                    <ul className="tracking-[0.5px] mb-0 inline-flex space-x-1">
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600"><Link href="/index-shop">Techwind</Link></li>
                        <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5"><MdKeyboardArrowRight className="text-xl"/></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-indigo-600"aria-current="page">About us</li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container">
                <div className="md:flex justify-center">
                    <div className="lg:w-3/5 text-center">
                        <h5 className="text-2xl font-semibold">Techwind Shop</h5>

                        <p className="text-slate-400 mt-4">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Features</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-4 gap-[30px]">
                    {shopFeature.map((item,index)=>{
                        let Icons = item.icon
                        return(
                            <div key={index} className="group relative lg:px-6 mt-4 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center">
                                <div className="relative overflow-hidden text-transparent -m-3">
                                    <Icon.Hexagon className="h-28 w-28 fill-indigo-600/5 mx-auto rotate-[30deg]"></Icon.Hexagon>
                                    <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded-xl transition duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                                        <Icons className='w-8 h-8'/>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <Link href="#" className="text-xl font-medium hover:text-indigo-600 duration-500 ease-in-out">{item.title}</Link>
                                    <p className="text-slate-400 transition duration-500 ease-in-out mt-3">{item.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div id="grid" className="md:flex w-full justify-center mx-auto mt-4">
                    <div className="md:w-1/2 p-3 picture-item">
                        <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                            <Image src="/images/shop/hoodie.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="group-hover:scale-110 transition-all duration-500" alt="" />
                            <div className="absolute bottom-4 start-4">
                                <Link href="#" className="text-xl font-semibold hover:text-indigo-600 transition-all duration-500">Hoodies</Link>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2'>
                    <div className="p-3 picture-item">
                        <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                            <Image src="/images/shop/beanie.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="group-hover:scale-110 transition-all duration-500" alt="" />
                            <div className="absolute bottom-4 start-4">
                                <Link href="#" className="text-xl font-semibold hover:text-indigo-600 transition-all duration-500">Beanies for Man & Women</Link>
                            </div>
                        </div>
                    </div>

                    <div className="p-3 picture-item">
                        <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                            <Image src="/images/shop/glasses.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="group-hover:scale-110 transition-all duration-500" alt="" />
                            <div className="absolute bottom-4 start-4">
                                <Link href="#" className="text-xl font-semibold hover:text-indigo-600 transition-all duration-500">Glasses</Link>
                            </div>
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