import React from "react"
import Image from "next/image";
import Link from "next/link";

import Navbar from "../../componets/Navbar/navbar";
import Footer from "../../componets/Footer/footer";
import Switcher from "../../componets/switcher";
import CookieModal from "../../componets/cookieModal";
import BlogUserDetail from "../../componets/blogUserDetail";
import BlogComment from "../../componets/blogComment";


import {MdKeyboardArrowRight} from "react-icons/md"
import { blogData } from "../../Data/data";

export default function BlogDetails(props){
    const blogDatas = blogData.find((blog)=>blog?.id === parseInt(props?.params?.id || 0));
    return(
        <>
        <Navbar navClass="nav-light" />

        <section className="relative table w-full py-32 lg:py-36 bg-center bg-no-repeat bg-cover" style={{backgroundImage:"url('/images/blog/bg.jpg')"}}>
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 className="mb-3 text-3xl leading-normal font-medium text-white">My Very Minimal <br /> Interior Design Ideas</h3>

                    <ul className="list-none mt-6">
                        <li className="inline-block font-semibold text-white/50 mx-5"> <span className="text-white block">Client :</span> <span className="block">Calvin Carlo</span></li>
                        <li className="inline-block font-semibold text-white/50 mx-5"> <span className="text-white block">Date :</span> <span className="block">23th May, 2022</span></li>
                        <li className="inline-block font-semibold text-white/50 mx-5"> <span className="text-white block">Time :</span> <span className="block">8 Min Read</span></li>
                    </ul>
                </div>
            </div>

            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className=" tracking-[0.5px] mb-0 inline-flex space-x-1">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Techwind</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Blogs Details</li>
                </ul>
            </div>
        </section>


        <div className="relative">
            <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
                <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>


        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                    <div className="lg:col-span-8 md:col-span-6">
                        <div className="p-6 rounded-md shadow dark:shadow-gray-800">

                            <Image src={blogDatas?.Image} width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="rounded-md" alt="" />

                            <div className="mt-6">
                                <p className="text-slate-400">The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to proper Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script.</p>
                                <p className="text-slate-400 italic border-x-4 border-indigo-600 rounded-ss-xl rounded-ee-xl mt-3 p-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which Do not look even slightly believable. </p>
                                <p className="text-slate-400 mt-3">The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewers attention from the layout.</p>
                            </div>
                        </div>

                        <div className="p-6 rounded-md shadow dark:shadow-gray-800 mt-8">
                            <h5 className="text-lg font-semibold">Comments:</h5>

                            <div className="mt-8">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <Image src="/images/client/01.jpg" height={44} width={44} className="h-11 w-11 rounded-full shadow" alt="" />

                                        <div className="ms-3 flex-1">
                                            <Link href="#" className="text-lg font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">Calvin Carlo</Link>
                                            <p className="text-sm text-slate-400">6th May 2022 at 01:25 pm</p>
                                        </div>
                                    </div>

                                    <Link href="#" className="text-slate-400 hover:text-indigo-600 transition-all duration-500 ease-in-out ms-5"><i className="mdi mdi-reply"></i> Reply</Link>
                                </div>
                                <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-800 mt-6">
                                    <p className="text-slate-400 italic">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour </p>
                                </div>
                            </div>

                            <div className="mt-8">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <Image src="/images/client/02.jpg" height={44} width={44} className="h-11 w-11 rounded-full shadow" alt="" />

                                        <div className="ms-3 flex-1">
                                            <Link href="#" className="text-lg font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">Calvin Carlo</Link>
                                            <p className="text-sm text-slate-400">6th May 2022 at 01:25 pm</p>
                                        </div>
                                    </div>

                                    <Link href="#" className="text-slate-400 hover:text-indigo-600 transition-all duration-500 ease-in-out ms-5"><i className="mdi mdi-reply"></i> Reply</Link>
                                </div>
                                <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-800 mt-6">
                                    <p className="text-slate-400 italic">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour </p>
                                </div>
                            </div>

                            <div className="mt-8">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <Image src="/images/client/03.jpg" height={44} width={44} className="h-11 w-11 rounded-full shadow" alt="" />

                                        <div className="ms-3 flex-1">
                                            <Link href="#" className="text-lg font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">Calvin Carlo</Link>
                                            <p className="text-sm text-slate-400">6th May 2022 at 01:25 pm</p>
                                        </div>
                                    </div>

                                    <Link href="#" className="text-slate-400 hover:text-indigo-600 transition-all duration-500 ease-in-out ms-5"><i className="mdi mdi-reply"></i> Reply</Link>
                                </div>
                                <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-800 mt-6">
                                    <p className="text-slate-400 italic">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour </p>
                                </div>
                            </div>

                            <div className="mt-8">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <Image src="/images/client/04.jpg" height={44} width={44} className="h-11 w-11 rounded-full shadow" alt="" />

                                        <div className="ms-3 flex-1">
                                            <Link href="#"  className="text-lg font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">Calvin Carlo</Link>
                                            <p className="text-sm text-slate-400">6th May 2022 at 01:25 pm</p>
                                        </div>
                                    </div>

                                    <Link href="#"  className="text-slate-400 hover:text-indigo-600 transition-all duration-500 ease-in-out ms-5"><i className="mdi mdi-reply"></i> Reply</Link>
                                </div>
                                <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-800 mt-6">
                                    <p className="text-slate-400 italic">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour </p>
                                </div>
                            </div>
                        </div>
                        <BlogComment/>
                    </div>

                    <div className="lg:col-span-4 md:col-span-6">
                        <BlogUserDetail/>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
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
        <Footer />
        <CookieModal/>
        <Switcher/>
    </>
    )
}