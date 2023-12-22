"use client"
import React, { useState} from 'react'
import Link from "next/link"

import * as Icon from 'react-feather';
import {FiPhone} from '../../assets/icons/icons'

export default function Contact(){
    const [modal , setModal] = useState(false);
    return(
        <>
        <div className="container-fluid relative">
            <div className="grid grid-cols-1">
                <div className="relative grayscale w-full leading-[0] border-0">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                        title="Google Maps Embed"
                        style={{ "border": "0" }}
                        className="w-full h-[500px]"
                        allowFullScreen
                    ></iframe>

                </div>
                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center">
                    <Link href="#" onClick={()=>setModal(!modal)}  className="h-12 w-12 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full"><FiPhone className="me-1 text-lg"/></Link>
                </div>
            </div>
        </div>
        {modal ? 
            <div id="contactModal" className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40 flex items-center justify-center">
                <div className="relative w-full h-auto max-w-md p-4">
                    <div className="relative bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-800">
                        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                            <h5 className="text-xl font-semibold">Contact Form</h5>
                            <button type="button"  onClick={()=>setModal(!modal)}  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ms-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                        </div>
                        <div className="p-6 text-center">
                            <form>
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
                                            <label htmlFor="subject" className="font-semibold">Your Question:</label>
                                            <div className="form-icon relative mt-2">
                                                <Icon.Book className="w-4 h-4 absolute top-3 start-4"></Icon.Book>
                                                <input name="subject" id="subject" className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Subject :" />
                                            </div>
                                        </div>
                                    </div>

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
                                <button type="submit" id="submit" name="send" className="py-2 px-5 font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md justify-center flex items-center">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>:""
            }
        </>
    )
}