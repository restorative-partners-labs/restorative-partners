import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../componets/Navbar/navbar';
import Footer from '../componets/Footer/footer';
import CookieModal from '../componets/cookieModal';
import ClientsOne from '../componets/clientsOne';
import GetInTuct from '../componets/getInTuch';
import Switcher from '../componets/switcher';
import HeroSection from '../componets/podcast/heroSection';
import PodcastItem from '../componets/podcast/podcastItem';

import {TbPlayerPause,BsCheckCircle, BiBookmark, BiArrowToLeft, BiArrowToRight} from '../assets/icons/icons'

import { podcastCat } from '../Data/dataThree';
export default function IndexPodcast(){
    
    return(
        <>
        <Navbar/>
        <HeroSection/>
        <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center md:gap-[30px] gap-12">
                    <div className="md:col-span-5">
                        <div className="relative">
                            <div className="shadow-md dark:shadow-gray-800 rounded-t-full border-8 border-gray-200 dark:border-gray-900">
                                <Image src='/images/podcast/ab.jpg' width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}}  className="shadow-md rounded-t-full" alt=""/>
                            </div>

                            <div className="absolute -bottom-6 -end-2">
                                <div className="bg-white dark:bg-slate-800 w- rounded-xl shadow-md dark:shadow-gray-800 w-[300px] border-b border-gray-100 dark:border-gray-600">
                                    <div className="p-6 space-y-6">
                                        <div className="flex items-center space-x-3">
                                            <Image src='/images/logo-icon-30.png' width={30} height={30} alt=""/>
                                            <h5 className="text-xl font-semibold">Techwind Podcast</h5>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="relative">
                                                <div className="bg-gray-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                                    <div className="bg-indigo-600 w-1/2 h-1.5" role="progressbar" aria-label="music progress"></div>
                                                </div>
                                                <div className="ring-indigo-600 ring-2 absolute left-1/2 top-1/2 w-4 h-4 -mt-2 -ml-2 flex items-center justify-center bg-white rounded-full shadow">
                                                    <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full ring-1 ring-inset ring-slate-900/5"></div>
                                                </div>
                                            </div>
                                            <div className="flex justify-between text-sm leading-6 font-medium tabular-nums">
                                                <div className="text-indigo-600">24:16</div>
                                                <div className="text-slate-400">75:50</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 dark:bg-slate-700 flex items-center rounded-b-xl">
                                        <div className="flex-auto flex items-center justify-evenly">
                                            <button type="button" aria-label="Add to favorites">
                                                <BiBookmark className="text-xl text-slate-400 hover:text-indigo-600"/>
                                            </button>
                                            <button type="button" className="hidden sm:block lg:hidden xl:block" aria-label="Previous">
                                                <BiArrowToLeft className="text-2xl text-slate-400 hover:text-indigo-600"/>
                                            </button>
                                        </div>
                                        <button type="button" className="bg-white dark:bg-slate-800 flex-none -my-2 mx-auto w-20 h-20 rounded-full border border-gray-100 dark:border-gray-600 shadow-md flex items-center justify-center" aria-label="Pause">
                                            <TbPlayerPause className="text-4xl text-slate-400 hover:text-indigo-600"/> 
                                        </button>
                                        <div className="flex-auto flex items-center justify-evenly">
                                            <button type="button" className="hidden sm:block lg:hidden xl:block" aria-label="Next">
                                                <BiArrowToRight className="text-2xl text-slate-400 hover:text-indigo-600"/>
                                            </button>
                                            <button type="button" className="text-slate-400 hover:text-indigo-600">1x</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-7">
                        <div className="lg:ms-4">
                            <h4 className="mb-6 md:text-4xl text-3xl lg:leading-normal leading-normal font-bold">Listen podcast anytime <br/> and anyware you want</h4>
                            <p className="text-slate-400 max-w-xl mb-2">Techwind Homes developed a platform for the Real Estate marketplace that allows buyers and sellers to easily execute a transaction on their own.</p>
                            <p className="text-slate-400 max-w-xl">The platform drives efficiency, cost transparency and control into the hands of the consumers. Techwind Homes is Real Estate Redefined.</p>
                            
                            <div className="mt-4">
                                <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-3">Learn More </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Explore Podcast Categories</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="flex justify-center items-center text-center mt-8">
                    <ul className="list-none space-x-3 space-y-4">
                        {podcastCat.map((item, index) => {
                            const Icons = item.icon
                            return(
                            <li className="inline-block" key={index}>
                                <Link href="" className="group flex items-center bg-white dark:bg-slate-900 hover:text-indigo-600 shadow hover:shadow-md dark:shadow-gray-800 hover:dark:shadow-gray-800 border-4 border-double border-gray-100 hover:border-indigo-600/30 dark:border-gray-800 hover:dark:border-indigo-600/50 py-1.5 px-4 rounded-full align-middle duration-500">
                                    <Icons className="me-2 text-[18px]"/>
                                    <span className="text-[18px] font-medium">{item.title}</span>
                                </Link>
                            </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center">
                    <div className="md:col-span-6">
                        <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Podcasts</h6>
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">All Podcasts from <br/> Audio & Video</h3>
                    </div>

                    <div className="md:col-span-6">
                        <p className="text-slate-400 max-w-xl">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 relative mt-8">
                    <PodcastItem/>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Choose Pricing Plan</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 mt-8 gap-[30px]">
                    <div className="group border-b-[3px] dark:border-gray-700 p-6 py-8 hover:border-indigo-600 dark:hover:border-indigo-600 duration-500 hover:scale-105 relative overflow-hidden shadow dark:shadow-gray-800 rounded-md bg-gray-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-900 h-fit">
                        <h6 className="font-bold uppercase mb-5 text-indigo-600">Free</h6>

                        <div className="flex mb-5">
                            <span className="text-xl font-semibold">$</span>
                            <span className="price text-4xl font-semibold mb-0">0</span>
                            <span className="text-xl font-semibold self-end mb-1">/mo</span>
                        </div>

                        <ul className="list-none text-slate-400">
                            <li className="mb-1 flex items-center"><BsCheckCircle className=" text-indigo-600 text-xl me-2"/> Full Access</li>
                            <li className="mb-1 flex items-center"><BsCheckCircle className=" text-indigo-600 text-xl me-2"/> Source Files</li>
                        </ul>
                        <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Signup</Link>
                    </div>

                    <div className="group border-b-[3px] dark:border-gray-700 p-6 py-8 hover:border-indigo-600 dark:hover:border-indigo-600 duration-500 hover:scale-105 relative overflow-hidden shadow dark:shadow-gray-800 rounded-md bg-gray-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-900 h-fit">
                        <h6 className="font-bold uppercase mb-5 text-indigo-600">Starter</h6>

                        <div className="flex mb-5">
                            <span className="text-xl font-semibold">$</span>
                            <span className="price text-4xl font-semibold mb-0">9</span>
                            <span className="text-xl font-semibold self-end mb-1">/mo</span>
                        </div>

                        <ul className="list-none text-slate-400">
                            <li className="mb-1 flex items-center"><BsCheckCircle className=" text-indigo-600 text-xl me-2"/> Full Access</li>
                            <li className="mb-1 flex items-center"><BsCheckCircle className=" text-indigo-600 text-xl me-2"/> Source Files</li>
                            <li className="mb-1 flex items-center"><BsCheckCircle className=" text-indigo-600 text-xl me-2"/>Enhanced Security</li>
                        </ul>
                        <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Buy Now</Link>
                    </div>
                    <div className="group border-b-[3px] border-indigo-600 p-6 py-8 duration-500 hover:scale-105 relative overflow-hidden shadow dark:shadow-gray-800 rounded-md bg-white dark:bg-slate-900 h-fit">
                        <span className="absolute -end-11 -top-[10px] ltr:rotate-[45deg] rtl:-rotate-[45deg] w-32 h-16 pt-4 px-2 pb-0 flex items-center justify-center text-white bg-amber-500 font-semibold text-lg">Best</span>
                        <h6 className="font-bold uppercase mb-5 text-indigo-600">Business</h6>
                        <div className="flex mb-5">
                            <span className="text-xl font-semibold">$</span>
                            <span className="price text-4xl font-semibold mb-0">74</span>
                            <span className="text-xl font-semibold self-end mb-1">/mo</span>
                        </div>
                        <ul className="list-none text-slate-400">
                            <li className="mb-1 flex items-center"><BsCheckCircle className=" text-indigo-600 text-xl me-2"/> Full Access</li>
                            <li className="mb-1 flex items-center"><BsCheckCircle className=" text-indigo-600 text-xl me-2"/> Source Files</li>
                            <li className="mb-1 flex items-center"><BsCheckCircle className=" text-indigo-600 text-xl me-2"/> Free Appointments</li>
                            <li className="mb-1 flex items-center"><BsCheckCircle className=" text-indigo-600 text-xl me-2"/> Enhanced Security</li>
                        </ul>
                        <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Try it Now</Link>
                    </div>

                    <div className="group border-b-[3px] dark:border-gray-700 p-6 py-8 hover:border-indigo-600 dark:hover:border-indigo-600 duration-500 hover:scale-105 relative overflow-hidden shadow dark:shadow-gray-800 rounded-md bg-gray-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-900 h-fit">
                        <h6 className="font-bold uppercase mb-5 text-indigo-600">Professional</h6>

                        <div className="flex mb-5">
                            <span className="text-xl font-semibold">$</span>
                            <span className="price text-4xl font-semibold mb-0">99</span>
                            <span className="text-xl font-semibold self-end mb-1">/mo</span>
                        </div>
                        <ul className="list-none text-slate-400">
                            <li className="mb-1 flex items-center"><BsCheckCircle className=" text-indigo-600 text-xl me-2"/> Full Access</li>
                            <li className="mb-1 flex items-center"><BsCheckCircle className=" text-indigo-600 text-xl me-2"/> Source Files</li>
                            <li className="mb-1 flex items-center"><BsCheckCircle className=" text-indigo-600 text-xl me-2"/> Free Appointments</li>
                            <li className="mb-1 flex items-center"><BsCheckCircle className=" text-indigo-600 text-xl me-2"/> Enhanced Security</li>
                            <li className="mb-1 flex items-center"><BsCheckCircle className=" text-indigo-600 text-xl me-2"/> Free Installment</li>
                        </ul>
                        <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Started Now</Link>
                    </div>
                </div>
            </div>
            <div className="relative md:mt-24 mt-16">
                <ClientsOne/>
            </div>
            <div className="container relative md:mt-24 mt-16">
                <GetInTuct/>
            </div>
        </section>
        <Footer/>
        <CookieModal/>
        <Switcher/>
        </>
    )
}