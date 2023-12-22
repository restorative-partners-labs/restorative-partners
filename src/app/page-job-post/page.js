import React from 'react'
import Link from "next/link"

import Navbar from '../componets/Navbar/navbar';
import JobFooter from '../componets/jobFooter';
import Switcher from '../componets/switcher';

import {MdKeyboardArrowRight} from "../assets/icons/icons"

export default function JobPost(){
    return(
        <>
        <Navbar navClass="nav-sticky"/>

        <section className="relative table w-full py-36 lg:py-44 bg-no-repeat bg-center bg-cover" style={{backgroundImage:"url('/images/job/job.jpg')"}}>
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-12">
                    <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Job Post</h3>
                </div>
            </div>

            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-flex mx-auto space-x-1">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Techwind</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/index-job">Job</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Job Post</li>
                </ul>
            </div>
        </section>
        <div className="relative">
            <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-gray-50 dark:text-slate-800">
                <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
            <div className="container relative">
                <div className="lg:flex justify-center">
                    <div className="lg:w-2/3">
                        <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                            <form className="text-start">
                                <div className="grid grid-cols-1">
                                    <h5 className="text-lg font-semibold">Job Details:</h5>
                                </div>

                                <div className="grid grid-cols-12 gap-4 mt-4">
                                    <div className="col-span-12 text-start">
                                        <label className="font-semibold" htmlFor="RegisterName">Job Title:</label>
                                        <input id="RegisterName" type="text" className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Web Developer" />
                                    </div>

                                    <div className="col-span-12 text-start">
                                        <label htmlFor="comments" className="font-semibold">Job Description:</label>
                                        <textarea name="comments" id="comments" className="form-input mt-2 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Write Job Description :"></textarea>
                                    </div>

                                    <div className="md:col-span-6 col-span-12 text-start">
                                        <label className="font-semibold">Job Categories:</label>
                                        <select className="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0">
                                            <option value="WD">Web Designer</option>
                                            <option value="WD">Web Developer</option>
                                            <option value="UI">UI / UX Desinger</option>
                                        </select>
                                    </div>

                                    <div className="md:col-span-6 col-span-12 text-start">
                                        <label className="font-semibold">Job Type:</label>
                                        <select className="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0">
                                            <option value="FT">Full Time</option>
                                            <option value="PT">Part Time</option>
                                            <option value="WFH">Work From Home</option>
                                            <option value="RJ">Remote Job</option>
                                        </select>
                                    </div>

                                    <div className="md:col-span-6 col-span-12 text-start">
                                        <label className="font-semibold">Salary:</label>
                                        <select className="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0">
                                            <option value="HOURL">Hourly</option>
                                            <option value="MONTH">Monthly</option>
                                        </select>
                                    </div>

                                    <div className="md:col-span-3 col-span-12 text-start">
                                        <label className="font-semibold md:invisible md:block hidden">Min:</label>
                                        <div className="relative mt-1">
                                            <span className="absolute top-0.5 start-0.5 w-9 h-9 text-xl bg-gray-100 dark:bg-slate-800 inline-flex justify-center items-center text-dark dark:text-white rounded">
                                                <i className="mdi mdi-currency-usd text-indigo-600"></i>
                                            </span>
                                            <input type="number" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Min" name="minsalary" />
                                        </div>
                                    </div>

                                    <div className="md:col-span-3 col-span-12 text-start">
                                        <label className="font-semibold md:invisible md:block hidden">Max:</label>
                                        <div className="relative mt-1">
                                            <span className="absolute top-0.5 start-0.5 w-9 h-9 text-xl bg-gray-100 dark:bg-slate-800 inline-flex justify-center items-center text-dark dark:text-white rounded">
                                                <i className="mdi mdi-currency-usd text-indigo-600"></i>
                                            </span>
                                            <input type="number" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Max" name="maxsalary" />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 mt-8">
                                    <h5 className="text-lg font-semibold">Skill & Experience:</h5>
                                </div>

                                <div className="grid grid-cols-12 gap-4 mt-4">
                                    <div className="col-span-12 text-start">
                                        <label className="font-semibold" htmlFor="Skillname">Skills:</label>
                                        <input id="Skillname" type="text" className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Web Developer" />
                                    </div>

                                    <div className="md:col-span-6 col-span-12 text-start">
                                        <label className="font-semibold" htmlFor="Qualificationname">Qualifications:</label>
                                        <input id="Qualificationname" type="text" className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Qualifications" />
                                    </div>

                                    <div className="md:col-span-6 col-span-12 text-start">
                                        <label className="font-semibold" htmlFor="Experiencename">Experience:</label>
                                        <input id="Experiencename" type="text" className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Experience" />
                                    </div>

                                    <div className="md:col-span-6 col-span-12 text-start">
                                        <label className="font-semibold">Industry:</label>
                                        <select className="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0">
                                            <option value="BANK">Banking</option>
                                            <option value="BIO">Biotechnology</option>
                                            <option value="AVI">Aviation</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 mt-8">
                                    <h5 className="text-lg font-semibold">Address:</h5>
                                </div>

                                <div className="grid grid-cols-12 gap-4 mt-4">
                                    <div className="col-span-12 text-start">
                                        <label className="font-semibold" htmlFor="Address">Address:</label>
                                        <input id="Address" type="text" className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Address" />
                                    </div>

                                    <div className="md:col-span-4 col-span-12 text-start">
                                        <label className="font-semibold">Country:</label>
                                        <select className="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0">
                                            <option value="USA">USA</option>
                                            <option value="CAD">Canada</option>
                                            <option value="CHINA">China</option>
                                        </select>
                                    </div>

                                    <div className="md:col-span-4 col-span-12 text-start">
                                        <label className="font-semibold">State:</label>
                                        <select className="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0">
                                            <option value="CAL">California</option>
                                            <option value="TEX">Texas</option>
                                            <option value="FLOR">Florida</option>
                                        </select>
                                    </div>

                                    <div className="col-span-12 text-start">
                                        <div className="w-full leading-[0] border-0">
                                            <iframe title='google' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{ "border": 0 }} className="w-full h-[200px] rounded shadow" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-4 mt-4">
                                    <div>
                                        <button type="submit" id="submit" name="send" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center rounded-md bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white">Post Now</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </section >

        <JobFooter/>
        <Switcher/>
        </>
    )
}