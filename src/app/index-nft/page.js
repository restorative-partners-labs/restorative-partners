import React from 'react'
import Link from "next/link"
import Image from "next/image"

import NftNavbar from '../componets/Navbar/nftNavbar'
import Footer from '../componets/Footer/footer'
import Switcher from '../componets/switcher'
import CookieModal from '../componets/cookieModal'
import Blog from '../componets/blog'
import Seller from '../componets/nft/seller'
import NftProduct from '../componets/nft/nftProduct'

import * as Icon from 'react-feather';
import { FaArrowRight } from '../assets/icons/icons'

import { NFTAboutData } from '../Data/data';
import { nftCollection } from '../Data/data'

export default function IndexNFT(){
    return(
        <>
        <NftNavbar navJustify="justify-start" />

        <section className="relative md:py-52 py-36 items-center overflow-hidden bg-gradient-to-br to-orange-600/20 via-fuchsia-600/20 from-indigo-600/20">
            <div className="absolute inset-0 bg-no-repeat bg-bottom bg-cover" style={{backgroundImage:"url('/images/nft/hero.png')"}}></div>

            <div className="container relative">
                <div className="grid grid-cols-1 items-center mt-10">
                    <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black dark:text-white">Discover Exclusive <br /> Digital collectibles</h4>
                    <p className="text-lg max-w-xl">We are a huge marketplace dedicated to connecting great artists of all Techwind with their fans and unique token collectors!</p>

                    <div className="mt-8">
                        <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Discover</Link>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                    {NFTAboutData.map((item,index)=>{
                        let Icons = item.icon
                        return(
                            <div key={index} className="group relative px-6 py-10 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center">
                                <div className="relative overflow-hidden text-transparent -m-3">
                                    <Icon.Hexagon className="h-24 w-24 fill-indigo-600/5 group-hover:fill-white/10 mx-auto"></Icon.Hexagon>
                                    <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded-xl group-hover:text-white transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                                        <Icons className='h-7 w-7'/>
                                    </div>
                                </div>
    
                                <div className="mt-6">
                                    <Link href="#" className="text-lg font-medium group-hover:text-white transition-all duration-500 ease-in-out">{item.title}</Link>
                                    <p className="text-slate-400 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-3">{item.desc}</p>
                                </div>
                            </div>    
                        )
                    })}
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 pb-8 items-end">
                    <div className="lg:col-span-8 md:col-span-6 md:text-start text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Best Creators & Sellers</h3>
                        <p className="text-slate-400 max-w-xl">Best sellers of the week NFTs</p>
                    </div>

                    <div className="lg:col-span-4 md:col-span-6 md:text-end hidden md:block">
                        <Link href="/nft-creators" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">See More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 mt-2 md:mt-6 relative">
                   <Seller/>
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 md:hidden">
                    <div className="md:col-span-12 text-center">
                        <Link href="/nft-creators" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">See More <FaArrowRight className="ms-2 text-[10px]"></FaArrowRight></Link>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Explore Hot Products</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">We are a huge marketplace dedicated to connecting great artists of all Techwind with their fans and unique token collectors!</p>
                </div>

               <NftProduct/>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                    <div className="md:col-span-12 text-center">
                        <Link href="/nft-explore" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-slate-400 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Explore All Items<FaArrowRight className="ms-2 text-[10px]"/></Link>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16 bg-gradient-to-br to-orange-600/30 via-fuchsia-600/30 from-indigo-600/30">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Join the fastest growing Techwind NFTs <br /> with more than 2000+ NFTs</h3>
                    <p className="max-w-xl mx-auto">We are a huge marketplace dedicated to connecting great artists of all Techwind with their fans and unique token collectors!</p>
                </div>

                <div className="grid md:grid-cols-2 mt-8 gap-[30px]">
                    <div className="rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 p-6">
                        <h5 className="text-2xl font-semibold mb-4">Join our community</h5>
                        <p className="text-slate-400 mb-4">We are a huge marketplace dedicated to connecting great artists of all Techwind.</p>
                        <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                    </div>

                    <div className="rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 p-6">
                        <h5 className="text-2xl font-semibold mb-4">Learn more about Techwind</h5>
                        <p className="text-slate-400 mb-4">We are a huge marketplace dedicated to connecting great artists of all Techwind.</p>
                        <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Collections</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">We are a huge marketplace dedicated to connecting great artists of all Techwind with their fans and unique token collectors!</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                        {nftCollection.slice(0,3).map((item,index)=>{
                        return(
                            <div key={index} className="group relative overflow-hidden bg-gray-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-800">
                                <div className="p-2 rounded-md shadow dark:shadow-gray-800 bg-gradient-to-br to-orange-600/20 via-fuchsia-600/20 from-indigo-600/20">
                                    <div className="flex items-center">
                                        <div className="w-full p-1">
                                            <Image src={item.mainImage}  width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="rounded-md" alt="" />
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        {item.subImage.map((el, index)=>{
                                            return(
                                                <div className="w-1/3 p-1" key={index}>
                                                    <Image src={el} width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="rounded-md" alt="" />
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>

                                <div className="p-6 pt-0 -mt-10 text-center">
                                    <Image src={item.teamImage} width={80} height={80} className="h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 mx-auto" alt="" />

                                    <div className="mt-4">
                                        <Link href="#" className="text-xl leading-none font-semibold hover:text-indigo-600 duration-500 ease-in-out block">{item.title}</Link>
                                    </div>
                                </div>
                            </div>
                        )
                        })}
                </div>
            </div>
        </section>
        <section className='container relative md:pb-24 pb-16'>
            <Blog />
        </section>
        <Footer/>
        <Switcher/>
        <CookieModal/>
        </>
    )
}