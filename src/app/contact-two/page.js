import React from 'react'
import Link from "next/link"
import Image from 'next/image';
import * as Icon from 'react-feather';

export default function ContactTwo() {
    return (
        <>
            <section className="md:h-screen w-full">
                <div className="container-fluid relative">
                    <div className="grid grid-cols-1">
                        <div className="grayscale border-0 w-full">
                            <iframe title='google' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{ "border": "0" }} className="h-screen w-full" allowFullScreen></iframe>
                        </div>

                        <div className="md:flex justify-center fixed top-2/4 -translate-y-2/4 ltr:md:-translate-x-2/4 rtl:md:translate-x-2/4 md:start-2/4 start-3 md:end-auto end-3 m-auto">
                            <div className="max-w-[400px] w-full bg-white dark:bg-slate-900 rounded-md shadow-xl dark:shadow-gray-800 px-6 py-8">
                                <Link href="/"><Image src="/images/logo-icon-64.png" width={72} height={64} className="mx-auto" alt="" /></Link>
                                <h3 className="my-6 text-2xl leading-normal font-medium text-center">Get in touch !</h3>

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
                                    <button type="submit" id="submit" name="send" className="py-2 px-5 font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full justify-center flex items-center">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className="fixed bottom-3 end-3">
                <Link href="#" className="back-button h-9 w-9 inline-flex items-center justify-center tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full"><Icon.ArrowLeft className="h-4 w-4"></Icon.ArrowLeft></Link>
            </div>
        </>
    )
}
