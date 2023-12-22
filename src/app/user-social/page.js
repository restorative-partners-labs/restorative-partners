import React from 'react'
import Image from "next/image"

import Navbar from '../componets/Navbar/navbar';
import Footer from '../componets/Footer/footer';
import Switcher from '../componets/switcher';
import AccountTab from '../componets/accountTab';

import * as Icon from 'react-feather';

export default function UserSocial(){
  
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
                        <input id="pro-img" name="profile-image" type="file" className="hidden"  />
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
                <div className="rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 mt-[30px]">
                    <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                    <h5 className="text-lg font-semibold">Social Profiles :</h5>
                    </div>

                    <div className="p-6">
                    <div className="md:flex">
                        <div className="md:w-1/3">
                        <span className="font-medium">Twitter</span>
                        </div>

                        <div className="md:w-2/3 mt-4 md:mt-0">
                        <form>
                            <div className="form-icon relative">
                            <Icon.Twitter className="w-4 h-4 absolute top-3 start-4"></Icon.Twitter>
                            <input type="text" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Twitter Profile Name" id="twitter_name" name="name" required="" />
                            </div>
                        </form>

                        <p className="text-slate-400 mt-1">Add your Twitter username (e.g. jennyhot).</p>
                        </div>
                    </div>

                    <div className="md:flex mt-8">
                        <div className="md:w-1/3">
                        <span className="font-medium">Facebook</span>
                        </div>

                        <div className="md:w-2/3 mt-4 md:mt-0">
                        <form>
                            <div className="form-icon relative">
                            <Icon.Facebook className="w-4 h-4 absolute top-3 start-4"></Icon.Facebook>
                            <input type="text" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Facebook Profile Name" id="facebook_name" name="name" required="" />
                            </div>
                        </form>

                        <p className="text-slate-400 mt-1">Add your Facebook username (e.g. jennyhot).</p>
                        </div>
                    </div>

                    <div className="md:flex mt-8">
                        <div className="md:w-1/3">
                        <span className="font-medium">Instagram</span>
                        </div>

                        <div className="md:w-2/3 mt-4 md:mt-0">
                        <form>
                            <div className="form-icon relative">
                            <Icon.Instagram className="w-4 h-4 absolute top-3 start-4"></Icon.Instagram>
                            <input type="text" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Instagram Profile Name" id="insta_name" name="name" required="" />
                            </div>
                        </form>

                        <p className="text-slate-400 mt-1">Add your Instagram username (e.g. jennyhot).</p>
                        </div>
                    </div>

                    <div className="md:flex mt-8">
                        <div className="md:w-1/3">
                        <span className="font-medium">Linkedin</span>
                        </div>

                        <div className="md:w-2/3 mt-4 md:mt-0">
                        <form>
                            <div className="form-icon relative">
                            <Icon.Linkedin className="w-4 h-4 absolute top-3 start-4"></Icon.Linkedin>
                            <input type="text" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Linkedin Profile Name" id="linkedin_name" name="name" required="" />
                            </div>
                        </form>

                        <p className="text-slate-400 mt-1">Add your Linkedin username.</p>
                        </div>
                    </div>

                    <div className="md:flex mt-8">
                        <div className="md:w-1/3">
                        <span className="font-medium">Youtube</span>
                        </div>

                        <div className="md:w-2/3 mt-4 md:mt-0">
                        <form>
                            <div className="form-icon relative">
                            <Icon.Youtube className="w-4 h-4 absolute top-3 start-4"></Icon.Youtube>
                            <input type="url" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Youtube url" id="you_url" name="url" required="" />
                            </div>
                        </form>

                        <p className="text-slate-400 mt-1">Add your Youtube url.</p>
                        </div>
                    </div>

                    <div className="md:flex">
                        <div className="md:w-1/3">
                        <span className="font-medium"></span>
                        <button className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Save Social Profile</button>
                        </div>
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