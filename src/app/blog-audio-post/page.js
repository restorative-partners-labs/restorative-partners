import React from "react"
import Image from "next/image";
import Link from "next/link";

import Navbar from "../componets/Navbar/navbar";
import Footer from "../componets/Footer/footer";
import Switcher from "../componets/switcher";
import CookieModal from "../componets/cookieModal";
import BlogUserDetail from "../componets/blogUserDetail";
import BlogComment from "../componets/blogComment";

export default function BlogAudioPost(){
    return(
        <>
        <Navbar />

        <section className="relative md:py-24 py-16 md:mt-16 mt-8">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                    <div className="lg:col-span-8 md:col-span-6">
                        <div className="p-6 rounded-md shadow dark:shadow-gray-800">

                            <div className="relative overflow-hidden rounded-md">
                                <iframe  title='google' className="videoembed w-full" src="https://w.soundcloud.com/player/?visual=true&amp;url=https://soundcloud.com/teo-8/sorry-creepa-x-subsets-x-teos&amp;show_artwork=true&amp;maxwidth=1170&amp;maxheight=1000&amp;dnt=1" style={{height:"438px"}}></iframe>
                            </div>

                            <div className="text-center mt-12">
                                <span className="bg-indigo-600 inline-block text-white text-xs font-semibold px-2.5 py-0.5 rounded-full h-5">Music</span>
                                <h3 className="my-3 text-[26px] font-semibold">Sorry (Creepa X Subsets X TEOS)</h3>

                                <ul className="list-none mt-6">
                                    <li className="inline-block font-semibold text-slate-400 mx-4"> <span className="text-slate-900 dark:text-white block">Client :</span> <span className="block">Calvin Carlo</span></li>
                                    <li className="inline-block font-semibold text-slate-400 mx-4"> <span className="text-slate-900 dark:text-white block">Date :</span> <span className="block">23th May, 2022</span></li>
                                    <li className="inline-block font-semibold text-slate-400 mx-4"> <span className="text-slate-900 dark:text-white block">Time :</span> <span className="block">8 Min Read</span></li>
                                </ul>
                            </div>

                            <div className="mt-6">
                                <p className="text-slate-400">The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to proper  Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script.</p>
                                <p className="text-slate-400 italic border-x-4 border-indigo-600 rounded-ss-xl rounded-ee-xl mt-3 p-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
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