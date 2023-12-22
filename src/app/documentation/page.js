import React from 'react'
import Link from "next/link"

import Navbar from '../componets/Navbar/navbar';
import Footer from '../componets/Footer/footer';
import Switcher from '../componets/switcher';

import {MdKeyboardArrowRight} from "../assets/icons/icons"

export default function Documentation(){
    return(
        <>
            <Navbar />
            <section className="relative table w-full py-32 lg:py-40 bg-gray-50 dark:bg-slate-800">
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="text-3xl leading-normal font-semibold">Documentation</h3>
                    </div>
                </div>

                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="tracking-[0.5px] mb-0 inline-flex space-x-1">
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600"><Link href="/">Techwind</Link></li>
                        <li className="inline-block text-base mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-indigo-600"aria-current="page">Documentation</li>
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
                    <div className="grid grid-cols-1 items-center gap-[30px]">
                        <div>
                            <h4 className="text-3xl font-semibold mb-4">Introduction</h4>

                            <p className="text-slate-400 text-base leading-8"><strong>Techwind</strong> is a fully responsive, clean and modern high-converting Next Js landing page template. It is a beautifully handcrafted, pixel perfect HTML5 landing page template based on the <b>Next 13.x., React 18.X and Tailwind css v3.x.</b>. Techwind is a Powerful Next Js Multipurpose Landing Page Template. It is an excellent template for startup, cloud hosting, business, corporate, minimal portfolio single product (Smartwatch) , Saas, Social media marketing, Digital marketing/agency, Email Templates, Marketing, Agency, Careers and Jobs, Helpcenter, and much more.</p>
							<p className="text-slate-400 text-base leading-8 font-semibold mt-2">Dark & RTL version Available: We have added a RTL version in both Dark and Light versions.</p>
                        </div>

                        <div>
                            <h4 className="text-3xl font-semibold mb-4">Setup Next Js</h4>

                            <h5 className="text-xl font-semibold mb-4">Introduction</h5>
                            <p className="text-slate-400 text-base leading-8">We are using npm which allows having
                                complete automation for build flow. In case if you dont know npm then its easy to use
                                it. You can read it
                                more about it here. Please follow below steps to install and setup all
                                prerequisites:</p>

                            <h5 className="text-xl font-semibold my-4">Prerequisites</h5>
                            <p className="text-slate-400 text-base leading-8">Please follow below steps to install and setup all prerequisites:
                            </p>

                            <ul className="list-unstyled mt-3">

                                <li className="flex">
                                    <i className="mdi mdi-arrow-right"></i>
                                    <div className="ml-2">
                                        <h6>Nodejs</h6>
                                        <p className="text-slate-400 text-base leading-8">Make sure to have the <Link href="https://nodejs.org/"
                                                className="text-indigo-600 font-semibold mx-2" target="_blank">Node.js</Link>
                                            installed & running in your computer. If you already have installed Node on
                                            your computer, you can skip this step if your existing node version is
                                            greater than 16.</p>
                                    </div>
                                </li>

                                <li className="flex">
                                    <i className="mdi mdi-arrow-right"></i>
                                    <div className="ml-2">
                                        <h6>Git</h6>
                                        <p className="text-slate-400 text-base leading-8">Make sure to have the <Link href="https://git-scm.com/"
                                                className="text-indigo-600 font-semibold mx-2" target="_blank">Git</Link> installed
                                            globally & running on your computer. If you already have installed git on
                                            your computer, you can skip this step.</p>
                                    </div>
                                </li>
                            </ul>

                            <h5 className="text-xl font-semibold my-4">Installation</h5>
                            <p className="text-slate-400 text-base leading-8">To setup the admin theme, follow below-mentioned steps:</p>

                            <ul className="list-unstyled mt-3">
                                <li className="flex">
                                    <i className="mdi mdi-arrow-right"></i>
                                    <div className="ml-2">
                                        <h6>Install Prerequisites</h6>
                                        <p className="text-slate-400 text-base leading-8">Make sure to have all above prerequisites installed &
                                            running on your computer</p>
                                    </div>
                                </li>
                            </ul>

                            <p className="text-slate-400 text-base leading-8 mb-4">After you finished with the above steps, you can run the
                                following commands into the terminal / command prompt from the root directory of the
                                project to run the project locally or build for production use:</p>

                            <div className="relative overflow-x-auto shadow dark:shadow-gray-800 rounded-md mt-6">
                                <table className="w-full text-start text-slate-500 dark:text-slate-400">
                                    <thead className="text-sm uppercase bg-slate-50 dark:bg-slate-800">
                                        <tr>
                                            <th className="w-2/3 px-6 py-3 text-start"><i className="ti-file"></i> Command</th>
                                            <th className="px-6 py-3 text-start">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="px-6 py-4 border-t">
                                                <code className="text-red-600">npm install</code>
                                            </td>
                                            <td className="px-6 py-4 border-t">
                                                This would install all the required dependencies in the
                                                <code className="text-red-600 mx-2">node_modules</code> folder.
                                            </td>
                                        </tr>
    
                                        <tr>
                                            <td className="px-6 py-4 border-t">
                                                <code className="text-red-600">npm run dev</code>
                                            </td>
                                            <td className="px-6 py-4 border-t">
                                                Runs the project locally, starts the development server and watches for any
                                                changes in your code, including your HTML, javascript, sass, etc. The
                                                development server is accessible at <Link href="http://localhost:3000"
                                                    className="text-indigo-600 font-semibold mx-2"
                                                    target="_blank">http://localhost:3000</Link>.
                                            </td>
                                        </tr>
    
                                        <tr>
                                            <td className="px-6 py-4 border-t">
                                                <code className="text-red-600">npm run build</code>
                                            </td>
                                            <td className="px-6 py-4 border-t">
                                                Generates a <code className="text-red-600 mx-2">.next</code> directory with all the production files.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <Footer />
            <Switcher/>
        </>
    )
}