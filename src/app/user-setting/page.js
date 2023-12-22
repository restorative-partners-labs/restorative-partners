import React from 'react'
import Image from "next/image"

import Navbar from '../componets/Navbar/navbar';
import Footer from '../componets/Footer/footer';
import Switcher from '../componets/switcher';
import AccountTab from '../componets/accountTab';

import * as Icon from 'react-feather';

export default function UserSetting(){
    return(
        <>
        <Navbar navClass="nav-light"/>
        <section className="relative lg:pb-24 pb-16">
            <div className="container-fluid relative">
                <div className="profile-banner relative text-transparent">
                    <input id="pro-banner" name="profile-banner" type="file" className="hidden"/>
                    <div className="relative shrink-0">
                        <Image src="/images/blog/bg.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="h-80 w-full object-cover" id="profile-banner" alt="" />
                        <div className="absolute inset-0 bg-black/70"></div>
                        <label className="absolute inset-0 cursor-pointer" htmlFor="pro-banner"></label>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="md:flex">
                    <div className="lg:w-1/4 md:w-1/3 md:px-3">
                        <div className="relative md:-mt-48 -mt-32">
                            <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                                <div className="profile-pic text-center mb-5">
                                    <input id="pro-img" name="profile-image" type="file" className="hidden"/>
                                    <div>
                                    <div className="relative h-28 w-28 mx-auto">
                                        <Image src="/images/client/05.jpg" width={112} height={112} className="rounded-full shadow dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800" id="profile-image" alt="" />
                                        <label className="absolute inset-0 cursor-pointer" htmlFor="pro-img"></label>
                                    </div>

                                    <div className="mt-4">
                                        <h5 className="text-lg font-semibold">Jenny Jimenez</h5>
                                        <p className="text-slate-400">jennyhot@hotmail.com</p>
                                    </div>
                                    </div>
                                </div>
                             <AccountTab/>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-3/4 md:w-2/3 md:px-3 mt-[30px] md:mt-0">
                    <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                        <h5 className="text-lg font-semibold mb-4">Personal Detail :</h5>
                        <form>
                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                            <div>
                            <label className="form-label font-medium">First Name : <span className="text-red-600">*</span></label>
                            <div className="form-icon relative mt-2">
                                <Icon.User className="w-4 h-4 absolute top-3 start-4"></Icon.User>
                                <input type="text" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="First Name:" id="firstname" name="name" required="" />
                            </div>
                            </div>
                            <div>
                            <label className="form-label font-medium">Last Name : <span className="text-red-600">*</span></label>
                            <div className="form-icon relative mt-2">
                                <Icon.UserCheck className="w-4 h-4 absolute top-3 start-4"></Icon.UserCheck>
                                <input type="text" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Last Name:" id="lastname" name="name" required="" />
                            </div>
                            </div>
                            <div>
                            <label className="form-label font-medium">Your Email : <span className="text-red-600">*</span></label>
                            <div className="form-icon relative mt-2">
                                <Icon.Mail className="w-4 h-4 absolute top-3 start-4"></Icon.Mail>
                                <input type="email" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Email" name="email" required="" />
                            </div>
                            </div>
                            <div>
                            <label className="form-label font-medium">Occupation : </label>
                            <div className="form-icon relative mt-2">
                                <Icon.Bookmark className="w-4 h-4 absolute top-3 start-4"></Icon.Bookmark>
                                <input name="name" id="occupation" type="text" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Occupation :" />
                            </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1">
                            <div className="mt-5">
                            <label className="form-label font-medium">Description : </label>
                            <div className="form-icon relative mt-2">
                                <Icon.MessageCircle className="w-4 h-4 absolute top-3 start-4"></Icon.MessageCircle>
                                <textarea name="comments" id="comments" className="form-input ps-11 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Message :"></textarea>
                            </div>
                            </div>
                        </div>

                        <input type="submit" id="submit" name="send" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5" value="Save Changes" />
                        </form>
                    </div>

                    <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 mt-[30px]">
                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                        <div>
                            <h5 className="text-lg font-semibold mb-4">Contact Info :</h5>

                            <form>
                            <div className="grid grid-cols-1 gap-5">
                                <div>
                                <label className="form-label font-medium">Phone No. :</label>
                                <div className="form-icon relative mt-2">
                                    <Icon.Phone className="w-4 h-4 absolute top-3 start-4"></Icon.Phone>
                                    <input name="number" id="number" type="number" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Phone :" />
                                </div>
                                </div>

                                <div>
                                <label className="form-label font-medium">Website :</label>
                                <div className="form-icon relative mt-2">
                                    <Icon.Phone className="w-4 h-4 absolute top-3 start-4"></Icon.Phone>
                                    <input name="url" id="url" type="url" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Url :" />
                                </div>
                                </div>
                            </div>

                            <button className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Add</button>
                            </form>
                        </div>

                        <div>
                            <h5 className="text-lg font-semibold mb-4">Change password :</h5>
                            <form>
                            <div className="grid grid-cols-1 gap-5">
                                <div>
                                <label className="form-label font-medium">Old password :</label>
                                <div className="form-icon relative mt-2">
                                    <Icon.Key className="w-4 h-4 absolute top-3 start-4"></Icon.Key>
                                    <input type="password" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Old password" required="" />
                                </div>
                                </div>

                                <div>
                                <label className="form-label font-medium">New password :</label>
                                <div className="form-icon relative mt-2">
                                    <Icon.Key className="w-4 h-4 absolute top-3 start-4"></Icon.Key>
                                    <input type="password" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="New password" required="" />
                                </div>
                                </div>

                                <div>
                                <label className="form-label font-medium">Re-type New password :</label>
                                <div className="form-icon relative mt-2">
                                    <Icon.Key className="w-4 h-4 absolute top-3 start-4"></Icon.Key>
                                    <input type="password" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Re-type New password" required="" />
                                </div>
                                </div>
                            </div>

                            <button className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Save password</button>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        <Switcher/>
        </>
    )
}