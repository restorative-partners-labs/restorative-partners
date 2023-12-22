import React from 'react'
import Link from "next/link"

import Navbar from '../componets/Navbar/navbar';
import * as Icon from 'react-feather';

export default function ContactDetails(){
    return(
        <>
        <Navbar navClass="nav-light" />
        <section className="md:h-screen flex py-36 w-full items-center bg-center bg-no-repeat bg-cover" style={{backgroundImage:"url('/images/cta.jpg')"}}>
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="container relative">
                <div className="lg:flex justify-center mt-12">
                    <div className="lg:w-11/12 bg-white dark:bg-slate-900 rounded-md shadow-lg dark:shadow-gray-800 overflow-hidden">
                        <div className="grid md:grid-cols-12 grid-cols-1 items-center">
                            <div className="lg:col-span-7 md:col-span-6">
                                <div className="w-full leading-[0] border-0">
                                    <iframe title='google' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{ "border": "0" }} className="w-full lg:h-[540px] md:h-[600px] h-[200px]" allowFullScreen></iframe>
                                </div>
                            </div>

                            <div className="lg:col-span-5 md:col-span-6">
                                <div className="p-6">
                                    <h3 className="mb-6 text-2xl leading-normal font-medium">Lets talk about your portfolio</h3>
                                    <p className="text-slate-400">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>

                                    <div className="flex items-center mt-6">
                                        <Icon.Mail className="w-6 h-6 me-4"></Icon.Mail>
                                        <div className="">
                                            <h5 className="title font-bold mb-0">Email</h5>
                                            <Link href="/mailto:contact@example.com" className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">contact@example.com</Link>
                                        </div>
                                    </div>

                                    <div className="flex items-center mt-6">
                                        <Icon.Phone className="w-6 h-6 me-4"></Icon.Phone>
                                        <div className="">
                                            <h5 className="title font-bold mb-0">Phone</h5>
                                            <Link href="/tel:+152534-468-854" className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">+152 534-468-854</Link>
                                        </div>
                                    </div>

                                    <div className="flex items-center mt-6">
                                        <Icon.MapPin className="w-6 h-6 me-4"></Icon.MapPin>
                                        <div className="">
                                            <h5 className="title font-bold mb-0">Location</h5>
                                            <Link href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" data-type="iframe" className="video-play-icon relative inline-block font-semibold tracking-wide align-middle ease-in-out text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 transition duration-500 lightbox">View on Google map</Link>
                                        </div>
                                    </div>

                                    <ul className="list-none mt-5 space-x-1 space-y-1">
                                        <li className="inline"><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Facebook className="h-4 w-4"></Icon.Facebook></Link></li>
                                        <li className="inline"><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Instagram className="h-4 w-4"></Icon.Instagram></Link></li>
                                        <li className="inline"><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Twitter className="h-4 w-4"></Icon.Twitter></Link></li>
                                        <li className="inline"><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Linkedin className="h-4 w-4"></Icon.Linkedin></Link></li>
                                        <li className="inline"><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.GitHub className="h-4 w-4"></Icon.GitHub></Link></li>
                                        <li className="inline"><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Youtube className="h-4 w-4"></Icon.Youtube></Link></li>
                                        <li className="inline"><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Gitlab className="h-4 w-4"></Icon.Gitlab></Link></li>
                                    </ul>
                                </div>
                                <div className="flex justify-center text-center p-6 border-t border-gray-100 dark:border-gray-800">
                                    <p className="mb-0 text-slate-400">© {new Date().getFullYear()} Techwind. Design & Develop with <i className="mdi mdi-heart text-red-600"></i> by <Link href="/https://shreethemes.in/" target="_blank"

                                  className="text-reset">Shreethemes</Link>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <div className="fixed bottom-3 end-3">
            <Link href="/"  className="back-button h-9 w-9 inline-flex items-center justify-center tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full"><Icon.ArrowLeft className="h-4 w-4"></Icon.ArrowLeft></Link>
        </div>
    </>
    )
}