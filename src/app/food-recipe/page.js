import React from 'react'
import Link from "next/link"
import Image from "next/image"

import VideoModal from '../componets/videoModal/videoModal'
import Navbar from '../componets/Navbar/navbar'
import SmallFooter from '../componets/Footer/smallFooter'
import Switcher from '../componets/switcher'
import FoodSlider from '../componets/foodSlider'
import BlogMasonry from '../componets/food/blogMasonry'

import * as Icon from 'react-feather';
import {MdOutlineCalendarMonth} from "../assets/icons/icons"

import { foodComment } from '../Data/dataTwo'

export default function FoodRecipe(){
    return(
        <>
        <Navbar navClass="nav-light"/>

        <section className="relative table w-full py-40 lg:py-64 bg-no-repeat bg-center bg-cover" style={{backgroundImage:"url('/images/food/blog/recipe.jpg')"}}>
            <div className="absolute inset-0 bg-black opacity-75"></div>
        </section>

        <div className="relative">
            <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-white dark:text-slate-900">
                <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <section className="relative md:pb-24 pb-16">
            <div className="container relative">
                <div className="md:flex">
                    <div className="relative lg:w-2/3 w-full -mt-32">
                        <div className="px-6 py-12 bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 text-center">
                            <Link href="#" className="bg-indigo-600/10 text-indigo-600 font-semibold px-2.5 py-0.5 rounded w-fit mx-auto h-5">Food & Recipes</Link>
                            <h5 className="font-semibold text-2xl mt-5">Recipes Creamy Garlic Parmesan Chicken Salad</h5>

                            <div className="flex items-center justify-center mt-5">
                                <div className="flex items-center mx-2">
                                    <Image src="/images/client/05.jpg" width={28} height={28} className="h-7 w-7 rounded-full shadow-md dark:shadow-gray-800" alt="" />
                                    <Link href="#" className="font-medium text-slate-400 block ms-2">Cristina Romsey</Link>
                                </div>
                                <span className="text-slate-400 flex items-center mx-2"><MdOutlineCalendarMonth  width={18} className="me-1"/> 14th July 2022</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                    <div className="lg:col-span-8 md:col-span-6">
                        <div>
                            <Link href="#" className="bg-indigo-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded w-fit mx-auto h-5 me-1">Food</Link>
                            <Link href="#" className="bg-indigo-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded w-fit mx-auto h-5 me-1">Drinks</Link>
                            <Link href="#" className="bg-indigo-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded w-fit mx-auto h-5 me-1">Recipes</Link>

                            <p className="text-slate-400 mb-4 mt-5">Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.</p>
                            <p className="text-slate-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                            <p className="text-slate-400 mb-4">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>

                            <div className="grid md:grid-cols-2 grid-cols-1 mt-6 gap-[30px]">
                                <Image src="/images/food/blog/f1.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="rounded-md shadow" alt="" />

                                <div className="relative">
                                    <Image src="/images/food/blog/f2.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="rounded-md shadow" alt="" />
                                    <VideoModal/>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 rounded-md shadow dark:shadow-gray-800 mt-8">
                            <h5 className="text-lg font-semibold">Comments:</h5>
                            {foodComment.map((item,index)=>{
                                return(
                                    <div className="mt-8" key={index}>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <Image src={item.image} width={44} height={44} className="h-11 w-11 rounded-full shadow" alt="" />
                                                <div className="ms-3 flex-1">
                                                    <Link href="#" className="text-lg font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">{item.name}</Link>
                                                    <p className="text-sm text-slate-400">6th May 2022 at 01:25 pm</p>
                                                </div>
                                            </div>
        
                                            <Link href="#" className="text-slate-400 hover:text-indigo-600 transition-all duration-500 ease-in-out ms-5"><i className="mdi mdi-reply"></i> Reply</Link>
                                        </div>
                                        <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-800 mt-6">
                                            <p className="text-slate-400 italic">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="p-6 rounded-md shadow dark:shadow-gray-800 mt-8">
                            <h5 className="text-lg font-semibold">Leave A Comment:</h5>

                            <form className="mt-8">
                                <div className="grid lg:grid-cols-12 lg:gap-6">
                                    <div className="lg:col-span-6 mb-5">
                                        <div className="text-start">
                                            <label htmlFor="name" className="font-semibold">Your Name:</label>
                                            <div className="form-icon relative mt-2">
                                                <Icon.User className="w-4 h-4 absolute top-3 start-4"></Icon.User>
                                                <input name="name" id="name" type="text" className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Name :" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="lg:col-span-6 mb-5">
                                        <div className="text-start">
                                            <label htmlFor="email" className="font-semibold">Your Email:</label>
                                            <div className="form-icon relative mt-2">
                                                <Icon.Mail className="w-4 h-4 absolute top-3 start-4"></Icon.Mail>
                                                <input name="email" id="email" type="email" className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Email :" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1">
                                    <div className="mb-5">
                                        <div className="text-start">
                                            <label htmlFor="comments" className="font-semibold">Your Comment:</label>
                                            <div className="form-icon relative mt-2">
                                                <Icon.MessageCircle className="w-4 h-4 absolute top-3 start-4"></Icon.MessageCircle>
                                                <textarea name="comments" id="comments" className="form-input ps-11 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Message :"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" id="submit" name="send" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full">Send Message</button>
                            </form>
                        </div>
                    </div>

                    <div className="lg:col-span-4 md:col-span-6">
                        <div className="sticky top-20">
                            <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center">Author</h5>
                            <div className="text-center mt-8">
                                <Image src="/images/client/05.jpg" width={96} height={96} className="h-24 w-24 mx-auto rounded-full shadow mb-4" alt="" />

                                <Link href="#" className="text-lg font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">Cristina Romsey</Link>
                                <p className="text-slate-400">Content Writer</p>
                            </div>

                            <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8">Recent post</h5>
                            <div className="flex items-center mt-8">
                                <Image src="/images/food/blog/6.jpg" width={64} height={64} className="h-16 rounded-md shadow dark:shadow-gray-800" alt="" />

                                <div className="ms-3">
                                    <Link href="#" className="font-semibold hover:text-indigo-600">Consultant Business</Link>
                                    <p className="text-sm text-slate-400">1st May 2022</p>
                                </div>
                            </div>

                            <div className="flex items-center mt-4">
                                <Image src="/images/food/blog/7.jpg" width={64} height={64} className="h-16 rounded-md shadow dark:shadow-gray-800" alt="" />

                                <div className="ms-3">
                                    <Link href="#" className="font-semibold hover:text-indigo-600">Grow Your Business</Link>
                                    <p className="text-sm text-slate-400">1st May 2022</p>
                                </div>
                            </div>

                            <div className="flex items-center mt-4">
                                <Image src="/images/food/blog/8.jpg" width={64} height={64} className="h-16 rounded-md shadow dark:shadow-gray-800" alt="" />

                                <div className="ms-3">
                                    <Link href="#" className="font-semibold hover:text-indigo-600">Look On The Glorious Balance</Link>
                                    <p className="text-sm text-slate-400">1st May 2022</p>
                                </div>
                            </div>

                            <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8">Social sites</h5>
                            <ul className="list-none text-center mt-8 space-x-1">
                                <li className="inline"><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Facebook className="h-4 w-4"></Icon.Facebook></Link></li>
                                <li className="inline"><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Instagram className="h-4 w-4"></Icon.Instagram></Link></li>
                                <li className="inline"><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Twitter className="h-4 w-4"></Icon.Twitter></Link></li>
                                <li className="inline"><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Linkedin className="h-4 w-4"></Icon.Linkedin></Link></li>
                                <li className="inline"><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.GitHub className="h-4 w-4"></Icon.GitHub></Link></li>
                                <li className="inline"><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Youtube className="h-4 w-4"></Icon.Youtube></Link></li>
                                <li className="inline"><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Gitlab className="h-4 w-4"></Icon.Gitlab></Link></li>
                            </ul>

                            <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8">Tagscloud</h5>
                            <ul className="list-none text-center mt-8 space-x-1">
                                <li className="inline-block m-2"><Link href="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Food</Link></li>
                                <li className="inline-block m-2"><Link href="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Chicken</Link></li>
                                <li className="inline-block m-2"><Link href="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Recipe</Link></li>
                                <li className="inline-block m-2"><Link href="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Enjoy</Link></li>
                                <li className="inline-block m-2"><Link href="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Restra</Link></li>
                                <li className="inline-block m-2"><Link href="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Sunday</Link></li>
                                <li className="inline-block m-2"><Link href="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Offer</Link></li>
                                <li className="inline-block m-2"><Link href="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Holiday</Link></li>
                                <li className="inline-block m-2"><Link href="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Cake</Link></li>
                                <li className="inline-block m-2"><Link href="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Burns</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

           <BlogMasonry/>
        </section>

        <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
            <div className="container relative">
                <div className="md:flex justify-center">
                    <div className="lg:w-2/3 text-center">
                        <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold mb-6">Subscribe our weekly subscription</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Add some text to explain benefits of subscripton on your services. We will send you the best of our blog just once a weekly.</p>

                        <div className="mt-8">
                            <div className="text-center subcribe-form">
                                <form className="relative mx-auto max-w-xl">
                                    <input type="email" id="subemail" name="name" className="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white/70 dark:bg-slate-900/70 border border-gray-100 dark:border-gray-700" placeholder="Enter your email id.." />
                                    <button type="submit" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle transition duration-500 ease-in-out text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-full">Subcribe Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <FoodSlider/>
        <SmallFooter/>
        <Switcher/>
        </>
    )
}